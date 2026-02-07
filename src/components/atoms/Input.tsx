import React from "react";
import { Icon } from "./Icon";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: string;
    iconLocal?: React.ReactNode;
    helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, icon, iconLocal, helperText, className, ...props }, ref) => {
        const hasIcon = icon || iconLocal;

        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        {label}
                    </label>
                )}
                <div className="relative">
                    {hasIcon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            {iconLocal || (icon && <Icon name={icon} set="light" size={20} />)}
                        </div>
                    )}
                    <input
                        ref={ref}
                        className={`
              w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-cimano-500/20 focus:border-cimano-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed
              ${hasIcon ? "pl-10" : ""}
              ${error ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : "border-slate-200 hover:border-slate-300"}
              ${className}
            `}
                        {...props}
                    />
                </div>
                {error && (
                    <div className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <Icon name="Danger" set="bulk" size={14} />
                        {error}
                    </div>
                )}
                {!error && helperText && (
                    <div className="mt-1.5 text-xs text-slate-500">
                        {helperText}
                    </div>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";
