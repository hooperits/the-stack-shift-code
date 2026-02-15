// Chapter/Capítulo 15: Server Actions y Mutations
// EN: Post data module — now with mutation functions for Server Actions
// ES: Módulo de datos de posts — ahora con funciones de mutación para Server Actions
// EN: This file lives in data/ (not app/) to avoid creating a route segment
// ES: Este archivo vive en data/ (no en app/) para evitar crear un segmento de ruta

// Post type definition / Definición del tipo Post
export interface Post {
  id: string;
  title: string;
  author: string;
  status: "draft" | "published";
  excerpt: string;
}

// EN: Using 'let' instead of 'const' — the array needs to be mutable for add/remove
// ES: Usando 'let' en vez de 'const' — el array necesita ser mutable para agregar/eliminar
let posts: Post[] = [
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

// EN: Get all posts — returns the current array (may include added posts)
// ES: Obtener todos los posts — retorna el array actual (puede incluir posts agregados)
export function getPosts(): Post[] {
  return posts;
}

// EN: Find a post by its ID / ES: Buscar un post por su ID
export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}

// EN: Add a new post to the array — used by the createPost Server Action
// ES: Agregar un nuevo post al array — usado por el Server Action createPost
export function addPost(post: Post): void {
  posts.push(post);
}

// EN: Remove a post by ID — used by the deletePost Server Action
// ES: Eliminar un post por ID — usado por el Server Action deletePost
export function removePost(id: string): boolean {
  const initialLength = posts.length;
  posts = posts.filter((post) => post.id !== id);
  return posts.length < initialLength;
}
