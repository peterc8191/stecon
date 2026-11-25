export default function SectionHead({ eyebrow, title, intro, light = false, center = false }) {
  return (
    <div className={`section-head${center ? " center" : ""}${light ? " light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p className="intro">{intro}</p>}
    </div>
  );
}
