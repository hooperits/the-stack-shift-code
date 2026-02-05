// Section.jsx - Reusable section wrapper component
// Section.jsx - Componente wrapper de sección reutilizable
// Chapter/Capítulo 8: Props y Composición

/**
 * @typedef {object} SectionProps
 * @property {string} title - Section heading / Título de la sección
 * @property {React.ReactNode} children - Content to render inside / Contenido a mostrar dentro
 */

// EN: Component uses children prop to wrap any content passed between its tags
// ES: Componente usa la prop children para envolver cualquier contenido entre sus etiquetas

/** @param {SectionProps} props */
function Section({ children, title }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

export default Section;
