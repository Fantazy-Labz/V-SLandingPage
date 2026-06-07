import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

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
        <a href="#" className="logo" aria-label="V&S Construction Group — Home">
          <img src={logo} alt="V&S Construction Group" className="logo-img" />
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
