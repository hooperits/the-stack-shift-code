// App.jsx - Main application component
// App.jsx - Componente principal de la aplicación
// Chapter/Capítulo 8: Props y Composición

import Header from './components/Header';
import Section from './components/Section';
import PostList from './components/PostList';
import './App.css';

// EN: Sample post data — hardcoded for now, fetched from API in Chapter 10
// ES: Datos de posts de ejemplo — hardcodeados por ahora, obtenidos de API en Capítulo 10
const posts = [
  {
    id: 'post-001',
    title: 'Introducción a Kubernetes para Sysadmins',
    author: 'María García',
    status: 'published',
    excerpt: 'Cómo tu experiencia en infraestructura te prepara para contenedores.'
  },
  {
    id: 'post-002',
    title: 'Migrando de VMware a Proxmox',
    author: 'Carlos Rodríguez',
    status: 'draft',
    excerpt: 'Guía paso a paso para migrar tu infraestructura de virtualización.'
  },
  {
    id: 'post-003',
    title: 'Automatización con Ansible: Primeros Pasos',
    author: 'Ana Martínez',
    status: 'published',
    excerpt: 'Deja de configurar servidores manualmente y automatiza con playbooks.'
  },
  {
    id: 'post-004',
    title: 'Monitoreo con Prometheus y Grafana',
    author: 'María García',
    status: 'published',
    excerpt: 'Implementa observabilidad profesional en tu infraestructura.'
  },
  {
    id: 'post-005',
    title: 'Seguridad en APIs REST: Guía Práctica',
    author: 'Carlos Rodríguez',
    status: 'draft',
    excerpt: 'Las mejores prácticas de seguridad que todo developer debe conocer.'
  }
];

// EN: Root component that composes the application layout
// ES: Componente raíz que compone el layout de la aplicación
function App() {
  return (
    <>
      <Header title="CMS Dashboard" />
      <main className="main-content">
        <Section title="Posts Recientes">
          <PostList posts={posts} />
        </Section>
      </main>
    </>
  );
}

export default App;
