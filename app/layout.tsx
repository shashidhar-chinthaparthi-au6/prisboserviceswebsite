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
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9BXRZR82DG"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9BXRZR82DG');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Prisbo',
              description: 'Software Services & Products Company',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://prisbo.com',
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://prisbo.com'}/icon.svg`,
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
