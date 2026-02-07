"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "../atoms/Icon";

const menuItems = [
    {
        title: "Foundations",
        items: [
            { label: "Colors", href: "/foundations/colors" },
            { label: "Typography", href: "/foundations/typography" },
            { label: "Image Upload", href: "/foundations/image-upload" },
            { label: "Shadows", href: "/foundations/shadows" },
            { label: "Spacing", href: "/foundations/spacing" },
        ],
    },
    {
        title: "Components",
        items: [
            { label: "Button", href: "/components/button" },
            { label: "Icon", href: "/components/icon" },
            { label: "Input", href: "/components/input" },
            { label: "Card", href: "/components/card" },
            { label: "Label", href: "/components/label" },
            { label: "Switch", href: "/components/switch" },
            { label: "Message", href: "/components/message" },
            { label: "DatePicker", href: "/components/datepicker" },
        ],
    },
];

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="w-64 fixed top-16 left-0 bottom-0 overflow-y-auto border-r border-slate-200 bg-white/50 backdrop-blur-sm hidden lg:block pb-10">
            <div className="p-6 space-y-8">
                {menuItems.map((section) => (
                    <div key={section.title}>
                        <h3 className="font-semibold text-slate-900 mb-3 px-3 text-sm uppercase tracking-wider">
                            {section.title}
                        </h3>
                        <ul className="space-y-1">
                            {section.items.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${isActive
                                                ? "bg-cimano-50 text-cimano-600 font-medium"
                                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                                }`}
                                        >
                                            {item.label}
                                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-cimano-500" />}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}

                <div className="mt-8 pt-8 border-t border-slate-200 px-3">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-cimano-500 to-cimano-600 text-white shadow-cimano-card">
                        <div className="mb-2 opacity-80">
                            <Icon name="Document" set="bold" size="medium" />
                        </div>
                        <h4 className="font-bold mb-1">Need help?</h4>
                        <p className="text-xs text-white/80 mb-3 leading-relaxed">
                            Check out our detailed guides for integration.
                        </p>
                        <button className="text-xs font-semibold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors w-full text-center">
                            Read Docs
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};
