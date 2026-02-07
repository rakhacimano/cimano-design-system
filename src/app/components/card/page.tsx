"use client";

import { DocLayout } from "@/components/templates/DocLayout";
import { Card } from "@/components/atoms/Card";
import { Button } from "@/components/atoms/Button";

const sections = [
    { id: "demo", label: "Demo" },
    { id: "variants", label: "Variants" },
    { id: "anatomy", label: "Anatomy" },
    { id: "properties", label: "Properties" },
    { id: "implementation", label: "Implementation" },
];

export default function CardPage() {
    return (
        <DocLayout
            title="Card"
            description="Cards are containers for grouping related content and actions in a flexible and visually distinct way."
            sections={sections}
        >
            <div className="space-y-24">
                {/* Demo */}
                <section id="demo" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Interactive Demo</h2>
                        <p className="text-slate-600 mt-1">Explore card variations.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Simple Card</h3>
                            <p className="text-slate-600 mb-4">This is a basic card with text content.</p>
                            <Button variant="primary">Learn More</Button>
                        </Card>

                        <Card>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Feature Card</h3>
                            <p className="text-slate-600 mb-4">Cards organize content into digestible sections.</p>
                            <Button variant="outline">Explore</Button>
                        </Card>
                    </div>
                </section>

                {/* Variants */}
                <section id="variants" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Variants</h2>
                        <p className="text-slate-600 mt-1">Different card configurations.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Basic Card</span>
                            <Card>
                                <h4 className="font-semibold text-slate-900 mb-1">Title</h4>
                                <p className="text-sm text-slate-600">Simple card with minimal content.</p>
                            </Card>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">With Action</span>
                            <Card>
                                <h4 className="font-semibold text-slate-900 mb-1">Interactive</h4>
                                <p className="text-sm text-slate-600 mb-3">Card with call-to-action.</p>
                                <Button size="sm" variant="primary">Action</Button>
                            </Card>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Rich Content</span>
                            <Card>
                                <div className="w-full h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg mb-3" />
                                <h4 className="font-semibold text-slate-900 mb-1">Media Card</h4>
                                <p className="text-sm text-slate-600">Card with image or media.</p>
                            </Card>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Stats Card</span>
                            <Card>
                                <div className="text-3xl font-bold text-primary-100 mb-1">2,543</div>
                                <p className="text-sm text-slate-600">Active Users</p>
                                <p className="text-xs text-success-100 mt-1">↑ 12% from last month</p>
                            </Card>
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
                                    <Card>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Feature Card</h3>
                                        <p className="text-slate-600 mb-4">Cards organize content into digestible sections with clear visual boundaries.</p>
                                        <Button variant="primary" size="sm">Explore</Button>
                                    </Card>

                                    {/* Callout 1 - Container */}
                                    <div className="absolute -left-48 top-16 flex items-center gap-3">
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-slate-900">Container</p>
                                            <p className="text-xs text-slate-600">Border & shadow</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-primary-100 text-white flex items-center justify-center font-bold text-sm">1</div>
                                        <div className="w-16 h-[2px] bg-primary-100"></div>
                                    </div>

                                    {/* Callout 2 - Padding */}
                                    <div className="absolute -top-16 left-1/3 flex flex-col items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-secondary-100 text-white flex items-center justify-center font-bold text-sm">2</div>
                                        <div className="w-[2px] h-12 bg-secondary-100"></div>
                                        <div className="text-center">
                                            <p className="text-sm font-semibold text-slate-900">Padding</p>
                                            <p className="text-xs text-slate-600">Internal spacing</p>
                                        </div>
                                    </div>

                                    {/* Callout 3 - Content */}
                                    <div className="absolute -right-52 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                        <div className="w-16 h-[2px] bg-info-100"></div>
                                        <div className="w-10 h-10 rounded-full bg-info-100 text-white flex items-center justify-center font-bold text-sm">3</div>
                                        <div className="text-left">
                                            <p className="text-sm font-semibold text-slate-900">Content Area</p>
                                            <p className="text-xs text-slate-600">Flexible layout</p>
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
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">children</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">ReactNode</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Card content</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">className</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">string</td>
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
                        <p className="text-slate-600 mt-1">How to use Cards.</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Basic Usage</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`import { Card } from "@/components/atoms/Card";

export function InfoCard() {
  return (
    <Card>
      <h3>Card Title</h3>
      <p>Card content goes here.</p>
    </Card>
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
