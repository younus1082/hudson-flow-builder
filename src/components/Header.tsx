import { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const services = [
  { label: 'Plumbing & Drains', href: '#services' },
  { label: 'Heating & Cooling', href: '#services' },
  { label: 'Home Improvement', href: '#services' },
  { label: 'Water Heater & Boilers', href: '#services' },
  { label: 'Leaks & Pipes', href: '#services' },
  { label: 'Sewer Line & Excavation', href: '#services' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact Us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'header-blur shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">HF</span>
            </div>
            <span className="text-lg md:text-xl font-bold text-primary-blue">
              Hudson Flow Plumbing
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services Dropdown - Hover triggered */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors outline-none">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-56 bg-white rounded-lg shadow-lg border border-border py-2 z-50">
                    {services.map((service) => (
                      <a
                        key={service.label}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {service.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#quote" className="btn-outline-primary">
              Get a Quote
            </a>
            <a href="tel:+12524899874" className="btn-cta">
              <Phone className="w-4 h-4" />
              Call +1 252 489-9874
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a href="tel:+12524899874" className="btn-cta py-2 px-3 text-sm">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <nav className="flex flex-col gap-2 pt-4">
              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between py-2 px-4 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {services.map((service) => (
                      <a
                        key={service.label}
                        href={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 px-4 text-sm text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        {service.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 px-4 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 btn-outline-primary text-center"
              >
                Get a Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
