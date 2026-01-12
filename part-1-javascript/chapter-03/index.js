// EN: Entry point for the CMS CLI application
// ES: Punto de entrada para la aplicación CLI del CMS
// Chapter/Capítulo 3: Funciones y Scope

// EN: Import the Post model and factory from post.js
// ES: Importar el modelo Post y factory desde post.js
import { createPost, examplePost } from './post.js';

// EN: Import validation functions from validate.js (Chapter 3)
// ES: Importar funciones de validación desde validate.js (Capítulo 3)
import { validatePost } from './validate.js';

console.log('CMS CLI iniciado');
console.log(`Ejecutando en Node.js ${process.version}`);
console.log('');

// EN: Display the example post from post.js
// ES: Mostrar el post de ejemplo desde post.js
console.log('--- Post de ejemplo ---');
console.log(`Título: ${examplePost.title}`);
console.log(`Autor: ${examplePost.author.name}`);
console.log(`Estado: ${examplePost.status}`);
console.log('');

// EN: Create new posts using the factory function
// ES: Crear nuevos posts usando la función factory
console.log('--- Creando posts ---');
const post1 = createPost(
  'Migrando de VMware a Proxmox',
  'La virtualización open source ha madurado...',
  'Carlos Rodríguez'
);

const post2 = createPost(
  'Automatización con Ansible',
  'Deja de hacer tareas repetitivas manualmente...',
  'Ana Martínez'
);

// EN: Store posts in array for next chapter
// ES: Almacenar posts en array para el siguiente capítulo
const posts = [examplePost, post1, post2];

console.log(`Total de posts: ${posts.length}`);
posts.forEach(post => {
  console.log(`- ${post.title} (${post.status})`);
});

// EN: Validate posts using our new validation system (Chapter 3)
// ES: Validar posts usando nuestro nuevo sistema de validación (Capítulo 3)
console.log('');
console.log('--- Validando posts ---');

posts.forEach(post => {
  const result = validatePost(post);
  if (result.valid) {
    console.log(`✓ "${post.title}" - válido`);
  } else {
    console.log(`✗ "${post.title}" - errores:`, result.errors);
  }
});

// EN: Test with an invalid post to show validation in action
// ES: Probar con un post inválido para mostrar la validación en acción
console.log('');
console.log('--- Probando post inválido ---');
const invalidPost = createPost('Hi', 'Short', 'Test');
const invalidResult = validatePost(invalidPost);
console.log(`Post: "${invalidPost.title}"`);
console.log('Resultado:', invalidResult);
