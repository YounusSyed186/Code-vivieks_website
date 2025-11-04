"use client";

import { useState, useEffect } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { coreCommittee, teamCards, clubInfo } from "@/data/leadershipUi";
import {
  Crown,
  Users,
  Target,
  Trophy,
  Calendar,
  Mail,
  ExternalLink,
  ChevronDown,
  Star,
  Zap,
  TrendingUp,
  Award,
  GitBranch,
  Lightbulb,
  Shield,
  Code2,
  Rocket,
  Heart,
  Cpu,
  CircuitBoard,
  Binary,
  Network,
  Server,
  Code,
  Terminal
} from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";

export default function Teams() {
  const [expandedRole, setExpandedRole] = useState(null);
  const [activeTeam, setActiveTeam] = useState(0);
  const [viewMode, setViewMode] = useState("structure");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTeam, setHoveredTeam] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced cards with more interactive content
  const cards = clubInfo.teams.map((team, index) => (
    <Card
      key={index}
      index={index}
      layout
      card={{
        src: team.lead?.image || "/images/members/logo.png",
        title: team.name,
        category: `Lead: ${team.lead.name}`,
        content: (
          <div className="space-y-6">
            {/* Team Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 rounded-xl bg-neutral-800/60">
                <div className="text-lg font-bold text-blue-400">{team.members?.length || 8}+</div>
                <div className="text-xs text-neutral-400">Members</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-neutral-800/60">
                <div className="text-lg font-bold text-green-400">{team.projects || 12}+</div>
                <div className="text-xs text-neutral-400">Projects</div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-blue-400" />
              <h4 className="text-lg font-semibold">Focus Areas</h4>
            </div>
            <ul className="space-y-2 text-neutral-300 text-sm">
              {team.focus.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 mb-2 mt-6">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <h4 className="text-lg font-semibold">Key Achievements</h4>
            </div>
            <ul className="space-y-2 text-neutral-300 text-sm">
              {team.outcomes.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Star className="w-3 h-3 text-yellow-400" />
                  {item}
                </li>
              ))}
            </ul>

            {team.members && (
              <>
                <div className="flex items-center gap-2 mb-2 mt-6">
                  <Users className="w-4 h-4 text-green-400" />
                  <h4 className="text-lg font-semibold">Team Members</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {team.members.slice(0, 4).map((member, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-neutral-900/60 rounded-full text-xs hover:bg-white/40 transition-colors cursor-pointer"
                    >
                      150+
                    </span>
                  ))}
                  {team.members.length > 4 && (
                    <span className="px-2 py-1 bg-neutral-800/60 rounded-full text-xs text-neutral-400">
                      +{team.members.length - 4} more
                    </span>
                  )}
                </div>
              </>
            )}

            <button className="w-full mt-4 py-2 bg-neutral-900/60 hover:bg-white/40 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105">
              Meet the Team →
            </button>
          </div>
        ),
      }}
    />
  ));

  // Floating element component
  const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <div
      className="animate-float"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );

  // Tech Background Elements
  const TechBackground = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Circuit Board Patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 border border-blue-500/30 rounded-lg transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 border border-green-500/30 rounded-lg transform -rotate-12 animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-purple-500/30 rounded-lg transform rotate-90 animate-pulse delay-300"></div>
      </div>

      {/* Binary Code Rain */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400/30 text-xs font-mono animate-binary-fall"
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
          { icon: Code2, color: 'blue', size: 24, top: '15%', left: '5%', delay: 0 },
          { icon: Cpu, color: 'purple', size: 28, top: '25%', right: '10%', delay: 1 },
          { icon: CircuitBoard, color: 'green', size: 32, bottom: '30%', left: '8%', delay: 2 },
          { icon: Server, color: 'yellow', size: 26, top: '40%', right: '15%', delay: 1.5 },
          { icon: Network, color: 'pink', size: 30, bottom: '20%', right: '5%', delay: 0.5 },
          { icon: Terminal, color: 'cyan', size: 22, top: '60%', left: '12%', delay: 2.5 },
          { icon: Binary, color: 'orange', size: 20, bottom: '40%', right: '25%', delay: 3 },
        ].map(({ icon: Icon, color, size, top, left, right, bottom, delay }, index) => (
          <div
            key={index}
            className={`absolute text-${color}-400/20 animate-float-slow`}
            style={{
              top,
              left,
              right,
              bottom,
              animationDelay: `${delay}s`
            }}
          >
            <Icon size={size} />
          </div>
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500" />

      {/* Connection Lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-2/3 left-2/3 w-px h-24 bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse delay-700"></div>
      </div>
    </div>
  );

  // Tech Stats Component
  const TechStats = () => (
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4">
        <h4 className="text-sm font-semibold text-white/80 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-blue-400" />
          System Status
        </h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-white/60">Leadership API</span>
            <span className="text-green-400 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Online
            </span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-white/60">Team Sync</span>
            <span className="text-green-400">100%</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-white/60">Projects</span>
            <span className="text-blue-400">Active</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-white/60">Members</span>
            <span className="text-purple-400">Growing</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen py-24 space-y-32 container mx-auto px-6 text-white overflow-hidden relative">

      {/* Enhanced Tech Background */}
      <TechBackground />

      {/* Tech Stats Panel */}
      <TechStats />

      {/* Enhanced Main Heading */}
      <div className="text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-xl -z-10"></div>

        {/* Animated Code Brackets */}
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-6xl text-blue-400/30 font-mono animate-pulse">
          {'{'}
        </div>
        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-6xl text-blue-400/30 font-mono animate-pulse delay-1000">
          {'}'}
        </div>

        <FloatingElement delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight relative">
            <Code2 className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-8 h-8 text-blue-400/50 animate-pulse" />
            Club <span className="gradient-text animate-gradient">Leadership</span>
            <Cpu className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-8 text-purple-400/50 animate-pulse" />
          </h1>
        </FloatingElement>

        <FloatingElement delay={0.4}>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-12 relative">
            <Terminal className="absolute -left-8 top-0 w-5 h-5 text-green-400/50 animate-pulse" />
            Meet the passionate individuals and dedicated teams that drive innovation
            and excellence at <span className="text-blue-400 font-semibold">CODE VIVEKS</span>
            <Server className="absolute -right-8 bottom-0 w-5 h-5 text-yellow-400/50 animate-pulse" />
          </p>
        </FloatingElement>

        {/* Enhanced Stats Overview with Tech Elements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto relative">
          {/* Animated Connection Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -z-10"></div>

          {[
            { value: coreCommittee.length, label: "Core Members", color: "text-blue-400", icon: Crown, tech: Cpu },
            { value: clubInfo.teams.length, label: "Specialized Teams", color: "text-green-400", icon: Users, tech: Network },
            {
              value: clubInfo.teams.reduce((acc, team) => acc + (team.members?.length || 30), 0),
              label: "Team Members",
              color: "text-purple-400",
              icon: GitBranch,
              tech: Server
            },
            { value: "2025", label: "Active Since", color: "text-yellow-400", icon: Award, tech: CircuitBoard }
          ].map((stat, index) => (
            <FloatingElement key={index} delay={0.6 + index * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-neutral-800/60 backdrop-blur-sm border border-white/10 hover:bg-neutral-900/60 hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden">
                {/* Animated Tech Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>

                <stat.icon className={`w-8 h-8 ${stat.color} mb-3 mx-auto group-hover:scale-110 transition-transform relative z-10`} />
                <stat.tech className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/5 group-hover:text-white/10 transition-colors duration-300" />
                <div className={`text-3xl font-bold ${stat.color} mb-2 relative z-10`}>{stat.value}</div>
                <div className="text-sm text-neutral-400 relative z-10">{stat.label}</div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-2xl transition-all duration-300"></div>
              </div>
            </FloatingElement>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce mt-16">
          <ChevronDown size={24} className="text-purple-400" />
        </div>
      </div>

      {/* Rest of the component remains the same but with enhanced tech backgrounds for each section */}

      {/* Enhanced Core Committee */}
      <div className="relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-purple-500/40 rounded-full blur-3xl"></div>

        {/* Circuit Board Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-24 h-24 border border-green-500/20 rounded transform rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-500/20 rounded transform -rotate-45"></div>
        </div>

        <FloatingElement>
          <h2 className="text-4xl font-bold text-center flex items-center justify-center gap-3">
            <Crown className="w-8 h-8 text-yellow-400 animate-pulse" />
            Core Committee
            <Crown className="w-8 h-8 text-yellow-400 animate-pulse" />
          </h2>
        </FloatingElement>

        <div className="relative">
          <AnimatedTestimonials testimonials={coreCommittee} autoplay />
        </div>

        {/* Committee Stats with Tech Elements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
          {[
            { value: "4.8/5", label: "Satisfaction", icon: Star, tech: "API" },
            { value: "98%", label: "Retention", icon: Heart, tech: "DB" },
            { value: "50+", label: "Projects Led", icon: Rocket, tech: "CLI" },
            { value: "100%", label: "Active", icon: Zap, tech: "SYS" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-neutral-800/60 border border-white/10 relative group hover:bg-neutral-900/60 transition-all duration-300">
              <div className="absolute -top-1 -right-1 px-2 py-1 bg-black/60 rounded text-xs text-green-400 font-mono border border-green-500/30">
                {stat.tech}
              </div>
              <stat.icon className="w-5 h-5 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-lg font-bold text-white">{stat.value}</div>
              <div className="text-xs text-neutral-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced View Mode Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-2xl bg-neutral-900/60 backdrop-blur-sm border border-white/40 p-1">
          {[
            { id: "structure", label: "Structure", icon: Users, color: "blue" },
            { id: "timeline", label: "Timeline", icon: Calendar, color: "purple" },
            { id: "contact", label: "Contact", icon: Mail, color: "green" }
          ].map(({ id, label, icon: Icon, color }) => (
            <button
              key={id}
              onClick={() => setViewMode(id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${viewMode === id
                  ? `bg-${color}-600 text-white shadow-lg scale-105`
                  : "text-neutral-300 hover:text-white hover:bg-neutral-800/60"
                }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Organizational Structure View */}
      {viewMode === "structure" && (
        <div className="space-y-16 py-12">
          <div className="text-center space-y-4">
            <h3 className="text-4xl font-bold text-white">
              Organizational Structure
            </h3>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              A streamlined leadership hierarchy ensuring clarity, collaboration,
              and high-impact execution across all club functions.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto space-y-16">

            {/* PRESIDENT - Enhanced */}
            <div className="flex justify-center">
              <CometCard className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/40 to-blue-500/40 border border-purple-500/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                    <Crown className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {clubInfo.leadership.structure[0].role}
                  </h3>
                  <p className="text-neutral-200 font-medium text-lg">
                    {clubInfo.leadership.structure[0].name}
                  </p>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Provides strategic direction and oversees major initiatives.
                  </p>

                  {/* President Stats */}
                  <div className="flex justify-center gap-6 mt-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">100%</div>
                      <div className="text-xs text-neutral-400">Commitment</div>
                    </div>
                  </div>
                </div>
              </CometCard>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="h-12 w-1 bg-gradient-to-b from-purple-500 to-blue-500 animate-pulse" />
            </div>

            {/* Other Roles - Enhanced */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {clubInfo.leadership.structure.slice(1).map((position, index) => (
                <CometCard
                  key={index}
                  className={`p-6 transition-all duration-500 rounded-2xl cursor-pointer border backdrop-blur-sm
                    ${expandedRole === position.role
                      ? "bg-gradient-to-br from-indigo-500/40 to-purple-500/40 border-indigo-500 shadow-2xl scale-105"
                      : "bg-neutral-800/60 border-white/10 hover:bg-neutral-900/60 hover:scale-105"
                    }`}
                  onClick={() =>
                    setExpandedRole(expandedRole === position.role ? null : position.role)
                  }
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-bold text-white text-base">{position.role}</p>
                    <p className="text-sm text-neutral-300">{position.name}</p>

                    {/* Quick Stats */}
                    <div className="flex justify-between text-xs text-neutral-400">
                      <span>★ Lead</span>
                      <span>⚡ Active</span>
                    </div>
                  </div>
                </CometCard>
              ))}
            </div>

            {/* Enhanced Expanded Responsibilities */}
            {expandedRole && (
              <>
                <div className="flex justify-center">
                  <div className="h-8 w-1 bg-gradient-to-b from-indigo-500 to-purple-500" />
                </div>

                <CometCard className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">
                        {expandedRole} — Key Responsibilities
                      </h4>
                      <p className="text-sm text-neutral-300">
                        Core duties & ownership areas
                      </p>
                    </div>
                  </div>

                  <ul className="grid md:grid-cols-2 gap-4">
                    {clubInfo.leadership.structure
                      .find((s) => s.role === expandedRole)
                      ?.responsibilities.map((r, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 p-4 rounded-xl bg-neutral-800/60 hover:bg-neutral-900/60 transition-all duration-300 group cursor-pointer"
                        >
                          <span className="text-indigo-400 text-lg mt-0.5 group-hover:scale-110 transition-transform">•</span>
                          <span className="text-sm text-neutral-200 group-hover:text-white transition-colors">{r}</span>
                        </li>
                      ))}
                  </ul>

                  <div className="mt-6 p-4 rounded-xl bg-black/40 border border-white/10">
                    <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      Current Focus Areas
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {["Team Management", "Project Oversight", "Strategic Planning", "Member Development"].map((focus, i) => (
                        <span key={i} className="px-3 py-1 bg-neutral-900/60 rounded-full text-xs text-neutral-300 hover:bg-white/40 transition-colors">
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </CometCard>
              </>
            )}

            {/* Enhanced Teams Section */}
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="h-8 w-1 bg-gradient-to-b from-green-500 to-blue-500" />
              </div>

              <div className="text-center space-y-4">
                <h4 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
                  <Users className="w-8 h-8 text-green-400" />
                  Specialized Teams
                  <Users className="w-8 h-8 text-green-400" />
                </h4>
                <p className="text-neutral-400 text-lg">Focused groups driving real execution and innovation</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {clubInfo.teams.map((team, index) => (
                  <CometCard
                    key={index}
                    className="p-6 rounded-2xl bg-neutral-800/60 border border-white/10 hover:bg-neutral-900/60 hover:scale-105 transition-all duration-500 cursor-pointer backdrop-blur-sm group"
                    onClick={() => setActiveTeam(index)}
                    onMouseEnter={() => setHoveredTeam(index)}
                    onMouseLeave={() => setHoveredTeam(null)}
                  >
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-bold text-white text-base group-hover:text-green-400 transition-colors">{team.name}</p>
                      <p className="text-sm text-indigo-400 font-semibold">{team.lead.name}</p>

                      <div className="flex justify-center flex-wrap gap-1">
                        {team.focus.slice(0, 2).map((focus, i) => (
                          <span key={i} className="px-2 py-1 bg-neutral-900/60 rounded-full text-xs text-neutral-400 group-hover:bg-white/40 transition-colors">
                            {focus}
                          </span>
                        ))}
                        {team.focus.length > 2 && (
                          <span className="px-2 py-1 bg-neutral-800/60 rounded-full text-xs text-neutral-500">
                            +{team.focus.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Team Stats */}
                      <div className="flex justify-between text-xs text-neutral-500">
                        <span>👥 {team.members?.length || 8}</span>
                        <span>🚀 {team.projects || 12}+</span>
                        <span>⭐ Active</span>
                      </div>
                    </div>
                  </CometCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Timeline View */}
      {viewMode === "timeline" && (
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-4xl font-bold">Leadership Timeline</h3>
            <p className="text-neutral-300">Key events and milestones in our leadership journey</p>
          </div>

          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-lg"></div>

            {clubInfo.leadership.timeline?.map((event, index) => (
              <div key={index} className="relative flex items-start gap-6 mb-8 group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CometCard className="p-6 flex-1 rounded-2xl bg-neutral-800/60 backdrop-blur-sm border border-white/10 hover:border-white/40 hover:scale-105 transition-all duration-500 group-hover:bg-neutral-900/60">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{event.title}</h4>
                    <span className="px-3 py-1 bg-blue-500/40 text-blue-300 rounded-full text-sm font-semibold group-hover:bg-blue-500/30 transition-colors">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-neutral-300 mb-4 leading-relaxed">{event.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {event.tags?.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-neutral-900/60 rounded-full text-xs text-neutral-400 hover:bg-white/40 transition-colors cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CometCard>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Contact View */}
      {viewMode === "contact" && (
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-4xl font-bold">Get In Touch</h3>
            <p className="text-neutral-300">Reach out to our leadership team for collaborations, questions, or opportunities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubInfo.leadership.contact?.map((contact, index) => (
              <CometCard key={index} className="p-6 rounded-2xl bg-neutral-800/60 backdrop-blur-sm border border-white/10 hover:border-white/40 hover:scale-105 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{contact.role}</h4>
                    <p className="text-neutral-200 mb-2 font-medium">{contact.name}</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-2 group-hover:gap-3 duration-300"
                    >
                      {contact.email}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    {contact.responsibilities && (
                      <p className="text-sm text-neutral-400 mt-3 leading-relaxed">{contact.responsibilities}</p>
                    )}

                    {/* Availability Badge */}
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Available for inquiries</span>
                    </div>
                  </div>
                </div>
              </CometCard>
            ))}
          </div>

          {/* General Contact Card */}
          <CometCard className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 mt-12 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">General Inquiries</h4>
            <p className="text-neutral-300 mb-6">For general questions or to join our community</p>
            <a
              href="mailto:contact@codeviveks.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900/60 hover:bg-white/40 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              contact@codeviveks.com
            </a>
          </CometCard>
        </div>
      )}

      {/* Enhanced Teams Carousel */}
      <div className="mt-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-green-400 animate-pulse" />
            Specialized Teams
            <Users className="w-8 h-8 text-green-400 animate-pulse" />
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg">
            Explore our dedicated teams and their mission to drive innovation and excellence
            in every aspect of our club's activities
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-blue-500/40 flex items-center justify-center z-10 backdrop-blur-sm border border-blue-500/30">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
          </div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-purple-500/40 flex items-center justify-center z-10 backdrop-blur-sm border border-purple-500/30">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
          </div>
          <Carousel items={cards} />
        </div>
      </div>

      {/* Enhanced Call to Action */}
      <div className="text-center py-16">
        <CometCard className="p-12 rounded-3xl bg-gradient-to-br from-purple-500/40 via-blue-500/40 to-pink-500/40 border border-white/40 backdrop-blur-sm max-w-4xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Leadership?
          </h3>
          <p className="text-neutral-200 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
            Be part of the driving force behind CODE VIVEKS. Explore opportunities to lead,
            innovate, and make an impact in the tech community.
          </p>

          {/* CTA Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">15+</div>
              <div className="text-xs text-neutral-400">Positions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">Flexible</div>
              <div className="text-xs text-neutral-400">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">Remote</div>
              <div className="text-xs text-neutral-400">Friendly</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Apply for Leadership
            </button>
            <button className="px-8 py-4 border border-white/40 rounded-2xl font-semibold hover:bg-neutral-900/60 transition-all hover:scale-105 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Learn More About Teams
            </button>
          </div>
        </CometCard>
      </div>

    </section>
  );
}