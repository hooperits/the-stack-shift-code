# The Stack Shift - Repositorio de Código

> **[View in English](README.md)**

Código fuente completo de **The Stack Shift: Guía Práctica de JavaScript Fullstack para Profesionales de Infraestructura**.

## Sobre el Libro

Este libro enseña desarrollo fullstack JavaScript a profesionales de IT infrastructure (sysadmins, ingenieros de redes, especialistas en virtualización) construyendo un CMS real desde cero.

**Stack Tecnológico**: JavaScript ES2024 → React 19 → Next.js 15 → Node.js 22 → TypeScript

**Obtener el Libro**: [Disponible en Amazon Kindle, Apple Books y Google Play Books]

## Requisitos Previos

- **Node.js 22 LTS** o superior
- **npm** (incluido con Node.js)
- **Git**
- Un editor de código (VS Code recomendado)

## Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/hooperits/the-stack-shift-code.git
cd the-stack-shift-code

# Navegar a un capítulo específico
cd part-1-javascript/chapter-01

# Instalar dependencias (si aplica)
npm install

# Ejecutar el código
node index.js
```

## Estructura del Repositorio

```
the-stack-shift-code/
├── part-1-javascript/          # Capítulos 1-6: Fundamentos de JavaScript
│   ├── chapter-01/             # Entorno del Desarrollador
│   ├── chapter-02/             # Variables, Tipos y Operadores
│   ├── chapter-03/             # Funciones y Scope
│   ├── chapter-04/             # Arrays y Objetos
│   ├── chapter-05/             # Programación Asíncrona
│   └── chapter-06/             # Proyecto: CLI del CMS
│
├── part-2-react/               # Capítulos 7-11: Fundamentos de React
│   ├── chapter-07/             # Introducción a React
│   ├── chapter-08/             # Props y Composición
│   ├── chapter-09/             # Estado y Eventos
│   ├── chapter-10/             # Efectos y Ciclo de Vida
│   └── chapter-11/             # Proyecto: Dashboard React
│
├── part-3-nextjs/              # Capítulos 12-17: Next.js Fullstack
│   ├── chapter-12/             # App Router y Páginas
│   ├── chapter-13/             # Server y Client Components
│   ├── chapter-14/             # Data Fetching
│   ├── chapter-15/             # Server Actions y Mutations
│   ├── chapter-16/             # Autenticación
│   └── chapter-17/             # Proyecto: CMS Integrado
│
├── part-4-nodejs/              # Capítulos 18-22: Backend con Node.js
│   ├── chapter-18/             # Node.js y HTTP
│   ├── chapter-19/             # Express y APIs REST
│   ├── chapter-20/             # Base de Datos con Prisma
│   ├── chapter-21/             # Seguridad y Subida de Archivos
│   └── chapter-22/             # Proyecto: API Headless
│
└── part-5-production/          # Capítulos 23-24: Producción
    ├── chapter-23/             # Docker y CI/CD
    └── chapter-24/             # Deployment y Monitoreo
```

## Navegación por Capítulos

| Parte | Capítulos | Tecnología | Proyecto |
|-------|-----------|------------|----------|
| **I** | 1-6 | JavaScript ES2024 | Herramienta CLI |
| **II** | 7-11 | React 19 + JSX → TSX | Dashboard Admin |
| **III** | 12-17 | Next.js 15 + TypeScript | CMS Fullstack |
| **IV** | 18-22 | Node.js 22 + TypeScript | API REST |
| **V** | 23-24 | Docker + CI/CD | Deploy a Producción |

## Cómo Usar Este Repositorio

1. **Sigue el libro**: Cada carpeta de capítulo contiene el código completo para ese capítulo
2. **Ejecuta los ejemplos**: Cada carpeta incluye instrucciones para ejecutar el código
3. **Practica con ejercicios**: El código inicial de ejercicios está en subcarpetas `exercises/`
4. **Revisa soluciones**: Las soluciones están disponibles en subcarpetas `solutions/`

## Versiones de Tecnologías

| Tecnología | Versión | Notas |
|------------|---------|-------|
| Node.js | 22 LTS | Runtime |
| JavaScript | ES2024 | Features modernas |
| TypeScript | 5.x | Desde Parte II |
| React | 19 | Con Server Components |
| Next.js | 15 | App Router |
| PostgreSQL | 16 | Base de datos |
| Prisma | 6.x | ORM |

## Contribuir

Este repositorio contiene el código oficial del libro. Si encuentras errores o tienes sugerencias:

1. Abre un issue describiendo el problema
2. Referencia el capítulo y número de página
3. Incluye mensajes de error si aplica

## Licencia

El código en este repositorio se proporciona con fines educativos como complemento del libro "The Stack Shift".

---

**Autor**: Juan Carlos Hooper
**Sitio Web**: [hooperits.com](https://hooperits.com)
**Libro**: The Stack Shift - Guía Práctica de JavaScript Fullstack para Profesionales de Infraestructura
