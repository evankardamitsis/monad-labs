'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../components/Button";

const heroDetails = [
  { label: "Focus", value: "Sports Prediction Games" },
  { label: "Mode", value: "Research + Design" },
  { label: "Current", value: "NetProphet" },
];

const netProphetHighlights = [
  {
    title: "Sports Prediction",
    description:
      "Launching with amateur tennis, NetProphet turns reading the game into a disciplined forecasting ritual shared across clubs and leagues.",
  },
  {
    title: "Expansion in Progress",
    description:
      "An evolving operating layer for new sports—fusing data, intuition, and community inside a measured ecosystem.",
  },
];

const signals = [
  {
    title: "Signal_01",
    copy: "Research sprints surface behavioral patterns before they become products.",
  },
  {
    title: "Signal_02",
    copy: "Interface motion acts as narrative—micro shifts that communicate structure and intent.",
  },
  {
    title: "Signal_03",
    copy: "Instrumentation frameworks launch with every release, learning alongside users.",
  },
];

const valuePillars = [
  {
    title: "Clarity",
    description: "We distill complex systems until they become legible and actionable.",
  },
  {
    title: "Simplicity",
    description: "Surfaces breathe—space, silence, and deliberate rhythm guide the experience.",
  },
  {
    title: "Purpose",
    description: "Everything we ship carries a measurable why and a defined outcome.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <motion.div
      className="mx-auto flex max-w-6xl flex-col gap-32 py-24"
      initial="hidden"
      animate="visible"
    >
      <motion.section
        id="home"
        className="relative grid gap-12 scroll-mt-32 border-b border-[#1E1E1E] pb-16 lg:grid-cols-[1.05fr_0.95fr]"
        variants={fadeIn}
      >
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.45em] text-[#6F6F6F]">
              <span className="h-2 w-2 rounded-full bg-white" />
              Tech and Design Studio
            </div>
            <div className="space-y-4">
              <div className="w-48 sm:w-56 md:w-64">
                <Image
                  src="/monad-logo-white.svg"
                  alt="Monad Labs logo"
                  width={295}
                  height={186}
                  priority
                />
              </div>
              <h1 className="sr-only">Monad Labs</h1>
              <p className="text-xl text-[#D6D6D6]">Where ideas take shape.</p>
            </div>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#A9A9A9]">
            We are a research and design studio crafting digital products from first principles. Intentional systems,
            minimal surfaces, and measured motion guide every build that leaves the studio.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-[0.68rem] uppercase tracking-[0.32em] text-[#5A5A5A]">
            <span className="flex items-center gap-2">
              <span className="h-px w-8 bg-[#1E1E1E]" /> Minimal
            </span>
            <span className="flex items-center gap-2">
              <span className="h-px w-8 bg-[#1E1E1E]" /> Measured
            </span>
            <span className="flex items-center gap-2">
              <span className="h-px w-8 bg-[#1E1E1E]" /> Meaningful
            </span>
          </div>
          <Button href="#projects">Explore our work</Button>
        </div>
        <div className="gradient-panel overflow-hidden p-8">
          <div className="flex items-center justify-between text-[0.72rem] uppercase tracking-[0.38em] text-[#5A5A5A]">
            <span>Signal Deck</span>
            <span>Rev 03</span>
          </div>
          <div className="mt-8 space-y-6">
            {heroDetails.map((detail) => (
              <div key={detail.label} className="flex items-center justify-between border-b border-[#1E1E1E] pb-4">
                <span className="text-xs uppercase tracking-[0.3em] text-[#636363]">{detail.label}</span>
                <span className="text-sm font-medium tracking-[0.16em] text-[#F5F5F5]">{detail.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-[#1E1E1E] bg-[#0F0F0F] p-6">
            <p className="text-sm leading-6 text-[#A9A9A9]">
              Every project begins with a research sprint, distilling the core mechanics before design language is set.
              Geometry meets silence to produce interfaces that breathe.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="philosophy"
        className="scroll-mt-32 border-b border-[#1E1E1E] pb-16"
        variants={fadeIn}
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <span className="text-[0.68rem] uppercase tracking-[0.4em] text-[#6F6F6F]">Philosophy</span>
            <h2 className="text-3xl font-semibold text-[#F5F5F5]">Minimal. Measured. Meaningful.</h2>
          </div>
          <div className="space-y-6 text-base leading-7 text-[#B5B5B5]">
            <p>
              Monad Labs is a research and design studio dedicated to building precise digital products. Ideas begin as
              theoretical monads—single units of possibility—then move through clarity, simplicity, and purpose until they
              take form.
            </p>
            <p>
              We work deliberately: prototypes, interrogation, refinement. Each interface rewards attention with coherence,
              not noise.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="scroll-mt-32 border-b border-[#1E1E1E] pb-16"
        variants={fadeIn}
      >
        <div className="space-y-10">
          <div className="space-y-3">
            <span className="text-[0.68rem] uppercase tracking-[0.4em] text-[#6F6F6F]">Flagship</span>
            <h2 className="text-3xl font-semibold text-[#F5F5F5]">NetProphet</h2>
            <p className="max-w-3xl text-base leading-7 text-[#A9A9A9]">
              NetProphet reimagines sports prediction as a measured, skill-based game. It merges data, community, and
              intuition—starting with tennis, expanding across a broader field of competition intelligence.
            </p>
            <div className="pt-2">
              <Button href="https://netprophet.gr/" target="_blank">
                Visit NetProphet
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {netProphetHighlights.map((item) => (
              <div key={item.title} className="gradient-panel overflow-hidden p-8 transition-transform duration-200 ease-out hover:-translate-y-1">
                <span className="text-xs uppercase tracking-[0.3em] text-[#4C84FF]">{item.title}</span>
                <p className="mt-4 text-sm leading-6 text-[#C3C3C3]">{item.description}</p>
                <div className="mt-6 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.28em] text-[#6F6F6F]">
                  Active Development
                  <span className="h-px w-6 bg-[#2A2A2A]" /> Release Loop 04
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="vision"
        className="scroll-mt-32 border-b border-[#1E1E1E] pb-16"
        variants={fadeIn}
      >
        <div className="relative overflow-hidden rounded-[1.6rem] border border-[#1E1E1E] bg-[#0F0F0F]/80 p-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,122,255,0.22),transparent_55%)]" aria-hidden />
          <p className="text-2xl leading-snug text-[#E1E1E1]">
            Monad Labs exists to <span className="text-[#007AFF]">explore</span> the distance between thought and form. We transform
            abstract principles into tangible systems, balancing logic with intuition until an idea resolves into something
            people can hold, test, and trust.
          </p>
        </div>
      </motion.section>

      <motion.section
        id="signals"
        className="scroll-mt-32 border-b border-[#1E1E1E] pb-16"
        variants={fadeIn}
      >
        <div className="space-y-8">
          <div className="flex items-center justify-between gap-6">
            <div>
              <span className="text-[0.68rem] uppercase tracking-[0.4em] text-[#6F6F6F]">Signals</span>
              <h2 className="mt-2 text-3xl font-semibold text-[#F5F5F5]">How we operate</h2>
            </div>
            <span className="hidden text-[0.62rem] uppercase tracking-[0.3em] text-[#5A5A5A] md:inline-flex">
              Continuous research feed
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {signals.map((signal) => (
              <div key={signal.title} className="rounded-2xl border border-[#1E1E1E] bg-[#121212] p-7">
                <span className="text-xs uppercase tracking-[0.32em] text-[#4C84FF]">{signal.title}</span>
                <p className="mt-4 text-sm leading-6 text-[#C5C5C5]">{signal.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="scroll-mt-32 border-b border-[#1E1E1E] pb-16"
        variants={fadeIn}
      >
        <div className="space-y-10">
          <div className="space-y-3">
            <span className="text-[0.68rem] uppercase tracking-[0.4em] text-[#6F6F6F]">About</span>
            <h2 className="text-3xl font-semibold text-[#F5F5F5]">Monad Labs</h2>
            <p className="max-w-3xl text-base leading-7 text-[#A9A9A9]">
              Monad Labs is an independent studio for experimentation, research, and product creation. We unite design,
              technology, and philosophy to incubate ventures with uncommon clarity and intent.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {valuePillars.map((pillar) => (
              <div key={pillar.title} className="gradient-panel overflow-hidden p-7 transition-transform duration-200 ease-out hover:-translate-y-1">
                <h3 className="text-lg font-semibold uppercase tracking-[0.4em] text-[#F5F5F5]">
                  {pillar.title}
                </h3>
                <span className="mt-4 block h-[2px] w-16 bg-[#1E1E1E]" />
                <p className="mt-4 text-sm leading-6 text-[#B8B8B8]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="scroll-mt-32 text-center text-xs uppercase tracking-[0.32em] text-[#6F6F6F]"
        variants={fadeIn}
      >
        Ideas begin as points. We give them form.
      </motion.section>
    </motion.div>
  );
}
