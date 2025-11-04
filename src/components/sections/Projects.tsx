import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "AI Chatbot Assistant",
      description: "NLP-powered chatbot using TensorFlow and Python",
      tech: ["Python", "TensorFlow", "NLP", "Flask"],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Smart Home IoT System",
      description: "Arduino-based home automation with mobile app",
      tech: ["Arduino", "React Native", "MQTT", "Firebase"],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Code Judge Platform",
      description: "Online judge for competitive programming practice",
      tech: ["Next.js", "PostgreSQL", "Docker", "Redis"],
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool",
      tech: ["React", "Django", "WebSockets", "PostgreSQL"],
      gradient: "from-indigo-500/20 to-blue-500/20",
    },
    {
      title: "Weather Prediction ML",
      description: "Machine learning model for weather forecasting",
      tech: ["Python", "Scikit-learn", "Pandas", "FastAPI"],
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="container mx-auto">
        <div className="space-y-16">
          {/* Heading */}
          <div className="text-center animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions built by our talented members
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="glass-effect p-6 group cursor-pointer hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image with Coming Soon Overlay */}
                <div
                  className={`w-full h-48 rounded-xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center relative overflow-hidden group`}
                >
                  {/* Coming Soon Blur Overlay */}
                  <div className="absolute inset-0 backdrop-blur-md bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center text-white font-semibold text-lg z-20">
                    Coming Soon
                  </div>

                  {/* Hover Buttons */}
                  <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-10">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-background/80 hover:bg-background"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-background/80 hover:bg-background"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform">
                    💻
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
