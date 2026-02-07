"use client";

import { DocLayout } from "@/components/templates/DocLayout";

const sections = [
    { id: "overview", label: "Overview" },
    { id: "scale", label: "Type Scale" },
    { id: "weights", label: "Font Weights" },
    { id: "usage", label: "Usage" },
    { id: "implementation", label: "Implementation" },
];

const typeScale = [
    { size: "64px", weight: "600", lh: "100%", label: "Display 2XL", className: "text-[64px] font-semibold leading-[1.0]" },
    { size: "56px", weight: "600", lh: "100%", label: "Display XL", className: "text-[56px] font-semibold leading-[1.0]" },
    { size: "48px", weight: "600", lh: "100%", label: "Display LG", className: "text-[48px] font-semibold leading-[1.0]" },
    { size: "40px", weight: "600", lh: "120%", label: "Heading 1", className: "text-[40px] font-semibold leading-[1.2]" },
    { size: "32px", weight: "600", lh: "120%", label: "Heading 2", className: "text-[32px] font-semibold leading-[1.2]" },
    { size: "24px", weight: "600", lh: "130%", label: "Heading 3", className: "text-[24px] font-semibold leading-[1.3]" },
    { size: "20px", weight: "600", lh: "140%", label: "Heading 4", className: "text-[20px] font-semibold leading-[1.4]" },
    { size: "18px", weight: "600", lh: "140%", label: "Heading 5", className: "text-[18px] font-semibold leading-[1.4]" },
    { size: "16px", weight: "500", lh: "150%", label: "Body Large", className: "text-[16px] font-medium leading-[1.5]" },
    { size: "14px", weight: "400", lh: "150%", label: "Body", className: "text-[14px] font-normal leading-[1.5]" },
    { size: "12px", weight: "400", lh: "150%", label: "Body Small", className: "text-[12px] font-normal leading-[1.5]" },
    { size: "10px", weight: "500", lh: "140%", label: "Caption", className: "text-[10px] font-medium leading-[1.4] uppercase tracking-wide" },
];

export default function TypographyPage() {
    return (
        <DocLayout
            title="Typography"
            description="Our type system uses Onest, a modern sans-serif designed for optimal readability and premium aesthetics."
            sections={sections}
        >
            <div className="space-y-24">
                {/* Overview */}
                <section id="overview" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
                        <p className="text-slate-600 mt-1">Typography establishes visual hierarchy and improves readability.</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-8">
                        <div className="space-y-4">
                            <div className="flex items-baseline gap-4">
                                <span className="text-sm font-semibold text-slate-600 w-32">Typeface:</span>
                                <span className="text-lg font-medium text-slate-900">Onest</span>
                            </div>
                            <div className="flex items-baseline gap-4">
                                <span className="text-sm font-semibold text-slate-600 w-32">Style:</span>
                                <span className="text-lg">Sans-serif</span>
                            </div>
                            <div className="flex items-baseline gap-4">
                                <span className="text-sm font-semibold text-slate-600 w-32">Source:</span>
                                <span className="text-lg">Google Fonts</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scale */}
                <section id="scale" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Type Scale</h2>
                        <p className="text-slate-600 mt-1">Our complete typographic scale from display to caption.</p>
                    </div>

                    <div className="space-y-6">
                        {typeScale.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border border-slate-100 p-8 hover:border-primary-200 transition-colors"
                            >
                                <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-slate-100">
                                    <span className="text-sm font-semibold text-slate-900">{item.label}</span>
                                    <div className="flex gap-6 text-sm text-slate-600">
                                        <span>Size: <code className="font-mono text-slate-900">{item.size}</code></span>
                                        <span>Weight: <code className="font-mono text-slate-900">{item.weight}</code></span>
                                        <span>Line: <code className="font-mono text-slate-900">{item.lh}</code></span>
                                    </div>
                                </div>
                                <p className={`${item.className} text-slate-900`}>
                                    The quick brown fox jumps
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Weights */}
                <section id="weights" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Font Weights</h2>
                        <p className="text-slate-600 mt-1">Available font weights for emphasis and hierarchy.</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-8 space-y-4">
                        <div className="text-2xl font-normal">Font Weight 400 — Normal</div>
                        <div className="text-2xl font-medium">Font Weight 500 — Medium</div>
                        <div className="text-2xl font-semibold">Font Weight 600 — Semibold</div>
                        <div className="text-2xl font-bold">Font Weight 700 — Bold</div>
                    </div>
                </section>

                {/* Usage */}
                <section id="usage" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Usage Guidelines</h2>
                        <p className="text-slate-600 mt-1">Best practices for typography.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Hierarchy</h3>
                            <p className="text-sm text-slate-600">Use larger sizes for headings and smaller sizes for body text to create clear visual hierarchy.</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Contrast</h3>
                            <p className="text-sm text-slate-600">Ensure sufficient contrast between text and background for readability (WCAG AA minimum).</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Line Height</h3>
                            <p className="text-sm text-slate-600">Larger line heights (150%) for body text improve readability, tighter for headings (100-130%).</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Consistency</h3>
                            <p className="text-sm text-slate-600">Use the type scale consistently throughout your application for cohesive design.</p>
                        </div>
                    </div>
                </section>

                {/* Implementation */}
                <section id="implementation" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Implementation</h2>
                        <p className="text-slate-600 mt-1">How to use typography in your code.</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Tailwind Classes</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`<h1 className="text-[48px] font-semibold leading-[1.0]">
  Display Heading
</h1>

<h2 className="text-[32px] font-semibold leading-[1.2]">
  Section Heading
</h2>

<p className="text-[14px] font-normal leading-[1.5]">
  Body text with optimal readability.
</p>`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">CSS Variables</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`body {
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.5;
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </DocLayout>
    );
}
