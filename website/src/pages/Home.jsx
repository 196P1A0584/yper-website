import { Link } from "react-router-dom";
import DemoForm from "../components/DemoForm.jsx";
import { AbstractVisual, Icon, KioskVisual } from "../components/Visuals.jsx";
import { products } from "../data/products.js";

const audiences = [
  {
    title: "Employers",
    description: "Explore approaches to bringing accessible health screening closer to workplaces.",
    icon: "people",
    tags: ["Workplace wellbeing", "Convenient access", "Preventive focus"],
  },
  {
    title: "Communities",
    description: "A welcoming health screening experience designed around local communities.",
    icon: "heart",
    tags: ["Community health", "Accessible care", "Connected support"],
  },
  {
    title: "Clinics & Hospitals",
    description: "Discover how connected technology can support a more approachable care journey.",
    icon: "building",
    tags: ["Digital health", "Connected technology", "Care teams"],
  },
  {
    title: "Health Programmes",
    description: "Explore flexible ways to bring health awareness into programmes and services.",
    icon: "pulse",
    tags: ["Health awareness", "Screening access", "Community focus"],
  },
];

const indicators = [
  ["Blood Pressure", "Monitor your cardiovascular health", "pulse"],
  ["Heart Rate & ECG", "Check your heart rhythm", "heart"],
  ["Body Temperature", "Detect fever and illness", "pulse"],
  ["Oxygen Saturation (SpO₂)", "Measure oxygen levels", "droplet"],
  ["Blood Glucose", "Monitor diabetes risk", "droplet"],
  ["Body Composition", "Track BMI, fat and muscle", "people"],
  ["Vision & Hearing", "Check sensory health", "check"],
  ["Additional Tests", "As per configuration", "check"],
];

