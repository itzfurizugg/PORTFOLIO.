// import white from "../assets/white.png";
import secret from "../assets/secret.png";

function About() {
    return (
        <section id="about" className="bg-brand-background pt-10 pb-10 px-6 sm:px-8 md:px-16">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">

                    {/* Kolom kiri: foto + tabel info */}
                    <div className="flex flex-col gap-6">
                        <img
                            src={secret}
                            alt="Foto Profil"
                            className="w-full aspect-[1/1] lg:aspect-[4/5] object-cover rounded-brand-lg border-2 border-brand-accent"
                        />

                        {/* <div className="w-fit inline-flex items-center gap-2 border border-black border-2 px-4 py-2 text-black rounded-none whitespace-nowrap">
                            <span className="w-2 h-2 rounded-full bg-green-500 shrink-0"></span>
                            Bersedia untuk PKL.
                        </div> */}

                        <div className="text-sm">
                            <div className="grid grid-cols-[90px_1fr] gap-y-3">
                                <span className="text-brand-text/50 tracking-wide uppercase text-xs self-start pt-0.5">Domisili</span>
                                <span className="font-semibold text-brand-text">Jakarta, Indonesia</span>

                                <span className="text-brand-text/50 tracking-wide uppercase text-xs self-start pt-0.5">Status</span>
                                <span className="font-semibold text-brand-text">Pelajar SMK</span>

                                <span className="text-brand-text/50 tracking-wide uppercase text-xs self-start pt-0.5">Bahasa</span>
                                <span className="font-semibold text-brand-text">Indonesia, Inggris</span>
                            </div>
                        </div>
                    </div>

                    {/* Kolom kanan: nama besar + badge + deskripsi */}
                    <div>
                        <p className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-2">
                            About Me
                        </p>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-display tracking-display uppercase mb-8">
                            Muhammad Dzaki<br />Rafif Helmiansyah
                        </h1>

                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-brand-accent text-brand-accent rounded-brand-md">Web Developer</span>
                            <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-brand-accent text-brand-accent rounded-brand-md">Grapich Designer</span>
                            <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-brand-accent text-brand-accent rounded-brand-md">IT Support</span>
                        </div>

                        <p className="py-3 text-base sm:text-lg leading-relaxed text-brand-text/80">
                            Saya siswa SMK Negeri 10 Jakarta jurusan Rekayasa Perangkat Lunak (RPL) yang saat ini sedang bersiap menghadapi Praktik Kerja Lapangan (PKL). Saya memiliki ketertarikan besar di bidang pengembangan perangkat lunak, khususnya frontend development, dan terus berusaha mengasah kemampuan dalam membangun antarmuka aplikasi, memahami logika pemrograman, serta mengelola database dengan baik. Saya terbiasa mempelajari teknologi baru secara mandiri melalui proyek-proyek yang saya kerjakan sendiri, karena bagi saya belajar langsung lewat praktik jauh lebih efektif dibanding sekadar teori. Dengan dasar pemahaman matematika yang cukup kuat, saya mampu berpikir logis dalam menganalisis masalah dan menyusun solusi secara terstruktur. Saya berkomitmen untuk terus meningkatkan kemampuan, baik dari sisi teknis maupun nonteknis. Saya juga mudah beradaptasi dengan lingkungan baru dan siap belajar sekaligus berkontribusi secara nyata selama menjalani PKL.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
