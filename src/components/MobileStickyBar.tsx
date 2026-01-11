import { Phone } from 'lucide-react';

const MobileStickyBar = () => {
  return (
    <div className="mobile-sticky-bar">
      <a
        href="tel:+12524899874"
        className="btn-cta w-full justify-center text-lg"
      >
        <Phone className="w-5 h-5" />
        Call Now – +1 252 489-9874
      </a>
    </div>
  );
};

export default MobileStickyBar;
