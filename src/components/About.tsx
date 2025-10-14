import { Card } from "./ui/card";
import { GraduationCap, Code, Users, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Life Choices Academy Full-Stack Web Development Bootcamp graduate (2024)"
  },
  {
    icon: Code,
    title: "Technical Skills",
    description: "HTML, CSS, JavaScript, Vue.js, Firebase, Git, GitHub, Netlify"
  },
  {
    icon: Users,
    title: "UX Focus",
    description: "Shifting focus to user experience strategy and interface design"
  },
  {
    icon: Briefcase,
    title: "Experience",
    description: "Strong communication and customer service background"
  }
];

export function About() {
  return (
    <section id="about" className="section-spacing bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                I'm a Life Choices Academy graduate with a background in full-stack 
                web development, now shifting my focus toward UX and product design.
              </p>
              
              <p>
                I enjoy translating between people and projects — helping teams make 
                clear, user-driven decisions and turning complex ideas into simple, 
                usable experiences.
              </p>
              
              <p>
                I'm drawn to roles where communication, structure, and design thinking 
                meet. My strengths lie in planning, team coordination, and understanding 
                how users interact with digital products.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 space-y-4 border-border/50 hover:shadow-card transition-smooth"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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
