// Hero.tsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useMaskLine, useSpringReveal } from "../lib/motion";

const TITLE_LINES = [
    { text: "Terus", accent: false },
    { text: "Berkembang.", accent: true },
    { text: "Mencoba Hal", accent: false },
    { text: "Baru.", accent: true },
];

const lineDelay = (index: number) => 0.08 + index * 0.06;

function Hero() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const titleLine = useMaskLine();
    const desc = useSpringReveal({ distance: 16, blur: 6, delay: 0.4 });
    const cta = useSpringReveal({ distance: 16, blur: 6, delay: 0.52, scale: 0.95 });

    return (
        <section id="hero" className="relative bg-brand-background h-screen overflow-hidden">

            {/* Frame corner ticks — dekorasi 4 sudut layar */}
            <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-brand-accent/40" />
            <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-brand-accent/40" />
            <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-brand-accent/40" />
            <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-brand-accent/40" />

            {/* Title dominan di tengah layar, naik ke bagian atas-tengah */}
            <div className="h-full flex items-start justify-center px-6 pt-[22vh]">
                <h1 className="font-display text-[clamp(2.75rem,10vw,110px)] font-bold leading-display tracking-display uppercase text-center">
                    {TITLE_LINES.map((line, i) => (
                        <span key={line.text} className="block overflow-hidden">
                            <motion.span
                                className={line.accent ? "block text-brand-accent" : "block"}
                                variants={titleLine(lineDelay(i))}
                                initial="hidden"
                                animate="visible"
                            >
                                {line.text}
                            </motion.span>
                        </span>
                    ))}
                </h1>
            </div>

            {/* Deskripsi + CTA: kolom horizontal di bawah, center */}
            <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 w-full px-6 flex flex-col items-center gap-6">
                <motion.p
                    className="max-w-md text-center text-sm sm:text-base font-extrabold uppercase tracking-wide text-brand-text/70"
                    variants={desc}
                    initial="hidden"
                    animate="visible"
                >
                    Saya siswa SMK Rekayasa Perangkat Lunak yang punya minat besar
                    di dunia pengembangan web dan aplikasi.
                </motion.p>

                <motion.div variants={cta} initial="hidden" animate="visible">
                    <motion.a
                        className="inline-flex items-center gap-3 bg-brand-accent text-brand-primary font-extrabold uppercase tracking-wider px-6 py-4 sm:px-8 rounded-brand-lg hover:bg-brand-text transition-colors"
                        href="/about"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="hidden sm:inline">Lihat lebih lanjut.</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>

        </section>
    );
}

export default Hero;