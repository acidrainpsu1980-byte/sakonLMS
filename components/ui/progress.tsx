import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    showLabel?: boolean;
    variant?: 'default' | 'success' | 'warning' | 'danger';
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
    ({ className, value, max = 100, showLabel = false, variant = 'default', ...props }, ref) => {
        const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

        const variants = {
            default: 'bg-primary-600',
            success: 'bg-success-600',
            warning: 'bg-warning-600',
            danger: 'bg-danger-600',
        };

        return (
            <div ref={ref} className={clsx('w-full', className)} {...props}>
                <div className="flex items-center justify-between mb-1">
                    {showLabel && (
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {percentage.toFixed(0)}%
                        </span>
                    )}
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                    <div
                        className={clsx('h-full rounded-full transition-all duration-500', variants[variant])}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>
        );
    }
);

Progress.displayName = 'Progress';
