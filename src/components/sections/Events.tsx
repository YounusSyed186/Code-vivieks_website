import { Calendar, Code, Rocket, Users } from "lucide-react";

const Events = () => {
  const events = [
    {
      icon: Code,
      title: "Hackathons",
      description: "24-hour coding marathons to build innovative solutions",
      date: "Quarterly",
      color: "text-cyan-400",
    },
    {
      icon: Users,
      title: "Bootcamps",
      description: "Intensive training sessions on cutting-edge technologies",
      date: "Monthly",
      color: "text-blue-400",
    },
    {
      icon: Rocket,
      title: "Workshops",
      description: "Hands-on sessions with industry experts",
      date: "Bi-weekly",
      color: "text-purple-400",
    },
    {
      icon: Calendar,
      title: "Open-Source Month",
      description: "Contributing to global open-source projects",
      date: "Annually",
      color: "text-green-400",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="container mx-auto">
        <div className="space-y-16">
          {/* Heading */}
          <div className="text-center animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Featured <span className="gradient-text">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us in our journey of learning, building, and growing together
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-30 -translate-y-1/2" />

            {/* Events */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <event.icon className={`w-8 h-8 ${event.color}`} />
                    </div>
                    {/* Connector dot */}
                    <div className="hidden lg:block absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-y-1/2" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <div className="text-sm text-primary font-semibold">{event.date}</div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
