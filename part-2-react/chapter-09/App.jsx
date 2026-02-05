// App.jsx - Main application component
// App.jsx - Componente principal de la aplicación
// Chapter/Capítulo 9: Estado y Eventos

import { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './App.css';

// EN: Initial post data — defined outside the component so it's created once
// ES: Datos iniciales de posts — definidos fuera del componente para crearse una sola vez
const initialPosts = [
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
  // EN: Posts managed with useState — allows adding new posts dynamically
  // ES: Posts gestionados con useState — permite agregar nuevos posts dinámicamente
  const [posts, setPosts] = useState(initialPosts);

  // EN: Add a new post — spread creates a new array (immutable update, like a VM snapshot)
  // ES: Agregar un nuevo post — spread crea un nuevo array (actualización inmutable, como un snapshot de VM)
  function addPost(newPost) {
    setPosts(prev => [...prev, newPost]);
  }

  return (
    <>
      <Header title="CMS Dashboard" />
      <main className="main-content">
        <Section title="Crear Nuevo Post">
          <PostForm onAddPost={addPost} />
        </Section>

        <Section title="Posts Recientes">
          <PostList posts={posts} />
        </Section>
      </main>
    </>
  );
}

export default App;
