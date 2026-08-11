// Study.tsx
const educationHistory = [
    {
        period: "2024 — Sekarang",
        institution: "SMK Negeri 10 Jakarta",
        degree: "Rekayasa Perangkat Lunak (RPL)",
    },
    {
        period: "2021 — 2024",
        institution: "MTs Negeri 14 Jakarta",
        degree: "Sekolah Menengah Pertama",
    },
    {
        period: "2015 — 2021",
        institution: "MI Al-Manar",
        degree: "Sekolah Dasar",
    },
];

function Study() {
    return (
        <section id="study" className="bg-brand-accent py-24 px-6 sm:px-8 md:px-16">
            <div className="max-w-7xl mx-auto">
                <p className="text-xs font-extrabold uppercase tracking-widest text-brand-primary mb-4">
                    Riwayat Pendidikan
                </p>
                <h2 className="font-display text-brand-background text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-display tracking-display uppercase mb-16 max-w-3xl">
                    Perjalanan<br />Belajar<span className="text-brand-primary">.</span>
                </h2>

                {/* Timeline vertikal */}
                <div className="relative pl-10 sm:pl-16">
                    <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-brand-primary/20" />

                    <div className="flex flex-col gap-12 sm:gap-16">
                        {educationHistory.map((item, index) => (
                            <div key={index} className="relative group">
                                {/* Dot penanda */}
                                <span className="absolute -left-10 sm:-left-16 top-1.5 w-4 h-4 rounded-full border-2 border-brand-primary bg-brand-accent group-hover:bg-brand-primary transition-colors" />

                                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-6">
                                    <div>
                                        <span className="text-xs font-extrabold uppercase tracking-widest text-brand-background/40">
                                            {item.period}
                                        </span>
                                        <h3 className="font-display text-brand-background text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-display tracking-display mt-2">
                                            {item.institution}
                                        </h3>
                                        <p className="text-sm font-extrabold uppercase tracking-wider text-brand-background/50 mt-2">
                                            {item.degree}
                                        </p>
                                    </div>

                                    <span className="font-display text-brand-primary/30 group-hover:text-brand-primary transition-colors text-6xl sm:text-7xl md:text-8xl font-bold leading-none shrink-0">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Study;