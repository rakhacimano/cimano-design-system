"use client";

import { DocLayout } from "@/components/templates/DocLayout";
import { Icon } from "@/components/atoms/Icon";

const sections = [
    { id: "overview", label: "Overview" },
    { id: "library", label: "Icon Library" },
    { id: "sizes", label: "Sizes" },
    { id: "sets", label: "Sets" },
    { id: "usage", label: "Usage" },
    { id: "implementation", label: "Implementation" },
];

const safeIcons = [
    "Home", "Search", "Heart", "Star", "Send", "Download",
    "Upload", "Edit", "Delete", "Document",
    "User", "Calendar", "Message", "Plus"
];

export default function IconsPage() {
    return (
        <DocLayout
            title="Icons"
            description="Cimano uses React Iconly, a comprehensive icon library with bold, bulk, light, and broken styles."
            sections={sections}
        >
            <div className="space-y-24">
                {/* Overview */}
                <section id="overview" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
                        <p className="text-slate-600 mt-1">Icons enhance the user experience by providing visual cues and improving navigation.</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-8">
                        <div className="space-y-4">
                            <div className="flex items-baseline gap-4">
                                <span className="text-sm font-semibold text-slate-600 w-32">Library:</span>
                                <span className="text-lg font-medium text-slate-900">React Iconly</span>
                            </div>
                            <div className="flex items-baseline gap-4">
                                <span className="text-sm font-semibold text-slate-600 w-32">Total Icons:</span>
                                <span className="text-lg">200+ icons</span>
                            </div>
                            <div className="flex items-baseline gap-4">
                                <span className="text-sm font-semibold text-slate-600 w-32">Styles:</span>
                                <span className="text-lg">Bold, Bulk, Light, Broken</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Library */}
                <section id="library" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Icon Library</h2>
                        <p className="text-slate-600 mt-1">Popular icons from the collection.</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-8">
                        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                            {safeIcons.map((icon) => (
                                <div
                                    key={icon}
                                    className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
                                >
                                    <Icon name={icon} set="bold" size="medium" />
                                    <span className="text-xs text-slate-600 text-center group-hover:text-slate-900">{icon}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sizes */}
                <section id="sizes" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Sizes</h2>
                        <p className="text-slate-600 mt-1">Standard icon sizes for consistency.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col items-center gap-3">
                            <Icon name="Heart" set="bold" size="small" />
                            <div className="text-center">
                                <p className="text-sm font-semibold text-slate-900">Small</p>
                                <code className="text-xs text-slate-600">16px</code>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col items-center gap-3">
                            <Icon name="Heart" set="bold" size="medium" />
                            <div className="text-center">
                                <p className="text-sm font-semibold text-slate-900">Medium</p>
                                <code className="text-xs text-slate-600">24px</code>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col items-center gap-3">
                            <Icon name="Heart" set="bold" size="large" />
                            <div className="text-center">
                                <p className="text-sm font-semibold text-slate-900">Large</p>
                                <code className="text-xs text-slate-600">32px</code>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col items-center gap-3">
                            <Icon name="Heart" set="bold" size="xlarge" />
                            <div className="text-center">
                                <p className="text-sm font-semibold text-slate-900">XLarge</p>
                                <code className="text-xs text-slate-600">48px</code>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sets */}
                <section id="sets" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Icon Sets</h2>
                        <p className="text-slate-600 mt-1">Different visual styles for various contexts.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Icon name="Star" set="bold" size="large" />
                                <div>
                                    <h3 className="font-semibold text-slate-900">Bold</h3>
                                    <p className="text-sm text-slate-600">Strong, prominent icons</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Icon name="Star" set="bulk" size="large" />
                                <div>
                                    <h3 className="font-semibold text-slate-900">Bulk</h3>
                                    <p className="text-sm text-slate-600">Filled with opacity</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Icon name="Star" set="light" size="large" />
                                <div>
                                    <h3 className="font-semibold text-slate-900">Light</h3>
                                    <p className="text-sm text-slate-600">Thin, minimal lines</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Icon name="Star" set="broken" size="large" />
                                <div>
                                    <h3 className="font-semibold text-slate-900">Broken</h3>
                                    <p className="text-sm text-slate-600">Unique broken style</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Usage */}
                <section id="usage" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Usage Guidelines</h2>
                        <p className="text-slate-600 mt-1">Best practices for using icons.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Consistency</h3>
                            <p className="text-sm text-slate-600">Use the same icon set throughout your interface for visual coherence.</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Size</h3>
                            <p className="text-sm text-slate-600">Match icon size to the context (small for buttons, large for feature highlights).</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Color</h3>
                            <p className="text-sm text-slate-600">Use semantic colors to convey meaning (success, warning, danger).</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Accessibility</h3>
                            <p className="text-sm text-slate-600">Always pair icons with text labels or provide aria-label for screen readers.</p>
                        </div>
                    </div>
                </section>

                {/* Implementation */}
                <section id="implementation" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Implementation</h2>
                        <p className="text-slate-600 mt-1">How to use icons in your code.</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Basic Usage</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`import { Icon } from "@/components/atoms/Icon";

export function MyComponent() {
  return (
    <Icon name="Heart" set="bold" size="medium" />
  );
}`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">With Color</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`import { Icon } from "@/components/atoms/Icon";

export function LikeButton() {
  return (
    <Icon 
      name="Heart" 
      set="bold" 
      size="medium"
      primaryColor="#EF4444"
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
