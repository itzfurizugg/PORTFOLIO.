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
        <section id="study" className="bg-brand-primary py-20 px-6 sm:px-8 md:px-16">
            <div className="max-w-6xl mx-auto">
                <p className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-2">
                    Riwayat Pendidikan
                </p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-display tracking-display uppercase mb-12">
                    Perjalanan Belajar.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {educationHistory.map((item, index) => (
                        <div key={index} className="bg-brand-background border border-brand-accent/20 rounded-brand-lg p-8 flex flex-col gap-2 hover:border-brand-accent transition-colors">
                            <p className="text-xs font-bold text-brand-accent tracking-wide uppercase mb-1">
                                {item.period}
                            </p>
                            <h3 className="font-display text-2xl font-bold uppercase text-brand-text">
                                {item.institution}
                            </h3>
                            <p className="text-sm font-semibold text-brand-text/60">
                                {item.degree}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Study;
