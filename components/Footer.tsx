import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 font-mono text-xs uppercase tracking-[0.14em] text-dim sm:px-8 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_8px_var(--color-lime)]" />
                    <span>© {new Date().getFullYear()} Monad Labs · Tech studio</span>
                </div>
                <div className="flex flex-wrap items-center gap-6">
                    <a href="mailto:hello@monadlabs.gr" className="transition-colors hover:text-cyan">
                        hello@monadlabs.gr
                    </a>
                    <Link href="/legal#terms" className="transition-colors hover:text-cyan">
                        Terms
                    </Link>
                    <Link href="/legal#privacy" className="transition-colors hover:text-cyan">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    );
}
