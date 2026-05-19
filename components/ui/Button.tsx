"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
    onClick?: () => void;
    href?: string;
    icon?: ReactNode;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    variant = "primary",
    className,
    onClick,
    href,
    icon,
    type = "button",
}: ButtonProps) {
    const baseClasses = cn(
        variant === "primary" ? "btn-primary" : "btn-secondary",
        "inline-flex items-center gap-2",
        className
    );

    if (href) {
        return (
            <a href={href} className={baseClasses} onClick={onClick}>
                {icon}
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={baseClasses} onClick={onClick}>
            {icon}
            {children}
        </button>
    );
}
