import { Lightbulb, Flame, Globe, Brain, Cog, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Teams = () => {
  const teams = [
    {
      icon: Lightbulb,
      name: "Juniors Team",
      emoji: "💡",
      description: "Mentorship & Foundations",
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/50",
    },
    {
      icon: Flame,
      name: "Competitive Programming",
      emoji: "🔥",
      description: "CodeChef / Codeforces / ICPC prep",
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/50",
    },
    {
      icon: Globe,
      name: "Web Dev",
      emoji: "🌐",
      description: "MERN / Next.js / Django projects",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/50",
    },
    {
      icon: Brain,
      name: "AI / ML",
      emoji: "🤖",
      description: "TensorFlow / Kaggle / Research projects",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/50",
    },
    {
      icon: Cog,
      name: "DSA",
      emoji: "⚙️",
      description: "Interview prep & problem solving",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/50",
    },
    {
      icon: Zap,
      name: "IoT",
      emoji: "🔌",
      description: "Hardware + Software prototyping",
      color: "from-indigo-500/20 to-violet-500/20",
      borderColor: "border-indigo-500/50",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="container mx-auto">
        <div className="space-y-16">
          {/* Heading */}
          <div className="text-center animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Our <span className="gradient-text">Teams</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Six specialized teams working together to build excellence across all domains of technology
            </p>
          </div>

          {/* Teams Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team, index) => (
              <Card
                key={index}
                className={`glass-effect p-8 border-2 ${team.borderColor} hover:scale-105 transition-all duration-300 group cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${team.color} flex items-center justify-center text-4xl group-hover:scale-110 transition-transform`}>
                    {team.emoji}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {team.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {team.description}
                    </p>
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

export default Teams;
