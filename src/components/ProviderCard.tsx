import { Star, MapPin, Phone, BadgeCheck } from "lucide-react";
import { Button } from "./ui/button";

interface ProviderCardProps {
  name: string;
  services: string[];
  rating: number;
  reviews: number;
  location: string;
  phone: string;
  hourlyRate: string;
  imageUrl: string;
  verified: boolean;
}

const ProviderCard = ({
  name,
  services,
  rating,
  reviews,
  location,
  phone,
  hourlyRate,
  imageUrl,
  verified,
}: ProviderCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {verified && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <BadgeCheck className="w-3 h-3" />
            Verified
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-bold text-lg text-foreground">{name}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <MapPin className="w-3 h-3" />
              {location}
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="font-bold text-foreground">{rating}</span>
              <span className="text-muted-foreground text-sm">({reviews})</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {services.map((service) => (
            <span
              key={service}
              className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-2xl font-bold text-primary">{hourlyRate}</span>
            <span className="text-muted-foreground text-sm">/hr</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Phone className="w-3 h-3" />
              Call
            </Button>
            <Button size="sm">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
