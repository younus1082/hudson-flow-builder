import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  // Note: FAQ section is now a separate component, this footer uses id="contact"
  return (
    <footer id="contact" className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-lg">HF</span>
              </div>
              <span className="text-xl font-bold">Hudson Flow Plumbing</span>
            </div>
            
            <p className="text-white/70 mb-8 max-w-md">
              New York's trusted plumbing experts since 2015. Licensed, bonded, and insured for your peace of mind.
            </p>

            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=789+Hudson+St,+New+York,+NY+10014"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/80 hover:text-white transition-colors"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>789 Hudson St, New York, NY 10014</span>
              </a>
              
              <a
                href="tel:+12524899874"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 252 489-9874</span>
              </a>
              
              <a
                href="mailto:info@plumbing.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@plumbing.com</span>
              </a>
            </div>

            <div className="mt-8">
              <a href="#quote" className="btn-cta">
                Get Your Free Quote
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1234567890!2d-74.0060!3d40.7340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2s789%20Hudson%20St%2C%20New%20York%2C%20NY%2010014!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0, filter: 'grayscale(20%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hudson Flow Plumbing Location"
            />
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
