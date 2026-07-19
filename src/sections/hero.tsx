import { useEffect } from "react";

function Hero() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <section id="hero">
            <div className="bg-base-800 h-screen overflow-hidden flex items-center px-6 sm:px-8 md:px-16">
                <div className="max-w-3xl">
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight animate-fade-in-up">
                        Terus<br />Berkembang.<br /> Mencoba Hal<br />Baru.
                    </h1>
                    <p className="py-3 text-base sm:text-lg md:text-xl animate-fade-in-up delay-200">
                        Saya Muhammad Dzaki Rafif Helmiansyah, Siswa SMK Jurusan Rekayasa Perangkat Lunak
                        yang punya minat besar di dunia pengembangan web dan aplikasi.
                    </p>
                    <a className="my-2 btn bg-black text-white border-black hover:bg-gray-800 hover:border-gray-800 text-base sm:text-lg md:text-xl gap-2 animate-fade-in-up delay-400" href="/about">
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
        </section>
    );
}

export default Hero;