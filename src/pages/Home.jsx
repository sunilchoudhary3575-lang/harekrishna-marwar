import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import SectionReveal from '../components/SectionReveal';

import Welcome from '../components/Welcome';
import TrustSection from '../components/TrustSection';
import Testimonials from '../components/Testimonials';

import ImpactCounter from '../components/ImpactCounter';
import WhyDonate from '../components/WhyDonate';
import SevaSlabs from '../components/SevaSlabs';
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
    "telephone": "+919928766773"
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
        
        {/* Mid-section: Two column layout for Slabs (Left) & Donation Form (Right) */}
        <section className="section-pad bg-white relative" style={{ overflow: 'visible' }}>
          <div className="container" style={{ overflow: 'visible' }}>
            <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-12 space-y-12 lg:space-y-0" style={{ overflow: 'visible' }}>
              {/* Left Column (Slabs & Story) */}
              <div className="lg:col-span-7 space-y-16">
                <SevaSlabs />
              </div>
              
              {/* Right Column (Sticky Form Panel) */}
              <aside className="lg:col-span-5 relative" style={{ zIndex: 10, overflow: 'visible' }}>
                <div className="sticky-sidebar" id="donation-form" style={{ scrollMarginTop: '110px' }}>
                  <div className="glass-card divine-shadow" style={{ borderRadius: 'var(--radius-lg)', padding: '4px', border: '1px solid var(--border-gold)' }}>
                    <Suspense fallback={<div className="p-8 text-center text-muted font-ui">Loading Donation Form...</div>}>
                      <DonateForm />
                    </Suspense>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        
        {/* Section 5: Welcome / About the Temple */}
        <Welcome />
        
        {/* Section 6: Photo Gallery */}
        <PhotoGallery />
        
        {/* Section 7: Testimonials Slider */}
        <SectionReveal as="div" delay={0}><Testimonials /></SectionReveal>
        
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
