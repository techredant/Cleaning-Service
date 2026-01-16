import { Search, Sparkles, Shield, Clock } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            Trusted by 10,000+ clients
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Professional <span className="text-gradient">Cleaning</span> & Home Services
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Connect with verified cleaning professionals, landscapers, and home management experts in your area. Quality service, transparent pricing.
          </p>

          <div className="bg-card rounded-2xl shadow-elevated p-2 max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="w-full h-12 pl-12 pr-4 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="hero" size="lg" className="md:w-auto">
                Find Providers
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">Verified Providers</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">Same Day Service</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <span className="font-medium">Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
