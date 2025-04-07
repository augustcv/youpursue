# YouPursue - International Student Exchange Programs

This repository contains the codebase for the YouPursue international student exchange programs website. The site is built with Next.js, styled with Tailwind CSS, and uses Supabase as its backend database.

## Features

- Modern responsive design
- Interactive student exchange program information
- Program application system
- Program flyer request form
- Admin dashboard for managing applications and flyer requests
- Optimized for search engines with comprehensive metadata

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Supabase
- **Styling**: Tailwind CSS, Radix UI components
- **Animation**: Framer Motion
- **Deployment**: Vercel

## Development

### Prerequisites

- Node.js 20.x or higher
- npm 8.x or higher

### Local Development

1. Clone the repository:
   ```
   git clone https://github.com/your-username/youpursue-website.git
   cd youpursue-website
   ```

2. Install dependencies:
   ```
   npm install --legacy-peer-deps
   ```

3. Create a `.env.local` file with the required environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create an optimized production build:

```
npm run build
```

To start the production server:

```
npm start
```

## Deployment

The site is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure the environment variables in the Vercel dashboard
3. Deploy the main branch

The provided GitHub Actions workflow also enables automatic deployment when changes are pushed to the main branch.

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable UI components
- `lib/` - Utility functions and services
- `public/` - Static assets
- `styles/` - Global styles
- `types/` - TypeScript type definitions
- `hooks/` - Custom React hooks

## Contributing

1. Fork the repository
2. Create a feature branch:
   ```
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

[MIT License](LICENSE) 