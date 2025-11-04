import { Link, useLocation } from "react-router-dom";
import {  Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import GithubIcon from "@/assets/github.png";
import Linkedin from "@/assets/linkedin.png";
import Instagram from "@/assets/instagram.png";
import MessageCircle from "@/assets/whatsapp.png";
import Discord from "@/assets/Discord.png";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/teams", label: "Teams" },
    { path: "/events", label: "Events" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { type: "img", icon: GithubIcon, href: "https://github.com/CodeVivekSVIT2025-dev", label: "GitHub" },
    { type: "img", icon: Linkedin, href: "https://www.linkedin.com/in/code-viveks-6b0111390/", label: "LinkedIn" },
    { type: "img", icon: Instagram, href: "https://instagram.com/code_viveks", label: "Instagram" },
    { type: "img", icon: MessageCircle, href: "#", label: "whatsapp" },
    { type: "img", icon: Discord, href: "https://discord.gg/QEeSSFaf", label: "Discord" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 bg-white/5 dark:bg-black/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-orange-400 flex items-center justify-center font-bold text-sm text-white shadow-md">
              <img className="rounded-full" src={Logo} alt="" />
            </div>
            <span className="font-bold text-lg hidden sm:block">CODE VIVEKS</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm font-medium transition-colors hover:text-purple-500 group ${
                    isActive ? "text-purple-500" : "text-foreground"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social, i) => (
              <Button key={i} variant="ghost" size="icon" className="hover:text-purple-500 hover:bg-purple-500/10">
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.type === "icon" ? (
                    <social.icon className="w-5 h-5" />
                  ) : (
                    <img src={social.icon} alt={social.label} className="w-7 h-7" />
                  )}
                </a>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-white/10">
          <div className="flex flex-col gap-4 mt-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-foreground hover:text-purple-500 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <Button key={i} variant="ghost" size="icon">
                  <a href={social.href}>
                    {social.type === "icon" ? (
                      <social.icon className="w-5 h-5" />
                    ) : (
                      <img src={social.icon} className="w-5 h-5" />
                    )}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
