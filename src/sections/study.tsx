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
            <div className="max-w-4xl mx-auto">
                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
                    Riwayat Pendidikan
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-12">
                    Perjalanan Belajar.
                </h2>

                <div className="relative border-l-2 border-black pl-8 flex flex-col gap-12">
                    {educationHistory.map((item, index) => (
                        <div key={index} className="relative">
                            {/* Titik timeline */}
                            <div className="absolute -left-[41px] top-1 w-4 h-4 bg-black rounded-full border-2 border-white" />

                            <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-1">
                                {item.period}
                            </p>
                            <h3 className="text-xl sm:text-2xl font-black mb-1">
                                {item.institution}
                            </h3>
                            <p className="text-base font-semibold mb-2">
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