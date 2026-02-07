import React from "react";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";

export default function Home() {
  return (
    <div className="flex flex-col pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-[13px] font-medium mb-8 mx-auto md:mx-0">
            <span className="w-1.5 h-1.5 rounded-full bg-cimano-500 animate-pulse"></span>
            System v2.0 Live
          </div>

          <h1 className="text-5xl md:text-8xl font-bold text-slate-900 tracking-[-0.04em] mb-8 leading-[0.95]">
            Design at the <br className="hidden md:block" /> speed of thought.
          </h1>

          <p className="text-xl text-slate-500 max-w-xl mb-12 leading-relaxed font-normal mx-auto md:mx-0">
            A meticulous design system for building world-class interfaces. Precision-crafted components, harmonious colors, and semantic tokens.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mx-auto md:mx-0">
            <Link href="/components">
              <Button size="lg" className="h-14 px-8 text-lg rounded-2xl shadow-xl shadow-cimano-500/20 w-full sm:w-auto">
                Browse Components
                <Icon name="ArrowRight" set="bold" size="small" />
              </Button>
            </Link>
            <Link href="/foundations">
              <Button variant="secondary" size="lg" className="h-14 px-8 text-lg rounded-2xl w-full sm:w-auto bg-white border border-slate-200 hover:bg-slate-50 text-slate-700">
                Read Documentation
              </Button>
            </Link>
          </div>
        </div>

        {/* Abstract "Code vs Design" Visual Background (CSS only) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-cimano-500 to-indigo-600 blur-[120px] rounded-full"></div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Large Card */}
          <div className="md:col-span-2 p-10 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between group hover:border-slate-200 transition-colors">
            <div className="mb-8">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-900 mb-6">
                <Icon name="Category" set="bulk" size="medium" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Atomic Architecture</h3>
              <p className="text-slate-500 max-w-md">Scalable components built on atomic design principles. From atoms to organisms, everything consists of reusable parts.</p>
            </div>
            <div className="h-48 bg-white rounded-2xl border border-slate-200/50 shadow-sm p-6 relative overflow-hidden">
              <div className="absolute top-6 left-6 right-6 flex gap-4">
                <div className="h-8 w-24 bg-slate-100 rounded-lg animate-pulse"></div>
                <div className="h-8 w-8 bg-cimano-100 rounded-lg"></div>
              </div>
              <div className="absolute top-20 left-6 right-6 h-32 bg-slate-50 rounded-xl border border-slate-100"></div>
            </div>
          </div>

          {/* Tall Card */}
          <div className="md:col-span-1 p-10 rounded-3xl bg-slate-900 text-white flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6 backdrop-blur-sm">
                <Icon name="Setting" set="bulk" size="medium" />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">Theming Engine</h3>
              <p className="text-slate-400">Semantic tokens for dark mode, density, and branding.</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cimano-500 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
          </div>

          {/* Accessibility Card */}
          <div className="md:col-span-1 p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-xl hover:shadow-slate-200/20 transition-all duration-300">
            <Icon name="Heart" set="bulk" size="large" className="text-red-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Inclusive</h3>
            <p className="text-slate-500 text-sm">WCAG 2.1 AAA Compliant. Accessible for everyone.</p>
          </div>

          {/* Icons Card */}
          <div className="md:col-span-1 p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-xl hover:shadow-slate-200/20 transition-all duration-300">
            <Icon name="Image" set="bulk" size="large" className="text-indigo-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Iconography</h3>
            <p className="text-slate-500 text-sm">Powered by Iconly v2. Crisp 24px grid.</p>
          </div>

          {/* Documentation Card */}
          <div className="md:col-span-1 p-8 rounded-3xl bg-gradient-to-br from-cimano-50 to-white border border-cimano-100">
            <Icon name="Document" set="bulk" size="large" className="text-cimano-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Docs</h3>
            <Link href="/foundations" className="text-sm font-semibold text-cimano-600 hover:text-cimano-700 flex items-center gap-1">
              Read Guides <Icon name="ArrowRight" set="light" size="small" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Stop rebuilding the basics.</h2>
        <p className="text-slate-500 mb-8 max-w-xl mx-auto">
          Focus on your product's unique value. Let Cimano handle the UI foundation.
        </p>
        <Link href="/components">
          <Button variant="outline" size="lg" className="rounded-xl px-8 h-12">
            Explore Components
          </Button>
        </Link>
      </section>
    </div>
  );
}
