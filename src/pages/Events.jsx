'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, BookOpen, Utensils, Leaf, Music } from 'lucide-react';
import styles from './Events.module.css';
import WaveBackdrop from '../components/WaveBackdrop';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { DONATE_URL } from '../config';

const eventsList = [
  {
    title: 'Gaura Purnima',
    date: '2026-03-03',
    time: '5:00 AM - 9:00 PM',
    description: 'Celebrate the divine appearance of Sri Chaitanya Mahaprabhu with kirtan, abhishek, and prasadam.',
    image: '/srila-prabhupada.jpg',
  },
  {
    title: 'Ram Navami',
    date: '2026-03-27',
    time: '6:00 AM - 8:00 PM',
    description: 'Grand celebration of Lord Rama\'s appearance day with special darshan, chanting, and feast.',
    image: '/about-mission.png',
  },
  {
    title: 'Akshaya Tritiya',
    date: '2026-04-19',
    time: '7:00 AM - 7:00 PM',
    description: 'An auspicious day for new beginnings with special seva, blessings, and donation opportunities.',
    image: '/gallery/gallery-anna-daan-serving.jpg',
  },
  {
    title: 'Narasimha Jayanti',
    date: '2026-04-30',
    time: '5:30 PM - 8:30 PM',
    description: 'Observe the appearance of Lord Narasimha with powerful prayers, kirtan, and evening arati.',
    image: '/gallery/gallery-gau-seva-volunteer.jpg',
  },
  {
    title: 'Ratha Yatra',
    date: '2026-07-16',
    time: '4:00 PM - 9:00 PM',
    description: 'Join the grand chariot procession through the city with devotees, chanting, and prasadam.',
    image: '/temple-hero-bg.png',
  },
  {
    title: 'Janmashtami',
    date: '2026-09-04',
    time: '12:00 AM - 12:30 AM',
    description: 'Celebrate the birth of Lord Krishna with midnight darshan, bhajans, and a festive feast.',
    image: '/temple-intro-video-thumbnail.jpg',
  },
  {
    title: 'Radhashtami',
    date: '2026-09-19',
    time: '10:57 AM - 1:23 PM',
    description: 'Honor the appearance of Srimati Radharani with special worship, kirtan, and prasadam.',
    image: '/gallery/gallery-gau-seva-monks.jpg',
  },
];

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function parseEventDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function getUpcomingEvents(events) {
  const today = startOfDay(new Date());
  const cutoff = new Date(today);
  cutoff.setDate(cutoff.getDate() + 180); // Expand range to show events in React static landing

  return events
    .map((event) => ({ ...event, parsedDate: parseEventDate(event.date) }))
    .filter((event) => event.parsedDate >= today && event.parsedDate <= cutoff)
    .sort((a, b) => a.parsedDate - b.parsedDate)
    .map(({ parsedDate, ...event }) => event);
}

function getDaysLeft(dateString) {
  const today = startOfDay(new Date());
  const eventDate = startOfDay(parseEventDate(dateString));
  return Math.max(0, Math.ceil((eventDate - today) / MS_PER_DAY));
}

const upcomingEvents = getUpcomingEvents(eventsList);

const programs = [
  { icon: BookOpen, title: 'Bhagavad Gita Classes', schedule: 'Every Sunday, 10 AM', desc: 'Weekly study of Bhagavad Gita with practical life applications.', color: '#8B1A1A' },
  { icon: Utensils, title: 'Anna Daan Seva', schedule: 'Daily, 12 PM', desc: 'Free nutritious prasadam served daily to everyone.', color: '#E05C00' },
  { icon: Leaf, title: 'Gau Seva', schedule: 'Daily, 6 AM & 5 PM', desc: 'Cow feeding and care at our Gau Shala.', color: '#2D7D2D' },
  { icon: Music, title: 'Evening Kirtan', schedule: 'Daily, 7 PM', desc: 'Soul-stirring congregational chanting of the Holy Names.', color: '#6B21A8' },
  { icon: Users, title: 'Youth Program', schedule: 'Every Saturday, 5 PM', desc: 'Secrets of Success — value-based guidance for young minds.', color: '#C8961E' },
  { icon: Calendar, title: 'Ekadashi Celebration', schedule: 'Twice Monthly', desc: 'Special fasting, kirtan, and spiritual discourse on Ekadashi.', color: '#1A5276' },
];

