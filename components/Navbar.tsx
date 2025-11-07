"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
    { href: "#home", label: "Home" },
    { href: "#philosophy", label: "Philosophy" },
    { href: "#projects", label: "NetProphet" },
    { href: "#vision", label: "Vision" },
    { href: "#signals", label: "Signals" },
    { href: "#about", label: "About" },
];

export function Navbar() {
    const [activeHash, setActiveHash] = useState("#home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const updateHash = () => {
            if (typeof window === "undefined") return;
            const hash = window.location.hash || "#home";
            setActiveHash(hash);
            setIsMenuOpen(false);
        };

        updateHash();
        window.addEventListener("hashchange", updateHash);
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("hashchange", updateHash);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleToggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleNavClick = (href: string) => {
        setActiveHash(href);
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-[#1E1E1E] bg-[#0A0A0A]/85 backdrop-blur">
            <nav>
                <div className="flex w-full items-center justify-between px-6 py-5 md:px-12 lg:px-20 xl:px-28">
                    <Link href="#home" className="flex items-center gap-3">
                        <div className="relative h-10 w-48 md:h-12 md:w-60">
                            <Image src="/monad-logo-white.svg" alt="Monad Labs" fill priority sizes="128px" />
                        </div>
                    </Link>
                    <button
                        type="button"
                        aria-label="Toggle navigation"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1E1E1E] text-[#F5F5F5] transition-colors duration-200 ease-in-out hover:border-[#2A2A2A] md:hidden"
                        onClick={handleToggleMenu}
                    >
                        <span className="relative flex h-4 w-4 flex-col justify-between">
                            <span
                                className={`block h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                                    }`}
                            />
                            <span
                                className={`block h-[2px] w-full rounded-full bg-current transition-opacity duration-200 ${isMenuOpen ? "opacity-0" : "opacity-100"
                                    }`}
                            />
                            <span
                                className={`block h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                                    }`}
                            />
                        </span>
                    </button>
                    <div className="hidden items-center gap-6 text-[0.7rem] uppercase tracking-[0.32em] text-[#666] md:flex">
                        {links.map((link) => {
                            const isActive = activeHash === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`group relative pb-1 transition-colors duration-200 ease-in-out hover:text-[#F5F5F5] ${isActive ? "text-[#F5F5F5]" : ""
                                        }`}
                                    aria-current={isActive ? "page" : undefined}
                                    onClick={() => handleNavClick(link.href)}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute inset-x-0 -bottom-1 h-[2px] origin-center scale-x-0 rounded-full bg-[#007AFF] transition-transform duration-200 ease-out ${isActive ? "scale-x-100" : "group-hover:scale-x-100"
                                            }`}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="mt-2 flex w-full flex-col gap-2 px-6 pb-6 text-[0.75rem] uppercase tracking-[0.32em] text-[#CFCFCF] md:hidden">
                        <div className="rounded-2xl border border-[#1E1E1E] bg-[#111111]/95 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
                            <nav aria-label="Mobile">
                                <div className="flex flex-col gap-2">
                                    {links.map((link) => {
                                        const isActive = activeHash === link.href;
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={`flex items-center justify-between rounded-xl px-4 py-3 transition-colors duration-200 ease-in-out ${isActive ? "bg-[#1B1B1B] text-[#F5F5F5]" : "hover:bg-[#181818]"}`}
                                                aria-current={isActive ? "page" : undefined}
                                                onClick={() => handleNavClick(link.href)}
                                            >
                                                <span>{link.label}</span>
                                                <span className="h-[2px] w-6 rounded-full bg-[#007AFF]" aria-hidden />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </nav>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

