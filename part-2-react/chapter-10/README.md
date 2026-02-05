# Chapter 10: Efectos y Ciclo de Vida

Este directorio contiene el código del Capítulo 10 del libro "The Stack Shift".

## Contenido

En este capítulo aprenderás:
- El hook `useEffect` para efectos secundarios
- Fetching de datos desde una API simulada
- Estados de carga (loading states)
- Manejo de errores con try/catch
- Función de cleanup para prevenir memory leaks
- Transición de JSX a TSX (TypeScript)

## Estructura de archivos

```
chapter-10/
├── api.ts              # API simulada con fetchPosts()
├── types.ts            # Interface Post compartida
├── App.tsx             # Componente principal con useEffect
├── App.css             # Estilos incluyendo loading/error
├── index.css           # Estilos globales
├── main.tsx            # Punto de entrada
└── components/
    ├── Header.tsx      # Header con TypeScript props
    ├── PostCard.tsx    # Tarjeta de post tipada
    ├── PostForm.tsx    # Formulario con tipos
    ├── PostList.tsx    # Lista de posts tipada
    └── Section.tsx     # Wrapper de sección tipado
```

## Cómo usar

Para ejecutar este código:

```bash
# Crear proyecto Vite con React
npm create vite@latest cms-dashboard -- --template react

cd cms-dashboard

# Reemplazar src/ con los archivos de este capítulo
rm -rf src
cp -r /ruta/a/chapter-10 src

# Instalar dependencias y ejecutar
npm install
npm run dev
```

## Verificación

```bash
# El proyecto debe compilar sin errores
npx vite build

# El dev server debe mostrar:
# 1. "Cargando posts..." por ~1 segundo
# 2. Lista de 5 posts después del fetch
```

## Conceptos clave

| Concepto | Descripción |
|----------|-------------|
| `useEffect` | Hook para efectos secundarios (fetch, timers) |
| Dependency array `[]` | Ejecuta solo al montar el componente |
| Loading state | Feedback visual durante operaciones async |
| Error state | Manejo graceful de fallos sin crashear |
| Cleanup function | Previene updates en componentes desmontados |
| TypeScript interfaces | Contratos de tipos para datos y props |
