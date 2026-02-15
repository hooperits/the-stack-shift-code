// EN: Home page — Server Component by default (no 'use client' directive)
// ES: Página de inicio — Server Component por defecto (sin directiva 'use client')
// Chapter/Capítulo 15: Server Actions y Mutations

export default function HomePage() {
  console.log("HomePage: rendering on server");

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
