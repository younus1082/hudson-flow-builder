import { DollarSign, Sparkles, Clock } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description: 'No surprise bills. You approve the price before we start any work. Transparency is our policy.',
  },
  {
    icon: Sparkles,
    title: 'Clean Home Guarantee',
    description: 'We wear shoe covers and clean up the mess. Your home stays as clean as we found it.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: "Live support day or night. Plumbing emergencies don't wait, and neither do we.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-4">
          Why Choose Hudson Flow?
        </h2>
        <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto mb-12">
          We're not just plumbers – we're your neighbors committed to honest service.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-8 h-8 text-cta-orange" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
