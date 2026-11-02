import { Link } from "react-router-dom";
import { AbstractVisual, Icon } from "../components/Visuals.jsx";
import { products } from "../data/products.js";
import DemoForm from "../components/DemoForm.jsx";

const pageContent = {
  platform: {
    label: "THE YPER PLATFORM",
    title: <>Technology for a<br /><em>connected health journey.</em></>,
    intro: "Explore the Yper product suite. Audience groupings and product capabilities are being confirmed by Yper.",
  },
  initiative: {
    label: "HEALTH INITIATIVE",
    title: <>A focus on health,<br /><em>where it matters.</em></>,
    intro: "Yper’s health initiative story, locations and impact details have not yet been provided. This page is ready for approved information.",
  },
  customers: {
    label: "CUSTOMERS",
    title: <>Better health is<br /><em>a shared journey.</em></>,
    intro: "Yper customer relationships and authorized organization logos are not yet available. No customer relationship is implied on this page.",
  },
  about: {
    label: "ABOUT YPER",
    title: <>Bring Your Health<br /><em>Into Focus.</em></>,
    intro: "Yper is a healthcare technology brand focused on accessible health screening and connected technology. More company information is awaiting confirmation.",
  },
};

const audiences = [
  ["Individuals", "Audience and product fit require confirmation.", "heart"],
  ["Doctors", "Audience and product fit require confirmation.", "pulse"],
  ["Care Facilities", "Audience and product fit require confirmation.", "building"],
];

export default function InfoPages({ page }) {
  const content = pageContent[page];
  return (
    <main className={`info-page info-${page}`}>
      <section className="info-hero">
        <div className="container info-hero-grid">
          <div><p className="eyebrow">{content.label}</p><h1>{content.title}</h1><p>{content.intro}</p><Link className="button" to="/#demo">Start a Conversation <span aria-hidden="true">→</span></Link></div>
          <AbstractVisual variant={`info-visual info-visual-${page}`} />
        </div>
      </section>
      {page === "platform" && (
        <section className="info-section section-pad"><div className="container"><div className="section-heading centered"><p className="eyebrow">THE YPER PLATFORM</p><h2>Designed around different health journeys</h2><p className="section-copy">Audience groupings require confirmation. These categories are shown as a framework, not as confirmed product assignments.</p></div><div className="platform-audiences">{audiences.map(([title, text, icon]) => <article className="platform-audience" key={title}><Icon kind={icon} /><h3>{title}</h3><p>{text}</p><span className="confirmation-badge">MAPPING TO CONFIRM</span></article>)}</div><div className="section-heading centered platform-products-heading"><p className="eyebrow">PRODUCTS</p><h2>Explore the suite</h2></div><div className="platform-product-suite">{products.map((product) => <Link key={product.slug} to={`/products/${product.slug}`}><span><strong>{product.name}</strong><small>{product.description}</small></span><span aria-hidden="true">↗</span></Link>)}</div></div></section>
      )}
      {page === "initiative" && (
        <section className="story-section section-pad"><div className="container story-grid"><div className="story-visual"><AbstractVisual variant="story-visual" /><span>Approved initiative photography to be added</span></div><div><p className="eyebrow">THE STORY</p><h2>Health access starts with listening.</h2><p>Initiative background, location, participant stories and measured outcomes require confirmation. This space is reserved for Yper’s approved story and supporting photography.</p><div className="confirmation-badge">CONTENT TO CONFIRM</div></div></div></section>
      )}
      {page === "customers" && (
        <section className="info-section section-pad"><div className="container"><div className="section-heading centered"><p className="eyebrow">OUR COMMUNITY</p><h2>Partners in a healthier future</h2><p className="section-copy">Customer names and logos will appear here only after relationships and usage permissions are verified.</p></div><div className="customer-placeholder-grid">{Array.from({ length: 6 }, (_, index) => <div key={index}><span className="placeholder-mark">Y</span><span>Approved customer logo<br />to be added</span></div>)}</div></div></section>
      )}
      {page === "about" && (
        <section className="info-section section-pad"><div className="container about-grid"><div><p className="eyebrow">OUR PURPOSE</p><h2>Technology should help bring health into focus.</h2><p>Yper’s mission, vision, values, leadership and company history are awaiting confirmation. The content on this page avoids attributing unverified claims or biographies.</p></div><div className="about-values">{[["People first", "Make the health experience more approachable."], ["Access matters", "Keep accessibility at the heart of the conversation."], ["Connected thinking", "Explore how technology can support health journeys."]].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><Icon kind={["heart", "people", "pulse"][index]} /></article>)}</div></div></section>
      )}
      <section className="info-contact section-pad"><div className="container info-contact-inner"><div><p className="eyebrow">NEXT STEP</p><h2>Let’s explore what’s possible.</h2><p>Share what you’re looking for and the Yper team can follow up once a submission service is configured.</p><a className="button button-light" href="/#demo">Book a Demo <span aria-hidden="true">→</span></a></div><div className="info-form"><DemoForm /></div></div></section>
    </main>
  );
}
