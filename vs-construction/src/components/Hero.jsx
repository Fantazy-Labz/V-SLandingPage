import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">One team. One process. Full control.</p>

        <h1 className="hero-heading">
          <span className="white">We plan and execute<br />with experience </span>
          <span className="lime">your</span>
          <br />
          <span className="white">construction projects.</span>
        </h1>

        <p className="hero-desc">
          Metal &amp; Concrete Construction — From Groundwork to Full Structure. We
          handle everything: site prep, foundations, steel structure, and final assembly.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Get a Free Quote</a>
          <a href="tel:+18788966329" className="btn-secondary">Or call (878)-896-6329</a>
        </div>
      </div>
    </section>
  );
}
