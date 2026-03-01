import { AuroraBackground } from "@/components/lightswind/aurora-background";
import { TypingText } from "@/components/lightswind/typing-text";
import { BentoGrid, BentoCard } from "@/components/lightswind/bento-grid";
import { MagicCard } from "@/components/lightswind/magic-card";
import { SlidingCards } from "@/components/lightswind/sliding-cards";
import { Button } from "@/components/lightswind";
import { projects, skills, testimonials, bentoItems } from "@/lib/data";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <div className="w-full overflow-x-hidden">
            {/* Hero Section */}
            <AuroraBackground>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-screen text-center">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                        Crafting Digital Experiences
                    </h1>
                    <TypingText
                        text="That Inspire, Engage, and Convert."
                        className="text-2xl md:text-3xl mt-4 text-sky-400"
                    />
                    <p className="mt-6 max-w-2xl text-lg text-neutral-300">
                        I'm John Doe, a freelance frontend developer specializing in building beautiful, high-performance web applications with modern technologies.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <Button asChild size="lg" className="rounded-full">
                            <Link to="/projects">View My Work</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-full">
                           <Link to="/contact">Get In Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </div>
            </AuroraBackground>

            {/* About / Bento Section */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">What I Do</h2>
                    <BentoGrid>
                        {bentoItems.map((item, idx) => (
                            <BentoCard key={idx} {...item} />
                        ))}
                    </BentoGrid>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-24 bg-neutral-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
                    <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">A selection of my work, showcasing my skills in creating modern and responsive web applications.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.slice(0, 2).map((project) => (
                            <MagicCard key={project.id} className="cursor-pointer">
                                <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-t-lg" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-neutral-400 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map(t => <span key={t} className="text-xs bg-sky-900/50 text-sky-300 px-2 py-1 rounded-full">{t}</span>)}
                                    </div>
                                    <div className="flex justify-end gap-4">
                                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors"><Github size={20} /></a>
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>
                            </MagicCard>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button asChild variant="secondary" className="rounded-full">
                            <Link to="/projects">View All Projects</Link>
                        </Button>
                    </div>
                </div>
            </section>

             {/* Skills Section */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">My Tech Stack</h2>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {skills.map(skill => (
                            <div key={skill.name} className="flex flex-col items-center gap-2 text-neutral-300 hover:text-white transition-colors group">
                                <img src={skill.icon} alt={skill.name} className="h-12 w-12 grayscale group-hover:grayscale-0 transition-all" />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-neutral-950">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">What Clients Say</h2>
                    <div className="relative">
                        <SlidingCards items={testimonials} />
                    </div>
                </div>
            </section>

             {/* CTA Section */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-4">Have a project in mind?</h2>
                    <p className="text-neutral-300 max-w-xl mx-auto mb-8">Let's build something amazing together. Reach out to discuss your ideas.</p>
                     <Button asChild size="lg" className="rounded-full">
                        <Link to="/contact">Contact Me <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </section>

        </div>
    );
};

export default Index;
