// EN: Route Handler — GET all CMS posts as JSON
// ES: Route Handler — obtener todos los posts del CMS como JSON
// Chapter/Capítulo 14: Data Fetching

import { posts } from "@/data/posts";

// EN: Simulated delay to make loading UI observable during development
// ES: Retraso simulado para hacer visible el loading UI durante desarrollo
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Response.json(posts);
}
