"use client";

import React, { useState } from "react";
import { Icon } from "../atoms/Icon";

interface CalendarDay {
    date: number;
    isCurrentMonth: boolean;
    isToday?: boolean;
    isSelected?: boolean;
    isRangeStart?: boolean;
    isRangeEnd?: boolean;
    isInRange?: boolean;
    hasIndicator?: boolean;
    indicatorColor?: string;
}

interface DatePickerProps {
    value?: Date;
    onChange?: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    className?: string;
}

type ViewMode = "date" | "month" | "year";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function DatePicker({
    value,
    onChange,
    minDate,
    maxDate,
    className = "",
}: DatePickerProps) {
    const [currentDate, setCurrentDate] = useState(value || new Date());
    const [viewMode, setViewMode] = useState<ViewMode>("date");
    const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Generate calendar days
    const generateCalendarDays = (): CalendarDay[] => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const prevLastDay = new Date(year, month, 0);

        const days: CalendarDay[] = [];

        // Previous month days
        const firstDayOfWeek = firstDay.getDay();
        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            days.push({
                date: prevLastDay.getDate() - i,
                isCurrentMonth: false,
            });
        }

        // Current month days
        for (let i = 1; i <= lastDay.getDate(); i++) {
            const date = new Date(year, month, i);
            date.setHours(0, 0, 0, 0);

            days.push({
                date: i,
                isCurrentMonth: true,
                isToday: date.getTime() === today.getTime(),
                isSelected: selectedDate ? date.getTime() === selectedDate.getTime() : false,
                hasIndicator: i === 1, // Example: first day has indicator
            });
        }

        // Next month days
        const remainingDays = 42 - days.length; // 6 rows * 7 days
        for (let i = 1; i <= remainingDays; i++) {
            days.push({
                date: i,
                isCurrentMonth: false,
            });
        }

        return days;
    };

    const handlePrevious = () => {
        if (viewMode === "date") {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
        } else if (viewMode === "month") {
            setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1));
        } else {
            setCurrentDate(new Date(currentDate.getFullYear() - 12, currentDate.getMonth(), 1));
        }
    };

    const handleNext = () => {
        if (viewMode === "date") {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
        } else if (viewMode === "month") {
            setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1));
        } else {
            setCurrentDate(new Date(currentDate.getFullYear() + 12, currentDate.getMonth(), 1));
        }
    };

    const handleDateClick = (day: CalendarDay) => {
        if (!day.isCurrentMonth) return;

        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day.date);
        setSelectedDate(newDate);
        onChange?.(newDate);
    };

    const handleMonthClick = (monthIndex: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), monthIndex, 1));
        setViewMode("date");
    };

    const handleYearClick = (year: number) => {
        setCurrentDate(new Date(year, currentDate.getMonth(), 1));
        setViewMode("month");
    };

    const calendarDays = generateCalendarDays();

    return (
        <div className={`w-full max-w-md bg-white rounded-2xl shadow-lg p-6 ${className}`}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <button
                    onClick={handlePrevious}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    aria-label="Previous"
                >
                    <Icon name="ChevronLeft" set="bold" size="small" />
                </button>

                <button
                    onClick={() => {
                        if (viewMode === "date") setViewMode("month");
                        else if (viewMode === "month") setViewMode("year");
                    }}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                    <span className="text-xl font-bold text-slate-900">
                        {viewMode === "date" && `${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
                        {viewMode === "month" && currentDate.getFullYear()}
                        {viewMode === "year" && `${Math.floor(currentDate.getFullYear() / 12) * 12} - ${Math.floor(currentDate.getFullYear() / 12) * 12 + 11}`}
                    </span>
                </button>

                <button
                    onClick={handleNext}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    aria-label="Next"
                >
                    <Icon name="ChevronRight" set="bold" size="small" />
                </button>
            </div>

            {/* Date View */}
            {viewMode === "date" && (
                <>
                    {/* Days of Week */}
                    <div className="grid grid-cols-7 gap-2 mb-4">
                        {DAYS_OF_WEEK.map((day) => (
                            <div
                                key={day}
                                className="text-center text-sm font-semibold text-slate-600 py-2"
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-2">
                        {calendarDays.map((day, index) => (
                            <button
                                key={index}
                                onClick={() => handleDateClick(day)}
                                disabled={!day.isCurrentMonth}
                                className={`
                                    relative aspect-square flex flex-col items-center justify-center
                                    rounded-lg transition-all duration-200
                                    ${day.isCurrentMonth
                                        ? "hover:bg-slate-100 cursor-pointer text-slate-900"
                                        : "text-slate-400 cursor-default"
                                    }
                                    ${day.isSelected
                                        ? "bg-primary-100 text-white hover:bg-primary-200"
                                        : ""
                                    }
                                    ${day.isToday && !day.isSelected
                                        ? "border-2 border-primary-100"
                                        : ""
                                    }
                                    ${day.isRangeStart || day.isRangeEnd
                                        ? "bg-primary-100 text-white"
                                        : ""
                                    }
                                    ${day.isInRange
                                        ? "bg-primary-1000"
                                        : ""
                                    }
                                `}
                            >
                                <span className="text-sm font-medium">{day.date}</span>
                                {day.hasIndicator && (
                                    <div className={`absolute bottom-1.5 w-1 h-1 rounded-full ${day.isSelected ? "bg-white" : "bg-primary-100"}`} />
                                )}
                            </button>
                        ))}
                    </div>
                </>
            )}

            {/* Month View */}
            {viewMode === "month" && (
                <div className="grid grid-cols-3 gap-3">
                    {MONTHS.map((month, index) => (
                        <button
                            key={month}
                            onClick={() => handleMonthClick(index)}
                            className={`
                                relative py-4 rounded-lg transition-all duration-200
                                ${currentDate.getMonth() === index
                                    ? "bg-primary-100 text-white"
                                    : "hover:bg-slate-100 text-slate-900"
                                }
                            `}
                        >
                            <span className="text-sm font-medium">{month}</span>
                        </button>
                    ))}
                </div>
            )}

            {/* Year View */}
            {viewMode === "year" && (
                <div className="grid grid-cols-3 gap-3">
                    {Array.from({ length: 12 }, (_, i) => {
                        const startYear = Math.floor(currentDate.getFullYear() / 12) * 12;
                        const year = startYear + i;
                        return (
                            <button
                                key={year}
                                onClick={() => handleYearClick(year)}
                                className={`
                                    relative py-4 rounded-lg transition-all duration-200
                                    ${currentDate.getFullYear() === year
                                        ? "bg-primary-100 text-white"
                                        : "hover:bg-slate-100 text-slate-900"
                                    }
                                `}
                            >
                                <span className="text-sm font-medium">{year}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
