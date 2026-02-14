// Chapter/Capítulo 13: Server y Client Components
// Post detail page — async Server Component (dynamic route with [id])
// Página de detalle del post — Server Component asíncrono (ruta dinámica con [id])
// Async Server Components also run on the server — console.log appears in the terminal
// Los Server Components asíncronos también se ejecutan en el servidor — console.log aparece en la terminal

import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById } from "@/data/posts";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await params to extract the dynamic segment / Esperar params para extraer el segmento dinámico
  const { id } = await params;
  console.log(`PostPage: rendering post ${id} on server`);

  // Find the post by ID / Buscar el post por ID
  const post = getPostById(id);

  // If no post matches, trigger the not-found page / Si no hay post, mostrar página 404
  if (!post) {
    notFound();
  }

  return (
    <article>
      {/* Post title / Título del post */}
      <h2>{post.title}</h2>

      {/* Post metadata / Metadatos del post */}
      <p className="post-meta">
        Por <strong>{post.author}</strong> ·{" "}
        <span className={`status status-${post.status}`}>{post.status}</span>
      </p>

      {/* Post excerpt / Extracto del post */}
      <p>{post.excerpt}</p>

      {/* Back link / Enlace de regreso */}
      <Link href="/posts" className="back-link">
        ← Volver a Posts
      </Link>
    </article>
  );
}
