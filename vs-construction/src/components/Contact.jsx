import { useState } from 'react';
import './Contact.css';

const projectTypes = [
  'Metal Building — New Construction',
  'Concrete Building — New Construction',
  'Addition / Expansion',
  'Foundation Only',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', projectType: '', message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-info">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            Ready to Break Ground?
          </h2>
          <p className="section-sub" style={{ textAlign: 'left', marginTop: '16px' }}>
            Fill out the form and our project team will reach out within one business
            day with a preliminary assessment and timeline.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="detail-icon">📞</div>
              <div>
                <strong>Call Us</strong>
                <a href="tel:+18788966329">(878) 896-6329</a>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="detail-icon">✉️</div>
              <div>
                <strong>Email</strong>
                <a href="mailto:info@vsconstructiongroup.com">info@vsconstructiongroup.com</a>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="detail-icon">📍</div>
              <div>
                <strong>Headquarters</strong>
                <span>Dallas – Fort Worth Metro, TX</span>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="detail-icon">🕐</div>
              <div>
                <strong>Office Hours</strong>
                <span>Mon – Fri, 7:00 AM – 5:00 PM CT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          {sent ? (
            <div className="form-success">
              <div className="success-check">✓</div>
              <h3>Message Received</h3>
              <p>
                Thank you for reaching out. A member of our project team will contact
                you within one business day.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a type…</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe your project — size, location, intended use, timeline, and any specific requirements…"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-submit">
                Send My Request →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
