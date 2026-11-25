import { business, navLinks, services } from "../data.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src={`${import.meta.env.BASE_URL}images/logo-white.png`} alt="SteCon Electrical Engineering" width="1438" height="408" loading="lazy" />
          <p>Professional electrical installation, testing and maintenance for domestic, commercial and industrial clients.</p>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            {services.slice(0, 6).map(({ title }) => (
              <li key={title}>
                <a href="#services">{title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>{business.phoneHref ? <a href={business.phoneHref}>{business.phoneDisplay}</a> : business.phoneDisplay}</li>
            <li>{business.emailHref ? <a href={business.emailHref}>{business.email}</a> : business.email}</li>
            <li>{business.hours}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
