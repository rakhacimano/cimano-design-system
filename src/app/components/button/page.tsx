"use client";

import { DocLayout } from "@/components/templates/DocLayout";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";

const sections = [
    { id: "demo", label: "Demo" },
    { id: "variants", label: "Variants" },
    { id: "sizes", label: "Sizes" },
    { id: "states", label: "States" },
    { id: "anatomy", label: "Anatomy" },
    { id: "properties", label: "Properties" },
    { id: "dimension", label: "Dimension" },
    { id: "implementation", label: "Implementation" },
];

export default function ButtonPage() {
    return (
        <DocLayout
            title="Button"
            description="Buttons trigger actions and events. They communicate calls to action and guide users through critical workflows."
            sections={sections}
        >
            <div className="space-y-24">
                {/* Demo */}
                <section id="demo" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Interactive Demo</h2>
                        <p className="text-slate-600 mt-1">Click the buttons to experience interaction.</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-8">
                        <div className="flex flex-wrap gap-4 items-center justify-center">
                            <Button variant="primary">Primary Button</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                        </div>
                    </div>
                </section>

                {/* Variants */}
                <section id="variants" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Variants</h2>
                        <p className="text-slate-600 mt-1">Different button styles for various contexts.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Primary</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 flex justify-center">
                                <Button variant="primary">Primary Action</Button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Secondary</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 flex justify-center">
                                <Button variant="secondary">Secondary</Button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Outline</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 flex justify-center">
                                <Button variant="outline">Outline</Button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Ghost</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 flex justify-center">
                                <Button variant="ghost">Ghost</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sizes */}
                <section id="sizes" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Sizes</h2>
                        <p className="text-slate-600 mt-1">Three size options for different contexts.</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-8">
                        <div className="flex flex-wrap gap-4 items-center justify-center">
                            <Button variant="primary" size="sm">Small</Button>
                            <Button variant="primary" size="md">Medium</Button>
                            <Button variant="primary" size="lg">Large</Button>
                        </div>
                    </div>
                </section>

                {/* States */}
                <section id="states" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">States</h2>
                        <p className="text-slate-600 mt-1">Visual feedback for different interaction states.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Default</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 flex justify-center">
                                <Button variant="primary">Click Me</Button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">With Icon</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 flex justify-center">
                                <Button variant="primary" iconLocal={<Icon name="Send" set="bold" size="small" />}>Send</Button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Loading</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 flex justify-center">
                                <Button variant="primary" loading>Loading...</Button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Disabled</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 flex justify-center">
                                <Button variant="primary" disabled>Disabled</Button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Full Width</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <Button variant="primary" fullWidth>Full Width</Button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Icon Only</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 flex justify-center">
                                <Button variant="primary" iconLocal={<Icon name="Heart" set="bold" size="small" />} iconOnly />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Anatomy */}
                <section id="anatomy" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Anatomy</h2>
                        <p className="text-slate-600 mt-1">Component structure and key elements.</p>
                    </div>

                    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-16">
                        <div className="max-w-3xl mx-auto">
                            <div className="relative flex items-center justify-center py-16">
                                <div className="relative">
                                    <Button variant="primary" size="lg" iconLocal={<Icon name="Send" set="bold" size="small" />}>
                                        Send Message
                                    </Button>

                                    {/* Callout 1 - Container */}
                                    <div className="absolute -left-48 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-slate-900">Container</p>
                                            <p className="text-xs text-slate-600">Background & padding</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-primary-100 text-white flex items-center justify-center font-bold text-sm">1</div>
                                        <div className="w-16 h-[2px] bg-primary-100"></div>
                                    </div>

                                    {/* Callout 2 - Icon */}
                                    <div className="absolute -top-24 left-8 flex flex-col items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-secondary-100 text-white flex items-center justify-center font-bold text-sm">2</div>
                                        <div className="w-[2px] h-16 bg-secondary-100"></div>
                                        <div className="text-center">
                                            <p className="text-sm font-semibold text-slate-900">Icon</p>
                                            <p className="text-xs text-slate-600">Leading visual</p>
                                        </div>
                                    </div>

                                    {/* Callout 3 - Label */}
                                    <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                                        <div className="text-center">
                                            <p className="text-sm font-semibold text-slate-900">Label</p>
                                            <p className="text-xs text-slate-600">Button text</p>
                                        </div>
                                        <div className="w-[2px] h-16 bg-info-100"></div>
                                        <div className="w-10 h-10 rounded-full bg-info-100 text-white flex items-center justify-center font-bold text-sm">3</div>
                                    </div>

                                    {/* Callout 4 - States */}
                                    <div className="absolute -right-48 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                        <div className="w-16 h-[2px] bg-success-100"></div>
                                        <div className="w-10 h-10 rounded-full bg-success-100 text-white flex items-center justify-center font-bold text-sm">4</div>
                                        <div className="text-left">
                                            <p className="text-sm font-semibold text-slate-900">States</p>
                                            <p className="text-xs text-slate-600">Hover, focus, disabled</p>
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
                        <p className="text-slate-600 mt-1">Available configuration options.</p>
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
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">variant</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">"primary" | "secondary" | "outline" | "ghost"</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">"primary"</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Visual style variant</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">size</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">"sm" | "md" | "lg"</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">"md"</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Button size</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">iconLocal</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">ReactNode</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Leading icon element</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">loading</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">boolean</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">false</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Show loading spinner</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">disabled</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">boolean</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">false</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Disable button</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">fullWidth</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">boolean</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">false</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Full width button</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Dimension */}
                <section id="dimension" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Dimension</h2>
                        <p className="text-slate-600 mt-1">Size specifications for each variant.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900">Small</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                    <span className="text-sm text-slate-600">Height</span>
                                    <code className="text-sm font-mono text-slate-900">32px</code>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                    <span className="text-sm text-slate-600">Padding X</span>
                                    <code className="text-sm font-mono text-slate-900">12px</code>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm text-slate-600">Font Size</span>
                                    <code className="text-sm font-mono text-slate-900">14px</code>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900">Medium</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                    <span className="text-sm text-slate-600">Height</span>
                                    <code className="text-sm font-mono text-slate-900">40px</code>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                    <span className="text-sm text-slate-600">Padding X</span>
                                    <code className="text-sm font-mono text-slate-900">16px</code>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm text-slate-600">Font Size</span>
                                    <code className="text-sm font-mono text-slate-900">16px</code>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900">Large</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                    <span className="text-sm text-slate-600">Height</span>
                                    <code className="text-sm font-mono text-slate-900">48px</code>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                    <span className="text-sm text-slate-600">Padding X</span>
                                    <code className="text-sm font-mono text-slate-900">20px</code>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm text-slate-600">Font Size</span>
                                    <code className="text-sm font-mono text-slate-900">18px</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Implementation */}
                <section id="implementation" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Implementation</h2>
                        <p className="text-slate-600 mt-1">How to use the Button component.</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Basic Usage</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`import { Button } from "@/components/atoms/Button";

export function MyComponent() {
  return (
    <Button variant="primary">
      Click Me
    </Button>
  );
}`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">With Icon</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";

export function SendButton() {
  return (
    <Button 
      variant="primary" 
      iconLocal={<Icon name="Send" set="bold" size="small" />}
    >
      Send Message
    </Button>
  );
}`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Loading State</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`import { Button } from "@/components/atoms/Button";
import { useState } from "react";

export function SaveButton() {
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    await saveData();
    setLoading(false);
  };

  return (
    <Button 
      variant="primary" 
      loading={loading}
      onClick={handleSave}
    >
      Save Changes
    </Button>
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
