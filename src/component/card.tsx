import { Globe } from "lucide-react";

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
    return (
        <div className="bg-brand-background border border-brand-accent/20 rounded-brand-lg w-full h-full flex flex-col min-w-0 hover:border-brand-accent transition-colors">
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold uppercase text-brand-text break-words flex items-center gap-2 flex-wrap">
                        {title}
                        {badge && <span className="bg-brand-accent text-black border-0 p-2 px-3 text-xs font-bold uppercase tracking-wider rounded-brand-md">{badge}</span>}
                    </h2>
                    <p className="text-sm text-brand-text/70 break-words mt-3 mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2 py-1 min-h-[32px]">
                        {tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 text-xs font-semibold text-brand-accent border border-brand-accent/30 rounded-brand-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

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
        </div>
    );
}

export default Card;
