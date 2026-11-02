import { Link } from "react-router-dom";
import { products } from "../data/products.js";
import Logo from "./Logo.jsx";

const companyLinks = [
  ["Platform", "/platform"],
  ["Health Initiative", "/health-initiative"],
  ["Customers", "/customers"],
  ["About Us", "/about-us"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Logo />
          <p>Accessible health screening and connected technology, with your health in focus.</p>
        </div>
        <div>
          <h2>Explore</h2>
          {companyLinks.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}
        </div>
        <div>
          <h2>Products</h2>
          {products.map((product) => (
            <Link key={product.slug} to={`/products/${product.slug}`}>{product.name}</Link>
          ))}
        </div>
        <div className="footer-contact">
          <h2>Get in touch</h2>
          <p>Contact details will be added when confirmed by Yper.</p>
          <Link to="/#demo" className="footer-cta">Book a Demo <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Yper</span>
        <span>Bring Your Health Into Focus.</span>
      </div>
    </footer>
  );
}
