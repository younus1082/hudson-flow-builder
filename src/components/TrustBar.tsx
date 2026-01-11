import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const companyLogos = [
  { name: 'BBB', subtitle: 'A+ Accredited', bgColor: 'bg-blue-600', textColor: 'text-white' },
  { name: 'HomeAdvisor', subtitle: 'Top Rated', bgColor: 'bg-orange-500', textColor: 'text-white' },
  { name: 'Angi', subtitle: 'Certified Pro', bgColor: 'bg-green-600', textColor: 'text-white' },
  { name: 'Yelp', subtitle: '5-Star Rated', bgColor: 'bg-red-600', textColor: 'text-white' },
  { name: 'Google', subtitle: '4.9 Rating', bgColor: 'bg-white', textColor: 'text-blue-500', border: true },
  { name: 'Thumbtack', subtitle: 'Top Pro 2024', bgColor: 'bg-blue-500', textColor: 'text-white' },
  { name: 'NYC Chamber', subtitle: 'Member', bgColor: 'bg-slate-800', textColor: 'text-white' },
  { name: 'Houzz', subtitle: 'Best of 2024', bgColor: 'bg-emerald-500', textColor: 'text-white' },
];

const TrustBar = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  const LogoCard = ({ company, keyPrefix = '' }: { company: typeof companyLogos[0]; keyPrefix?: string }) => (
    <div
      className="flex-[0_0_auto] min-w-0 flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
    >
      <div className={`w-11 h-11 rounded-lg ${company.bgColor} ${company.border ? 'border border-gray-200' : ''} flex items-center justify-center shadow-sm`}>
        <span className={`${company.textColor} font-bold text-xs`}>
          {company.name.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <div>
        <p className="font-semibold text-foreground whitespace-nowrap text-sm">{company.name}</p>
        <p className="text-xs text-muted-foreground whitespace-nowrap">{company.subtitle}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-secondary py-8 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-6">
          Trusted by New York Families
        </p>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {companyLogos.map((company, index) => (
              <LogoCard key={index} company={company} />
            ))}
            {/* Duplicate for seamless loop */}
            {companyLogos.map((company, index) => (
              <LogoCard key={`dup-${index}`} company={company} keyPrefix="dup-" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;