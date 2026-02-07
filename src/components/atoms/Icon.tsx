"use client";

import React from "react";
import { Iconly } from "react-iconly";

interface IconProps {
    name: string;
    set?: "bold" | "light" | "broken" | "bulk" | "two-tone";
    size?: number | "small" | "medium" | "large" | "xlarge";
    color?: string;
    className?: string;
}

const sizeMap = {
    small: 16,
    medium: 24,
    large: 32,
    xlarge: 48,
};

export const Icon: React.FC<IconProps> = ({
    name,
    set = "bold",
    size = "medium",
    color,
    className,
}) => {
    const pixelSize = typeof size === "number" ? size : sizeMap[size];

    return (
        <div className={className}>
            <Iconly
                name={name}
                set={set}
                size={pixelSize}
                primaryColor={color}
            />
        </div>
    );
};
