import aboutPortrait from "@/assets/about-portrait.png";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="container mx-auto">
        <div className="space-y-16">
          {/* Heading */}
          <div className="text-center animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Passion Fuels <span className="gradient-text">Purpose!</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left column - Biography */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold">Biography</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CODE VIVEKS is a student-led coding club at SVIT that empowers aspiring developers through mentorship, collaboration, and innovation. We are more than just a club – we're a community of passionate coders dedicated to excellence.
                </p>
                <p>
                  With 80+ active members and 6 specialized teams, we aim to produce industry-ready talent through projects, hackathons, and peer learning. From competitive programming to AI/ML, from web development to IoT, we cover the full spectrum of modern tech.
                </p>
                <p>
                  Our mission is to bridge the gap between academic learning and real-world application, preparing every member for successful careers in technology while fostering a culture of continuous learning and innovation.
                </p>
              </div>
            </div>

            {/* Right column - Portrait */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="relative">
                <div className="border-4 border-primary rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={aboutPortrait}
                    alt="Portrait of a coder"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="text-5xl font-black gradient-text mb-2">80+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <div className="text-5xl font-black gradient-text mb-2">6</div>
              <div className="text-muted-foreground">Specialized Teams</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <div className="text-5xl font-black gradient-text mb-2">20+</div>
              <div className="text-muted-foreground">Events Per Year</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
              <div className="text-5xl font-black gradient-text mb-2">100+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
