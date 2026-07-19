import { FiGithub, FiMail } from "react-icons/fi";
import { FaWhatsapp, FaDiscord, FaTelegram } from "react-icons/fa";
import type { ReactNode } from "react";

export interface ContactLink {
    title: string;
    link: string;
    icon: ReactNode;
}

export const contactLinks: ContactLink[] = [
    {
        title: "Email",
        link: "mailto:dosmokgg@gmail.com",
        icon: <FiMail className="w-5 h-5" />
    },
    {
        title: "Github",
        link: "https://github.com/itzfurizugg",
        icon: <FiGithub className="w-5 h-5" />
    },
    {
        title: "Discord",
        link: "https://discord.com/user/848167115558879272",
        icon: <FaDiscord className="w-5 h-5" />
    },
    {
        title: "Telegram",
        link: "https://t.me/",
        icon: <FaTelegram className="w-5 h-5" />
    }
];
