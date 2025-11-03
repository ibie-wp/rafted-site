import { GraduationCap, Lightbulb, Target, Briefcase } from "lucide-react";


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
      
      {/* Section fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
