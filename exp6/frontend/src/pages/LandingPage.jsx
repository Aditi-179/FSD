import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', mins: '00', secs: '00' });

  useEffect(() => {
    const target = new Date('2026-06-14T09:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) return;
      
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      
      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        mins: String(mins).padStart(2, '0'),
        secs: String(secs).padStart(2, '0')
      });
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-wrapper">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <div className="eyebrow-line"></div>
            <span className="eyebrow-text">June 14, 2026 · Mumbai</span>
          </div>

          <h1 className="hero-title">
            IDEA<span>S</span><br/>THAT<br/>RESHAPE
          </h1>
          <p className="hero-subtitle">TEDx MUMBAI 2026</p>

          <div className="countdown" id="countdown">
            <div className="cd-unit"><span className="cd-num">{timeLeft.days}</span><span className="cd-label">Days</span></div>
            <div className="cd-unit"><span className="cd-num">{timeLeft.hours}</span><span className="cd-label">Hours</span></div>
            <div className="cd-unit"><span className="cd-num">{timeLeft.mins}</span><span className="cd-label">Mins</span></div>
            <div className="cd-unit"><span className="cd-num">{timeLeft.secs}</span><span className="cd-label">Secs</span></div>
          </div>

          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-label">Venue</span>
              <span className="meta-value">NCPA, Mumbai</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Speakers</span>
              <span className="meta-value">18 Visionaries</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Capacity</span>
              <span className="meta-value">1,200 Seats</span>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="/register" className="btn-primary"style={{ display: 'inline-block', padding: '0.85rem 2rem', borderRadius: '12px' }}>Register Now</Link>
            <a href="#speakers" className="btn-outline" style={{ display: 'inline-block', padding: '0.85rem 2rem', borderRadius: '12px' }}>Meet the Speakers</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-x-mark">x</div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-strip" aria-hidden="true">
        <div className="ticker-inner" id="ticker">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="ticker-item">
              {i % 5 === 0 && 'IDEAS WORTH SPREADING '}
              {i % 5 === 1 && 'TEDxMUMBAI 2026 '}
              {i % 5 === 2 && 'JUNE 14 '}
              {i % 5 === 3 && 'NCPA, MUMBAI '}
              {i % 5 === 4 && '18 SPEAKERS '}
              <span className="ticker-dot">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* THEME */}
      <section className="theme-section" id="theme">
        <div className="section-number">01 / THEME</div>
        <div className="theme-layout">
          <div>
            <h2 className="theme-heading">
              THE<br/>REWIRED<br/><em>MIND</em>
            </h2>
            <div className="theme-stats">
              <div className="stat-cell">
                <span className="stat-number">18</span>
                <span className="stat-label">Speakers</span>
              </div>
              <div className="stat-cell">
                <span className="stat-number">8h</span>
                <span className="stat-label">Of Ideas</span>
              </div>
              <div className="stat-cell">
                <span className="stat-number">1.2K</span>
                <span className="stat-label">Attendees</span>
              </div>
            </div>
          </div>
          <div className="theme-body">
            <p className="theme-desc">
              In a world saturated with information and noise, the capacity to think differently is humanity's rarest resource. This year's theme explores the edges of human cognition — from neuroscience breakthroughs to the philosophical frontiers of artificial intelligence.
            </p>
            <p className="theme-desc">
              Eighteen extraordinary minds. One day. One transformative conversation about what it means to think, create, and lead in an age of radical uncertainty.
            </p>
            <a href="#speakers" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
              Explore Speakers &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section className="speakers-section" id="speakers">
        <div className="section-header">
          <div>
            <div className="section-number" style={{ marginBottom: '0.5rem' }}>02 / SPEAKERS</div>
            <h2 className="section-title">MEET THE MINDS</h2>
          </div>
          <a href="#" className="section-link">View all 18 speakers &rarr;</a>
        </div>

        <div className="speakers-grid">
          <div className="speaker-card">
            <div className="speaker-avatar"><span className="avatar-initials">AR</span></div>
            <div className="speaker-overlay">
              <span className="speaker-name">ARJUN REDDY</span>
              <span className="speaker-role">Cognitive Neuroscientist, IISc</span>
            </div>
            <div className="speaker-tag">Featured</div>
          </div>

          <div className="speaker-card">
            <div className="speaker-avatar"><span className="avatar-initials">PM</span></div>
            <div className="speaker-overlay">
              <span className="speaker-name">PRIYA MEHTA</span>
              <span className="speaker-role">AI Ethics Researcher</span>
            </div>
          </div>

          <div className="speaker-card">
            <div className="speaker-avatar"><span className="avatar-initials">SK</span></div>
            <div className="speaker-overlay">
              <span className="speaker-name">SANJAY KAPOOR</span>
              <span className="speaker-role">Climate Architect</span>
            </div>
          </div>

          <div className="speaker-card">
            <div className="speaker-avatar"><span className="avatar-initials">LF</span></div>
            <div className="speaker-overlay">
              <span className="speaker-name">LAYLA FAROOQI</span>
              <span className="speaker-role">Behavioral Economist</span>
            </div>
            <div className="speaker-tag">Keynote</div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="schedule-section" id="schedule">
        <div className="section-number">03 / SCHEDULE</div>
        <h2 className="section-title">JUNE 14, 2026</h2>

        <div className="schedule-list">
          <div className="schedule-item">
            <span className="schedule-time">09:00</span>
            <div className="schedule-info">
              <div className="schedule-title">Doors Open & Registration</div>
              <div className="schedule-speaker">Welcome refreshments · Networking</div>
            </div>
            <span className="schedule-type type-break">Arrival</span>
          </div>
          <div className="schedule-item">
            <span className="schedule-time">10:00</span>
            <div className="schedule-info">
              <div className="schedule-title">The Thinking Machine Inside Us</div>
              <div className="schedule-speaker">Arjun Reddy · Cognitive Neuroscientist</div>
            </div>
            <span className="schedule-type type-talk">Talk</span>
          </div>
          <div className="schedule-item">
            <span className="schedule-time">10:25</span>
            <div className="schedule-info">
              <div className="schedule-title">When Algorithms Dream</div>
              <div className="schedule-speaker">Priya Mehta · AI Ethics Researcher</div>
            </div>
            <span className="schedule-type type-talk">Talk</span>
          </div>
          <div className="schedule-item">
            <span className="schedule-time">11:15</span>
            <div className="schedule-info">
              <div className="schedule-title">Rhythms of Resistance</div>
              <div className="schedule-speaker">Tabla & Electronic Fusion Performance</div>
            </div>
            <span className="schedule-type type-performance">Performance</span>
          </div>
          <div className="schedule-item">
            <span className="schedule-time">12:00</span>
            <div className="schedule-info">
              <div className="schedule-title">Lunch & Community Break</div>
              <div className="schedule-speaker">Curated conversations · Exhibition</div>
            </div>
            <span className="schedule-type type-break">Break</span>
          </div>
          <div className="schedule-item">
            <span className="schedule-time">14:00</span>
            <div className="schedule-info">
              <div className="schedule-title">Designing Cities That Think</div>
              <div className="schedule-speaker">Sanjay Kapoor · Climate Architect</div>
            </div>
            <span className="schedule-type type-talk">Talk</span>
          </div>
          <div className="schedule-item">
            <span className="schedule-time">16:30</span>
            <div className="schedule-info">
              <div className="schedule-title">Keynote: The Rewired Mind</div>
              <div className="schedule-speaker">Layla Farooqi · Behavioral Economist</div>
            </div>
            <span className="schedule-type type-talk">Keynote</span>
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section className="venue-section" id="venue">
        <div className="section-number">04 / VENUE</div>
        <h2 className="section-title">WHERE IDEAS LAND</h2>

        <div className="venue-layout">
          <div className="venue-map">
            <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
              <rect width="480" height="360" fill="#1A1A1A"/>
              <line x1="0" y1="80" x2="480" y2="80" stroke="#2a2a2a" strokeWidth="1"/>
              <line x1="0" y1="160" x2="480" y2="160" stroke="#2a2a2a" strokeWidth="1"/>
              <line x1="0" y1="240" x2="480" y2="240" stroke="#2a2a2a" strokeWidth="1"/>
              <line x1="0" y1="320" x2="480" y2="320" stroke="#2a2a2a" strokeWidth="1"/>
              <line x1="80" y1="0" x2="80" y2="360" stroke="#2a2a2a" strokeWidth="1"/>
              <line x1="160" y1="0" x2="160" y2="360" stroke="#2a2a2a" strokeWidth="1"/>
              <line x1="240" y1="0" x2="240" y2="360" stroke="#2a2a2a" strokeWidth="1"/>
              <line x1="320" y1="0" x2="320" y2="360" stroke="#2a2a2a" strokeWidth="1"/>
              <line x1="400" y1="0" x2="400" y2="360" stroke="#2a2a2a" strokeWidth="1"/>
              <path d="M0 185 Q120 185 240 180 Q360 175 480 170" stroke="#333" strokeWidth="14" fill="none"/>
              <path d="M220 0 Q225 90 230 180 Q235 270 240 360" stroke="#333" strokeWidth="14" fill="none"/>
              <path d="M0 270 Q100 265 200 260 Q300 255 480 255" stroke="#2C2C2C" strokeWidth="8" fill="none"/>
              <path d="M80 0 Q85 90 88 180 Q91 270 94 360" stroke="#2C2C2C" strokeWidth="8" fill="none"/>
              <path d="M350 0 Q348 90 346 180 Q344 270 342 360" stroke="#2C2C2C" strokeWidth="8" fill="none"/>
              <path d="M360 240 Q400 220 460 230 L480 250 L480 360 L360 360 Z" fill="#0d1d2e" opacity="0.8"/>
              <path d="M380 250 Q420 235 470 242" stroke="#1a3a5c" strokeWidth="1.5" fill="none"/>
              <path d="M370 265 Q410 252 465 258" stroke="#1a3a5c" strokeWidth="1" fill="none"/>
              <rect x="110" y="100" width="45" height="60" rx="1" fill="#252525"/>
              <rect x="162" y="115" width="35" height="45" rx="1" fill="#252525"/>
              <rect x="270" y="200" width="55" height="40" rx="1" fill="#252525"/>
              <rect x="105" y="210" width="30" height="35" rx="1" fill="#252525"/>
              <rect x="248" y="128" width="72" height="48" rx="2" fill="#2a0a09"/>
              <rect x="248" y="128" width="72" height="48" rx="2" fill="none" stroke="#E62B1E" strokeWidth="1.5"/>
              <circle cx="284" cy="152" r="14" fill="#E62B1E"/>
              <circle cx="284" cy="148" r="5" fill="white"/>
              <path d="M284 153 L281 162 L284 160 L287 162 Z" fill="#E62B1E"/>
              <rect x="255" y="185" width="58" height="18" rx="2" fill="rgba(230,43,30,0.15)"/>
              <text x="284" y="198" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#E62B1E" fontWeight="600" letterSpacing="1">NCPA</text>
              <circle cx="440" cy="40" r="18" fill="#222" stroke="#333" strokeWidth="1"/>
              <text x="440" y="32" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#888">N</text>
              <line x1="440" y1="24" x2="440" y2="56" stroke="#444" strokeWidth="0.5"/>
              <line x1="422" y1="40" x2="458" y2="40" stroke="#444" strokeWidth="0.5"/>
              <circle cx="440" cy="40" r="2" fill="#E62B1E"/>
            </svg>
          </div>

          <div className="venue-info">
            <h3 className="venue-name">NCPA MUMBAI</h3>
            <p className="venue-address">National Centre for the Performing Arts<br/>Nariman Point, Mumbai 400021</p>
            <div className="venue-details">
              <div className="venue-detail-row">
                <span className="vd-icon">◷</span>
                <span className="vd-text">Saturday, June 14, 2026 · Doors open at 9:00 AM · Event ends 7:00 PM</span>
              </div>
              <div className="venue-detail-row">
                <span className="vd-icon">⊕</span>
                <span className="vd-text">Jamshed Bhabha Theatre, Main Auditorium · Capacity 1,200</span>
              </div>
              <div className="venue-detail-row">
                <span className="vd-icon">◈</span>
                <span className="vd-text">Nearest station: Churchgate (1.2 km) · Marine Lines (0.8 km)</span>
              </div>
              <div className="venue-detail-row">
                <span className="vd-icon">◉</span>
                <span className="vd-text">Valet parking available · Accessible venue · Sign language interpretation provided</span>
              </div>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <a href="#" className="btn-outline" style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}>Get Directions &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* TICKETS */}
      <section className="ticket-section" id="tickets">
        <div className="section-number">05 / TICKETS</div>
        <h2 className="section-title">JOIN THE MOVEMENT</h2>

        <div className="ticket-layout">
          <div className="ticket-card">
            <div className="ticket-tier">Early Access</div>
            <div className="ticket-price"><sup>₹</sup>2,499</div>
            <div className="ticket-avail">Limited seats remaining</div>
            <ul className="ticket-perks">
              <li><span className="perk-dot"></span>Full day access</li>
              <li><span className="perk-dot"></span>TEDxMumbai 2026 kit</li>
              <li><span className="perk-dot"></span>Lunch included</li>
              <li><span className="perk-dot"></span>Digital recordings</li>
            </ul>
            <Link to="/register" className="btn-outline" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Register →</Link>
          </div>

          <div className="ticket-card featured">
            <div className="ticket-featured-badge">Most Popular</div>
            <div className="ticket-tier">Standard</div>
            <div className="ticket-price"><sup>₹</sup>3,999</div>
            <div className="ticket-avail">General admission</div>
            <ul className="ticket-perks">
              <li><span className="perk-dot"></span>Full day access</li>
              <li><span className="perk-dot"></span>TEDxMumbai 2026 premium kit</li>
              <li><span className="perk-dot"></span>Lunch & evening reception</li>
              <li><span className="perk-dot"></span>Digital recordings</li>
              <li><span className="perk-dot"></span>Speaker meet & greet</li>
            </ul>
            <Link to="/register" className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Register →</Link>
          </div>

          <div className="ticket-card">
            <div className="ticket-tier">Patron</div>
            <div className="ticket-price"><sup>₹</sup>8,999</div>
            <div className="ticket-avail">Exclusive — 50 seats only</div>
            <ul className="ticket-perks">
              <li><span className="perk-dot"></span>Premium reserved seating</li>
              <li><span className="perk-dot"></span>Backstage access</li>
              <li><span className="perk-dot"></span>Speakers dinner (evening)</li>
              <li><span className="perk-dot"></span>All digital rights</li>
              <li><span className="perk-dot"></span>TEDxMumbai patron credit</li>
            </ul>
            <Link to="/register" className="btn-outline" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Register →</Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-copy">
          TEDxMumbai is independently organized under TED license.<br/>
          &copy; 2026 TEDxMumbai · All rights reserved.
        </div>
        <span className="footer-x">x</span>
        <div className="footer-links">
          <a href="#">Instagram</a>
          <a href="#">Twitter/X</a>
          <a href="#">LinkedIn</a>
          <a href="#">Contact</a>
          <a href="#">Sponsor</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
