import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav>
      <div className="nav-logo">
        <span className="ted-badge">TED</span>
        <span className="nav-event">x MUMBAI</span>
      </div>
      <ul className="nav-links">
        {isHome ? (
          <>
            <li><a href="#theme">Theme</a></li>
            <li><a href="#speakers">Speakers</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#venue">Venue</a></li>
          </>
        ) : (
          <li><Link to="/">Back to Home</Link></li>
        )}
        <li>
          <Link to="/register" className="nav-cta">
            Get Tickets
          </Link>
        </li>
        <li>
          <Link to="/admin" style={{ color: 'var(--muted)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
