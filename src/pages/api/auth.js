import { serialize } from 'cookie';

export async function POST({ request }) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');

  const validUsername = import.meta.env.AUTH_USERNAME;
  const validPassword = import.meta.env.AUTH_PASSWORD;

  if (username === validUsername && password === validPassword) {
    // Set authentication cookie
    const headers = new Headers();
    headers.append(
      'Set-Cookie',
      serialize('auth', 'true', {
        path: '/',
        httpOnly: true,
        secure: import.meta.env.PROD,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 // 24 hours
      })
    );
    headers.append('Location', '/');

    return new Response(null, { status: 302, headers });
  }

  return new Response(null, {
    status: 302,
    headers: { Location: '/login?error=Invalid%20username%20or%20password' }
  });
}
