// Skills.tsx
import { motion } from "framer-motion";
import { inView, useMaskLine, useSpringReveal, useStagger } from "../lib/motion";

const skillCategories = [
    { category: "Web Development", items: ["HTML", "CSS", "Javascript", "PHP"] },
    { category: "Design", items: ["Figma", "Canva", "Adobe Photoshop", "Adobe Illustrator"] },
    { category: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "DaisyUI"] },
    { category: "Backend", items: ["Supabase", "PostgreSQL"] },
    { category: "Tools", items: ["GitHub", "VS Code", "Vercel", "ADB"] },
];

function Skills() {
    const reveal = useSpringReveal({ distance: 16, blur: 0, delay: 0.08 });
    const revealBody = useSpringReveal({ distance: 16, blur: 0, delay: 0.3 });
    const maskLine = useMaskLine(0);
    const panel = useSpringReveal({ distance: 16, blur: 0, scale: 0.95 });
    const stagger = useStagger(0.08);
    const chip = useSpringReveal({ distance: 8, blur: 0 });
    const chipsStagger = useStagger(0.06);

    return (
        <section id="skills" className="bg-brand-background py-24 px-6 sm:px-8 md:px-16">
            <div className="max-w-7xl mx-auto">
                <motion.p
                    className="text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-4"
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={inView}
                >
                    Keahlian
                </motion.p>
                <motion.h2
                    className="font-display text-brand-text text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-display tracking-display uppercase mb-4 max-w-3xl"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={inView}
                >
                    <span className="block overflow-hidden">
                        <motion.span className="block" variants={maskLine(0.14)}>
                            Keahlian<span className="text-brand-accent"> Saya.</span>
                        </motion.span>
                    </span>
                </motion.h2>
                <motion.p
                    className="max-w-xl text-sm font-bold uppercase tracking-wide text-brand-text/50 mb-14"
                    variants={revealBody}
                    initial="hidden"
                    whileInView="visible"
                    viewport={inView}
                >
                    Fokus utama di mobile development, dengan pengalaman juga di web dan backend.
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={inView}
                >
                    {skillCategories.map((group, index) => (
                        <motion.div
                            key={group.category}
                            className="relative overflow-hidden rounded-brand-lg p-6 flex flex-col gap-6 border border-brand-accent/30 hover:border-brand-accent hover:bg-brand-accent/5 text-brand-text transition-colors lg:col-span-3"
                            variants={panel}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Angka besar dekoratif */}
                            <span className="font-display absolute -right-2 -top-6 text-[7rem] font-bold leading-none select-none pointer-events-none text-brand-accent/10">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className="relative flex items-center justify-between">
                                <h3 className="text-xl font-extrabold uppercase tracking-widest">
                                    {group.category}
                                </h3>
                            </div>

                            <motion.div
                                className="relative flex flex-wrap gap-2"
                                variants={chipsStagger}
                            >
                                {group.items.map((item) => (
                                    <motion.span
                                        key={item}
                                        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-extrabold rounded-brand-md cursor-default bg-brand-primary text-brand-text hover:bg-brand-accent hover:text-brand-primary transition-colors"
                                        variants={chip}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                                        {item}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;
