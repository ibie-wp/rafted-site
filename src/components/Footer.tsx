import { Github, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="dark-section py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Name */}
            <div className="text-center md:text-left">
              <p className="text-xl font-bold text-dark-section-foreground">Ibrahim Karlie</p>
              <p className="text-sm text-dark-section-foreground/70">UX Designer & Developer</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:ibrahimkarlie17@gmail.com"
                className="text-dark-section-foreground/70 hover:text-dark-section-foreground transition-smooth"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ibie-wp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-section-foreground/70 hover:text-dark-section-foreground transition-smooth"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="tel:0767793311"
                className="text-dark-section-foreground/70 hover:text-dark-section-foreground transition-smooth"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-dark-section-foreground/70">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
