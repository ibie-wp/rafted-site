import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-effect animate-fade-in">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="#hero" 
          className="text-xl font-bold gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-smooth"
        >
          Portfolio
        </a>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </div>
          
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
