"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../atoms/Button";
import { Logo } from "../atoms/Logo";
import { Iconly } from "react-iconly";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/foundations", label: "Foundations" },
    { href: "/components", label: "Components" },
];

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 h-16 transition-all duration-300">
            <div className="container mx-auto px-6 h-full flex items-center justify-between max-w-7xl">
                <div className="flex items-center gap-10">
                    <Link href="/" className="hover:opacity-80 transition-opacity">
                        <Logo />
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-all duration-200 ${isActive
                                        ? "text-slate-900 bg-slate-100"
                                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all text-[13px] font-medium"
                    >
                        <Iconly name="Show" set="light" size={16} />
                        <span>View Source</span>
                    </a>
                    <Button variant="primary" size="sm" className="h-9 rounded-lg text-xs font-bold px-4 shadow-none hover:shadow-lg hover:shadow-cimano-500/20 transition-all">
                        Download v2.0
                    </Button>
                </div>
            </div>
        </nav>
    );
};
