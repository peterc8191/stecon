import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Sectors from "./components/Sectors.jsx";
import About from "./components/About.jsx";
import Process from "./components/Process.jsx";
import CtaBand from "./components/CtaBand.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useReveal from "./hooks/useReveal.js";

export default function App() {
  useReveal(".section-head, .service-card, .sector-card, .step, .reason, .about-copy, .about-panel, .contact-form");

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Sectors />
        <About />
        <Process />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
