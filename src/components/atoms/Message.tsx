"use client";

import React from "react";
import { Icon } from "./Icon";

interface MessageProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
    type?: "filled" | "outlined";
    size?: "small" | "medium" | "large";
    icon?: string;
    closable?: boolean;
    onClose?: () => void;
    className?: string;
}

export function Message({
    children,
    variant = "primary",
    type = "filled",
    size = "medium",
    icon = "InfoCircle",
    closable = false,
    onClose,
    className = "",
}: MessageProps) {
    const variants = {
        primary: {
            filled: {
                bg: "bg-primary-100",
                border: "border-primary-100",
                iconBg: "bg-primary-200",
                iconColor: "text-white",
                textColor: "text-white",
                closeColor: "text-white",
            },
            outlined: {
                bg: "bg-primary-1000",
                border: "border-primary-100",
                iconBg: "bg-primary-100",
                iconColor: "text-white",
                textColor: "text-slate-700",
                closeColor: "text-primary-100",
            },
        },
        secondary: {
            filled: {
                bg: "bg-secondary-100",
                border: "border-secondary-100",
                iconBg: "bg-secondary-200",
                iconColor: "text-white",
                textColor: "text-white",
                closeColor: "text-white",
            },
            outlined: {
                bg: "bg-secondary-1000",
                border: "border-secondary-100",
                iconBg: "bg-secondary-100",
                iconColor: "text-white",
                textColor: "text-slate-700",
                closeColor: "text-secondary-100",
            },
        },
        success: {
            filled: {
                bg: "bg-success-100",
                border: "border-success-100",
                iconBg: "bg-success-200",
                iconColor: "text-white",
                textColor: "text-white",
                closeColor: "text-white",
            },
            outlined: {
                bg: "bg-success-1000",
                border: "border-success-100",
                iconBg: "bg-success-100",
                iconColor: "text-white",
                textColor: "text-slate-700",
                closeColor: "text-success-100",
            },
        },
        info: {
            filled: {
                bg: "bg-info-100",
                border: "border-info-100",
                iconBg: "bg-info-200",
                iconColor: "text-white",
                textColor: "text-white",
                closeColor: "text-white",
            },
            outlined: {
                bg: "bg-info-1000",
                border: "border-info-100",
                iconBg: "bg-info-100",
                iconColor: "text-white",
                textColor: "text-slate-700",
                closeColor: "text-info-100",
            },
        },
        warning: {
            filled: {
                bg: "bg-warning-100",
                border: "border-warning-100",
                iconBg: "bg-warning-200",
                iconColor: "text-white",
                textColor: "text-white",
                closeColor: "text-white",
            },
            outlined: {
                bg: "bg-warning-1000",
                border: "border-warning-100",
                iconBg: "bg-warning-100",
                iconColor: "text-white",
                textColor: "text-slate-700",
                closeColor: "text-warning-100",
            },
        },
        danger: {
            filled: {
                bg: "bg-danger-100",
                border: "border-danger-100",
                iconBg: "bg-danger-200",
                iconColor: "text-white",
                textColor: "text-white",
                closeColor: "text-white",
            },
            outlined: {
                bg: "bg-danger-1000",
                border: "border-danger-100",
                iconBg: "bg-danger-100",
                iconColor: "text-white",
                textColor: "text-slate-700",
                closeColor: "text-danger-100",
            },
        },
    };

    const sizes = {
        small: {
            padding: "p-1.5",
            iconPadding: "p-1.5",
            iconSize: "small" as const,
            text: "text-xs",
        },
        medium: {
            padding: "p-2",
            iconPadding: "p-2",
            iconSize: "small" as const,
            text: "text-sm",
        },
        large: {
            padding: "p-2",
            iconPadding: "p-2",
            iconSize: "medium" as const,
            text: "text-sm",
        },
    };

    const currentVariant = variants[variant][type];
    const currentSize = sizes[size];

    return (
        <div
            className={`
                flex items-center gap-2 w-full
                ${currentSize.padding}
                ${currentVariant.bg}
                ${currentVariant.border}
                rounded-lg border border-solid
                ${className}
            `}
        >
            <div
                className={`
                    inline-flex items-center justify-center
                    ${currentSize.iconPadding}
                    ${currentVariant.iconBg}
                    rounded-lg flex-shrink-0
                `}
            >
                <div className={currentVariant.iconColor}>
                    <Icon name={icon} set="bold" size={currentSize.iconSize} />
                </div>
            </div>

            <div className={`flex-1 font-medium ${currentVariant.textColor} ${currentSize.text}`}>
                {children}
            </div>

            {closable && (
                <button
                    onClick={onClose}
                    className={`flex-shrink-0 ${currentVariant.closeColor} hover:opacity-70 transition-opacity`}
                    aria-label="Close message"
                >
                    <Icon name="CloseSquare" set="bold" size={currentSize.iconSize} />
                </button>
            )}
        </div>
    );
}
