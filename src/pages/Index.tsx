import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Teams from "@/components/sections/Teams";
import Events from "@/components/sections/Events";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="teams">
          <Teams />
        </div>
        <div id="events">
          <Events />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
