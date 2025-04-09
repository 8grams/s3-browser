import { serialize } from 'cookie';
import { env } from "./../../utils/env"

export async function POST({ redirect }) {
  const headers = new Headers();
  headers.append(
    'Set-Cookie',
    serialize('auth', 'false', {
      path: '/',
      httpOnly: true,
      secure: env.PROD,
      sameSite: 'lax',
      maxAge: 0
    })
  );

  headers.append('Location', '/');
  return new Response(null, { status: 302, headers });
} 