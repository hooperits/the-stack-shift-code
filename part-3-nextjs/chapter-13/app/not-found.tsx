// Chapter/Capítulo 12: App Router y Páginas
// Custom 404 page — triggered by unmatched routes and notFound() calls
// Página 404 personalizada — se activa por rutas no encontradas y llamadas a notFound()

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      {/* 404 heading / Encabezado 404 */}
      <h2>Página no encontrada</h2>

      {/* Helpful message / Mensaje de ayuda */}
      <p>La página que buscas no existe o fue movida.</p>

      {/* Link back to home / Enlace de regreso al inicio */}
      <p>
        <Link href="/">Volver al inicio</Link>
      </p>
    </div>
  );
}
