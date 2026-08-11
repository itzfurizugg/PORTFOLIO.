// ProjectDetail.tsx
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Globe } from "lucide-react";
import { projects } from "../data/project";
import { useSpringReveal, useStagger } from "../lib/motion";

function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.title === id);

    const reveal = useSpringReveal({ distance: 16, blur: 6, delay: 0.08 });
    const item = useSpringReveal({ distance: 16, blur: 6, scale: 0.95 });
    const stagger = useStagger(0.08);

    if (!project) {
        return (
            <section className="bg-brand-background py-6 sm:py-20 px-6 sm:px-8 md:px-16 min-h-screen flex items-center">
                <motion.div
                    className="max-w-7xl mx-auto text-center w-full"
                    variants={reveal}
                    initial="hidden"
                    animate="visible"
                >
                    <p className="text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-4">
                        404
                    </p>
                    <h2 className="font-display text-brand-text text-5xl sm:text-6xl font-bold uppercase mb-8">
                        Project Tidak Ditemukan
                    </h2>
                    <Link
                        to="/project"
                        className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-brand-accent hover:text-brand-text transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Kembali ke Project
                    </Link>
                </motion.div>
            </section>
        );
    }

    return (
        <section className="bg-brand-background py-1 sm:py-4 px-3 sm:px-8 md:px-16">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    variants={reveal}
                    initial="hidden"
                    animate="visible"
                >
                    <Link
                        to="/project"
                        className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-accent/30 hover:text-brand-accent transition-colors mb-6 sm:mb-8"
                    >
                        <ArrowLeft size={16} />
                        Kembali ke Project
                    </Link>
                </motion.div>

                {/* Foto — ukuran tidak diubah, judul overlay hanya di layar lebar */}
                <motion.div
                    className="relative rounded-brand-lg overflow-hidden border border-brand-accent/20 mb-6 sm:mb-8"
                    variants={reveal}
                    initial="hidden"
                    animate="visible"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-312 sm:h-80 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/20 to-transparent hidden sm:block" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 hidden sm:block">
                        {project.badge && (
                            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                                {project.badge}
                            </p>
                        )}
                        <h1 className="font-display text-brand-text text-5xl md:text-6xl font-bold leading-[1.05] uppercase break-words">
                            {project.title}
                        </h1>
                    </div>
                </motion.div>

                {/* Judul — mobile: di bawah foto agar tidak menutupi foto */}
                <div className="px-2">
                    <motion.div
                        className="sm:hidden mb-4"
                        variants={reveal}
                        initial="hidden"
                        animate="visible"
                    >
                        {project.badge && (
                            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                                {project.badge}
                            </p>
                        )}
                        <h1 className="font-display text-brand-text text-3xl font-bold leading-[1.05] uppercase break-words">
                            {project.title}
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 lg:gap-8">
                        <motion.div
                            variants={reveal}
                            initial="hidden"
                            animate="visible"
                        >
                            <p className="text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-3">
                                Deskripsi
                            </p>
                            <p className="text-sm sm:text-base font-bold leading-relaxed text-brand-text/80">
                                {project.description}
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col gap-3"
                            variants={stagger}
                            initial="hidden"
                            animate="visible"
                        >
                            {project.link && (
                                <motion.a
                                    className="flex items-center justify-between gap-3 bg-brand-accent text-brand-primary font-extrabold uppercase tracking-wider text-xs lg:text-sm px-5 py-3.5 sm:py-3 rounded-brand-md hover:bg-brand-text transition-colors"
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    variants={item}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Lihat Project
                                    <ExternalLink size={16} />
                                </motion.a>
                            )}
                            {project.preview && (
                                <motion.a
                                    className="flex items-center justify-between gap-3 border border-brand-accent/40 text-brand-text font-extrabold uppercase tracking-wider text-xs lg:text-sm px-5 py-3.5 sm:py-3 rounded-brand-md hover:bg-brand-accent hover:text-brand-primary transition-colors"
                                    href={project.preview}
                                    target="_blank"
                                    rel="noreferrer"
                                    variants={item}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Preview
                                    <Globe size={16} />
                                </motion.a>
                            )}
                        </motion.div>
                    </div>

                    {/* Tags — dikembalikan jadi map per-item, bukan raw dump */}
                    <motion.div
                        className="mt-8 mb-10 pt-6 border-t border-brand-accent/20 flex flex-wrap gap-x-3 gap-y-4"
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                    >
                        {project.tags?.map((tag) => (
                            <motion.div key={tag} className="flex items-baseline gap-2" variants={item}>
                                <span className="px-2 py-1 text-xs sm:text-sm font-semibold text-brand-accent border border-brand-accent/30 rounded-brand-md">
                                    {tag}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ProjectDetail;
