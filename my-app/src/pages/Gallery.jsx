'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import styles from './Gallery.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { DONATE_URL } from '../config';

const categories = ['All', 'Temple', 'Gau Seva', 'Anna Daan', 'Events', 'Mandir Event'];

const photos = [
  { src: 'gallery-anna-daan-serving.jpg', cat: 'Anna Daan', title: 'Prasadam Serving Seva', aspect: 'tall' },
  { src: 'gallery-gau-seva-monks.jpg', cat: 'Gau Seva', title: 'Monks Feeding Cows', aspect: 'tall' },
  { src: 'gallery-gau-seva-volunteer.jpg', cat: 'Gau Seva', title: 'Gau Seva Volunteer Moment', aspect: 'tall' },
  { src: 'gallery-anna-daan-students.jpg', cat: 'Anna Daan', title: 'Anna Daan for School Children', aspect: 'tall' },
  { src: 'mandir event/mandir event.JPG', cat: 'Mandir Event', title: 'Mandir Event Gathering', aspect: 'wide' },
  { src: 'mandir event/mandir.JPG', cat: 'Temple', title: 'Mandir Exterior View' },
  { src: 'mandir event/mandir 2.JPG', cat: 'Temple', title: 'Mandir Temple Premises' },
  { src: 'mandir event/shri krishna mandir.JPG', cat: 'Temple', title: 'Shri Krishna Mandir' },
  { src: 'mandir event/krishna ji.JPG', cat: 'Temple', title: 'Krishna Ji Darshan', aspect: 'tall' },
  { src: 'mandir event/guru ji.JPG', cat: 'Events', title: 'Guru Ji Blessings' },
  { src: 'mandir event/mandir guru ji.JPG', cat: 'Events', title: 'Guru Ji at Mandir Event' },
  { src: 'mandir event/0I0A3133.JPG', cat: 'Mandir Event', title: 'Mandir Event Moment 1' },
  { src: 'mandir event/0I0A3160.JPG', cat: 'Mandir Event', title: 'Mandir Event Moment 2' },
  { src: 'mandir event/0I0A3229.JPG', cat: 'Mandir Event', title: 'Mandir Event Moment 3', aspect: 'wide' },
];

function GalleryImage({ src, alt, className }) {
  const [showFallback, setShowFallback] = useState(false);
  const safeSrc = `/gallery/${src.split('/').map(encodeURIComponent).join('/')}`;

  if (showFallback) {
    return (
      <div className="img-placeholder" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ccc' }}>
        <span>{src}</span>
      </div>
    );
  }

  return (
    <img
      src={safeSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setShowFallback(true)}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    document.title = "Photo Gallery | Hare Krishna Marwar Mandir Jodhpur";
  }, []);

  const filtered = filter === 'All' ? photos : photos.filter(p => p.cat === filter);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <img
              src="/gallery/gallery page background.jpeg"
              alt="Gallery at Hare Krishna Marwar Mandir"
              className={styles.heroImage}
            />
            <div className={styles.overlay} />
          </div>
          <div className={`container ${styles.heroContent}`}>
            <span className="section-label" style={{ color: 'var(--saffron-light)' }}>Photo Gallery</span>
            <h1 className={styles.heroTitle}>Moments of Devotion</h1>
            <p className={styles.heroDesc}>
              Every moment here is seva in action. Your donation sustains daily prasadam,
              cow care, and the mandir we are building together.
            </p>
            <div className={styles.heroActions}>
              <a href={DONATE_URL} className="btn btn-donate">Donate Now</a>
              <a href="#gallery-grid" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Explore Gallery</a>
            </div>
            <div className={styles.heroTrust}>
              <span style={{ color: 'var(--saffron)' }}>Secure ICICI payment</span>
              <span style={{ color: 'var(--saffron)' }}>80G tax benefit</span>
              <span style={{ color: 'var(--saffron)' }}>Serving since 2012</span>
            </div>
          </div>
        </section>

        <section className="section-pad" id="gallery-grid">
          <div className="container">
            {/* Filter tabs */}
            <div className={styles.filters}>
              {categories.map(c => (
                <button key={c} className={`${styles.filterBtn} ${filter === c ? styles.filterActive : ''}`} onClick={() => setFilter(c)}>{c}</button>
              ))}
            </div>

            {/* Grid */}
            <motion.div className={styles.grid} layout>
              <AnimatePresence>
                {filtered.map((p, i) => (
                  <motion.div
                    key={p.src}
                    className={`${styles.gridItem} ${p.aspect === 'tall' ? styles.tall : ''} ${p.aspect === 'wide' ? styles.wide : ''}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    onClick={() => setLightbox(p)}
                  >
                    <GalleryImage src={p.src} alt={p.title} className={styles.gridImage} />
                    <div className={styles.itemOverlay}>
                      <ZoomIn size={24} />
                      <span style={{ marginTop: '8px' }}>{p.title}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div className={styles.lightbox} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
              <button className={styles.lightboxClose} aria-label="Close image"><X size={28} /></button>
              <motion.div className={styles.lightboxContent} initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={e => e.stopPropagation()}>
                <div style={{ width: '80vw', maxWidth: '900px', height: '60vh', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
                  <GalleryImage src={lightbox.src} alt={lightbox.title} className={styles.lightboxImage} />
                </div>
                <p className={styles.lightboxTitle}>{lightbox.title}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
