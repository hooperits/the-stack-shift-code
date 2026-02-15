// EN: Loading component — displays while the posts page fetches data
// ES: Componente de carga — se muestra mientras la página de posts obtiene datos
// Chapter/Capítulo 14: Data Fetching
// EN: Next.js auto-wraps page.tsx in a Suspense boundary when loading.tsx exists
// ES: Next.js envuelve page.tsx en un Suspense boundary cuando loading.tsx existe

export default function Loading() {
  return (
    <div className="loading-container">
      <p className="loading-text">Cargando posts...</p>
    </div>
  );
}
