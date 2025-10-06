import React from 'react';
import { cn } from '@/lib/utils/cn';

interface ProgressBarProps {
  value: number;
  showLabel?: boolean;
  label?: string;
  className?: string;
}

export function ProgressBar({ value, showLabel = false, label, className = '' }: ProgressBarProps) {
  const percentage = Math.min(Math.max(value, 0), 100);

  return (
    <div className={cn("w-full", className)}>
      <div
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? 'Progress'}
        className="h-3.5 rounded-full bg-slate-900/70 border border-primary-500/25 overflow-hidden shadow-inner"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent via-accent to-accent-dark transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="mt-3 flex justify-between items-center text-sm">
          <span className="font-semibold text-foreground">{percentage}% complete</span>
          {label && <span className="text-slate-400">{label}</span>}
        </div>
      )}
    </div>
  );
}
