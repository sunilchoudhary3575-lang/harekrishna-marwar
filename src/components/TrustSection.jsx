import { motion } from 'framer-motion';
import { ShieldCheck, Flame, Flower2, BadgeCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './TrustSection.module.css';

const trustItems = [
  { icon: Flame, text: '14+ Years Serving' },
  { icon: Flower2, text: '1.5 Lakh+ Meals Served' },
  { icon: ShieldCheck, text: '50+ Cows Protected' },
  { icon: BadgeCheck, text: '80G Tax Benefit Available' },
];

export default function TrustSection() {
  return (
    <section className={styles.section} aria-label="Trust and Impact Section">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>Trust & Transparency</span>
            <h2 className={styles.desc}>Shraddha begins with clarity, care, and secure seva.</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className={styles.strip}>
            {trustItems.map((item, i) => (
              <motion.div
                key={item.text}
                className={styles.trustItem}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <item.icon size={20} />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
