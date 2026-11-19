import { Link } from "react-router-dom";
import { Icon } from "../components/Visuals.jsx";
import { platformProducts } from "../data/platformProducts.js";
import DemoForm from "../components/DemoForm.jsx";
import { media } from "../data/media.js";
import { customers } from "../data/customers.js";

const pageContent = {
  platform: {
    label: "THE YPER PLATFORM",
    title: <>Technology for a<br /><em>connected health journey.</em></>,
    intro: "A connected suite for patients, clinicians, and care organizations—from first screening through coordinated follow-up.",
  },
  initiative: {
    label: "HEALTH INITIATIVE",
    title: <>Care that reaches<br /><em>the community.</em></>,
    intro: "In Kasurdi village, access to a local ECG helped a care team respond quickly when a patient reported chest pain.",
  },
  customers: {
    label: "CUSTOMERS",
    title: <>Built alongside<br /><em>care teams.</em></>,
    intro: "A growing network of hospitals, diagnostic centers, clinics, and healthcare organizations working to make care more connected.",
  },
  about: {
    label: "ABOUT YPER",
    title: <>Bring Your Health<br /><em>Into Focus.</em></>,
    intro: "Yper brings together health screening and digital care tools to help connect people, clinicians, and health organizations.",
  },
};

const audiences = [
  {
    title: "People and patients",
    description: "Patient-facing tools for screening, information, and connected care.",
    icon: "heart",
    image: media.careVisit,
    products: ["yperhealthhub", "ypercare", "yperdoc", "yperbuddy", "health-atm"],
  },
  {
    title: "Clinicians and doctors",
    description: "Clinical documentation, practice operations, and specialist care workflows.",
    icon: "pulse",
    image: media.healthKit,
    products: ["ypermd", "yperscribe", "yperlife", "ypera"],
  },
  {
    title: "Hospitals and care facilities",
    description: "Connected clinical, diagnostic, surgical, and pharmacy operations.",
    icon: "building",
    image: media.mobileUnit,
    products: ["yperhis", "yperlab", "ypersurge", "yperpharma"],
  },
];

const heroImages = {
  platform: [media.carePod, "YPER CarePod health screening kiosk concept.", "YPER product concept"],
  initiative: [media.initiativeStart, "A patient receives care through the Kasurdi village health initiative.", "Kasurdi village health initiative"],
  customers: [media.wallCarePod, "YPER wall-mounted health screening kiosk concept.", "YPER concept · not a customer deployment"],
  about: [media.carePod, "YPER CarePod health screening kiosk concept.", "YPER product concept"],
};

export default function InfoPages({ page }) {
  const content = pageContent[page];
  const heroImage = heroImages[page];
  return (
    <main className={`info-page info-${page}`}>
      <section className="info-hero">
        <div className="container info-hero-grid">
          <div><p className="eyebrow">{content.label}</p><h1>{content.title}</h1><p>{content.intro}</p><Link className="button" to="/#demo">Start a Conversation <span aria-hidden="true">→</span></Link></div>
          <div className={`info-hero-art info-hero-art-${page}`}>
            <img src={heroImage[0]} alt={heroImage[1]} />
            <span>{heroImage[2]}</span>
          </div>
        </div>
      </section>
      {page === "platform" && (
        <section className="info-section section-pad"><div className="container"><div className="section-heading centered"><p className="eyebrow">THE YPER PLATFORM</p><h2>One connected view across care</h2><p className="section-copy">A coordinated suite for people, clinicians, and care organizations—from a first screening through ongoing care.</p></div><div className="platform-audiences">{audiences.map((audience) => <article className="platform-audience" key={audience.title}><div className="platform-audience-art"><img src={audience.image} alt="" loading="lazy" /><Icon kind={audience.icon} /></div><h3>{audience.title}</h3><p>{audience.description}</p><div className="platform-audience-products">{audience.products.map((slug) => { const product = platformProducts.find((item) => item.slug === slug); return <Link key={slug} to={`/products/${slug}`}>{product.name}<span aria-hidden="true">↗</span></Link>; })}</div></article>)}</div><div className="section-heading centered platform-products-heading"><p className="eyebrow">PRODUCTS</p><h2>Explore the suite</h2></div><div className="platform-product-suite">{platformProducts.map((product) => <Link key={product.slug} to={`/products/${product.slug}`}><span><strong>{product.name}</strong><small>{product.description}</small></span><span aria-hidden="true">↗</span></Link>)}</div></div></section>
      )}
      {page === "initiative" && (
        <section className="story-section section-pad"><div className="container"><div className="story-grid"><div className="story-visual"><img src={media.initiativeStart} alt="A village health initiative team supporting a patient in Kasurdi." /><span>Kasurdi village · community health initiative</span></div><div><p className="eyebrow">KASURDI VILLAGE</p><h2>A timely test, closer to home.</h2><p>When a patient reported chest pain, the local team performed an ECG within minutes. Both readings were abnormal, allowing doctors to respond without waiting for the patient to travel to a distant hospital.</p><p>The field team described the moment as a reminder of how local diagnostics and access to clinicians can make a critical difference. The patient’s identity is not included.</p><span className="confirmation-badge">SCREENING SUPPORTS CLINICAL REVIEW</span></div></div><div className="initiative-timeline">{[[media.initiativeStart, "A patient reports chest pain", "Local care begins close to the community."], [media.initiativeTest, "An ECG is recorded", "The test is completed within minutes."], [media.initiativeResponse, "Doctors review the results", "Both readings are abnormal, prompting an immediate response."]].map(([image, title, copy], index) => <article key={title}><img src={image} alt="" loading="lazy" /><div><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></div></article>)}</div><p className="initiative-disclaimer">A screening result is not a diagnosis. A qualified clinician must interpret findings and decide on care.</p></div></section>
      )}
      {page === "customers" && (
        <section className="info-section section-pad"><div className="container"><div className="section-heading centered"><p className="eyebrow">OUR COMMUNITY</p><h2>Healthcare, built together</h2><p className="section-copy">Organizations across clinics, diagnostics, and hospitals are part of the wider care network.</p></div><div className="customer-grid">{customers.map((customer) => <article className="customer-card" key={customer.name}><img src={customer.logo} alt={`${customer.name} logo`} loading="lazy" /><span>{customer.name}</span></article>)}</div></div></section>
      )}
      {page === "about" && (
        <section className="info-section section-pad"><div className="container about-grid"><div><p className="eyebrow">OUR PURPOSE</p><h2>Technology should help bring health into focus.</h2><p>We focus on practical health access: screening closer to people, useful tools for care teams, and connected pathways from results to follow-up.</p></div><div className="about-values">{[["People first", "Make the health experience more approachable."], ["Access matters", "Keep accessibility at the heart of the conversation."], ["Connected thinking", "Explore how technology can support health journeys."]].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><Icon kind={["heart", "people", "pulse"][index]} /></article>)}</div></div></section>
      )}
      <section className="info-contact section-pad"><div className="container info-contact-inner"><div><p className="eyebrow">NEXT STEP</p><h2>Let’s explore what’s possible.</h2><p>Share what you’re looking for and the Yper team can follow up once a submission service is configured.</p><a className="button button-light" href="/#demo">Book a Demo <span aria-hidden="true">→</span></a></div><div className="info-form"><DemoForm /></div></div></section>
    </main>
  );
}
