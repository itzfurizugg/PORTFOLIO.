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
        <div className="card bg-base-100 border border-black/40 w-full rounded-none h-full flex flex-col min-w-0">
            <div className="card-body flex-1 flex flex-col">
                <div className="flex-1">
                    <h2 className="card-title text-left break-words">
                        {title}
                        {badge && <div className="badge bg-black text-white border-black p-3 px-2">{badge}</div>}
                    </h2>
                    <p className="text-left break-words">{description}</p>
                    <div className="card-actions justify-start py-1 min-h-[32px]">
                        {tags.map((tag) => (
                            <div key={tag} className="badge badge-outline">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`grid gap-4 mt-auto ${preview ? 'grid-cols-[1fr_auto]' : 'grid-cols-1'}`}>
                    {link && (
                        <a className="btn bg-black rounded-none border-black hover:bg-white text-white hover:text-black" href={link}>
                            Lihat Project
                        </a>
                    )}
                    {preview && (
                        <a className="btn bg-white rounded-none border-black hover:bg-gray text-black hover:text-black w-12 h-12 p-0 flex items-center justify-center" href={preview}>
                            <Globe size={16} />
                        </a>
                    )}
                </div>
            </div>
        </div >
    );
}

export default Card;