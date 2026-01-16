import ProviderCard from "./ProviderCard";

const providers = [
  {
    name: "Sarah's Sparkle Clean",
    services: ["Deep Cleaning", "Regular Cleaning"],
    rating: 4.9,
    reviews: 127,
    location: "Downtown Metro",
    phone: "+1 555-0123",
    hourlyRate: "Ksh. 4000",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    verified: true,
  },
  {
    name: "GreenThumb Landscaping",
    services: ["Landscaping", "Lawn Care"],
    rating: 4.8,
    reviews: 89,
    location: "Suburbs Area",
    phone: "+1 555-0124",
    hourlyRate: "Ksh. 5000",
    imageUrl: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400&h=300&fit=crop",
    verified: true,
  },
  {
    name: "HomeFirst Services",
    services: ["Home Management", "Maintenance"],
    rating: 4.7,
    reviews: 156,
    location: "City Center",
    phone: "+1 555-0125",
    hourlyRate: "Ksh. 5000",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    verified: true,
  },
  {
    name: "Elite Clean Co.",
    services: ["Commercial Cleaning", "Office"],
    rating: 4.9,
    reviews: 203,
    location: "Business District",
    phone: "+1 555-0126",
    hourlyRate: "Ksh. 6000",
    imageUrl: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=300&fit=crop",
    verified: false,
  },
  {
    name: "Fresh Start Maids",
    services: ["Deep Cleaning", "Move-in/out"],
    rating: 4.6,
    reviews: 78,
    location: "East Side",
    phone: "+1 555-0127",
    hourlyRate: "Ksh. 4000",
    imageUrl: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=400&h=300&fit=crop",
    verified: true,
  },
  {
    name: "Outdoor Pros",
    services: ["Pressure Washing", "Landscaping"],
    rating: 4.8,
    reviews: 112,
    location: "North County",
    phone: "+1 555-0128",
    hourlyRate: "Ksh. 6000",
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    verified: true,
  },
];

const Providers = () => {
  return (
    <section id="providers" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Top Providers
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted Service Professionals
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our network of verified providers with transparent ratings, locations, and contact information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider, index) => (
            <div
              key={provider.name}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProviderCard {...provider} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Providers;
