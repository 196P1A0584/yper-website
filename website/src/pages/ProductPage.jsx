import { Link, useParams } from "react-router-dom";
import DemoForm from "../components/DemoForm.jsx";
import { AbstractVisual, Icon } from "../components/Visuals.jsx";
import { products } from "../data/products.js";

const sectionTitles = [
  ["overview", "Overview"],
  ["key-features", "Key Features"],
  ["security-compliance", "Security & Compliance"],
  ["tech-specs", "Tech Specs"],
  ["pricing", "Pricing"],
  ["solutions", "Solutions"],
  ["features", "Features"],
  ["why-us", "Why Yper"],
];

function ProductSection({ id, title, index, product }) {
  const note = product.description;
  if (id === "overview") {
    return (
      <section className={`product-detail product-overview detail-${index}`} id={id}>
        <div className="product-overview-copy">
          <p className="eyebrow">{product.name} · PRODUCT OVERVIEW</p>
          <h1>{product.name}<br /><em>{note}</em></h1>
          <p>Yper’s {product.name} is part of the Yper healthcare technology suite. A detailed product overview and confirmed capabilities will be added when approved by Yper.</p>
          <a className="button" href="#book-demo">Discuss this product <span aria-hidden="true">→</span></a>
        </div>
        <div className="product-overview-visual"><AbstractVisual variant="detail-visual" /><div className="overview-product-mark"><span>Y</span><strong>{product.name}</strong><small>Bring Your Health Into Focus.</small></div></div>
      </section>
    );
  }
  if (id === "key-features" || id === "features") {
    const items = id === "key-features"
      ? ["Product capabilities", "Who it is designed for", "How it fits the Yper suite"]
      : ["Product workflows", "Available integrations", "Deployment and support"];
    return (
      <section className={`product-detail detail-${index}`} id={id}>
        <div className="detail-heading"><p className="eyebrow">{product.name}</p><h2>{title}</h2><p>Specific {product.name} {id === "features" ? "features" : "capabilities"} have not yet been confirmed for publication.</p></div>
        <div className="feature-grid">{items.map((item, i) => <article className="feature-tile" key={item}><Icon kind={["heart", "people", "check"][i]} /><span>0{i + 1}</span><h3>{item}</h3><p>Details require confirmation from Yper.</p></article>)}</div>
      </section>
    );
  }
  if (id === "security-compliance" || id === "tech-specs" || id === "pricing") {
    const messages = {
      "security-compliance": "Security, privacy, certification and regulatory information is awaiting confirmation. No compliance certification is claimed.",
      "tech-specs": "Supported devices, technical requirements, integrations and deployment options require confirmation.",
      pricing: "Pricing has not been provided. Contact Yper to discuss availability and a quote when contact details are confirmed.",
    };
    return (
      <section className={`product-detail detail-${index} detail-callout`} id={id}>
        <div className="detail-callout-icon"><Icon kind={id === "security-compliance" ? "shield" : id === "pricing" ? "check" : "pulse"} /></div>
        <div><p className="eyebrow">{product.name}</p><h2>{title}</h2><p>{messages[id]}</p></div>
        {id === "pricing" && <a className="text-link" href="#book-demo">Request information <span aria-hidden="true">→</span></a>}
      </section>
    );
  }
  if (id === "solutions") {
    return (
      <section className={`product-detail detail-${index} solutions-detail`} id={id}>
        <div><p className="eyebrow">A YPER PRODUCT</p><h2>Designed around better access.</h2><p>Intended audiences and use cases for {product.name} need confirmation. Connect with Yper to learn more about the product’s fit for your organization.</p><a className="text-link" href="#book-demo">Explore with Yper <span aria-hidden="true">→</span></a></div>
        <AbstractVisual variant="solutions-visual" />
      </section>
    );
  }
  return (
    <section className={`product-detail detail-${index} why-product`} id={id}>
      <p className="eyebrow">WHY YPER</p><h2>Health technology with people in focus.</h2><p>Learn about Yper’s approach and confirmed product differentiators as information becomes available.</p>
      <Link to="/about-us" className="button">Discover Yper <span aria-hidden="true">→</span></Link>
    </section>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    return <main className="not-found container"><p className="eyebrow">PRODUCT NOT FOUND</p><h1>Explore the Yper product suite.</h1><Link className="button" to="/#products">View products <span aria-hidden="true">→</span></Link></main>;
  }
  return (
    <main className="product-page">
      <div className="product-subnav"><div className="container product-subnav-inner"><strong>{product.name}</strong><nav aria-label={`${product.name} sections`}>{sectionTitles.map(([id, title]) => <a href={`#${id}`} key={id}>{title}</a>)}<a href="#book-demo">Book a Demo</a><a href="#call-us">Call Us</a></nav></div></div>
      <div className="container product-content">
        {sectionTitles.map(([id, title], index) => <ProductSection id={id} title={title} index={index} product={product} key={id} />)}
        <section className="product-detail demo-detail" id="book-demo">
          <div className="detail-heading"><p className="eyebrow">LET’S TALK</p><h2>Book a {product.name} demo</h2><p>Tell us a little about what you need. This form is not connected to a submission service.</p></div>
          <DemoForm selectedProduct={product.name} />
        </section>
        <section className="product-detail call-detail" id="call-us">
          <Icon kind="pulse" /><div><p className="eyebrow">CALL US</p><h2>We’d be glad to connect.</h2><p>Yper’s verified phone number is not available yet. Contact details require confirmation.</p></div>
          <span className="confirmation-badge">PHONE NUMBER TO CONFIRM</span>
        </section>
      </div>
    </main>
  );
}
