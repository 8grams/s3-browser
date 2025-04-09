import { getSignedUrlForObject } from '../../utils/s3';
import { requireAuth } from '../../middleware/auth';
import { env } from "../../utils/env";

export async function GET({ request }) {
  // Check authentication
  const authResponse = requireAuth(request);
  if (authResponse) return authResponse;

  const url = new URL(request.url);
  const key = url.searchParams.get('key');
  const bucket = env.DEFAULT_BUCKET;

  if (!key) {
    return new Response('Missing key parameter', { status: 400 });
  }

  try {
    const signedUrl = await getSignedUrlForObject(bucket, key);
    return new Response(null, {
      status: 302,
      headers: {
        Location: signedUrl,
      },
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
} 