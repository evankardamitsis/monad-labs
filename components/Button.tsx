import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
    children: ReactNode;
    href?: string;
    className?: string;
    target?: string;
    rel?: string;
    variant?: "primary" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
    "group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.14em] transition-all duration-200 ease-out active:scale-[0.98]";

const variants = {
    primary: "bg-volt text-white shadow-[0_0_0_1px_rgb(97_137_255/0.6),0_10px_40px_-10px_rgb(53_99_255/0.8)] hover:bg-volt-hi",
    ghost: "border border-line text-ink hover:border-cyan hover:text-cyan",
};

export function Button({ href, className = "", children, target, rel, variant = "primary", ...buttonProps }: ButtonProps) {
    const classes = `${baseStyles} ${variants[variant]} ${className}`.trim();
    const content = (
        <>
            {children}
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                →
            </span>
        </>
    );

    if (href) {
        if (/^(https?:|mailto:)/.test(href)) {
            const safeRel = rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);
            return (
                <a href={href} className={classes} target={target} rel={safeRel}>
                    {content}
                </a>
            );
        }
        return (
            <Link href={href} className={classes}>
                {content}
            </Link>
        );
    }

    return (
        <button className={classes} {...buttonProps}>
            {content}
        </button>
    );
}
