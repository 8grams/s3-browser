# S3 Browser

A server-side rendered web application for browsing AWS S3 buckets. Built with Astro, HTMX, AlpineJS, and TailwindCSS.

## Features

- Browse S3 buckets and folders
- View file details (size, last modified date)
- Download files using pre-signed URLs
- Modern UI with TailwindCSS and DaisyUI
- Server-side rendering for better performance
- HTMX and AlpineJS for smooth interactions

## Run on production

The fastest way is to use Docker. Create `.env` based on `.env.example`, run docker 

```
docker run -p 4321:4321 -v ./.env:/app/.env ghcr.io/8grams/s3-browser
```

## License

MIT 