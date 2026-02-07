"use client";

import { DocLayout } from "@/components/templates/DocLayout";
import { InputImage } from "@/components/atoms/InputImage";
import { useState } from "react";

const sections = [
    { id: "demo", label: "Demo" },
    { id: "variants", label: "Variants" },
    { id: "states", label: "States" },
    { id: "anatomy", label: "Anatomy" },
    { id: "properties", label: "Properties" },
    { id: "dimension", label: "Dimension" },
    { id: "implementation", label: "Implementation" },
];

export default function ImageUploadPage() {
    const [uploadedFile, setUploadedFile] = useState<File | string | null>(null);

    return (
        <DocLayout
            title="Image Upload"
            description="A versatile image upload component with drag-and-drop, file browsing, and URL import capabilities."
            sections={sections}
        >
            <div className="space-y-24">
                {/* Interactive Demo */}
                <section id="demo" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Interactive Demo</h2>
                        <p className="text-slate-600 mt-1">Upload an image to see it in action.</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-8">
                        <InputImage
                            label="Product Image"
                            maxSizeMB={5}
                            acceptedFormats="JPG/PNG/WebP"
                            onChange={(file) => {
                                setUploadedFile(file);
                                console.log("Uploaded:", file);
                            }}
                        />

                        {uploadedFile && (
                            <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <p className="text-sm font-semibold text-slate-700 mb-2">Upload Info:</p>
                                <pre className="text-xs text-slate-600 font-mono">
                                    {typeof uploadedFile === "string"
                                        ? `URL: ${uploadedFile}`
                                        : `File: ${uploadedFile.name} (${(uploadedFile.size / 1024).toFixed(2)} KB)`}
                                </pre>
                            </div>
                        )}
                    </div>
                </section>

                {/* Variants */}
                <section id="variants" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Variants</h2>
                        <p className="text-slate-600 mt-1">Different configuration options for the upload component.</p>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-slate-900">Standard</span>
                                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">Default</span>
                            </div>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <InputImage label="Upload Image" showUrlImport={true} />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-slate-900">Upload Only</span>
                                <span className="text-xs bg-info-100 text-white px-2 py-1 rounded-md">No URL</span>
                            </div>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <InputImage label="Upload Image" showUrlImport={false} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* States */}
                <section id="states" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">States</h2>
                        <p className="text-slate-600 mt-1">Visual feedback for different interaction states.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Default</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <div className="border border-dashed border-grey-1000 bg-white rounded-xl h-[180px] flex flex-col items-center justify-center gap-3">
                                    <div className="size-8 text-grey-500">📷</div>
                                    <div className="text-center">
                                        <p className="text-sm font-medium text-grey-100">
                                            Drag & drop or <span className="text-primary-100">browse</span>
                                        </p>
                                        <p className="text-xs text-grey-500">JPG/PNG, max 5MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Drag Active</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <div className="border border-dashed border-primary-700 bg-primary-1000 rounded-xl h-[180px] flex flex-col items-center justify-center gap-3">
                                    <div className="size-8 text-primary-100">📷</div>
                                    <p className="text-sm font-medium text-primary-100">Drop your file(s) here</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">With Image</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <div className="border border-dashed border-grey-1000 bg-grey-1100 rounded-xl h-[180px] relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 opacity-30" />
                                    <div className="absolute top-2 right-2 flex gap-2">
                                        <button className="bg-danger-1000 border border-danger-900 p-2 rounded-lg text-xs">🗑️</button>
                                        <button className="bg-white border border-grey-1000 px-3 py-2 rounded-lg text-xs">Change</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Hover</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <div className="border border-dashed border-primary-700 bg-white rounded-xl h-[180px] flex flex-col items-center justify-center gap-3">
                                    <div className="size-8 text-primary-100">📷</div>
                                    <div className="text-center">
                                        <p className="text-sm font-medium text-grey-100">
                                            Drag & drop or <span className="text-primary-100 underline">browse</span>
                                        </p>
                                        <p className="text-xs text-grey-500">JPG/PNG, max 5MB</p>
                                    </div>
                                </div>
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
                            <div className="relative flex items-center justify-center py-24">
                                <div className="relative w-full max-w-md">
                                    <InputImage
                                        label="Product Image"
                                        maxSizeMB={5}
                                        acceptedFormats="JPG/PNG/WebP"
                                        showUrlImport={true}
                                    />

                                    {/* Callout 1 - Label */}
                                    <div className="absolute -left-44 top-0 flex items-center gap-3">
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-slate-900">Label</p>
                                            <p className="text-xs text-slate-600">Upload title</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-primary-100 text-white flex items-center justify-center font-bold text-sm">1</div>
                                        <div className="w-16 h-[2px] bg-primary-100"></div>
                                    </div>

                                    {/* Callout 2 - Drop Zone */}
                                    <div className="absolute -top-20 left-1/3 flex flex-col items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-secondary-100 text-white flex items-center justify-center font-bold text-sm">2</div>
                                        <div className="w-[2px] h-16 bg-secondary-100"></div>
                                        <div className="text-center">
                                            <p className="text-sm font-semibold text-slate-900">Drop Zone</p>
                                            <p className="text-xs text-slate-600">Drag & drop area</p>
                                        </div>
                                    </div>

                                    {/* Callout 3 - Instructions */}
                                    <div className="absolute -right-52 top-28 flex items-center gap-3">
                                        <div className="w-16 h-[2px] bg-info-100"></div>
                                        <div className="w-10 h-10 rounded-full bg-info-100 text-white flex items-center justify-center font-bold text-sm">3</div>
                                        <div className="text-left">
                                            <p className="text-sm font-semibold text-slate-900">Instructions</p>
                                            <p className="text-xs text-slate-600">Visual guidance</p>
                                        </div>
                                    </div>

                                    {/* Callout 4 - URL Input */}
                                    <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                                        <div className="text-center">
                                            <p className="text-sm font-semibold text-slate-900">URL Import</p>
                                            <p className="text-xs text-slate-600">Alternative upload</p>
                                        </div>
                                        <div className="w-[2px] h-20 bg-success-100"></div>
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
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">"Image"</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Label text above the upload area</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">maxSizeMB</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">number</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">5</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Maximum file size in MB</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">acceptedFormats</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">string</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">"JPG/PNG"</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Display text for accepted formats</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">showUrlImport</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">boolean</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">true</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Show/hide URL import section</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">onChange</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">function</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Callback when image changes</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">value</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">string</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Initial image URL</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Dimension */}
                <section id="dimension" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Dimension</h2>
                        <p className="text-slate-600 mt-1">Size specifications and responsive behavior.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900">Upload Area</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                    <span className="text-sm text-slate-600">Height</span>
                                    <code className="text-sm font-mono text-slate-900">180px</code>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                    <span className="text-sm text-slate-600">Width</span>
                                    <code className="text-sm font-mono text-slate-900">100%</code>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                                    <span className="text-sm text-slate-600">Border Radius</span>
                                    <code className="text-sm font-mono text-slate-900">12px</code>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm text-slate-600">Padding</span>
                                    <code className="text-sm font-mono text-slate-900">16px</code>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900">Responsive</h3>
                            <div className="space-y-3">
                                <div className="p-3 bg-slate-50 rounded-lg">
                                    <p className="text-sm font-medium text-slate-900 mb-1">Mobile</p>
                                    <p className="text-xs text-slate-600">Full width, stacked layout</p>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-lg">
                                    <p className="text-sm font-medium text-slate-900 mb-1">Tablet</p>
                                    <p className="text-xs text-slate-600">Adapts to container width</p>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-lg">
                                    <p className="text-sm font-medium text-slate-900 mb-1">Desktop</p>
                                    <p className="text-xs text-slate-600">Full features with URL import</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Implementation */}
                <section id="implementation" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Implementation</h2>
                        <p className="text-slate-600 mt-1">How to use the component in your project.</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Basic Usage</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`import { InputImage } from "@/components/atoms/InputImage";

export function MyForm() {
  const [image, setImage] = useState(null);

  return (
    <InputImage 
      label="Profile Picture"
      onChange={(file) => setImage(file)}
    />
  );
}`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">With Form Handling</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`export function ProductForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputImage 
        label="Product Image"
        maxSizeMB={10}
        acceptedFormats="JPG/PNG/WebP"
        onChange={(file) => {
          if (file instanceof File) {
            // Handle file upload
          } else {
            // Handle URL import
          }
        }}
      />
      <button type="submit">Submit</button>
    </form>
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
