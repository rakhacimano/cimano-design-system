"use client";

import { DocLayout } from "@/components/templates/DocLayout";

const colorGroups = [
    {
        name: "Primary",
        description: "Our signature violet palette — use this for primary actions, emphasis, and brand moments.",
        baseColor: "#5F33BA",
        gradient: "from-primary-100 via-primary-500 to-primary-1000",
        colors: [
            { name: "100", value: "#5F33BA", contrast: "white" },
            { name: "200", value: "#6F47C1", contrast: "white" },
            { name: "300", value: "#7F5CC8", contrast: "white" },
            { name: "400", value: "#8F70CF", contrast: "white" },
            { name: "500", value: "#9F85D6", contrast: "white" },
            { name: "600", value: "#AF99DD", contrast: "black" },
            { name: "700", value: "#BFADE3", contrast: "black" },
            { name: "800", value: "#CFC2EA", contrast: "black" },
            { name: "900", value: "#DFD6F1", contrast: "black" },
            { name: "1000", value: "#F6F4FB", contrast: "black" },
            { name: "1100", value: "#FFFFFF", contrast: "black" },
        ],
    },
    {
        name: "Secondary",
        description: "Warm golden tones for accents, highlights, and secondary emphasis.",
        baseColor: "#FFB614",
        gradient: "from-secondary-100 via-secondary-500 to-secondary-1000",
        colors: [
            { name: "100", value: "#FFB614", contrast: "black" },
            { name: "200", value: "#FFBD2C", contrast: "black" },
            { name: "300", value: "#FFC543", contrast: "black" },
            { name: "400", value: "#FFCC5B", contrast: "black" },
            { name: "500", value: "#FFD372", contrast: "black" },
            { name: "600", value: "#FFDB8A", contrast: "black" },
            { name: "700", value: "#FFE2A1", contrast: "black" },
            { name: "800", value: "#FFE9B9", contrast: "black" },
            { name: "900", value: "#FFF0D0", contrast: "black" },
            { name: "1000", value: "#FFF8E8", contrast: "black" },
            { name: "1100", value: "#FFFFFF", contrast: "black" },
        ],
    },
    {
        name: "Info",
        description: "Bright blues for informational UI elements and interactive feedback.",
        baseColor: "#1B84FF",
        gradient: "from-info-100 via-info-500 to-info-1000",
        colors: [
            { name: "100", value: "#1B84FF", contrast: "white" },
            { name: "200", value: "#3290FF", contrast: "white" },
            { name: "300", value: "#499DFF", contrast: "white" },
            { name: "400", value: "#5FA9FF", contrast: "black" },
            { name: "500", value: "#76B5FF", contrast: "black" },
            { name: "600", value: "#8DC2FF", contrast: "black" },
            { name: "700", value: "#A4CEFF", contrast: "black" },
            { name: "800", value: "#BBDAFF", contrast: "black" },
            { name: "900", value: "#D1E6FF", contrast: "black" },
            { name: "1000", value: "#F0F7FF", contrast: "black" },
            { name: "1100", value: "#FFFFFF", contrast: "black" },
        ],
    },
    {
        name: "Success",
        description: "Fresh greens indicating positive states and successful operations.",
        baseColor: "#17C653",
        gradient: "from-success-100 via-success-500 to-success-1000",
        colors: [
            { name: "100", value: "#17C653", contrast: "white" },
            { name: "200", value: "#2ECC64", contrast: "white" },
            { name: "300", value: "#45D175", contrast: "white" },
            { name: "400", value: "#5DD787", contrast: "black" },
            { name: "500", value: "#74DD98", contrast: "black" },
            { name: "600", value: "#8BE3A9", contrast: "black" },
            { name: "700", value: "#A2E8BA", contrast: "black" },
            { name: "800", value: "#B9EECB", contrast: "black" },
            { name: "900", value: "#D1F4DD", contrast: "black" },
            { name: "1000", value: "#F3FCF6", contrast: "black" },
            { name: "1100", value: "#FFFFFF", contrast: "black" },
        ],
    },
    {
        name: "Warning",
        description: "Vibrant oranges for warnings and cautionary messages.",
        baseColor: "#F6B100",
        gradient: "from-warning-100 via-warning-500 to-warning-1000",
        colors: [
            { name: "100", value: "#F6B100", contrast: "black" },
            { name: "200", value: "#F7B91A", contrast: "black" },
            { name: "300", value: "#F8C133", contrast: "black" },
            { name: "400", value: "#F9C84D", contrast: "black" },
            { name: "500", value: "#FAD066", contrast: "black" },
            { name: "600", value: "#FBD880", contrast: "black" },
            { name: "700", value: "#FBE099", contrast: "black" },
            { name: "800", value: "#FCE8B3", contrast: "black" },
            { name: "900", value: "#FDEFCC", contrast: "black" },
            { name: "1000", value: "#FEFAF0", contrast: "black" },
            { name: "1100", value: "#FFFFFF", contrast: "black" },
        ],
    },
    {
        name: "Danger",
        description: "Bold pinks and reds for errors, destructive actions, and critical alerts.",
        baseColor: "#F8285A",
        gradient: "from-danger-100 via-danger-500 to-danger-1000",
        colors: [
            { name: "100", value: "#F8285A", contrast: "white" },
            { name: "200", value: "#F93E6B", contrast: "white" },
            { name: "300", value: "#F9537B", contrast: "white" },
            { name: "400", value: "#FA698C", contrast: "black" },
            { name: "500", value: "#FB7E9C", contrast: "black" },
            { name: "600", value: "#FC94AD", contrast: "black" },
            { name: "700", value: "#FCA9BD", contrast: "black" },
            { name: "800", value: "#FDBFCE", contrast: "black" },
            { name: "900", value: "#FED4DE", contrast: "black" },
            { name: "1000", value: "#FEF0F4", contrast: "black" },
            { name: "1100", value: "#FFFFFF", contrast: "black" },
        ],
    },
    {
        name: "Grey",
        description: "Neutral dark tones for text, borders, and UI structure.",
        baseColor: "#1B1C22",
        gradient: "from-grey-100 via-grey-500 to-grey-1100",
        colors: [
            { name: "100", value: "#1B1C22", contrast: "white" },
            { name: "200", value: "#323338", contrast: "white" },
            { name: "300", value: "#49494E", contrast: "white" },
            { name: "400", value: "#5F6064", contrast: "white" },
            { name: "500", value: "#76777A", contrast: "white" },
            { name: "600", value: "#8D8E91", contrast: "black" },
            { name: "700", value: "#A4A4A7", contrast: "black" },
            { name: "800", value: "#BBBBBD", contrast: "black" },
            { name: "900", value: "#D1D2D3", contrast: "black" },
            { name: "1000", value: "#EFEFF0", contrast: "black" },
            { name: "1100", value: "#F9F9F9", contrast: "black" },
        ],
    },
    {
        name: "Neutral",
        description: "Ultra-light backgrounds for whisper-subtle surfaces and dividers.",
        baseColor: "#FFFFFF",
        gradient: "from-neutral-100 via-neutral-500 to-neutral-1100",
        colors: [
            { name: "100", value: "#FFFFFF", contrast: "black" },
            { name: "200", value: "#FAFBFB", contrast: "black" },
            { name: "300", value: "#F6F6F6", contrast: "black" },
            { name: "400", value: "#F1F2F2", contrast: "black" },
            { name: "500", value: "#EDEDED", contrast: "black" },
            { name: "600", value: "#E8E9E9", contrast: "black" },
            { name: "700", value: "#E3E4E5", contrast: "black" },
            { name: "800", value: "#DFE0E0", contrast: "black" },
            { name: "900", value: "#DADBDC", contrast: "black" },
            { name: "1000", value: "#D6D7D7", contrast: "black" },
            { name: "1100", value: "#D1D2D3", contrast: "black" },
        ],
    },
];

