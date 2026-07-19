interface CardProps {
    title: string;
    image: string;
    description: string;
    tags: string[];
    badge?: string;
    link: string;
}

function Card({ title, image, description, tags, badge, link }: CardProps) {
    return (
        <div className="card bg-base-100 border border-black/40 w-full rounded-none">
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    {badge && <div className="badge bg-black text-white border-black">{badge}</div>}
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-start py-1">
                    {tags.map((tag) => (
                        <div key={tag} className="badge badge-outline">
                            {tag}
                        </div>
                    ))}
                </div>
                <a className="btn bg-black rounded-none border-black hover:bg-white text-white hover:text-black" href={link}>Lihat Project</a>
            </div>
        </div>
    );
}

export default Card;