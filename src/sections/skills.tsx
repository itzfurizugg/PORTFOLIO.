const skillCategories = [
    {
        category: "Languages",
        items: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "PHP",
            "Python",
        ],
    },
    {
        category: "Frontend",
        items: [
            "React",
            "Tailwind CSS",
            "DaisyUI",
            "Bootstrap",
        ],
    },
    {
        category: "Backend",
        items: [
            "Laravel",
            "Supabase",
            "MySQL",
        ],
    },
    {
        category: "Design",
        items: [
            "Figma",
            "Canva",
            "Adobe Illustrator",
        ],
    },
    {
        category: "Tools",
        items: [
            "Git & GitHub",
            "VS Code",
            "Vite",
            "Vercel",
            "ADB",
        ],
    },
];

function Skills() {
    return (
        <section id="skills" className="bg-brand-background py-20 px-6 sm:px-8 md:px-16">
            <div className="max-w-6xl mx-auto">
                <p className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-2">
                    Keahlian
                </p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-display tracking-display uppercase mb-4">
                    Keahlian saya.
                </h2>
                <p className="text-brand-text/50 mb-12 max-w-xl">
                    Selalu belajar. Ini beberapa teknologi dan tools yang paling sering saya gunakan.
                </p>

                <div className="flex flex-col gap-8">
                    {skillCategories.map((group, index) => (
                        <div
                            key={group.category}
                            className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-5 border-t border-brand-accent/20"
                        >
                            <div className="sm:w-40 shrink-0 flex items-center gap-3">
                                <span className="text-xs font-mono text-brand-accent">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-text">
                                    {group.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 border border-brand-accent/30 text-sm font-semibold text-brand-text rounded-brand-md hover:bg-brand-accent hover:text-black hover:border-brand-accent transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-brand-accent/20"></div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
