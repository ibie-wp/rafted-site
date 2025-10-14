import { Card } from "./ui/card";
import { GraduationCap, Lightbulb, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 gradient-accent -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Life Choices Academy graduate with a background in full-stack web development, 
              now shifting my focus toward UX and product design.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8 animate-fade-in-up">
            <Card className="glass-effect p-8 shadow-soft">
              <p className="text-lg leading-relaxed text-foreground">
                I enjoy translating between people and projects — helping teams make clear, 
                user-driven decisions and turning complex ideas into simple, usable experiences.
              </p>
            </Card>

            <Card className="glass-effect p-8 shadow-soft">
              <p className="text-lg leading-relaxed text-foreground">
                I'm drawn to roles where communication, structure, and design thinking meet. 
                My strengths lie in planning, team coordination, and understanding how users 
                interact with digital products.
              </p>
            </Card>

            <Card className="glass-effect p-8 shadow-soft">
              <p className="text-lg leading-relaxed text-foreground">
                Right now, I'm building my portfolio around user experience strategy, 
                interface design, and collaborative project work. Always open to learning 
                from real-world projects and connecting with teams who value clarity, 
                empathy, and creativity.
              </p>
            </Card>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <Card className="glass-effect p-6 space-y-3 shadow-soft hover:shadow-glow transition-smooth group">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
              <p className="text-muted-foreground">
                Life Choices Academy graduate with full-stack development foundation
              </p>
            </Card>

            <Card className="glass-effect p-6 space-y-3 shadow-soft hover:shadow-glow transition-smooth group">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                <Lightbulb className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Design Focus</h3>
              <p className="text-muted-foreground">
                Shifting toward UX and product design with user-centered approach
              </p>
            </Card>

            <Card className="glass-effect p-6 space-y-3 shadow-soft hover:shadow-glow transition-smooth group">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="text-muted-foreground">
                Strong team coordination and communication skills
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
