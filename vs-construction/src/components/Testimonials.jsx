import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: "V&S delivered our 45,000 sq ft distribution center two weeks ahead of schedule. Their single-source model saved us an enormous amount of coordination headache — and about 12% compared to the multi-sub bids we received.",
    name: 'Marcus T.',
    role: 'VP Operations, Riverside Logistics',
    stars: 5,
  },
  {
    id: 2,
    quote: "From permit to punch-list, every step was exactly as quoted. No change orders, no excuses. I've built five facilities in my career and V&S is the only contractor I'd call again without hesitation.",
    name: 'Sandra R.',
    role: 'Owner, Northgate Properties',
    stars: 5,
  },
  {
    id: 3,
    quote: "The V&S team handled a complex tilt-up pour in near-freezing temps and still held the schedule. Their site super was on every morning call, every day. That level of communication is rare.",
    name: 'James O.',
    role: 'Project Manager, Summit Agriculture',
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <span className="section-tag">Client Stories</span>
        <h2 className="section-title">What Our Clients Say</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.id}>
            <Stars count={t.stars} />
            <p className="testimonial-quote">"{t.quote}"</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.name.charAt(0)}</div>
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
