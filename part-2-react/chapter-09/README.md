# Chapter 9: State and Events

[🇪🇸 Ver en Español](#capítulo-9-estado-y-eventos)

Interactive components with useState, event handling, and controlled forms.

## Files

| File | Description |
|------|-------------|
| `main.jsx` | React entry point (createRoot) |
| `App.jsx` | Root component with useState for posts and addPost handler |
| `App.css` | Application, component, and form styles |
| `index.css` | Global styles |
| `components/Header.jsx` | Header with title prop |
| `components/PostCard.jsx` | Post card with status badge |
| `components/PostList.jsx` | Post list with map+keys |
| `components/Section.jsx` | Section wrapper using children |
| `components/PostForm.jsx` | Controlled form with validation |
| `index.html` | Vite HTML entry point |
| `vite.config.js` | Vite configuration |
| `package.json` | Dependencies and scripts |

## Setup

```bash
cd part-2-react/chapter-09
npm install
```

## Run

```bash
npm run dev
```

## Concepts

- `useState` hook for managing component state
- Event handling: `onClick`, `onChange`, `onSubmit`
- Controlled inputs: React state as single source of truth
- `event.preventDefault()` for form submission
- Immutable state updates with spread operator
- Form validation with error state
- Lifting state up for shared data between components
- `crypto.randomUUID()` for unique ID generation

---

# Capítulo 9: Estado y Eventos

[🇺🇸 View in English](#chapter-9-state-and-events)

Componentes interactivos con useState, manejo de eventos, y formularios controlados.

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `main.jsx` | Punto de entrada de React (createRoot) |
| `App.jsx` | Componente raíz con useState para posts y handler addPost |
| `App.css` | Estilos de aplicación, componentes y formulario |
| `index.css` | Estilos globales |
| `components/Header.jsx` | Header con prop title |
| `components/PostCard.jsx` | Tarjeta de post con badge de estado |
| `components/PostList.jsx` | Lista de posts con map+keys |
| `components/Section.jsx` | Wrapper de sección usando children |
| `components/PostForm.jsx` | Formulario controlado con validación |
| `index.html` | Punto de entrada HTML de Vite |
| `vite.config.js` | Configuración de Vite |
| `package.json` | Dependencias y scripts |

## Configuración

```bash
cd part-2-react/chapter-09
npm install
```

## Ejecutar

```bash
npm run dev
```

## Conceptos

- Hook `useState` para gestionar estado del componente
- Manejo de eventos: `onClick`, `onChange`, `onSubmit`
- Inputs controlados: estado de React como única fuente de verdad
- `event.preventDefault()` para envío de formularios
- Actualizaciones inmutables de estado con spread operator
- Validación de formulario con estado de errores
- Levantar estado para compartir datos entre componentes
- `crypto.randomUUID()` para generación de IDs únicos
