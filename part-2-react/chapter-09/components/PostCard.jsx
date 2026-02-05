// PostCard.jsx - Blog post card component
// PostCard.jsx - Componente de tarjeta de post
// Chapter/Capítulo 8: Props y Composición

/**
 * @typedef {object} PostCardProps
 * @property {string} title - Post title / Título del post
 * @property {string} author - Author name / Nombre del autor
 * @property {'published' | 'draft'} status - Publication status / Estado de publicación
 * @property {string} excerpt - Short description / Descripción corta
 */

// EN: Component receives multiple props via destructuring
// ES: Componente recibe múltiples props via destructuring

/** @param {PostCardProps} props */
function PostCard({ title, author, status, excerpt }) {
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
