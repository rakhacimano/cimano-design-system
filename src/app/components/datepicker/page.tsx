"use client";

import { DocLayout } from "@/components/templates/DocLayout";
import { DatePicker } from "@/components/molecules/DatePicker";
import { DateInput } from "@/components/molecules/DateInput";
import { useState } from "react";
import { Message } from "@/components/atoms/Message";

const sections = [
    { id: "demo", label: "Demo" },
    { id: "features", label: "Features" },
    { id: "views", label: "Views" },
    { id: "anatomy", label: "Anatomy" },
    { id: "properties", label: "Properties" },
    { id: "implementation", label: "Implementation" },
];

export default function DatePickerPage() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    return (
        <DocLayout
            title="Date Picker"
            description="An interactive calendar for selecting dates with multiple view modes."
            sections={sections}
        >
            <div className="space-y-24">
                {/* Demo */}
                <section id="demo" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Interactive Demo</h2>
                        <p className="text-slate-600 mt-1">Click the input field to open the date picker.</p>
                    </div>

                    <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8">
                        <div className="space-y-4 max-w-md">
                            <DateInput
                                value={selectedDate}
                                onChange={setSelectedDate}
                                placeholder="Select a date"
                            />

                            <Message variant="info" icon="Calendar" type="outlined">
                                Selected: {selectedDate.toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </Message>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section id="features" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Features</h2>
                        <p className="text-slate-600 mt-1">Key capabilities of the DatePicker component.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Multiple Views</h3>
                            <p className="text-slate-600 text-sm">
                                Switch between day, month, and year views by clicking the header.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Navigation</h3>
                            <p className="text-slate-600 text-sm">
                                Use arrow buttons to navigate between months, years, or decades.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Indicators</h3>
                            <p className="text-slate-600 text-sm">
                                Visual dots below dates to mark events or important days.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Responsive</h3>
                            <p className="text-slate-600 text-sm">
                                Fully responsive design that adapts to any container width.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Views */}
                <section id="views" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">View Modes</h2>
                        <p className="text-slate-600 mt-1">Three different view modes for efficient date selection.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Date View</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-4">
                                <p className="text-sm text-slate-600">
                                    Grid of days in the current month with previous/next month days shown in lighter color.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Month View</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-4">
                                <p className="text-sm text-slate-600">
                                    12 months displayed in a grid for quick month selection.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-slate-900">Year View</span>
                            <div className="bg-white rounded-2xl border border-slate-100 p-4">
                                <p className="text-sm text-slate-600">
                                    12 years displayed for selecting a specific year quickly.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Anatomy */}
                <section id="anatomy" className="scroll-mt-24 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Anatomy</h2>
                        <p className="text-slate-600 mt-1">Component structure and elements.</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-6">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary-100 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                                <div>
                                    <p className="font-semibold text-slate-900">Header</p>
                                    <p className="text-sm text-slate-600">Navigation arrows and current period display</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-secondary-100 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                                <div>
                                    <p className="font-semibold text-slate-900">Day Labels</p>
                                    <p className="text-sm text-slate-600">Days of the week headers (Date view only)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-success-100 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                                <div>
                                    <p className="font-semibold text-slate-900">Calendar Grid</p>
                                    <p className="text-sm text-slate-600">Interactive grid of dates/months/years</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-info-100 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                                <div>
                                    <p className="font-semibold text-slate-900">Indicators</p>
                                    <p className="text-sm text-slate-600">Optional dots marking special dates</p>
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
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">value</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Date</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Selected date value</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">onChange</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">function</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Callback when date is selected</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">minDate</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Date</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Minimum selectable date</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-primary-100">maxDate</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Date</td>
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">-</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">Maximum selectable date</td>
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
                        <p className="text-slate-600 mt-1">How to use the DatePicker component.</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">With Input Field (Recommended)</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`import { DateInput } from "@/components/molecules/DateInput";
import { useState } from "react";

export function MyComponent() {
  const [date, setDate] = useState(new Date());
  
  return (
    <DateInput
      value={date}
      onChange={setDate}
      placeholder="Select a date"
    />
  );
}`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Always Visible Calendar</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`import { DatePicker } from "@/components/molecules/DatePicker";
import { useState } from "react";

export function MyComponent() {
  const [date, setDate] = useState(new Date());
  
  return (
    <DatePicker
      value={date}
      onChange={setDate}
    />
  );
}`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">With Date Range Limits</h3>
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`const today = new Date();
const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

<DatePicker
  value={date}
  onChange={setDate}
  minDate={today}
  maxDate={nextMonth}
/>`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </DocLayout>
    );
}
