import { useEffect } from 'react';
import { DONATE_URL } from '../config';

export default function Donate() {
  useEffect(() => {
    const queryString = window.location.search;
    window.location.replace(`${DONATE_URL}${queryString}`);
  }, []);

  return (
    <div style={{ padding: '10rem 2rem', textAlign: 'center', fontFamily: 'var(--font-ui)', color: 'var(--text-primary)' }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>Redirecting to Secure Donation Page...</h2>
      <p style={{ color: 'var(--text-muted)' }}>Please wait while we transfer you to the official Hare Krishna Marwar Donation Portal.</p>
    </div>
  );
}
