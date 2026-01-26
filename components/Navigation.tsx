'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/feedback', label: 'Feedback' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 backdrop-blur-sm ${
      scrolled 
        ? 'glass-morphism shadow-luxury backdrop-blur-md border-b border-gold/20 dark:border-gold/10' 
        : 'navbar-bg backdrop-blur-sm'
    }`}>
      <div className="container-luxury">
        <div className="flex justify-between items-center h-20 lg:h-24">
          <div className="flex items-center relative">
            <Logo size="lg" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wider transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-gold'
                    : 'text-primary dark:text-neutral-white hover:text-gold'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></span>
                )}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-neutral-gray/20 dark:border-gold/20">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary dark:text-neutral-white hover:text-gold focus:outline-none transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 animate-fade-in-up">
            <div className="divider-luxury my-4"></div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium tracking-wide transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-gold bg-gold/10 dark:bg-gold/20 border-l-2 border-gold'
                    : 'text-primary dark:text-neutral-white hover:text-gold hover:bg-gold/5 dark:hover:bg-gold/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
