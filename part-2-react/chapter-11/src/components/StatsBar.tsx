// StatsBar.tsx - Post statistics display component
// StatsBar.tsx - Componente de visualización de estadísticas de posts
// Chapter/Capítulo 11: Proyecto: Dashboard React

import type { Post } from '../types';

/**
 * EN: Props interface for StatsBar — receives the full posts array
 * ES: Interfaz de props para StatsBar — recibe el array completo de posts
 */
interface StatsBarProps {
  /** EN: All posts (not filtered) for computing stats / ES: Todos los posts (sin filtrar) para calcular estadísticas */
  posts: Post[];
}

// EN: Statistics component — computes derived values from posts array
// ES: Componente de estadísticas — calcula valores derivados del array de posts
// EN: Like a monitoring dashboard — shows system metrics at a glance
// ES: Como un dashboard de monitoreo — muestra métricas del sistema de un vistazo
function StatsBar({ posts }: StatsBarProps) {
  // EN: Derived state — computed on each render, never stored separately
  // ES: Estado derivado — calculado en cada render, nunca almacenado por separado
  const total = posts.length;
  const published = posts.filter(p => p.status === 'published').length;
  const draft = posts.filter(p => p.status === 'draft').length;

  return (
    <div className="stats-bar">
      <div className="stat-item">
        <span className="stat-value">{total}</span>
        <span className="stat-label">Total</span>
      </div>
      <div className="stat-item">
        <span className="stat-value stat-published">{published}</span>
        <span className="stat-label">Publicados</span>
      </div>
      <div className="stat-item">
        <span className="stat-value stat-draft">{draft}</span>
        <span className="stat-label">Borradores</span>
      </div>
    </div>
  );
}

export default StatsBar;
