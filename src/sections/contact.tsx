import { contactLinks } from "../data/contactdata";

function Contact() {
    return (
        <section id="project" className="bg-brand-background py-10 px-6 sm:px-8 md:px-16">
            <div className="max-w-6xl mx-auto">
                <p className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-2 animate-fade-in-up">
                    Contact
                </p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-display tracking-display uppercase mb-10 animate-fade-in-up delay-100">
                    Hubungi Saya melalui.
                </h2>
                <div className="flex flex-col gap-4 justify-center">
                    {contactLinks.map((item, index) => (
                        <a
                            key={item.title}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-3 border border-brand-accent/30 rounded-brand-md px-4 py-4 text-brand-text hover:bg-brand-accent hover:text-black transition-colors animate-fade-in-up`}
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                            {item.icon}
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
