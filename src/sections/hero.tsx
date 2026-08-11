import { useEffect } from "react";

function Hero() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <section id="hero" className="bg-brand-background h-screen overflow-hidden flex items-center px-6 sm:px-8 md:px-16">
            <div className="max-w-5xl">
                <h1 className="font-display text-[15vw] sm:text-7xl md:text-8xl lg:text-[98px] font-bold leading-display tracking-display uppercase animate-fade-in-up delay-100">
                    Terus<br /><span className="text-brand-accent">Berkembang.</span><br />Mencoba Hal<br /><span className="text-brand-accent">Baru.</span>
                </h1>
                <p className="mt-8 max-w-xl text-sm sm:text-base font-semibold uppercase tracking-wide text-brand-text/70 animate-fade-in-up delay-200">
                    Saya siswa SMK Rekayasa Perangkat Lunak yang punya minat besar
                    di dunia pengembangan web dan aplikasi.
                </p>
                <a
                    className="my-2 mt-8 inline-flex items-center gap-3 bg-brand-accent text-black font-bold uppercase tracking-wider px-8 py-4 rounded-brand-lg hover:bg-white transition-colors animate-fade-in-up delay-400"
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
        </section>
    );
}

export default Hero;
