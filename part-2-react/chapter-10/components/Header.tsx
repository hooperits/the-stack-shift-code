// Header.tsx - Dashboard header component
// Header.tsx - Componente header del dashboard
// Chapter/Capítulo 10: Efectos y Ciclo de Vida

/**
 * EN: Props interface for Header component — TypeScript ensures type safety
 * ES: Interfaz de props para componente Header — TypeScript asegura seguridad de tipos
 */
interface HeaderProps {
  /** EN: Dashboard title / ES: Título del dashboard */
  title?: string;
}

// EN: Component receives typed props via destructuring — title has a default value
// ES: Componente recibe props tipadas via destructuring — title tiene un valor por defecto
function Header({ title = 'CMS Dashboard' }: HeaderProps) {
  // EN: Inline styles demonstrate JavaScript objects in JSX
  // ES: Estilos inline demuestran objetos JavaScript en JSX
  const headerStyle = {
    backgroundColor: '#1a1a2e',
    color: '#ffffff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const titleStyle = {
    margin: 0,
    fontSize: '1.5rem'
  };

  const navStyle = {
    fontSize: '0.9rem',
    color: '#a0a0b0'
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <nav style={navStyle}>Capítulo 10 — Efectos y Ciclo de Vida</nav>
    </header>
  );
}

export default Header;
