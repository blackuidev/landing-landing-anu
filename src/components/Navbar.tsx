import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/lightswind";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const activeLinkClass = "text-white font-semibold";
    const inactiveLinkClass = "text-neutral-400 hover:text-white transition-colors";

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            isScrolled ? "bg-black/80 backdrop-blur-lg border-b border-neutral-800" : "bg-transparent"
        )}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                <NavLink to="/" className="text-2xl font-bold tracking-tighter text-white">
                    JD<span className="text-sky-400">.</span>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden md:block">
                    <Button variant="outline" className="rounded-full">
                        Hire Me
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-xl pb-6">
                    <div className="flex flex-col items-center gap-6 pt-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <Button variant="outline" className="rounded-full w-40">
                            Hire Me
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
