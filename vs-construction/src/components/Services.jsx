import './Services.css';

const services = [
  {
    id: 'metal',
    tag: 'Metal Buildings',
    title: 'Pre-Engineered Steel Structures',
    desc: 'From warehouses and industrial facilities to agricultural buildings and retail spaces — we design, fabricate, and erect steel structures built to last decades.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop',
    features: ['Clear-span frames up to 300 ft', 'Custom panel & roofing systems', 'IBC / AISC code compliant', 'Fast-track delivery & erection'],
  },
  {
    id: 'concrete',
    tag: 'Concrete Buildings',
    title: 'Cast-In-Place & Tilt-Up Construction',
    desc: 'Engineered concrete solutions for commercial, industrial and mixed-use projects. We handle every phase — from forming and pouring to finishing and sealing.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop',
    features: ['Deep & shallow foundations', 'Tilt-up panel systems', 'Post-tensioned slabs', 'Structural & architectural finishes'],
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <span className="section-tag">What We Build</span>
        <h2 className="section-title">Two Core Disciplines.<br />One Trusted Team.</h2>
        <p className="section-sub">
          Whether you need a steel-framed warehouse or a concrete tilt-up facility,
          V&amp;S Construction Group delivers complete solutions from permit to punch-list.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.id}>
            <div className="service-img-wrap">
              <img src={s.image} alt={s.title} loading="lazy" />
              <span className="service-img-tag">{s.tag}</span>
            </div>
            <div className="service-body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="service-features">
                {s.features.map((f) => (
                  <li key={f}>
                    <span className="check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-cta">Request a Quote →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
