import AboutSection from "@/components/sections/About";
import PageTransition from "@/components/PageTransition";

const About = () => {
  return (
    <div className="h-screen overflow-hidden"> {/* ← add this wrapper */}
      <PageTransition>
        <AboutSection />
      </PageTransition>
    </div>
  );
};

export default About;
