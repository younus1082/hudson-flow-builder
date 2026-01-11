import { Wrench, Flame, Droplets } from 'lucide-react';
import serviceEmergency from '@/assets/service-emergency.jpg';
import serviceWaterHeater from '@/assets/service-water-heater.jpg';
import serviceDrain from '@/assets/service-drain.jpg';

const services = [
  {
    icon: Wrench,
    image: serviceEmergency,
    title: 'Emergency Repairs',
    description: 'Leaks, pipe bursts, and gas line emergencies. We respond 24/7 to keep your home safe.',
    features: ['Burst Pipes', 'Gas Leaks', 'Sewer Backups'],
  },
  {
    icon: Flame,
    image: serviceWaterHeater,
    title: 'Water Heaters',
    description: 'Tankless installation, repair, and maintenance. Hot water when you need it most.',
    features: ['Tankless Install', 'Traditional Repair', 'Annual Maintenance'],
  },
  {
    icon: Droplets,
    image: serviceDrain,
    title: 'Drain Cleaning',
    description: 'Hydro-jetting and advanced clog removal to keep your drains flowing freely.',
    features: ['Hydro-Jetting', 'Clog Removal', 'Camera Inspection'],
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our Expert Services</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          From emergency repairs to routine maintenance, we handle all your plumbing needs with
          professionalism and care.
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group overflow-hidden">
              {/* Image */}
              <div className="relative h-48 -mx-6 -mt-6 mb-5 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 trust-icon" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-cta-orange" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
