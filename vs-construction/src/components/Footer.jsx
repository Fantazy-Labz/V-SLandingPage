import './Footer.css';

const LogoSVG = () => (
  <svg width="48" height="40" viewBox="0 0 56 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="46" fill="#0a0a0a"/>
    <polygon points="2,4 12,4 18,28 24,4 34,4 22,42 14,42" fill="#c6f135"/>
    <text x="30" y="36" fontFamily="Barlow Condensed, sans-serif" fontWeight="900" fontSize="28" fill="#c6f135">&amp;</text>
    <rect x="0.75" y="0.75" width="54.5" height="44.5" fill="none" stroke="#c6f135" strokeWidth="1.5"/>
  </svg>
);

const cols = [
  {
    heading: 'Services',
    links: [
      { label: 'Metal Buildings', href: '#services' },
      { label: 'Concrete Buildings', href: '#services' },
      { label: 'Site Preparation', href: '#services' },
      { label: 'Design & Engineering', href: '#services' },
      { label: 'Finish & Trim', href: '#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#' },
      { label: 'Projects', href: '#projects' },
      { label: 'Testimonials', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: '(878) 896-6329', href: 'tel:+18788966329' },
      { label: 'info@vsconstructiongroup.com', href: 'mailto:info@vsconstructiongroup.com' },
      { label: 'Dallas – Fort Worth, TX', href: '#' },
      { label: 'Mon–Fri 7AM–5PM CT', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <LogoSVG />
            <div className="footer-logo-text">
              <span>Construction</span>
              <span>Group</span>
            </div>
          </a>
          <p className="footer-tagline">
            Metal &amp; Concrete Construction — From Groundwork to Full Structure.
            One team. One process. Full control.
          </p>
          <a href="#contact" className="btn-primary footer-cta">Get a Free Quote</a>
        </div>

        {cols.map((col) => (
          <div className="footer-col" key={col.heading}>
            <h4>{col.heading}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} V&amp;S Construction Group. All rights reserved.</span>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Licensing</a>
        </div>
      </div>
    </footer>
  );
}
