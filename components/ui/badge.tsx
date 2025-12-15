import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = 'default', children, ...props }, ref) => {
        const variants = {
            default: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
            success: 'bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-300',
            warning: 'bg-warning-100 text-warning-700 dark:bg-warning-900 dark:text-warning-300',
            danger: 'bg-danger-100 text-danger-700 dark:bg-danger-900 dark:text-danger-300',
            info: 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300',
        };

        return (
            <span
                ref={ref}
                className={clsx(
                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                    variants[variant],
                    className
                )}
                {...props}
            >
                {children}
            </span>
        );
    }
);

Badge.displayName = 'Badge';
