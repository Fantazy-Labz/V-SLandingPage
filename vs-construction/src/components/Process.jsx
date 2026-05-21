import './Process.css';

const steps = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We start with a no-obligation site visit and needs assessment. You tell us your goals — we identify the best structural solution and walk you through realistic timelines and budgets.',
  },
  {
    num: '02',
    title: 'Design & Engineering',
    desc: 'Our in-house engineers develop complete construction documents — stamped drawings, structural calculations, and permit packages ready for submission.',
  },
  {
    num: '03',
    title: 'Site Preparation',
    desc: 'We handle all earthwork, grading, underground utilities, and foundation forming. A properly prepared site means zero surprises when the structure goes up.',
  },
  {
    num: '04',
    title: 'Structure Assembly',
    desc: 'Our certified crews erect the steel or form the concrete system on schedule. Every weld, bolt, and pour is inspected against project specs before we move to the next phase.',
  },
  {
    num: '05',
    title: 'Finish & Handover',
    desc: 'We complete insulation, siding, roofing, doors, and trim — then walk you through a punch-list inspection. You get the keys only when every item is signed off.',
  },
];

export default function Process() {
  return (
    <section className="process">
      <div className="process-inner">
        <div className="process-left">
          <span className="section-tag">How We Work</span>
          <h2 className="section-title">Our Process</h2>
          <p className="section-sub">
            A transparent, step-by-step approach that keeps you informed and in
            control from the first handshake to the final inspection.
          </p>
          <a href="#contact" className="btn-primary" style={{ marginTop: '40px', display: 'inline-flex' }}>
            Let's Talk About Your Project
          </a>
        </div>

        <div className="process-steps">
          {steps.map((s, i) => (
            <div className="process-step" key={s.num}>
              <div className="step-number">{s.num}</div>
              <div className="step-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
