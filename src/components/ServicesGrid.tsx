import { Wrench, Flame, Droplets } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Emergency Repairs',
    description: 'Leaks, pipe bursts, and gas line emergencies. We respond 24/7 to keep your home safe.',
    features: ['Burst Pipes', 'Gas Leaks', 'Sewer Backups'],
  },
  {
    icon: Flame,
    title: 'Water Heaters',
    description: 'Tankless installation, repair, and maintenance. Hot water when you need it most.',
    features: ['Tankless Install', 'Traditional Repair', 'Annual Maintenance'],
  },
  {
    icon: Droplets,
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
            <div key={index} className="service-card">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 trust-icon" />
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
