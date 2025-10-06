import React from 'react';
import { cn } from '@/lib/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'subscription' | 'success' | 'warning';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: "bg-primary-500/18 text-slate-100 border-primary-500/35",
    subscription: "bg-accent/20 text-[#c1f1ff] border-accent/40",
    success: "bg-success/18 text-[#d1fae5] border-success/40",
    warning: "bg-warning/22 text-[#fef3c7] border-warning/45"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border leading-tight",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
