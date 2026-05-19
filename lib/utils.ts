import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function generateWhatsAppURL(
    phoneNumber: string = "+94715567211",
    message?: string
): string {
    const defaultMessage = "Hi Sohan, I'm interested in planning a trip to Sri Lanka. Can you help me?";
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    return `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
}

export function generateTourWhatsAppMessage(
    tourName: string,
    duration: string,
    date?: string
): string {
    const baseMessage = `Hi Sohan, I'm interested in the "${tourName}" tour (${duration}).`;
    const dateMessage = date ? ` I'm planning to visit on ${date}.` : "";
    const endMessage = " Can you provide more details and custom availability?";
    return baseMessage + dateMessage + endMessage;
}

export function generateCustomWhatsAppMessage(options: {
    date?: string;
    days?: number;
    interests?: string[];
    people?: number;
    message?: string;
}): string {
    const parts: string[] = ["Hi Sohan, I'm visiting Sri Lanka"];
    
    if (options.date) {
        parts.push(`on ${options.date}`);
    }
    
    if (options.days) {
        parts.push(`and need a ${options.days}-day tour`);
    }
    
    if (options.interests && options.interests.length > 0) {
        parts.push(`Interests: ${options.interests.join(", ")}`);
    }
    
    if (options.people) {
        parts.push(`People: ${options.people}`);
    }
    
    if (options.message) {
        parts.push(options.message);
    }
    
    return parts.join(". ") + ". Can you help me plan?";
}
