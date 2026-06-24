import { useState, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './PhotoGallery.module.css';

const categories = ['All', 'Prasadam', 'Gau Seva', 'Festivals', 'Temple'];

// Configure your video items here
const videoItems = [
  // Top video for All tab (also in Temple category)
  { id: 'top1', videoId: 'Hmu6S_kxQ50', thumbnail: 'https://img.youtube.com/vi/Hmu6S_kxQ50/hqdefault.jpg', category: 'Temple', title: 'Temple Introduction' },

  // Prasadam category shorts
  { id: 'p1', videoId: 'rJNWTNjNCcQ', thumbnail: 'https://img.youtube.com/vi/rJNWTNjNCcQ/hqdefault.jpg', category: 'Prasadam', title: 'Anna Daan Seva 1' },
  { id: 'p2', videoId: 'FkWOd2Qviv4', thumbnail: 'https://img.youtube.com/vi/FkWOd2Qviv4/hqdefault.jpg', category: 'Prasadam', title: 'Anna Daan Seva 2' },
  { id: 'p3', videoId: 'AvE3bqPnJIc', thumbnail: 'https://img.youtube.com/vi/AvE3bqPnJIc/hqdefault.jpg', category: 'Prasadam', title: 'Anna Daan Seva 3' },
  { id: 'p4', videoId: 'O4dSd4mzKCs', thumbnail: 'https://img.youtube.com/vi/O4dSd4mzKCs/hqdefault.jpg', category: 'Prasadam', title: 'Anna Daan Seva 4' },
  { id: 'p5', videoId: '4Qt4SRKrg3I', thumbnail: 'https://img.youtube.com/vi/4Qt4SRKrg3I/hqdefault.jpg', category: 'Prasadam', title: 'Anna Daan Seva 5' },
  { id: 'p6', videoId: 'NFbdbY4RQmg', thumbnail: 'https://img.youtube.com/vi/NFbdbY4RQmg/hqdefault.jpg', category: 'Prasadam', title: 'Anna Daan Seva 6' },
  { id: 'p7', videoId: '6jP1etW-PHI', thumbnail: 'https://img.youtube.com/vi/6jP1etW-PHI/hqdefault.jpg', category: 'Prasadam', title: 'Anna Daan Seva 7' },

  // Gau Seva category shorts
  { id: 'g1', videoId: 'w7Pu43M0i-I', thumbnail: 'https://img.youtube.com/vi/w7Pu43M0i-I/hqdefault.jpg', category: 'Gau Seva', title: 'Gau Seva Marwar' },

  // Festivals category shorts
  { id: 'f1', videoId: 'U6Hvq8yxAsk', thumbnail: 'https://img.youtube.com/vi/U6Hvq8yxAsk/hqdefault.jpg', category: 'Festivals', title: 'Festivals & Harinam 1' },
  { id: 'f2', videoId: 'w6HTmB580f0', thumbnail: 'https://img.youtube.com/vi/w6HTmB580f0/hqdefault.jpg', category: 'Festivals', title: 'Festivals & Harinam 2' },

  // Temple category shorts
  { id: 't1', videoId: 'wn_43IP2koQ', thumbnail: 'https://img.youtube.com/vi/wn_43IP2koQ/hqdefault.jpg', category: 'Temple', title: 'Mandir Nirman Progress 1' },
  { id: 't2', videoId: 'HN0m_eRljRo', thumbnail: 'https://img.youtube.com/vi/HN0m_eRljRo/hqdefault.jpg', category: 'Temple', title: 'Mandir Nirman Progress 2' },
];

function VideoCard({ videoId, thumbnail, title, isPlaying, onPlay }) {
  return (
    <div className={styles.shortFrame}>
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.shortIframe}
        />
      ) : (
        <div className={styles.thumbnailWrapper} onClick={onPlay}>
          <img
            src={thumbnail}
            alt={title}
            className={styles.videoThumb}
          />
          <div className={styles.videoOverlay} />
          <div className={styles.playBtnContainer}>
            <button className={styles.playBtn} aria-label={`Play video: ${title}`}>
              <Play size={24} fill="white" color="white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PhotoGallery() {
  const [filter, setFilter] = useState('All');
  const [activeVideoId, setActiveVideoId] = useState(null);
  const gridRef = useRef(null);

  const handleFilterChange = (c) => {
    setFilter(c);
    setActiveVideoId(null);
  };

  // Filter out items with duplicate videoId in "All" view to prevent showing the same video twice
  const filteredItems = filter === 'All' 
    ? videoItems.filter((item, index, self) => 
        self.findIndex(v => v.videoId === item.videoId) === index
      )
    : videoItems.filter(item => item.category === filter);

  const scroll = (direction) => {
    if (gridRef.current) {
      const scrollAmount = 364; // scroll by 340px (card) + 24px (gap)
      gridRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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
                onClick={() => handleFilterChange(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1}>
        <div className={styles.carouselWrapper}>
          <button 
            className={`${styles.navArrow} ${styles.prev}`} 
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <div ref={gridRef} className={styles.videoGrid}>
            {filteredItems.map((item) => (
              <VideoCard
                key={item.id}
                videoId={item.videoId}
                thumbnail={item.thumbnail}
                title={item.title}
                isPlaying={activeVideoId === item.id}
                onPlay={() => setActiveVideoId(item.id)}
              />
            ))}
          </div>

          <button 
            className={`${styles.navArrow} ${styles.next}`} 
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
