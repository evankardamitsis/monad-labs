import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Legal | Monad Labs",
    description: "Terms & Conditions and Privacy Policy for Monad Labs.",
};

const updated = "October 15, 2026";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="space-y-2">
            <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
            <p className="leading-7 text-mist">{children}</p>
        </div>
    );
}

export default function Legal() {
    return (
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 md:py-28">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">
                <span className="text-cyan">[legal]</span> Last updated {updated}
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Legal</h1>
            <nav className="mt-6 flex gap-6 font-mono text-xs uppercase tracking-[0.16em]">
                <a href="#terms" className="text-cyan hover:underline">Terms &amp; Conditions</a>
                <a href="#privacy" className="text-cyan hover:underline">Privacy Policy</a>
            </nav>

            <section id="terms" className="mt-16 space-y-8 border-t border-line pt-12">
                <h2 className="font-display text-3xl font-semibold">Terms &amp; Conditions</h2>
                <p className="leading-7 text-mist">
                    These Terms &amp; Conditions govern your use of the website, products, services and content provided
                    by Monad Labs. By accessing or using them, you agree to these terms in full. If you do not agree,
                    please stop using them.
                </p>
                <Block title="Use of services">
                    Monad Labs designs and develops web and mobile applications and operates its own digital products.
                    You agree to use our websites and products only for lawful purposes and not to interfere with or
                    compromise their integrity.
                </Block>
                <Block title="Intellectual property">
                    All assets, including product concepts, visuals, text and trademarks, are owned by Monad Labs unless
                    otherwise stated. Reproduction or redistribution requires explicit permission. Ownership of work
                    delivered to clients is defined in the individual project agreement.
                </Block>
                <Block title="Disclaimer">
                    Our websites and products are provided “as is” without warranties of any kind, whether express or
                    implied, including accuracy, reliability or fitness for a particular purpose.
                </Block>
                <Block title="Contact">
                    For questions about these terms, contact us at{" "}
                    <a href="mailto:hello@monadlabs.gr" className="text-cyan hover:underline">hello@monadlabs.gr</a>.
                </Block>
            </section>

            <section id="privacy" className="mt-16 space-y-8 border-t border-line pt-12">
                <h2 className="font-display text-3xl font-semibold">Privacy Policy</h2>
                <p className="leading-7 text-mist">
                    This Privacy Policy explains how Monad Labs collects, uses and safeguards information when you
                    interact with our websites, products and services.
                </p>
                <Block title="Information we collect">
                    We may collect basic usage analytics, device information and anything you choose to send us, such as
                    project enquiries or feedback. We use it to understand how our products perform and to improve them.
                </Block>
                <Block title="How we use information">
                    Collected data informs design decisions, operations and replies to your enquiries. We do not sell
                    personal information. Partners we work with must uphold comparable privacy standards.
                </Block>
                <Block title="Cookies & analytics">
                    Our sites may use cookies or analytics tools to measure engagement. You can manage cookies in your
                    browser settings; disabling them may affect some functionality.
                </Block>
                <Block title="Contact">
                    For privacy enquiries, reach us at{" "}
                    <a href="mailto:hello@monadlabs.gr" className="text-cyan hover:underline">hello@monadlabs.gr</a>.
                </Block>
            </section>
        </div>
    );
}
