// Chapter/Capítulo 12: App Router y Páginas
// Home page — the root route of the CMS application
// Página de inicio — la ruta raíz de la aplicación CMS

export default function HomePage() {
  return (
    <main>
      {/* Main heading / Encabezado principal */}
      <h1>CMS App</h1>

      {/* Welcome message / Mensaje de bienvenida */}
      <p>
        Bienvenido al sistema de gestión de contenidos para profesionales de
        infraestructura IT.
      </p>

      {/* Project description / Descripción del proyecto */}
      <p>
        Este CMS está diseñado para gestionar artículos técnicos sobre
        servidores, redes, virtualización y automatización.
      </p>
    </main>
  );
}
