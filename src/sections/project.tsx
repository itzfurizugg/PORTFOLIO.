import Card from "../component/card";
import { projects } from "../data/project";

function ProjectList() {
    return (
        <section id="project" className="bg-base-800 py-10 px-6 sm:px-8 md:px-16">
            <div className="max-w-6xl mx-auto">
                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2 animate-fade-in-up">
                    Project
                </p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-10 animate-fade-in-up delay-100">
                    Proyek Saya.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <div key={project.title} className="animate-fade-in-up h-full w-full" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                            <Card {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectList;