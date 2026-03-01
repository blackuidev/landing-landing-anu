import { MagicCard } from "@/components/lightswind";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">My Work</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-300">
                    Here's a collection of projects I've built. Each one was a unique challenge that helped me grow as a developer.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <MagicCard key={project.id} className="cursor-pointer flex flex-col">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover rounded-t-lg" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-neutral-400 mb-4 flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map(t => <span key={t} className="text-xs bg-sky-900/50 text-sky-300 px-2 py-1 rounded-full">{t}</span>)}
                            </div>
                            <div className="flex justify-end gap-4 mt-auto pt-4">
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors"><Github size={20} /></a>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                            </div>
                        </div>
                    </MagicCard>
                ))}
            </div>
        </div>
    );
};

export default Projects;
