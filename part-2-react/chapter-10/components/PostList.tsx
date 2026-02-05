// PostList.tsx - Post list component
// PostList.tsx - Componente de lista de posts
// Chapter/Capítulo 10: Efectos y Ciclo de Vida

import type { Post } from '../types';
import PostCard from './PostCard';

/**
 * EN: Props interface for PostList component — receives an array of posts
 * ES: Interfaz de props para componente PostList — recibe un array de posts
 */
interface PostListProps {
  /** EN: Array of posts to render / ES: Array de posts a renderizar */
  posts: Post[];
}

// EN: Component receives typed props — renders a PostCard for each post
// ES: Componente recibe props tipadas — muestra un PostCard por cada post
function PostList({ posts }: PostListProps) {
  // EN: Handle empty array — show a message when there are no posts
  // ES: Manejar array vacío — mostrar mensaje cuando no hay posts
  if (posts.length === 0) {
    return <p className="post-list-empty">No hay posts todavía.</p>;
  }

  return (
    <div className="post-list">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
