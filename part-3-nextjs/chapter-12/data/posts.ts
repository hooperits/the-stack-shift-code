// Chapter/Capítulo 12: App Router y Páginas
// Sample post data — hardcoded content for the CMS
// Datos de ejemplo — contenido estático para el CMS
// This file lives in data/ (not app/) to avoid creating a route segment
// Este archivo vive en data/ (no en app/) para evitar crear un segmento de ruta

// Post type definition / Definición del tipo Post
export interface Post {
  id: string;
  title: string;
  author: string;
  status: "draft" | "published";
  excerpt: string;
}

// Sample posts array / Array de posts de ejemplo
export const posts: Post[] = [
  {
    id: "post-001",
    title: "Introducción a Kubernetes para Sysadmins",
    author: "María García",
    status: "published",
    excerpt:
      "Una guía práctica para administradores de sistemas que quieren dominar la orquestación de contenedores.",
  },
  {
    id: "post-002",
    title: "Migrando de VMware a Proxmox",
    author: "Carlos Rodríguez",
    status: "draft",
    excerpt:
      "Pasos detallados para migrar tu infraestructura de virtualización sin tiempo de inactividad.",
  },
  {
    id: "post-003",
    title: "Automatización con Ansible: Primeros Pasos",
    author: "Ana Martínez",
    status: "published",
    excerpt:
      "Aprende a automatizar la configuración de servidores con playbooks de Ansible.",
  },
];

// Find a post by its ID / Buscar un post por su ID
export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}
