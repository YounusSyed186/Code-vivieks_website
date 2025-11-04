import { Button } from "@/components/ui/button";
import { Lightbulb, ArrowRight, Users, Code, Rocket, Star, TrendingUp, Calendar, BookOpen } from "lucide-react";
import heroImage from "@/assets/homeImg.png";
import { useState, useEffect } from "react";
import { clubInfo } from "@/data/content";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
const navigate = useNavigate();


  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden">
        {/* Background gradient glow */}
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-l from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        </div>

        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left side - Image */}
          <div className={`order-2 md:order-1 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
            }`}>
            <div className="relative">
              <img
                src={heroImage}
                alt="Coder silhouette with colorful paint splash"
                className="w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              {/* Floating elements around image */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-bounce" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-bounce delay-300" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`order-1 md:order-2 space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'
            }`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>Join 150+ Developers at SVIT</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Turning Vision Into Reality With{" "}
                <span className="gradient-text animate-gradient">Code And Collaboration</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Building a strong coding culture at SVIT and producing industry-ready developers through innovation, mentorship, and hands-on experience.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold text-2xl">150+</span>
                <span className="text-muted-foreground">Members</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-150" />
                <span className="font-semibold text-2xl">50+</span>
                <span className="text-muted-foreground">Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300" />
                <span className="font-semibold text-2xl">25+</span>
                <span className="text-muted-foreground">Events</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group px-8 py-3 text-lg font-semibold"
              >
                Join Our Community
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg font-semibold"
              >
                <Code onClick={() => navigate("/projects")} className="mr-2 w-5 h-5" />
                Explore Projects
              </Button>
            </div>

            {/* Quick features */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3 text-sm">
                <Users className="w-5 h-5 text-green-400" />
                <span>Peer Learning</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Rocket className="w-5 h-5 text-blue-400" />
                <span>Real Projects</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <span>Mentorship</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>Industry Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rotating "Join Us" button */}
        <div className="absolute bottom-12 left-12 hidden lg:block">
          <div className="relative w-32 h-32 animate-rotate">
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 flex items-center justify-center hover:border-primary/60 transition-colors cursor-pointer">
              <span className="text-xs font-bold text-center">
                JOIN<br />US
              </span>
            </div>
          </div>
        </div>

        {/* Pulsing light bulb */}
        <div className="absolute bottom-12 right-12 hidden lg:block">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center pulse-glow hover:scale-110 transition-transform cursor-pointer">
            <Lightbulb className="w-10 h-10 text-primary" />
          </div>
        </div>

        {/* Scroll indicator */}
      </section>

      {/* Featured Events Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Upcoming <span className="gradient-text">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our workshops, hackathons, and coding sessions to level up your skills
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {clubInfo.events.featured.map((event, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{event.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {event.participants} participants
                  </span>
                  <Button variant="outline" size="sm">
                    Register
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
               onClick={() => navigate("/events")}
              variant="outline"
              size="lg"
            >
              View All Events
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5" />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Coding Journey</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our community of passionate developers and build amazing projects together
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="px-8 py-3 text-lg font-semibold">
                Become a Member
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg font-semibold">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;