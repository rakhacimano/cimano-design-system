"use client";

import React, { useEffect, useState } from "react";
import { Sidebar } from "../organisms/Sidebar";
import { Footer } from "../organisms/Footer";

interface Section {
    id: string;
    label: string;
}

interface DocLayoutProps {
    children: React.ReactNode;
    title: string;
    description?: string;
    sections?: Section[];
}

export const DocLayout: React.FC<DocLayoutProps> = ({ children, title, description, sections }) => {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        if (!sections || sections.length === 0) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 96; // Account for fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar />

            <div className="lg:pl-64 transition-all duration-300">
                <div className={`mx-auto px-6 py-10 md:py-16 ${sections && sections.length > 0 ? "max-w-7xl" : "max-w-4xl"}`}>
                    <div className="flex gap-12">
                        {/* Main Content */}
                        <div className="flex-1 min-w-0">
                            <header className="mb-12 border-b border-slate-200 pb-8">
                                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h1>
                                {description && (
                                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                                        {description}
                                    </p>
                                )}
                            </header>
                            <main className="space-y-12">
                                {children}
                            </main>
                        </div>

                        {/* Right Sidebar - On This Page */}
                        {sections && sections.length > 0 && (
                            <aside className="hidden xl:block w-64 shrink-0">
                                <div className="sticky top-24">
                                    <h3 className="text-sm font-bold text-slate-900 mb-4">On This Page</h3>
                                    <nav className="space-y-1">
                                        {sections.map((section) => {
                                            const isActive = activeSection === section.id;
                                            return (
                                                <button
                                                    key={section.id}
                                                    onClick={() => scrollToSection(section.id)}
                                                    className={`
                            w-full text-left px-3 py-2 rounded-lg text-sm transition-all
                            ${isActive
                                                            ? "text-primary-100 font-semibold bg-primary-1000 border-l-2 border-primary-100"
                                                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-l-2 border-transparent"
                                                        }
                          `}
                                                >
                                                    {section.label}
                                                </button>
                                            );
                                        })}
                                    </nav>
                                </div>
                            </aside>
                        )}
                    </div>
                </div>

                {/* Footer below content */}
                <Footer />
            </div>
        </div>
    );
};
