// PostCard.tsx - Blog post card component
// PostCard.tsx - Componente de tarjeta de post
// Chapter/Capítulo 11: Proyecto: Dashboard React

import { useState } from 'react';
import type { Post } from '../types';

/**
 * EN: Props interface for PostCard component — receives a Post and delete handler
 * ES: Interfaz de props para componente PostCard — recibe un Post y handler de eliminación
 */
interface PostCardProps {
  /** EN: Post data to display / ES: Datos del post a mostrar */
  post: Post;
  /** EN: Callback to delete this post / ES: Callback para eliminar este post */
  onDelete: (id: string) => void;
}

// EN: Component receives typed props via destructuring
// ES: Componente recibe props tipadas via destructuring
function PostCard({ post, onDelete }: PostCardProps) {
  const { id, title, author, status, excerpt } = post;

  // EN: Local confirmation state — each card manages its own confirm dialog independently
  // ES: Estado de confirmación local — cada tarjeta gestiona su propio diálogo de forma independiente
  const [confirming, setConfirming] = useState<boolean>(false);

  // EN: Conditional styling based on publication status
  // ES: Estilo condicional basado en el estado de publicación
  const statusColor = status === 'published' ? '#4caf50' : '#ff9800';
  const statusLabel = status === 'published' ? 'Publicado' : 'Borrador';

  const badgeStyle = {
    display: 'inline-block',
    padding: '0.2rem 0.6rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: statusColor
  };

  return (
    <article className="post-card">
      <div className="post-card-header">
        <h3 className="post-card-title">{title}</h3>
        <span style={badgeStyle}>{statusLabel}</span>
      </div>
      <p className="post-card-excerpt">{excerpt}</p>
      <footer className="post-card-footer">
        <span className="post-card-author">{author}</span>
        {/* EN: Conditional render — show confirm dialog or delete button */}
        {/* ES: Render condicional — mostrar diálogo de confirmación o botón eliminar */}
        {confirming ? (
          <div className="confirm-dialog">
            <span className="confirm-text">¿Eliminar este post?</span>
            <button
              className="confirm-button"
              onClick={() => { onDelete(id); setConfirming(false); }}
            >
              Confirmar
            </button>
            <button
              className="cancel-button"
              onClick={() => setConfirming(false)}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <button
            className="delete-button"
            onClick={() => setConfirming(true)}
          >
            Eliminar
          </button>
        )}
      </footer>
    </article>
  );
}

export default PostCard;
