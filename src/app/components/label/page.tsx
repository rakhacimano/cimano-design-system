"use client";

import { DocLayout } from "@/components/templates/DocLayout";
import { Label } from "@/components/atoms/Label";

const sections = [
    { id: "demo", label: "Demo" },
    { id: "variants", label: "Variants" },
    { id: "anatomy", label: "Anatomy" },
    { id: "properties", label: "Properties" },
    { id: "implementation", label: "Implementation" },
];

export default function LabelPage() {
    return (
        <DocLayout
            title="Label"
            description="Labels are compact indicators to categorize items and display status."
            sections={sections}
        >
            <div className="space-y-24">
                {/* Demo */}
                <section id="demo" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Interactive Demo</h2>
                        <p className="text-slate-600 mt-1">Compact status indicators.</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-8">
                        <div className="flex flex-wrap gap-3">
                            <Label variant="primary">Primary</Label>
                            <Label variant="secondary">Secondary</Label>
                            <Label variant="success">Success</Label>
                            <Label variant="info">Info</Label>
                            <Label variant="warning">Warning</Label>
                            <Label variant="danger">Danger</Label>
                            <Label variant="neutral">Neutral</Label>
                        </div>
                    </div>
                </section>

                {/* Variants */}
                <section id="variants" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Variants</h2>
                        <p className="text-slate-600 mt-1">Two style types with different semantic colors.</p>
                    </div>

                    <div className="space-y-8">
                        {/* Default Type */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900">Default (Filled)</h3>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <div className="flex flex-wrap gap-3">
                                    <Label variant="primary" type="default">Text</Label>
                                    <Label variant="secondary" type="default">Text</Label>
                                    <Label variant="success" type="default">Text</Label>
                                    <Label variant="info" type="default">Text</Label>
                                    <Label variant="warning" type="default">Text</Label>
                                    <Label variant="danger" type="default">Text</Label>
                                    <Label variant="neutral" type="default">Text</Label>
                                </div>
                            </div>
                        </div>

                        {/* Outlined Type */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900">Outlined</h3>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <div className="flex flex-wrap gap-3">
                                    <Label variant="primary" type="outlined">Text</Label>
                                    <Label variant="secondary" type="outlined">Text</Label>
                                    <Label variant="success" type="outlined">Text</Label>
                                    <Label variant="info" type="outlined">Text</Label>
                                    <Label variant="warning" type="outlined">Text</Label>
                                    <Label variant="danger" type="outlined">Text</Label>
                                    <Label variant="neutral" type="outlined">Text</Label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Anatomy */}
                <section id="anatomy" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Anatomy</h2>
                        <p className="text-slate-600 mt-1">Component structure.</p>
                    </div>

                    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-16">
                        <div className="max-w-3xl mx-auto">
                            <div className="relative flex items-center justify-center py-16">
                                <div className="relative">
                                    <Label variant="primary">Category</Label>

                                    {/* Callout 1 - Container */}
                                    <div className="absolute -left-44 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-slate-900">Container</p>
                                            <p className="text-xs text-slate-600">Rounded pill shape</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-primary-100 text-white flex items-center justify-center font-bold text-sm">1</div>
                                        <div className="w-16 h-[2px] bg-primary-100"></div>
                                    </div>

                                    {/* Callout 2 - Label */}
                                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-secondary-100 text-white flex items-center justify-center font-bold text-sm">2</div>
                                        <div className="w-[2px] h-16 bg-secondary-100"></div>
                                        <div className="text-center">
                                            <p className="text-sm font-semibold text-slate-900">Label</p>
                                            <p className="text-xs text-slate-600">Text content</p>
                                        </div>
                                    </div>

                                    {/* Callout 3 - Background */}
                                    <div className="absolute -right-48 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                        <div className="w-16 h-[2px] bg-info-100"></div>
                                        <div className="w-10 h-10 rounded-full bg-info-100 text-white flex items-center justify-center font-bold text-sm">3</div>
                                        <div className="text-left">
                                            <p className="text-sm font-semibold text-slate-900">Background</p>
                                            <p className="text-xs text-slate-600">Semantic color</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Properties */}
                <section id="properties" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Properties</h2>
                        <p className="text-slate-600 mt-1">Configuration options.</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Prop</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Type</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Default</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">children</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">ReactNode</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Label text</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">variant</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">string</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">"primary"</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Color variant</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">type</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">string</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">"default"</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Style type (default, outlined)</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">className</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">string</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">""</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Additional CSS classes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Implementation */}
                <section id="implementation" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Implementation</h2>
                        <p className="text-slate-600 mt-1">How to use Labels.</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Basic Usage</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`import { Label } from "@/components/atoms/Label";

export function MyComponent() {
  return (
    <div>
      <Label variant="success">Active</Label>
      <Label variant="warning">Pending</Label>
      <Label variant="danger">Urgent</Label>
    </div>
  );
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
