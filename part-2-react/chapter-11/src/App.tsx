// App.tsx - Main application component
// App.tsx - Componente principal de la aplicación
// Chapter/Capítulo 11: Proyecto: Dashboard React

import { useState } from 'react';
import usePostManager from './hooks/usePostManager';
import Header from './components/Header';
import Section from './components/Section';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import StatusFilter from './components/StatusFilter';
import type { FilterValue } from './components/StatusFilter';
import StatsBar from './components/StatsBar';
import './App.css';

// EN: Root component — thin orchestrator that delegates data to hook and UI to components
// ES: Componente raíz — orquestador delgado que delega datos al hook y UI a componentes
function App() {
  // EN: All post state and logic lives in the custom hook
  // ES: Todo el estado y lógica de posts vive en el hook personalizado
  const { posts, loading, error, addPost, deletePost } = usePostManager();

  // EN: Filter state — only useState in App.tsx (all post state lives in the hook)
  // ES: Estado de filtro — único useState en App.tsx (todo estado de posts vive en el hook)
  const [filter, setFilter] = useState<FilterValue>('all');

  // EN: Derived state — computed from posts + filter, never stored separately
  // ES: Estado derivado — calculado desde posts + filtro, nunca almacenado por separado
  const filteredPosts = filter === 'all'
    ? posts
    : posts.filter(post => post.status === filter);

  // EN: Show error message if fetch failed
  // ES: Mostrar mensaje de error si fetch falló
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // EN: Show loading indicator while fetching — early return pattern
  // ES: Mostrar indicador de carga mientras se obtienen datos — patrón de retorno temprano
  if (loading) {
    return <div className="loading">Cargando posts...</div>;
  }

  return (
    <>
      <Header title="CMS Dashboard" />
      <main className="main-content">
        <Section title="Crear Nuevo Post">
          <PostForm onAddPost={addPost} />
        </Section>

        <Section title="Posts Recientes">
          {/* EN: StatsBar receives all posts (unfiltered) for accurate counts */}
          {/* ES: StatsBar recibe todos los posts (sin filtrar) para conteos exactos */}
          <StatsBar posts={posts} />
          <StatusFilter current={filter} onChange={setFilter} />
          <PostList posts={filteredPosts} onDelete={deletePost} />
        </Section>
      </main>
    </>
  );
}

export default App;
