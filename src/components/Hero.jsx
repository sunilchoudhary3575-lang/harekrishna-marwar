'use client';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Landmark, Heart, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';
import PosterCarousel from './PosterCarousel';
import TrustBar from './TrustBar';
import { DONATE_URL } from '../config';

const easeOut = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};
const stagger = {
  hidden: {},
  show: { transition: { delayChildren: 0.1, staggerChildren: 0.08 } },
};

export default function Hero() {
  const handleDonateNow = (e) => {
    e.preventDefault();
    window.location.href = DONATE_URL;
  };

  const handleSponsorAnnadan = (e) => {
    e.preventDefault();
    const slabsElement = document.getElementById('donation-form');
    if (slabsElement) {
      slabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className={styles.hero} aria-label="Main Welcome Hero">
      {/* Full-width auto-scrolling poster carousel */}
      <PosterCarousel />

      {/* Headline + Cards + CTA block below carousel */}
      <motion.div
        className={styles.heroContent}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <div className={styles.copyBlock}>
            <motion.h1 variants={fadeUp} className={styles.headline}>
              Feed Hungry Souls. Serve Lord Krishna.<br />
              <span className={styles.headlineAccent}>Transform Lives.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className={styles.microCta} style={{ fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto', lineHeight: '1.5' }}>
              Your contribution helps provide sacred prasadam, support temple activities, and spread spiritual welfare across the Jodhpur region.
            </motion.p>

            {/* Quick Seva Square Tiles */}
            <motion.div variants={fadeUp} className={styles.squareGrid}>
              <Link to="/seva/anna-daan" className={styles.squareTile}>
                <span className={styles.tileIcon}>🍛</span>
                <h3 className={styles.tileTitle}>Anna Daan Seva</h3>
                <span className={styles.tileImpact}>Feed 25 People</span>
                <span className={styles.tileAmount}>₹1,100</span>
              </Link>

              <Link to="/seva/mandir-nirman" className={styles.squareTile}>
                <span className={styles.tileIcon}>🛕</span>
                <h3 className={styles.tileTitle}>Mandir Nirman Seva</h3>
                <span className={styles.tileImpact}>1 Sq Ft of Mandir</span>
                <span className={styles.tileAmount}>₹2,500</span>
              </Link>

              <Link to="/seva/gau-seva" className={styles.squareTile}>
                <span className={styles.tileIcon}>🐄</span>
                <h3 className={styles.tileTitle}>Gau Seva</h3>
                <span className={styles.tileImpact}>1 Day Care</span>
                <span className={styles.tileAmount}>₹2,100</span>
              </Link>

              <a href={DONATE_URL} className={styles.squareTile}>
                <span className={styles.tileIcon}>🙏</span>
                <h3 className={styles.tileTitle}>General Donation</h3>
                <span className={styles.tileImpact}>Support all activities</span>
                <span className={styles.tileAmount}>Any Amount</span>
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.ctaRow} style={{ marginTop: '0.5rem' }}>
              <button onClick={handleDonateNow} className={`btn ${styles.primaryCta}`} aria-label="Donate online now to support Annadan Seva">
                🙏 Donate Now
              </button>
              <button onClick={handleSponsorAnnadan} className={`btn btn-outline ${styles.secondaryCta}`} aria-label="Explore Annadan sponsorship slabs">
                🍛 Sponsor Annadan Seva Slabs
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Trust credentials strip */}
      <TrustBar />
    </section>
  );
}
