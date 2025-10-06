import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  variant?: 'text' | 'image';
}

const sizeClasses = {
  sm: 'text-2xl',
  md: 'text-3xl',
  lg: 'text-4xl',
  xl: 'text-5xl',
};

const dotSizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
  xl: 'w-6 h-6',
};

const imageSizes = {
  sm: { width: 120, height: 40 },
  md: { width: 150, height: 50 },
  lg: { width: 180, height: 60 },
  xl: { width: 220, height: 70 },
};

export function Logo({ size = 'md', className = '', variant = 'text' }: LogoProps) {
  if (variant === 'image') {
    return (
      <div className={className}>
        <Image
          src="/assets/algora-logo.png"
          alt="Algora"
          width={imageSizes[size].width}
          height={imageSizes[size].height}
          priority
        />
      </div>
    );
  }

  return (
    <div className={`flex items-end gap-2 pb-1 ${className}`}>
      <span className={`font-bold text-foreground ${sizeClasses[size]}`}>
        Algora
      </span>
      <span className={`${dotSizeClasses[size]} rounded-full bg-accent mb-1`} style={{ backgroundColor: '#22d3ee' }} />
    </div>
  );
}
