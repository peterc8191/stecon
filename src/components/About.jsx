import SectionHead from "./SectionHead.jsx";
import { reasons } from "../data.jsx";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <SectionHead eyebrow="About SteCon" title="Engineering-led electrical work you can trust" />
          {/* TODO: replace with SteCon's own story — founder, years trading, location, accreditations. */}
          <p className="prose">
            SteCon Electrical Engineering provides electrical design, installation and maintenance for
            homes and businesses. We combine an engineer&rsquo;s attention to detail with practical,
            on-site experience, so every installation is safe, compliant and built to last.
          </p>
          <p className="prose">
            From the first conversation to the final certificate, we keep things simple: honest advice,
            a clear quote and quality work completed on time.
          </p>
        </div>
        <div className="about-panel">
          <ul className="reasons">
            {reasons.map(({ title, text }) => (
              <li className="reason" key={title}>
                <span className="reason-tick" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12.5 4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
