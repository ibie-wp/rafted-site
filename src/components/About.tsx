import { GraduationCap, Lightbulb, Target, Briefcase, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitImg from "@/assets/portrait.jpg";

export function About() {
  return (
    <section id="about" className="section-spacing section-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              About Me
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Portrait Image */}
              <div className="relative w-64 h-80 flex-shrink-0">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img 
                    src={portraitImg} 
                    alt="Ibrahim Karlie portrait"
                    className="w-full h-full object-cover"
                  />
                  {/* Faded edge effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,25%,12%)] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed flex-1">
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

                {/* Download CV Button */}
                <div className="pt-4">
                  <Button asChild size="lg" className="gap-2">
                    <a 
                      href="/Ibrahim-Karlie-CV.pdf" 
                      download="Ibrahim-Karlie-CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-5 w-5" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
            {/* Education */}
            <div className="glass-card p-6 rounded-2xl hover:shadow-glow transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center backdrop-blur-sm">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Life Choices Academy</h4>
                  <p className="text-sm text-muted-foreground">Full Stack Web Development</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Comprehensive training in modern web technologies and development practices
                  </p>
                </div>
              </div>
            </div>

            {/* Key Skills */}
            <div className="glass-card p-6 rounded-2xl hover:shadow-glow transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center backdrop-blur-sm">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Core Strengths</h3>
              </div>
              <ul className="space-y-3">
                {["Planning & Coordination", "User Research", "Interface Design", "Team Communication"].map((skill, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* UX Focus */}
            <div className="glass-card p-6 rounded-2xl hover:shadow-glow transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center backdrop-blur-sm">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">UX Focus</h3>
              </div>
              <p className="text-muted-foreground">
                Passionate about translating complex ideas into simple, usable experiences. 
                I focus on understanding user needs and creating interfaces that just make sense.
              </p>
            </div>

            {/* Experience */}
            <div className="glass-card p-6 rounded-2xl hover:shadow-glow transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center backdrop-blur-sm">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Background</h3>
              </div>
              <p className="text-muted-foreground">
                Bringing technical knowledge from full-stack development into UX design, 
                helping bridge the gap between design vision and technical implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
