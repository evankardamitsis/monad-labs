import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
    children: ReactNode;
    href?: string;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
    "inline-flex items-center justify-center rounded-2xl border border-[#1E1E1E] bg-[#007AFF] px-7 py-3 text-xs font-medium uppercase tracking-[0.32em] text-[#0A0A0A] transition-transform duration-200 ease-in-out hover:-translate-y-[2px] hover:border-[#3390FF] hover:bg-[#3390FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3390FF]";

export function Button({ href, className = "", children, ...buttonProps }: ButtonProps) {
    const classes = `${baseStyles} ${className}`.trim();

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...buttonProps}>
            {children}
        </button>
    );
}

