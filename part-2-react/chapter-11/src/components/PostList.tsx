// PostList.tsx - Post list component
// PostList.tsx - Componente de lista de posts
// Chapter/Capítulo 11: Proyecto: Dashboard React

import type { Post } from '../types';
import PostCard from './PostCard';

/**
 * EN: Props interface for PostList component — receives posts and delete handler
 * ES: Interfaz de props para componente PostList — recibe posts y handler de eliminación
 */
interface PostListProps {
  /** EN: Array of posts to render / ES: Array de posts a renderizar */
  posts: Post[];
  /** EN: Callback to delete a post by ID / ES: Callback para eliminar un post por ID */
  onDelete: (id: string) => void;
}

// EN: Component receives typed props — renders a PostCard for each post
// ES: Componente recibe props tipadas — muestra un PostCard por cada post
function PostList({ posts, onDelete }: PostListProps) {
  // EN: Handle empty array — show a message when there are no posts
  // ES: Manejar array vacío — mostrar mensaje cuando no hay posts
  if (posts.length === 0) {
    return <p className="post-list-empty">No hay posts todavía.</p>;
  }

  return (
    <div className="post-list">
      {/* EN: Pass onDelete through to each PostCard — prop threading pattern */}
      {/* ES: Pasar onDelete a cada PostCard — patrón de threading de props */}
      {posts.map(post => (
        <PostCard key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default PostList;
