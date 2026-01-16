import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">CS</span>
              </div>
              <span className="font-bold text-xl">Clean Service</span>
            </div>
            <p className="text-background/70 mb-4">
              Connecting you with trusted cleaning and home service professionals since 2020.
            </p>
            <div className="space-y-2 text-background/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+254 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@cleanserve.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Service Ave, Metro City</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Deep Cleaning</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Regular Cleaning</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Landscaping</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Home Management</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Commercial Cleaning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">For Providers</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Join Our Network</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Training Programs</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Provider Dashboard</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Trust & Safety</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-background/50 text-sm">
          <p>© 2024 Clean Service. All rights reserved. Built with ❤️ for cleaner spaces.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
