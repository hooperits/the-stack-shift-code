// EN: Entry point for the CMS CLI application
// ES: Punto de entrada para la aplicación CLI del CMS
// Chapter/Capítulo 5: Programación Asíncrona

// EN: Import the Post model and factory from post.js
// ES: Importar el modelo Post y factory desde post.js
import { createPost } from './post.js';

// EN: Import validation functions from validate.js (Chapter 3)
// ES: Importar funciones de validación desde validate.js (Capítulo 3)
import { validatePost } from './validate.js';

// EN: Import collection functions from posts.js (Chapter 4 & 5)
// ES: Importar funciones de colección desde posts.js (Capítulo 4 y 5)
import {
  initializePosts,
  getAllPosts,
  addPost,
  getPostsByStatus,
  getPostsByAuthor,
  getPostTitles,
  getPostPreviews,
  countPostsByStatus,
  searchPosts,
  sortPostsBy,
  validateAllPosts,
  hasInvalidPosts,
  areAllPublished,
  initializeSampleData
} from './posts.js';

// EN: Main async function - Chapter 5 pattern
// ES: Función principal async - patrón del Capítulo 5
async function main() {
  console.log('='.repeat(50));
  console.log('  CMS CLI - The Stack Shift');
  console.log('  Capítulo 5: Programación Asíncrona');
  console.log('='.repeat(50));
  console.log('');
  console.log(`Ejecutando en Node.js ${process.version}`);
  console.log('');

  // EN: Initialize posts from storage file
  // ES: Inicializar posts desde archivo de almacenamiento
  console.log('--- Cargando Posts desde Archivo ---');
  const loadedPosts = await initializePosts();
  console.log(`Cargados ${loadedPosts.length} posts desde almacenamiento`);
  console.log('');

  // EN: If no posts exist, initialize with sample data
  // ES: Si no hay posts, inicializar con datos de ejemplo
  if (loadedPosts.length === 0) {
    console.log('--- Inicializando con Datos de Ejemplo ---');
    initializeSampleData();

    // EN: Save sample data to file by adding each post
    // ES: Guardar datos de ejemplo en archivo agregando cada post
    const samplePosts = getAllPosts();
    for (const post of samplePosts) {
      // EN: Note: addPost already saves to file in Chapter 5
      // ES: Nota: addPost ya guarda en archivo en el Capítulo 5
    }
    console.log(`Creados ${samplePosts.length} posts de ejemplo`);
    console.log('');
  }

  // ============================================
  // EN: Collection Overview
  // ES: Vista general de la colección
  // ============================================

  console.log('--- Resumen de Colección ---');
  const allPosts = getAllPosts();
  console.log(`Total de posts: ${allPosts.length}`);
  console.log('');

  // EN: Show posts by status using countPostsByStatus()
  // ES: Mostrar posts por status usando countPostsByStatus()
  console.log('--- Posts por Status ---');
  const counts = countPostsByStatus();
  console.log(`  Borradores: ${counts.draft}`);
  console.log(`  Publicados: ${counts.published}`);
  console.log(`  Archivados: ${counts.archived}`);
  console.log('');

  // ============================================
  // EN: Query Examples
  // ES: Ejemplos de Consultas
  // ============================================

  // EN: Get all titles using map()
  // ES: Obtener todos los títulos usando map()
  console.log('--- Títulos (map) ---');
  getPostTitles().forEach((title, i) => {
    console.log(`  ${i + 1}. ${title}`);
  });
  console.log('');

  // EN: Filter by status using filter()
  // ES: Filtrar por status usando filter()
  console.log('--- Posts Publicados (filter) ---');
  const published = getPostsByStatus('published');
  published.forEach(post => {
    console.log(`  - ${post.title} (${post.views} views)`);
  });
  console.log('');

  // EN: Filter by author
  // ES: Filtrar por autor
  console.log('--- Posts de María García (filter) ---');
  const marias = getPostsByAuthor('María García');
  marias.forEach(post => {
    console.log(`  - ${post.title} [${post.status}]`);
  });
  console.log('');

  // ============================================
  // EN: Search and Sort
  // ES: Búsqueda y Ordenamiento
  // ============================================

  // EN: Search posts
  // ES: Buscar posts
  console.log('--- Búsqueda: "docker" ---');
  const dockerPosts = searchPosts('docker');
  if (dockerPosts.length > 0) {
    dockerPosts.forEach(post => {
      console.log(`  - ${post.title}`);
    });
  } else {
    console.log('  No se encontraron resultados');
  }
  console.log('');

  // EN: Sort by views descending
  // ES: Ordenar por views descendente
  console.log('--- Top Posts por Views ---');
  const topPosts = sortPostsBy('views', 'desc');
  topPosts.slice(0, 3).forEach((post, i) => {
    console.log(`  ${i + 1}. ${post.title} (${post.views} views)`);
  });
  console.log('');

  // ============================================
  // EN: Persistence Demo (Chapter 5)
  // ES: Demo de Persistencia (Capítulo 5)
  // ============================================

  console.log('--- Persistencia: Agregando Nuevo Post ---');
  const newPost = createPost(
    `Post creado el ${new Date().toLocaleTimeString()}`,
    'Este post se guardará en el archivo posts.json y persistirá entre reinicios del programa. Cada ejecución agrega un nuevo post.',
    'Sistema CMS'
  );

  // EN: Validate before adding
  // ES: Validar antes de agregar
  const newPostValidation = validatePost(newPost);
  if (newPostValidation.valid) {
    await addPost(newPost);
    console.log(`  ✓ Post "${newPost.title}" agregado y guardado`);
    console.log(`  Total de posts: ${getAllPosts().length}`);
  } else {
    console.log(`  ✗ Post inválido:`, newPostValidation.errors);
  }
  console.log('');

  // ============================================
  // EN: Validation
  // ES: Validación
  // ============================================

  console.log('--- Validación de Colección ---');
  console.log(`  ¿Tiene posts inválidos? ${hasInvalidPosts() ? 'Sí' : 'No'}`);
  console.log(`  ¿Todos publicados? ${areAllPublished() ? 'Sí' : 'No'}`);
  console.log('');

  // EN: Final count
  // ES: Conteo final
  console.log('--- Conteo Final ---');
  console.log(countPostsByStatus());
  console.log('');

  console.log('='.repeat(50));
  console.log('  ✓ Posts guardados en ./data/posts.json');
  console.log('  Ejecuta de nuevo para ver la persistencia');
  console.log('='.repeat(50));
}

// EN: Run the main function and handle errors
// ES: Ejecutar la función principal y manejar errores
main().catch(error => {
  console.error('Error en la aplicación:', error.message);
  process.exit(1);
});
