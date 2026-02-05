// Section.tsx - Reusable section wrapper component
// Section.tsx - Componente wrapper de sección reutilizable
// Chapter/Capítulo 10: Efectos y Ciclo de Vida

import type { ReactNode } from 'react';

/**
 * EN: Props interface for Section component — uses ReactNode for children
 * ES: Interfaz de props para componente Section — usa ReactNode para children
 */
interface SectionProps {
  /** EN: Section title / ES: Título de la sección */
  title: string;
  /** EN: Content to render inside section / ES: Contenido a renderizar dentro de la sección */
  children: ReactNode;
}

// EN: Component uses children prop to wrap any content passed between its tags
// ES: Componente usa la prop children para envolver cualquier contenido entre sus etiquetas
function Section({ children, title }: SectionProps) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

export default Section;
