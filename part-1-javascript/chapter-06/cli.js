// cli.js - Interface utilities for the CMS CLI
// cli.js - Utilidades de interfaz para la CLI del CMS
// Chapter/Capítulo 6: Proyecto CLI del CMS

import readline from 'readline';

// EN: Create a readline interface and return promise-based question function
// ES: Crear una interfaz readline y retornar función question basada en promesas
function createPrompt() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // EN: Wrap readline.question in a Promise for async/await usage
  // ES: Envolver readline.question en una Promise para uso con async/await
  const question = (prompt) => new Promise(resolve => {
    rl.question(prompt, resolve);
  });

  // EN: Close the readline interface
  // ES: Cerrar la interfaz readline
  const close = () => rl.close();

  return { question, close };
}

// EN: Display the main menu options
// ES: Mostrar las opciones del menú principal
function displayMenu() {
  console.log('');
  console.log('='.repeat(40));
  console.log('  CMS CLI - Menú Principal');
  console.log('='.repeat(40));
  console.log('');
  console.log('  1. Listar posts');
  console.log('  2. Ver post');
  console.log('  3. Crear post');
  console.log('  4. Cambiar status');
  console.log('  5. Buscar posts');
  console.log('  6. Eliminar post');
  console.log('  7. Salir');
  console.log('');
}

// EN: Display a list of posts in a formatted table
// ES: Mostrar una lista de posts en formato tabla
function displayPostList(posts) {
  if (posts.length === 0) {
    console.log('  No hay posts para mostrar.');
    return;
  }

  console.log('');
  console.log('-'.repeat(60));
  console.log('  #   | Status     | Título');
  console.log('-'.repeat(60));

  posts.forEach((post, index) => {
    const num = String(index + 1).padStart(3);
    const status = post.status.padEnd(10);
    const title = post.title.length > 35
      ? post.title.substring(0, 32) + '...'
      : post.title;
    console.log(`  ${num} | ${status} | ${title}`);
  });

  console.log('-'.repeat(60));
  console.log(`  Total: ${posts.length} posts`);
}

// EN: Display full details of a single post
// ES: Mostrar todos los detalles de un post
function displayPostDetail(post) {
  console.log('');
  console.log('='.repeat(50));
  console.log(`  ${post.title}`);
  console.log('='.repeat(50));
  console.log(`  ID:        ${post.id}`);
  console.log(`  Autor:     ${post.author.name}`);
  console.log(`  Email:     ${post.author.email}`);
  console.log(`  Status:    ${post.status}`);
  console.log(`  Views:     ${post.views}`);
  console.log(`  Creado:    ${post.createdAt}`);
  console.log(`  Actualizado: ${post.updatedAt}`);
  console.log('-'.repeat(50));
  console.log('  Contenido:');
  console.log('');
  // EN: Wrap content at 50 chars per line
  // ES: Ajustar contenido a 50 caracteres por línea
  const words = post.content.split(' ');
  let line = '  ';
  for (const word of words) {
    if (line.length + word.length > 50) {
      console.log(line);
      line = '  ';
    }
    line += word + ' ';
  }
  if (line.trim()) console.log(line);
  console.log('');
}

// EN: Display a success message
// ES: Mostrar un mensaje de éxito
function displaySuccess(message) {
  console.log(`  ✓ ${message}`);
}

// EN: Display an error message
// ES: Mostrar un mensaje de error
function displayError(message) {
  console.log(`  ✗ Error: ${message}`);
}

// EN: Display a warning message
// ES: Mostrar un mensaje de advertencia
function displayWarning(message) {
  console.log(`  ⚠ ${message}`);
}

// EN: Display welcome message on startup
// ES: Mostrar mensaje de bienvenida al iniciar
function displayWelcome(postCount) {
  console.log('');
  console.log('='.repeat(50));
  console.log('  CMS CLI - The Stack Shift');
  console.log('  Capítulo 6: Proyecto CLI del CMS');
  console.log('='.repeat(50));
  console.log('');
  console.log(`  Cargados ${postCount} posts desde almacenamiento`);
}

// EN: Display goodbye message on exit
// ES: Mostrar mensaje de despedida al salir
function displayGoodbye() {
  console.log('');
  console.log('  ¡Hasta pronto!');
  console.log('  Posts guardados en ./data/posts.json');
  console.log('');
}

export {
  createPrompt,
  displayMenu,
  displayPostList,
  displayPostDetail,
  displaySuccess,
  displayError,
  displayWarning,
  displayWelcome,
  displayGoodbye
};
