import { Button } from "@/components/ui/button";
import { Lightbulb, ArrowRight, Users, Code, Rocket, Star, TrendingUp, Calendar, BookOpen, ExternalLink } from "lucide-react";
import heroImage from "@/assets/homeImg.png";
import { useState, useEffect, useRef } from "react";
import { clubInfo } from "@/data/content";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeEvent, setActiveEvent] = useState(0);
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    // Auto rotate featured events
    const eventInterval = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % clubInfo.events.featured.length);
    }, 5000);

    return () => clearInterval(eventInterval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setMousePosition({ x, y });
    }
  };

  const handleJoinCommunity = () => {
    // Add your join community logic here
    console.log("Join community clicked");
    // You can add a modal, redirect to signup, etc.
  };

  const handleExploreProjects = () => {
    navigate("/projects");
  };

  const handleViewAllEvents = () => {
    navigate("/events");
  };

  const handleEventRegister = (eventIndex: number) => {
    console.log(`Register for event: ${clubInfo.events.featured[eventIndex].title}`);
    // Add registration logic here
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic background based on mouse position */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(59, 130, 246, 0.15) 0%, 
              rgba(147, 51, 234, 0.1) 30%, 
              transparent 70%)
          `
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-l from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-between pt-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10 w-full max-w-7xl">

          {/* Left side - Content */}
          <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
            }`}>
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4 hover:bg-primary/15 transition-colors cursor-pointer">
                <TrendingUp className="w-4 h-4" />
                <span>Join 150+ Developers at SVIT</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                Turning Vision Into Reality With{" "}
                <span className="gradient-text animate-gradient bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Code And Collaboration
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Building a strong coding culture at SVIT and producing industry-ready developers through innovation, mentorship, and hands-on experience.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 lg:gap-6 py-4">
              {[
                { value: "150+", label: "Members", color: "bg-green-400" },
                { value: "50+", label: "Projects", color: "bg-blue-400" },
                { value: "25+", label: "Events", color: "bg-purple-400" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2 group cursor-pointer">
                  <div className={`w-3 h-3 ${stat.color} rounded-full animate-pulse group-hover:scale-150 transition-transform`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  />
                  <span className="font-semibold text-2xl group-hover:text-primary transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleJoinCommunity}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/25 group px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Join Our Community
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleExploreProjects}
                className="border-2 border-primary text-primary hover:bg-primary/10 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Code className="mr-2 w-5 h-5" />
                Explore Projects
              </Button>
            </div>

            {/* Quick features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 pt-6">
              {[
                { icon: Users, text: "Peer Learning", color: "text-green-400" },
                { icon: Rocket, text: "Real Projects", color: "text-blue-400" },
                { icon: BookOpen, text: "Mentorship", color: "text-purple-400" },
                { icon: Star, text: "Industry Ready", color: "text-yellow-400" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm lg:text-base p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer group"
                >
                  <feature.icon className={`w-5 h-5 ${feature.color} group-hover:scale-110 transition-transform`} />
                  <span className="group-hover:text-primary transition-colors">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div
            className={`relative transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Coder silhouette with colorful paint splash"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto drop-shadow-2xl"
              />

              {/* Floating elements with hover effects */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-bounce group-hover:bg-yellow-400/30 transition-colors" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-bounce delay-300 group-hover:bg-blue-400/30 transition-colors" />

              {/* Interactive overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center p-6">
                <Button
                  variant="secondary"
                  className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  onClick={handleExploreProjects}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating interactive elements */}
        <div className="absolute bottom-8 left-4 lg:left-12 lg:bottom-12">
          <div className="relative w-24 h-24 lg:w-32 lg:h-32 animate-rotate hover:scale-110 transition-transform duration-300">
            <div
              className="absolute inset-0 rounded-full border-2 border-primary/30 flex items-center justify-center hover:border-primary/60 hover:bg-primary/5 transition-all cursor-pointer"
              onClick={handleJoinCommunity}
            >
              <span className="text-xs font-bold text-center text-primary">
                JOIN<br />US
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-4 lg:right-12 lg:bottom-12">
          <div
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/20 flex items-center justify-center pulse-glow hover:scale-110 hover:bg-primary/30 transition-all duration-300 cursor-pointer"
            onClick={() => navigate("/about")}
          >
            <Lightbulb className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Upcoming <span className="gradient-text bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our workshops, hackathons, and coding sessions to level up your skills
            </p>
          </div>

          {/* Events Carousel for mobile, Grid for desktop */}
          <div className="lg:hidden">
            <div className="relative overflow-hidden rounded-2xl bg-background shadow-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeEvent * 100}%)` }}
              >
                {clubInfo.events.featured.map((event, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-6">
                    <div className="bg-background rounded-2xl p-6 border hover:shadow-lg transition-all duration-300">
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
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEventRegister(index)}
                        >
                          Register
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile indicators */}
              <div className="flex justify-center gap-2 p-4">
                {clubInfo.events.featured.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${index === activeEvent ? 'bg-primary w-6' : 'bg-primary/30'
                      }`}
                    onClick={() => setActiveEvent(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {clubInfo.events.featured.map((event, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 lg:p-8 shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                onMouseEnter={() => setActiveEvent(index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {event.type}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors">
                  {event.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {event.participants} participants
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEventRegister(index)}
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Register
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleViewAllEvents}
              variant="outline"
              size="lg"
              className="group"
            >
              View All Events
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-cyan-500/5" />
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">Coding Journey</span>?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community of passionate developers and build amazing projects together
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                onClick={handleJoinCommunity}
                className="px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Become a Member
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/about")}
                className="px-8 py-3 text-lg font-semibold border-2 hover:scale-105 transition-transform"
              >
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