// About.tsx
import secret from "../assets/secret.png";

const infoRows = [
    { label: "Domisili", value: "Jakarta, Indonesia" },
    { label: "Status", value: "Pelajar SMK" },
    { label: "Bahasa", value: "Indonesia, Inggris" },
];

const roles = ["Web Developer", "Graphic Designer", "IT Support"];

function About() {
    return (
        <section id="about" className="relative bg-brand-background py-14 sm:py-16 px-6 sm:px-8 md:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">

                <p className="text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-6">
                    About Me
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 mb-8">
                    <img
                        src={secret}
                        alt="Foto Profil"
                        className="w-full h-64 sm:h-72 lg:h-full aspect-[4/5] lg:aspect-auto object-cover rounded-none border-2"
                    />

                    <h1 className="font-display text-brand-text text-5xl sm:text-6xl md:text-7xl xl:text-[6rem] font-bold leading-[1.1] tracking-normal uppercase self-center">
                        Muhammad Dzaki
                        <br className="hidden sm:block" />
                        <span> </span>
                        <span className="block sm:inline mt-2 sm:mt-0 text-brand-accent">
                            Rafif Helmiansyah
                        </span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
                    <p className="text-sm font-bold leading-relaxed text-brand-text/80 order-2 lg:order-1">
                        Saya siswa SMK Negeri 10 Jakarta jurusan Rekayasa Perangkat Lunak (RPL) yang saat ini sedang bersiap menghadapi Praktik Kerja Lapangan (PKL). Saya memiliki ketertarikan besar di bidang pengembangan perangkat lunak, khususnya frontend development, dan terus berusaha mengasah kemampuan dalam membangun antarmuka aplikasi, memahami logika pemrograman, serta mengelola database dengan baik. Saya terbiasa mempelajari teknologi baru secara mandiri melalui proyek-proyek yang saya kerjakan sendiri, karena bagi saya belajar langsung lewat praktik jauh lebih efektif dibanding sekadar teori. Dengan dasar pemahaman matematika yang cukup kuat, saya mampu berpikir logis dalam menganalisis masalah dan menyusun solusi secara terstruktur.
                    </p>

                    <div className="flex flex-col gap-3 order-1 lg:order-2">
                        {roles.map((role, i) => (
                            <div
                                key={role}
                                className="flex items-center justify-between gap-4 border border-brand-accent/40 rounded-brand-md px-4 py-3 hover:bg-brand-accent hover:text-brand-primary transition-colors group"
                            >
                                <span className="text-sm font-extrabold uppercase tracking-wider">{role}</span>
                                <span className="text-xs font-extrabold text-brand-accent group-hover:text-brand-primary">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 pt-6 pb-20 border-t border-brand-accent/20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">
                    {infoRows.map((row, i) => (
                        <div
                            key={row.label}
                            className={`px-0 sm:px-6 ${i > 0 ? "sm:border-l sm:border-brand-accent/20" : ""}`}
                        >
                            <p className="text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-1">
                                {row.label}
                            </p>
                            <p className="text-base font-extrabold uppercase leading-none text-brand-text">
                                {row.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;