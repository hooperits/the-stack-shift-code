// main.jsx - React application entry point
// main.jsx - Punto de entrada de la aplicación React
// Chapter/Capítulo 7: Introducción a React

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// EN: Mount the React app on the root DOM element
// ES: Montar la aplicación React en el elemento DOM raíz
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
