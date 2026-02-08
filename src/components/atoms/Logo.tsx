import React from "react";
import Image from "next/image";

export const Logo = () => {
    return (
        <div className="flex items-center group">
            <Image
                src="/logo.svg"
                alt="Rakhacimano Logo"
                width={140}
                height={32}
                className="h-8 w-auto"
            />
        </div>
    );
};
