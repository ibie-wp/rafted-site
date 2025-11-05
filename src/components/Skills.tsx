import { Badge } from "./ui/badge";

const skillCategories = [
  {
    category: "Development",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Vue.js", "Bootstrap", "Node.js", "PHP", "MySQL", "Oracle APEX"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "WordPress", "Figma", "AI Fundamentals & Prompting", "Trello", "Jira", "Notion"]
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
        </div>
      </div>
    </section>
  );
}
