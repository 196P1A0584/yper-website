import { Link, useParams } from "react-router-dom";
import DemoForm from "../components/DemoForm.jsx";
import { AbstractVisual, Icon, KioskVisual } from "../components/Visuals.jsx";
import { products } from "../data/products.js";

const sections = [
  ["overview", "Overview"],
  ["key-features", "Key Features"],
  ["security-compliance", "Security & Compliance"],
  ["tech-specs", "Tech Specs"],
  ["pricing", "Pricing"],
  ["solutions", "Solutions"],
  ["features", "Features"],
  ["why-us", "Why Us"],
  ["book-demo", "Book a Demo"],
  ["call-us", "Call Us"],
];

function ProductVisual({ product }) {
  if (product.visual === "hub") return <KioskVisual />;

  const rows = product.visual === "scribe"
    ? [["SUBJECTIVE", "Consultation notes"], ["OBJECTIVE", "Clinical observations"], ["ASSESSMENT", "Review with clinician"], ["PLAN", "Next steps"]]
    : product.visual === "hospital"
      ? [["Emergency", "Patient flow"], ["Inpatient", "Bed overview"], ["Diagnostics", "Orders & results"], ["Operations", "Daily summary"]]
      : product.visual === "clinic"
        ? [["Today", "Appointments"], ["Patient record", "Visit history"], ["Consultation", "Clinical notes"], ["Practice", "Billing overview"]]
        : [["Appointments", "Upcoming care"], ["Health records", "Your information"], ["Virtual visit", "Connect with a provider"], ["Follow-up", "Care plan"]];

  return (
    <div className={`product-mockup mockup-${product.visual}`} role="img" aria-label={`${product.name} illustrative interface concept`}>
      <AbstractVisual variant="mockup-visual" />
      <div className="mockup-window">
        <div className="mockup-topbar"><span /><span /><span /><b>{product.name}</b></div>
        <div className="mockup-body">
          <div className="mockup-sidebar"><i /><i /><i /><i /></div>
          <div className="mockup-content">
            <div className="mockup-heading"><small>{product.visualLabel}</small><strong>{product.name}</strong></div>
            {rows.map(([label, text], index) => <div className="mockup-row" key={label}><span className={`mockup-dot mockup-dot-${index}`} /><div><b>{label}</b><small>{text}</small></div><i /></div>)}
            <div className="mockup-action">Illustrative preview</div>
          </div>
        </div>
      </div>
      <span className="mockup-caption">Concept visual · not a live product screenshot</span>
    </div>
  );
}

function PageHeading({ eyebrow, title, copy }) {
  return <div className="detail-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{copy}</p></div>;
}

function FeatureGrid({ items, detailed = false }) {
  return (
    <div className={`feature-grid${detailed ? " feature-grid-detailed" : ""}`}>
      {items.map(([title, copy, icon], index) => (
        <article className="feature-tile" key={title}>
          <Icon kind={icon || ["heart", "people", "check"][index % 3]} />
          <span>0{index + 1}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>
      ))}
    </div>
  );
}

function WorkflowPreview({ product }) {
  return (
    <div className={`workflow-preview workflow-${product.visual}`}>
      <div className="workflow-steps">
        {product.workflow.map(([title, copy], index) => (
          <article className="workflow-step" key={title}>
            <span className="workflow-count">0{index + 1}</span>
            <div><h3>{title}</h3><p>{copy}</p></div>
          </article>
        ))}
      </div>
      <div className="workflow-note"><Icon kind="check" /><span>Illustrative workflow based on the supplied reference brief. Yper availability must be confirmed.</span></div>
    </div>
  );
}

