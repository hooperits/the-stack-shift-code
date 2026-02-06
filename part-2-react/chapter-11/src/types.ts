// types.ts - Shared TypeScript interfaces
// types.ts - Interfaces compartidas de TypeScript
// Chapter/Capítulo 10: Efectos y Ciclo de Vida

/**
 * EN: Represents a blog post in the CMS
 * ES: Representa un post de blog en el CMS
 */
export interface Post {
  /** EN: Unique identifier / ES: Identificador único */
  id: string;

  /** EN: Post title / ES: Título del post */
  title: string;

  /** EN: Author name / ES: Nombre del autor */
  author: string;

  /** EN: Publication status / ES: Estado de publicación */
  status: 'draft' | 'published';

  /** EN: Short excerpt/summary / ES: Extracto/resumen corto */
  excerpt: string;
}
