import SectionHead from "./SectionHead.jsx";
import { services } from "../data.jsx";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead
          eyebrow="What We Do"
          title="Electrical services, start to finish"
          intro="Whatever the size of the job, you get the same careful workmanship, clear pricing and full certification."
          center
        />
        <div className="service-grid">
          {services.map(({ title, text, icon }) => (
            <article className="service-card" key={title}>
              <div className="service-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
