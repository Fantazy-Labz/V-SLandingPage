import { useState, useEffect } from 'react';
import './Navbar.css';

const LogoSVG = () => (
  <svg width="56" height="46" viewBox="0 0 56 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="46" fill="#0a0a0a"/>
    <polygon points="2,4 12,4 18,28 24,4 34,4 22,42 14,42" fill="#c6f135"/>
    <text x="30" y="36" fontFamily="Barlow Condensed, sans-serif" fontWeight="900" fontSize="28" fill="#c6f135">&amp;</text>
    <rect x="0.75" y="0.75" width="54.5" height="44.5" fill="none" stroke="#c6f135" strokeWidth="1.5"/>
  </svg>
);

const NAV_LINKS = [
  { label: 'Metal Buildings', href: '#services', active: true },
  { label: 'Concrete Buildings', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'View Projects', href: '#projects' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      const menu = document.getElementById('mobileMenu');
      const hamburger = document.getElementById('hamburger');
      if (menu && hamburger && !menu.contains(e.target) && !hamburger.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <nav className="navbar">
        <a href="#" className="logo">
          <div className="logo-mark">
            <LogoSVG />
          </div>
          <div className="logo-text">
            <span>Construction</span>
            <span>Group</span>
          </div>
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map(({ label, href, active }) => (
            <li key={label}>
              <a href={href} className={active ? 'active' : ''}>{label}</a>
            </li>
          ))}
        </ul>

        <button
          id="hamburger"
          className="hamburger"
          aria-label="Menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div id="mobileMenu" className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, href, active }) => (
          <a key={label} href={href} className={active ? 'active' : ''}>{label}</a>
        ))}
      </div>
    </>
  );
}
