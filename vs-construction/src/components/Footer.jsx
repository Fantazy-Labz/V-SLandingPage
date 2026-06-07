import './Footer.css';
import logo from '../assets/logo.png';

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
          <a href="#" className="footer-logo" aria-label="V&S Construction Group — Home">
            <img src={logo} alt="V&S Construction Group" className="footer-logo-img" />
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
