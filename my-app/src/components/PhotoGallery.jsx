import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './PhotoGallery.module.css';

const categories = ['All', 'Prasadam', 'Gau Seva', 'Festivals', 'Temple'];

const photos = [
  { src: 'gallery-anna-daan-serving.jpg', cat: 'Prasadam', title: 'Daily Prasadam Distribution in Jodhpur', aspect: 'tall' },
  { src: 'gallery-gau-seva-monks.jpg', cat: 'Gau Seva', title: 'Gaushala: Devotees Feeding Cows', aspect: 'tall' },
  { src: 'gallery-gau-seva-volunteer.jpg', cat: 'Gau Seva', title: 'Go-Protection & Care activities', aspect: 'tall' },
  { src: 'gallery-anna-daan-students.jpg', cat: 'Prasadam', title: 'Nutritious Meals for School Children', aspect: 'tall' },
  { src: 'mandir event/mandir.JPG', cat: 'Temple', title: 'Upcoming Mandir Front Elevation' },
  { src: 'mandir event/shri krishna mandir.JPG', cat: 'Temple', title: 'Sri Sri Radha Madan Mohan Sanctum' },
  { src: 'mandir event/krishna ji.JPG', cat: 'Festivals', title: 'Krishna Janmashtami Shringar', aspect: 'tall' },
  { src: 'mandir event/guru ji.JPG', cat: 'Festivals', title: 'Spiritual Discourses and Harinam Festivals' },
];

function GalleryImage({ src, alt, className }) {
  const [showFallback, setShowFallback] = useState(false);
  const safeSrc = `/gallery/${src.split('/').map(encodeURIComponent).join('/')}`;

  if (showFallback) {
    return (
      <div className={`img-placeholder ${className ?? ''}`} style={{ height: '240px' }}>
        <span>{src}</span>
      </div>
    );
  }

  return (
    <img
      src={safeSrc}
      alt={alt}
      className={className}
      width={600}
      height={450}
      loading="lazy"
      onError={() => setShowFallback(true)}
    />
  );
}

export default function PhotoGallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === 'All' ? photos : photos.filter(p => p.cat === filter);

  return (
    <section className={styles.section} id="gallery" aria-label="Media Gallery">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>Devotion in Action</span>
            <h2 className={styles.title}>Welfare & Temple Gallery</h2>
            <p className={styles.desc}>
              See how your contributions directly support the gaushala, build the temple, and feed the hungry.
            </p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={0.05}>
          <div className={styles.filters}>
            {categories.map((c) => (
              <button
                key={c}
                className={`${styles.filterBtn} ${filter === c ? styles.filterActive : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Photos Grid */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.src}
                className={`${styles.gridItem} ${p.aspect === 'tall' ? styles.tall : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                onClick={() => setLightbox(p)}
              >
                <div className={styles.imgWrap}>
                  <GalleryImage src={p.src} alt={p.title} className={styles.gridImage} />
                  <div className={styles.itemOverlay}>
                    <ZoomIn size={24} className={styles.zoomIcon} />
                    <span className={styles.itemTitle}>{p.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button className={styles.lightboxClose} aria-label="Close image">
              <X size={28} />
            </button>
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.lightboxImgWrap}>
                <img
                  src={`/gallery/${lightbox.src.split('/').map(encodeURIComponent).join('/')}`}
                  alt={lightbox.title}
                  className={styles.lightboxImage}
                  width={1200}
                  height={900}
                />
              </div>
              <p className={styles.lightboxTitle}>{lightbox.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
