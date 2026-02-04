// index.js - Entry point for the CMS CLI
// index.js - Punto de entrada para la CLI del CMS
// Chapter/Capítulo 6: Proyecto CLI del CMS

import { initializePosts, getAllPosts } from './posts.js';
import {
  createPrompt,
  displayMenu,
  displayWelcome,
  displayGoodbye,
  displayError
} from './cli.js';
import {
  listPostsCommand,
  viewPostCommand,
  createPostCommand,
  changeStatusCommand,
  searchPostsCommand,
  deletePostCommand
} from './commands.js';

// EN: Main function - CLI loop
// ES: Función principal - loop de la CLI
async function main() {
  // EN: Create the prompt interface
  // ES: Crear la interfaz de prompt
  const prompt = createPrompt();

  // EN: Load posts from storage
  // ES: Cargar posts desde almacenamiento
  await initializePosts();
  const posts = getAllPosts();

  // EN: Display welcome message
  // ES: Mostrar mensaje de bienvenida
  displayWelcome(posts.length);

  // EN: Main loop - keep running until user exits
  // ES: Loop principal - continuar hasta que el usuario salga
  let running = true;

  while (running) {
    displayMenu();
    const choice = await prompt.question('  Selecciona una opción (1-7): ');

    switch (choice.trim()) {
      case '1':
        await listPostsCommand();
        break;

      case '2':
        await viewPostCommand(prompt);
        break;

      case '3':
        await createPostCommand(prompt);
        break;

      case '4':
        await changeStatusCommand(prompt);
        break;

      case '5':
        await searchPostsCommand(prompt);
        break;

      case '6':
        await deletePostCommand(prompt);
        break;

      case '7':
        running = false;
        break;

      default:
        displayError('Opción no válida. Selecciona un número del 1 al 7.');
    }
  }

  // EN: Close the prompt interface and exit
  // ES: Cerrar la interfaz de prompt y salir
  displayGoodbye();
  prompt.close();
}

// EN: Run the main function and handle errors
// ES: Ejecutar la función principal y manejar errores
main().catch(error => {
  console.error('');
  console.error('  Error fatal en la aplicación:', error.message);
  console.error('');
  process.exit(1);
});
