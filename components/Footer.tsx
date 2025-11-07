import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-[#1E1E1E] bg-[#0A0A0A]">
            <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-12 text-xs uppercase tracking-[0.28em] text-[#B5B5B5] md:flex-row md:items-center md:justify-between md:px-12">
                <div className="flex flex-col items-center gap-2 text-center md:flex-row md:items-center md:justify-start md:text-left">
                    <span>© Monad Labs — Where ideas take shape.</span>
                    <span className="text-[#007AFF] pulse-dot">●</span>
                </div>
                <div className="flex items-center justify-center gap-5 text-[0.75rem] tracking-[0.24em] text-[#D0D0D0]">
                    <Link href="/terms" className="rounded-xl px-3 py-1 transition-colors duration-200 ease-in-out hover:bg-[#161616] hover:text-[#F5F5F5]">
                        Terms & Conditions
                    </Link>
                    <Link href="/privacy" className="rounded-xl px-3 py-1 transition-colors duration-200 ease-in-out hover:bg-[#161616] hover:text-[#F5F5F5]">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}

