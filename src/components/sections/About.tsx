"use client";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Users, Code2, Rocket, Heart, Shield, Cloud, Smartphone, Cpu } from "lucide-react";
import Image from "next/image";
import { clubInfo } from "@/data/content";

// Enhanced Bento Components
const BentoGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-7xl mx-auto py-8 md:py-14 px-4 md:px-6">
    {children}
  </div>
);

const BentoItem = ({ title, description, icon }: { title: string; description: string; icon?: React.ReactNode }) => (
  <div className="p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm hover:scale-[1.02] group h-full">
    <div className="flex items-start mb-3 md:mb-4">
      {icon && <div className="mr-3 md:mr-4 text-primary mt-1">{icon}</div>}
      <h4 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
        {title}
      </h4>
    </div>
    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{description}</p>
  </div>
);

const Stat = ({ value, label, icon }: { value: string; label: string; icon?: React.ReactNode }) => (
  <div className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-background/60 backdrop-blur-sm border border-border hover:shadow-lg transition-all h-full">
    {icon && <div className="flex justify-center mb-2 md:mb-3 text-primary">{icon}</div>}
    <div className="text-2xl md:text-3xl lg:text-4xl font-black gradient-text mb-1 md:mb-2">{value}</div>
    <div className="text-muted-foreground text-xs md:text-sm font-medium leading-tight">{label}</div>
  </div>
);

