const highlights = ["Domestic", "Commercial", "Industrial", "EV & Solar"];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <svg className="hero-bolt" viewBox="0 0 200 320" aria-hidden="true">
        <path d="M130 0 20 180h70L60 320 180 120h-72z" />
      </svg>
      <div className="container hero-inner">
        <span className="eyebrow light">Electrical Engineering</span>
        <h1>
          Powering homes &amp; businesses <span className="accent">safely</span> and reliably.
        </h1>
        <p className="hero-lead">
          SteCon delivers professional electrical installation, testing and maintenance — from a single
          new circuit to complete commercial fit-outs, done right first time.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-accent">Request a Free Quote</a>
          <a href="#services" className="btn btn-ghost">Our Services</a>
        </div>
        <ul className="hero-tags" aria-label="Sectors we work in">
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
