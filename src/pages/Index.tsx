import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <QuoteForm />
      </main>
      <Footer />
      <MobileStickyBar />
      {/* Spacer for mobile sticky bar */}
      <div className="h-16 md:hidden" />
    </div>
  );
};

export default Index;
