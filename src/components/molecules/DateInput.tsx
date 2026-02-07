"use client";

import React, { useState, useRef, useEffect } from "react";
import { Icon } from "../atoms/Icon";
import { DatePicker } from "./DatePicker";

interface DateInputProps {
    value?: Date;
    onChange?: (date: Date) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

export function DateInput({
    value,
    onChange,
    placeholder = "Select date",
    disabled = false,
    className = "",
}: DateInputProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
        onChange?.(date);
        setIsOpen(false);
    };

    const formatDate = (date: Date | null) => {
        if (!date) return "";
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            {/* Input Trigger */}
            <button
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
                className={`
                    w-full flex items-center justify-between gap-2
                    px-4 py-2.5 rounded-lg
                    border border-slate-200
                    bg-white
                    text-left text-sm
                    transition-all duration-200
                    ${disabled
                        ? "opacity-50 cursor-not-allowed bg-slate-50"
                        : "hover:border-primary-100 focus:border-primary-100 focus:ring-2 focus:ring-primary-100 focus:ring-opacity-20"
                    }
                    ${isOpen ? "border-primary-100 ring-2 ring-primary-100 ring-opacity-20" : ""}
                `}
            >
                <div className="flex items-center gap-2 flex-1">
                    <Icon name="Calendar" set="bold" size="small" />
                    <span className={selectedDate ? "text-slate-900" : "text-slate-400"}>
                        {selectedDate ? formatDate(selectedDate) : placeholder}
                    </span>
                </div>
                <Icon
                    name={isOpen ? "ChevronUp" : "ChevronDown"}
                    set="bold"
                    size="small"
                />
            </button>

            {/* Dropdown Calendar */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <DatePicker
                        value={selectedDate || new Date()}
                        onChange={handleDateChange}
                    />
                </div>
            )}
        </div>
    );
}
