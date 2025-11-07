type CardProps = {
    title: string;
    description: string;
};

export function Card({ title, description }: CardProps) {
    return (
        <article className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[#1E1E1E] bg-[#121212] p-8 transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-[#007AFF]">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden>
                <div className="absolute inset-0 bg-linear-to-br from-[#007AFF]/10 via-transparent to-[#B6A3FF]/5" />
            </div>
            <h3 className="text-lg font-semibold tracking-[0.18em] text-[#F5F5F5]">{title}</h3>
            <p className="text-sm leading-relaxed text-[#A9A9A9]">{description}</p>
            <span className="mt-auto text-[0.65rem] uppercase tracking-[0.32em] text-[#5A5A5A] transition-colors duration-200 group-hover:text-[#B6A3FF]">
                Discover
            </span>
        </article>
    );
}

