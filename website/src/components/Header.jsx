import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { products } from "../data/products.js";
import Logo from "./Logo.jsx";

const mainLinks = [
  { label: "Platform", to: "/platform" },
  { label: "Health Initiative", to: "/health-initiative" },
  { label: "Customers", to: "/customers" },
  { label: "About Us", to: "/about-us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const rootRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <header className="site-header" ref={rootRef}>
      <div className="header-inner container">
        <Logo onClick={closeMenus} />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`primary-nav${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <div
            className="products-menu"
            onMouseEnter={() => window.matchMedia("(min-width: 900px)").matches && setProductsOpen(true)}
            onMouseLeave={() => window.matchMedia("(min-width: 900px)").matches && setProductsOpen(false)}
          >
            <button
              className="nav-link products-trigger"
              type="button"
              aria-expanded={productsOpen}
              aria-controls="products-dropdown"
              onClick={() => setProductsOpen((open) => !open)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setProductsOpen(true);
                  rootRef.current?.querySelector(".products-dropdown a")?.focus();
                }
              }}
            >
              Products <span className="chevron" aria-hidden="true">⌄</span>
            </button>
            <div
              className={`products-dropdown${productsOpen ? " is-open" : ""}`}
              id="products-dropdown"
              aria-hidden={!productsOpen}
            >
              {products.map((product) => (
                <Link
                  key={product.slug}
                  to={`/products/${product.slug}`}
                  tabIndex={productsOpen ? 0 : -1}
                  onClick={closeMenus}
                >
                  <strong>{product.name}</strong>
                  <span>{product.description}</span>
                </Link>
              ))}
            </div>
          </div>
          {mainLinks.map((item) => (
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              key={item.to}
              to={item.to}
              onClick={closeMenus}
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="button button-small header-cta" to="/#demo" onClick={closeMenus}>
            Book a Demo <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
