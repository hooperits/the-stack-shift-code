// Chapter/Capítulo 15: Server Actions y Mutations
// EN: Create post form — Client Component that uses useActionState for form submission
// ES: Formulario de crear post — Client Component que usa useActionState para envío de formularios
"use client";

import { useActionState } from "react";
import { createPost } from "@/app/actions";
import type { ActionState } from "@/app/actions";
import Link from "next/link";

// EN: Initial state for useActionState — empty state before first submission
// ES: Estado inicial para useActionState — estado vacío antes del primer envío
const initialState: ActionState = {};

export default function CreatePostPage() {
  // EN: useActionState returns [state, formAction, isPending]
  // ES: useActionState retorna [state, formAction, isPending]
  const [state, formAction] = useActionState(createPost, initialState);

  return (
    <section>
      <h2>Crear Nuevo Post</h2>

      {/* EN: Success message after post creation */}
      {/* ES: Mensaje de éxito después de crear el post */}
      {state.success && <p className="form-success">{state.message}</p>}

      {/* EN: General error message */}
      {/* ES: Mensaje de error general */}
      {state.message && !state.success && (
        <p className="form-error">{state.message}</p>
      )}

      {/* EN: Form uses native action attribute — works with and without JavaScript */}
      {/* ES: El formulario usa el atributo action nativo — funciona con y sin JavaScript */}
      <form action={formAction} className="post-form">
        {/* EN: Title field with validation error */}
        {/* ES: Campo de título con error de validación */}
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input type="text" id="title" name="title" />
          {state.errors?.title && (
            <p className="field-error">{state.errors.title[0]}</p>
          )}
        </div>

        {/* EN: Author field with validation error */}
        {/* ES: Campo de autor con error de validación */}
        <div className="form-group">
          <label htmlFor="author">Autor</label>
          <input type="text" id="author" name="author" />
          {state.errors?.author && (
            <p className="field-error">{state.errors.author[0]}</p>
          )}
        </div>

        {/* EN: Status select with validation error */}
        {/* ES: Selector de estado con error de validación */}
        <div className="form-group">
          <label htmlFor="status">Estado</label>
          <select id="status" name="status">
            <option value="draft">Borrador</option>
            <option value="published">Publicado</option>
          </select>
          {state.errors?.status && (
            <p className="field-error">{state.errors.status[0]}</p>
          )}
        </div>

        {/* EN: Excerpt textarea with validation error */}
        {/* ES: Área de texto para extracto con error de validación */}
        <div className="form-group">
          <label htmlFor="excerpt">Extracto</label>
          <textarea id="excerpt" name="excerpt" rows={3} />
          {state.errors?.excerpt && (
            <p className="field-error">{state.errors.excerpt[0]}</p>
          )}
        </div>

        {/* EN: Submit button */}
        {/* ES: Botón de envío */}
        <button type="submit" className="btn-submit">
          Crear Post
        </button>
      </form>

      {/* EN: Back to posts list */}
      {/* ES: Volver a la lista de posts */}
      <Link href="/posts" className="back-link">
        ← Volver a Posts
      </Link>
    </section>
  );
}
