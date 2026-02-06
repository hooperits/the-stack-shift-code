// StatusFilter.tsx - Filter component for post status
// StatusFilter.tsx - Componente de filtro por estado de post
// Chapter/Capítulo 11: Proyecto: Dashboard React

// EN: FilterValue type exported for use by App.tsx — defines valid filter options
// ES: Tipo FilterValue exportado para uso en App.tsx — define opciones de filtro válidas
export type FilterValue = 'all' | 'published' | 'draft';

/**
 * EN: Props interface for StatusFilter — receives current filter and change handler
 * ES: Interfaz de props para StatusFilter — recibe filtro actual y handler de cambio
 */
interface StatusFilterProps {
  /** EN: Currently active filter / ES: Filtro actualmente activo */
  current: FilterValue;
  /** EN: Callback when filter changes / ES: Callback cuando el filtro cambia */
  onChange: (value: FilterValue) => void;
}

// EN: Filter buttons component — like a load balancer routing traffic by type
// ES: Componente de botones de filtro — como un balanceador de carga enrutando tráfico por tipo
function StatusFilter({ current, onChange }: StatusFilterProps) {
  // EN: Define filter options — label for UI display, value for state
  // ES: Definir opciones de filtro — label para mostrar en UI, value para estado
  const filters: { label: string; value: FilterValue }[] = [
    { label: 'Todos', value: 'all' },
    { label: 'Publicados', value: 'published' },
    { label: 'Borradores', value: 'draft' }
  ];

  return (
    <div className="status-filter">
      {filters.map(filter => (
        <button
          key={filter.value}
          className={`filter-button ${current === filter.value ? 'filter-active' : ''}`}
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default StatusFilter;
