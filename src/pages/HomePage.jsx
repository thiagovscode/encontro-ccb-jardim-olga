import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import LocationSection from '../components/LocationSection';
import MessageSection from '../components/MessageSection';
import ShareWhatsAppSection from '../components/ShareWhatsAppSection';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { getCountdownState } from '../utils/countdown';

export default function HomePage() {
  const [countdown, setCountdown] = useState(() => getCountdownState());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdownState());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection countdown={countdown} />
      <main>
        <LocationSection />
        <MessageSection />
        <ShareWhatsAppSection countdown={countdown} />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
