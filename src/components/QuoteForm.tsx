import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const QuoteForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="quote" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-heading">Get Your Free Quote</h2>
          <p className="text-center text-muted-foreground mb-10">
            Fill out the form below and we'll get back to you within 30 minutes during business hours.
          </p>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                We've received your request. A member of our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select a service...</option>
                  <option value="emergency">Emergency Repair</option>
                  <option value="water-heater">Water Heater</option>
                  <option value="drain">Drain Cleaning</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Describe Your Issue
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us more about your plumbing issue..."
                />
              </div>

              <button type="submit" className="btn-cta-large w-full mt-8">
                <Send className="w-5 h-5" />
                Submit Request
              </button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
