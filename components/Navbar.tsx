"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
    { href: "/#services", label: "Services" },
    { href: "/#products", label: "Products" },
    { href: "/#process", label: "Process" },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const close = () => setIsMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-line/70 bg-void/80 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
                <Link href="/" className="relative block h-9 w-40 shrink-0" aria-label="Monad Labs home" onClick={close}>
                    <Image src="/monad-logo-white.svg" alt="Monad Labs" fill priority sizes="160px" className="object-contain object-left" />
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-mono text-xs uppercase tracking-[0.16em] text-mist transition-colors hover:text-cyan"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/#contact"
                        className="rounded-full bg-volt px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-white transition-colors hover:bg-volt-hi"
                    >
                        Contact
                    </Link>
                </div>

                <button
                    type="button"
                    aria-label="Toggle navigation"
                    aria-expanded={isMenuOpen}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-cyan md:hidden"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    <span className="relative flex h-3 w-4 flex-col justify-between">
                        <span className={`block h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${isMenuOpen ? "translate-y-[5px] rotate-45" : ""}`} />
                        <span className={`block h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${isMenuOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
                    </span>
                </button>
            </nav>

            {isMenuOpen && (
                <div className="border-t border-line px-5 pb-6 sm:px-8 md:hidden">
                    <div className="flex flex-col pt-2">
                        {[...links, { href: "/#contact", label: "Contact" }].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={close}
                                className="flex items-center justify-between border-b border-line py-4 font-mono text-sm uppercase tracking-[0.16em] text-ink"
                            >
                                {link.label}
                                <span className="text-cyan">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
