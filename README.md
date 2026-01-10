# The Stack Shift - Code Repository

> **[Ver en Español](README.es.md)**

Complete source code for **The Stack Shift: A Hands-On Fullstack JavaScript Guide for Infrastructure Professionals**.

## About the Book

This book teaches fullstack JavaScript development to IT infrastructure professionals (sysadmins, network engineers, virtualization specialists) by building a real CMS from scratch.

**Tech Stack**: JavaScript ES2024 → React 19 → Next.js 15 → Node.js 22 → TypeScript

**Get the Book**: [Available on Amazon Kindle, Apple Books, and Google Play Books]

## Prerequisites

- **Node.js 22 LTS** or higher
- **npm** (included with Node.js)
- **Git**
- A code editor (VS Code recommended)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/hooperits/the-stack-shift-code.git
cd the-stack-shift-code

# Navigate to a specific chapter
cd part-1-javascript/chapter-01

# Install dependencies (if applicable)
npm install

# Run the code
node index.js
```

## Repository Structure

```
the-stack-shift-code/
├── part-1-javascript/          # Chapters 1-6: JavaScript Fundamentals
│   ├── chapter-01/             # Developer Environment Setup
│   ├── chapter-02/             # Variables, Types, and Operators
│   ├── chapter-03/             # Functions and Scope
│   ├── chapter-04/             # Arrays and Objects
│   ├── chapter-05/             # Asynchronous Programming
│   └── chapter-06/             # Project: CMS CLI Tool
│
├── part-2-react/               # Chapters 7-11: React Fundamentals
│   ├── chapter-07/             # Introduction to React
│   ├── chapter-08/             # Props and Composition
│   ├── chapter-09/             # State and Events
│   ├── chapter-10/             # Effects and Lifecycle
│   └── chapter-11/             # Project: React Dashboard
│
├── part-3-nextjs/              # Chapters 12-17: Next.js Fullstack
│   ├── chapter-12/             # App Router and Pages
│   ├── chapter-13/             # Server and Client Components
│   ├── chapter-14/             # Data Fetching
│   ├── chapter-15/             # Server Actions and Mutations
│   ├── chapter-16/             # Authentication
│   └── chapter-17/             # Project: Integrated CMS
│
├── part-4-nodejs/              # Chapters 18-22: Node.js Backend
│   ├── chapter-18/             # Node.js and HTTP
│   ├── chapter-19/             # Express and REST APIs
│   ├── chapter-20/             # Database with Prisma
│   ├── chapter-21/             # Security and File Uploads
│   └── chapter-22/             # Project: Headless API
│
└── part-5-production/          # Chapters 23-24: Production
    ├── chapter-23/             # Docker and CI/CD
    └── chapter-24/             # Deployment and Monitoring
```

## Chapter Navigation

| Part | Chapters | Technology | Project |
|------|----------|------------|---------|
| **I** | 1-6 | JavaScript ES2024 | CLI Tool |
| **II** | 7-11 | React 19 + JSX → TSX | Admin Dashboard |
| **III** | 12-17 | Next.js 15 + TypeScript | Fullstack CMS |
| **IV** | 18-22 | Node.js 22 + TypeScript | REST API |
| **V** | 23-24 | Docker + CI/CD | Production Deploy |

## How to Use This Repository

1. **Follow the book**: Each chapter folder contains the complete code for that chapter
2. **Run the examples**: Each folder includes instructions to run the code
3. **Practice with exercises**: Exercise starter code is in `exercises/` subfolders
4. **Check solutions**: Solutions are available in `solutions/` subfolders

## Technology Versions

| Technology | Version | Notes |
|------------|---------|-------|
| Node.js | 22 LTS | Runtime |
| JavaScript | ES2024 | Modern features |
| TypeScript | 5.x | From Part II onwards |
| React | 19 | With Server Components |
| Next.js | 15 | App Router |
| PostgreSQL | 16 | Database |
| Prisma | 6.x | ORM |

## Contributing

This repository contains the official code for the book. If you find errors or have suggestions:

1. Open an issue describing the problem
2. Reference the chapter and page number
3. Include error messages if applicable

## License

The code in this repository is provided for educational purposes as a companion to "The Stack Shift" book.

---

**Author**: Juan Carlos Hooper
**Website**: [hooperits.com](https://hooperits.com)
**Book**: The Stack Shift - A Hands-On Fullstack JavaScript Guide for Infrastructure Professionals
