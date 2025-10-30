import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website showcasing UX/UI design projects with interactive elements and smooth animations.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Responsive design with mobile-first approach",
      "Dark mode implementation",
      "Interactive project showcases"
    ],
    githubLink: "https://github.com/ibrahimkarlie", // Update with actual repo path later
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop" // Placeholder
  },
  {
    title: "E-commerce Web App",
    description: "Full-featured e-commerce platform with user authentication, product management, and shopping cart functionality.",
    technologies: ["Vue.js", "JavaScript", "Node.js", "MongoDB"],
    highlights: [
      "User authentication and authorization",
      "Product filtering and search",
      "Secure payment integration"
    ],
    githubLink: "https://github.com/ibrahimkarlie", // Update with actual repo path later
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop" // Placeholder
  },
  {
    title: "Task Management Dashboard",
    description: "Intuitive task management application with drag-and-drop functionality, team collaboration, and real-time updates.",
    technologies: ["React", "Redux", "Node.js", "Socket.io"],
    highlights: [
      "Real-time collaboration features",
      "Drag-and-drop task organization",
      "Team productivity analytics"
    ],
    githubLink: "https://github.com/ibrahimkarlie", // Update with actual repo path later
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" // Placeholder
  }
];

export function Projects() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <section id="projects" className="section-spacing dark-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Featured Work
            </h2>
            <p className="text-lg md:text-xl text-dark-section-foreground/70">
              Recent projects showcasing my journey from full-stack development 
              to UX-focused design thinking.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative h-[400px] perspective-1000"
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    flippedCard === index ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front of Card */}
                  <Card className="absolute w-full h-full backface-hidden bg-card border-border/50 overflow-hidden">
                    <div className="relative h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-3/4 object-cover"
                      />
                      <div className="p-6 h-1/4 flex items-center justify-center">
                        <h3 className="text-2xl font-bold text-center">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </Card>

                  {/* Back of Card */}
                  <Card className="absolute w-full h-full backface-hidden rotate-y-180 bg-card border-border/50 p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      asChild
                      className="w-full"
                    >
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
