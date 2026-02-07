import React from "react";

interface LabelProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "neutral";
    type?: "default" | "outlined";
    className?: string;
}

export function Label({ children, variant = "primary", type = "default", className = "" }: LabelProps) {
    const variants = {
        default: {
            primary: "bg-primary-100 text-white border-primary-100",
            secondary: "bg-secondary-100 text-white border-secondary-100",
            success: "bg-success-100 text-white border-success-100",
            info: "bg-info-100 text-white border-info-100",
            warning: "bg-warning-100 text-white border-warning-100",
            danger: "bg-danger-100 text-white border-danger-100",
            neutral: "bg-slate-100 text-slate-900 border-slate-200",
        },
        outlined: {
            primary: "bg-primary-1000 text-primary-100 border-primary-100",
            secondary: "bg-secondary-1000 text-secondary-100 border-secondary-100",
            success: "bg-success-1000 text-success-100 border-success-100",
            info: "bg-info-1000 text-info-100 border-info-100",
            warning: "bg-warning-1000 text-warning-100 border-warning-100",
            danger: "bg-danger-1000 text-danger-100 border-danger-100",
            neutral: "bg-slate-50 text-slate-900 border-slate-200",
        },
    };

    return (
        <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variants[type][variant]} ${className}`}
        >
            {children}
        </span>
    );
}
