import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background-secondary">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center font-bold">
              CV
            </div>
            <span className="font-bold text-xl">CODE VIVEKS</span>
          </div>

          {/* Tagline */}
          <div className="text-center space-y-2">
            <p className="text-lg font-semibold gradient-text">
              Create. Build. Innovate.
            </p>
            <p className="text-muted-foreground">
              Swami Vivekananda Institute of Technology
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: MessageCircle, href: "#", label: "Discord" },
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 transition-all"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground pt-6 border-t border-border/30 w-full">
            <p>© {currentYear} CODE VIVEKS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
