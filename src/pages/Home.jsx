import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import SectionReveal from '../components/SectionReveal';

import Welcome from '../components/Welcome';
import TrustSection from '../components/TrustSection';

import ImpactCounter from '../components/ImpactCounter';
import WhyDonate from '../components/WhyDonate';
import PhotoGallery from '../components/PhotoGallery';
import FinalCTA from '../components/FinalCTA';
import StickyWidget from '../components/StickyWidget';
import DonateForm from '../components/DonateForm';
import { Suspense, useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "Hare Krishna Marwar Mandir | Jodhpur | Gau Seva & Donations";

    // Scroll to section hash if present in URL
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          const offset = 90;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300); // 300ms delay to ensure DOM and animations have initialized
    }
  }, []);

  const ngoSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Hare Krishna Marwar Mandir",
    "alternateName": "HKM Jodhpur",
    "url": "https://harekrishnamarwar.org",
    "logo": "https://harekrishnamarwar.org/logo.png",
    "description": "A Krishna consciousness temple and gaushala in Jodhpur, Rajasthan serving the community through Gau Seva, Anna Daan, and Mandir Nirman.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jodhpur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Donations",
      "availableLanguage": ["Hindi", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/Harekrishnamarwar",
      "https://www.instagram.com/harekrishnamarwar/",
      "https://www.youtube.com/@HareKrishnaMarwar"
    ],
    "nonprofitStatus": "Nonprofit501c3",
    "taxID": "AATCH7258QF20214"
  };

  const worshipSchema = {
    "@context": "https://schema.org",
    "@type": "PlaceOfWorship",
    "name": "Hare Krishna Marwar Mandir",
    "url": "https://harekrishnamarwar.org",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jodhpur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Su 05:00-21:00",
    "telephone": "+919929945107"
  };

  return (
    <>
      <Navbar />
      <main className="home-main">
        {/* Section 1: Hero Section */}
        <SectionReveal as="div" delay={0} immediate><Hero /></SectionReveal>
        
        {/* Section 2: Impact Counter Section */}
        <ImpactCounter />
        
        {/* Section 3: Why Donate Section */}
        <WhyDonate />
        
        {/* Mid-section: Centered Donation Form Panel */}
        <section className="section-pad bg-white relative" style={{ overflow: 'visible' }}>
          <div className="container" style={{ overflow: 'visible' }}>
            <div id="donation-form" style={{ width: '100%', maxWidth: '850px', zIndex: 10, overflow: 'visible', scrollMarginTop: '110px', margin: '0 auto' }}>
              <div className="glass-card divine-shadow p-3 sm:p-6" style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-gold)', overflow: 'hidden' }}>
                <Suspense fallback={<div className="p-8 text-center text-muted font-ui">Loading Donation Form...</div>}>
                  <DonateForm />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 5: Welcome / About the Temple */}
        <Welcome />
        
        {/* Section 6: Photo Gallery */}
        <PhotoGallery />
        
        {/* Section 8: Why People Trust Us (Trust Section) */}
        <TrustSection />
        
        {/* Section 11: Final CTA Section */}
        <FinalCTA />
      </main>
      <Footer />
      <FloatingButtons />
      <StickyWidget />
    </>
  );
}
