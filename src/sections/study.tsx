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
        <section id="study" className="bg-base-100 py-20 px-6 sm:px-8 md:px-16">
            <div className="max-w-6xl mx-auto">
                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
                    Riwayat Pendidikan
                </p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-12">
                    Perjalanan Belajar.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {educationHistory.map((item, index) => (
                        <div key={index} className="card bg-base-100 border border-black/40 w-full rounded-none">
                            <div className="card-body">
                                <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-1">
                                    {item.period}
                                </p>
                                <h3 className="card-title text-xl sm:text-2xl font-black">
                                    {item.institution}
                                </h3>
                                <p className="text-base font-semibold">
                                    {item.degree}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Study;