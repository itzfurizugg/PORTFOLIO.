import { motion } from "framer-motion";
import Card from "../component/card";
import { projects } from "../data/project";
import { inView, useFadeUp } from "../lib/motion";

function ProjectList() {
    const reveal = useFadeUp({ distance: 24 });

    return (
        <section id="project" className="bg-brand-background py-20 px-6 sm:px-8 md:px-16">
            <div className="max-w-7xl mx-auto">
                <motion.p
                    className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-2"
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={inView}
                >
                    Project
                </motion.p>
                <motion.h2
                    className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-display tracking-display uppercase mb-10"
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={inView}
                >
                    Proyek Saya.
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <Card key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectList;
