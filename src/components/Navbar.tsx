import { useState } from "react";
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "teams", label: "Teams" },
    { id: "events", label: "Events" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageCircle, href: "#", label: "Discord" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-sm">
              CV
            </div>
            <span className="font-bold text-lg hidden sm:block">CODE VIVEKS</span>
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative text-sm font-medium transition-colors hover:text-primary group ${
                  activeSection === item.id ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
