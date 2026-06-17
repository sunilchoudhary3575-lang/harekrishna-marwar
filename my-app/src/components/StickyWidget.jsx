'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import styles from './StickyWidget.module.css';
import { DONATE_URL } from '../config';

export default function StickyWidget() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show widget after scrolling 600px (past hero)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.location.href = DONATE_URL;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.widget}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.container}>
            <div className={styles.info}>
              <Heart size={16} className={styles.heartIcon} fill="var(--saffron)" />
              <div className={styles.textWrap}>
                <span className={styles.title}>Sponsor Annadan Seva</span>
                <span className={styles.subtitle}>Feed 25 hungry souls for ₹1,100</span>
              </div>
            </div>
            
            <button
              onClick={handleClick}
              className={`btn btn-donate ${styles.btnWidget}`}
              aria-label="Donate online now"
            >
              Donate Now
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
