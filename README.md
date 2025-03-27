# S3 Browser

A server-side rendered web application for browsing AWS S3 buckets. Built with Astro, HTMX, AlpineJS, and TailwindCSS.

## Features

- Browse S3 buckets and folders
- View file details (size, last modified date)
- Download files using pre-signed URLs
- Modern UI with TailwindCSS and DaisyUI
- Server-side rendering for better performance
- HTMX for smooth interactions without full page reloads

## Prerequisites

- Node.js 18 or later
- AWS account with S3 access
- AWS credentials with appropriate permissions

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd s3-browser
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your AWS credentials:
```env
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:4321`

## Usage

1. Enter the name of an S3 bucket you want to browse
2. Navigate through folders by clicking on them
3. Download files using the download button
4. Use the breadcrumb navigation to move up the folder hierarchy

## Security Considerations

- Never commit your `.env` file with real credentials
- Use IAM roles with minimal required permissions
- Consider implementing authentication for the web application
- Use pre-signed URLs with appropriate expiration times

## License

MIT 