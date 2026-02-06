// usePostManager.ts - Custom hook for post state management
// usePostManager.ts - Hook personalizado para gestión de estado de posts
// Chapter/Capítulo 11: Proyecto: Dashboard React

import { useState, useEffect } from 'react';
import type { Post } from '../types';
import { fetchPosts } from '../api';

// EN: Custom hook that encapsulates all post-related state and logic
// ES: Hook personalizado que encapsula todo el estado y lógica relacionados con posts
// EN: Like extracting a microservice — App.tsx delegates data management here
// ES: Como extraer un microservicio — App.tsx delega la gestión de datos aquí
function usePostManager() {
  // EN: Posts managed with useState — starts empty, populated by fetch
  // ES: Posts gestionados con useState — empieza vacío, poblado por fetch
  const [posts, setPosts] = useState<Post[]>([]);

  // EN: Loading state — true until fetch completes
  // ES: Estado de carga — true hasta que fetch complete
  const [loading, setLoading] = useState<boolean>(true);

  // EN: Error state — null if no error, string message if fetch failed
  // ES: Estado de error — null si no hay error, mensaje string si fetch falló
  const [error, setError] = useState<string | null>(null);

  // EN: useEffect runs after render — fetches posts on mount
  // ES: useEffect se ejecuta después del render — obtiene posts al montar
  useEffect(() => {
    // EN: Ignore flag prevents updates after unmount (cleanup pattern)
    // ES: Flag ignore previene actualizaciones después de desmontar (patrón de cleanup)
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
        // EN: Handle error — store message for UI display
        // ES: Manejar error — guardar mensaje para mostrar en la UI
        if (!ignore) {
          setError(err instanceof Error ? err.message : 'Error desconocido');
        }
      } finally {
        // EN: Always stop loading — runs on success or error
        // ES: Siempre parar carga — se ejecuta en éxito o error
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadPosts();

    // EN: Cleanup function — runs when component unmounts
    // ES: Función cleanup — se ejecuta cuando componente se desmonta
    return () => {
      ignore = true;
    };
  }, []);

  // EN: Add a new post — spread creates a new array (immutable update)
  // ES: Agregar un nuevo post — spread crea un nuevo array (actualización inmutable)
  function addPost(newPost: Post) {
    setPosts(prev => [...prev, newPost]);
  }

  // EN: Delete a post by ID — filter() creates a new array without the deleted item
  // ES: Eliminar un post por ID — filter() crea un nuevo array sin el elemento eliminado
  // EN: Like removing a container from a pod — the others keep running untouched
  // ES: Como remover un contenedor de un pod — los demás siguen corriendo intactos
  function deletePost(id: string) {
    setPosts(prev => prev.filter(p => p.id !== id));
  }

  // EN: Return the public interface — like an API contract for this "service"
  // ES: Retornar la interfaz pública — como un contrato de API para este "servicio"
  return { posts, loading, error, addPost, deletePost };
}

export default usePostManager;
