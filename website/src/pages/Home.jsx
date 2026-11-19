import { Link } from "react-router-dom";
import DemoForm from "../components/DemoForm.jsx";
import { AbstractVisual, Icon } from "../components/Visuals.jsx";
import { products } from "../data/products.js";
import { media } from "../data/media.js";

const audiences = [
  {
    title: "Employers",
    description: "Screening and a clearer next step for people at work.",
    icon: "people",
    image: media.overviewEmployers,
    imageAlt: "A person in a clinical setting giving a thumbs-up.",
  },
  {
    title: "Communities",
    description: "Basic health checks closer to where people already are.",
    icon: "heart",
    image: media.overviewCommunities,
    imageAlt: "A family spending time outdoors.",
  },
  {
    title: "Clinics & Hospitals",
    description: "A private first step that can extend a clinic’s reach.",
    icon: "building",
    image: media.overviewClinics,
    imageAlt: "A hospital building.",
  },
  {
    title: "Health Programmes",
    description: "A configurable screening point for outreach and larger programmes.",
    icon: "pulse",
    image: media.overviewProgrammes,
    imageAlt: "A clinician wearing a mask at a health screening kiosk.",
  },
];

const indicators = [
  ["Blood Pressure", "Blood pressure measurement", "pulse"],
  ["Heart Rate & ECG", "Heart rhythm screening, where configured", "heart"],
  ["Body Temperature", "Temperature measurement", "pulse"],
  ["Oxygen Saturation (SpO₂)", "Oxygen saturation measurement", "droplet"],
  ["Blood Glucose", "Blood glucose screening", "droplet"],
  ["Body Composition", "Body composition measurement", "people"],
  ["Vision & Hearing", "Where supported", "check"],
  ["Additional Tests", "As per configuration", "check"],
];

