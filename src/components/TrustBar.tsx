import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const companyLogos = [
  { name: 'BBB', subtitle: 'A+ Accredited' },
  { name: 'HomeAdvisor', subtitle: 'Top Rated' },
  { name: 'Angi', subtitle: 'Certified Pro' },
  { name: 'Yelp', subtitle: '5-Star Rated' },
  { name: 'Google', subtitle: '4.9 Rating' },
  { name: 'Thumbtack', subtitle: 'Top Pro 2024' },
  { name: 'NYC Chamber', subtitle: 'Member' },
  { name: 'Houzz', subtitle: 'Best of 2024' },
];

const TrustBar = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  return (
    <section className="bg-secondary py-8 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-6">
          Trusted by New York Families
        </p>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="flex-[0_0_auto] min-w-0 flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-sm border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{company.name.slice(0, 2).toUpperCase()}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground whitespace-nowrap">{company.name}</p>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">{company.subtitle}</p>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {companyLogos.map((company, index) => (
              <div
                key={`dup-${index}`}
                className="flex-[0_0_auto] min-w-0 flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-sm border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{company.name.slice(0, 2).toUpperCase()}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground whitespace-nowrap">{company.name}</p>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">{company.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;