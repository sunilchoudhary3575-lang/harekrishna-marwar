'use client';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Landmark, HardHat, Award, ChevronRight, MessageSquareQuote, ShieldCheck, Calendar, Sparkles, Utensils, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import BottomNav from '../components/BottomNav';
import styles from '../components/SevaHighlights.module.css'; // Reuse available shared styling
import { DONATE_URL } from '../config';

const stats = [
  { label: 'Temple Size', value: '35K SqFt', icon: Landmark },
  { label: 'Construction', value: 'Active', icon: HardHat },
  { label: 'Tax Benefit', value: '80G', icon: Award },
];

const badges = [
  { icon: Landmark, text: 'State of Art Facility' },
  { icon: Award, text: '80G Donation Benefit' },
  { icon: HardHat, text: '2027 Projected Completion' },
  { icon: ShieldCheck, text: 'Vedic Architecture' },
];

const easeOut = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut, delay: i * 0.1 } }),
};

export default function MandirNirmanPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  useEffect(() => {
    document.title = "Mandir Nirman Seva | Build Krishna's Home | Hare Krishna Marwar Jodhpur";
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingBottom: '2rem' }}>

        {/* ── Hero ── */}
        <section ref={heroRef} style={{ 
          position: 'relative', 
          minHeight: '80vh', 
          width: '100%', 
          overflow: 'hidden', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          paddingTop: '110px',
          paddingBottom: '80px'
        }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <motion.div style={{ y: imgY, height: '100%' }}>
              <img
                src="/mandir-nirman-seva.png"
                alt="Mandir Nirman Seva — building Krishna's home"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.55)' }}
              />
            </motion.div>
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.45) 75%, rgba(20,16,10,0.82) 100%)' 
            }} />
          </div>

          <motion.div
            style={{ opacity: contentOpacity, position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff' }}
            className="container"
          >
            <motion.span variants={fadeUp} custom={0} initial="hidden" animate="show" style={{ 
              display: 'inline-block', 
              padding: '0.4rem 1.2rem', 
              borderRadius: '9999px', 
              background: 'rgba(230, 126, 34, 0.22)', 
              border: '1px solid rgba(230, 126, 34, 0.4)', 
              color: 'rgba(255,255,255,0.95)',
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.26em',
              marginBottom: '1.5rem'
            }}>
              Building a Sacred Legacy
            </motion.span>

            <motion.h1 variants={fadeUp} custom={1} initial="hidden" animate="show" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Mandir Nirman<br />
              <span style={{ color: 'var(--gold-primary)', fontStyle: 'italic', fontWeight: 400 }}>A Home for Krishna</span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} initial="hidden" animate="show" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.88)', fontStyle: 'italic', maxWidth: '580px', margin: '0 auto 2.5rem' }}>
              &ldquo;Lord Krishna resides where His devotees build a home for Him with love and devotion.&rdquo;
            </motion.p>

            <motion.div variants={fadeUp} custom={3} initial="hidden" animate="show" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`${DONATE_URL}?seva=mandir-nirman`} className="btn btn-donate" style={{ minWidth: '200px' }}>
                <Heart size={18} /> Build the Eternal Home
              </a>
              <a href={DONATE_URL} className="btn btn-outline" style={{ minWidth: '160px', color: '#fff', borderColor: '#fff' }}>
                View All Sevas
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6, ease: easeOut }}
            >
              <div style={{ display: 'flex', gap: '2rem', padding: '1rem 2rem', background: 'rgba(0,0,0,0.6)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                {stats.map((s) => (
                  <div key={s.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <s.icon size={20} style={{ color: 'var(--gold-primary)', marginBottom: '0.25rem' }} />
                    <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{s.value}</span>
                    <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Story Section ── */}
        <section style={{ padding: '6rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', color: 'var(--gold-primary)', display: 'block', marginBottom: '0.5rem' }}>Eternal Architecture</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Crafting a Spiritual Sanctuary in Jodhpur.
              </h2>
              <div className="section-divider" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: easeOut }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                  <p style={{ fontSize: '1.12rem', color: 'var(--text-secondary)', lineHeight: 1.78 }}>
                    The rising towers of <strong style={{ color: 'var(--gold-primary)' }}>Hare Krishna Marwar Mandir</strong> stand as a testament to Jodhpur&apos;s faith. Spanning 31,000 square feet, this architectural marvel combines ancient Vedic design with Marwar&apos;s stone heritage.
                  </p>
                  <blockquote style={{ padding: '1.1rem 1.4rem', borderLeft: '3px solid rgba(184,134,11,0.35)', fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                    &ldquo;Building a temple is the ultimate way to establish a spiritual foundation for generations to come. Every stone has a soul.&rdquo;
                  </blockquote>
                  <p style={{ fontSize: '1.12rem', color: 'var(--text-secondary)', lineHeight: 1.78 }}>
                    This is not just a building — it is a center for higher consciousness, a home for the community, and a sanctuary where the divine meets the devotee. Your support is critical in helping us complete this monumental journey.
                  </p>
                </div>

                <a href={`${DONATE_URL}?seva=mandir-nirman`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-primary)', fontWeight: 'bold', textDecoration: 'none', marginTop: '1.5rem' }}>
                  Support the Construction <ChevronRight size={16} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: easeOut }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1.2 / 1', borderRadius: '2.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                  <img src="/Mandir Nirman seva impact.jpg" alt="Temple construction in Jodhpur" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 55%)' }} />
                  <div style={{ position: 'absolute', bottom: '1.8rem', left: '1.8rem', color: '#fff' }}>
                    <span style={{ fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold-primary)', display: 'block', marginBottom: '0.35rem' }}>Construction Status</span>
                    <strong style={{ fontSize: '1.25rem' }}>Main Shikhara Rising</strong>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Trust / Bento Section ── */}
        <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', color: 'var(--gold-primary)', display: 'block', marginBottom: '0.5rem' }}>Legacy</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>Foundation of Faith</h2>
              <div className="section-divider" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div
                style={{ background: 'var(--bg-primary)', borderRadius: '2rem', padding: '2.5rem', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: '220px', justifyContent: 'center' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <MessageSquareQuote size={40} style={{ color: 'var(--gold-primary)' }} />
                <p style={{ fontStyle: 'italic', fontSize: '1.2rem', lineHeight: 1.65, color: 'var(--text-primary)' }}>
                  &ldquo;One who builds a temple for Sri Krishna will go to the spiritual world for as many years as there are bricks used.&rdquo;
                </p>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold-primary)' }}>— Bhagavad Purana</span>
              </motion.div>

              <motion.div
                style={{ background: 'linear-gradient(135deg, #b8860b, var(--saffron))', borderRadius: '2rem', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#fff', minHeight: '220px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>31,000</span>
                <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>Sq Ft of Spiritual Space</span>
              </motion.div>

              <motion.div
                style={{ background: 'var(--bg-primary)', borderRadius: '2rem', padding: '2rem', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {badges.map((b) => (
                  <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '2.4rem', height: '2.4rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(184,134,11,0.1)', color: 'var(--gold-primary)' }}>
                      <b.icon size={18} />
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-secondary)' }}>{b.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Gifts Section ── */}
        <section style={{ padding: '6rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', color: 'var(--gold-primary)', display: 'block', marginBottom: '0.5rem' }}>Blessed Tokens</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>A Gift from Krishna to You</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '680px', margin: '1rem auto 0' }}>
                As a token of our heartfelt gratitude, every donor contributing to the Mandir Nirman receives a specially blessed "Krishna Gift" set to bring the divine atmosphere of Jodhpur into your home.
              </p>
              <div className="section-divider" style={{ margin: '1.5rem auto' }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Krishna Gift Calendar', icon: Calendar, detail: 'Beautiful monthly darshans for your wall' },
                { name: 'Sacred Jaap Mala', icon: Sparkles, detail: 'Blessed beads for your daily meditation' },
                { name: 'Mahaprasadam', icon: Utensils, detail: 'Sanctified dry prasadam from the temple' },
                { name: 'Gita Sar Book', icon: BookOpen, detail: 'The essence of Bhagavad Gita for daily wisdom' },
              ].map((gift, i) => (
                <motion.div
                  key={gift.name}
                  style={{ background: 'var(--bg-secondary)', borderRadius: '1.5rem', padding: '2rem', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '0.8rem', textAlign: 'center', alignItems: 'center' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', background: 'rgba(230,126,34,0.1)', color: 'var(--saffron)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                    <gift.icon size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: gift.name === 'Krishna Gift Calendar' ? 'var(--gold-primary)' : 'var(--text-primary)', margin: 0 }}>
                    {gift.name}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>{gift.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section style={{ padding: '7rem 0', background: 'var(--bg-secondary)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Build the<br />
                <span style={{ color: 'var(--gold-primary)', fontStyle: 'italic', fontWeight: 400 }}>Eternal</span> Home.
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 2.5rem' }}>
                Every stone counts. Every contribution is a seed of faith that will grow into a sanctuary for generations to come.
              </p>
              <a
                href={`${DONATE_URL}?seva=mandir-nirman`}
                className="btn btn-donate"
                style={{ background: 'linear-gradient(135deg, #b8860b, var(--saffron))', boxShadow: '0 12px 36px rgba(184,134,11,0.35)', padding: '0.875rem 2.5rem' }}
              >
                <Heart size={20} fill="currentColor" />
                Offer Seva Now
                <ChevronRight size={18} style={{ marginLeft: '4px' }} />
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButtons />
      <BottomNav />
    </>
  );
}
