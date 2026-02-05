// App.tsx - Main application component
// App.tsx - Componente principal de la aplicación
// Chapter/Capítulo 10: Efectos y Ciclo de Vida

import { useState, useEffect } from 'react';
import type { Post } from './types';
import { fetchPosts } from './api';
import Header from './components/Header';
import Section from './components/Section';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './App.css';

// EN: Root component that composes the application layout
// ES: Componente raíz que compone el layout de la aplicación
function App() {
  // EN: Posts managed with useState — starts empty, populated by fetch
  // ES: Posts gestionados con useState — empieza vacío, poblado por fetch
  const [posts, setPosts] = useState<Post[]>([]);

  // EN: Loading state — true until fetch completes (like a spinner on a dashboard)
  // ES: Estado de carga — true hasta que fetch complete (como un spinner en un dashboard)
  const [loading, setLoading] = useState<boolean>(true);

  // EN: Error state — null if no error, string message if fetch failed (like Nagios alerts)
  // ES: Estado de error — null si no hay error, mensaje string si fetch falló (como alertas de Nagios)
  const [error, setError] = useState<string | null>(null);

  // EN: useEffect runs after render — fetches posts on mount
  // ES: useEffect se ejecuta después del render — obtiene posts al montar
  useEffect(() => {
    // EN: Ignore flag prevents updates after unmount (like graceful shutdown in services)
    // ES: Flag ignore previene actualizaciones después de desmontar (como shutdown graceful en servicios)
    let ignore = false;

    // EN: Async function inside useEffect — can't make useEffect itself async
    // ES: Función async dentro de useEffect — no se puede hacer useEffect async directamente
    async function loadPosts() {
      try {
        const data = await fetchPosts();
        // EN: Only update state if component is still mounted
        // ES: Solo actualizar estado si el componente sigue montado
        if (!ignore) {
          setPosts(data);
        }
      } catch (err) {
        // EN: Handle error — like catch in a try/catch shell script or Nagios CRITICAL
        // ES: Manejar error — como catch en un script shell o CRITICAL de Nagios
        if (!ignore) {
          setError(err instanceof Error ? err.message : 'Error desconocido');
        }
      } finally {
        // EN: Always stop loading — runs on success or error (like finally in Java/Python)
        // ES: Siempre parar carga — se ejecuta en éxito o error (como finally en Java/Python)
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadPosts();

    // EN: Cleanup function — runs when component unmounts (like systemd stop or SIGTERM handler)
    // ES: Función cleanup — se ejecuta cuando componente se desmonta (como systemd stop o handler de SIGTERM)
    return () => {
      ignore = true;
    };
  }, []);

  // EN: Add a new post — spread creates a new array (immutable update, like a VM snapshot)
  // ES: Agregar un nuevo post — spread crea un nuevo array (actualización inmutable, como un snapshot de VM)
  function addPost(newPost: Post) {
    setPosts(prev => [...prev, newPost]);
  }

  // EN: Show error message if fetch failed — like a Nagios CRITICAL alert page
  // ES: Mostrar mensaje de error si fetch falló — como una página de alerta CRITICAL de Nagios
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
          <PostList posts={posts} />
        </Section>
      </main>
    </>
  );
}

export default App;
