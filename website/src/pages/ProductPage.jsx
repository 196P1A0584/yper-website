import { Link, useParams } from "react-router-dom";
import DemoForm from "../components/DemoForm.jsx";
import { AbstractVisual, Icon, KioskVisual } from "../components/Visuals.jsx";
import { products } from "../data/products.js";
import { allProductDetails } from "../data/platformProducts.js";
import { media } from "../data/media.js";

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
  ["contact", "Contact"],
];

function ProductVisual({ product }) {
  if (product.visual === "hub") return <KioskVisual />;
  if (product.visual === "care") {
    return (
      <div className="care-product-visual">
        <img src={media.careVisit} alt="A person using a phone to explore healthcare services." />
        <span>Care access designed around you</span>
      </div>
    );
  }

  const rows = product.visual === "scribe"
    ? [["SUBJECTIVE", "Consultation notes"], ["OBJECTIVE", "Clinical observations"], ["ASSESSMENT", "Review with clinician"], ["PLAN", "Next steps"]]
    : product.visual === "lab"
      ? [["Test catalog", "Configured services"], ["Specimens", "Sample tracking"], ["Analyzers", "Connected results"], ["Reports", "TAT overview"]]
      : product.visual === "doc"
        ? [["Patient intake", "Reported concerns"], ["Language", "Configured support"], ["Case summary", "Draft for review"], ["Care team", "Next steps"]]
        : product.visual === "life"
          ? [["Consultation", "Care milestones"], ["Laboratory", "Embryology workflows"], ["Locations", "Connected teams"], ["Follow-up", "Treatment journey"]]
          : product.visual === "surge"
            ? [["Theatre schedule", "Rooms and teams"], ["Equipment", "Supply tracking"], ["Checklist", "Procedure workflow"], ["Operations", "Activity overview"]]
            : product.visual === "buddy"
              ? [["Ask a question", "General information"], ["Explore", "Care options"], ["Language", "Configured support"], ["Next step", "Professional care"]]
              : product.visual === "assistant"
                ? [["Virtual assistant", "Service information"], ["Clinical support", "Human review"], ["Avatar", "Conversation mode"], ["Documentation", "Draft workflow"]]
                : product.visual === "pharmacy"
                  ? [["Indent", "Requests and issues"], ["Inventory", "Stock levels"], ["Dispensing", "Barcode workflow"], ["Expiry", "FEFO tracking"]]
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
      <div className="workflow-note"><Icon kind="check" /><span>Workflow steps and included services can vary by plan and care setting.</span></div>
    </div>
  );
}

function ProductResults({ product }) {
  if (!product.results?.length) return null;

  return (
    <section className="product-detail product-results" aria-label={`${product.name} reported results`}>
      <div className="product-results-heading">
        <p className="eyebrow">AT A GLANCE</p>
        <h2>More time for better care.</h2>
        <p>Reported outcomes and service highlights from the supplied product references.</p>
      </div>
      <div className="product-results-grid">
        {product.results.map(([value, label]) => (
          <article key={label}><strong>{value}</strong><span>{label}</span></article>
        ))}
      </div>
    </section>
  );
}

