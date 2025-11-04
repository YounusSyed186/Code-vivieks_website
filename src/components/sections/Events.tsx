"use client";

import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { clubInfo } from "@/data/content";
import { 
  Calendar, 
  Clock, 
  Award, 
  Sparkles, 
  Users, 
  Code2, 
  Cpu, 
  Rocket, 
  Trophy,
  Star,
  Zap,
  TrendingUp,
  GitBranch,
  Lightbulb,
  Shield,
  Terminal,
  Server,
  Network,
  CircuitBoard,
  Binary,
  ExternalLink,
  MapPin,
  Video
} from "lucide-react";

const sectionIcons: any = {
  Weekly: Clock,
  "Bi-Weekly": Sparkles,
  Monthly: Calendar,
  Semester: Award,
  Annual: Trophy,
};

const sectionColors: any = {
  Weekly: "from-green-400 to-emerald-400",
  "Bi-Weekly": "from-blue-400 to-cyan-400",
  Monthly: "from-purple-400 to-pink-400",
  Semester: "from-orange-400 to-red-400",
  Annual: "from-yellow-400 to-amber-400",
};

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

const TimelineContent = React.memo(({ ev }: { ev: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="space-y-3 p-4 rounded-2xl bg-neutral-900/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
        <Calendar className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {ev.title}
        </h3>
        <p className="font-medium text-purple-300/80 text-sm">{ev.category}</p>
      </div>
    </div>
    
    <div className="flex items-center gap-2 text-sm text-neutral-400">
      <MapPin className="w-4 h-4" />
      {ev.location}
    </div>
    
    {ev.description && (
      <p className="text-sm text-neutral-300 leading-relaxed">{ev.description}</p>
    )}
    
    {/* Event Stats */}
    <div className="flex gap-4 pt-2">
      <div className="flex items-center gap-1 text-xs text-green-400">
        <Users className="w-3 h-3" />
        <span>50+ Attendees</span>
      </div>
      <div className="flex items-center gap-1 text-xs text-blue-400">
        <Zap className="w-3 h-3" />
        <span>Hands-on</span>
      </div>
    </div>
    
    <button className="w-full mt-3 py-2 bg-neutral-800/60 hover:bg-white/40 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
      <Video className="w-4 h-4" />
      Learn More
    </button>
  </motion.div>
));
TimelineContent.displayName = "TimelineContent";

const BentoHeader = React.memo(({ section }: { section: string }) => {
  const Icon = sectionIcons[section];
  return (
    <div className={`flex items-center gap-2 text-xs uppercase tracking-wide bg-gradient-to-r ${sectionColors[section]} bg-clip-text text-transparent font-semibold`}>
      <Icon size={14} /> {section} Events
    </div>
  );
});
BentoHeader.displayName = "BentoHeader";

// Tech Background Component
const TechBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
    {/* Animated Circuit Board Patterns */}
    <div className="absolute inset-0 opacity-15">
      <div className="absolute top-20 left-10 w-64 h-64 border border-purple-500/20 rounded-lg transform rotate-45 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-48 h-48 border border-blue-500/20 rounded-lg transform -rotate-12 animate-pulse delay-700"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-pink-500/20 rounded-lg transform rotate-90 animate-pulse delay-300"></div>
    </div>

    {/* Binary Code Rain */}
    <div className="absolute inset-0 opacity-8">
      {[...Array(25)].map((_, i) => (
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
        { icon: Code2, color: 'blue', size: 24, top: '10%', left: '5%', delay: 0 },
        { icon: Cpu, color: 'purple', size: 28, top: '20%', right: '8%', delay: 1 },
        { icon: CircuitBoard, color: 'green', size: 32, bottom: '25%', left: '6%', delay: 2 },
        { icon: Server, color: 'yellow', size: 26, top: '35%', right: '12%', delay: 1.5 },
        { icon: Network, color: 'pink', size: 30, bottom: '15%', right: '4%', delay: 0.5 },
      ].map(({ icon: Icon, color, size, top, left, right, bottom, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute text-${color}-400/15`}
          style={{ top, left, right, bottom }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3 + delay, repeat: Infinity, delay }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>

    {/* Grid Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

    {/* Animated Gradient Orbs */}
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500" />
  </div>
);

// Stats Overview Component
const EventStats = () => {
  const stats = [
    { value: "50+", label: "Events Yearly", icon: Calendar, color: "text-purple-400" },
    { value: "500+", label: "Participants", icon: Users, color: "text-blue-400" },
    { value: "98%", label: "Satisfaction", icon: Star, color: "text-yellow-400" },
    { value: "24/7", label: "Community", icon: Zap, color: "text-green-400" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <FloatingElement key={index} delay={0.8 + index * 0.1}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 rounded-2xl bg-neutral-900/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
          >
            <stat.icon className={`w-8 h-8 ${stat.color} mb-3 mx-auto group-hover:scale-110 transition-transform`} />
            <div className={`text-2xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
            <div className="text-sm text-neutral-400">{stat.label}</div>
          </motion.div>
        </FloatingElement>
      ))}
    </div>
  );
};

const Events = () => {
  const timelineData = React.useMemo(
    () =>
      clubInfo.events.timeline.map((ev) => ({
        title: ev.date,
        content: <TimelineContent ev={ev} />,
      })),
    []
  );

  const bentoItems = React.useMemo(() => {
    const eventSections = [
      { label: "Weekly", list: clubInfo.events.weekly },
      { label: "Bi-Weekly", list: clubInfo.events.biweekly },
      { label: "Monthly", list: clubInfo.events.monthly },
      { label: "Semester", list: clubInfo.events.semester },
      { label: "Annual", list: clubInfo.events.annual },
    ];
    return eventSections
      .filter((sec) => sec.list?.length)
      .flatMap((sec) =>
        sec.list.map((event) => ({
          section: sec.label,
          name: event.name,
          description: event.description,
          icon: sectionIcons[sec.label],
          color: sectionColors[sec.label],
        }))
      );
  }, []);

  // Featured Events
  const featuredEvents = [
    {
      title: "Annual Hackathon",
      description: "48-hour coding marathon with prizes and mentorship",
      participants: "200+",
      duration: "2 Days",
      icon: Trophy,
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      title: "Tech Conference",
      description: "Industry leaders sharing insights and trends",
      participants: "300+",
      duration: "1 Day",
      icon: Users,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Workshop Series",
      description: "Hands-on learning sessions on cutting-edge technologies",
      participants: "150+",
      duration: "Weekly",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen py-20 space-y-24 relative overflow-hidden">
      {/* Tech Background */}
      <TechBackground />

      {/* 🎉 ENHANCED HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto space-y-6 px-6"
      >
        <FloatingElement delay={0.2}>
          <div className="flex justify-center mb-4">
            <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
              🚀 Upcoming Events
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Club Events & Activities
          </h1>
        </FloatingElement>

        <FloatingElement delay={0.4}>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in our dynamic ecosystem of workshops, hackathons, and community gatherings. 
            Learn, build, and connect with fellow tech enthusiasts.
          </p>
        </FloatingElement>

        {/* Event Stats */}
        <FloatingElement delay={0.6}>
          <EventStats />
        </FloatingElement>

        {/* CTA Buttons */}
        <FloatingElement delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              View Calendar
            </button>
            <button className="px-8 py-4 border border-white/40 rounded-2xl font-semibold hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-3">
              <Users className="w-5 h-5" />
              Join Community
            </button>
          </div>
        </FloatingElement>
      </motion.div>

      {/* FEATURED EVENTS SECTION */}
      <section className="max-w-6xl mx-auto px-6">
        <FloatingElement delay={0.3}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Featured Events
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Don't miss our flagship events that bring the community together
            </p>
          </div>
        </FloatingElement>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredEvents.map((event, index) => (
            <FloatingElement key={index} delay={0.5 + index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative p-6 rounded-3xl bg-neutral-900/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
              >
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-r ${event.gradient} flex items-center justify-center shadow-lg`}>
                  <event.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 pr-16">{event.title}</h3>
                <p className="text-neutral-300 mb-4 leading-relaxed">{event.description}</p>
                
                <div className="flex justify-between text-sm text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {event.participants}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {event.duration}
                  </span>
                </div>
                
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </FloatingElement>
          ))}
        </div>
      </section>

      {/* ENHANCED TIMELINE SECTION */}
      <section className="max-w-6xl mx-auto px-6">
        <FloatingElement delay={0.4}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Event Timeline
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Track our upcoming events and plan your participation
            </p>
            <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
          </div>
        </FloatingElement>

        <div className="relative">
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* ENHANCED BENTO GRID SECTION */}
      <section className="max-w-6xl mx-auto px-6">
        <FloatingElement delay={0.5}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-4">
              All Activities & Workshops
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Comprehensive schedule of learning and networking opportunities
            </p>
          </div>
        </FloatingElement>

        <BentoGrid className="mt-8">
          {bentoItems.map((item, index) => (
            <motion.div
              key={`${item.section}-${item.name}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <BentoGridItem
                title={item.name}
                description={item.description}
                header={<BentoHeader section={item.section} />}
                className={`
                  hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] 
                  hover:-translate-y-2 
                  transition-all 
                  duration-300
                  backdrop-blur-sm
                  border
                  hover:border-white/20
                  ${
                    item.section === 'Annual' 
                      ? 'bg-gradient-to-br from-yellow-500/10 to-amber-500/10' 
                      : item.section === 'Semester'
                      ? 'bg-gradient-to-br from-orange-500/10 to-red-500/10'
                      : 'bg-neutral-900/40'
                  }
                `}
                icon={item.icon}
              />
            </motion.div>
          ))}
        </BentoGrid>
      </section>

      {/* COMMUNITY CTA SECTION */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <FloatingElement delay={0.6}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-12 rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-indigo-500/20 backdrop-blur-sm border border-white/20"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Events?
            </h3>
            <p className="text-neutral-300 mb-8 text-lg max-w-2xl mx-auto">
              Be part of our growing community. Learn new skills, meet like-minded people, 
              and build amazing projects together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                Register for Next Event
              </button>
              <button className="px-8 py-4 border border-white/40 rounded-2xl font-semibold hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-3">
                <ExternalLink className="w-5 h-5" />
                View Gallery
              </button>
            </div>
          </motion.div>
        </FloatingElement>
      </section>
    </div>
  );
};

export default React.memo(Events);