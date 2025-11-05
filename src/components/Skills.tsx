import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import cloudEssentials from "@/assets/badges/cloud-essentials.png";
import dataAnalytics from "@/assets/badges/data-analytics.png";
import dataSciencePython from "@/assets/badges/data-science-python.png";
import cybersecurity from "@/assets/badges/cybersecurity.png";
import dataScience from "@/assets/badges/data-science.png";
import mobileApp from "@/assets/badges/mobile-app.png";
import scrum from "@/assets/badges/scrum.png";
import uiUx from "@/assets/badges/ui-ux.png";
import wordpress from "@/assets/badges/wordpress.png";

const skillCategories = [
  {
    category: "Development",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Vue.js", "Bootstrap", "Node.js", "PHP", "MySQL", "Oracle APEX"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "WordPress", "Figma", "AI Fundamentals & Prompting", "Canva", "Flutter"]
  },
  {
    category: "Design & UX",
    skills: ["Logo Creation", "Visual Design & Aesthetic Sense", "UX/UI Design Principles", "Wireframing & Prototyping", "Design Logic", "Usability Testing", "Accessibility Awareness"]
  },
  {
    category: "Soft Skills",
    skills: ["Team Coordination & Project Management", "Communication & Collaboration", "Customer Handling", "Leadership & Task Delegation", "Self-Upskilling & Continuous Learning", "Critical Thinking", "Problem Solving", "Time Management"]
  }
];

const badges = [
  { name: "IBM Cloud Essentials", image: cloudEssentials },
  { name: "Data Analytics Essentials", image: dataAnalytics },
  { name: "Data Science with Python", image: dataSciencePython },
  { name: "Introduction to Cybersecurity", image: cybersecurity },
  { name: "Introduction to Data Science", image: dataScience },
  { name: "Mobile App Developer", image: mobileApp },
  { name: "SCRUM & Agile Fundamentals", image: scrum },
  { name: "UI/UX Design Foundations", image: uiUx },
  { name: "WordPress Site Builder", image: wordpress },
];

const certificates = [
  { name: "Data Science with Python", url: "/certificates/data-science-python.pdf" },
  { name: "Data Analytics Essentials", url: "/certificates/data-analytics.pdf" },
  { name: "Introduction to Cybersecurity", url: "/certificates/cybersecurity.pdf" },
  { name: "Introduction to Data Science", url: "/certificates/data-science.pdf" },
];

export function Skills() {
  return (
    <section id="skills" className="section-spacing section-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Skills & Technologies
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground/70">
              Building with modern tools and user-centered thinking
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8 animate-fade-in-up">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx}
                      className="text-sm px-4 py-2 glass-card text-foreground hover:shadow-glow transition-smooth border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
          ))}
        </div>

        {/* Badges Section */}
        <div className="space-y-8 animate-fade-in-up">
          <h3 className="text-xl font-bold text-foreground text-center">
            Badges
          </h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-3xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {badges.map((badge, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card p-4 rounded-lg hover:shadow-glow transition-smooth">
                    <img
                      src={badge.image}
                      alt={badge.name}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-center mt-2 text-muted-foreground">
                      {badge.name}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Certificates Section */}
        <div className="space-y-8 animate-fade-in-up">
          <h3 className="text-xl font-bold text-foreground text-center">
            Certificates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {certificates.map((certificate, index) => (
              <Button
                key={index}
                variant="outline"
                className="glass-card h-auto py-4 px-6 hover:shadow-glow transition-smooth border-primary/20"
                asChild
              >
                <a href={certificate.url} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2 justify-center w-full">
                    <span className="text-sm">{certificate.name}</span>
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
