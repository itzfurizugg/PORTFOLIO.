// ProjectDetail.tsx
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Globe } from "lucide-react";
import { projects } from "../data/project";

function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.title === id);

    if (!project) {
        return (
            <section className="bg-brand-background py-24 px-6 sm:px-8 md:px-16 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto text-center w-full">
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
                </div>
            </section>
        );
    }

    return (
        <section className="bg-brand-background py-14 sm:py-16 px-6 sm:px-8 md:px-16">
            <div className="max-w-7xl mx-auto">

                <Link
                    to="/project"
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-accent hover:text-brand-text transition-colors mb-8"
                >
                    <ArrowLeft size={16} />
                    Kembali ke Project
                </Link>

                {/* Gambar full-bleed dengan judul overlay */}
                <div className="relative rounded-brand-lg overflow-hidden border border-brand-accent/20 mb-8">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 sm:h-80 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                        {project.badge && (
                            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                                {project.badge}
                            </p>
                        )}
                        <h1 className="font-display text-brand-text text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] uppercase">
                            {project.title}
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-3">
                            Deskripsi
                        </p>
                        <p className="text-sm sm:text-base font-bold leading-relaxed text-brand-text/80">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {project.link && (
                            <a
                                className="flex items-center justify-between gap-3 bg-brand-accent text-brand-primary font-extrabold uppercase tracking-wider text-sm px-5 py-3.5 rounded-brand-md hover:bg-brand-text transition-colors"
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Lihat Project
                                <ExternalLink size={16} />
                            </a>
                        )}
                        {project.preview && (
                            <a
                                className="flex items-center justify-between gap-3 border border-brand-accent/40 text-brand-text font-extrabold uppercase tracking-wider text-sm px-5 py-3.5 rounded-brand-md hover:bg-brand-accent hover:text-brand-primary transition-colors"
                                href={project.preview}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Preview
                                <Globe size={16} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Tags — dikembalikan jadi map per-item, bukan raw dump */}
                <div className="mt-8 pt-6 border-t border-brand-accent/20 flex flex-wrap gap-x-3 gap-y-4">
                    {project.tags?.map((tag, i) => (
                        <div key={tag} className="flex items-baseline gap-2">
                            {/* <span className="text-xs font-extrabold text-brand-accent">
                                {String(i + 1).padStart(2, "0")}
                            </span> */}
                            <span className="px-2 py-1 text font-semibold text-brand-accent border border-brand-accent/30 rounded-brand-md">
                                {tag}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectDetail;