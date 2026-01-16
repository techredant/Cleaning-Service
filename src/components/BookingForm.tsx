import { useState } from "react";
import { Button } from "./ui/button";
import { User, Building2, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

const serviceTypes = [
  "Deep Cleaning",
  "Regular Cleaning",
  "Landscaping",
  "Home Management",
  "Commercial Cleaning",
  "Pressure Washing",
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    personalName: "",
    companyName: "",
    email: "",
    phone: "",
    location: "",
    serviceType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="text-center py-12 animate-scale-in">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Request Submitted!</h3>
        <p className="text-muted-foreground mb-6">
          We'll connect you with providers who match your needs. Expect quotes within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            <User className="w-4 h-4 inline mr-2" />
            Your Name *
          </label>
          <input
            type="text"
            name="personalName"
            required
            value={formData.personalName}
            onChange={handleChange}
            className="w-full h-12 px-4 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            <Building2 className="w-4 h-4 inline mr-2" />
            Company Name (Optional)
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full h-12 px-4 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Company Ltd."
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full h-12 px-4 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-12 px-4 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="+1 555-0123"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            <MapPin className="w-4 h-4 inline mr-2" />
            Your Location *
          </label>
          <input
            type="text"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="w-full h-12 px-4 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="123 Main St, City"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Type of Service *
          </label>
          <select
            name="serviceType"
            required
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full h-12 px-4 bg-secondary rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
          >
            <option value="">Select a service</option>
            {serviceTypes.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Additional Details
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Tell us about your specific needs, preferred schedule, etc."
        />
      </div>

      <Button variant="hero" size="xl" className="w-full">
        Get Free Quotes
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Service providers will contact you with their rates within 24 hours.
      </p>
    </form>
  );
};

export default BookingForm;
