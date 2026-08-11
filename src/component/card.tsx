import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { inView, useFadeUp } from "../lib/motion";

interface CardProps {
    title: string;
    image: string;
    description: string;
    tags: string[];
    badge?: string;
    link: string;
    preview: string;
}

function Card({ title, description, tags, badge, link, preview }: CardProps) {
    const reveal = useFadeUp({ distance: 24, duration: 0.5 });

    return (
        <motion.div
            className="bg-brand-background border border-brand-accent/20 rounded-brand-lg w-full h-full flex flex-col min-w-0 hover:border-brand-accent transition-colors"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="p-6 flex-1 flex flex-col">
                <Link to={`/project/${encodeURIComponent(title)}`} className="flex-1 flex flex-col">
                    <div className="flex-1">
                        <h2 className="font-display text-2xl font-bold uppercase text-brand-text break-words flex items-center gap-2 flex-wrap">
                            {title}
                            {badge && <span className="bg-brand-accent text-black border-0 p-2 px-3 text-xs font-bold uppercase tracking-wider rounded-brand-md">{badge}</span>}
                        </h2>
                        <p className="text-sm text-brand-text/70 break-words mt-3 mb-4 line-clamp-3">{description}</p>
                        <div className="flex flex-wrap gap-2 py-1 min-h-[32px]">
                            {tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 text-xs font-semibold text-brand-accent border border-brand-accent/30 rounded-brand-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>

                <div className={`grid gap-3 mt-6 ${preview ? 'grid-cols-[1fr_auto]' : 'grid-cols-1'}`}>
                    {link && (
                        <a className="btn bg-brand-accent border-0 text-black font-bold uppercase tracking-wider rounded-brand-md hover:bg-white" href={link}>
                            Lihat Project
                        </a>
                    )}
                    {preview && (
                        <a className="btn bg-transparent border border-brand-accent/30 text-brand-text rounded-brand-md hover:bg-brand-accent hover:text-black w-12 h-12 p-0 flex items-center justify-center" href={preview}>
                            <Globe size={16} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default Card;
