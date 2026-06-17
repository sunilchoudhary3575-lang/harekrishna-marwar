import { useRef, Suspense, useEffect } from 'react';
import { Heart, Home, Leaf, Award, ChevronRight, MessageSquareQuote, ShieldCheck, BadgeCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import DonateForm from '../components/DonateForm';
import { DONATE_URL } from '../config';

const stats = [
  { label: 'Cows Protected', value: '50+', icon: Home },
  { label: 'Fresh Fodder', value: 'Daily', icon: Leaf },
  { label: 'Tax Benefit', value: '80G', icon: Award },
];

const badges = [
  { icon: Home, text: 'Lifetime Shelter' },
  { icon: Award, text: 'Registered Goshala' },
  { icon: Leaf, text: 'Organic Farming Focus' },
  { icon: ShieldCheck, text: '24/7 Medical Care' },
];

export default function GauSeva() {
  useEffect(() => {
    document.title = "Gau Seva — Donate for Cow Protection | Hare Krishna Marwar Jodhpur";
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

        {/* ── Hero ── */}
        <section style={{ 
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
            <img
              src="/gau dan seva.png"
              alt="Gau Seva — protecting sacred cows"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.55)' }}
            />
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.45) 75%, rgba(20,16,10,0.82) 100%)' 
            }} />
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff' }}>
            <span style={{ 
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
              Mother Cow Protection
            </span>

            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Gau Seva<br />
              <span style={{ color: '#7ec8a0', fontStyle: 'italic', fontWeight: 400 }}>Nourish Mother</span>
            </h1>

            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.88)', fontStyle: 'italic', maxWidth: '580px', margin: '0 auto 2.5rem' }}>
              &ldquo;The cow is the mother of all entities. Protecting her is protecting humanity itself.&rdquo;
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`${DONATE_URL}?seva=gau-seva`} className="btn btn-donate" style={{ minWidth: '200px' }}>
                <Heart size={18} /> Become a Gau Sevak
              </a>
              <a href={DONATE_URL} className="btn btn-outline" style={{ minWidth: '160px', color: '#fff', borderColor: '#fff' }}>
                View All Sevas
              </a>
            </div>
          </div>
        </section>

        {/* ── Story Section ── */}
        <section style={{ padding: '6rem 0' }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              <div>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '-2.5rem', left: '-1.5rem', fontFamily: 'var(--font-spiritual)', fontSize: '7rem', color: 'rgba(230,126,34,0.06)', pointerEvents: 'none', userSelect: 'none' }}>गौ</span>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.15 }}>
                    A Sanctuary for the<br />
                    <span style={{ color: 'var(--green-earth)' }}>Sacred</span> Mother.
                  </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', marginTop: '2rem' }}>
                  <p style={{ fontSize: '1.12rem', color: 'var(--text-secondary)', lineHeight: 1.78 }}>
                    In the Marwar landscape, the cow represents purity and abundance. Our <strong style={{ color: 'var(--green-earth)' }}>Goshala</strong> provides a lifelong home for neglected, elderly, and abandoned cows.
                  </p>
                  <blockquote style={{ padding: '1.1rem 1.4rem', borderLeft: '3px solid rgba(107,142,122,0.35)', fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                    &ldquo;Surabhi cows are the source of all prosperity. By serving them, one attains all the spiritual goals of life.&rdquo;
                  </blockquote>
                  <p style={{ fontSize: '1.12rem', color: 'var(--text-secondary)', lineHeight: 1.78 }}>
                    Every cow in our care receives fresh fodder, medical attention, and the love of our devotees. We believe that cow protection is not just a duty, but a sacred path to spiritual peace.
                  </p>
                </div>
              </div>

              <div>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1.2 / 1', borderRadius: '2.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                  <img src="/Gau Seva seva impact.jpg" alt="Gau Seva at the Goshala" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,60,35,0.78) 0%, transparent 55%)' }} />
                  <div style={{ position: 'absolute', bottom: '1.8rem', left: '1.8rem', color: '#fff' }}>
                    <span style={{ fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', color: '#7ec8a0', display: 'block', marginBottom: '0.35rem' }}>Sanctuary Impact</span>
                    <strong style={{ fontSize: '1.25rem' }}>24/7 Care & Medical Support</strong>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Trust / Bento Section ── */}
        <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', color: 'var(--green-earth)', display: 'block', marginBottom: '0.5rem' }}>Our Promise</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>Compassion in Action</h2>
              <div className="section-divider" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div style={{ background: 'var(--bg-primary)', borderRadius: '2rem', padding: '2.5rem', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '220px', position: 'relative' }}>
                <p style={{ fontStyle: 'italic', fontSize: '1.2rem', lineHeight: 1.65, color: 'var(--text-primary)' }}>
                  &ldquo;Serving a cow is equivalent to serving all the demigods and the Supreme Lord himself.&rdquo;
                </p>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--green-earth)', marginTop: '1rem', display: 'block' }}>— Vedic Wisdom</span>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #4a7c59, #2d5a3d)', borderRadius: '2rem', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#fff', minHeight: '220px' }}>
                <span style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>50+</span>
                <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>Sacred cows find refuge in our sanctuary every year</span>
              </div>

              <div style={{ background: 'var(--bg-primary)', borderRadius: '2rem', padding: '2rem', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {badges.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '2.4rem', height: '2.4rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(107,142,122,0.12)', color: 'var(--green-earth)' }}>
                        <Icon size={18} />
                      </div>
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-secondary)' }}>{b.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Expanded Content Section ── */}
        <section style={{ padding: '6rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-main)', lineHeight: '1.8' }}>
              <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', marginBottom: '2rem' }}>The Spiritual and Social Significance of Gau Seva</h2>
              
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                In the timeless traditions of Sanatana Dharma, the cow is revered not merely as an animal, but as a universal mother—<i>Gau Mata</i>. According to the Vedic scriptures, a cow’s body is the abode of thirty-three crore demigods. Protecting and serving the cow is considered one of the highest forms of spiritual duty, equivalent to performing great sacrifices (yajnas). In a rapidly urbanizing world where livestock are often abandoned once they stop producing milk, Hare Krishna Marwar Mandir has taken a solemn vow to provide a lifelong, loving sanctuary for these gentle creatures.
              </p>

              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--green-earth)', marginBottom: '1rem', marginTop: '2.5rem', fontWeight: 700 }}>A Lifelong Sanctuary</h3>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                Our goshala in Jodhpur is not a dairy farm; it is a permanent retirement home and sanctuary for destitute, rescued, and elderly cows. When a cow is brought to our facility, she is guaranteed safety, food, and medical attention for the rest of her natural life. We understand that cows are sentient beings capable of feeling fear, pain, and joy. Our dedicated staff and volunteers work tirelessly to ensure that every cow is treated with the utmost respect and dignity. They are provided with nutrient-rich fodder, clean drinking water, spacious roaming areas, and regular check-ups by qualified veterinarians. 
              </p>

              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--green-earth)', marginBottom: '1rem', marginTop: '2.5rem', fontWeight: 700 }}>Ecological Harmony and Organic Agriculture</h3>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                Beyond the spiritual merits, protecting cows has profound ecological benefits. Our goshala operates on a model of sustainability and harmony with nature. Cow dung (gobar) and cow urine (gomutra) are highly valuable resources in natural farming. We utilize these by-products to produce rich, organic compost and natural pest repellents, which are then used in local agriculture and the temple&apos;s own gardens. This closed-loop system not only revitalizes the soil and promotes chemical-free food production but also demonstrates how cow protection is integrally linked to environmental conservation and human health.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section style={{ padding: '7rem 0', background: 'var(--bg-secondary)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              Protect the<br />
              <span style={{ color: 'var(--green-earth)', fontStyle: 'italic', fontWeight: 400 }}>Mother</span> Today.
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 2.5rem' }}>
              Become a Gau Sevak and ensure that our sacred cows live a life of peace, fullness, and divine care.
            </p>
            <a
              href={`${DONATE_URL}?seva=gau-seva`}
              className="btn btn-donate"
              style={{ background: 'linear-gradient(135deg, #4a7c59, #2d5a3d)', boxShadow: '0 12px 36px rgba(74,124,89,0.35)', padding: '0.875rem 2.5rem' }}
            >
              <Heart size={20} fill="currentColor" />
              Become a Gau Sevak
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
