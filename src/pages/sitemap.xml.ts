import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(null, { status: 404, statusText: 'Not Found' });
};
