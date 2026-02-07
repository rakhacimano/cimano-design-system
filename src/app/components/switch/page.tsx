"use client";

import { DocLayout } from "@/components/templates/DocLayout";
import { RadioButton } from "@/components/atoms/RadioButton";
import { useState } from "react";

const sections = [
    { id: "demo", label: "Demo" },
    { id: "sizes", label: "Sizes" },
    { id: "states", label: "States" },
    { id: "anatomy", label: "Anatomy" },
    { id: "properties", label: "Properties" },
    { id: "implementation", label: "Implementation" },
];

export default function RadioButtonPage() {
    const [demoChecked, setDemoChecked] = useState(true);
    const [smallChecked, setSmallChecked] = useState(false);
    const [mediumChecked, setMediumChecked] = useState(true);
    const [largeChecked, setLargeChecked] = useState(false);

    return (
        <DocLayout
            title="Toggle Switch"
            description="A toggle switch for binary on/off states with smooth animations."
            sections={sections}
        >
            <div className="space-y-24">
                {/* Demo */}
                <section id="demo" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Interactive Demo</h2>
                        <p className="text-slate-600 mt-1">Try toggling the switch.</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-8">
                        <RadioButton
                            checked={demoChecked}
                            onChange={setDemoChecked}
                            label="Enable notifications"
                            size="medium"
                        />
                    </div>
                </section>

                {/* Sizes */}
                <section id="sizes" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Sizes</h2>
                        <p className="text-slate-600 mt-1">Three size options for different contexts.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Small</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <div className="space-y-4">
                                    <RadioButton
                                        size="small"
                                        checked={smallChecked}
                                        onChange={setSmallChecked}
                                    />
                                    <RadioButton
                                        size="small"
                                        checked={smallChecked}
                                        onChange={setSmallChecked}
                                        label="Text"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Medium</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <div className="space-y-4">
                                    <RadioButton
                                        size="medium"
                                        checked={mediumChecked}
                                        onChange={setMediumChecked}
                                    />
                                    <RadioButton
                                        size="medium"
                                        checked={mediumChecked}
                                        onChange={setMediumChecked}
                                        label="Text"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Large</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <div className="space-y-4">
                                    <RadioButton
                                        size="large"
                                        checked={largeChecked}
                                        onChange={setLargeChecked}
                                    />
                                    <RadioButton
                                        size="large"
                                        checked={largeChecked}
                                        onChange={setLargeChecked}
                                        label="Text"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* States */}
                <section id="states" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">States</h2>
                        <p className="text-slate-600 mt-1">Different states and variations.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Active</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <div className="space-y-4">
                                    <RadioButton checked={false} label="Unchecked" />
                                    <RadioButton checked={true} label="Checked" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Disabled</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <div className="space-y-4">
                                    <RadioButton checked={false} disabled label="Disabled Off" />
                                    <RadioButton checked={true} disabled label="Disabled On" />
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
                                    <RadioButton checked={true} label="Label Text" size="large" />

                                    {/* Callout 1 - Track */}
                                    <div className="absolute -left-44 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-slate-900">Track</p>
                                            <p className="text-xs text-slate-600">Background container</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-primary-100 text-white flex items-center justify-center font-bold text-sm">1</div>
                                        <div className="w-16 h-[2px] bg-primary-100"></div>
                                    </div>

                                    {/* Callout 2 - Knob */}
                                    <div className="absolute -top-20 left-6 flex flex-col items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-secondary-100 text-white flex items-center justify-center font-bold text-sm">2</div>
                                        <div className="w-[2px] h-16 bg-secondary-100"></div>
                                        <div className="text-center">
                                            <p className="text-sm font-semibold text-slate-900">Knob</p>
                                            <p className="text-xs text-slate-600">Sliding indicator</p>
                                        </div>
                                    </div>

                                    {/* Callout 3 - Label */}
                                    <div className="absolute -right-40 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                        <div className="w-16 h-[2px] bg-info-100"></div>
                                        <div className="w-10 h-10 rounded-full bg-info-100 text-white flex items-center justify-center font-bold text-sm">3</div>
                                        <div className="text-left">
                                            <p className="text-sm font-semibold text-slate-900">Label</p>
                                            <p className="text-xs text-slate-600">Optional text</p>
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
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">checked</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">boolean</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">false</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Toggle state</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">onChange</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">function</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Callback when toggled</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">size</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">string</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">"medium"</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Size variant (small, medium, large)</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">label</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">string</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Optional label text</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">disabled</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">boolean</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">false</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Disabled state</td>
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
                        <p className="text-slate-600 mt-1">How to use the Toggle Switch.</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Basic Usage</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`import { RadioButton } from "@/components/atoms/RadioButton";
import { useState } from "react";

export function MyComponent() {
  const [enabled, setEnabled] = useState(false);
  
  return (
    <RadioButton
      checked={enabled}
      onChange={setEnabled}
      label="Enable feature"
    />
  );
}`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Different Sizes</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`<RadioButton size="small" checked={enabled} onChange={setEnabled} />
<RadioButton size="medium" checked={enabled} onChange={setEnabled} />
<RadioButton size="large" checked={enabled} onChange={setEnabled} />`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </DocLayout>
    );
}