export default function Events() {
  const hasUpcomingEvents = upcomingEvents.length > 0;

  useEffect(() => {
    document.title = "Events & Festivals | Hare Krishna Marwar Mandir Jodhpur";
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <section className={styles.hero} aria-label="Events and Festivals Hero">
          <div className={styles.heroBg}>
            <WaveBackdrop variant="events" />
            <img
              src="/event page/event page background.jpeg"
              alt="Devotees performing kirtan at Hare Krishna Mandir Jodhpur"
              className={styles.heroImage}
            />
            <div className={styles.overlay} />
          </div>
          <div className={`container ${styles.heroContent}`}>
            <span className="section-label" style={{ color: 'var(--saffron-light)' }}>Festivals & Programs</span>
            <h1 className={styles.heroTitle}>Events at the Mandir</h1>
            <p className={styles.heroDesc}>
              Every festival and kirtan is made possible by devotee seva. Your donation keeps prasadam,
              cow care, and spiritual programs open to all.
            </p>
            <div className={styles.heroActions}>
              <a href={DONATE_URL} className="btn btn-donate">Donate Now</a>
              <a href="#upcoming-events" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>View Upcoming</a>
            </div>
            <div className={styles.heroTrust}>
              <span style={{ color: 'var(--saffron)' }}>Secure ICICI payment</span>
              <span style={{ color: 'var(--saffron)' }}>80G tax benefit</span>
              <span style={{ color: 'var(--saffron)' }}>Serving since 2012</span>
            </div>
          </div>
        </section>

        {/* Upcoming */}
        <section className="section-pad" id="upcoming-events" aria-label="Upcoming Events Section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Upcoming</span>
              <h2 className="section-title">Festivals & Celebrations</h2>
              <div className="section-divider" />
            </div>
            <div className={styles.eventsGrid}>
              {hasUpcomingEvents ? (
                upcomingEvents.map((event, i) => (
                  <motion.article
                    key={event.title}
                    className={`card ${styles.eventCard}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className={styles.eventImg}>
                      <img
                        src={event.image}
                        alt={`Upcoming festival: ${event.title} at Hare Krishna Marwar Mandir Jodhpur`}
                        className={styles.eventImage}
                      />
                      <span className={styles.daysLeftBadge}>{getDaysLeft(event.date)} days left</span>
                    </div>
                    <div className={styles.eventBody}>
                      <div className={styles.eventMeta}>
                        <span className={styles.eventDate}><Calendar size={14} /> {event.date}</span>
                        <span className={styles.eventTime}><Clock size={14} /> {event.time}</span>
                      </div>
                      <h3 className={styles.eventTitle}>{event.title}</h3>
                      <p className={styles.eventDesc}>{event.description}</p>
                    </div>
                  </motion.article>
                ))
              ) : (
                <div className={styles.emptyState}>No upcoming festivals in the next 30 days</div>
              )}
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className={`section-pad ${styles.programsBg}`} aria-label="Regular Weekly and Daily Programs">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Weekly & Daily</span>
              <h2 className="section-title">Regular Programs</h2>
              <div className="section-divider" />
              <p className="section-desc">Join our regular spiritual programs and become a part of the devotional community.</p>
            </div>
            <div className={styles.programsGrid}>
              {programs.map((p, i) => (
                <motion.article key={p.title} className={styles.programCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: i * 0.08 }}>
                  <div className={styles.programIcon} style={{ background: `${p.color}15`, color: p.color }}><p.icon size={24} /></div>
                  <div>
                    <h3 className={styles.programTitle} lang={p.title.match(/[\u0900-\u097F]/) ? "hi" : "en"}>{p.title}</h3>
                    <span className={styles.programSchedule}>{p.schedule}</span>
                    <p className={styles.programDesc}>{p.desc}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
