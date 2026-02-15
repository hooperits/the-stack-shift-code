// EN: Posts page — async Server Component that fetches data from the API
// ES: Página de posts — Server Component asíncrono que obtiene datos de la API
// Chapter/Capítulo 15: Server Actions y Mutations
// EN: Data is fetched on the server — zero JavaScript sent for data loading
// ES: Los datos se obtienen en el servidor — cero JavaScript enviado para cargar datos

import type { Post } from "@/data/posts";
import PostFilter from "@/app/ui/post-filter";
import Link from "next/link";

// EN: Force dynamic rendering — self-fetching requires the server to be running
// ES: Forzar renderizado dinámico — el self-fetching necesita el servidor activo
export const dynamic = "force-dynamic";

export default async function PostsPage() {
  console.log("PostsPage: rendering on server");

  // EN: Fetch posts from the API Route Handler with time-based revalidation
  // ES: Obtener posts del Route Handler de la API con revalidación por tiempo
  const response = await fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 60 },
  });
  const posts: Post[] = await response.json();

  return (
    <section>
      {/* Page heading and create link / Encabezado y enlace para crear */}
      <div className="posts-header">
        <h2>Posts</h2>
        <Link href="/posts/create" className="btn-create">
          Crear Post
        </Link>
      </div>

      {/* Server Component passes fetched data to Client Component child */}
      {/* El Server Component pasa datos obtenidos al Client Component hijo */}
      <PostFilter posts={posts} />
    </section>
  );
}
