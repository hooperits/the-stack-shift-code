// Header.jsx - Dashboard header component
// Header.jsx - Componente header del dashboard
// Chapter/Capítulo 7: Introducción a React

// EN: Functional component that returns JSX
// ES: Componente funcional que retorna JSX
function Header() {
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

  console.log('Header rendering');

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>CMS Dashboard</h1>
      <nav style={navStyle}>Capítulo 7 — Introducción a React</nav>
    </header>
  );
}

export default Header;
