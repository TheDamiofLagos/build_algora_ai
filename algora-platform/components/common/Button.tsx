import React from 'react';
import { cn } from '@/lib/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'subtle' | 'success';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "px-5 py-2.5 rounded-xl font-semibold text-[15px] transition-all duration-200 inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-br from-accent to-accent-dark text-slate-900 font-bold shadow-[0_16px_30px_rgba(34,211,238,0.35)] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(34,211,238,0.45)] active:translate-y-0",
    secondary: "bg-slate-900/80 border border-slate-400/20 text-slate-50 hover:-translate-y-0.5 hover:bg-slate-900",
    outline: "bg-transparent border border-slate-400/20 text-slate-50 hover:bg-slate-400/10 hover:border-accent/30",
    subtle: "bg-accent/16 text-slate-50 border border-accent/25 hover:bg-accent/25",
    success: "bg-gradient-to-br from-success to-[#059669] text-white shadow-[0_16px_32px_rgba(16,185,129,0.28)] hover:-translate-y-0.5"
  };
  
  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
