import SectionHead from "./SectionHead.jsx";
import { sectors } from "../data.jsx";

export default function Sectors() {
  return (
    <section className="section section-tint" id="sectors">
      <div className="container">
        <SectionHead eyebrow="Who We Work With" title="Domestic, commercial & industrial" center />
        <div className="sector-grid">
          {sectors.map(({ title, text, points }, i) => (
            <article className="sector-card" key={title}>
              <span className="sector-num">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
