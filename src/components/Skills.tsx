import { Card } from "./ui/card";
import { 
  Palette, 
  Users, 
  Target, 
  MessageSquare, 
  Layout, 
  Heart 
} from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "UX Strategy",
    description: "User experience planning and product thinking"
  },
  {
    icon: Layout,
    title: "Interface Design",
    description: "Creating simple, usable digital experiences"
  },
  {
    icon: Users,
    title: "Team Coordination",
    description: "Planning and organizing collaborative work"
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "Translating between people and projects"
  },
  {
    icon: Target,
    title: "User Research",
    description: "Understanding how users interact with products"
  },
  {
    icon: Heart,
    title: "Empathy & Clarity",
    description: "User-driven decisions with creative solutions"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="gradient-primary bg-clip-text text-transparent">
              Skills & Strengths
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Focused on user experience, design thinking, and collaborative project work
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={index}
                  className="glass-effect p-6 space-y-4 shadow-soft hover:shadow-glow transition-smooth group"
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
