import { Badge } from "./ui/badge";

const skillCategories = [
  {
    category: "Development",
    skills: ["HTML", "CSS", "JavaScript", "Vue.js"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Netlify", "Firebase"]
  },
  {
    category: "Design & UX",
    skills: ["UI/UX Fundamentals", "Responsive Design", "User Flows", "Wireframing"]
  },
  {
    category: "Soft Skills",
    skills: ["Team Collaboration", "Communication", "Agile Methodology", "Customer Service"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-spacing dark-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Skills & Technologies
            </h2>
            <p className="text-lg md:text-xl text-dark-section-foreground/70">
              Building with modern tools and user-centered thinking
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8 animate-fade-in-up">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold text-dark-section-foreground">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx}
                      variant="secondary"
                      className="text-sm px-4 py-2 bg-card hover:bg-card/80 transition-smooth"
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
