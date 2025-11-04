"use client";

import { useState } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { coreCommittee, teamCards, clubInfo } from "@/data/leadershipUi";
import { Crown, Users, Target, Trophy, Calendar, Mail, ExternalLink } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";

export default function Teams() {
  const [expandedRole, setExpandedRole] = useState(null);
  const [activeTeam, setActiveTeam] = useState(0);
  const [viewMode, setViewMode] = useState("structure"); // 'structure' | 'timeline' | 'contact'

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
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-blue-400" />
              <h4 className="text-lg font-semibold">Focus Areas</h4>
            </div>
            <ul className="space-y-1 text-neutral-300 text-sm">
              {team.focus.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>

            <div className="flex items-center gap-2 mb-2 mt-4">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <h4 className="text-lg font-semibold">Outcomes</h4>
            </div>
            <ul className="space-y-1 text-neutral-300 text-sm">
              {team.outcomes.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>

            {team.members && (
              <>
                <div className="flex items-center gap-2 mb-2 mt-4">
                  <Users className="w-4 h-4 text-green-400" />
                  <h4 className="text-lg font-semibold">Team Members</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {team.members.map((member, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        ),
      }}
    />
  ));

  return (
    <section className="min-h-screen py-24 space-y-32 container mx-auto px-6 text-white">

      {/* Main Heading with Enhanced Visuals */}
      <div className="text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-xl -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          Club <span className="gradient-text animate-gradient">Leadership</span>
        </h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          Meet the passionate individuals and dedicated teams that drive innovation
          and excellence at <span className="text-blue-400 font-semibold">CODE VIVEKS</span>
        </p>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-blue-400">{coreCommittee.length}</div>
            <div className="text-sm text-neutral-400 mt-1">Core Members</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-green-400">{clubInfo.teams.length}</div>
            <div className="text-sm text-neutral-400 mt-1">Specialized Teams</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-purple-400">
              {clubInfo.teams.reduce((acc, team) => acc + (team.members?.length || 0), 0)}
            </div>
            <div className="text-sm text-neutral-400 mt-1">Team Members</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-yellow-400">2024</div>
            <div className="text-sm text-neutral-400 mt-1">Active Since</div>
          </div>
        </div>
      </div>

      {/* Core Committee with Enhanced Layout */}
      <div className="relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
        <h2 className="text-4xl font-bold text-center flex items-center justify-center gap-3 mb-12">
          <Crown className="w-8 h-8 text-yellow-400" />
          Core Committee
          <Crown className="w-8 h-8 text-yellow-400" />
        </h2>
        <div className="relative">
          <AnimatedTestimonials testimonials={coreCommittee} autoplay />
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-1">
          {[
            { id: "structure", label: "Structure", icon: Users },
            { id: "timeline", label: "Timeline", icon: Calendar },
            { id: "contact", label: "Contact", icon: Mail }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setViewMode(id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${viewMode === id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-neutral-300 hover:text-white"
                }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Organizational Structure View */}
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

            {/* PRESIDENT */}
            <div className="flex justify-center">
              <CometCard className="p-8 rounded-2xl bg-neutral-900 border border-neutral-700 shadow-lg">
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-neutral-800 flex items-center justify-center">
                    <Crown className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {clubInfo.leadership.structure[0].role}
                  </h3>
                  <p className="text-neutral-300 font-medium">
                    {clubInfo.leadership.structure[0].name}
                  </p>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto">
                    Provides strategic direction and oversees major initiatives.
                  </p>
                </div>
              </CometCard>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="h-10 w-[2px] bg-indigo-500/40" />
            </div>

            {/* Other Roles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {clubInfo.leadership.structure.slice(1).map((position, index) => (
                <CometCard
                  key={index}
                  className={`p-6 transition-all rounded-2xl cursor-pointer border
            ${expandedRole === position.role
                      ? "bg-neutral-800 border-indigo-500 shadow-lg"
                      : "bg-neutral-900 border-neutral-700 hover:bg-neutral-800"
                    }`}
                  onClick={() =>
                    setExpandedRole(expandedRole === position.role ? null : position.role)
                  }
                >
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-neutral-800 flex items-center justify-center">
                      <Users className="w-5 h-5 text-indigo-400" />
                    </div>
                    <p className="font-semibold text-white text-sm">{position.role}</p>
                    <p className="text-xs text-neutral-400">{position.name}</p>
                  </div>
                </CometCard>
              ))}
            </div>

            {/* Expanded Responsibilities */}
            {expandedRole && (
              <>
                <div className="flex justify-center">
                  <div className="h-8 w-[2px] bg-indigo-500/40" />
                </div>

                <CometCard className="p-8 rounded-2xl bg-neutral-900 border border-neutral-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                      <Target className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {expandedRole} — Key Responsibilities
                      </h4>
                      <p className="text-sm text-neutral-400">
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
                          className="flex items-start gap-3 p-3 rounded-xl bg-neutral-800/50"
                        >
                          <span className="text-indigo-400 text-sm mt-0.5">•</span>
                          <span className="text-sm text-neutral-300">{r}</span>
                        </li>
                      ))}
                  </ul>
                </CometCard>
              </>
            )}

            {/* Teams */}
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="h-8 w-[2px] bg-indigo-500/40" />
              </div>

              <div className="text-center space-y-2">
                <h4 className="text-2xl font-bold text-white">Specialized Teams</h4>
                <p className="text-neutral-400">Focused groups driving real execution</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {clubInfo.teams.map((team, index) => (
                  <CometCard
                    key={index}
                    className="p-6 rounded-2xl bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 transition cursor-pointer"
                    onClick={() => setActiveTeam(index)}
                  >
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 mx-auto rounded-full bg-neutral-800 flex items-center justify-center">
                        <Users className="w-5 h-5 text-indigo-400" />
                      </div>
                      <p className="font-semibold text-white text-sm">{team.name}</p>
                      <p className="text-xs text-indigo-400">{team.lead.name}</p>

                      <div className="flex justify-center flex-wrap gap-1">
                        {team.focus.slice(0, 2).map((focus, i) => (
                          <span key={i} className="px-2 py-1 bg-neutral-800 rounded-full text-xs text-neutral-400">
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CometCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Timeline View */}
      {viewMode === "timeline" && (
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-4xl font-bold">Leadership Timeline</h3>
            <p className="text-neutral-300">Key events and milestones in our leadership journey</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {clubInfo.leadership.timeline?.map((event, index) => (
              <div key={index} className="relative flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 z-10 shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CometCard className="p-6 flex-1 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-white">{event.title}</h4>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-neutral-300 mb-3">{event.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {event.tags?.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 rounded-full text-xs text-neutral-400">
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

      {/* Contact View */}
      {viewMode === "contact" && (
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-4xl font-bold">Get In Touch</h3>
            <p className="text-neutral-300">Reach out to our leadership team</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {clubInfo.leadership.contact?.map((contact, index) => (
              <CometCard key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">{contact.role}</h4>
                    <p className="text-neutral-300 mb-1">{contact.name}</p>
                    <a href={`mailto:${contact.email}`} className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1">
                      {contact.email}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    {contact.responsibilities && (
                      <p className="text-sm text-neutral-400 mt-2">{contact.responsibilities}</p>
                    )}
                  </div>
                </div>
              </CometCard>
            ))}
          </div>
        </div>
      )}

      {/* Teams Carousel - Enhanced */}
      <div className="mt-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-green-400" />
            Specialized Teams
            <Users className="w-8 h-8 text-green-400" />
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Explore our dedicated teams and their mission to drive innovation and excellence
            in every aspect of our club's activities
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center z-10">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          </div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center z-10">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          </div>
          <Carousel items={cards} />
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16">
        <CometCard className="p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/20 backdrop-blur-sm max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Leadership?
          </h3>
          <p className="text-neutral-300 mb-8 text-lg max-w-2xl mx-auto">
            Be part of the driving force behind CODE VIVEKS. Explore opportunities to lead,
            innovate, and make an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg">
              Apply for Leadership
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-2xl font-semibold hover:bg-white/10 transition-all">
              Learn More About Teams
            </button>
          </div>
        </CometCard>
      </div>

    </section>
  );
}