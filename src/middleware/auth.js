import { parse } from 'cookie';

export function isAuthenticated(request) {
  const cookies = parse(request.headers.get('cookie') || '');
  return cookies.auth === 'true';
}

export function requireAuth(request) {
  if (!isAuthenticated(request)) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/login'
      }
    });
  }
  return null;
} 