import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 gradient-accent -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="gradient-primary bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to learning from real-world projects and connecting with teams 
              who value clarity, empathy, and creativity.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
            <Card className="glass-effect p-8 space-y-4 shadow-soft hover:shadow-glow transition-smooth group">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-muted-foreground">Get in touch via email</p>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <a href="mailto:your.email@example.com">
                  Send Email
                </a>
              </Button>
            </Card>

            <Card className="glass-effect p-8 space-y-4 shadow-soft hover:shadow-glow transition-smooth group">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                <Linkedin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">LinkedIn</h3>
                <p className="text-muted-foreground">Connect professionally</p>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </Button>
            </Card>

            <Card className="glass-effect p-8 space-y-4 shadow-soft hover:shadow-glow transition-smooth group">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                <Github className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">GitHub</h3>
                <p className="text-muted-foreground">Check out my work</p>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View Projects
                </a>
              </Button>
            </Card>

            <Card className="glass-effect p-8 space-y-4 shadow-soft hover:shadow-glow transition-smooth group">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Resume</h3>
                <p className="text-muted-foreground">Download my CV</p>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <a href="#" download>
                  Download CV
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
