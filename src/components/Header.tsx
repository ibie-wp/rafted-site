import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Skills", href: "skills" },
    { label: "Contact", href: "contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
      <nav className="container mx-auto px-2 sm:px-6 py-2 sm:py-4">
        <div className="flex items-center justify-center gap-1 sm:gap-4 md:gap-8 flex-wrap">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-xs sm:text-sm font-medium text-foreground/70 hover:text-primary transition-smooth px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-primary/10"
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
