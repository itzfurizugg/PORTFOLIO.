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
        title: "TelaTV",
        image: "/projects/musleem.jpg",
        description: "Website untuk menonton IPTV Gratis Internasional",
        tags: ["React", "Typescript"],
        badge: "Website",
        link: "https://github.com/itzfurizugg/TelaTV"
    },
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
        title: "Maintenance Mode",
        image: "/projects/maintenance.jpg",
        description: "Web pengalihan untuk proyek yang sedang dalam pemeliharaan.",
        tags: ["React", "Typescript"],
        badge: "Website",
        link: "https://github.com/itzfurizugg/Maintenance-Mode"
    }
];
