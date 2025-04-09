import { serialize } from 'cookie';

export async function POST({ redirect }) {
  const headers = new Headers();
  headers.append(
    'Set-Cookie',
    serialize('auth', 'false', {
      path: '/',
      httpOnly: true,
      secure: process.env.PROD,
      sameSite: 'lax',
      maxAge: 0
    })
  );

  headers.append('Location', '/');
  return new Response(null, { status: 302, headers });
} 