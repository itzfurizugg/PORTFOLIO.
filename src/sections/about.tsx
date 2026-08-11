// About.tsx
import { motion } from "framer-motion";
import secret from "../assets/secret.png";
import { useMaskLine, useSpringReveal, useStagger } from "../lib/motion";

const infoRows = [
    { label: "Domisili", value: "Jakarta, Indonesia" },
    { label: "Status", value: "Pelajar SMK" },
    { label: "Bahasa", value: "Indonesia, Inggris" },
];

const roles = ["Web Developer", "Graphic Designer", "IT Support"];

function About() {
    const reveal = useSpringReveal({ distance: 16, blur: 6, delay: 0.08 });
    const revealImg = useSpringReveal({ distance: 16, blur: 6, delay: 0.16 });
    const maskLine = useMaskLine();
    const revealBody = useSpringReveal({ distance: 16, blur: 6, delay: 0.32 });
    const roleItem = useSpringReveal({ distance: 16, blur: 6 });
    const rolesStagger = useStagger(0.08);
    const rowItem = useSpringReveal({ distance: 16, blur: 6 });
    const rowsStagger = useStagger(0.08);

    return (
        <section id="about" className="relative bg-brand-background py-14 sm:py-16 px-6 sm:px-8 md:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">

                <motion.p
                    className="text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-6"
                    variants={reveal}
                    initial="hidden"
                    animate="visible"
                >
                    About Me
                </motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 mb-8">
                    <motion.img
                        src={secret}
                        alt="Foto Profil"
                        className="w-full h-64 sm:h-72 lg:h-full aspect-[4/5] lg:aspect-auto object-cover rounded-none border-2"
                        variants={revealImg}
                        initial="hidden"
                        animate="visible"
                    />

                    <h1 className="font-display text-brand-text text-5xl sm:text-6xl md:text-7xl xl:text-[6rem] font-bold leading-[1.1] tracking-normal uppercase self-center">
                        <span className="block overflow-hidden">
                            <motion.span className="block" variants={maskLine(0.08)} initial="hidden" animate="visible">
                                Muhammad Dzaki
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden">
                            <motion.span className="block text-brand-accent" variants={maskLine(0.14)} initial="hidden" animate="visible">
                                Rafif Helmiansyah
                            </motion.span>
                        </span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
                    <motion.p
                        className="text-sm font-bold leading-relaxed text-brand-text/80 order-2 lg:order-1"
                        variants={revealBody}
                        initial="hidden"
                        animate="visible"
                    >
                        Saya siswa SMK Negeri 10 Jakarta jurusan Rekayasa Perangkat Lunak (RPL) yang saat ini sedang bersiap menghadapi Praktik Kerja Lapangan (PKL). Saya memiliki ketertarikan besar di bidang pengembangan perangkat lunak, khususnya frontend development, dan terus berusaha mengasah kemampuan dalam membangun antarmuka aplikasi, memahami logika pemrograman, serta mengelola database dengan baik. Saya terbiasa mempelajari teknologi baru secara mandiri melalui proyek-proyek yang saya kerjakan sendiri, karena bagi saya belajar langsung lewat praktik jauh lebih efektif dibanding sekadar teori. Dengan dasar pemahaman matematika yang cukup kuat, saya mampu berpikir logis dalam menganalisis masalah dan menyusun solusi secara terstruktur.
                    </motion.p>

                    <motion.div
                        className="flex flex-col gap-3 order-1 lg:order-2"
                        variants={rolesStagger}
                        initial="hidden"
                        animate="visible"
                    >
                        {roles.map((role, i) => (
                            <motion.div
                                key={role}
                                className="flex items-center justify-between gap-4 border border-brand-accent/40 rounded-brand-md px-4 py-3 hover:bg-brand-accent hover:text-brand-primary transition-colors group"
                                variants={roleItem}
                                whileHover={{ scale: 1.02 }}
                            >
                                <span className="text-sm font-extrabold uppercase tracking-wider">{role}</span>
                                <span className="text-xs font-extrabold text-brand-accent group-hover:text-brand-primary">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    className="mt-16 pt-6 pb-20 border-t border-brand-accent/20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0"
                    variants={rowsStagger}
                    initial="hidden"
                    animate="visible"
                >
                    {infoRows.map((row, i) => (
                        <motion.div
                            key={row.label}
                            className={`px-0 sm:px-6 ${i > 0 ? "sm:border-l sm:border-brand-accent/20" : ""}`}
                            variants={rowItem}
                        >
                            <p className="text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-1">
                                {row.label}
                            </p>
                            <p className="text-base font-extrabold uppercase leading-none text-brand-text">
                                {row.value}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default About;
