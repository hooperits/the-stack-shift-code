// PostCard.tsx - Blog post card component
// PostCard.tsx - Componente de tarjeta de post
// Chapter/Capítulo 10: Efectos y Ciclo de Vida

import type { Post } from '../types';

/**
 * EN: Props interface for PostCard component — receives a Post object
 * ES: Interfaz de props para componente PostCard — recibe un objeto Post
 */
interface PostCardProps {
  /** EN: Post data to display / ES: Datos del post a mostrar */
  post: Post;
}

// EN: Component receives typed props via destructuring
// ES: Componente recibe props tipadas via destructuring
function PostCard({ post }: PostCardProps) {
  const { title, author, status, excerpt } = post;
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
      </footer>
    </article>
  );
}

export default PostCard;
