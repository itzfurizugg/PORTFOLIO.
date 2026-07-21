import { contactLinks } from "../data/contactdata";

function Contact() {
    return (
        <section id="project" className="bg-base-800 py-10 px-6 sm:px-8 md:px-16">
            <div className="max-w-6xl mx-auto">
                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2 animate-fade-in-up">
                    Contact
                </p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-10 animate-fade-in-up delay-100">
                    Hubungi Saya melalui.
                </h2>
                <div className="flex flex-col gap-4 justify-center">
                    {contactLinks.map((item, index) => (
                        <a
                            key={item.title}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-3 border border-black/40 rounded-none px-4 py-3 hover:bg-black hover:text-white transition-colors animate-fade-in-up`}
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                            {item.icon}
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
        </section >
    );
}

export default Contact;