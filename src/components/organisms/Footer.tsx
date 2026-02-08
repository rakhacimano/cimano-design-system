import React from "react";
import Link from "next/link";
import { Logo } from "../atoms/Logo";

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 py-16">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-6">
                        <Logo />
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                            Meticulously crafted components for modern product teams. Built for speed and consistency.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Product</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><Link href="/foundations" className="hover:text-cimano-600 transition-colors">Foundations</Link></li>
                            <li><Link href="/components" className="hover:text-cimano-600 transition-colors">Components</Link></li>
                            <li><Link href="/icons" className="hover:text-cimano-600 transition-colors">Icons</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Stay Updated</h4>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cimano-500/20 w-full placeholder:text-slate-400"
                            />
                            <button className="bg-slate-900 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-slate-800 transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>© 2024 Cimano Design System. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-slate-900">Privacy Policy</Link>
                        <Link href="#" className="hover:text-slate-900">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
