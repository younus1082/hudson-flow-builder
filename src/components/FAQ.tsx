import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What areas do you serve in New York?',
    answer: 'We proudly serve all five boroughs of New York City including Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. We also cover parts of Westchester and Long Island. Our central location on Hudson Street allows us to reach most NYC addresses within 60 minutes.',
  },
  {
    question: 'Do you offer 24/7 emergency plumbing services?',
    answer: 'Yes! We understand that plumbing emergencies don\'t wait for business hours. Our team is available 24 hours a day, 7 days a week, 365 days a year. Whether it\'s a burst pipe at 3 AM or a gas leak on a holiday, we\'ll be there fast.',
  },
  {
    question: 'How much do your plumbing services cost?',
    answer: 'We provide upfront, transparent pricing before any work begins. After our technician assesses your issue, you\'ll receive a detailed quote with no hidden fees. You approve the price before we start—no surprises on your bill. We also offer free estimates for larger projects.',
  },
  {
    question: 'Are your plumbers licensed and insured?',
    answer: 'Absolutely. All our plumbers are fully licensed by the New York City Department of Buildings. We carry comprehensive liability insurance and workers\' compensation coverage, giving you complete peace of mind. Our technicians also undergo continuous training on the latest techniques and safety protocols.',
  },
  {
    question: 'How quickly can you respond to an emergency?',
    answer: 'For emergencies in Manhattan and surrounding areas, we typically arrive within 30-60 minutes. Our fleet of fully-stocked service vehicles is strategically positioned throughout the city to ensure rapid response times, day or night.',
  },
  {
    question: 'Do you offer warranties on your work?',
    answer: 'Yes, we stand behind our work with a 100% satisfaction guarantee. All repairs come with a minimum 1-year warranty on labor, and we honor manufacturer warranties on all parts and equipment we install. If something isn\'t right, we\'ll make it right at no extra cost.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, checks, and cash. For larger projects, we also offer flexible financing options with approved credit. Payment is only due after the work is completed to your satisfaction.',
  },
  {
    question: 'Can you help with water heater installation?',
    answer: 'Definitely! We specialize in both traditional tank and tankless water heater installation, repair, and maintenance. Our experts can help you choose the right system for your home\'s needs and budget, and we handle all permits and inspections required by NYC codes.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Got questions? We've got answers. If you don't see what you're looking for, give us a call.
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-border px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary py-5 [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA below FAQ */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12524899874" className="btn-cta">
              Call Us: +1 252 489-9874
            </a>
            <a href="#quote" className="btn-outline-primary">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
