"use client";

import React from "react";

interface ToggleSwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    size?: "small" | "medium" | "large";
    label?: string;
    disabled?: boolean;
    className?: string;
}

export function ToggleSwitch({
    checked = false,
    onChange,
    size = "medium",
    label,
    disabled = false,
    className = "",
}: ToggleSwitchProps) {
    const sizeClasses = {
        small: {
            container: "w-6 h-4",
            knob: "w-2 h-2",
        },
        medium: {
            container: "w-8 h-5",
            knob: "w-3 h-3",
        },
        large: {
            container: "w-10 h-6",
            knob: "w-4 h-4",
        },
    };

    const handleClick = () => {
        if (!disabled && onChange) {
            onChange(!checked);
        }
    };

    const currentSize = sizeClasses[size];

    return (
        <div className={`inline-flex items-center gap-2 ${className}`}>
            <button
                type="button"
                role="switch"
                aria-checked={checked}
                onClick={handleClick}
                disabled={disabled}
                className={`
                    ${currentSize.container}
                    ${checked
                        ? "bg-primary-100"
                        : disabled
                            ? "bg-slate-200"
                            : "bg-slate-200"
                    }
                    ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-primary-200"}
                    ${checked ? "justify-end" : "justify-start"}
                    flex items-center px-1 relative rounded-full transition-all duration-300 ease-in-out
                `}
            >
                <div
                    className={`
                        ${currentSize.knob}
                        bg-white
                        relative rounded-full shadow-md
                    `}
                />
            </button>

            {label && (
                <span
                    className={`
                        ${size === "small" ? "text-xs" : size === "medium" ? "text-sm" : "text-base"}
                        ${disabled ? "text-slate-400" : "text-slate-700"}
                        font-medium whitespace-nowrap
                    `}
                >
                    {label}
                </span>
            )}
        </div>
    );
}
