import { business } from "../data.jsx";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>Planning electrical work?</h2>
          <p>Tell us about your project and we&rsquo;ll get back to you with a clear, no-obligation quote.</p>
        </div>
        <div className="cta-actions">
          <a href="#contact" className="btn btn-primary">Send an Enquiry</a>
          {business.phoneHref && (
            <a href={business.phoneHref} className="btn btn-outline-dark">
              Call {business.phoneDisplay}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
