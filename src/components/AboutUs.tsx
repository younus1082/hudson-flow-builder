import { Users, Award, MapPin, Heart } from 'lucide-react';
import heroPlumber from '@/assets/hero-plumber.jpg';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '5,000+', label: 'Happy Customers' },
  { value: '24/7', label: 'Emergency Service' },
  { value: '100%', label: 'Satisfaction Rate' },
];

const values = [
  {
    icon: Heart,
    title: 'Family-Owned',
    description: 'Three generations of plumbers serving NYC with pride and dedication.',
  },
  {
    icon: Award,
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured for your complete peace of mind.',
  },
  {
    icon: MapPin,
    title: 'Local Experts',
    description: "We know NYC's plumbing infrastructure inside and out.",
  },
  {
    icon: Users,
    title: 'Trained Technicians',
    description: 'Our team undergoes continuous training on the latest techniques.',
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={heroPlumber}
              alt="Hudson Flow Plumbing Team"
              className="rounded-2xl shadow-xl w-full object-cover h-[400px] lg:h-[500px]"
            />
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 left-4 right-4 lg:left-8 lg:right-8">
              <div className="bg-white rounded-xl shadow-lg p-4 grid grid-cols-4 gap-2">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-lg md:text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8 pt-8 lg:pt-0">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Plumbing Partner Since 2015
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Hudson Flow Plumbing was founded with a simple mission: provide honest, reliable plumbing services to New York families. What started as a small family operation has grown into one of the most trusted plumbing companies in the city.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We believe in doing things the right way – with transparency, integrity, and respect for your home. Every technician on our team shares these values and is committed to exceeding your expectations.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{value.title}</h4>
                    <p className="text-xs text-muted-foreground">{value.description}</p>
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

export default AboutUs;