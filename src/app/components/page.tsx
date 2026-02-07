import Link from "next/link";
import { Icon } from "@/components/atoms/Icon";
import { Card } from "@/components/atoms/Card";

export default function ComponentsPage() {
    const components = [
        { name: "Button", href: "/components/button", icon: "Play", desc: "Trigger actions and navigation." },
        { name: "Input", href: "/components/input", icon: "Edit", desc: "Capture user data." },
        { name: "Card", href: "/components/card", icon: "Document", desc: "Group related content." },
        // Add more as we build them, e.g., Modal, Badge, etc.
    ];

    return (
        <div className="max-w-6xl mx-auto py-12 px-6">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Components</h1>
                <p className="text-xl text-slate-500 leading-relaxed font-light">
                    Pre-built building blocks for rapid UI development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {components.map((comp) => (
                    <Link key={comp.name} href={comp.href}>
                        <Card hoverable className="p-6 h-full flex flex-col group">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 mb-4 group-hover:bg-cimano-50 group-hover:text-cimano-500 transition-colors">
                                <Icon name={comp.icon} set="bulk" size="medium" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">{comp.name}</h3>
                            <p className="text-sm text-slate-500">{comp.desc}</p>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
