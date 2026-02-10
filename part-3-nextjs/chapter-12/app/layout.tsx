// Chapter/Capítulo 12: App Router y Páginas
// Root layout — wraps all pages in the application
// Layout raíz — envuelve todas las páginas de la aplicación
// Layouts persist across page transitions — only {children} changes
// Los layouts persisten entre navegaciones — solo {children} cambia

import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

// Site metadata / Metadatos del sitio
export const metadata: Metadata = {
  title: "CMS App",
  description: "Content Management System — The Stack Shift",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* Site header with navigation / Encabezado del sitio con navegación */}
        <header>
          <Link href="/">
            <h1>CMS App</h1>
          </Link>
          {/* Navigation links / Enlaces de navegación */}
          <nav>
            <Link href="/">Inicio</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/about">Acerca de</Link>
          </nav>
        </header>

        {/* Page content renders here / El contenido de cada página se renderiza aquí */}
        <main>{children}</main>
      </body>
    </html>
  );
}
