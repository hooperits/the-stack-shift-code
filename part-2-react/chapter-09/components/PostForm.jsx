// PostForm.jsx - Post creation form component
// PostForm.jsx - Componente de formulario para crear posts
// Chapter/Capítulo 9: Estado y Eventos

import { useState } from 'react';

/**
 * @typedef {object} PostFormProps
 * @property {function} onAddPost - Callback to add a new post / Callback para agregar un nuevo post
 */

// EN: Component uses individual useState for each form field (controlled inputs)
// ES: Componente usa useState individual para cada campo del formulario (inputs controlados)

/** @param {PostFormProps} props */
function PostForm({ onAddPost }) {
  // EN: Each field has its own state — React state is the single source of truth
  // ES: Cada campo tiene su propio estado — el estado de React es la única fuente de verdad
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('draft');
  const [excerpt, setExcerpt] = useState('');

  // EN: Validation errors — keys match field names, values are error messages
  // ES: Errores de validación — las claves coinciden con nombres de campos, valores son mensajes de error
  const [errors, setErrors] = useState({});

  // EN: Validate required fields — returns an object with error messages
  // ES: Validar campos requeridos — retorna un objeto con mensajes de error
  function validate() {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'El título es requerido';
    if (!author.trim()) newErrors.author = 'El autor es requerido';
    if (!excerpt.trim()) newErrors.excerpt = 'El extracto es requerido';
    return newErrors;
  }

  // EN: Handle form submission — validate, prevent page reload, create post, reset form
  // ES: Manejar envío del formulario — validar, prevenir recarga, crear post, resetear formulario
  function handleSubmit(event) {
    event.preventDefault();

    // EN: Check validation before creating the post
    // ES: Verificar validación antes de crear el post
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // EN: Create new post object with unique ID
    // ES: Crear nuevo objeto post con ID único
    const newPost = {
      id: crypto.randomUUID(),
      title,
      author,
      status,
      excerpt
    };

    onAddPost(newPost);

    // EN: Reset all fields to initial values after successful submission
    // ES: Resetear todos los campos a valores iniciales después de envío exitoso
    setTitle('');
    setAuthor('');
    setStatus('draft');
    setExcerpt('');
    setErrors({});
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Título</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <span className="field-error">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="author">Autor</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {errors.author && <span className="field-error">{errors.author}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="status">Estado</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="draft">Borrador</option>
          <option value="published">Publicado</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="excerpt">Extracto</label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={3}
        />
        {errors.excerpt && <span className="field-error">{errors.excerpt}</span>}
      </div>

      <button type="submit" className="form-button">Crear Post</button>
    </form>
  );
}

export default PostForm;
