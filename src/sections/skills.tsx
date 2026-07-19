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
        <section id="skills" className="bg-base-100 py-20 px-6 sm:px-8 md:px-16">
            <div className="max-w-5xl mx-auto">
                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
                    Keahlian
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                    Keahlian saya.
                </h2>
                <p className="text-gray-500 mb-12 max-w-xl">
                    Selalu belajar. Ini beberapa teknologi dan tools yang paling sering saya gunakan.
                </p>

                <div className="flex flex-col gap-8">
                    {skillCategories.map((group, index) => (
                        <div
                            key={group.category}
                            className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-5 border-t border-black"
                        >
                            <div className="sm:w-40 shrink-0 flex items-center gap-3">
                                <span className="text-xs font-mono text-gray-400">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-sm font-bold uppercase tracking-widest">
                                    {group.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 border border-black text-sm font-medium rounded-none hover:bg-black hover:text-white transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-black"></div>
                </div>
            </div>
        </section>
    );
}

export default Skills;