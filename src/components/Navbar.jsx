import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import styles from './Navbar.module.css';
import { DONATE_URL } from '../config';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Impact', href: '#impact' },
  { name: 'Why Donate', href: '#why-donate' },
  { name: 'Sponsor Seva', href: '#donation-form' },
];

/* ─── Scroll thresholds ─── */
const NAV_STICKY = 10;    // Navbar becomes sticky + white after 10px scroll
const NAV_AUTOHIDE = 200; // Navbar hides on scroll-down after 200px

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  // Scroll state
  const [navSticky, setNavSticky] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

  const lastScrollY = useRef(0);
  const rafId = useRef(0);

  const isActive = (href) => {
    return false; // Dynamic scroll handles active states
  };

  const handleScrollToSection = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      closeMenu();
      if (pathname !== '/') {
        navigate('/' + href);
        return;
      }
      const el = document.querySelector(href);
      if (el) {
        // Adjust offset for sticky header height
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleDonateClick = (e) => {
    e.preventDefault();
    closeMenu();
    window.location.href = DONATE_URL;
  };

  /**
   * Scroll detection logic:
   * - scrollY < TOPBAR_HIDE  → TopBar visible, Navbar transparent/flat
   * - scrollY >= TOPBAR_HIDE  → TopBar slides up, Navbar gets white bg + blur + shadow
   * - scrollY >= NAV_AUTOHIDE AND scrolling DOWN → Navbar slides up (hidden)
   * - Any scroll UP → Navbar immediately reappears
   * - scrollY returns to 0 → Everything resets
   */
  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    const delta = y - lastScrollY.current;

    // Sticky state (white bg + blur)
    setNavSticky(y >= NAV_STICKY);

    // Auto-hide on scroll down / show on scroll up
    if (y >= NAV_AUTOHIDE) {
      if (delta > 2) {
        // Scrolling down — hide
        setNavHidden(true);
      } else if (delta < -1) {
        // Scrolling up (any tiny upward gesture) — show immediately
        setNavHidden(false);
      }
    } else {
      setNavHidden(false);
    }

    lastScrollY.current = y;
    rafId.current = 0;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafId.current) return;
      rafId.current = window.requestAnimationFrame(handleScroll);
    };

    handleScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) window.cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ─── Main Navbar ─── */}
      <header
        className={[
          styles.navbar,
          navSticky ? styles.navSticky : '',
          navHidden ? styles.navHidden : '',
        ].filter(Boolean).join(' ')}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className={styles.logo} aria-label="Hare Krishna Mandir home">
            <img
              src="/gallery/logo.png"
              alt="Hare Krishna Mandir Logo"
              width={160}
              height={88}
              className={styles.logoImage}
            />
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={styles.navLink}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className={styles.navActions}>
            <button onClick={handleDonateClick} className={styles.ctaButton}>
              <Heart size={16} aria-hidden="true" />
              <span>Donate Now</span>
            </button>

            {/* Hamburger / X button */}
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={styles.hamburgerBar} />
              <span className={styles.hamburgerBar} />
              <span className={styles.hamburgerBar} />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Menu (slides from top) ─── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />
            <motion.div
              className={styles.mobileMenu}
              id="mobile-menu"
              initial={{ y: '-100%', opacity: 0.9 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0.9 }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            >
              <div className={styles.mobileMenuHeader}>
                <span className={styles.mobileMenuTitle}>Menu</span>
                <button onClick={closeMenu} className={styles.closeBtn} aria-label="Close menu">
                  <span className={styles.closeBtnX}>✕</span>
                </button>
              </div>
              <div className={styles.mobileLinks}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <a
                      href={link.href}
                      className={styles.mobileLink}
                      onClick={(e) => handleScrollToSection(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>
              <button onClick={handleDonateClick} className={styles.mobileCtaButton}>
                <Heart size={18} aria-hidden="true" />
                <span>Donate Now</span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