function ProductPricing({ product }) {
  const plans = product.pricingPlans || [];

  return (
    <section className="product-detail product-pricing" id="pricing">
      <div className="pricing-copy"><p className="eyebrow">PRICING</p><h2>{plans.length ? "Plans for the way you work." : "Ask about current options."}</h2><p>{plans.length ? "Choose a plan that fits your practice or organization. Hospital and device configurations may affect the final proposal." : "Pricing was not listed in the supplied product reference. Contact Yper for current options."}</p><a className="button" href="#book-demo">Discuss your requirements <span aria-hidden="true">→</span></a></div>
      <div className={`pricing-plan-grid pricing-plan-count-${Math.max(plans.length, 1)}`}>
        {plans.length ? plans.map((plan) => (
          <article className={`pricing-plan${plan.featured ? " is-featured" : ""}`} key={plan.name}>
            {plan.featured && <span className="pricing-plan-badge">POPULAR</span>}
            <p className="eyebrow">{plan.name}</p>
            <strong className="pricing-plan-price">{plan.price}</strong>
            <span className="pricing-plan-period">{plan.period}</span>
            <p>{plan.description}</p>
            <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </article>
        )) : (
          <article className="pricing-plan">
            <p className="eyebrow">PRICING DETAILS</p>
            <strong className="pricing-plan-price">Contact Yper</strong>
            <span className="pricing-plan-period">for current options</span>
            <p>Pricing was not listed in the supplied product reference.</p>
            <a className="text-link" href="#book-demo">Request details <span aria-hidden="true">→</span></a>
          </article>
        )}
      </div>
    </section>
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
          <div className="product-hero-actions">
            <a className="button" href="#book-demo">{product.ctaLabel || (product.slug === "yperhis" ? "Book a Demo" : product.slug === "ypercare" ? "Explore Care" : "Start Now")}<span aria-hidden="true">→</span></a>
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

      <ProductResults product={product} />

      <section className="product-detail product-features-section" id="key-features">
        <PageHeading eyebrow={`${product.name} · CAPABILITIES`} title={<>Key features for <em>{product.audience.toLowerCase()}.</em></>} copy="Explore the tools and workflows included in the Yper product suite. Specific modules and integrations depend on the plan and deployment." />
        <FeatureGrid items={product.features} />
      </section>

      <section className="product-detail product-security" id="security-compliance">
        <div className="security-icon"><Icon kind="shield" /></div>
        <div><p className="eyebrow">TRUST & SAFETY</p><h2>Security built for healthcare.</h2><p>Learn how YPER approaches privacy, security, and compliance for configured care pathways.</p>
          <Link className="text-link" to="/why-yper">View security and compliance details <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="product-detail product-specs" id="tech-specs">
        <PageHeading eyebrow="TECHNICAL INFORMATION" title="Designed for connected care." copy="Choose the modules, integrations, and deployment approach that fit your organization." />
        <div className="spec-list">{product.specifications.map((item, index) => <div className="spec-row" key={item}><span>0{index + 1}</span><strong>{item}</strong><small>Configuration dependent</small></div>)}</div>
        <p className="spec-note">Available integrations, devices, and deployment options depend on the selected configuration.</p>
      </section>

      <ProductPricing product={product} />

      <section className="product-detail product-solutions" id="solutions">
        <PageHeading eyebrow="SOLUTIONS" title="Made for different care settings." copy={`Explore how ${product.name} supports different care settings. The right modules and workflows depend on your organization's needs.`} />
        <div className="solution-list">{product.solutions.map((item, index) => <article key={item}><span>0{index + 1}</span><Icon kind={["people", "building", "heart", "pulse"][index % 4]} /><h3>{item}</h3><p>Discuss needs, scope and availability with Yper.</p></article>)}</div>
      </section>

      <section className="product-detail product-workflows" id="features">
        <PageHeading eyebrow={`${product.name} · IN PRACTICE`} title="A clearer view of the workflow." copy="See how the product brings everyday tasks together. The interface below is an illustration, not a live system." />
        <div className="workflow-layout"><WorkflowPreview product={product} /><ProductVisual product={product} /></div>
        {product.slug === "yperscribe" && <div className="mobile-benefit"><span className="mobile-benefit-icon"><Icon kind="pulse" /></span><div><p className="eyebrow">MOBILE & WEB</p><h3>Documentation that moves with the clinician.</h3><p>Use mobile and web workflows, record consultations offline, and capture clinical images with native camera support.</p></div></div>}
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
        <DemoForm selectedProduct={product.name} />
      </section>

      <section className="product-detail call-detail" id="contact">
        <Icon kind="mail" /><div><p className="eyebrow">CONTACT YPER</p><h2>We’d be glad to connect.</h2><p>For product questions and demo enquiries, email the YPER team.</p><a className="text-link" href="mailto:contact@yper.in">contact@yper.in <span aria-hidden="true">→</span></a></div>
      </section>
    </>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = allProductDetails.find((item) => item.slug === slug);
  if (!product) return <main className="not-found container"><p className="eyebrow">PRODUCT NOT FOUND</p><h1>Explore the Yper product suite.</h1><Link className="button" to="/#products">View products <span aria-hidden="true">→</span></Link></main>;

  return (
    <main className={`product-page product-page-${product.visual}`}>
      <div className="product-subnav"><div className="container product-subnav-inner"><strong>{product.name}</strong><nav aria-label={`${product.name} sections`}>{sections.map(([id, title]) => <a href={`#${id}`} key={id}>{title}</a>)}</nav></div></div>
      <div className="container product-content"><ProductSection product={product} /></div>
    </main>
  );
}
