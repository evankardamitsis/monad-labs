"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
    { href: "#home", label: "Home" },
    { href: "#philosophy", label: "Philosophy" },
    { href: "#projects", label: "NetProphet" },
    { href: "#vision", label: "Vision" },
    { href: "#about", label: "About" },
];

export function Navbar() {
    const [activeHash, setActiveHash] = useState("#home");

    useEffect(() => {
        const updateHash = () => {
            if (typeof window === "undefined") return;
            const hash = window.location.hash || "#home";
            setActiveHash(hash);
        };

        updateHash();
        window.addEventListener("hashchange", updateHash);
        return () => {
            window.removeEventListener("hashchange", updateHash);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-[#1E1E1E] bg-[#0A0A0A]/85 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
                <Link href="#home" className="flex items-center gap-3">
                    <div className="relative h-6 w-28 md:h-8 md:w-32">
                        <Image src="/monad-logo.svg" alt="Monad Labs" fill priority sizes="128px" />
                    </div>
                </Link>
                <div className="flex items-center gap-6 text-[0.7rem] uppercase tracking-[0.32em] text-[#666]">
                    {links.map((link) => {
                        const isActive = activeHash === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`group relative pb-1 transition-colors duration-200 ease-in-out hover:text-[#F5F5F5] ${isActive ? "text-[#F5F5F5]" : ""
                                    }`}
                                aria-current={isActive ? "page" : undefined}
                                onClick={() => setActiveHash(link.href)}
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
            </nav>
        </header>
    );
}

