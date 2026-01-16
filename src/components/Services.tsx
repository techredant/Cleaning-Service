import { Sparkles, TreePine, Home, Building2, Brush, Droplets } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough cleaning of every corner, perfect for move-ins or seasonal refreshes.",
    color: "primary",
  },
  {
    icon: TreePine,
    title: "Landscaping",
    description: "Professional lawn care, garden design, and outdoor maintenance services.",
    color: "primary",
  },
  {
    icon: Home,
    title: "Home Management",
    description: "Complete property care including maintenance, repairs, and organization.",
    color: "primary",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Office and commercial space cleaning tailored to your business needs.",
    color: "accent",
  },
  {
    icon: Brush,
    title: "Regular Cleaning",
    description: "Weekly or bi-weekly cleaning to keep your space consistently fresh.",
    color: "primary",
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    description: "Exterior cleaning for driveways, patios, decks, and building facades.",
    color: "accent",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything Your Space Needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From deep cleaning to landscaping, we connect you with skilled professionals for all your home and business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                  service.color === "accent" ? "bg-accent/10" : "bg-primary/10"
                }`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.color === "accent" ? "text-accent" : "text-primary"
                  }`}
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
