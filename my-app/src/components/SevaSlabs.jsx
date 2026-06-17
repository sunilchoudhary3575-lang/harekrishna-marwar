'use client';
import { Gift, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './SevaSlabs.module.css';
import { DONATE_URL } from '../config';

const slabs = [
  {
    amount: 501,
    title: 'Feed 10 People',
    desc: 'Provides fresh, nutritious khichdi prasadam to 10 needy people on the streets of Jodhpur.',
    blessing: 'Pujari offers prayers on your behalf at the temple.',
    recommended: false,
    icon: '🍛',
  },
  {
    amount: 1100,
    title: 'Feed 25 People',
    desc: 'Feeds 25 devotees and pilgrims with full plate prasadam (rice, dal, roti, sabji, sweet).',
    blessing: 'Archana performed in your family\'s name at Sri Sri Radha Madan Mohan Mandir.',
    recommended: true,
    icon: '🍽️',
  },
  {
    amount: 2100,
    title: 'Feed 50 People',
    desc: 'Sponsors a complete batch of prasadam distribution during morning or evening temple hours.',
    blessing: 'Mahaprasad offered to Deities and dynamic sankalpa prayers for your family.',
    recommended: false,
    icon: '🍲',
  },
  {
    amount: 5100,
    title: 'Feed 125 People',
    desc: 'Sponsors the daily food distribution for an entire village segment or school block in Marwar.',
    blessing: 'Special Puja sankalpa. Sanctified Deities photo card & Jaap Mala couriered to your home.',
    recommended: false,
    icon: '🚚',
  },
  {
    amount: 11000,
    title: 'Feed 300 People',
    desc: 'Sponsors the grand Sunday Feast or festival feast at our Jodhpur temple complex.',
    blessing: 'Mahaprasad Sponsor status. Name engraved on digital donor board & live video clip of distribution.',
    recommended: false,
    icon: '🛕',
  },
];

export default function SevaSlabs() {
  const handleSelect = (amount) => {
    window.location.href = `${DONATE_URL}?seva=anna-daan${amount ? `&amount=${amount}` : ''}`;
  };

  return (
    <section className={styles.section} id="seva-slabs" aria-label="Donation Slabs Section">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>Prasadam Sponsorship</span>
            <h2 className={styles.title}>Sponsor Annadan Seva Slabs</h2>
            <p className={styles.desc}>
              Select a donation slab to directly feed hungry souls and support the temple. Each sponsorship brings unique blessings and tax benefits.
            </p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {slabs.map((slab, i) => (
            <ScrollReveal key={slab.amount} delay={0.05 * i} y={30} className="h-full">
              <div className={`${styles.card} ${slab.recommended ? styles.recommendedCard : ''}`}>
                {slab.recommended && <div className={styles.badge}>Most Popular</div>}
                
                <div className={styles.cardHeader}>
                  <span className={styles.icon}>{slab.icon}</span>
                  <h3 className={styles.cardTitle}>{slab.title}</h3>
                  <div className={styles.priceRow}>
                    <span className={styles.currency}>₹</span>
                    <span className={styles.price}>{slab.amount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.cardDesc}>{slab.desc}</p>
                  
                  <div className={styles.blessingsBox}>
                    <div className={styles.blessingTitleRow}>
                      <Gift size={16} className={styles.giftIcon} />
                      <span className={styles.blessingTitle}>Divine Blessings</span>
                    </div>
                    <p className={styles.blessingText}>{slab.blessing}</p>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <button
                    className={`btn ${slab.recommended ? 'btn-donate' : 'btn-outline'} ${styles.btnFull}`}
                    onClick={() => handleSelect(slab.amount)}
                    aria-label={`Sponsor Annadan for rupees ${slab.amount}`}
                  >
                    Sponsor Now <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Custom Slab Card */}
          <ScrollReveal delay={0.05 * slabs.length} y={30} className="h-full">
            <div className={`${styles.card} ${styles.customCard}`}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>🙏</span>
                <h3 className={styles.cardTitle}>Custom Seva</h3>
                <div className={styles.priceRow}>
                  <span className={styles.priceText}>Any Amount</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.cardDesc}>
                  Choose your own amount to contribute. Every single rupee helps provide meals, protect cows, and construct the temple.
                </p>
                <div className={styles.blessingsBox}>
                  <div className={styles.blessingTitleRow}>
                    <Gift size={16} className={styles.giftIcon} />
                    <span className={styles.blessingTitle}>Divine Blessings</span>
                  </div>
                  <p className={styles.blessingText}>
                    Receive the general blessings of Sri Sri Radha Madan Mohan and an 80G tax receipt.
                  </p>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <button
                  className={`btn btn-outline ${styles.btnFull}`}
                  onClick={() => handleSelect('')}
                  aria-label="Sponsor custom seva amount"
                >
                  Choose Amount <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
