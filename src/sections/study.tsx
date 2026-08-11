// Study.tsx
import { motion } from "framer-motion";
import { inView, useMaskLine, useSpringReveal, useStagger } from "../lib/motion";

const educationHistory = [
    {
        period: "2024 — Sekarang",
        institution: "SMK Negeri 10 Jakarta",
        degree: "Rekayasa Perangkat Lunak (RPL)",
    },
    {
        period: "2021 — 2024",
        institution: "MTs Negeri 14 Jakarta",
        degree: "Sekolah Menengah Pertama",
    },
    {
        period: "2015 — 2021",
        institution: "MI Al-Manar",
        degree: "Sekolah Dasar",
    },
];

function Study() {
    const reveal = useSpringReveal({ distance: 16, blur: 0, delay: 0.08 });
    const maskLine = useMaskLine(0);
    const itemMotion = useSpringReveal({ distance: 16, blur: 0 });
    const stagger = useStagger(0.1);

    return (
        <section id="study" className="bg-brand-accent py-24 px-6 sm:px-8 md:px-16">
            <div className="max-w-7xl mx-auto">
                <motion.p
                    className="text-xs font-extrabold uppercase tracking-widest text-brand-primary mb-4"
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={inView}
                >
                    Riwayat Pendidikan
                </motion.p>
                <motion.h2
                    className="font-display text-brand-background text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-display tracking-display uppercase mb-16 max-w-3xl"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={inView}
                >
                    <span className="block overflow-hidden">
                        <motion.span className="block" variants={maskLine(0.14)}>
                            Perjalanan
                        </motion.span>
                    </span>
                    <span className="block overflow-hidden">
                        <motion.span className="block" variants={maskLine(0.2)}>
                            Belajar<span className="text-brand-primary">.</span>
                        </motion.span>
                    </span>
                </motion.h2>

                {/* Timeline vertikal */}
                <div className="relative pl-10 sm:pl-16">
                    <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-brand-primary/20" />

                    <motion.div
                        className="flex flex-col gap-12 sm:gap-16"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={inView}
                    >
                        {educationHistory.map((item, index) => (
                            <motion.div key={index} className="relative group" variants={itemMotion}>
                                {/* Dot penanda */}
                                <span className="absolute -left-10 sm:-left-16 top-1.5 w-4 h-4 rounded-full border-2 border-brand-primary bg-brand-accent group-hover:bg-brand-primary transition-colors" />

                                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-6">
                                    <div>
                                        <span className="text-xs font-extrabold uppercase tracking-widest text-brand-background/40">
                                            {item.period}
                                        </span>
                                        <h3 className="font-display text-brand-background text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-display tracking-display mt-2">
                                            {item.institution}
                                        </h3>
                                        <p className="text-sm font-extrabold uppercase tracking-wider text-brand-background/50 mt-2">
                                            {item.degree}
                                        </p>
                                    </div>

                                    <span className="font-display text-brand-primary/30 group-hover:text-brand-primary transition-colors text-6xl sm:text-7xl md:text-8xl font-bold leading-none shrink-0">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Study;
