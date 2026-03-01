import CountUp from "@/components/lightswind/count-up";

const About = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">About Me</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-300">
                    I'm a passionate frontend developer with a love for creating beautiful, intuitive, and high-performance user experiences.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-2">
                    <img
                        src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="John Doe"
                        className="rounded-lg shadow-2xl object-cover w-full h-full aspect-[4/5]"
                    />
                </div>
                <div className="md:col-span-3">
                    <h2 className="text-3xl font-bold mb-4">My Journey</h2>
                    <p className="text-neutral-300 mb-4 leading-relaxed">
                        My journey into web development started with a fascination for how things work on the internet. This curiosity quickly grew into a passion for coding and design. Over the years, I've honed my skills in modern frontend technologies, always striving to write clean, efficient, and scalable code.
                    </p>
                    <p className="text-neutral-300 leading-relaxed">
                        I believe that great design is not just about aesthetics, but also about creating a seamless and enjoyable experience for the user. I'm dedicated to bridging the gap between design and development to build products that are both visually stunning and functionally robust.
                    </p>
                    <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-4xl font-bold text-sky-400"><CountUp value={4} /></p>
                            <p className="text-neutral-400">Years of Experience</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-sky-400"><CountUp value={50} />+</p>
                            <p className="text-neutral-400">Projects Completed</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-sky-400"><CountUp value={100} />%</p>
                            <p className="text-neutral-400">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
