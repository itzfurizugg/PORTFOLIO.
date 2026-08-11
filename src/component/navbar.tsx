import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, User, FolderKanban, Mail } from "lucide-react";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [homeFlash, setHomeFlash] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const flashTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const menuItems = [
        { label: "About Me", to: "/about", icon: User },
        { label: "Project", to: "/project", icon: FolderKanban },
        { label: "Contact", to: "/contact", icon: Mail },
    ];

    const isActive = (path: string) => location.pathname === path;

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

    return (
        <div className="navbar bg-brand-background relative z-50">

            <div className="flex-1">
                <Link to="/" className="font-display text-xl sm:text-2xl font-bold tracking-wider ml-5 md:ml-10">PORTFOLIO<span className="text-brand-accent">.</span></Link>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex">
                <Link
                    to="/"
                    onClick={handleHomeClick}
                    className={`px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-brand-md transition-colors duration-300 ${
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
                        className={`px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-brand-md transition-colors duration-300 ${
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
                    onClick={() => setOpen(!open)}
                    className="btn btn-square btn-ghost"
                    aria-label="Toggle menu"
                >
                    <div className="relative w-5 h-5">
                        <span
                            className={`absolute h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                                open ? "top-2 rotate-45" : "top-1"
                            }`}
                        />
                        <span
                            className={`absolute h-0.5 w-5 bg-current rounded-full top-2 transition-all duration-300 ${
                                open ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <span
                            className={`absolute h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                                open ? "top-2 -rotate-45" : "top-3"
                            }`}
                        />
                    </div>
                </button>
            </div>

            <div
                className={`fixed inset-0 bg-black/40 md:hidden transition-opacity duration-500 ease-in-out ${
                    open ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setOpen(false)}
            />

            <div
                className={`absolute top-full left-0 right-0 w-full rounded-none bg-brand-primary border-b border-brand-accent/15 shadow-lg md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
                }`}
            >
                <ul className="menu p-4 gap-1 w-full">
                    <li className="w-full">
                        <Link
                            to="/"
                            onClick={handleHomeClick}
                            className="flex items-center gap-3 py-3 text-sm font-bold uppercase tracking-wider rounded-brand-md w-full"
                        >
                            <Home className="w-4 h-4" />
                            Home
                        </Link>
                    </li>
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.to);
                        return (
                            <li key={item.label} className="w-full">
                                <Link
                                    to={item.to}
                                    onClick={() => setOpen(false)}
                                    className={`flex items-center gap-3 py-3 text-sm font-bold uppercase tracking-wider rounded-brand-md w-full ${
                                        active
                                            ? "bg-brand-accent text-black"
                                            : "hover:bg-brand-primary/60"
                                    }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

        </div>
    );
}

export default Navbar;
