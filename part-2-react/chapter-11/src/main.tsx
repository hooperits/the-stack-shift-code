// main.tsx - React application entry point
// main.tsx - Punto de entrada de la aplicación React
// Chapter/Capítulo 10: Efectos y Ciclo de Vida

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// EN: Mount the React app on the root DOM element
// ES: Montar la aplicación React en el elemento DOM raíz
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
