import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Instagram, MessageCircle, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="container mx-auto">
        <div className="space-y-16">
          {/* Heading */}
          <div className="text-center animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to join our community or collaborate on a project? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="glass-effect p-8 rounded-2xl border border-primary/20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about yourself or your project idea..." 
                    rows={5}
                    className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              {/* Info Cards */}
              <div className="glass-effect p-6 rounded-2xl border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">codeviveks@svit.ac.in</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-2xl border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Swami Vivekananda Institute of Technology<br />
                      Secunderabad, Telangana
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-effect p-6 rounded-2xl border border-border/50">
                <h3 className="font-bold mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: MessageCircle, href: "#" },
                  ].map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary/10 hover:border-primary transition-all"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
