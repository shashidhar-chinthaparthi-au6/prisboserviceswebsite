import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ConditionalLayout from '@/components/ConditionalLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prisbo - Software Services & Products',
  description: 'Professional software development services including website development, mobile app development, and custom software solutions.',
  keywords: 'software development, web development, mobile app development, custom software',
  authors: [{ name: 'Prisbo' }],
  openGraph: {
    title: 'Prisbo - Software Services & Products',
    description: 'Professional software development services',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Prisbo',
              description: 'Software Services & Products Company',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://prisbo.com',
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
