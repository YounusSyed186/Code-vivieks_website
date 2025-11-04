import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone,
  Send,
  Cpu,
  CircuitBoard,
  Binary,
  Code2,
  Server,
  Network,
  Zap,
  Rocket,
  Users,
  Calendar,
  Shield,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Floating element component
const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

// Tech Background Component
const TechBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
    {/* Animated Circuit Board Patterns */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-64 h-64 border border-blue-500/20 rounded-lg transform rotate-45 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-48 h-48 border border-purple-500/20 rounded-lg transform -rotate-12 animate-pulse delay-700"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-green-500/20 rounded-lg transform rotate-90 animate-pulse delay-300"></div>
    </div>

    {/* Binary Code Rain */}
    <div className="absolute inset-0 opacity-5">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-green-400/20 text-xs font-mono animate-binary-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </div>
      ))}
    </div>

    {/* Floating Tech Icons */}
    <div className="absolute inset-0">
      {[
        { icon: Code2, color: 'blue', size: 24, top: '20%', left: '5%', delay: 0 },
        { icon: Cpu, color: 'purple', size: 28, top: '30%', right: '8%', delay: 1 },
        { icon: CircuitBoard, color: 'green', size: 32, bottom: '35%', left: '6%', delay: 2 },
        { icon: Server, color: 'yellow', size: 26, top: '45%', right: '12%', delay: 1.5 },
        { icon: Network, color: 'pink', size: 30, bottom: '25%', right: '4%', delay: 0.5 },
      ].map(({ icon: Icon, color, size, top, left, right, bottom, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute text-${color}-400/10`}
          style={{ top, left, right, bottom }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3 + delay, repeat: Infinity, delay }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>

    {/* Grid Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

    {/* Animated Gradient Orbs */}
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500" />
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactStats = [
    { value: "< 24h", label: "Response Time", icon: Zap, color: "text-green-400" },
    { value: "100%", label: "Response Rate", icon: CheckCircle, color: "text-blue-400" },
    { value: "500+", label: "Community", icon: Users, color: "text-purple-400" },
    { value: "24/7", label: "Discord Active", icon: MessageCircle, color: "text-yellow-400" },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/CodeVivekSVIT2025-dev", 
      label: "GitHub",
      color: "hover:bg-gray-500/20 hover:border-gray-400",
      followers: "2.5k+"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/code-viveks-6b0111390/", 
      label: "LinkedIn",
      color: "hover:bg-blue-500/20 hover:border-blue-400",
      followers: "1.2k+"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/code_viveks", 
      label: "Instagram",
      color: "hover:bg-pink-500/20 hover:border-pink-400",
      followers: "3.8k+"
    },
    { 
      icon: MessageCircle, 
      href: "https://discord.gg/QEeSSFaf", 
      label: "Discord",
      color: "hover:bg-purple-500/20 hover:border-purple-400",
      followers: "800+"
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 relative overflow-hidden">
      {/* Tech Background */}
      <TechBackground />

      <div className="container mx-auto max-w-7xl">
        <div className="space-y-20">
          {/* Enhanced Heading */}
          <div className="text-center">
            <FloatingElement delay={0.1}>
              <div className="flex justify-center mb-4">
                <div className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                  💬 Let's Connect
                </div>
              </div>
              <h2 className="text-6xl md:text-7xl font-black mb-6">
                Get In <span className="gradient-text animate-gradient">Touch</span>
              </h2>
            </FloatingElement>

            <FloatingElement delay={0.2}>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                Ready to join our vibrant community, collaborate on innovative projects, or just say hello? 
                We're always excited to connect with fellow tech enthusiasts and potential collaborators!
              </p>
            </FloatingElement>

            {/* Contact Stats */}
            <FloatingElement delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
                {contactStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-2xl bg-neutral-900/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <stat.icon className={`w-6 h-6 ${stat.color} mb-2 mx-auto`} />
                    <div className={`text-lg font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-xs text-neutral-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </FloatingElement>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Enhanced Contact Form */}
            <FloatingElement delay={0.4}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass-effect p-8 rounded-3xl border border-white/20 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Animated Background Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border border-blue-500/30 rounded transform rotate-45 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border border-purple-500/30 rounded transform -rotate-45 animate-pulse delay-1000"></div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-neutral-300">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium mb-3 text-neutral-200">Full Name</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name" 
                        className="bg-neutral-900/50 border-white/20 focus:border-blue-500 text-white placeholder-neutral-500 h-12 rounded-xl"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-3 text-neutral-200">Email Address</label>
                      <Input 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com" 
                        className="bg-neutral-900/50 border-white/20 focus:border-blue-500 text-white placeholder-neutral-500 h-12 rounded-xl"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-3 text-neutral-200">Your Message</label>
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, collaboration idea, or just say hello..." 
                        rows={6}
                        className="bg-neutral-900/50 border-white/20 focus:border-blue-500 text-white placeholder-neutral-500 resize-none rounded-xl"
                        required
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-12 rounded-xl font-semibold text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </motion.div>
            </FloatingElement>

            {/* Enhanced Contact Info */}
            <div className="space-y-8">
              <FloatingElement delay={0.5}>
                {/* Info Cards */}
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="glass-effect p-6 rounded-2xl border border-white/20 backdrop-blur-sm hover:border-white/30 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-2 text-lg">Email Us</h3>
                        <p className="text-neutral-300 mb-2">codeviveks@svit.ac.in</p>
                        <p className="text-sm text-neutral-400">Typically respond within 2-4 hours</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="glass-effect p-6 rounded-2xl border border-white/20 backdrop-blur-sm hover:border-white/30 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-2 text-lg">Visit Us</h3>
                        <p className="text-neutral-300">
                          Swami Vivekananda Institute of Technology<br />
                          Secunderabad, Telangana - 500003
                        </p>
                        <p className="text-sm text-neutral-400 mt-2">Campus visits by appointment</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="glass-effect p-6 rounded-2xl border border-white/20 backdrop-blur-sm hover:border-white/30 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-2 text-lg">Quick Connect</h3>
                        <p className="text-neutral-300 mb-2">+91 XXXXXXXXXX</p>
                        <p className="text-sm text-neutral-400">Available for urgent inquiries</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </FloatingElement>

              {/* Enhanced Social Links */}
              <FloatingElement delay={0.6}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect p-6 rounded-2xl border border-white/20 backdrop-blur-sm"
                >
                  <h3 className="font-bold text-white mb-6 text-xl flex items-center gap-2">
                    <Network className="w-5 h-5 text-blue-400" />
                    Connect With Our Community
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-4 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 group ${social.color} cursor-pointer`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <social.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-white text-sm">{social.label}</div>
                            <div className="text-xs text-neutral-400">{social.followers} followers</div>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </FloatingElement>

              {/* Quick Actions */}
              <FloatingElement delay={0.7}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect p-6 rounded-2xl border border-white/20 backdrop-blur-sm"
                >
                  <h3 className="font-bold text-white mb-4 text-lg">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start h-12 rounded-xl border-white/20 hover:bg-white/10">
                      <Calendar className="w-4 h-4 mr-3" />
                      Schedule a Meeting
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-12 rounded-xl border-white/20 hover:bg-white/10">
                      <Users className="w-4 h-4 mr-3" />
                      Join Discord Community
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-12 rounded-xl border-white/20 hover:bg-white/10">
                      <Rocket className="w-4 h-4 mr-3" />
                      Project Collaboration
                    </Button>
                  </div>
                </motion.div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;