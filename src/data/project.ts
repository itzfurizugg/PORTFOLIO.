export interface Project {
    title: string;
    image: string;
    description: string;
    tags: string[];
    badge?: string;
    link: string;
    preview: string;
}

export const projects: Project[] = [
    {
        title: "Formaly",
        image: "https://res.cloudinary.com/wgyqi7lt/image/upload/v1786431694/formaly_kjzvza.png",
        description: "Formaly adalah aplikasi pembuat formulir seperti Google Forms yang dikembangkan sebagai proyek tugas akhir kelompok beranggotakan 6 orang. Aplikasi ini punya versi mobile (Flutter) dan web (React TypeScript) dengan backend Supabase PostgreSQL, mendukung tiga peran pengguna (user, creator, admin), serta dilengkapi rich text editor untuk membuat deskripsi form dan pertanyaan yang fleksibel — tidak terikat ke kelas tertentu sehingga bisa juga digunakan untuk ujian.",
        tags: ["React", "Typescript", "Supabase", "Capacitor"],
        badge: "Website",
        link: "https://github.com/itzfurizugg/formaly",
        preview: "https://formaly-gamma.vercel.app"
    },
    {
        title: "TelaTV",
        image: "https://res.cloudinary.com/wgyqi7lt/image/upload/v1786433071/telatv_dvd0pb.png",
        description: "Website untuk menonton IPTV Gratis Internasional",
        tags: ["React", "Typescript"],
        badge: "Website",
        link: "https://github.com/itzfurizugg/TelaTV",
        preview: "https://telatv-iptv.vercel.app/"
    },
    {
        title: "Musleem",
        image: "/projects/musleem.jpg",
        description: "Musleem adalah aplikasi gaya hidup Islami berbasis Flutter yang menyediakan fitur jadwal sholat, kompas arah kiblat dengan haptic feedback, koleksi doa-doa, serta autentikasi pengguna melalui Supabase Auth. Aplikasi ini dilengkapi panel admin berbasis React/Next.js yang di-deploy di Vercel untuk manajemen konten dan impor data XLS, dengan desain arsitektur di mana seluruh logika inti berjalan di sisi klien (Flutter) sementara Supabase berfungsi sebagai penyimpanan data murni.",
        tags: ["Flutter", "Supabase"],
        badge: "Mobile App",
        link: "https://github.com/itzfurizugg/Musleem",
        preview: "https://musleem.vercel.app/"

    },
    {
        title: "Maintenance Mode",
        image: "https://res.cloudinary.com/wgyqi7lt/image/upload/v1786433071/telatv-2_j7lcae.png",
        description: "Web pengalihan untuk proyek yang sedang dalam pemeliharaan.",
        tags: ["React", "Typescript"],
        badge: "Website",
        link: "https://github.com/itzfurizugg/Maintenance-Mode",
        preview: "https://maintenancemode-sigma.vercel.app"
    },
    {
        title: "atSearch",
        image: "https://res.cloudinary.com/wgyqi7lt/image/upload/v1786433071/telatv-1_fb8bfe.png",
        description: "Ambient Clock adalah project web sederhana yang menampilkan jam bergaya ambient, saat ini sudah di-deploy di Vercel, dengan pengembangan lanjutan berupa penambahan dock di bagian bawah untuk menyimpan shortcut link yang bisa dikustomisasi pengguna.",
        tags: ["React", "Typescript"],
        badge: "Website",
        link: "https://github.com/itzfurizugg/Maintenance-Mode",
        preview: "https://homify-alpha.vercel.app"
    },
    {
        title: "Chromonic",
        image: "/projects/chromonic.jpg",
        description: "Aplikasi kamera estetik dengan rasio 4:3 dan fitur sekali jepret siap unggah ke sosial media",
        tags: ["Flutter"],
        badge: "Mobile App",
        link: "https://github.com/itzfurizugg/chromonic",
        preview: "https://noprojectfound.vercel.app"

    },
    {
        title: "TheQuran",
        image: "/projects/chromonic.jpg",
        description: "TheQuran adalah aplikasi web Al-Quran berbasis React/Vite yang memanfaatkan API dari equran.id, menghadirkan fitur pemutaran audio ayat, pemilihan qori, dan opsi terjemahan Bahasa Indonesia, dengan tampilan yang dibangun menggunakan Bootstrap 5.",
        tags: ["React"],
        badge: "Website",
        link: "https://github.com/itzfurizugg/thequran",
        preview: "https://thequran-one.vercel.app"

    },
    {
        title: "Movlix",
        image: "/projects/movlix.jpg",
        description: "Database film dengan Supabase dan Expo Router",
        tags: ["Expo", "Supabase"],
        badge: "Mobile App",
        link: "https://github.com/itzfurizugg/Movlix",
        preview: "https://noprojectfound.vercel.app"

    },
    {
        title: "tookshot",
        image: "/projects/maintenance.jpg",
        description: "Aplikasi peminjaman kamera yang berbasis Mobile",
        tags: ["Flutter", "Laravel"],
        badge: "Mobile App",
        link: "https://github.com/itzfurizugg/tookshot",
        preview: "https://noprojectfound.vercel.app"
    }
];
