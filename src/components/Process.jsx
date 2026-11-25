import SectionHead from "./SectionHead.jsx";
import { steps } from "../data.jsx";

export default function Process() {
  return (
    <section className="section section-dark" id="process">
      <div className="container">
        <SectionHead eyebrow="How We Work" title="A straightforward process" light center />
        <ol className="steps">
          {steps.map(({ title, text }, i) => (
            <li className="step" key={title}>
              <span className="step-num">{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
