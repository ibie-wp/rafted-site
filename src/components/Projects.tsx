import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website showcasing UX/UI design projects with interactive elements and smooth animations.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/ibie-wp/personal-portfolio",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
  },
  {
    title: "E-commerce Web App",
    description: "Full-featured e-commerce platform with user authentication, product management, and shopping cart functionality.",
    technologies: ["Vue.js", "JavaScript", "Firebase"],
    link: "https://github.com/ibie-wp/ecommerce-app",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
  },
  {
    title: "Task Manager",
    description: "Intuitive task management application with drag-and-drop functionality and real-time collaboration features.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/ibie-wp/task-manager",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
  }
];

export function Projects() {
  return (
    <section id="projects" className="section-spacing section-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Featured Work
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground/70">
              Recent projects showcasing my journey from full-stack development 
              to UX-focused design thinking.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="perspective-1000 group cursor-pointer h-[400px]"
              >
                <div className="relative w-full h-full transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden glass-card">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 via-background/50 to-transparent backdrop-blur-sm">
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 glass-card rounded-2xl p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} className="glass-card border-primary/20 text-foreground">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Section fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
