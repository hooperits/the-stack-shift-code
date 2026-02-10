// Chapter/Capítulo 12: App Router y Páginas
// Post detail page — dynamic route that captures [id] from the URL
// Página de detalle del post — ruta dinámica que captura [id] de la URL
// In Next.js 15, params is a Promise that must be awaited
// En Next.js 15, params es una Promesa que debe ser esperada (await)

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
