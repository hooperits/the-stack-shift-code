// Chapter/Capítulo 13: Server y Client Components
// Posts page — Server Component that composes with a Client Component child
// Página de posts — Server Component que se compone con un Client Component hijo
// This page does NOT have 'use client' — it remains a Server Component
// Esta página NO tiene 'use client' — sigue siendo un Server Component
// Data import runs on the server — zero JavaScript sent for data loading
// La importación de datos se ejecuta en el servidor — cero JavaScript enviado para cargar datos
// Only the PostFilter child adds client JS — "Server shell with Client islands"
// Solo el hijo PostFilter agrega JS al cliente — "Server shell con islas Client"

import { posts } from "@/data/posts";
import PostFilter from "@/app/ui/post-filter";

export default function PostsPage() {
  console.log("PostsPage: rendering on server");

  return (
    <section>
      {/* Page heading / Encabezado de la página */}
      <h2>Posts</h2>

      {/* Server Component passes data to Client Component child */}
      {/* El Server Component pasa datos al Client Component hijo */}
      <PostFilter posts={posts} />
    </section>
  );
}
