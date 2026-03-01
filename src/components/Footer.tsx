import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-neutral-900 border-t border-neutral-800 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-neutral-400 text-sm">&copy; {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
                <div className="flex items-center gap-6">
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
