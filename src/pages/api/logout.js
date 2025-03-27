import { serialize } from 'cookie';

export async function POST({ redirect }) {
  const headers = new Headers();
  headers.append(
    'Set-Cookie',
    serialize('auth', 'false', {
      path: '/',
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'lax',
      maxAge: 0
    })
  );

  return redirect('/login', {
    status: 302,
    headers
  });
} 