const About = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    const handleScroll = () => {
      if (!container) return;
      const slideWidth = window.innerWidth;
      const newSlide = Math.round(container.scrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const slide = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const slideWidth = window.innerWidth;
    const currentScroll = containerRef.current.scrollLeft;
    const maxScroll = containerRef.current.scrollWidth - slideWidth;
    
    let targetScroll;
    if (direction === "right") {
      targetScroll = Math.min(currentScroll + slideWidth, maxScroll);
    } else {
      targetScroll = Math.max(currentScroll - slideWidth, 0);
    }
    
    containerRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
  };

  const goToSlide = (index: number) => {
    if (!containerRef.current) return;
    const slideWidth = window.innerWidth;
    containerRef.current.scrollTo({ left: slideWidth * index, behavior: "smooth" });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Navigation Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2 md:space-x-3">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? "bg-primary scale-125" 
                : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => slide("left")} 
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-lg shadow-xl transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} md={28} />
      </button>
      <button 
        onClick={() => slide("right")} 
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-lg shadow-xl transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Next slide"
      >
        <ChevronRight size={20} md={28} />
      </button>

      <div 
        ref={containerRef} 
        className="h-screen w-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* SECTION 1 - Hero */}
        <section className="min-w-full h-full snap-center flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-20">
          <div className="text-center max-w-6xl space-y-6 md:space-y-10">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
              <Heart size={14} className="mr-2 text-primary" />
              <span className="text-xs md:text-sm font-medium text-primary">Student-Led Tech Community</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              CODE <span className="gradient-text">VIVEKS</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto px-4">
              A vibrant ecosystem where curiosity meets collaboration, and learning transforms into building.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto pt-6 md:pt-8 px-4">
              <div className="p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl bg-background/60 border border-border">
                <Code2 className="w-6 h-6 md:w-8 md:h-8 text-primary mb-2 md:mb-3 mx-auto" />
                <p className="font-semibold text-sm md:text-base">Hands-On Learning</p>
              </div>
              <div className="p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl bg-background/60 border border-border">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-primary mb-2 md:mb-3 mx-auto" />
                <p className="font-semibold text-sm md:text-base">Peer Collaboration</p>
              </div>
              <div className="p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl bg-background/60 border border-border">
                <Rocket className="w-6 h-6 md:w-8 md:h-8 text-primary mb-2 md:mb-3 mx-auto" />
                <p className="font-semibold text-sm md:text-base">Real Projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 - What We Do */}
        <section className="min-w-full h-full snap-center flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl w-full">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">What We Do</h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                  We're not just another tech club. We're a launchpad for builders, creators, and innovators. 
                  Through structured programs and real-world projects, we transform theoretical knowledge into practical expertise.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-background/60 border border-border">
                  <div className="text-xl md:text-2xl font-bold text-primary mb-1 md:mb-2">Weekly</div>
                  <p className="text-xs md:text-sm text-muted-foreground">Skill Development Sessions</p>
                </div>
                <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-background/60 border border-border">
                  <div className="text-xl md:text-2xl font-bold text-primary mb-1 md:mb-2">Monthly</div>
                  <p className="text-xs md:text-sm text-muted-foreground">Hackathons & Challenges</p>
                </div>
                <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-background/60 border border-border">
                  <div className="text-xl md:text-2xl font-bold text-primary mb-1 md:mb-2">Continuous</div>
                  <p className="text-xs md:text-sm text-muted-foreground">Portfolio & GitHub Support</p>
                </div>
                <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-background/60 border border-border">
                  <div className="text-xl md:text-2xl font-bold text-primary mb-1 md:mb-2">Quarterly</div>
                  <p className="text-xs md:text-sm text-muted-foreground">Industry Expert Talks</p>
                </div>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="border-2 md:border-4 border-primary rounded-xl md:rounded-2xl overflow-hidden shadow-xl transform rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Code2 size={48} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Community Image</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-background border border-border rounded-lg md:rounded-2xl p-3 md:p-4 lg:p-6 shadow-xl">
                <div className="text-xl md:text-2xl lg:text-3xl font-black text-primary">2023</div>
                <div className="text-xs md:text-sm text-muted-foreground">Community Founded</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 - Mission & Stats */}
        <section className="min-w-full h-full snap-center flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-20 bg-gradient-to-tr from-background to-primary/10">
          <div className="text-center max-w-6xl space-y-8 md:space-y-16 w-full">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Our Mission: <span className="gradient-text">Make Builders</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto px-4">
                We believe the best way to learn is by creating. Our mission is to cultivate a generation of 
                problem-solvers who don't just consume technology, but shape it.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
              <Stat value="150+" label="Active Members" icon={<Users size={20} md={24} />} />
              <Stat value="5" label="Tech Divisions" icon={<Code2 size={20} md={24} />} />
              <Stat value="25+" label="Events / Year" icon={<Rocket size={20} md={24} />} />
              <Stat value="150+" label="Projects Built" icon={<Heart size={20} md={24} />} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 text-left max-w-5xl mx-auto px-4">
              <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-background/60 border border-border">
                <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3">Learn by Building</h4>
                <p className="text-xs md:text-sm text-muted-foreground">Move beyond tutorials to actual project development with mentor guidance.</p>
              </div>
              <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-background/60 border border-border">
                <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3">Collaborative Environment</h4>
                <p className="text-xs md:text-sm text-muted-foreground">Work in teams, share knowledge, and grow together with like-minded peers.</p>
              </div>
              <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-background/60 border border-border">
                <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3">Industry Ready</h4>
                <p className="text-xs md:text-sm text-muted-foreground">Develop skills that matter with real-world projects and industry exposure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 - Tech Divisions */}
        <section className="min-w-full h-full snap-center flex items-center justify-center px-4 sm:px-6">
          <div className="w-full max-w-7xl text-center">
            <div className="mb-8 md:mb-12 lg:mb-16 px-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Explore Our Divisions</h3>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                Dive deep into specialized tech domains with expert guidance and collaborative projects
              </p>
            </div>
            
            <BentoGrid>
              <BentoItem 
                title="Web Development" 
                description="Master frontend, backend, and full-stack development. Build responsive websites, web applications, and learn deployment strategies with modern frameworks like React, Next.js, and Node.js."
                icon={<Code2 size={20} md={24} />}
              />
              <BentoItem 
                title="AI & Machine Learning" 
                description="Explore artificial intelligence through hands-on projects. From model training to applied ML, work with real datasets and participate in cutting-edge research initiatives."
                icon={<Cpu size={20} md={24} />}
              />
              <BentoItem 
                title="Cybersecurity" 
                description="Dive into ethical hacking, system security, and vulnerability research. Participate in CTF competitions and learn to protect digital infrastructure from modern threats."
                icon={<Shield size={20} md={24} />}
              />
              <BentoItem 
                title="App Development" 
                description="Create cross-platform mobile applications using Flutter, React Native, and modern tooling. Learn UI/UX principles and publish apps to major app stores."
                icon={<Smartphone size={20} md={24} />}
              />
              <BentoItem 
                title="Cloud & DevOps" 
                description="Master infrastructure as code, CI/CD pipelines, automation, and scalability. Work with AWS, Docker, Kubernetes, and learn to deploy scalable applications."
                icon={<Cloud size={20} md={24} />}
              />
              <BentoItem 
                title="Competitive Programming" 
                description="Sharpen problem-solving skills through Data Structures & Algorithms. Prepare for coding interviews and compete in programming contests worldwide."
                icon={<Rocket size={20} md={24} />}
              />
            </BentoGrid>
          </div>
        </section>

        {/* SECTION 5 - Community Impact */}
        <section className="min-w-full h-full snap-center flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="max-w-6xl w-full space-y-8 md:space-y-12 lg:space-y-16">
            <div className="text-center space-y-4 md:space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Community Impact</h3>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                See how our members transform from beginners to skilled developers and innovators
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="space-y-6 md:space-y-8">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-background border border-border shadow-lg">
                  <div className="text-2xl md:text-3xl font-black text-primary mb-1 md:mb-2">12x</div>
                  <div className="text-lg md:text-xl font-semibold mb-2">Increase in Technical Skills</div>
                  <p className="text-muted-foreground text-sm md:text-base">Members show significant improvement in coding abilities within 6 months</p>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-background border border-border shadow-lg">
                  <div className="text-2xl md:text-3xl font-black text-primary mb-1 md:mb-2">45%</div>
                  <div className="text-lg md:text-xl font-semibold mb-2">Internship Placement Rate</div>
                  <p className="text-muted-foreground text-sm md:text-base">Active members secure tech internships at leading companies</p>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-background border border-border shadow-lg">
                  <div className="text-2xl md:text-3xl font-black text-primary mb-1 md:mb-2">98%</div>
                  <div className="text-lg md:text-xl font-semibold mb-2">Member Satisfaction</div>
                  <p className="text-muted-foreground text-sm md:text-base">Students report high satisfaction with learning experience and community support</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Success Stories</h4>
                <div className="space-y-4">
                  <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-background/60 border border-border">
                    <p className="text-muted-foreground italic text-sm md:text-base">"CODE VIVEKS transformed my learning journey. From zero coding experience to building full-stack applications in 6 months!"</p>
                    <div className="font-semibold mt-3 text-sm md:text-base">- Sarah M., Web Development Track</div>
                  </div>
                  <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-background/60 border border-border">
                    <p className="text-muted-foreground italic text-sm md:text-base">"The collaborative projects and mentor guidance helped me land my first internship at a tech startup."</p>
                    <div className="font-semibold mt-3 text-sm md:text-base">- Alex K., AI/ML Division</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 - Join Us */}
        <section className="min-w-full h-full snap-center flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-20">
          <div className="text-center max-w-4xl space-y-8 md:space-y-12 w-full">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">Ready to Build?</h3>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground px-4">
                Join our community of builders and start your journey from learner to creator
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto px-4">
              <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-primary text-primary-foreground shadow-lg">
                <div className="text-xl md:text-2xl font-black mb-1 md:mb-2">1</div>
                <div className="font-semibold text-sm md:text-base">Join Our Community</div>
                <p className="text-xs md:text-sm opacity-90 mt-2">Connect with fellow builders</p>
              </div>
              <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-primary text-primary-foreground shadow-lg">
                <div className="text-xl md:text-2xl font-black mb-1 md:mb-2">2</div>
                <div className="font-semibold text-sm md:text-base">Choose Your Track</div>
                <p className="text-xs md:text-sm opacity-90 mt-2">Pick a division that excites you</p>
              </div>
              <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-primary text-primary-foreground shadow-lg">
                <div className="text-xl md:text-2xl font-black mb-1 md:mb-2">3</div>
                <div className="font-semibold text-sm md:text-base">Start Building</div>
                <p className="text-xs md:text-sm opacity-90 mt-2">Create amazing projects</p>
              </div>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-foreground text-background rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Join CODE VIVEKS Today
              </button>
              <p className="text-muted-foreground text-xs md:text-sm px-4">
                Open to all students passionate about technology and innovation
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;