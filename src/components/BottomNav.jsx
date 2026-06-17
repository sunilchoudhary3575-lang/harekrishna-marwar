import { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, Heart, Calendar, Camera, Phone } from 'lucide-react';
import styles from './BottomNav.module.css';
import { DONATE_URL } from '../config';

const items = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Calendar, label: 'Seva', href: '/events' },
  { icon: Camera, label: 'Gallery', href: '/gallery' },
  { icon: Phone, label: 'Contact', href: '/contact' },
];

export default function BottomNav() {
  const pathname = useLocation().pathname;

  const activeHref = useMemo(() => {
    if (!pathname) return '/';
    const direct = items.find((item) => item.href === pathname);
    if (direct) return direct.href;
    const nested = items.find((item) => item.href !== '/' && pathname.startsWith(item.href));
    return nested?.href || '/';
  }, [pathname]);

  return (
    <>
      {pathname !== '/donate' && (
        <a href={DONATE_URL} className={styles.stickyDonate} aria-label="Donate Now">
          <Heart size={18} /> Donate Now
        </a>
      )}

      <nav className={styles.nav}>
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={`${styles.item} ${activeHref === item.href ? styles.active : ''}`}
            aria-current={activeHref === item.href ? 'page' : undefined}
          >
            <item.icon size={19} />
            <span className={styles.label}>{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