const journeySteps = [
  ["Register", "A quick and easy check-in process.", media.healthAtmStep1, "A hand pressing Start on a YPER touchscreen."],
  ["Complete Screening", "Get your vital signs and key health parameters checked.", media.healthAtmStep2, "A clinician standing beside a YPER health kiosk."],
  ["Review Results", "See your results through the appropriate secure interface.", media.healthAtmStep3, "A YPER health report displayed on a screen."],
  ["Get Guidance", "Connect with a clinician when needed.", media.healthAtmStep4, "A clinician speaking with someone by video call."],
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
    ["Guided screening", "A clear first step for health checks", "heart"],
    ["Configured for your site", "Tests depend on the selected setup", "check"],
    ["Connected care", "A clearer next step when needed", "people"],
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
        <div className="trust-brand"><img src={`${import.meta.env.BASE_URL}yper-logo.png`} alt="" /><small>Bring Your Health Into Focus.</small></div>
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
    <main className="home-page">
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">YPER HEALTH <span /></p>
            <h1>Bring Your Health <em>Into Focus.</em></h1>
            <p className="hero-description">Guided Health ATM screening, connected technology, and a clearer next step for preventive care.</p>
            <div className="hero-benefits">
              <div><Icon kind="heart" /><span>Health<br />Screening</span></div>
              <div><Icon kind="people" /><span>Connected<br />Care</span></div>
              <div><Icon kind="shield" /><span>Preventive<br />Health</span></div>
            </div>
            <div className="hero-actions">
              <Link className="button" to="/products/health-atm">Explore the Health ATM <span aria-hidden="true">→</span></Link>
              <a className="video-link" href="#who-it-serves"><span className="play-icon">▶</span> Discover Yper</a>
            </div>
          </div>
          <div className="home-hero-photo">
            <img src={media.healthAtmHero} alt="A woman using a YPER Health ATM with a clinician beside her." fetchPriority="high" />
            <span>Guided screening · connected care</span>
          </div>
        </div>
        <TrustStrip />
      </section>

      <section className="audience-section section-pad" id="who-it-serves">
        <div className="container audience-layout">
          <div className="audience-main">
            <SectionHeading label="WHO IT SERVES" title={<>Better Health for<br />Individuals and Communities</>} />
            <div className="audience-grid">
              {audiences.map((item) => (
                <article className="audience-card" key={item.title}>
                  <div className="audience-art"><img src={item.image} alt={item.imageAlt} loading="lazy" /><Icon kind={item.icon} /></div>
                  <div className="audience-card-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="why-panel">
            <AbstractVisual variant="dark" />
            <p className="eyebrow">WHY YPER</p>
            <h2>Trusted.<br /><em>Secure. Connected.</em></h2>
            <p>YPER brings screening, privacy, and a clinician’s next step together. Explore the controls and credentials described for configured care pathways.</p>
            <Link className="button button-light" to="/why-yper">Why YPER <span aria-hidden="true">→</span></Link>
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
            <p>The YPER Health ATM can include a range of non-invasive screening and measurement capabilities. The available tests depend on the device configuration; results are screening information, not a diagnosis.</p>
            <Link className="button" to="/products/health-atm#tests">Explore Health ATM <span aria-hidden="true">→</span></Link>
            <div className="mini-values"><span><Icon kind="shield" />Considered<br />approach</span><span><Icon kind="people" />Designed for<br />access</span><span><Icon kind="heart" />Preventive<br />focus</span></div>
          </div>
          <div className="indicator-list">
            {indicators.map(([title, description, icon]) => (
              <div className="indicator" key={title}><Icon kind={icon} /><span><strong>{title}</strong><small>{description}</small></span></div>
            ))}
            <small className="confirmation-note">Available tests vary by Health ATM configuration. Screening information is not a diagnosis.</small>
          </div>
          <div className="indicator-device">
            <div className="mini-kiosk">
              <div className="mini-camera" />
              <div className="mini-screen"><img className="mini-screen-brand" src={`${import.meta.env.BASE_URL}yper-logo.png`} alt="" /><span>Select test</span><div>♡　⌁　✓</div><div>◉　♧　◎</div></div>
              <img className="mini-kiosk-brand" src={`${import.meta.env.BASE_URL}yper-logo.png`} alt="" />
            </div>
            <span className="device-glow" />
          </div>
        </div>
      </section>

      <section className="home-journey-section section-pad">
        <div className="container">
          <SectionHeading label="HOW IT WORKS" title="Your Health Journey, Simplified" copy="A guided visit makes it easier to check in, complete screening, review results, and connect with a clinician when needed." centered />
          <div className="home-journey-grid">
            {journeySteps.map(([title, copy, image, alt], index) => (
              <article className="home-journey-card" key={title}>
                <img src={image} alt={alt} loading="lazy" />
                <div><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="products-section section-pad" id="products">
        <div className="container">
          <SectionHeading label="THE YPER SUITE" title="Technology for a more connected health journey" copy="From clinical documentation and clinic operations to community screening, explore the tools that connect each step of care." centered />
          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.slug}>
                <div className={`product-card-art product-art-${(index % 4) + 1}`}>
                  {product.slug === "health-atm"
                    ? <img className="product-card-image" src={media.carePod} alt="YPER CarePod health screening kiosk concept." loading="lazy" />
                    : <AbstractVisual variant={`product-visual-${index}`} />}
                  <span className="product-number">0{index + 1}</span>
                </div>
                <div className="product-card-body">
                  <p className="eyebrow">{product.audience}</p>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
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
          <SectionHeading label="A CONNECTED ECOSYSTEM" title="Many perspectives. One healthier future." copy="Yper connects people, clinicians, care organizations, and health technology through tools for screening and coordinated care." centered />
          <div className="ecosystem-grid">
            {["People & communities", "Clinicians & care teams", "Hospitals & clinics", "Diagnostics & technology"].map((item, index) => (
              <div className="ecosystem-item" key={item}><span className={`ecosystem-icon eco-${index}`}><Icon kind={["people", "pulse", "heart", "building"][index]} /></span><strong>{item}</strong><span>Connected across care</span></div>
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
        <div className="container assurance-inner"><Icon kind="shield" /><div><strong>Security, privacy & compliance</strong><p>Read about YPER’s approach to privacy, security, and published compliance credentials.</p></div><Link className="text-link" to="/why-yper">Why YPER <span aria-hidden="true">→</span></Link></div>
      </section>
    </main>
  );
}
