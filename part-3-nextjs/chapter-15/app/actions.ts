// Chapter/Capítulo 15: Server Actions y Mutations
// EN: Server Actions — functions that run on the server, invoked from client forms
// ES: Server Actions — funciones que se ejecutan en el servidor, invocadas desde formularios del cliente
"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { addPost, removePost } from "@/data/posts";

// EN: ActionState — return type for Server Actions used with useActionState
// ES: ActionState — tipo de retorno para Server Actions usados con useActionState
export type ActionState = {
  errors?: Record<string, string[]>;
  message?: string;
  success?: boolean;
};

// EN: Zod schema — validates post form data with Spanish error messages
// ES: Esquema Zod — valida datos del formulario de post con mensajes en español
const PostSchema = z.object({
  title: z.string().min(3, "El título debe tener al menos 3 caracteres"),
  author: z.string().min(1, "El autor es obligatorio"),
  status: z.enum(["draft", "published"], {
    message: "Estado inválido",
  }),
  excerpt: z.string().min(10, "El extracto debe tener al menos 10 caracteres"),
});

// EN: createPost — Server Action that creates a new CMS post from form data
// ES: createPost — Server Action que crea un nuevo post del CMS desde datos del formulario
export async function createPost(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // EN: Extract form fields from FormData
  // ES: Extraer campos del formulario desde FormData
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const status = formData.get("status") as string;
  const excerpt = formData.get("excerpt") as string;

  // EN: Validate with Zod — returns field-specific errors on failure
  // ES: Validar con Zod — retorna errores por campo si falla
  const result = PostSchema.safeParse({ title, author, status, excerpt });

  if (!result.success) {
    return {
      errors: z.flattenError(result.error).fieldErrors,
      message: "Error de validación",
    };
  }

  // EN: Generate a unique ID based on timestamp
  // ES: Generar un ID único basado en timestamp
  const id = `post-${Date.now()}`;

  // EN: Add the new post to the data store
  // ES: Agregar el nuevo post al almacén de datos
  addPost({
    id,
    title: result.data.title,
    author: result.data.author,
    status: result.data.status,
    excerpt: result.data.excerpt,
  });

  // EN: Revalidate the posts list so the new post appears
  // ES: Revalidar la lista de posts para que aparezca el nuevo post
  revalidatePath("/posts");

  console.log(`[Server Action] Post created: ${id} — "${title}"`);

  return { success: true, message: "Post creado exitosamente" };
}

// EN: deletePost — Server Action that removes a post by ID using .bind() pattern
// ES: deletePost — Server Action que elimina un post por ID usando el patrón .bind()
export async function deletePost(
  id: string,
  formData: FormData
): Promise<void> {
  // EN: Remove the post from the data store
  // ES: Eliminar el post del almacén de datos
  removePost(id);

  // EN: Revalidate the posts list so the deleted post disappears
  // ES: Revalidar la lista de posts para que el post eliminado desaparezca
  revalidatePath("/posts");

  console.log(`[Server Action] Post deleted: ${id}`);
}
