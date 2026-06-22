import { useRef, Suspense, useEffect } from 'react';
import { Heart, Utensils, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import DonateForm from '../components/DonateForm';

const menuItems = [
  { name: 'Steamed Rice', desc: 'Premium steamed rice offered to the Lord', icon: '🍚' },
  { name: 'Nutritious Dal / Kadhi', desc: 'Protein-rich traditional spiced lentils', icon: '🍲' },
  { name: 'Seasonal Sabji', desc: 'Fresh local vegetables prepared daily', icon: '🥗' },
  { name: 'Fresh Roti / Puri', desc: 'Warm flatbreads prepared in our temple kitchen', icon: '🫓' },
  { name: 'Sweet Prasadam', desc: 'Sacred kheer or halwa offered as dessert', icon: '🥮' }
];

export default function AnnaDaan() {
  useEffect(() => {
    document.title = "Anna Daan Seva — Feed the Needy & Pilgrims | Hare Krishna Marwar Jodhpur | 80G Tax Exempt";
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingBottom: '2rem' }}>

        {/* Main Content Area */}
        <section style={{ paddingTop: '110px', paddingBottom: '3rem' }}>
          <div className="container" style={{ overflow: 'visible' }}>
            
            {/* Header / Title Banner - ALWAYS TOP */}
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              height: '240px', 
              borderRadius: '1.5rem', 
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2rem'
            }}>
              <img 
                src="/aan dan seva.png" 
                alt="Anna Daan Seva Jodhpur" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)' 
              }} />
              <div style={{ 
                position: 'absolute', 
                bottom: '1.5rem', 
                left: '1.5rem', 
                right: '1.5rem' 
              }}>
                <span style={{ 
                  color: 'var(--saffron)', 
                  textTransform: 'uppercase', 
                  fontSize: '0.7rem', 
                  fontWeight: '800', 
                  letterSpacing: '0.15em',
                  fontFamily: 'var(--font-ui)',
                  display: 'inline-block',
                  background: 'rgba(0,0,0,0.5)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '0.75rem',
                  marginBottom: '0.4rem'
                }}>
                  Hare Krishna Movement Jodhpur
                </span>
                <h1 style={{ 
                  color: '#fff', 
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', 
                  margin: 0, 
                  fontWeight: '700',
                  lineHeight: '1.1',
                  fontFamily: 'var(--font-heading)' 
                }}>
                  Anna Daan Seva
                </h1>
              </div>
            </div>

            {/* Custom Responsive Grid Layout: order-1 on form puts it first on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start" style={{ overflow: 'visible' }}>
              
              {/* Form Column (Span 5 on Desktop, order-1 on mobile so it is at the top) */}
              <div className="lg:col-span-5 order-1 lg:order-2 relative" style={{ zIndex: 10, overflow: 'visible' }}>
                <aside className="sticky-sidebar" style={{ scrollMarginTop: '110px' }}>
                  <div className="p-3 sm:p-6" style={{
                    background: 'var(--bg-card)',
                    borderRadius: '1.5rem',
                    border: '1px solid var(--border-gold)',
                    boxShadow: '0 10px 30px rgba(230, 126, 34, 0.08)',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      padding: '1.25rem 1rem 0.25rem 1rem',
                      textAlign: 'center'
                    }}>
                      <span style={{ 
                        fontSize: '0.65rem', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.12em', 
                        color: 'var(--saffron)', 
                        fontWeight: '800',
                        display: 'block',
                        marginBottom: '0.15rem'
                      }}>
                        Sponsor Prasadam Distribution
                      </span>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--text-primary)',
                        fontWeight: 'bold',
                        margin: 0
                      }}>
                        I Wish to Sponsor...
                      </h3>
                    </div>

                    <Suspense fallback={
                      <div className="p-8 text-center text-muted font-ui">
                        Loading Donation Form...
                      </div>
                    }>
                      <DonateForm defaultSevaId="anna-daan" />
                    </Suspense>
                  </div>
                </aside>
              </div>

              {/* Info & Story Column (Span 7 on Desktop, order-2 on mobile so it is below the form) */}
              <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
                
                {/* Intro & Badges */}
                <div className="space-y-4">
                  <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(107, 142, 122, 0.1)', color: 'var(--green-earth)', padding: '0.25rem 0.6rem', borderRadius: '0.5rem', fontSize: '0.75rem', fontWeight: '700' }}>
                      <Award size={14} /> 80G Tax Benefit
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(230, 126, 34, 0.1)', color: 'var(--saffron)', padding: '0.25rem 0.6rem', borderRadius: '0.5rem', fontSize: '0.75rem', fontWeight: '700' }}>
                      <ShieldCheck size={14} /> Secure Payment
                    </span>
                  </div>
                  
                  <h2 style={{ fontSize: '1.4rem', lineHeight: '1.35', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>
                    Feed Visitors & Devotees at the Jodhpur Temple
                  </h2>
                  
                  <p style={{ fontSize: '0.98rem', lineHeight: '1.65', color: 'var(--text-secondary)', margin: 0 }}>
                    Every single day between 11:30 am and 2:00 pm, the Hare Krishna Movement Jodhpur serves warm, nutritious sanctified meals (prasadam) to hundreds of pilgrims and needy visitors. This initiative is inspired by <strong>Srila Prabhupada</strong>'s vision: <em>"No one should go hungry within a ten-mile radius of the temple."</em>
                  </p>
                </div>

                {/* Key Highlights */}
                <div style={{ background: 'var(--bg-secondary)', borderRadius: '1.25rem', padding: '1.25rem', border: '1px solid var(--border-light)' }} className="space-y-3">
                  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--saffron)', flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                      Pujari prayers & Sankalpa offered for your family on your special days.
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--saffron)', flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                      Hygienic, fresh, and offered first to Lord Krishna with absolute devotion.
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--saffron)', flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                      Instant 80G tax exemption receipt sent directly to your email.
                    </p>
                  </div>
                </div>

                {/* Compact Daily Prasadam Menu */}
                <div style={{
                  background: 'var(--bg-card)',
                  borderRadius: '1.25rem',
                  padding: '1.25rem',
                  border: '1px solid var(--border-light)'
                }}>
                  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(230, 126, 34, 0.1)',
                      color: 'var(--saffron)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Utensils size={18} />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-heading)', margin: 0, fontWeight: '700' }}>Our Daily Prasadam Menu</h3>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {menuItems.map((item) => (
                      <div key={item.name} style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(230, 126, 34, 0.06)' }}>
                        <span style={{ fontSize: '1.25rem', lineHeight: '1' }}>{item.icon}</span>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: '700' }}>{item.name}</span>
                          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
            
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
