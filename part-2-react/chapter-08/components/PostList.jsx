// PostList.jsx - Post list component
// PostList.jsx - Componente de lista de posts
// Chapter/Capítulo 8: Props y Composición

import PostCard from './PostCard';

// EN: Component receives an array of posts and renders a PostCard for each
// ES: Componente recibe un array de posts y muestra un PostCard por cada uno
function PostList({ posts }) {
  // EN: Handle empty array — show a message when there are no posts
  // ES: Manejar array vacío — mostrar mensaje cuando no hay posts
  if (posts.length === 0) {
    return <p className="post-list-empty">No hay posts todavía.</p>;
  }

  return (
    <div className="post-list">
      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          author={post.author}
          status={post.status}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );
}

export default PostList;
