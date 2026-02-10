// Chapter/Capítulo 12: App Router y Páginas
// Posts list page — imports shared data and links to dynamic routes
// Página de lista de posts — importa datos compartidos y enlaza a rutas dinámicas

import Link from "next/link";
import { posts } from "@/data/posts";

export default function PostsPage() {
  return (
    <section>
      {/* Page heading / Encabezado de la página */}
      <h2>Posts</h2>

      {/* Post list — each item links to its dynamic route */}
      {/* Lista de posts — cada elemento enlaza a su ruta dinámica */}
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-card">
            <Link href={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
              <p className="post-meta">
                Por {post.author} ·{" "}
                <span className={`status status-${post.status}`}>
                  {post.status}
                </span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
