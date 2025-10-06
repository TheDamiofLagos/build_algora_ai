import React from 'react';
import { cn } from '@/lib/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'subscription' | 'success' | 'warning';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: "bg-primary-500/16 text-slate-200 border-primary-500/25",
    subscription: "bg-accent/14 text-[#e0f2fe] border-accent/25",
    success: "bg-success/16 text-[#bbf7d0] border-success/25",
    warning: "bg-warning/16 text-[#fef3c7] border-warning/25"
  };
  
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border uppercase tracking-wider",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
