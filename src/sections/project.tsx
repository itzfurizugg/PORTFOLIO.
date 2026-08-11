import { motion } from "framer-motion";
import Card from "../component/card";
import { projects } from "../data/project";
import { useMaskLine, useSpringReveal } from "../lib/motion";

function ProjectList() {
    const reveal = useSpringReveal({ distance: 16, blur: 6, delay: 0.08 });
    const maskLine = useMaskLine();

    return (
        <section id="project" className="bg-brand-background py-6 sm:py-18 px-5 sm:px-8 md:px-16">
            <div className="max-w-7xl mx-auto">
                <motion.p
                    className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-4"
                    variants={reveal}
                    initial="hidden"
                    animate="visible"
                >
                    Project
                </motion.p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-display tracking-display uppercase mb-8">
                    <span className="flex flex-wrap overflow-hidden">
                        <motion.span className="block" variants={maskLine(0.14)} initial="hidden" animate="visible">
                            Proyek
                        </motion.span>
                        <span className="inline-block w-3 sm:w-4" />
                        <motion.span className="block" variants={maskLine(0.2)} initial="hidden" animate="visible">
                            Saya<span className="text-brand-accent">.</span>
                        </motion.span>
                    </span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                    {projects.map((project) => (
                        <Card key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectList;
