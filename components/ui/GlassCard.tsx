"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    onClick?: () => void;
}

export default function GlassCard({ children, className, hover = false, onClick }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-card rounded-xl p-6",
                hover && "hover-glow cursor-pointer",
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
