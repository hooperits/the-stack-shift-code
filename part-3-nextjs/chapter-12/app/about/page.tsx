// Chapter/Capítulo 12: App Router y Páginas
// About page — file-based routing maps app/about/page.tsx to /about
// Página Acerca de — el routing basado en archivos mapea app/about/page.tsx a /about

export default function AboutPage() {
  return (
    <section>
      {/* Page heading / Encabezado de la página */}
      <h2>Acerca de</h2>

      {/* Project description / Descripción del proyecto */}
      <p>
        CMS App es un sistema de gestión de contenidos construido con Next.js
        como parte del libro <strong>The Stack Shift</strong>.
      </p>
      <p>
        Diseñado para profesionales de infraestructura IT, este proyecto
        gestiona artículos sobre servidores, redes, virtualización y
        automatización.
      </p>
    </section>
  );
}
