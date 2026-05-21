import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Riverside Distribution Center',
    type: 'Metal Building',
    size: '45,000 sq ft',
    location: 'Texas',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Oakfield Cold Storage Facility',
    type: 'Metal Building',
    size: '28,000 sq ft',
    location: 'Oklahoma',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Northgate Commercial Plaza',
    type: 'Concrete Building',
    size: '18,500 sq ft',
    location: 'Arizona',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Summit Agricultural Complex',
    type: 'Metal Building',
    size: '62,000 sq ft',
    location: 'Kansas',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Lakeview Auto Dealership',
    type: 'Concrete Building',
    size: '12,000 sq ft',
    location: 'Nevada',
    image: 'https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Mesa Industrial Park — Phase II',
    type: 'Metal Building',
    size: '95,000 sq ft',
    location: 'New Mexico',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80&auto=format&fit=crop',
  },
];

const filters = ['All', 'Metal Building', 'Concrete Building'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const visible = active === 'All' ? projects : projects.filter((p) => p.type === active);

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <span className="section-tag">Our Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">
          Every project tells a story of precision, partnership, and pride in craftsmanship.
          Here are a few we're especially proud of.
        </p>
      </div>

      <div className="projects-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn${active === f ? ' active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map((p) => (
          <div className="project-card" key={p.id}>
            <div className="project-img-wrap">
              <img src={p.image} alt={p.title} loading="lazy" />
              <div className="project-overlay">
                <span className="project-type">{p.type}</span>
              </div>
            </div>
            <div className="project-info">
              <h3>{p.title}</h3>
              <div className="project-meta">
                <span>{p.size}</span>
                <span className="dot">·</span>
                <span>{p.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <a href="#contact" className="btn-primary">Start Your Project →</a>
      </div>
    </section>
  );
}
