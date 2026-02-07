import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    iconLocal?: React.ReactNode;
    loading?: boolean;
    fullWidth?: boolean;
    iconOnly?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", iconLocal, children, loading, fullWidth, iconOnly, ...props }, ref) => {
        const variants = {
            primary: "bg-cimano-500 text-white hover:bg-cimano-600 shadow-sm border border-transparent shadow-cimano-500/20 active:shadow-none hover:-translate-y-0.5",
            secondary: "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md hover:-translate-y-0.5",
            outline: "bg-transparent border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300",
            ghost: "bg-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-transparent",
        };

        const sizes = {
            sm: "h-9 px-3 text-[13px] rounded-lg",
            md: "h-10 px-4 text-sm rounded-lg",
            lg: "h-12 px-6 text-base rounded-xl",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none tracking-tight",
                    variants[variant],
                    sizes[size],
                    fullWidth && "w-full",
                    iconOnly && "aspect-square p-0",
                    className
                )}
                {...props}
            >
                {loading && <span className="animate-spin mr-2">⟳</span>}
                {iconLocal && <span className="text-current">{iconLocal}</span>}
                {!iconOnly && children}
            </button>
        );
    }
);

Button.displayName = "Button";
