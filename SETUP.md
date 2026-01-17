# Prisbo Website - Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/prisbo?retryWrites=true&w=majority
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=your_secure_password_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Access the Website**
   - Public site: http://localhost:3000
   - Admin dashboard: http://localhost:3000/admin

## MongoDB Setup

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string and add it to `.env.local`

The database will automatically create a `leads` collection when the first lead is submitted.

## Admin Dashboard

- **URL**: `/admin`
- **Default Credentials**: Set via `ADMIN_USERNAME` and `ADMIN_PASSWORD` in `.env.local`
- **Features**:
  - View all leads
  - Search by name/email
  - Filter by service/product
  - Pagination
  - Sort by date (newest first)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── (public)/          # Public pages
│   │   ├── page.tsx       # Home
│   │   ├── services/      # Service pages
│   │   ├── products/      # Product pages
│   │   ├── about/         # About page
│   │   ├── blog/          # Blog pages
│   │   └── contact/       # Contact page
│   ├── admin/             # Admin dashboard (protected)
│   └── api/               # API routes
│       ├── leads/         # Lead submission
│       └── admin/         # Admin authentication & leads
├── components/            # Reusable components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── LeadForm.tsx
│   └── ConditionalLayout.tsx
├── lib/                   # Utilities
│   ├── mongodb.ts         # MongoDB connection
│   ├── auth.ts            # Admin authentication
│   └── validation.ts      # Form validation
└── types/                 # TypeScript types
    └── lead.ts
```

## Features Implemented

✅ **Public Pages**
- Home page with hero section and services overview
- Services page with 3 detailed service pages
- Products page with individual product pages
- About page
- Blog with individual blog posts
- Contact page

✅ **Lead Capture**
- Lead forms on all key pages
- MongoDB storage with proper schema
- Form validation (frontend + backend)
- Rate limiting (5 submissions per 15 minutes)
- Success/error handling

✅ **Admin Dashboard**
- Secure authentication
- Lead management table
- Search functionality
- Filter by service/product
- Pagination
- Clean, functional UI

✅ **SEO Optimization**
- Metadata on all pages
- Schema markup (Organization, Service)
- Sitemap.xml
- Robots.txt
- Clean URLs
- One H1 per page

✅ **Design System**
- Strict blue + red theme
- Responsive design
- Modern UI/UX
- Tailwind CSS

## Deployment to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `MONGODB_URI`
   - `ADMIN_USERNAME`
   - `ADMIN_PASSWORD`
   - `NEXT_PUBLIC_SITE_URL` (your production URL)
4. Deploy

## Security Notes

- Admin credentials are stored in environment variables
- Admin routes are protected server-side
- Rate limiting prevents spam submissions
- MongoDB connection uses secure connection strings
- For production, consider:
  - Using bcrypt for password hashing
  - Implementing proper session management (e.g., NextAuth.js)
  - Adding CSRF protection
  - Using Redis for rate limiting

## Next Steps

1. Customize content on pages
2. Add your actual product/service details
3. Update contact information
4. Add real blog posts
5. Configure production MongoDB
6. Set up custom domain
7. Enhance admin dashboard as needed

## Support

For issues or questions, refer to the main README.md file.
