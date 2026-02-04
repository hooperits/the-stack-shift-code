// commands.js - Command handlers for the CMS CLI
// commands.js - Manejadores de comandos para la CLI del CMS
// Chapter/Capítulo 6: Proyecto CLI del CMS

import { createPost } from './post.js';
import { validatePost } from './validate.js';
import {
  getAllPosts,
  getPostById,
  addPost,
  updatePost,
  removePost,
  searchPosts
} from './posts.js';
import {
  displayPostList,
  displayPostDetail,
  displaySuccess,
  displayError,
  displayWarning
} from './cli.js';

// ============================================
// EN: List Posts Command
// ES: Comando Listar Posts
// ============================================

async function listPostsCommand() {
  const posts = getAllPosts();
  displayPostList(posts);
}

// ============================================
// EN: View Post Command
// ES: Comando Ver Post
// ============================================

async function viewPostCommand(prompt) {
  const posts = getAllPosts();

  if (posts.length === 0) {
    displayWarning('No hay posts para mostrar.');
    return;
  }

  displayPostList(posts);
  console.log('');
  const input = await prompt.question('  Número del post a ver (0 para cancelar): ');

  const num = parseInt(input, 10);
  if (num === 0 || isNaN(num)) {
    return;
  }

  if (num < 1 || num > posts.length) {
    displayError('Número de post inválido.');
    return;
  }

  const post = posts[num - 1];
  displayPostDetail(post);
}

// ============================================
// EN: Create Post Command
// ES: Comando Crear Post
// ============================================

async function createPostCommand(prompt) {
  console.log('');
  console.log('  --- Crear Nuevo Post ---');
  console.log('');

  // EN: Get title
  // ES: Obtener título
  const title = await prompt.question('  Título: ');
  if (!title.trim()) {
    displayError('El título no puede estar vacío.');
    return;
  }

  // EN: Get content
  // ES: Obtener contenido
  console.log('  Contenido (mínimo 50 caracteres):');
  const content = await prompt.question('  > ');
  if (!content.trim()) {
    displayError('El contenido no puede estar vacío.');
    return;
  }

  // EN: Get author name
  // ES: Obtener nombre del autor
  const authorName = await prompt.question('  Nombre del autor: ');
  if (!authorName.trim()) {
    displayError('El nombre del autor no puede estar vacío.');
    return;
  }

  // EN: Create post object
  // ES: Crear objeto post
  const newPost = createPost(title.trim(), content.trim(), authorName.trim());

  // EN: Validate before saving
  // ES: Validar antes de guardar
  const validation = validatePost(newPost);

  if (!validation.valid) {
    console.log('');
    displayError('El post tiene errores de validación:');
    validation.errors.forEach(error => {
      console.log(`    - ${error}`);
    });
    return;
  }

  // EN: Save post
  // ES: Guardar post
  await addPost(newPost);
  console.log('');
  displaySuccess(`Post "${newPost.title}" creado exitosamente.`);
}

// ============================================
// EN: Change Status Command
// ES: Comando Cambiar Status
// ============================================

async function changeStatusCommand(prompt) {
  const posts = getAllPosts();

  if (posts.length === 0) {
    displayWarning('No hay posts para modificar.');
    return;
  }

  displayPostList(posts);
  console.log('');
  const input = await prompt.question('  Número del post a modificar (0 para cancelar): ');

  const num = parseInt(input, 10);
  if (num === 0 || isNaN(num)) {
    return;
  }

  if (num < 1 || num > posts.length) {
    displayError('Número de post inválido.');
    return;
  }

  const post = posts[num - 1];

  console.log('');
  console.log(`  Post actual: "${post.title}"`);
  console.log(`  Status actual: ${post.status}`);
  console.log('');
  console.log('  Opciones de status:');
  console.log('    1. draft');
  console.log('    2. published');
  console.log('    3. archived');
  console.log('');

  const statusInput = await prompt.question('  Nuevo status (1-3): ');
  const statusNum = parseInt(statusInput, 10);

  const statusMap = { 1: 'draft', 2: 'published', 3: 'archived' };
  const newStatus = statusMap[statusNum];

  if (!newStatus) {
    displayError('Opción de status inválida.');
    return;
  }

  if (newStatus === post.status) {
    displayWarning('El post ya tiene ese status.');
    return;
  }

  await updatePost(post.id, { status: newStatus });
  console.log('');
  displaySuccess(`Status cambiado de "${post.status}" a "${newStatus}".`);
}

// ============================================
// EN: Search Posts Command
// ES: Comando Buscar Posts
// ============================================

async function searchPostsCommand(prompt) {
  console.log('');
  const query = await prompt.question('  Buscar: ');

  if (!query.trim()) {
    displayError('El término de búsqueda no puede estar vacío.');
    return;
  }

  const results = searchPosts(query.trim());

  console.log('');
  console.log(`  Resultados para "${query}":`);
  displayPostList(results);
}

// ============================================
// EN: Delete Post Command
// ES: Comando Eliminar Post
// ============================================

async function deletePostCommand(prompt) {
  const posts = getAllPosts();

  if (posts.length === 0) {
    displayWarning('No hay posts para eliminar.');
    return;
  }

  displayPostList(posts);
  console.log('');
  const input = await prompt.question('  Número del post a eliminar (0 para cancelar): ');

  const num = parseInt(input, 10);
  if (num === 0 || isNaN(num)) {
    return;
  }

  if (num < 1 || num > posts.length) {
    displayError('Número de post inválido.');
    return;
  }

  const post = posts[num - 1];

  console.log('');
  displayWarning(`¿Eliminar "${post.title}"?`);
  console.log('  Esta acción no se puede deshacer.');
  console.log('');

  const confirm = await prompt.question('  Escribe "yes" o "sí" para confirmar: ');

  if (confirm.toLowerCase() !== 'yes' && confirm.toLowerCase() !== 'sí') {
    console.log('');
    displayWarning('Eliminación cancelada.');
    return;
  }

  await removePost(post.id);
  console.log('');
  displaySuccess(`Post "${post.title}" eliminado.`);
}

export {
  listPostsCommand,
  viewPostCommand,
  createPostCommand,
  changeStatusCommand,
  searchPostsCommand,
  deletePostCommand
};
