"use client";

import { DocLayout } from "@/components/templates/DocLayout";
import { Input } from "@/components/atoms/Input";
import { Icon } from "@/components/atoms/Icon";

const sections = [
    { id: "demo", label: "Demo" },
    { id: "variants", label: "Variants" },
    { id: "states", label: "States" },
    { id: "anatomy", label: "Anatomy" },
    { id: "properties", label: "Properties" },
    { id: "dimension", label: "Dimension" },
    { id: "implementation", label: "Implementation" },
];

export default function InputPage() {
    return (
        <DocLayout
            title="Input"
            description="Text input fields allow users to enter and edit text data with validation and helper text support."
            sections={sections}
        >
            <div className="space-y-24">
                {/* Demo */}
                <section id="demo" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Interactive Demo</h2>
                        <p className="text-slate-600 mt-1">Try typing in the input field.</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-8">
                        <div className="max-w-md">
                            <Input
                                label="Email Address"
                                placeholder="you@example.com"
                                iconLocal={<Icon name="Message" set="bold" size="small" />}
                                helperText="We'll never share your email"
                            />
                        </div>
                    </div>
                </section>

                {/* Variants */}
                <section id="variants" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Variants</h2>
                        <p className="text-slate-600 mt-1">Different input field styles and configurations.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Basic</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <Input label="Name" placeholder="Enter your name" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">With Icon</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <Input
                                    label="Search"
                                    placeholder="Search..."
                                    iconLocal={<Icon name="Search" set="bold" size="small" />}
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">With Helper Text</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <Input
                                    label="Password"
                                    type="password"
                                    placeholder="Enter password"
                                    helperText="Must be at least 8 characters"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Disabled</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <Input label="Disabled" placeholder="Cannot edit" disabled />
                            </div>
                        </div>
                    </div>
                </section>

                {/* States */}
                <section id="states" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">States</h2>
                        <p className="text-slate-600 mt-1">Visual feedback for different input states.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Default</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <Input label="Username" placeholder="Enter username" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Focused</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <Input label="Email" placeholder="you@example.com" autoFocus />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Filled</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <Input label="Name" defaultValue="John Doe" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Disabled</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <Input label="Locked" defaultValue="Read only" disabled />
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
                            <div className="relative flex items-center justify-center py-20">
                                <div className="relative w-full max-w-md">
                                    <Input
                                        label="Email Address"
                                        iconLocal={<Icon name="Message" set="bold" size="small" />}
                                        placeholder="you@example.com"
                                        helperText="We'll never share your email"
                                    />

                                    {/* Callout 1 - Label */}
                                    <div className="absolute -left-44 top-0 flex items-center gap-3">
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-slate-900">Label</p>
                                            <p className="text-xs text-slate-600">Field description</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-primary-100 text-white flex items-center justify-center font-bold text-sm">1</div>
                                        <div className="w-16 h-[2px] bg-primary-100"></div>
                                    </div>

                                    {/* Callout 2 - Icon */}
                                    <div className="absolute -top-16 left-20 flex flex-col items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-secondary-100 text-white flex items-center justify-center font-bold text-sm">2</div>
                                        <div className="w-[2px] h-12 bg-secondary-100"></div>
                                    </div>

                                    {/* Callout 3 - Container */}
                                    <div className="absolute -right-48 top-10 flex items-center gap-3">
                                        <div className="w-16 h-[2px] bg-info-100"></div>
                                        <div className="w-10 h-10 rounded-full bg-info-100 text-white flex items-center justify-center font-bold text-sm">3</div>
                                        <div className="text-left">
                                            <p className="text-sm font-semibold text-slate-900">Container</p>
                                            <p className="text-xs text-slate-600">Border & background</p>
                                        </div>
                                    </div>

                                    {/* Callout 4 - Helper Text */}
                                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                                        <div className="text-center">
                                            <p className="text-sm font-semibold text-slate-900">Helper Text</p>
                                            <p className="text-xs text-slate-600">Guidance</p>
                                        </div>
                                        <div className="w-[2px] h-14 bg-success-100"></div>
                                        <div className="w-10 h-10 rounded-full bg-success-100 text-white flex items-center justify-center font-bold text-sm">4</div>
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
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">label</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">string</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Label text</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">type</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">string</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">"text"</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Input type (text, email, password, etc.)</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">placeholder</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">string</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Placeholder text</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">value</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">string</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Input value</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">disabled</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">boolean</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">false</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Disable input</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">iconLocal</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">ReactNode</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Leading icon element</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">helperText</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">string</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Helper text below input</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Dimension */}
                <section id="dimension" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Dimension</h2>
                        <p className="text-slate-600 mt-1">Size specifications.</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4 max-w-md">
                        <h3 className="text-lg font-semibold text-slate-900">Input Field</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                <span className="text-sm text-slate-600">Height</span>
                                <code className="text-sm font-mono text-slate-900">44px</code>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                <span className="text-sm text-slate-600">Padding X</span>
                                <code className="text-sm font-mono text-slate-900">14px</code>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                <span className="text-sm text-slate-600">Border Radius</span>
                                <code className="text-sm font-mono text-slate-900">10px</code>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-sm text-slate-600">Font Size</span>
                                <code className="text-sm font-mono text-slate-900">15px</code>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Implementation */}
                <section id="implementation" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Implementation</h2>
                        <p className="text-slate-600 mt-1">How to use the Input component.</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Basic Usage</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`import { Input } from "@/components/atoms/Input";

export function MyForm() {
  return (
    <Input 
      label="Email" 
      placeholder="you@example.com" 
    />
  );
}`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">With Icon</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`import { Input } from "@/components/atoms/Input";
import { Icon } from "@/components/atoms/Icon";

export function SearchBox() {
  return (
    <Input 
      label="Search" 
      placeholder="Search..."
      iconLocal={<Icon name="Search" set="bold" size="small" />}
    />
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
