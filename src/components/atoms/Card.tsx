import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hoverable = false }) => {
    return (
        <div
            className={`
        bg-white p-6 rounded-2xl border border-slate-200/60 overflow-hidden
        ${hoverable ? "transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1" : "shadow-sm shadow-slate-200/50"}
        ${className}
      `}
        >
            {children}
        </div>
    );
};
