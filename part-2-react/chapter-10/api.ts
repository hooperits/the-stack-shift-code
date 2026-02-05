// api.ts - Simulated API functions
// api.ts - Funciones de API simulada
// Chapter/Capítulo 10: Efectos y Ciclo de Vida

import type { Post } from './types';

// EN: Toggle to simulate API errors (for testing error handling)
// ES: Toggle para simular errores de API (para probar manejo de errores)
const SIMULATE_ERROR = false;

// EN: Delay in milliseconds to simulate network latency
// ES: Delay en milisegundos para simular latencia de red
const SIMULATED_DELAY = 1000;

// EN: Mock posts data — moved from App.jsx to simulate backend data
// ES: Datos mock de posts — movidos desde App.jsx para simular datos del backend
const mockPosts: Post[] = [
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

/**
 * EN: Fetches posts from the simulated API
 * ES: Obtiene posts desde la API simulada
 *
 * @returns Promise resolving to array of posts
 * @throws Error if SIMULATE_ERROR is true
 */
export function fetchPosts(): Promise<Post[]> {
  return new Promise((resolve, reject) => {
    // EN: setTimeout simulates network delay — like waiting for a remote server
    // ES: setTimeout simula delay de red — como esperar a un servidor remoto
    setTimeout(() => {
      if (SIMULATE_ERROR) {
        // EN: Reject simulates a failed API call (network error, server down, etc.)
        // ES: Reject simula una llamada API fallida (error de red, servidor caído, etc.)
        reject(new Error('Error al cargar los posts'));
      } else {
        // EN: Resolve with mock data — in production, this would come from a real API
        // ES: Resolve con datos mock — en producción, esto vendría de una API real
        resolve(mockPosts);
      }
    }, SIMULATED_DELAY);
  });
}
