'use client';

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Button } from "../components/Button";

const CONTACT_EMAIL = "hello@monadlabs.gr";

const stack = [
    "Next.js",
    "React",
    "React Native",
    "Expo",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Edge Functions",
    "Stripe",
    "WhatsApp Cloud API",
    "Tailwind CSS",
    "Figma",
    "Vercel",
    "EAS Build",
];

const services = [
    {
        code: "01",
        title: "Product design",
        copy: "Flows, interfaces and design systems shaped around one clear job per screen. We prototype early and test before we build.",
        tags: ["UX", "UI", "Design systems"],
    },
    {
        code: "02",
        title: "Web apps",
        copy: "Fast, accessible web products and marketing sites on Next.js, from dashboards and admin tools to customer-facing platforms.",
        tags: ["Next.js", "SaaS", "Admin"],
    },
    {
        code: "03",
        title: "Mobile apps",
        copy: "One codebase for iOS, Android and web with Expo and React Native. Native feel, store-ready builds, push and offline support.",
        tags: ["iOS", "Android", "Expo"],
    },
    {
        code: "04",
        title: "Backend & integrations",
        copy: "Auth, databases, payments and messaging wired in properly. Server-side logic you can trust, with tests on the parts that matter.",
        tags: ["Supabase", "Stripe", "APIs"],
    },
];

const process = [
    { step: "Discover", copy: "We pin down the problem, the users and the one thing v1 has to do well." },
    { step: "Design", copy: "Clickable prototypes and a design system before a line of production code." },
    { step: "Build", copy: "Short cycles, weekly demos, real builds on your phone from week one." },
    { step: "Launch", copy: "Store releases, analytics and a plan for what ships next." },
];

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

function SectionLabel({ index, children }: { index: string; children: string }) {
    return (
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-dim">
            <span className="text-cyan">[{index}]</span>
            {children}
            <span className="h-px w-12 bg-line" />
        </div>
    );
}

