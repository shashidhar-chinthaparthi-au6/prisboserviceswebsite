import Link from 'next/link';

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
      <div className={`${sizeClasses[size]} flex-shrink-0 relative`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>
            <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f3f4f6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Background Circle with Gradient */}
          <circle cx="60" cy="60" r="56" fill="url(#logoGradient)" />
          <circle cx="60" cy="60" r="56" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          
          {/* Inner Glow Circle */}
          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          
          {/* Abstract Tech Symbol - Interconnected Nodes */}
          <g filter="url(#glow)">
            {/* Central Hub */}
            <circle cx="60" cy="60" r="12" fill="url(#innerGradient)" opacity="0.9" />
            <circle cx="60" cy="60" r="8" fill="rgba(255,255,255,0.3)" />
            
            {/* Top Node */}
            <circle cx="60" cy="30" r="8" fill="url(#innerGradient)" />
            <line x1="60" y1="42" x2="60" y2="38" stroke="url(#innerGradient)" strokeWidth="4" strokeLinecap="round" />
            
            {/* Bottom Node */}
            <circle cx="60" cy="90" r="8" fill="url(#innerGradient)" />
            <line x1="60" y1="78" x2="60" y2="82" stroke="url(#innerGradient)" strokeWidth="4" strokeLinecap="round" />
            
            {/* Left Node */}
            <circle cx="30" cy="60" r="8" fill="url(#innerGradient)" />
            <line x1="38" y1="60" x2="42" y2="60" stroke="url(#innerGradient)" strokeWidth="4" strokeLinecap="round" />
            
            {/* Right Node */}
            <circle cx="90" cy="60" r="8" fill="url(#innerGradient)" />
            <line x1="82" y1="60" x2="78" y2="60" stroke="url(#innerGradient)" strokeWidth="4" strokeLinecap="round" />
            
            {/* Diagonal Connections - Top Right */}
            <circle cx="85" cy="35" r="6" fill="url(#innerGradient)" opacity="0.8" />
            <path d="M 68 48 L 79 41" stroke="url(#innerGradient)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
            
            {/* Diagonal Connections - Top Left */}
            <circle cx="35" cy="35" r="6" fill="url(#innerGradient)" opacity="0.8" />
            <path d="M 52 48 L 41 41" stroke="url(#innerGradient)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
            
            {/* Diagonal Connections - Bottom Right */}
            <circle cx="85" cy="85" r="6" fill="url(#innerGradient)" opacity="0.8" />
            <path d="M 68 72 L 79 79" stroke="url(#innerGradient)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
            
            {/* Diagonal Connections - Bottom Left */}
            <circle cx="35" cy="85" r="6" fill="url(#innerGradient)" opacity="0.8" />
            <path d="M 52 72 L 41 79" stroke="url(#innerGradient)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
            
            {/* Data Flow Lines - Animated feel */}
            <path d="M 60 30 Q 45 45 30 60" stroke="url(#innerGradient)" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="3,3" />
            <path d="M 60 30 Q 75 45 90 60" stroke="url(#innerGradient)" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="3,3" />
            <path d="M 60 90 Q 45 75 30 60" stroke="url(#innerGradient)" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="3,3" />
            <path d="M 60 90 Q 75 75 90 60" stroke="url(#innerGradient)" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="3,3" />
          </g>
        </svg>
      </div>
      
      {/* Logo Text with Gradient Effect */}
      {showText && (
        <span className={`font-bold bg-gradient-to-r from-primary to-red-700 bg-clip-text text-transparent ${textSizes[size]} tracking-tight transition-all duration-300 group-hover:from-red-700 group-hover:to-primary`}>
          Prisbo
        </span>
      )}
    </Link>
  );
}
