'use client';
import { Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './FinalCTA.module.css';
import { DONATE_URL } from '../config';

export default function FinalCTA() {
  const handleCta = () => {
    window.location.href = `${DONATE_URL}?seva=anna-daan&amount=1100`;
  };

  return (
    <section className={styles.section} aria-label="Final Call to Action">
      <div className={styles.overlay} />
      <div className="container relative z-10">
        <div className={styles.content}>
          <ScrollReveal>
            <div className={styles.heartWrapper}>
              <Heart size={32} className={styles.heartIcon} fill="white" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className={styles.title}>
              &ldquo;Every Meal Offered is a Step Towards Compassion and Krishna Consciousness&rdquo;
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className={styles.subtitle}>
              Do not delay in doing good. Perform a sacred act of charity today, feed those in need, and receive the divine blessings of Sri Sri Radha Madan Mohan.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <button
              onClick={handleCta}
              className={`btn ${styles.btnGold}`}
              aria-label="Feed 25 people now for 1100 rupees"
            >
              Sponsor Annadan Now — ₹1,100
            </button>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <span className={styles.taxBenefit}>
              🛡️ All donations are 50% Tax Exempt under Section 80G
            </span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
