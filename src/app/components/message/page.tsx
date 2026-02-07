"use client";

import { DocLayout } from "@/components/templates/DocLayout";
import { Message } from "@/components/atoms/Message";
import { useState } from "react";

const sections = [
    { id: "demo", label: "Demo" },
    { id: "variants", label: "Variants" },
    { id: "sizes", label: "Sizes" },
    { id: "anatomy", label: "Anatomy" },
    { id: "properties", label: "Properties" },
    { id: "implementation", label: "Implementation" },
];

export default function MessagePage() {
    const [showMessage, setShowMessage] = useState(true);

    return (
        <DocLayout
            title="Message"
            description="Display contextual information and notifications to users."
            sections={sections}
        >
            <div className="space-y-24">
                {/* Demo */}
                <section id="demo" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Interactive Demo</h2>
                        <p className="text-slate-600 mt-1">Try closing the message.</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-8">
                        {showMessage ? (
                            <Message
                                variant="primary"
                                icon="InfoCircle"
                                closable
                                onClose={() => setShowMessage(false)}
                            >
                                This is an informational message with a close button.
                            </Message>
                        ) : (
                            <button
                                onClick={() => setShowMessage(true)}
                                className="px-4 py-2 bg-primary-100 text-white rounded-lg hover:bg-primary-200 transition-colors"
                            >
                                Show Message Again
                            </button>
                        )}
                    </div>
                </section>

                {/* Variants */}
                <section id="variants" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Variants</h2>
                        <p className="text-slate-600 mt-1">Different semantic color variants with filled and outlined types.</p>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Filled (Default)</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <div className="space-y-4">
                                    <Message variant="primary" type="filled" icon="InfoCircle">
                                        Primary message for general information
                                    </Message>
                                    <Message variant="secondary" type="filled" icon="User">
                                        Secondary message for less important info
                                    </Message>
                                    <Message variant="success" type="filled" icon="TickSquare">
                                        Success message for positive actions
                                    </Message>
                                    <Message variant="info" type="filled" icon="InfoCircle">
                                        Info message for helpful tips
                                    </Message>
                                    <Message variant="warning" type="filled" icon="Danger">
                                        Warning message for potential issues
                                    </Message>
                                    <Message variant="danger" type="filled" icon="CloseSquare">
                                        Danger message for critical errors
                                    </Message>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Outlined</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <div className="space-y-4">
                                    <Message variant="primary" type="outlined" icon="InfoCircle">
                                        Primary message for general information
                                    </Message>
                                    <Message variant="secondary" type="outlined" icon="User">
                                        Secondary message for less important info
                                    </Message>
                                    <Message variant="success" type="outlined" icon="TickSquare">
                                        Success message for positive actions
                                    </Message>
                                    <Message variant="info" type="outlined" icon="InfoCircle">
                                        Info message for helpful tips
                                    </Message>
                                    <Message variant="warning" type="outlined" icon="Danger">
                                        Warning message for potential issues
                                    </Message>
                                    <Message variant="danger" type="outlined" icon="CloseSquare">
                                        Danger message for critical errors
                                    </Message>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sizes */}
                <section id="sizes" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Sizes</h2>
                        <p className="text-slate-600 mt-1">Three size options.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Small</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <Message size="small" variant="primary" icon="InfoCircle">
                                    Small message size
                                </Message>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Medium</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <Message size="medium" variant="primary" icon="InfoCircle">
                                    Medium message size (default)
                                </Message>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Large</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <Message size="large" variant="primary" icon="InfoCircle">
                                    Large message size
                                </Message>
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
                            <div className="relative py-16">
                                <Message variant="primary" icon="InfoCircle" closable>
                                    This is a message component
                                </Message>

                                {/* Callout 1 - Icon */}
                                <div className="absolute -left-44 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-slate-900">Icon</p>
                                        <p className="text-xs text-slate-600">Leading visual</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-primary-100 text-white flex items-center justify-center font-bold text-sm">1</div>
                                    <div className="w-16 h-[2px] bg-primary-100"></div>
                                </div>

                                {/* Callout 2 - Content */}
                                <div className="absolute -top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-secondary-100 text-white flex items-center justify-center font-bold text-sm">2</div>
                                    <div className="w-[2px] h-16 bg-secondary-100"></div>
                                    <div className="text-center">
                                        <p className="text-sm font-semibold text-slate-900">Content</p>
                                        <p className="text-xs text-slate-600">Message text</p>
                                    </div>
                                </div>

                                {/* Callout 3 - Close */}
                                <div className="absolute -right-44 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                    <div className="w-16 h-[2px] bg-info-100"></div>
                                    <div className="w-10 h-10 rounded-full bg-info-100 text-white flex items-center justify-center font-bold text-sm">3</div>
                                    <div className="text-left">
                                        <p className="text-sm font-semibold text-slate-900">Close</p>
                                        <p className="text-xs text-slate-600">Optional dismiss</p>
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
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">required</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Message content</td>
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
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">"filled"</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Style type (filled, outlined)</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">size</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">string</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">"medium"</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Size variant</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">icon</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">string</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">"InfoCircle"</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Icon name</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">closable</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">boolean</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">false</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Show close button</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">onClose</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">function</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Close callback</td>
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
                        <p className="text-slate-600 mt-1">How to use the Message component.</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Basic Usage</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`import { Message } from "@/components/atoms/Message";

export function MyComponent() {
  return (
    <Message variant="success" icon="TickSquare">
      Your changes have been saved successfully!
    </Message>
  );
}`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">With Close Button</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`import { Message } from "@/components/atoms/Message";
import { useState } from "react";

export function MyComponent() {
  const [show, setShow] = useState(true);
  
  return (
    <>
      {show && (
        <Message 
          variant="warning" 
          type="outlined"
          icon="Danger"
          closable
          onClose={() => setShow(false)}
        >
          Please review your information before submitting.
        </Message>
      )}
    </>
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
