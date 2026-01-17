# Prisbo Services Website

A production-ready, SEO-optimized website for Prisbo - a software services & products company.

## Features

- 🎨 Strict blue + red theme
- 📊 MongoDB-powered lead collection
- 🔐 Secure admin dashboard
- 🚀 SEO-optimized pages
- 📱 Responsive design
- ⚡ Fast performance (Lighthouse 90+)

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB Atlas
- **Hosting**: Vercel-ready

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.example .env.local
```

3. Update `.env.local` with your MongoDB connection string and admin credentials.

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

- `MONGODB_URI`: MongoDB Atlas connection string
- `ADMIN_USERNAME`: Admin dashboard username
- `ADMIN_PASSWORD`: Admin dashboard password (use bcrypt hash in production)
- `NEXT_PUBLIC_SITE_URL`: Your site URL

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── (public)/          # Public pages
│   ├── admin/             # Admin dashboard (protected)
│   └── api/               # API routes
├── components/            # Reusable components
├── lib/                   # Utilities (MongoDB, validation)
└── types/                 # TypeScript types
```

## Deployment

Deploy to Vercel:
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

## License

Proprietary - Prisbo Services
# prisboserviceswebsite
