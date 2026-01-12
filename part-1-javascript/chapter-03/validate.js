// EN: Validation functions for the CMS Post model
// ES: Funciones de validación para el modelo Post del CMS
// Chapter/Capítulo 3: Funciones y Scope

// EN: Validate that the title meets requirements
// ES: Validar que el título cumple los requisitos
function validateTitle(title) {
  // EN: Check if title is empty or only whitespace
  // ES: Verificar si el título está vacío o solo tiene espacios
  if (!title || title.trim() === '') {
    return { valid: false, error: 'El título es requerido' };
  }

  // EN: Check minimum length
  // ES: Verificar longitud mínima
  if (title.length < 5) {
    return { valid: false, error: 'El título debe tener al menos 5 caracteres' };
  }

  // EN: Check maximum length
  // ES: Verificar longitud máxima
  if (title.length > 100) {
    return { valid: false, error: 'El título no puede exceder 100 caracteres' };
  }

  // EN: All validations passed
  // ES: Todas las validaciones pasaron
  return { valid: true, error: null };
}

// EN: Validate that the content meets requirements
// ES: Validar que el contenido cumple los requisitos
function validateContent(content) {
  // EN: Check if content is empty or only whitespace
  // ES: Verificar si el contenido está vacío o solo tiene espacios
  if (!content || content.trim() === '') {
    return { valid: false, error: 'El contenido es requerido' };
  }

  // EN: Check minimum length - posts should have substantial content
  // ES: Verificar longitud mínima - los posts deben tener contenido sustancial
  if (content.length < 50) {
    return { valid: false, error: 'El contenido debe tener al menos 50 caracteres' };
  }

  return { valid: true, error: null };
}

// EN: Validate email format using a simple regex pattern
// ES: Validar formato de email usando un patrón regex simple
function validateEmail(email) {
  // EN: Simple email regex: something@something.something
  // ES: Regex simple de email: algo@algo.algo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // EN: Check if email matches the pattern
  // ES: Verificar si el email coincide con el patrón
  if (!email || !emailRegex.test(email)) {
    return { valid: false, error: 'El email del autor no es válido' };
  }

  return { valid: true, error: null };
}

// EN: Validate that status is one of the allowed values
// ES: Validar que el status es uno de los valores permitidos
function validateStatus(status) {
  // EN: Define the valid status values
  // ES: Definir los valores de status válidos
  const validStatuses = ['draft', 'published', 'archived'];

  // EN: Check if status is in the allowed list
  // ES: Verificar si el status está en la lista permitida
  if (!validStatuses.includes(status)) {
    return { valid: false, error: 'El status debe ser: draft, published, o archived' };
  }

  return { valid: true, error: null };
}

// EN: Validate a complete post object by running all validators
// ES: Validar un objeto post completo ejecutando todos los validadores
function validatePost(post) {
  // EN: Collect all validation errors
  // ES: Recolectar todos los errores de validación
  const errors = [];

  // EN: Validate each field and collect errors
  // ES: Validar cada campo y recolectar errores
  const titleResult = validateTitle(post.title);
  if (!titleResult.valid) errors.push(titleResult.error);

  const contentResult = validateContent(post.content);
  if (!contentResult.valid) errors.push(contentResult.error);

  // EN: Use optional chaining for nested author.email
  // ES: Usar optional chaining para author.email anidado
  const emailResult = validateEmail(post.author?.email);
  if (!emailResult.valid) errors.push(emailResult.error);

  const statusResult = validateStatus(post.status);
  if (!statusResult.valid) errors.push(statusResult.error);

  // EN: Return aggregated result
  // ES: Retornar resultado agregado
  return {
    valid: errors.length === 0,
    errors
  };
}

// EN: Export all validation functions for use in other modules
// ES: Exportar todas las funciones de validación para uso en otros módulos
export {
  validateTitle,
  validateContent,
  validateEmail,
  validateStatus,
  validatePost
};

// EN: Test code - runs when file is executed directly
// ES: Código de prueba - se ejecuta cuando el archivo se ejecuta directamente
console.log('='.repeat(50));
console.log('  Validación - The Stack Shift');
console.log('  Capítulo 3: Funciones y Scope');
console.log('='.repeat(50));
console.log('');

// EN: Test individual validators
// ES: Probar validadores individuales
console.log('--- Probando validateTitle ---');
console.log('validateTitle("Hola"):', validateTitle('Hola'));
console.log('validateTitle("Hola Mundo"):', validateTitle('Hola Mundo'));
console.log('');

console.log('--- Probando validateEmail ---');
console.log('validateEmail("test@example.com"):', validateEmail('test@example.com'));
console.log('validateEmail("invalid-email"):', validateEmail('invalid-email'));
console.log('');

// EN: Test full post validation
// ES: Probar validación de post completo
console.log('--- Probando validatePost ---');
const validPost = {
  title: 'Introducción a Kubernetes para Sysadmins',
  content: 'Si administras servidores, Kubernetes cambiará tu forma de trabajar. En este artículo exploraremos los conceptos básicos.',
  author: { email: 'maria@example.com' },
  status: 'draft'
};

const invalidPost = {
  title: 'Hi',
  content: 'Muy corto',
  author: { email: 'not-an-email' },
  status: 'invalid'
};

console.log('Post válido:', validatePost(validPost));
console.log('Post inválido:', validatePost(invalidPost));
console.log('');
console.log('='.repeat(50));
