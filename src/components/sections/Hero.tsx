import { Button } from "@/components/ui/button";
import { Lightbulb, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-coder.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Image */}
        <div className="order-2 md:order-1 animate-fade-in-up">
          <div className="relative">
            <img
              src={heroImage}
              alt="Coder silhouette with colorful paint splash"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="order-1 md:order-2 space-y-8 animate-slide-in-right">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Turning Vision Into Reality With{" "}
            <span className="gradient-text">Code And Collaboration</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Building a strong coding culture at SVIT and producing industry-ready developers through innovation, mentorship, and hands-on experience.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group"
            >
              Join Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Explore Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Rotating "Join Us" button */}
      <div className="absolute bottom-12 left-12 hidden lg:block">
        <div className="relative w-32 h-32 animate-rotate">
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 flex items-center justify-center">
            <span className="text-xs font-bold text-center">
              JOIN<br />US
            </span>
          </div>
        </div>
      </div>

      {/* Pulsing light bulb */}
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center pulse-glow">
          <Lightbulb className="w-10 h-10 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
