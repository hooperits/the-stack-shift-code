// EN: Verification script for development environment
// ES: Script de verificación del entorno de desarrollo
// Chapter/Capítulo 1: El Entorno del Desarrollador

import { execSync } from 'child_process';

console.log('='.repeat(50));
console.log('  Verificación del Entorno de Desarrollo');
console.log('  The Stack Shift - Capítulo 1');
console.log('='.repeat(50));
console.log('');

// EN: Check Node.js version
// ES: Verificar versión de Node.js
const nodeVersion = process.version;
const nodeMajor = parseInt(nodeVersion.slice(1).split('.')[0]);
const nodeStatus = nodeMajor >= 22 ? '✓' : '✗';
console.log(`${nodeStatus} Node.js: ${nodeVersion}`);

// EN: Check npm version
// ES: Verificar versión de npm
try {
  const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
  console.log(`✓ npm: v${npmVersion}`);
} catch (error) {
  console.log('✗ npm: No encontrado');
}

// EN: Check Git version
// ES: Verificar versión de Git
try {
  const gitVersion = execSync('git --version', { encoding: 'utf8' }).trim();
  console.log(`✓ Git: ${gitVersion.replace('git version ', '')}`);
} catch (error) {
  console.log('✗ Git: No encontrado');
}

// EN: Confirm ES modules are working
// ES: Confirmar que ES modules funcionan
console.log('✓ ES Modules: Funcionando');

console.log('');
console.log('='.repeat(50));

// EN: Summary
// ES: Resumen
if (nodeMajor >= 22) {
  console.log('  ¡Entorno listo para desarrollo!');
  console.log('  Puedes continuar con el Capítulo 2.');
} else {
  console.log('  ⚠ Actualiza Node.js a la versión 22 LTS');
  console.log('  Visita: https://nodejs.org');
}

console.log('='.repeat(50));
