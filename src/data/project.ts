export interface Project {
    title: string;
    image: string;
    description: string;
    tags: string[];
    badge?: string;
    link: string;
}

export const projects: Project[] = [
    {
        title: "Musleem",
        image: "/projects/musleem.jpg",
        description: "Aplikasi islami dengan fitur pengingat sholat dan bebas iklan",
        tags: ["Flutter", "Supabase"],
        badge: "Mobile App",
        link: "https://github.com/itzfurizugg/Musleem"
    },
    {
        title: "Chromonic",
        image: "/projects/chromonic.jpg",
        description: "Aplikasi kamera estetik dengan rasio 4:3 dan fitur sekali jepret siap unggah ke sosial media",
        tags: ["Flutter"],
        badge: "Mobile App",
        link: "https://github.com/itzfurizugg/chromonic"
    },
    {
        title: "Movlix",
        image: "/projects/movlix.jpg",
        description: "Database film dengan Supabase dan Expo Router",
        tags: ["Expo", "Supabase"],
        badge: "Mobile App",
        link: ""
    },
    {
        title: "CatchIt",
        image: "/projects/catchit.jpg",
        description: "Aplikasi pelaporan fasilitas dengan 8 tabel Supabase, RLS, dan panel admin.",
        tags: ["React", "Supabase"],
        badge: "Web App",
        link: ""
    },
    {
        title: "Maintenance Mode",
        image: "/projects/maintenance.jpg",
        description: "Web pengalihan untuk proyek yang sedang dalam pemeliharaan.",
        tags: ["React"],
        badge: "Web",
        link: "https://github.com/itzfurizugg/Maintenance-Mode"
    }
];
