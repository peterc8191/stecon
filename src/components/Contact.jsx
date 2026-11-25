import { useState } from "react";
import SectionHead from "./SectionHead.jsx";
import { contactDetails, enquiryTypes } from "../data.jsx";

export default function Contact() {
  const [status, setStatus] = useState("");

  // TODO: connect the form to a real handler (e.g. Formspree, Netlify Forms or your own backend).
  // Nothing is sent yet, so don't tell visitors their enquiry was received.
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Online enquiries are coming soon. Please contact us by phone or email for now.");
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <SectionHead
            eyebrow="Get in Touch"
            title="Request a quote"
            intro="Tell us a little about the job and we'll come back to you to discuss the details."
          />
          <ul className="contact-list">
            {contactDetails.map(({ label, value, href }) => (
              <li key={label}>
                <strong>{label}</strong>
                {href ? <a href={href}>{value}</a> : <span>{value}</span>}
              </li>
            ))}
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="enquiry">Type of work</label>
            <select id="enquiry" name="enquiry">
              {enquiryTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">Project details</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Enquiry</button>
          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
