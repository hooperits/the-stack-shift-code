// EN: Post model and factory function for the CMS
// ES: Modelo de Post y función factory para el CMS
// Chapter/Capítulo 2: Variables, Tipos y Operadores

// EN: Example post object showing the complete structure
// ES: Objeto post de ejemplo mostrando la estructura completa
const examplePost = {
  id: 'post-001',
  title: 'Introducción a Kubernetes para Sysadmins',
  content: 'Si administras servidores, Kubernetes cambiará tu forma de trabajar...',
  author: {
    id: 'user-001',
    name: 'María García',
    email: 'maria@example.com'
  },
  status: 'draft',
  createdAt: '2026-01-10T10:00:00Z',
  updatedAt: '2026-01-10T10:00:00Z',
  views: 0,
  featured: false
};

// EN: Factory function to create new posts with default values
// ES: Función factory para crear nuevos posts con valores por defecto
function createPost(title, content, authorName) {
  // EN: Generate a unique ID using timestamp
  // ES: Generar un ID único usando timestamp
  const id = `post-${Date.now()}`;

  // EN: Get current date in ISO format
  // ES: Obtener fecha actual en formato ISO
  const now = new Date().toISOString();

  // EN: Return the new post object with all fields
  // ES: Retornar el nuevo objeto post con todos los campos
  return {
    id,
    title,
    content,
    author: {
      id: 'user-001',
      name: authorName,
      email: `${authorName.toLowerCase().replace(' ', '.')}@example.com`
    },
    status: 'draft',
    createdAt: now,
    updatedAt: now,
    views: 0,
    featured: false
  };
}

// EN: Export the factory function for use in other modules
// ES: Exportar la función factory para uso en otros módulos
export { createPost, examplePost };

// EN: Test code - runs when file is executed directly
// ES: Código de prueba - se ejecuta cuando el archivo se ejecuta directamente
import { fileURLToPath } from 'url';
const isMainModule = process.argv[1] === fileURLToPath(import.meta.url);

if (isMainModule) {
  console.log('='.repeat(50));
  console.log('  Modelo Post - The Stack Shift');
  console.log('  Capítulo 2: Variables, Tipos y Operadores');
  console.log('='.repeat(50));
  console.log('');

  // EN: Display the example post
  // ES: Mostrar el post de ejemplo
  console.log('Post de ejemplo:');
  console.log(examplePost);
  console.log('');

  // EN: Create a new post using the factory
  // ES: Crear un nuevo post usando la factory
  const newPost = createPost(
    'Migrando de VMware a Proxmox',
    'La virtualización open source ha madurado significativamente...',
    'Carlos Rodríguez'
  );

  console.log('Nuevo post creado:');
  console.log(newPost);
  console.log('');
  console.log('='.repeat(50));
}
