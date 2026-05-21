import './About.css';

const values = [
  { title: 'Single-Source Accountability', desc: 'One team handles everything — no finger-pointing between subs.' },
  { title: 'Transparent Pricing', desc: 'Detailed, fixed-price proposals with no hidden costs or change-order surprises.' },
  { title: 'Schedule Discipline', desc: 'We commit to delivery dates and build our process around protecting them.' },
  { title: 'Quality Assurance', desc: 'Every phase is inspected before we advance — quality is built in, not inspected in.' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-img-side">
          <div className="about-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop"
              alt="V&S Construction team on-site"
              loading="lazy"
            />
            <div className="about-badge">
              <span className="badge-num">2009</span>
              <span className="badge-label">Founded</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag">About V&amp;S</span>
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            Built on Reputation.<br />Driven by Results.
          </h2>
          <p className="about-lead">
            V&amp;S Construction Group was founded in 2009 with a single conviction: that
            clients deserve one company — not a web of subcontractors — responsible for
            every phase of their project.
          </p>
          <p className="about-body">
            From site prep and foundations through steel erection and final finish-out,
            our crews are employees, not outsourced labor. That means tighter quality
            control, faster problem resolution, and a team that takes genuine ownership
            of your project's outcome.
          </p>
          <p className="about-body">
            Over 15 years, we've completed more than 280 projects across 12 states,
            serving industrial, commercial, agricultural, and government clients who
            keep coming back because we do what we say and say what we mean.
          </p>

          <div className="about-values">
            {values.map((v) => (
              <div className="value-item" key={v.title}>
                <div className="value-dot" />
                <div>
                  <strong>{v.title}</strong>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
