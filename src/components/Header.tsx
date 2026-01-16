import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">CS</span>
            </div>
            <span className="font-bold text-xl text-foreground">CleanServe</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Services
            </a>
            <a href="#providers" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Providers
            </a>
            <a href="#training" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Training
            </a>
            <a href="#book" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Book Now
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              Contact Us
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Services
              </a>
              <a href="#providers" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Providers
              </a>
              <a href="#training" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Training
              </a>
              <a href="#book" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Book Now
              </a>
              <Button variant="hero" className="w-full mt-2">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
