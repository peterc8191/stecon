import { useEffect, useState } from "react";
import { navLinks } from "../data.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={close} aria-label="SteCon Electrical Engineering – home">
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="SteCon Electrical Engineering" width="1438" height="408" />
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="site-nav" className="site-nav" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn-accent btn-sm" onClick={close}>
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
