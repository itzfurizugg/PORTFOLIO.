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
        image: "/projects/musleem.jpg",
        description: "A form maker",
        tags: ["React", "Typescript", "Supabase", "Capacitor"],
        badge: "Website",
        link: "https://github.com/itzfurizugg/formaly",
        preview: "https://noprojectfound.vercel.app"
    },
    {
        title: "TelaTV",
        image: "/projects/musleem.jpg",
        description: "Website untuk menonton IPTV Gratis Internasional",
        tags: ["React", "Typescript"],
        badge: "Website",
        link: "https://github.com/itzfurizugg/TelaTV",
        preview: "https://telatv-iptv.vercel.app/"
    },
    {
        title: "Musleem",
        image: "/projects/musleem.jpg",
        description: "Aplikasi islami dengan fitur pengingat sholat dan bebas iklan",
        tags: ["Flutter", "Supabase"],
        badge: "Mobile App",
        link: "https://github.com/itzfurizugg/Musleem",
        preview: "https://musleem.vercel.app/"

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
        description: "Website membaca Al-Quran tanpa iklan menggunakan API dari EQuran.id",
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
        title: "Maintenance Mode",
        image: "/projects/maintenance.jpg",
        description: "Web pengalihan untuk proyek yang sedang dalam pemeliharaan.",
        tags: ["React", "Typescript"],
        badge: "Website",
        link: "https://github.com/itzfurizugg/Maintenance-Mode",
        preview: "https://maintenancemode-sigma.vercel.app"
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
