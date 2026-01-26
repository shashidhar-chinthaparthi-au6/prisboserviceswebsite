'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdminPage && <Navigation />}
      <main className={!isAdminPage ? 'pt-20 lg:pt-24 relative' : ''}>{children}</main>
      {!isAdminPage && <Footer />}
    </>
  );
}
