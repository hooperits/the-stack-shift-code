// Chapter/Capítulo 13: Server y Client Components
// Home page — Server Component by default (no 'use client' directive)
// Página de inicio — Server Component por defecto (sin directiva 'use client')
// This component renders on the server — console.log appears in the terminal
// Este componente se ejecuta en el servidor — console.log aparece en la terminal

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
