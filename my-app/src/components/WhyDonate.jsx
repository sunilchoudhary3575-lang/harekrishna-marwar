'use client';
import { BookOpen, Soup, Heart, Tent } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './WhyDonate.module.css';

const cards = [
  {
    icon: Soup,
    title: 'Spiritual Prasadam Distribution',
    desc: 'We do not just feed stomachs; we nourish souls. Every meal is offered first to Lord Krishna, converting it into sanctified prasadam that purifies the heart and brings peace.',
  },
  {
    icon: BookOpen,
    title: 'Vedic Wisdom for Youth',
    desc: 'Empower the next generation with values from the Bhagavad Gita. Your seva funds the free distribution of spiritual books, moral education classes, and value-based training.',
  },
  {
    icon: Heart,
    title: 'Sacred Cow Protection',
    desc: 'Support our Jodhpur Gaushala providing medical care, green fodder, and clean shelter to abandoned cows, preserving Vedic traditions of Go-Raksha and spiritual ecology.',
  },
  {
    icon: Tent,
    title: 'Grand Temple Nirman',
    desc: 'Help construct the upcoming Hare Krishna Marwar Mandir. By sponsoring brick by brick, you construct a permanent spiritual home that will radiate divine energy for generations.',
  },
];

export default function WhyDonate() {
  return (
    <section className={styles.section} id="why-donate" aria-label="Why Donate Section">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>Our Sacred Mission</span>
            <h2 className={styles.title}>Why Your Contribution Matters</h2>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        {/* Gita Quote Block */}
        <ScrollReveal delay={0.1}>
          <div className={styles.quoteBlock}>
            <span className={styles.sanskritText}>
              यज्ञशिष्टाशिन: सन्तो मुच्यन्ते सर्वकिल्बिषै: ।<br />
              भुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात् ॥
            </span>
            <p className={styles.quoteTranslation}>
              &ldquo;The devotees of the Lord are released from all kinds of sins because they eat food which is offered first for sacrifice. Others, who prepare food for personal enjoyment, verily eat only sin.&rdquo;
            </p>
            <span className={styles.quoteCitation}>— Bhagavad Gita 3.13</span>
          </div>
        </ScrollReveal>

        {/* Impact Cards Grid */}
        <div className={styles.grid}>
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.title} delay={0.1 + i * 0.08} y={30}>
                <div className={styles.card}>
                  <div className={styles.iconCircle}>
                    <Icon size={24} className={styles.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
