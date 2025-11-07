'use client';

import { motion } from "framer-motion";
import { Button } from "../components/Button";

const netProphetHighlights = [
  {
    title: "Sports Prediction",
    description:
      "Starting with amateur tennis, NetProphet turns rallies, form, and intuition into a measured prediction practice shared across community leagues.",
  },
  {
    title: "Expansion in Progress",
    description:
      "A growing ecosystem for new sports and formats — building a unified layer where data, play, and insight move together across disciplines.",
  },
];

const valuePillars = [
  {
    title: "Clarity",
    description: "We reduce complexity until the essential structure comes into view.",
  },
  {
    title: "Simplicity",
    description: "Every interaction is distilled to its most articulate state.",
  },
  {
    title: "Purpose",
    description: "Products exist to serve an idea — nothing more, nothing less.",
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
        className="relative flex min-h-[80vh] flex-col justify-center gap-12 scroll-mt-32"
        variants={fadeIn}
      >
        <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />
        <motion.span
          className="h-4 w-4 rounded-full bg-[#007AFF]"
          aria-hidden
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1, 0.9] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        />
        <div className="space-y-6">
          <p className="text-[0.7rem] uppercase tracking-[0.4em] text-[#6F6F6F]">Monad Labs</p>
          <div>
            <h1 className="text-5xl font-semibold uppercase tracking-[0.5em] text-[#F5F5F5] md:text-6xl">
              MONAD LABS
            </h1>
            <span className="mt-4 inline-block text-lg font-light text-[#D0D0D0]">
              Where ideas take shape.
              <span className="mt-2 block h-[2px] w-28 origin-left scale-x-0 bg-[#007AFF] [animation:grow_0.9s_ease-out_forwards]" />
            </span>
          </div>
        </div>
        <p className="max-w-2xl text-base leading-7 text-[#A9A9A9]">
          We build from first principles — crafting digital products that matter. Every product is
          considered, intentional, and rooted in meaningful outcomes.
        </p>
        <Button href="#projects">Explore our work</Button>
      </motion.section>

      <motion.section
        id="philosophy"
        className="scroll-mt-32 border-t border-[#1E1E1E] pt-16"
        variants={fadeIn}
      >
        <div className="grid gap-10 md:grid-cols-[0.6fr_1.2fr] md:items-start">
          <h2 className="text-xl uppercase tracking-[0.35em] text-[#B6A3FF]">Philosophy</h2>
          <div className="space-y-6">
            <p className="max-w-xl text-lg leading-8 text-[#D0D0D0]">
              Monad Labs is a research and design company focused on building meaningful digital
              products. Every idea starts as a unit — a Monad — and evolves into form through clarity,
              simplicity, and purpose.
            </p>
            <p className="text-xs uppercase tracking-[0.4em] text-[#5A5A5A]">
              Minimal. Measured. Meaningful.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="scroll-mt-32 border-t border-[#1E1E1E] pt-16"
        variants={fadeIn}
      >
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl uppercase tracking-[0.35em] text-[#B6A3FF]">
              Our Work — NetProphet
            </h2>
            <p className="max-w-3xl text-base leading-7 text-[#A9A9A9]">
              NetProphet is the flagship project born inside Monad Labs — an exploration of how
              prediction can feel precise, expressive, and communal. Beginning with amateur tennis, it
              studies rallies, momentum, and the instincts of players and fans alike. The platform merges
              data, intuition, and community to transform prediction into a skill-based exchange where
              understanding replaces chance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {netProphetHighlights.map((item) => (
              <motion.div
                key={item.title}
                className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-[#1E1E1E] bg-[#121212]/90 p-8 transition-transform duration-200 ease-out"
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/12 via-transparent to-[#B6A3FF]/8" />
                </div>
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.32em] text-[#4C84FF]">{item.title}</span>
                  <p className="text-sm leading-relaxed text-[#C3C3C3]">{item.description}</p>
                </div>
                <span className="text-[0.6rem] uppercase tracking-[0.32em] text-[#5A5A5A]">
                  Active Development
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="vision"
        className="scroll-mt-32 border-t border-[#1E1E1E] pt-16"
        variants={fadeIn}
      >
        <div className="relative mx-auto max-w-3xl">
          <span className="absolute -left-8 top-0 hidden h-full w-px bg-[#1E1E1E] md:block" aria-hidden />
          <p className="text-lg leading-8 text-[#D0D0D0]">
            Monad Labs exists to <span className="text-[#007AFF]">explore</span> the distance between concept and
            craft. We translate abstract principles into systems people can interrogate, balancing logic
            with intuition until every idea resolves into deliberate <span className="text-[#007AFF]">form</span>.
          </p>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="scroll-mt-32 border-t border-[#1E1E1E] pt-16"
        variants={fadeIn}
      >
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-xl uppercase tracking-[0.35em] text-[#B6A3FF]">About Monad Labs</h2>
            <p className="max-w-3xl text-base leading-7 text-[#A9A9A9]">
              Monad Labs operates as an independent space for experimentation, research, and product
              creation. Part studio and part lab, we incubate digital ventures with clarity and intention at
              the intersection of design, technology, and philosophy.
            </p>
            <p className="max-w-3xl text-base leading-7 text-[#A9A9A9]">
              Each build is a disciplined study in making complexity feel effortless — a chance to learn,
              refine, and evolve the tools that shape modern experience.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {valuePillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                className="group rounded-2xl border border-[#1E1E1E] bg-[#111111]/80 p-6 transition-all duration-200 ease-out"
                whileHover={{ y: -4 }}
              >
                <h3 className="text-lg font-semibold uppercase tracking-[0.4em] text-[#F5F5F5]">
                  {pillar.title}
                </h3>
                <span className="mt-3 block h-[2px] w-16 origin-left scale-x-0 bg-[#007AFF] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <p className="mt-4 text-sm leading-relaxed text-[#8F8F8F]">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="scroll-mt-32 border-t border-[#1E1E1E] pt-12 text-center text-xs uppercase tracking-[0.32em] text-[#5A5A5A]"
        variants={fadeIn}
      >
        Ideas begin as points. We give them form.
      </motion.section>
    </motion.div>
  );
}
