'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Soup, Users, HeartHandshake, Calendar } from 'lucide-react';
import styles from './ImpactCounter.module.css';

const stats = [
  {
    id: 'meals',
    label: 'Meals Served',
    target: 151000,
    suffix: '+',
    icon: Soup,
    color: 'var(--saffron)',
  },
  {
    id: 'families',
    label: 'Families Benefited',
    target: 15000,
    suffix: '+',
    icon: Users,
    color: 'var(--green-earth)',
  },
  {
    id: 'devotees',
    label: 'Devotees Supported',
    target: 25000,
    suffix: '+',
    icon: HeartHandshake,
    color: 'var(--gold)',
  },
  {
    id: 'years',
    label: 'Years of Service',
    target: 14,
    suffix: '+',
    icon: Calendar,
    color: 'var(--saffron-light)',
  },
];

function CounterItem({ stat }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const Icon = stat.icon;

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.target;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      const currentVal = Math.floor(easedProgress * (end - start) + start);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, stat.target]);

  const formattedCount = count.toLocaleString('en-IN');

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.iconCircle} style={{ '--icon-color': stat.color }}>
        <Icon size={28} className={styles.icon} />
      </div>
      <div className={styles.numberRow}>
        <span className={styles.number}>{formattedCount}</span>
        <span className={styles.suffix}>{stat.suffix}</span>
      </div>
      <p className={styles.label}>{stat.label}</p>
    </motion.div>
  );
}

export default function ImpactCounter() {
  return (
    <section className={styles.section} aria-label="Impact and Achievements">
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat) => (
            <CounterItem key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
