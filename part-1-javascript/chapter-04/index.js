// EN: Entry point for the CMS CLI application
// ES: Punto de entrada para la aplicación CLI del CMS
// Chapter/Capítulo 4: Arrays y Objetos

// EN: Import the Post model and factory from post.js
// ES: Importar el modelo Post y factory desde post.js
import { createPost } from './post.js';

// EN: Import validation functions from validate.js (Chapter 3)
// ES: Importar funciones de validación desde validate.js (Capítulo 3)
import { validatePost } from './validate.js';

// EN: Import collection functions from posts.js (Chapter 4)
// ES: Importar funciones de colección desde posts.js (Capítulo 4)
import {
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

console.log('='.repeat(50));
console.log('  CMS CLI - The Stack Shift');
console.log('  Capítulo 4: Arrays y Objetos');
console.log('='.repeat(50));
console.log('');
console.log(`Ejecutando en Node.js ${process.version}`);
console.log('');

// EN: Initialize collection with sample data
// ES: Inicializar colección con datos de ejemplo
initializeSampleData();

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
// EN: Preview Objects
// ES: Objetos Preview
// ============================================

console.log('--- Previews (map transform) ---');
const previews = getPostPreviews();
previews.slice(0, 2).forEach(preview => {
  console.log(`  [${preview.status.toUpperCase()}] ${preview.title}`);
  console.log(`    Por: ${preview.authorName}`);
  console.log(`    ${preview.excerpt.substring(0, 60)}...`);
  console.log('');
});

// ============================================
// EN: Validation
// ES: Validación
// ============================================

console.log('--- Validación de Colección ---');
console.log(`  ¿Tiene posts inválidos? ${hasInvalidPosts() ? 'Sí' : 'No'}`);
console.log(`  ¿Todos publicados? ${areAllPublished() ? 'Sí' : 'No'}`);
console.log('');

// EN: Validate all posts and show results
// ES: Validar todos los posts y mostrar resultados
console.log('--- Resultado de Validación ---');
const validation = validateAllPosts();
const validCount = validation.filter(r => r.valid).length;
const invalidCount = validation.filter(r => !r.valid).length;
console.log(`  Válidos: ${validCount}`);
console.log(`  Inválidos: ${invalidCount}`);
console.log('');

// ============================================
// EN: Creating a New Post
// ES: Creando un Nuevo Post
// ============================================

console.log('--- Agregando Nuevo Post ---');
const newPost = createPost(
  'Seguridad en Kubernetes: Best Practices',
  'La seguridad en Kubernetes es fundamental. En este artículo cubrimos RBAC, Network Policies, Pod Security Standards y más.',
  'Ana Martínez'
);

// EN: Validate before adding
// ES: Validar antes de agregar
const newPostValidation = validatePost(newPost);
if (newPostValidation.valid) {
  addPost(newPost);
  console.log(`  ✓ Post "${newPost.title}" agregado`);
  console.log(`  Total de posts: ${getAllPosts().length}`);
} else {
  console.log(`  ✗ Post inválido:`, newPostValidation.errors);
}
console.log('');

// EN: Final count
// ES: Conteo final
console.log('--- Conteo Final ---');
console.log(countPostsByStatus());
console.log('');
console.log('='.repeat(50));
