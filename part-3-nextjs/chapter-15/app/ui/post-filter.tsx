'use client';

// Chapter/Capítulo 15: Server Actions y Mutations
// PostFilter — Client Component that filters posts by status and allows deletion
// PostFilter — Client Component que filtra posts por estado y permite eliminación
// This component runs in the browser because of 'use client' above
// Este componente se ejecuta en el navegador por la directiva 'use client'
// console.log here appears in the BROWSER console, not the terminal
// console.log aquí aparece en la consola del NAVEGADOR, no en la terminal
//
// Rendering boundary: 'use client' creates a boundary in the component tree
// Frontera de rendering: 'use client' crea una frontera en el árbol de componentes
// Any component imported INTO this file also becomes a Client Component
// Cualquier componente importado EN este archivo también se vuelve Client Component
// Keep 'use client' as low as possible — only the interactive leaf needs it
// Mantén 'use client' lo más bajo posible — solo la hoja interactiva lo necesita

import { useState } from 'react';
import Link from 'next/link';
import { Post } from '@/data/posts';
import { deletePost } from '@/app/actions';

// Filter status type / Tipo de estado del filtro
type FilterStatus = 'all' | 'draft' | 'published';

// Component props — receives posts from Server Component parent
// Props del componente — recibe posts del Server Component padre
interface PostFilterProps {
  posts: Post[];
}

export default function PostFilter({ posts }: PostFilterProps) {
  console.log('PostFilter: rendering on client');

  // Client-side state for the active filter / Estado del filtro activo (lado del cliente)
  const [filter, setFilter] = useState<FilterStatus>('all');

  // Filter posts based on selected status / Filtrar posts según el estado seleccionado
  const filteredPosts =
    filter === 'all' ? posts : posts.filter((post) => post.status === filter);

  return (
    <div>
      {/* Filter buttons / Botones de filtro */}
      <div className="filter-bar">
        <button
          className={`filter-button${filter === 'all' ? ' active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Todos
        </button>
        <button
          className={`filter-button${filter === 'draft' ? ' active' : ''}`}
          onClick={() => setFilter('draft')}
        >
          Borrador
        </button>
        <button
          className={`filter-button${filter === 'published' ? ' active' : ''}`}
          onClick={() => setFilter('published')}
        >
          Publicado
        </button>
      </div>

      {/* Filtered post list / Lista de posts filtrados */}
      <ul className="post-list">
        {filteredPosts.map((post) => (
          <li key={post.id} className="post-card">
            <div className="post-card-content">
              <Link href={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                <p className="post-meta">
                  Por {post.author} ·{' '}
                  <span className={`status status-${post.status}`}>
                    {post.status}
                  </span>
                </p>
              </Link>
              {/* EN: Delete form — uses .bind() to pass post ID to the Server Action */}
              {/* ES: Formulario de eliminar — usa .bind() para pasar el ID al Server Action */}
              <form action={deletePost.bind(null, post.id)}>
                <button type="submit" className="btn-delete">
                  Eliminar
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
