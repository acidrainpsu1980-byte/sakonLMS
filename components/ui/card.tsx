import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass' | 'gradient';
    hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', hover = false, children, ...props }, ref) => {
        const baseStyles = 'rounded-xl p-6 transition-all duration-300';

        const variants = {
            default: 'bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700',
            glass: 'glass',
            gradient: 'bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-primary-200 dark:border-primary-800',
        };

        const hoverStyles = hover ? 'hover-lift cursor-pointer' : '';

        return (
            <div
                ref={ref}
                className={clsx(baseStyles, variants[variant], hoverStyles, className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div ref={ref} className={clsx('mb-4', className)} {...props}>
                {children}
            </div>
        );
    }
);

CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <h3 ref={ref} className={clsx('text-2xl font-bold text-slate-900 dark:text-white', className)} {...props}>
                {children}
            </h3>
        );
    }
);

CardTitle.displayName = 'CardTitle';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div ref={ref} className={clsx('text-slate-600 dark:text-slate-300', className)} {...props}>
                {children}
            </div>
        );
    }
);

CardContent.displayName = 'CardContent';
