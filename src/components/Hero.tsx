import { Star } from 'lucide-react';
import heroImage from '@/assets/hero-plumber.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-cta-orange text-cta-orange"
                />
              ))}
            </div>
            <span className="text-white text-sm font-medium">
              4.9/5 Average Rating
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Reliable Plumbing Experts in New York –{' '}
            <span className="text-cta-orange">Fixed Right the First Time.</span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in-up-delay text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Licensed, bonded, and insured. Arriving at your door in Manhattan & NYC within{' '}
            <strong className="text-white">60 minutes</strong>.
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="btn-cta-large">
              Get Your Free Quote
            </a>
            <a
              href="tel:+12524899874"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all"
            >
              Or Call +1 252 489-9874
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
