import { useCallback } from 'react';
import { Star, Quote } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "Woke up to a flooded kitchen at 3 AM. Hudson Flow was here in 45 minutes. They saved my floors and my sanity. I can't recommend them enough!",
    author: 'Sarah M.',
    location: 'Manhattan',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    initials: 'SM',
  },
  {
    quote: "Professional, polite, and the price was exactly what they quoted. Finally, a plumber I can trust. They've earned a customer for life.",
    author: 'Mike T.',
    location: 'Brooklyn',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    initials: 'MT',
  },
  {
    quote: "Our water heater died on the coldest day of the year. They installed a new tankless system the same day. Outstanding service!",
    author: 'Jennifer L.',
    location: 'Queens',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    initials: 'JL',
  },
  {
    quote: "Fast, friendly, and fairly priced. They fixed a leak that two other plumbers couldn't figure out. True experts!",
    author: 'David R.',
    location: 'Upper West Side',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    initials: 'DR',
  },
  {
    quote: "The team was incredibly respectful of our home. They even cleaned up better than they found it. Will definitely call again.",
    author: 'Lisa K.',
    location: 'SoHo',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    initials: 'LK',
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="reviews" className="py-16 md:py-24 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">What Our Customers Say</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Real reviews from real New Yorkers who trust Hudson Flow with their homes.
        </p>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                >
                  <div className="bg-white rounded-xl p-6 shadow-md relative h-full">
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
                    <div className="border-t border-border pt-4 flex items-center gap-3">
                      <Avatar className="w-12 h-12 border-2 border-primary/20">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary transition-colors"
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
