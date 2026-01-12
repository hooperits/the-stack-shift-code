// storage.js - Módulo de persistencia para CMS
// Storage module - Persistence layer for CMS
//
// Proporciona funciones asíncronas para leer y escribir posts en archivos JSON.
// Provides async functions to read and write posts to JSON files.

import { readFile, writeFile, mkdir, access, constants } from 'fs/promises';
import { dirname } from 'path';

// Ruta del archivo de posts / Posts file path
const POSTS_FILE = './data/posts.json';

// Versión del formato de archivo / File format version
const FILE_VERSION = '1.0';

/**
 * Verifica si un archivo existe / Check if a file exists
 * @param {string} filePath - Ruta al archivo / Path to the file
 * @returns {Promise<boolean>} true si existe / true if exists
 */
async function fileExists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

/**
 * Crea un directorio si no existe / Create directory if it doesn't exist
 * @param {string} dirPath - Ruta del directorio / Directory path
 * @returns {Promise<void>}
 */
async function ensureDirectory(dirPath) {
  // recursive: true no falla si ya existe (como mkdir -p)
  // recursive: true doesn't fail if exists (like mkdir -p)
  await mkdir(dirPath, { recursive: true });
}

/**
 * Carga posts desde el archivo de almacenamiento
 * Load posts from storage file
 *
 * @returns {Promise<Post[]>} Array de posts (vacío si el archivo no existe)
 *                            Array of posts (empty if file doesn't exist)
 * @throws {Error} Si hay un error inesperado del sistema de archivos
 *                 If there's an unexpected filesystem error
 */
async function loadPosts() {
  try {
    const data = await readFile(POSTS_FILE, 'utf8');
    const parsed = JSON.parse(data);
    return parsed.posts || [];
  } catch (error) {
    // Archivo no existe - normal en primera ejecución
    // File doesn't exist - normal on first run
    if (error.code === 'ENOENT') {
      return [];
    }

    // Error de JSON inválido - log y retornar vacío
    // Invalid JSON error - log and return empty
    if (error instanceof SyntaxError) {
      console.error('Error parseando archivo de posts:', error.message);
      console.error('Error parsing posts file:', error.message);
      return [];
    }

    // Errores inesperados - re-lanzar
    // Unexpected errors - rethrow
    throw error;
  }
}

/**
 * Guarda posts en el archivo de almacenamiento
 * Save posts to storage file
 *
 * @param {Post[]} posts - Array de posts a guardar / Array of posts to save
 * @returns {Promise<void>}
 * @throws {Error} Si falla la escritura / If write fails
 */
async function savePosts(posts) {
  try {
    // Crear directorio si no existe / Create directory if needed
    await ensureDirectory(dirname(POSTS_FILE));

    // Estructura del archivo con metadatos
    // File structure with metadata
    const content = {
      version: FILE_VERSION,
      lastModified: new Date().toISOString(),
      posts: posts
    };

    // JSON formateado para legibilidad (2 espacios)
    // Formatted JSON for readability (2 spaces)
    await writeFile(POSTS_FILE, JSON.stringify(content, null, 2));
  } catch (error) {
    console.error('Error guardando posts:', error.message);
    console.error('Error saving posts:', error.message);
    throw error;
  }
}

// Exportar funciones y constantes
// Export functions and constants
export {
  loadPosts,
  savePosts,
  fileExists,
  ensureDirectory,
  POSTS_FILE
};
