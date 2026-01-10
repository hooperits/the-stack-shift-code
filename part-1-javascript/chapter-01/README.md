# CMS CLI

> CLI para gestión de contenido - The Stack Shift

Este es el proyecto del CMS que construiremos a lo largo del libro "The Stack Shift".

## Requisitos

- Node.js 22 LTS o superior
- npm 10.x o superior

## Instalación

```bash
# Clonar o descargar el proyecto
cd cms-cli

# Instalar dependencias (cuando las haya)
npm install
```

## Uso

```bash
# Ejecutar el programa
npm start

# Verificar el entorno de desarrollo
npm run verify
```

## Estructura del Proyecto

```
cms-cli/
├── package.json      # Configuración del proyecto
├── index.js          # Punto de entrada
├── verify-setup.js   # Script de verificación del entorno
├── .gitignore        # Archivos excluidos de Git
└── README.md         # Este archivo
```

## Capítulos del Libro

Este proyecto evoluciona con cada capítulo:

- **Capítulo 1**: Setup inicial (este estado)
- **Capítulo 2**: Variables y modelo de Post
- **Capítulo 3**: Funciones de validación
- **Capítulo 4**: Colección de posts
- **Capítulo 5**: Lectura/escritura de archivos
- **Capítulo 6**: CLI completo integrado

## Licencia

MIT