export default function ColorsPage() {
    return (
        <DocLayout
            title="Colors"
            description="A comprehensive color system designed for scale. From bold primaries to subtle neutrals — every shade has a purpose."
        >
            <div className="space-y-24">
                {colorGroups.map((group, groupIndex) => (
                    <section key={group.name} className="space-y-8">
                        {/* Header with Gradient Preview */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div
                                    className={`size-16 rounded-2xl bg-gradient-to-br ${group.gradient} shadow-cimano-md`}
                                />
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900">{group.name}</h2>
                                    <p className="text-slate-600 mt-1 max-w-2xl">{group.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Color Swatches - Premium Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
                            {group.colors.map((color, index) => (
                                <div
                                    key={color.name}
                                    className="group relative"
                                    style={{
                                        animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
                                    }}
                                >
                                    {/* Main Color Block */}
                                    <div
                                        className="relative aspect-square rounded-2xl shadow-cimano-sm border border-slate-100/50 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-cimano-lg hover:border-slate-200"
                                        style={{ backgroundColor: color.value }}
                                    >
                                        {/* Hover Overlay with Contrast Text */}
                                        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-end p-4">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div
                                                    className={`text-xs font-bold ${color.contrast === "white" ? "text-white" : "text-black"
                                                        }`}
                                                >
                                                    {group.name.toLowerCase()}-{color.name}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Copy Button (appears on hover) */}
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(color.value);
                                            }}
                                            className="absolute top-2 right-2 size-8 rounded-lg bg-white/90 backdrop-blur-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white flex items-center justify-center"
                                            title="Copy color code"
                                        >
                                            <svg className="size-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Color Info */}
                                    <div className="mt-3 space-y-1">
                                        <div className="flex items-baseline justify-between">
                                            <span className="text-sm font-bold text-slate-900">
                                                {color.name}
                                            </span>
                                            <code className="text-xs text-slate-500 font-mono">
                                                {color.value}
                                            </code>
                                        </div>

                                        {/* CSS Variable Name */}
                                        <code className="block text-xs text-slate-400 font-mono truncate">
                                            --color-{group.name.toLowerCase()}-{color.name}
                                        </code>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Gradient Bar */}
                        <div
                            className={`h-3 rounded-full bg-gradient-to-r ${group.gradient} shadow-inner`}
                        />
                    </section>
                ))}

                {/* Usage Guide */}
                <section className="bg-slate-50 rounded-3xl p-12 border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Usage Guide</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">CSS Variables</h3>
                            <div className="bg-slate-900 rounded-xl p-4">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`/* Use in CSS */
.button-primary {
  background: var(--color-primary-100);
  color: white;
}

.bg-subtle {
  background: var(--color-neutral-300);
}`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">Tailwind Classes</h3>
                            <div className="bg-slate-900 rounded-xl p-4">
                                <pre className="text-sm text-slate-300 font-mono">
                                    {`<!-- Use in JSX/HTML -->
<button className="bg-primary-100 text-white">
  Click me
</button>

<div className="bg-neutral-300 border border-grey-1000">
  Content
</div>`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </DocLayout>
    );
}
