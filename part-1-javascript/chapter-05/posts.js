// EN: Collection management functions for the CMS
// ES: Funciones de gestión de colección para el CMS
// Chapter/Capítulo 4: Arrays y Objetos
// Updated/Actualizado: Chapter 5 - Async persistence

import { createPost } from './post.js';
import { validatePost } from './validate.js';
import { loadPosts as loadFromFile, savePosts as saveToFile } from './storage.js';

// EN: Private collection - stores all posts in memory
// ES: Colección privada - almacena todos los posts en memoria
let posts = [];

// EN: Track if posts have been loaded from file
// ES: Rastrear si los posts han sido cargados desde archivo
let initialized = false;

// ============================================
// EN: Initialization (Chapter 5 - Async)
// ES: Inicialización (Capítulo 5 - Async)
// ============================================

// EN: Load posts from storage file on startup
// ES: Cargar posts desde archivo de almacenamiento al iniciar
async function initializePosts() {
  if (!initialized) {
    posts = await loadFromFile();
    initialized = true;
  }
  return posts;
}

// ============================================
// EN: Query Functions (Read-Only)
// ES: Funciones de Consulta (Solo Lectura)
// ============================================

// EN: Get all posts in the collection
// ES: Obtener todos los posts de la colección
function getAllPosts() {
  return posts;
}

// EN: Find a post by ID using find()
// ES: Buscar un post por ID usando find()
function getPostById(id) {
  return posts.find(post => post.id === id);
}

// EN: Get all posts with a specific status using filter()
// ES: Obtener todos los posts con un status específico usando filter()
function getPostsByStatus(status) {
  return posts.filter(post => post.status === status);
}

// EN: Get all posts by a specific author using filter()
// ES: Obtener todos los posts de un autor específico usando filter()
function getPostsByAuthor(authorName) {
  return posts.filter(post => post.author.name === authorName);
}

// EN: Get an array of all post titles using map()
// ES: Obtener un array de todos los títulos usando map()
function getPostTitles() {
  return posts.map(post => post.title);
}

// EN: Get preview versions of all posts using map()
// ES: Obtener versiones preview de todos los posts usando map()
function getPostPreviews() {
  return posts.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.content.substring(0, 100) + '...',
    status: post.status,
    authorName: post.author.name
  }));
}

// EN: Count posts by status using reduce()
// ES: Contar posts por status usando reduce()
function countPostsByStatus() {
  return posts.reduce((counts, post) => {
    counts[post.status] = (counts[post.status] || 0) + 1;
    return counts;
  }, { draft: 0, published: 0, archived: 0 });
}

// ============================================
// EN: Mutation Functions (Modify Collection)
// ES: Funciones de Mutación (Modifican Colección)
// ============================================

// EN: Add a new post to the collection (immutable pattern)
// ES: Agregar un nuevo post a la colección (patrón inmutable)
// Updated/Actualizado: Chapter 5 - Now persists to file
async function addPost(post) {
  posts = [...posts, post];
  await saveToFile(posts);
  return post;
}

// EN: Update a post by ID using map() and spread (immutable)
// ES: Actualizar un post por ID usando map() y spread (inmutable)
// Updated/Actualizado: Chapter 5 - Now persists to file
async function updatePost(id, updates) {
  const index = posts.findIndex(post => post.id === id);
  if (index === -1) return undefined;

  // EN: Create new array with updated post
  // ES: Crear nuevo array con el post actualizado
  posts = posts.map((post, i) =>
    i === index
      ? { ...post, ...updates, updatedAt: new Date().toISOString() }
      : post
  );
  await saveToFile(posts);
  return posts[index];
}

// EN: Remove a post by ID using filter() (immutable)
// ES: Remover un post por ID usando filter() (inmutable)
// Updated/Actualizado: Chapter 5 - Now persists to file
async function removePost(id) {
  const post = getPostById(id);
  if (!post) return undefined;

  posts = posts.filter(p => p.id !== id);
  await saveToFile(posts);
  return post;
}

// ============================================
// EN: Validation Functions
// ES: Funciones de Validación
// ============================================

// EN: Validate all posts in the collection using map()
// ES: Validar todos los posts de la colección usando map()
function validateAllPosts() {
  return posts.map(post => ({
    postId: post.id,
    ...validatePost(post)
  }));
}

// EN: Check if collection has any invalid posts using some()
// ES: Verificar si la colección tiene posts inválidos usando some()
function hasInvalidPosts() {
  return posts.some(post => !validatePost(post).valid);
}

// EN: Check if all posts are published using every()
// ES: Verificar si todos los posts están publicados usando every()
function areAllPublished() {
  return posts.every(post => post.status === 'published');
}

// ============================================
// EN: Utility Functions
// ES: Funciones de Utilidad
// ============================================

// EN: Search posts by text in title or content (case-insensitive)
// ES: Buscar posts por texto en título o contenido (sin distinguir mayúsculas)
function searchPosts(query) {
  const lowerQuery = query.toLowerCase();
  return posts.filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.content.toLowerCase().includes(lowerQuery)
  );
}

