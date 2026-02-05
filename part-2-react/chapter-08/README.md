# Chapter 8: Props and Composition

[🇪🇸 Ver en Español](#capítulo-8-props-y-composición)

Dynamic components with props, list rendering with map+keys, and the children composition pattern.

## Files

| File | Description |
|------|-------------|
| `main.jsx` | React entry point (createRoot) |
| `App.jsx` | Root component with posts data and composed layout |
| `App.css` | Application and component styles |
| `index.css` | Global styles |
| `components/Header.jsx` | Header with title prop and default value |
| `components/PostCard.jsx` | Post card with multiple props and status badge |
| `components/PostList.jsx` | Post list with map+keys and empty state |
| `components/Section.jsx` | Section wrapper using children prop |
| `index.html` | Vite HTML entry point |
| `vite.config.js` | Vite configuration |
| `package.json` | Dependencies and scripts |

## Setup

```bash
cd part-2-react/chapter-08
npm install
```

## Run

```bash
npm run dev
```

## Concepts

- Props: passing data from parent to child components
- Destructuring props in function parameters
- Default parameter values (ES6)
- Rendering lists with `.map()` and unique `key` props
- The `children` prop for flexible composition
- JSDoc typing with `@typedef` and `@param`
- Conditional styling based on props

---

# Capítulo 8: Props y Composición

[🇺🇸 View in English](#chapter-8-props-and-composition)

Componentes dinámicos con props, renderizado de listas con map+keys, y el patrón de composición con children.

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `main.jsx` | Punto de entrada de React (createRoot) |
| `App.jsx` | Componente raíz con datos de posts y layout compuesto |
| `App.css` | Estilos de la aplicación y componentes |
| `index.css` | Estilos globales |
| `components/Header.jsx` | Header con prop title y valor por defecto |
| `components/PostCard.jsx` | Tarjeta de post con múltiples props y badge de estado |
| `components/PostList.jsx` | Lista de posts con map+keys y estado vacío |
| `components/Section.jsx` | Wrapper de sección usando prop children |
| `index.html` | Punto de entrada HTML de Vite |
| `vite.config.js` | Configuración de Vite |
| `package.json` | Dependencias y scripts |

## Configuración

```bash
cd part-2-react/chapter-08
npm install
```

## Ejecutar

```bash
npm run dev
```

## Conceptos

- Props: pasar datos de componente padre a hijo
- Destructuring de props en parámetros de función
- Valores por defecto en parámetros (ES6)
- Renderizar listas con `.map()` y `key` únicos
- La prop `children` para composición flexible
- Tipado con JSDoc usando `@typedef` y `@param`
- Estilos condicionales basados en props
