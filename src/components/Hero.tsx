import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm <span className="text-gradient">Cyuzuzo Jean Claude</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 animate-slide-up font-light" style={{ animationDelay: '0.2s' }}>
            Software Engineer & Data Analyst
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            I build elegant software solutions and transform complex data into actionable insights. 
            Passionate about the intersection of code and analytics.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary hover:text-primary transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary hover:text-primary transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:alex@example.com" className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary hover:text-primary transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-mono mb-2">scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