// EN: Get posts sorted by a field (immutable - returns new array)
// ES: Obtener posts ordenados por un campo (inmutable - retorna nuevo array)
function sortPostsBy(field, order = 'asc') {
  const sorted = [...posts].sort((a, b) => {
    let valueA = a[field];
    let valueB = b[field];

    // EN: Handle nested author.name field
    // ES: Manejar campo anidado author.name
    if (field === 'authorName') {
      valueA = a.author.name;
      valueB = b.author.name;
    }

    // EN: String comparison
    // ES: Comparación de strings
    if (typeof valueA === 'string') {
      return order === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    // EN: Numeric comparison
    // ES: Comparación numérica
    return order === 'asc' ? valueA - valueB : valueB - valueA;
  });

  return sorted;
}

// EN: Initialize collection with sample data for demo
// ES: Inicializar colección con datos de ejemplo para demo
function initializeSampleData() {
  // EN: Clear existing posts
  // ES: Limpiar posts existentes
  posts = [];

  // EN: Add sample posts with different statuses
  // ES: Agregar posts de ejemplo con diferentes estados
  const post1 = createPost(
    'Introducción a Kubernetes para Sysadmins',
    'Si administras servidores, Kubernetes cambiará tu forma de trabajar. En este artículo exploramos los conceptos fundamentales de orquestación de contenedores.',
    'María García'
  );
  post1.status = 'published';
  post1.views = 245;

  const post2 = createPost(
    'Migrando de VMware a Proxmox',
    'La virtualización open source ha madurado significativamente. Aquí te mostramos cómo migrar tus VMs sin downtime y reducir costos de licenciamiento.',
    'Carlos Rodríguez'
  );
  post2.status = 'published';
  post2.views = 189;

  const post3 = createPost(
    'Automatización con Ansible',
    'Deja de hacer tareas repetitivas manualmente. Ansible te permite automatizar la configuración de cientos de servidores con playbooks declarativos.',
    'Ana Martínez'
  );
  post3.status = 'draft';
  post3.views = 0;

  const post4 = createPost(
    'Docker para el Administrador de Sistemas',
    'Los contenedores no son solo para desarrolladores. Aprende a usar Docker para simplificar tu infraestructura y mejorar la consistencia entre ambientes.',
    'María García'
  );
  post4.status = 'published';
  post4.views = 312;

  const post5 = createPost(
    'Monitoreo con Prometheus y Grafana',
    'Configura un stack de monitoreo profesional que te avise antes de que los usuarios reporten problemas. Dashboards hermosos y alertas inteligentes.',
    'Carlos Rodríguez'
  );
  post5.status = 'draft';
  post5.views = 0;

  // EN: Add all posts to collection
  // ES: Agregar todos los posts a la colección
  [post1, post2, post3, post4, post5].forEach(addPost);
}

// ============================================
// EN: Export all functions
// ES: Exportar todas las funciones
// ============================================

export {
  // EN: Initialization (Chapter 5)
  // ES: Inicialización (Capítulo 5)
  initializePosts,

  // EN: Query functions
  // ES: Funciones de consulta
  getAllPosts,
  getPostById,
  getPostsByStatus,
  getPostsByAuthor,
  getPostTitles,
  getPostPreviews,
  countPostsByStatus,

  // EN: Mutation functions (now async - Chapter 5)
  // ES: Funciones de mutación (ahora async - Capítulo 5)
  addPost,
  updatePost,
  removePost,

  // EN: Validation functions
  // ES: Funciones de validación
  validateAllPosts,
  hasInvalidPosts,
  areAllPublished,

  // EN: Utility functions
  // ES: Funciones de utilidad
  searchPosts,
  sortPostsBy,
  initializeSampleData
};

// ============================================
// EN: Test code - runs when file is executed directly
// ES: Código de prueba - se ejecuta cuando el archivo se ejecuta directamente
// ============================================

// EN: Check if this file is being run directly (not imported)
// ES: Verificar si este archivo se ejecuta directamente (no importado)
import { fileURLToPath } from 'url';
const isMainModule = process.argv[1] === fileURLToPath(import.meta.url);

if (isMainModule) {
  console.log('='.repeat(50));
  console.log('  Colección de Posts - The Stack Shift');
  console.log('  Capítulo 4: Arrays y Objetos');
  console.log('='.repeat(50));
  console.log('');

  // EN: Initialize with sample data
  // ES: Inicializar con datos de ejemplo
  initializeSampleData();

  console.log('--- getAllPosts() ---');
  console.log(`Total: ${getAllPosts().length} posts`);
  console.log('');

  console.log('--- getPostTitles() ---');
  getPostTitles().forEach((title, i) => console.log(`${i + 1}. ${title}`));
  console.log('');

  console.log('--- getPostsByStatus("published") ---');
  const published = getPostsByStatus('published');
  console.log(`Publicados: ${published.length}`);
  published.forEach(p => console.log(`  - ${p.title}`));
  console.log('');

  console.log('--- getPostsByAuthor("María García") ---');
  const marias = getPostsByAuthor('María García');
  console.log(`Posts de María: ${marias.length}`);
  marias.forEach(p => console.log(`  - ${p.title}`));
  console.log('');

  console.log('--- countPostsByStatus() ---');
  console.log(countPostsByStatus());
  console.log('');

  console.log('--- getPostPreviews() ---');
  const previews = getPostPreviews();
  console.log('Previews:');
  previews.forEach(p => console.log(`  [${p.status}] ${p.title} - ${p.authorName}`));
  console.log('');

  console.log('--- searchPosts("kubernetes") ---');
  const results = searchPosts('kubernetes');
  console.log(`Encontrados: ${results.length}`);
  results.forEach(p => console.log(`  - ${p.title}`));
  console.log('');

  console.log('--- sortPostsBy("views", "desc") ---');
  const byViews = sortPostsBy('views', 'desc');
  byViews.forEach(p => console.log(`  ${p.views} views - ${p.title}`));
  console.log('');

  console.log('--- hasInvalidPosts() ---');
  console.log(`¿Tiene posts inválidos? ${hasInvalidPosts()}`);
  console.log('');

  console.log('--- areAllPublished() ---');
  console.log(`¿Todos publicados? ${areAllPublished()}`);
  console.log('');

  console.log('='.repeat(50));
}
