import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-[#1E1E1E] bg-[#0A0A0A]">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-[0.62rem] uppercase tracking-[0.32em] text-[#6F6F6F] md:flex-row md:items-center md:justify-between md:px-12">
                <div className="flex items-center justify-center gap-2 md:justify-start">
                    © Monad Labs — Where ideas take shape.
                    <span className="text-[#007AFF] pulse-dot">●</span>
                </div>
                <div className="flex items-center justify-center gap-6">
                    <Link href="/terms" className="transition-colors duration-200 ease-in-out hover:text-[#F5F5F5]">
                        Terms & Conditions
                    </Link>
                    <Link href="/privacy" className="transition-colors duration-200 ease-in-out hover:text-[#F5F5F5]">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}

