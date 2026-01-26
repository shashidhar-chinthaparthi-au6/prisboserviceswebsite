import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ 
  className = '', 
  showText = true,
  size = 'md' 
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <Link href="/" className={`flex items-center gap-3 ${className} group`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} flex-shrink-0 relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Image
          src="/logonew.png"
          alt="Prisbo Logo"
          fill
          className="object-contain drop-shadow-lg relative z-10"
          priority
        />
      </div>
      
      {/* Logo Text with Enhanced Gradient Effect */}
      {showText && (
        <div className="relative">
          {/* Main text with animated gradient */}
          <span className={`font-serif font-bold ${textSizes[size]} tracking-[0.15em] transition-all duration-500 relative z-10 block`}>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gold via-accent via-gold to-accent bg-clip-text text-transparent bg-[length:200%_auto] group-hover:bg-[length:100%_auto] transition-all duration-700 inline-block">
                Prisbo
              </span>
              {/* Shimmer overlay effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></span>
            </span>
          </span>
          {/* Decorative underline that appears on hover */}
          <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold via-accent to-transparent opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-700 origin-center"></span>
          {/* Glow effect behind text */}
          <span className="absolute bg-gradient-to-r from-gold/40 via-accent/40 to-gold/40 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 -z-10" style={{ top: '-8px', bottom: '-8px', left: '-12px', right: '-12px' }}></span>
        </div>
      )}
    </Link>
  );
}
