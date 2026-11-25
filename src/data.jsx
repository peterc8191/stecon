// All site copy and business details live here so they're easy to update.

// TODO: replace these placeholders with SteCon's real details before going live.
export const business = {
  name: "SteCon Electrical Engineering",
  phoneDisplay: "[Phone number]",
  phoneHref: "", // e.g. "tel:+447700900000"
  email: "[Email address]",
  emailHref: "", // e.g. "mailto:info@stecon.co.uk"
  area: "[Service area]",
  hours: "Mon – Fri, 8am – 6pm",
};

export const contactDetails = [
  { label: "Phone", value: business.phoneDisplay, href: business.phoneHref },
  { label: "Email", value: business.email, href: business.emailHref },
  { label: "Area covered", value: business.area },
  { label: "Office hours", value: business.hours },
];

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#sectors", label: "Sectors" },
  { href: "#about", label: "About" },
  { href: "#process", label: "How We Work" },
  { href: "#contact", label: "Contact" },
];

const icon = (paths) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {paths}
  </svg>
);

export const services = [
  {
    title: "Domestic Installations",
    text: "New circuits, consumer unit upgrades, sockets, lighting and full fit-outs for extensions and new builds.",
    icon: icon(<><path d="M3 11 12 4l9 7" /><path d="M5 10v10h14V10" /><path d="m12.5 11-2.5 4h4l-2.5 4" /></>),
  },
  {
    title: "Commercial & Industrial",
    text: "Power distribution, three-phase supplies, containment and installations for offices, retail units and workshops.",
    icon: icon(<><path d="M3 21V9l6 4V9l6 4V5h6v16z" /><path d="M7 17h2M12 17h2M17 17h1" /></>),
  },
  {
    title: "Full & Partial Rewires",
    text: "Safe, tidy rewiring of older properties to current regulations with minimal disruption to your home or business.",
    icon: icon(<><path d="M4 7h5a3 3 0 0 1 3 3v4a3 3 0 0 0 3 3h5" /><circle cx="4" cy="7" r="1.6" /><circle cx="20" cy="17" r="1.6" /></>),
  },
  {
    title: "Testing & Inspection",
    text: "Electrical Installation Condition Reports (EICRs), PAT testing and certification for landlords, homeowners and businesses.",
    icon: icon(<><path d="M9 4h6v3H9z" /><path d="M7 5H5v16h14V5h-2" /><path d="m9 14 2 2 4-4" /></>),
  },
  {
    title: "EV Charger Installation",
    text: "Home and workplace electric vehicle charge points, specified and installed to suit your supply and parking.",
    icon: icon(<><rect x="4" y="3" width="10" height="18" rx="2" /><path d="m9.5 7-2 4h3l-2 4" /><path d="M14 10h2a2 2 0 0 1 2 2v4a1.5 1.5 0 0 0 3 0V8l-2-2" /></>),
  },
  {
    title: "Solar PV & Battery Storage",
    text: "Solar panel systems and battery storage that cut energy bills and make the most of the power you generate.",
    icon: icon(<><circle cx="12" cy="6" r="2.5" /><path d="M12 1v1M17 6h1M6 6h1M15.5 2.5l-.7.7M8.5 2.5l.7.7" /><path d="M3 21 5 12h14l2 9z" /><path d="M4 16.5h16M10 12l-1 9M14 12l1 9" /></>),
  },
  {
    title: "Fault Finding & Repairs",
    text: "Tripping breakers, dead circuits or flickering lights — we trace the cause quickly and fix it properly.",
    icon: icon(<><circle cx="10.5" cy="10.5" r="6.5" /><path d="m21 21-5.5-5.5" /><path d="m11 7.5-2 3h3l-2 3" /></>),
  },
  {
    title: "Lighting Design",
    text: "Interior, exterior, emergency and LED lighting upgrades that look great and reduce running costs.",
    icon: icon(<><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4.5 1.1.5 2.1h6c0-1 0-1.7.5-2.1A6 6 0 0 0 12 3z" /></>),
  },
  {
    title: "Design & Consultancy",
    text: "Electrical design, load calculations and specifications for builders, architects and project managers.",
    icon: icon(<><path d="M3 21h18" /><path d="M5 21V8l7-5 7 5v13" /><path d="M9 21v-6h6v6" /><path d="M9 10h6" /></>),
  },
];

export const sectors = [
  {
    title: "Domestic",
    text: "Homeowners, landlords and self-builders who want a reliable electrician that turns up, communicates clearly and leaves the job tidy.",
    points: ["Consumer unit upgrades", "Kitchens & extensions", "Landlord EICRs", "EV chargers"],
  },
  {
    title: "Commercial",
    text: "Offices, shops, hospitality and community buildings — work planned around your opening hours to keep you trading.",
    points: ["Shop & office fit-outs", "Emergency lighting", "Periodic inspections", "Data & small power"],
  },
  {
    title: "Industrial",
    text: "Workshops, farms and light industrial sites needing robust power, machinery supplies and planned maintenance.",
    points: ["Three-phase supplies", "Machinery connections", "Distribution boards", "Planned maintenance"],
  },
];

export const steps = [
  { title: "Get in touch", text: "Call, email or send an enquiry. Tell us what you need and we'll arrange a convenient time to talk." },
  { title: "Survey & quote", text: "We assess the site and give you a clear, itemised quotation — no hidden extras." },
  { title: "Installation", text: "Our electricians carry out the work safely and tidily, keeping you updated as we go." },
  { title: "Test & certify", text: "Every job is tested on completion and you receive the relevant certification for your records." },
];

export const reasons = [
  { title: "Safety first", text: "All work is carried out and tested to the current wiring regulations (BS 7671)." },
  { title: "Clear, fixed quotes", text: "You know the cost before we start. If anything changes, we talk to you first." },
  { title: "Tidy & respectful", text: "We protect your property, clean up after ourselves and treat your site with care." },
  { title: "Reliable communication", text: "We turn up when we say we will and keep you informed from start to finish." },
];

export const enquiryTypes = [
  "Domestic installation",
  "Commercial / industrial",
  "Rewire",
  "Testing & inspection (EICR)",
  "EV charger",
  "Solar PV & battery",
  "Fault finding / repair",
  "Other",
];