function SectionHeading({ label, title, copy, centered = false }) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}`}>
      {label && <p className="eyebrow">{label}</p>}
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function TrustStrip() {
  const items = [
    ["Security details pending", "Information requires confirmation", "shield"],
    ["Accessible for All", "Health access for everyone", "people"],
    ["Preventive Focus", "Stay healthier, longer", "heart"],
  ];
  return (
    <div className="trust-wrap container">
      <div className="trust-strip">
        {items.map(([title, detail, icon]) => (
          <div className="trust-item" key={title}>
            <Icon kind={icon} />
            <span><strong>{title}</strong><small>{detail}</small></span>
          </div>
        ))}
        <div className="trust-brand"><strong>YPER</strong><small>Bring Your Health Into Focus.</small></div>
      </div>
    </div>
  );
}

function DemoSection() {
  return (
    <section className="demo-section section-pad" id="demo">
      <div className="container demo-layout">
        <div className="demo-intro">
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>Make health a little more accessible.</h2>
          <p>Tell us what you’re exploring. Yper’s demo request form is a frontend preview until a submission service is configured.</p>
          <div className="demo-contact-note"><Icon kind="check" /><span>No information is transmitted or stored by this form.</span></div>
        </div>
        <DemoForm />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">YPER HEALTH <span /></p>
            <h1>Bring Your Health <em>Into Focus.</em></h1>
            <p className="hero-description">Accessible health screening, connected technology and a clearer path to preventive health — through a guided Health ATM experience.</p>
            <div className="hero-benefits">
              <div><Icon kind="heart" /><span>Health<br />Screening</span></div>
              <div><Icon kind="people" /><span>Connected<br />Care</span></div>
              <div><Icon kind="shield" /><span>Preventive<br />Health</span></div>
            </div>
            <div className="hero-actions">
              <Link className="button" to="/products/yperhealthhub">Explore the Health ATM <span aria-hidden="true">→</span></Link>
              <a className="video-link" href="#who-it-serves"><span className="play-icon">▶</span> Discover Yper</a>
            </div>
          </div>
          <KioskVisual />
        </div>
        <TrustStrip />
      </section>

      <section className="audience-section section-pad" id="who-it-serves">
        <div className="container audience-layout">
          <div className="audience-main">
            <SectionHeading label="WHO IT SERVES" title={<>Better Health for<br />Individuals and Communities</>} copy="Yper is designed to make healthcare more accessible, affordable and convenient for everyone — anytime, anywhere." />
            <div className="audience-grid">
              {audiences.map((item, index) => (
                <article className="audience-card" key={item.title}>
                  <div className={`audience-art art-${index}`}><Icon kind={item.icon} /><span className="art-dot" /></div>
                  <div className="audience-card-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <ul>{item.tags.map((tag) => <li key={tag}><span>✓</span>{tag}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="why-panel">
            <AbstractVisual variant="dark" />
            <p className="eyebrow">WHY YPER</p>
            <h2>Accessible.<br /><em>Connected.</em></h2>
            <p>Health journeys are personal. Yper brings screening and connected technology into a guided, approachable experience.</p>
            <Link className="button button-light" to="/about-us">Why Yper <span aria-hidden="true">→</span></Link>
            <div className="health-readout"><span><Icon kind="heart" /><b>Care</b></span><span><Icon kind="pulse" /><b>Focus</b></span><span><Icon kind="check" /><b>Clarity</b></span></div>
          </aside>
        </div>
      </section>

      <section className="indicators-section section-pad">
        <div className="container indicators-layout">
          <div className="indicators-intro">
            <p className="eyebrow">SMART HEALTH TECHNOLOGY</p>
            <span className="pill-label"><Icon kind="heart" /> AVAILABLE TESTS</span>
            <h2>Key Health Indicators <em>at Your Fingertips</em></h2>
            <p>The Yper Health ATM concept brings together non-invasive screening and measurement capabilities. Specific available tests depend on final product configuration and require confirmation.</p>
            <Link className="button" to="/products/yperhealthhub">Explore HealthHub <span aria-hidden="true">→</span></Link>
            <div className="mini-values"><span><Icon kind="shield" />Considered<br />approach</span><span><Icon kind="people" />Designed for<br />access</span><span><Icon kind="heart" />Preventive<br />focus</span></div>
          </div>
          <div className="indicator-list">
            {indicators.map(([title, description, icon]) => (
              <div className="indicator" key={title}><Icon kind={icon} /><span><strong>{title}</strong><small>{description}</small></span></div>
            ))}
            <small className="confirmation-note">Illustrative tests shown in the supplied Yper design reference; confirm availability before publication.</small>
          </div>
          <div className="indicator-device">
            <div className="mini-kiosk">
              <div className="mini-camera" />
              <div className="mini-screen"><b>YPER</b><span>Select test</span><div>♡　⌁　✓</div><div>◉　♧　◎</div></div>
              <strong>YPER</strong>
            </div>
            <span className="device-glow" />
          </div>
        </div>
      </section>

      <section className="products-section section-pad" id="products">
        <div className="container">
          <SectionHeading label="THE YPER SUITE" title="Technology for a more connected health journey" copy="Explore the Yper product suite. Product-specific capabilities and availability are being confirmed." centered />
          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.slug}>
                <div className={`product-card-art product-art-${index}`}><AbstractVisual variant={`product-visual-${index}`} /><span className="product-number">0{index + 1}</span></div>
                <div className="product-card-body">
                  <p className="eyebrow">{product.audience}</p>
                  <h3>{product.name}</h3>
                  <p>{product.description}. Detailed product information is awaiting confirmation.</p>
                  <Link className="text-link" to={`/products/${product.slug}`}>Learn More <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="principles-section section-pad">
        <div className="container principles-layout">
          <div><p className="eyebrow">OUR APPROACH</p><h2>Healthcare that works for <em>everyone.</em></h2><p>We believe a better healthcare experience begins by making access easier to understand and explore.</p></div>
          <div className="principle-list">
            {[["Accessible", "Make health screening approachable and easier to reach.", "people"], ["Available", "Bring health technology closer to the places people live and work.", "pulse"], ["Affordable", "Support more inclusive access to health and wellbeing.", "heart"]].map(([title, text, icon], index) => (
              <article className="principle" key={title}><span className="principle-count">0{index + 1}</span><Icon kind={icon} /><div><h3>{title}</h3><p>{text}</p></div><span className="principle-arrow">↗</span></article>
            ))}
          </div>
        </div>
      </section>

      <section className="ecosystem-section section-pad">
        <div className="container">
          <SectionHeading label="A CONNECTED ECOSYSTEM" title="Many perspectives. One healthier future." copy="Yper’s intended ecosystem and partner relationships are being confirmed. We welcome conversations with organizations working to improve access to health." centered />
          <div className="ecosystem-grid">
            {["Healthcare professionals", "Health technology", "Community organizations", "Research & innovation"].map((item, index) => (
              <div className="ecosystem-item" key={item}><span className={`ecosystem-icon eco-${index}`}><Icon kind={["people", "pulse", "heart", "building"][index]} /></span><strong>{item}</strong><span>Potential ecosystem area</span></div>
            ))}
          </div>
          <p className="ecosystem-disclaimer">No specific partnership or customer relationship is implied.</p>
        </div>
      </section>

      <section className="ticker" aria-label="Yper health messages">
        <div className="ticker-track">
          {Array.from({ length: 2 }, (_, repeat) => (
            <span className="ticker-group" key={repeat} aria-hidden={repeat ? "true" : undefined}>
              <span>Health, in focus</span><b>✳</b><span>Access for everyone</span><b>✳</b><span>Connected care</span><b>✳</b><span>A preventive approach</span><b>✳</b>
            </span>
          ))}
        </div>
      </section>

      <section className="closing-cta section-pad">
        <div className="container closing-inner"><div><p className="eyebrow">START A CONVERSATION</p><h2>Let’s bring your health <em>into focus.</em></h2><p>Connect with Yper to explore the possibilities.</p></div><a className="button button-light" href="#demo">Book a Demo <span aria-hidden="true">→</span></a><AbstractVisual variant="closing-visual" /></div>
      </section>

      <DemoSection />

      <section className="assurance-section">
        <div className="container assurance-inner"><Icon kind="shield" /><div><strong>Security & compliance information</strong><p>Yper security practices, certifications and compliance details require confirmation. No specific certification or regulatory claim is made here.</p></div><span className="confirmation-badge">DETAILS TO CONFIRM</span></div>
      </section>
    </main>
  );
}
