import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Portfolio Website",
    period: "Feb 2024 – Mar 2024",
    description: "Personal portfolio website showcasing projects and skills with responsive design for optimal mobile experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    highlights: [
      "Responsive design principles",
      "Mobile-first approach",
      "Hosted on GitHub Pages"
    ]
  },
  {
    title: "E-commerce Web App",
    period: "Apr 2024 – Jun 2024",
    description: "Collaborative Vue.js project simulating a full-featured e-commerce platform with team-based development practices.",
    technologies: ["Vue.js", "JavaScript", "Git", "GitHub"],
    highlights: [
      "Agile methodology",
      "User flows & wireframing",
      "Version control with Git"
    ]
  }
];

export function Projects() {
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
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-card border-border/50 p-8 space-y-6 hover:shadow-card transition-smooth group"
              >
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.period}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
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
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