function Terminal() {
    const lines = [
        { prompt: true, text: "monad new --web --ios --android" },
        { ok: true, text: "discovery     scope locked" },
        { ok: true, text: "design        prototype approved" },
        { ok: true, text: "build         web · ios · android" },
        { ok: true, text: "backend       auth · db · payments" },
        { ok: true, text: "release       live in stores" },
    ];

    return (
        <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-spectrum opacity-25 blur-3xl" aria-hidden />
            <div className="overflow-hidden rounded-2xl border border-line bg-carbon/90 shadow-2xl backdrop-blur">
                <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-pink" />
                    <span className="h-2.5 w-2.5 rounded-full bg-lime" />
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
                    <span className="ml-3 font-mono text-[0.7rem] text-dim">~/monad-labs</span>
                </div>
                <motion.ul
                    className="space-y-2.5 p-5 font-mono text-[0.8rem] leading-relaxed sm:p-6 sm:text-sm"
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                >
                    {lines.map((line) => (
                        <motion.li
                            key={line.text}
                            variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
                            className="whitespace-pre"
                        >
                            {line.prompt ? (
                                <span>
                                    <span className="text-cyan">$</span> <span className="text-ink">{line.text}</span>
                                </span>
                            ) : (
                                <span className="text-mist">
                                    <span className="text-lime">✓</span> {line.text}
                                </span>
                            )}
                        </motion.li>
                    ))}
                    <li>
                        <span className="text-cyan">$</span> <span className="blink inline-block h-4 w-2 translate-y-0.5 bg-ink" />
                    </li>
                </motion.ul>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section id="top" className="relative overflow-hidden">
                <div className="bg-blueprint absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden />
                <div className="absolute -top-40 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-volt/25 blur-[120px]" aria-hidden />
                <motion.div
                    className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-16 pb-20 sm:px-8 md:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28"
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="space-y-8">
                        <motion.div
                            variants={fadeIn}
                            className="inline-flex items-center gap-2 rounded-full border border-line bg-carbon/70 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mist"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_10px_var(--color-lime)]" />
                            Tech studio · Web + Mobile
                        </motion.div>
                        <motion.h1
                            variants={fadeIn}
                            className="font-display text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.03em] sm:text-6xl lg:text-7xl"
                        >
                            We design and build <span className="text-spectrum">web &amp; mobile apps.</span>
                        </motion.h1>
                        <motion.p variants={fadeIn} className="max-w-xl text-lg leading-relaxed text-mist">
                            Monad Labs is a tech studio. We take products from first sketch to the App Store,
                            for clients and for ourselves.
                        </motion.p>
                        <motion.div variants={fadeIn} className="flex flex-wrap gap-3">
                            <Button href={`mailto:${CONTACT_EMAIL}`}>Start a project</Button>
                            <Button href="#products" variant="ghost">
                                Our products
                            </Button>
                        </motion.div>
                    </div>
                    <motion.div variants={fadeIn}>
                        <Terminal />
                    </motion.div>
                </motion.div>
            </section>

            {/* Stack marquee */}
            <div className="overflow-hidden border-y border-line bg-carbon py-4" aria-label="Technologies we use">
                <div className="marquee flex w-max gap-10 font-mono text-sm uppercase tracking-[0.14em] text-dim">
                    {[...stack, ...stack].map((item, i) => (
                        <span key={i} className="flex items-center gap-10" aria-hidden={i >= stack.length}>
                            {item}
                            <span className="text-cyan">/</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Services */}
            <motion.section
                id="services"
                className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                <motion.div variants={fadeIn} className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
                    <div className="space-y-4">
                        <SectionLabel index="01">Services</SectionLabel>
                        <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">What we do</h2>
                    </div>
                    <p className="text-mist md:text-right">
                        Design and engineering under one roof, so nothing gets lost in the handoff.
                    </p>
                </motion.div>
                <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                    {services.map((service) => (
                        <motion.article
                            key={service.code}
                            variants={fadeIn}
                            className="group relative bg-carbon p-8 transition-colors duration-300 hover:bg-panel md:p-10"
                        >
                            <div className="flex items-start justify-between">
                                <span className="font-mono text-sm text-dim transition-colors group-hover:text-cyan">
                                    /{service.code}
                                </span>
                                <span className="h-2 w-2 rounded-full bg-line transition-colors group-hover:bg-lime" />
                            </div>
                            <h3 className="mt-10 font-display text-2xl font-semibold">{service.title}</h3>
                            <p className="mt-3 leading-relaxed text-mist">{service.copy}</p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-mist"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </motion.section>

            {/* Products */}
            <motion.section
                id="products"
                className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 md:pb-32"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                <motion.div variants={fadeIn} className="mb-12 space-y-4">
                    <SectionLabel index="02">Products</SectionLabel>
                    <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Built in-house</h2>
                    <p className="max-w-2xl text-mist">
                        We run our own products, so we know what it takes to ship, support and grow an app after launch.
                    </p>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-2">
                    <motion.article
                        variants={fadeIn}
                        className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0F2019] p-8 transition-transform duration-300 hover:-translate-y-1 md:p-10"
                    >
                        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#D9F03F]/15 blur-3xl" aria-hidden />
                        <div className="relative h-14 w-44">
                            <Image src="/products/netprophet.svg" alt="NetProphet" fill className="object-contain object-left" />
                        </div>
                        <p className="relative mt-8 font-display text-2xl leading-snug font-semibold text-[#F3F5EE]">
                            A social game for amateur sport.
                        </p>
                        <p className="relative mt-3 leading-relaxed text-[#F3F5EE]/70">
                            Players follow their local scene, vote on matches, keep a streak and climb the Ladder.
                            Starting with amateur tennis in Greece.
                        </p>
                        <div className="relative mt-6 flex flex-wrap gap-2 font-mono text-[0.7rem] uppercase tracking-[0.12em]">
                            {["iOS", "Android", "Web", "Expo", "Supabase"].map((t) => (
                                <span key={t} className="rounded-full bg-[#F3F5EE]/10 px-3 py-1 text-[#F3F5EE]/80">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <a
                            href="https://netprophet.gr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative mt-auto inline-flex items-center gap-2 pt-10 font-mono text-sm text-[#D9F03F] hover:underline"
                        >
                            netprophet.gr <span aria-hidden>↗</span>
                        </a>
                    </motion.article>

                    <motion.article
                        variants={fadeIn}
                        className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0e2a3b] p-8 transition-transform duration-300 hover:-translate-y-1 md:p-10"
                    >
                        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#f2c46d]/15 blur-3xl" aria-hidden />
                        <div className="relative flex h-14 items-center gap-3">
                            <Image src="/products/refill-mark.svg" alt="" width={44} height={44} className="rounded-xl ring-1 ring-white/20" />
                            <span className="font-display text-3xl font-bold tracking-tight text-white">Refill</span>
                        </div>
                        <p className="relative mt-8 font-display text-2xl leading-snug font-semibold text-white">
                            Your booking assistant on WhatsApp.
                        </p>
                        <p className="relative mt-3 leading-relaxed text-white/70">
                            Refill confirms appointments, sends reminders and fills cancelled slots from a waiting list, so
                            appointment-based businesses stop losing hours.
                        </p>
                        <div className="relative mt-6 flex flex-wrap gap-2 font-mono text-[0.7rem] uppercase tracking-[0.12em]">
                            {["iOS", "Android", "Web", "WhatsApp API", "Stripe"].map((t) => (
                                <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-white/80">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <a
                            href="https://getrefill.gr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative mt-auto inline-flex items-center gap-2 pt-10 font-mono text-sm text-[#f2c46d] hover:underline"
                        >
                            getrefill.gr <span aria-hidden>↗</span>
                        </a>
                    </motion.article>
                </div>
            </motion.section>

            {/* Process */}
            <motion.section
                id="process"
                className="border-y border-line bg-carbon"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
                    <motion.div variants={fadeIn} className="mb-14 space-y-4">
                        <SectionLabel index="03">Process</SectionLabel>
                        <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                            From idea to <span className="text-spectrum">shipped</span>
                        </h2>
                    </motion.div>
                    <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
                        {process.map((item, i) => (
                            <motion.li key={item.step} variants={fadeIn} className="relative">
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan/40 font-mono text-xs text-cyan">
                                        0{i + 1}
                                    </span>
                                    {i < process.length - 1 && (
                                        <span className="hidden h-px flex-1 bg-gradient-to-r from-cyan/40 to-transparent md:block" />
                                    )}
                                </div>
                                <h3 className="font-display text-xl font-semibold">{item.step}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-mist">{item.copy}</p>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </motion.section>

            {/* Contact */}
            <motion.section
                id="contact"
                className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                <div className="relative overflow-hidden rounded-3xl border border-line bg-panel p-8 sm:p-12 md:p-16">
                    <div className="bg-blueprint absolute inset-0 opacity-60 [mask-image:linear-gradient(to_left,black,transparent_70%)]" aria-hidden />
                    <div className="absolute -right-20 -bottom-32 h-80 w-80 rounded-full bg-cyan/20 blur-[100px]" aria-hidden />
                    <div className="relative max-w-2xl space-y-6">
                        <SectionLabel index="04">Contact</SectionLabel>
                        <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                            Have an app in mind?
                        </h2>
                        <p className="text-lg text-mist">
                            Tell us what you are building and where you are stuck. We will come back with next steps,
                            a realistic timeline and a rough budget.
                        </p>
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="inline-block font-display text-2xl font-semibold break-all text-cyan underline-offset-8 hover:underline sm:text-3xl"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </div>
                </div>
            </motion.section>
        </>
    );
}
