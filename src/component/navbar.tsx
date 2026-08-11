import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Home, User, FolderKanban, Mail, X } from "lucide-react";
import { useSpringReveal, useStagger } from "../lib/motion";

function Navbar() {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [openAtPath, setOpenAtPath] = useState(location.pathname);
    const [homeFlash, setHomeFlash] = useState(false);
    const navigate = useNavigate();
    const flashTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const menuItems = [
        { label: "About Me", to: "/about", icon: User },
        { label: "Project", to: "/project", icon: FolderKanban },
        { label: "Contact", to: "/contact", icon: Mail },
    ];

    const isActive = (path: string) => location.pathname === path;

    const isOpen = open && openAtPath === location.pathname;

    const toggleMenu = () => {
        if (!open) setOpenAtPath(location.pathname);
        setOpen(!open);
    };

    const handleHomeClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/");
        setOpen(false);

        setHomeFlash(true);
        if (flashTimeout.current) clearTimeout(flashTimeout.current);
        flashTimeout.current = setTimeout(() => {
            setHomeFlash(false);
        }, 300);
    };

    useEffect(() => {
        return () => {
            if (flashTimeout.current) clearTimeout(flashTimeout.current);
        };
    }, []);

    // Kunci scroll body saat modal terbuka
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Tutup dengan tombol Escape
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen]);

    const listStagger = useStagger(0.06);
    const itemReveal = useSpringReveal({ distance: 16, blur: 6 });

    const navItems = [
        { label: "Home", to: "/", icon: Home },
        ...menuItems,
    ];

    return (
        <>
            <div className="navbar bg-brand-background relative z-50 md:max-w-none backdrop-blur-md md:backdrop-blur-none">

                <div className="flex-1">
                    <Link to="/" className="font-display text-xl sm:text-2xl font-bold tracking-wider ml-5 md:ml-10">PORTFOLIO<span className="text-brand-accent">.</span></Link>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex">
                    <Link
                        to="/"
                        onClick={handleHomeClick}
                        className={`px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-brand-none transition-colors duration-300 ${
                            homeFlash
                                ? "bg-brand-accent text-black"
                                : "hover:text-brand-accent"
                        }`}
                    >
                        Home
                    </Link>
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.to}
                            className={`px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-brand-none transition-colors duration-300 ${
                                isActive(item.to)
                                    ? "bg-brand-accent text-black"
                                    : "hover:text-brand-accent"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="flex-none mr-6 md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="btn btn-square btn-ghost"
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-5 h-5">
                            <span
                                className={`absolute h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                                    isOpen ? "top-2 rotate-45" : "top-1"
                                }`}
                            />
                            <span
                                className={`absolute h-0.5 w-5 bg-current rounded-full top-2 transition-all duration-300 ${
                                    isOpen ? "opacity-0" : "opacity-100"
                                }`}
                            />
                            <span
                                className={`absolute h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                                    isOpen ? "top-2 -rotate-45" : "top-3"
                                }`}
                            />
                        </div>
                    </button>
                </div>

            </div>

            {createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="mobile-menu"
                            className="fixed inset-0 z-[60] md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            {/* Backdrop */}
                            <div
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                                onClick={() => setOpen(false)}
                                aria-hidden="true"
                            />

                            {/* Panel modal — drawer dari kanan ke kiri */}
                            <motion.div
                                className="absolute inset-y-0 right-0 w-[85vw] max-w-sm flex flex-col bg-brand-background shadow-2xl shadow-black/40"
                                initial={{ x: "100%" }}
                                animate={{ x: "0%" }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", stiffness: 260, damping: 32 }}
                            >
                                <div className="flex items-center justify-between px-5 py-4 border-b border-brand-accent/10">
                                    {/* <Link
                                        to="/"
                                        onClick={handleHomeClick}
                                        className="font-display text-base font-bold tracking-wider"
                                    >
                                        PORTFOLIO<span className="text-brand-accent">.</span>
                                    </Link> */}
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="btn btn-square btn-ghost"
                                        aria-label="Tutup menu"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <nav className="flex-1 overflow-y-auto px-5 py-6">
                                    <motion.ul
                                        className="flex flex-col gap-3"
                                        variants={listStagger}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        {navItems.map((item, i) => {
                                            const Icon = item.icon;
                                            const active = isActive(item.to);
                                            return (
                                                <motion.li key={item.to} variants={itemReveal}>
                                                    <Link
                                                        to={item.to}
                                                        onClick={item.to === "/" ? handleHomeClick : () => setOpen(false)}
                                                        className={`flex items-center justify-between gap-3 w-full px-4 py-4 rounded-brand-md border ${
                                                            active
                                                                ? "bg-brand-accent text-brand-primary border-brand-accent"
                                                                : "border-brand-accent/15 text-brand-text hover:bg-brand-accent/10"
                                                        }`}
                                                    >
                                                        <span className="flex items-center gap-3 font-display text-xl font-bold uppercase tracking-display">
                                                            <Icon className="w-5 h-5" />
                                                            {item.label}
                                                        </span>
                                                        <span
                                                            className={`text-xs font-extrabold uppercase tracking-widest ${
                                                                active ? "text-brand-primary/60" : "text-brand-accent/60"
                                                            }`}
                                                        >
                                                            {String(i + 1).padStart(2, "0")}
                                                        </span>
                                                    </Link>
                                                </motion.li>
                                            );
                                        })}
                                    </motion.ul>
                                </nav>

                                {/* <div className="px-5 py-6 border-t border-brand-accent/10">
                                    <p className="text-xs font-extrabold uppercase tracking-widest text-brand-text/40">
                                        
                                    </p>
                                </div> */}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}

export default Navbar;