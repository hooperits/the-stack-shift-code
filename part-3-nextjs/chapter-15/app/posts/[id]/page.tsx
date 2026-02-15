// EN: Post detail page — async Server Component that fetches a single post from the API
// ES: Página de detalle del post — Server Component asíncrono que obtiene un post de la API
// Chapter/Capítulo 14: Data Fetching
// EN: Replaces the direct import from Chapter 13 with a fetch() call
// ES: Reemplaza la importación directa del Capítulo 13 con una llamada fetch()

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Post } from "@/data/posts";

// EN: Force dynamic rendering — self-fetching requires the server to be running
// ES: Forzar renderizado dinámico — el self-fetching necesita el servidor activo
export const dynamic = "force-dynamic";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // EN: Await params to extract the dynamic segment
  // ES: Esperar params para extraer el segmento dinámico
  const { id } = await params;
  console.log(`PostPage: rendering post ${id} on server`);

  // EN: Fetch the individual post from the API Route Handler
  // ES: Obtener el post individual del Route Handler de la API
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
    next: { revalidate: 60 },
  });

  // EN: If the post is not found, trigger the not-found page
  // ES: Si el post no se encuentra, mostrar página 404
  if (!response.ok) {
    notFound();
  }

  const post: Post = await response.json();

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
