import React from "react";

interface ComponentPreviewProps {
    title: string;
    description?: string;
    children: React.ReactNode;
    code?: string;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({ title, description, children, code }) => {
    return (
        <div className="mb-12">
            <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                {description && <p className="text-slate-500">{description}</p>}
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <div className="p-8 md:p-12 flex items-center justify-center bg-slate-50/50 min-h-[200px] border-b border-slate-100">
                    {children}
                </div>
                {code && (
                    <div className="bg-slate-900 border-t border-slate-800 relative group/code">
                        <div className="absolute right-4 top-4 opacity-0 group-hover/code:opacity-100 transition-opacity">
                            <button
                                onClick={() => navigator.clipboard.writeText(code)}
                                className="bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs px-2 py-1 rounded-md transition-colors"
                            >
                                Copy
                            </button>
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm font-mono text-slate-300">
                            <code>{code}</code>
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
};
