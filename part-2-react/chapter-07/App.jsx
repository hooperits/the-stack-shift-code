// App.jsx - Main application component
// App.jsx - Componente principal de la aplicación
// Chapter/Capítulo 7: Introducción a React

import Header from './components/Header';
import './App.css';

// EN: Root component that composes the application layout
// ES: Componente raíz que compone el layout de la aplicación
function App() {
  // EN: JSX expression - embedding JavaScript values in markup
  // ES: Expresión JSX - incrustar valores JavaScript en el markup
  const appName = 'CMS Dashboard';
  const isReady = true;

  console.log('App rendering');

  // EN: Fragment (<>...</>) wraps multiple root elements
  // ES: Fragment (<>...</>) envuelve múltiples elementos raíz
  return (
    <>
      <Header />
      <main className="main-content">
        <h2>Bienvenido a {appName}</h2>
        {isReady && <p>La aplicación está lista.</p>}
        <p>Contenido del CMS próximamente...</p>
      </main>
    </>
  );
}

export default App;
