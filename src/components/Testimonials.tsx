import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Woke up to a flooded kitchen at 3 AM. Hudson Flow was here in 45 minutes. They saved my floors and my sanity. I can't recommend them enough!",
    author: 'Sarah M.',
    location: 'Manhattan',
    rating: 5,
  },
  {
    quote: "Professional, polite, and the price was exactly what they quoted. Finally, a plumber I can trust. They've earned a customer for life.",
    author: 'Mike T.',
    location: 'Brooklyn',
    rating: 5,
  },
  {
    quote: "Our water heater died on the coldest day of the year. They installed a new tankless system the same day. Outstanding service!",
    author: 'Jennifer L.',
    location: 'Queens',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">What Our Customers Say</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Real reviews from real New Yorkers who trust Hudson Flow with their homes.
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-cta-orange text-cta-orange"
                  />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
