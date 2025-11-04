import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, Zap, Cpu, Code2, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: Sparkles },
    { path: "/about", label: "About", icon: Cpu },
    { path: "/teams", label: "Teams", icon: Code2 },
    { path: "/events", label: "Events", icon: Zap },
    { path: "/projects", label: "Projects", icon: Code2 },
    { path: "/contact", label: "Contact", icon: ExternalLink },
  ];

  const socialLinks = [
    {
      type: "img",
      icon: GithubIcon,
      href: "https://github.com/CodeVivekSVIT2025-dev",
      label: "GitHub",
      color: "hover:bg-gray-500/20 hover:border-gray-400",
      followers: "2.5k+"
    },
    {
      type: "img",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/code-viveks-6b0111390/",
      label: "LinkedIn",
      color: "hover:bg-blue-500/20 hover:border-blue-400",
      followers: "1.2k+"
    },
    {
      type: "img",
      icon: Instagram,
      href: "https://instagram.com/code_viveks",
      label: "Instagram",
      color: "hover:bg-pink-500/20 hover:border-pink-400",
      followers: "3.8k+"
    },
    {
      type: "img",
      icon: MessageCircle,
      href: "#",
      label: "WhatsApp",
      color: "hover:bg-green-500/20 hover:border-green-400",
      followers: "500+"
    },
    {
      type: "img",
      icon: Discord,
      href: "https://discord.gg/QEeSSFaf",
      label: "Discord",
      color: "hover:bg-purple-500/20 hover:border-purple-400",
      followers: "800+"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "backdrop-blur-xl bg-white/10 dark:bg-black/20 border-b border-white/20 shadow-2xl"
          : "backdrop-blur-md bg-white/5 dark:bg-black/10 border-b border-white/10"
          }`}
      >
        <div className="w-full max-w-[1200px] mx-auto px-3 sm:px-6 overflow-hidden">


          <div className="flex items-center justify-between h-16">

            {/* Enhanced Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-orange-400 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
              >
                <img className="rounded-full w-6 h-6 sm:w-8 sm:h-8" src={Logo} alt="CODE VIVEKS Logo" />
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
              <motion.span
                className="font-bold text-sm sm:text-lg hidden sm:block bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                CODE VIVEKS
              </motion.span>
            </motion.div>

            {/* Desktop Nav */}
            <motion.ul
              className="hidden md:flex items-center gap-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const isHover = hoveredItem === item.path;

                return (
                  <li
                    key={item.path}
                    onMouseEnter={() => setHoveredItem(item.path)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      to={item.path}
                      className={`relative px-4 py-2 flex items-center gap-3 text-sm transition-colors duration-300 group
            ${isActive ? "text-purple-400" : "text-neutral-300 hover:text-purple-300"}
          `}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}

                      {/* Shared background glow (smooth cross-item transition) */}
                      {(isActive || isHover) && (
                        <motion.span
                          layoutId="nav-glow"
                          className="absolute inset-0 rounded-lg bg-purple-500/10 backdrop-blur-sm"
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                      )}

                      {/* Shared underline (smooth underline slide across items) */}
                      {(isActive || isHover) && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-orange-400"
                          transition={{ type: "spring", stiffness: 250, damping: 22 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </motion.ul>

            {/* Enhanced Social Links - Hidden on mobile */}
            <motion.div
              className="hidden md:flex items-center gap-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-xl border border-transparent hover:border-neutral-700 transition-all duration-300 ${social.color}
      w-12 h-12 flex items-center justify-center`}
                  >
                    <img
                      src={social.icon}
                      alt={social.label}
                      className="w-6 h-6 transition-transform group-hover:scale-110"
                    />

                    {/* Pulse hover glow */}
                    <span className="absolute inset-0 rounded-xl bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </Button>

                  {/* Tooltip */}
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.label} • {social.followers}
                  </div>
                </motion.a>
              ))}

              {/* Join Community Button */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="ml-2 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  size="sm"
                >
                  Join Us
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Social Icons - Minimal version */}
            <div className="flex md:hidden items-center gap-1 mr-2">
              {socialLinks.slice(0, 2).map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="md:hidden relative p-2 rounded-lg border border-white/20 hover:border-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-purple-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="text-purple-400" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Button glow */}
              <div className="absolute inset-0 rounded-lg bg-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? (window.scrollY / (document.body.scrollHeight - window.innerHeight)) : 0 }}
          transition={{ duration: 0.1 }}
        />
      </motion.nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={closeSidebar}
            />

            {/* Sidebar */}
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-gray-900 to-black border-l border-purple-500/20 shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-orange-400 flex items-center justify-center">
                    <img className="rounded-full w-8 h-8" src={Logo} alt="CODE VIVEKS Logo" />
                  </div>
                  <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                    CODE VIVEKS
                  </span>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeSidebar}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X size={20} className="text-purple-400" />
                </motion.button>
              </div>

              {/* Navigation Items */}
              <div className="p-6">
                <motion.div
                  className="flex flex-col gap-2"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {navItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.div
                        key={item.path}
                        variants={itemVariants}
                      >
                        <Link
                          to={item.path}
                          className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${isActive
                            ? "bg-gradient-to-r from-purple-500/20 to-orange-500/20 text-purple-400 border border-purple-500/30"
                            : "text-gray-300 hover:bg-white/10 hover:text-purple-400"
                            }`}
                          onClick={closeSidebar}
                        >
                          <item.icon className="w-5 h-5 flex-shrink-0" />
                          <span className="font-medium">{item.label}</span>
                          {isActive && (
                            <motion.div
                              className="w-2 h-2 bg-purple-500 rounded-full ml-auto"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Social Links Section */}
                <motion.div
                  className="mt-8 pt-6 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-400" />
                    Connect With Us
                  </h3>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className={`flex items-center gap-3 p-3 rounded-lg border border-white/10 transition-all duration-300 ${social.color} hover:scale-105`}
                        onClick={closeSidebar}
                      >
                        <img
                          src={social.icon}
                          alt={social.label}
                          className="w-5 h-5"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-white truncate">
                            {social.label}
                          </div>
                          <div className="text-xs text-gray-400">
                            {social.followers}
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile Join Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white shadow-lg py-3 text-base font-semibold"
                      onClick={closeSidebar}
                    >
                      Join Our Community
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Footer */}
                <motion.div
                  className="mt-8 pt-6 border-t border-white/10 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-xs text-gray-500">
                    © 2024 CODE VIVEKS. All rights reserved.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Prevent body scroll when sidebar is open */}
      <style>
        {`
          body {
            overflow: ${isOpen ? 'hidden' : 'auto'};
          }
        `}
      </style>
    </>
  );
};

export default Navbar;