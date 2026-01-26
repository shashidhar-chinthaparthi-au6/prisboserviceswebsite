import type { Metadata } from 'next';
import './globals.css';
import ConditionalLayout from '@/components/ConditionalLayout';

export const metadata: Metadata = {
  title: 'Prisbo - Software Services & Products',
  description: 'Professional software development services including website development, mobile app development, and custom software solutions.',
  keywords: 'software development, web development, mobile app development, custom software',
  authors: [{ name: 'Prisbo' }],
  icons: {
    icon: '/logonew.png',
    apple: '/logonew.png',
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
        <link rel="icon" href="/logonew.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logonew.png" />
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
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://prisbo.com'}/logonew.png`,
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
