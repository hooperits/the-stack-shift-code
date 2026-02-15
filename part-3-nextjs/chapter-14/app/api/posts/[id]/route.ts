// EN: Route Handler — GET a single CMS post by ID
// ES: Route Handler — obtener un post del CMS por ID
// Chapter/Capítulo 14: Data Fetching

import { getPostById } from "@/data/posts";

// EN: Simulated delay to make loading UI observable during development
// ES: Retraso simulado para hacer visible el loading UI durante desarrollo
// EN: In Next.js 15, params is a Promise — must be awaited
// ES: En Next.js 15, params es una Promise — debe usarse await
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return Response.json({ error: "Post not found" }, { status: 404 });
  }

  return Response.json(post);
}
