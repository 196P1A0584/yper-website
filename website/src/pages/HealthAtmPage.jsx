import { useState } from "react";
import DemoForm from "../components/DemoForm.jsx";
import { Icon } from "../components/Visuals.jsx";

const productCards = [
  {
    name: "YPER CarePod",
    description: "Standalone, private pod for hospitals, malls and community centres.",
    image: "https://www.yper.in/_next/image?url=%2Fimages%2Fyper%2Fyper-kiosk-front.webp&w=828&q=75",
    alt: "Concept visualization of a freestanding YPER health kiosk with a touchscreen and blood-pressure cuff.",
  },
  {
    name: "YPER CarePod Wall",
    description: "Wall-mounted unit for clinics, pharmacies and workplaces.",
    image: "https://www.yper.in/_next/image?url=%2Fimages%2Fyper%2Fwall-mounted-kiosk.webp&w=828&q=75",
    alt: "Concept visualization of a wall-mounted YPER health kiosk with a touchscreen, blood-pressure cuff, and handheld sensor.",
  },
  {
    name: "YPER Kit",
    description: "Portable tablet, BP cuff, pulse oximeter and thermometer for health workers.",
    image: "https://www.yper.in/_next/image?url=%2Fimages%2Fyper%2Fportable-health-kit.webp&w=828&q=75",
    alt: "Concept visualization of an open YPER portable health kit with a tablet, blood-pressure cuff, pulse oximeter, and thermometer.",
  },
];

const visitSteps = [
  ["CHECK IN", "Mobile number, ABHA or Yper Health Card. Choose English, Telugu or Hindi.", "people"],
  ["GET CHECKED", "Supported vitals such as blood pressure, pulse, oxygen saturation, temperature, and weight, plus ECG and other tests included in that configuration.", "pulse"],
  ["SEE IT CLEARLY", "Results on screen and on your phone, in plain language.", "check"],
  ["TALK TO A SPECIALIST", "A live video consult with a registered doctor from a partner hospital, plus an e-prescription or referral if needed.", "building"],
  ["FOLLOW UP", "Reminders, and records shared with the care team you choose.", "heart"],
];

const insideGroups = [
  ["MEASURE", "Supported measurements and devices depend on the confirmed setup.", [
    "Supported vital measurements.",
    "Configured monitoring devices.",
    "Measurements available in the connected care record.",
    "12-lead ECG recording reviewed by a doctor when that workflow is configured.",
    "Connected examination devices where included in the setup.",
  ], "pulse"],
  ["CONNECT", "Clinical and system connections are enabled only when configured.", [
    "Live video with registered specialists.",
    "Integration with hospital and clinic systems.",
    "Staff prompts to help prioritise who needs attention first.",
    "Optional imaging at larger sites.",
  ], "people"],
  ["REMEMBER", "Record, consent, and follow-up features depend on the agreed care pathway.", [
    "Digital health record for every visit.",
    "ABHA linking with patient consent.",
    "Follow-up reminders by SMS and WhatsApp.",
    "YPER Health Card for quick check-in.",
  ], "check"],
];

const capabilities = [
  ["Integrated Vital Monitoring", "pulse"],
  ["ECG & Cardiac Screening", "heart"],
  ["Point-of-Care Diagnostics", "droplet"],
  ["Connected Medical Examination", "check"],
  ["AI-Assisted Triage & Telemedicine", "people"],
  ["Digital Health Records", "shield"],
  ["Hospital & Clinic Integration", "building"],
  ["Optional Medical Imaging", "pulse"],
];

