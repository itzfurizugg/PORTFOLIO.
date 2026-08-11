// Hero.tsx
import { useEffect } from "react";

const highlights = [
    { label: "Peran", value: "Web Developer" },
    { label: "Peran", value: "Graphic Designer" },
    { label: "Peran", value: "IT Support" },
];

function Hero() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <section id="hero" className="relative bg-brand-background h-screen overflow-hidden flex flex-col justify-between">
            {/* Konten utama */}
            <div className="flex-1 flex items-center px-6 sm:px-8 md:px-16">
                <div className="max-w-5xl w-full">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-6 animate-fade-in-up">
                        Portfolio — Siswa RPL
                    </p>

                    <h1 className="font-display text-[15vw] sm:text-7xl md:text-8xl lg:text-[98px] font-bold leading-display tracking-display uppercase animate-fade-in-up delay-100">
                        Terus<br /><span className="text-brand-accent">Berkembang.</span><br />Mencoba Hal<br /><span className="text-brand-accent">Baru.</span>
                    </h1>

                    <p className="mt-8 max-w-xl text-sm sm:text-base font-extrabold uppercase tracking-wide text-brand-text/70 animate-fade-in-up delay-200">
                        Saya siswa SMK Rekayasa Perangkat Lunak yang punya minat besar
                        di dunia pengembangan web dan aplikasi.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up delay-400">
                        <a
                            className="inline-flex items-center gap-3 bg-brand-accent text-brand-primary font-extrabold uppercase tracking-wider px-8 py-4 rounded-brand-lg hover:bg-brand-text transition-colors"
                            href="/about"
                        >
                            Lihat lebih lanjut.
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Strip bawah — pola sama seperti info row di About: border-t + grid kolom, statis */}
            <div className="border-t border-brand-accent/20 px-6 sm:px-8 md:px-16 py-8 animate-fade-in-up delay-400">
                <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">
                    {highlights.map((item, i) => (
                        <div
                            key={item.value}
                            className={`flex items-baseline gap-3 px-0 sm:px-6 ${i > 0 ? "sm:border-l sm:border-brand-accent/20" : ""}`}
                        >
                            <span className="text-xs font-extrabold text-brand-accent shrink-0">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-sm font-extrabold uppercase tracking-wider text-brand-text">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;