function ProductSection({ product }) {
  return (
    <>
      <section className={`product-detail product-hero product-hero-${product.visual}`} id="overview">
        <div className="product-overview-copy">
          <p className="eyebrow">{product.name} <span className="hero-kicker-line" /> PRODUCT OVERVIEW</p>
          <p className="product-tagline">{product.tagline}</p>
          <h1>{product.headline}</h1>
          <p className="product-hero-description">{product.overview}</p>
          <p className="reference-disclaimer">Reference-led draft. Product availability and capabilities require confirmation from Yper.</p>
          <div className="product-hero-actions">
            <a className="button" href="#book-demo">{product.slug === "yperhis" ? "Book a Demo" : product.slug === "ypercare" ? "Explore Care" : "Start Now"}<span aria-hidden="true">→</span></a>
            <a className="text-link" href="#key-features">Learn More <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="product-overview-visual"><ProductVisual product={product} /></div>
        <div className="getting-started" aria-label={`${product.name} getting started`}>
          <div className="getting-started-heading"><span>01</span><div><p className="eyebrow">GETTING STARTED</p><h2>A considered first step.</h2></div></div>
          <div className="getting-started-steps">
            {product.gettingStarted.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="product-detail product-features-section" id="key-features">
        <PageHeading eyebrow={`${product.name} · CAPABILITIES`} title={<>Key features for <em>{product.audience.toLowerCase()}.</em></>} copy="These product-specific capabilities are drawn from the supplied reference brief. Confirm availability and exact behavior with Yper before publication or use." />
        <FeatureGrid items={product.features} />
      </section>

      <section className="product-detail product-security" id="security-compliance">
        <div className="security-icon"><Icon kind="shield" /></div>
        <div><p className="eyebrow">TRUST & SAFETY</p><h2>Security & Compliance</h2><p>Yper-specific security practices, certifications and regulatory status have not been verified for this product. No certification or compliance claim is made here.</p>
          <div className="verification-chips">{["Privacy & data handling", "Access controls", "Audit records", "Encryption", "Applicable standards"].map((item) => <span key={item}><i />{item}: confirm with Yper</span>)}</div>
        </div>
      </section>

      <section className="product-detail product-specs" id="tech-specs">
        <PageHeading eyebrow="TECHNICAL INFORMATION" title="Designed around the right setup." copy="The supplied reference describes the following areas. Yper-supported devices, integrations and deployment options still need technical confirmation." />
        <div className="spec-list">{product.confirmations.map((item, index) => <div className="spec-row" key={item}><span>0{index + 1}</span><strong>{item}</strong><small>Needs confirmation</small></div>)}</div>
        <p className="spec-note">No device compatibility, API behavior, hosting location or technical requirement is implied by this page.</p>
      </section>

      <section className="product-detail product-pricing" id="pricing">
        <div className="pricing-copy"><p className="eyebrow">PRICING</p><h2>Let’s find the right fit.</h2><p>Yper-approved pricing has not been provided. Plan details and commercial terms are available from Yper on request.</p><a className="button" href="#book-demo">Contact Us for Pricing <span aria-hidden="true">→</span></a></div>
        <div className="pricing-visual"><span className="pricing-mark">Y</span><strong>Custom discussion</strong><small>Scope and availability to confirm</small><div><span>Product fit</span><span>Implementation</span><span>Commercials</span></div></div>
      </section>

      <section className="product-detail product-solutions" id="solutions">
        <PageHeading eyebrow="SOLUTIONS" title="Made for different care settings." copy={`Explore how ${product.name} may fit your organization. The use cases below reflect the supplied product brief and require Yper confirmation.`} />
        <div className="solution-list">{product.solutions.map((item, index) => <article key={item}><span>0{index + 1}</span><Icon kind={["people", "building", "heart", "pulse"][index % 4]} /><h3>{item}</h3><p>Discuss needs, scope and availability with Yper.</p></article>)}</div>
      </section>

      <section className="product-detail product-workflows" id="features">
        <PageHeading eyebrow={`${product.name} · IN PRACTICE`} title="A clearer view of the workflow." copy="A closer look at the product-specific journeys described in the reference brief. These panels are visual concepts, not a working clinical system." />
        <div className="workflow-layout"><WorkflowPreview product={product} /><ProductVisual product={product} /></div>
        {product.slug === "yperscribe" && <div className="mobile-benefit"><span className="mobile-benefit-icon"><Icon kind="pulse" /></span><div><p className="eyebrow">MOBILE WORKFLOW</p><h3>Documentation that can move with the clinician.</h3><p>Mobile applications, offline use, supported devices and app-store availability are unconfirmed. No download link is presented.</p></div></div>}
        <div className="faq-block"><PageHeading eyebrow="QUESTIONS & ANSWERS" title="Frequently asked questions" copy="Answers are limited to information that can be responsibly stated today." /><div className="faq-list">{product.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div>
      </section>

      <section className={`product-detail product-why product-why-${product.visual}`} id="why-us">
        <p className="eyebrow">WHY {product.name.toUpperCase()}</p><h2>Thoughtful technology for <em>connected care.</em></h2>
        <p className="why-intro">A starting point for exploring how {product.name} could support your organization. Product fit and availability should be confirmed directly with Yper.</p>
        <div className="why-points">{product.why.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div>
        <div className="related-products"><span>EXPLORE THE YPER SUITE</span>{products.filter((item) => item.slug !== product.slug).map((item) => <Link to={`/products/${item.slug}`} key={item.slug}>{item.name}<span aria-hidden="true">↗</span></Link>)}</div>
        <a className="button button-light" href="#book-demo">Talk with Yper <span aria-hidden="true">→</span></a>
      </section>

      <section className="product-detail demo-detail" id="book-demo">
        <div className="detail-heading"><p className="eyebrow">LET’S CONNECT</p><h2>Book a {product.name} demo</h2><p>Tell us what you’re exploring. This form is not connected to a submission service, so your details will not be sent.</p></div>
        <DemoForm />
      </section>

      <section className="product-detail call-detail" id="call-us">
        <Icon kind="pulse" /><div><p className="eyebrow">CALL US</p><h2>We’d be glad to connect.</h2><p>Yper’s verified phone number is not available in the project materials. Contact details need confirmation.</p></div>
        <span className="confirmation-badge">PHONE NUMBER TO CONFIRM</span>
      </section>
    </>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  if (!product) return <main className="not-found container"><p className="eyebrow">PRODUCT NOT FOUND</p><h1>Explore the Yper product suite.</h1><Link className="button" to="/#products">View products <span aria-hidden="true">→</span></Link></main>;

  return (
    <main className={`product-page product-page-${product.visual}`}>
      <div className="product-subnav"><div className="container product-subnav-inner"><strong>{product.name}</strong><nav aria-label={`${product.name} sections`}>{sections.map(([id, title]) => <a href={`#${id}`} key={id}>{title}</a>)}</nav></div></div>
      <div className="container product-content"><ProductSection product={product} /></div>
    </main>
  );
}
