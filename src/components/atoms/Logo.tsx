import React from "react";

export const Logo = () => {
    return (
        <div className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 bg-slate-900 rounded-md flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:bg-cimano-500 transition-colors duration-300">
                C
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors">
                Cimano
            </span>
        </div>
    );
};
