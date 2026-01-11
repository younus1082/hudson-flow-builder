import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const services = [
  'Plumbing & Drains',
  'Heating & Cooling',
  'Home Improvement',
  'Water Heater & Boilers',
  'Leaks & Pipes',
  'Sewer Line & Excavation',
];

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
];

const socials = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-lg">HF</span>
              </div>
              <span className="text-xl font-bold">Hudson Flow Plumbing</span>
            </div>
            
            <p className="text-white/70 mb-6">
              New York's trusted plumbing experts since 2015. Licensed, bonded, and insured for your peace of mind.
            </p>

            {/* Socials */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a href="#quote" className="btn-cta inline-block">
                Get Your Free Quote
              </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-bold mb-5">Quick Contact</h4>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=789+Hudson+St,+New+York,+NY+10014"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span>789 Hudson St, New York, NY 10014</span>
              </a>
              
              <a
                href="tel:+12524899874"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>+1 252 489-9874</span>
              </a>
              
              <a
                href="mailto:info@plumbing.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>info@plumbing.com</span>
              </a>
            </div>

            {/* Map */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1234567890!2d-74.0060!3d40.7340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2s789%20Hudson%20St%2C%20New%20York%2C%20NY%2010014!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="150"
                style={{ border: 0, filter: 'grayscale(20%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hudson Flow Plumbing Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © 2024 Hudson Flow Plumbing. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Licenses
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
