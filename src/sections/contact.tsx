import { motion } from "framer-motion";
import { contactLinks } from "../data/contactdata";
import { inView, useFadeUp, useStagger } from "../lib/motion";

function Contact() {
    const reveal = useFadeUp({ distance: 24 });
    const itemMotion = useFadeUp({ distance: 20, duration: 0.4 });
    const stagger = useStagger(0.08);

    return (
        <section id="contact" className="bg-brand-background py-20 px-6 sm:px-8 md:px-16">
            <div className="max-w-7xl mx-auto">
                <motion.p
                    className="text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-4"
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={inView}
                >
                    Contact
                </motion.p>
                <motion.h2
                    className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-display tracking-display uppercase mb-12 max-w-4xl"
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={inView}
                >
                    Hubungi<br />Saya<span className="text-brand-accent">.</span>
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={inView}
                >
                    {contactLinks.map((item, index) => (
                        <motion.a
                            key={item.title}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-5 rounded-brand-lg p-6 border border-brand-accent/30 bg-brand-background hover:bg-brand-accent transition-colors"
                            variants={itemMotion}
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="w-10 h-10 flex items-center justify-center rounded-brand-md bg-brand-accent text-black group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors">
                                {item.icon}
                            </span>
                            <span className="flex-1 flex items-baseline justify-between gap-4">
                                <span className="font-display text-2xl font-bold uppercase tracking-display text-brand-text group-hover:text-brand-primary transition-colors">
                                    {item.title}
                                </span>
                                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-accent/70 group-hover:text-brand-primary/60 transition-colors">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </span>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;