export default function HealthAtmPage() {
  const [selectedProduct, setSelectedProduct] = useState("Health ATM");
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <main className="health-atm-page">
      <section className="atm-hero">
        <div className="container atm-hero-grid">
          <div className="atm-hero-copy">
            <p className="eyebrow">HEALTH ATM</p>
            <h1>A Clinic's First Hour, in One Private Pod.</h1>
            <p>A guided screening visit can bring supported measurements and a connected next step into one private place. What the pod includes, and whether a clinician is available, depends on the confirmed configuration.</p>
            <div className="atm-hero-actions">
              <a className="button" href="#book-demo">Book a Demo <span aria-hidden="true">→</span></a>
              <a className="text-link" href="#technology">Compare Products <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="atm-hero-image">
            <img src={productCards[0].image} alt={productCards[0].alt} fetchPriority="high" />
            <span>YPER HEALTH ATM · CONCEPT VISUAL</span>
          </div>
        </div>
      </section>

      <section className="atm-products section-pad" id="technology">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">OUR PRODUCTS</p>
            <h2>Healthcare, Designed Around You.</h2>
            <p className="section-copy">Discover YPER's connected healthcare solutions, designed to bring intelligent diagnostics and accessible medical services closer to the people who need them. Specifications and included devices are confirmed for each deployment.</p>
          </div>
          <div className="atm-product-grid">
            {productCards.map((product) => (
              <article className="atm-product-card" key={product.name}>
                <div className="atm-product-image"><img src={product.image} alt={product.alt} loading="lazy" /></div>
                <div className="atm-product-copy">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a className="text-link" href="#book-demo" onClick={() => setSelectedProduct(product.name)}>Explore Product <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="atm-visit section-pad">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">HOW A VISIT WORKS</p>
            <h2>From hazy to clear, in five steps.</h2>
          </div>
          <div className="atm-steps">
            {visitSteps.map(([title, copy, icon], index) => (
              <article className="atm-step" key={title}>
                <span className="atm-step-marker"><Icon kind={icon} /><b>0{index + 1}</b></span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="atm-inside section-pad" id="tests">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">WHAT'S INSIDE</p>
            <h2>Measure. Connect. Remember.</h2>
            <p className="section-copy">Features and devices vary by Health ATM configuration.</p>
          </div>
          <div className="atm-inside-grid">
            {insideGroups.map(([title, description, items, icon]) => (
              <article className="atm-inside-card" key={title}>
                <Icon kind={icon} />
                <p className="eyebrow">{title}</p>
                <p className="atm-inside-intro">{description}</p>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="atm-platform section-pad">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">PLATFORM</p>
            <h2>Complete Healthcare. One Connected Platform.</h2>
            <p className="section-copy">A connected ecosystem for intelligent diagnostics, digital consultations, and coordinated healthcare experiences.</p>
          </div>
          <div className="atm-capability-layout">
            <div className="atm-capability-list" aria-label="Health ATM capabilities">
              {capabilities.map(([title], index) => (
                <button className={index === activeCapability ? "is-active" : ""} type="button" aria-pressed={index === activeCapability} key={title} onClick={() => setActiveCapability(index)}>
                  <span>0{index + 1}</span>{title}
                </button>
              ))}
            </div>
            <div className="atm-capability-detail" aria-live="polite">
              <div className="atm-capability-art"><Icon kind={capabilities[activeCapability][1]} /><span>ILLUSTRATIVE CONFIGURATION</span></div>
              <div><p className="eyebrow">CAPABILITY 0{activeCapability + 1}</p><h3>{capabilities[activeCapability][0]}</h3><p>Capabilities depend on configured devices, software, and clinical services.</p></div>
              <p className="atm-sample-note">Decorative illustration. Not a patient measurement, diagnosis, or live session.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="atm-screening-note">
        <div className="container atm-screening-inner">
          <Icon kind="shield" />
          <div><p className="eyebrow">UNDERSTANDING RESULTS</p><h2>Screening information, not a diagnosis</h2>
            <p>A Health ATM can show measurements and test outputs through the interface configured for that site. Those figures help a person and a care team see what was captured. They are not an independent diagnosis, a prescription, or emergency advice.</p>
            <p>Interpretation belongs to a qualified clinician, using the equipment and protocol agreed for the deployment. If a remote consultation is offered, it happens only when a clinician is available and telemedicine has been enabled. If this may be an emergency, contact local emergency services.</p>
          </div>
        </div>
      </section>

      <section className="atm-overview section-pad">
        <div className="container atm-overview-grid">
          <div className="atm-video-placeholder" role="img" aria-label="Health ATM product overview video placeholder">
            <img src={productCards[0].image} alt="" loading="lazy" />
            <span className="atm-video-play" aria-hidden="true">▶</span>
            <span className="atm-video-caption">PRODUCT OVERVIEW VIDEO TO BE ADDED</span>
          </div>
          <div><p className="eyebrow">PRODUCT OVERVIEW</p><h2>A kiosk experience designed for a real care setting.</h2><p>A short look at the YPER kiosk concept: registration, supported screening, a remote consultation, and connected follow-up. Information on screen is sample data.</p></div>
        </div>
      </section>

      <section className="atm-pilot section-pad">
        <div className="container atm-pilot-inner"><div><p className="eyebrow">CARE POD PILOT</p><h2>Plan a CarePod pilot</h2><p>Talk through sites, devices, and the care pathway you want to support. Pricing is prepared for that proposal. It is not listed as a standard rate.</p></div>
          <div className="atm-pilot-actions"><a className="button button-light" href="#book-demo" onClick={() => setSelectedProduct("YPER CarePod")}>Host a CarePod Pilot <span aria-hidden="true">→</span></a><a className="atm-outline-button" href="#book-demo" onClick={() => setSelectedProduct("YPER CarePod")}>Request a Quote <span aria-hidden="true">→</span></a></div>
        </div>
      </section>

      <section className="atm-demo-section section-pad" id="book-demo">
        <div className="container atm-demo-layout"><div><p className="eyebrow">LET'S CONNECT</p><h2>Explore a Health ATM for your setting.</h2><p>Tell us what you are considering. Do not include patient information or health records.</p></div><DemoForm selectedProduct={selectedProduct} /></div>
      </section>
    </main>
  );
}