import { Link } from "react-router-dom";
import { Icon } from "./Visuals.jsx";

const footerGroups = [
  {
    heading: "PRODUCT",
    links: [
      ["Health ATM", "/products/health-atm", true],
      ["CarePod, Wall, and Kit", "/products/health-atm#technology", true],
      ["Tests", "/products/health-atm#tests", true],
      ["Health Card", "https://www.yper.in/smart-health-card"],
    ],
  },
  {
    heading: "PARTNERS",
    links: [
      ["For partners", "/partners", true],
      ["Hospitals and employers", "/partners/hospitals-employers", true],
      ["Pilot and pricing", "/partners/pilot-pricing", true],
      ["Host a CarePod pilot", "/partners/host-a-carepod-pilot", true],
    ],
  },
  {
    heading: "COMPANY",
    links: [
      ["About YPER", "/about", true],
      ["Why YPER", "/why-yper", true],
      ["Team", "/team", true],
      ["Roadmap", "/roadmap", true],
      ["Contact", "/contact", true],
    ],
  },
  {
    heading: "LEGAL",
    links: [
      ["Privacy Policy", "/privacy", true],
      ["Terms and Conditions", "/terms", true],
      ["Accessibility", "/accessibility", true],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-about">
          <a className="footer-logo" href="/" aria-label="YPER home">
            <img src="https://www.yper.in/_next/image?url=%2Fimages%2Fyper%2FYPER-Logo.png&w=256&q=75" alt="YPER" />
          </a>
          <p>YPER connects supported screening, consultations, and follow-up through a guided Health ATM experience. What a site includes depends on the devices and care pathways configured for that deployment.</p>
        </div>
        {footerGroups.map(({ heading, links }) => (
          <nav className="footer-group" aria-label={heading} key={heading}>
            <h2>{heading}</h2>
            {links.map(([label, href, internal]) => internal
              ? <Link to={href} key={label}>{label}</Link>
              : <a href={href} key={label}>{label}</a>)}
          </nav>
        ))}
      </div>
      <div className="footer-contact-wrap">
        <div className="container footer-contact-grid">
          <section className="footer-contact" aria-labelledby="footer-contact-heading">
            <h2 id="footer-contact-heading">CONTACT</h2>
            <a className="footer-contact-line" href="mailto:contact@yper.in"><Icon kind="mail" />contact@yper.in</a>
            <address className="footer-address"><Icon kind="mapPin" /><span>H.No. 2-4-1033, Plot No. 8,<br />Samathapuri Colony,<br />Road No. 1, New Nagole Colony,<br />Kothapet Road, Hyderabad – 500035,<br />Telangana, India.<a href="https://www.google.com/maps/search/?api=1&query=H.No.%202-4-1033%2C%20Plot%20No.%208%2C%20Samathapuri%20Colony%2C%20Road%20No.%201%2C%20New%20Nagole%20Colony%2C%20Kothapet%20Road%2C%20Hyderabad%20500035%2C%20Telangana%2C%20India" target="_blank" rel="noreferrer">Get Directions</a></span></address>
          </section>
          <section className="footer-disclaimer" aria-label="Healthcare disclaimer">
            <p>YPER provides technology that can support healthcare workflows. It does not independently diagnose, treat, or prescribe. AI features offer preliminary assistance only and do not replace a qualified clinician. If this may be an emergency, contact local emergency services.</p>
          </section>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 YPER. All rights reserved.</span>
        <nav aria-label="Footer legal links"><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms &amp; Conditions</Link></nav>
      </div>
    </footer>
  );
}
