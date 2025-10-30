import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-background"
    >
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Greeting with Animation */}
          <div className="space-y-2 animate-fade-in">
            <p className="text-xl md:text-2xl text-primary font-medium animate-bounce">
              Hi there 👋
            </p>
          </div>

          {/* Main Heading with Name */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              I'm <span className="text-primary">Ibrahim Karlie</span>
              <br />
              Building experiences
              <br />
              <span className="text-muted-foreground">with clarity</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              UX Designer focused on turning complex ideas into simple, 
              usable digital experiences. From full-stack development to 
              user-centered design.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              size="lg"
              onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-base px-8"
            >
              About Me
            </Button>
            <Button 
              size="lg"
              onClick={scrollToProjects}
              className="text-base px-8"
            >
              Featured Work
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
