import { Shield, Award, Building2 } from 'lucide-react';

const TrustBar = () => {
  const badges = [
    { icon: Shield, name: 'BBB Accredited', subtitle: 'A+ Rating' },
    { icon: Award, name: 'HomeAdvisor', subtitle: 'Top Rated Pro' },
    { icon: Building2, name: 'NYC Chamber', subtitle: 'Member Since 2015' },
  ];

  return (
    <section className="bg-secondary py-8 border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-6">
          Trusted by New York Families
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-foreground/70"
            >
              <badge.icon className="w-10 h-10 trust-icon" />
              <div>
                <p className="font-semibold text-foreground">{badge.name}</p>
                <p className="text-xs text-muted-foreground">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
