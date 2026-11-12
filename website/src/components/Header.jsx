import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { products } from "../data/products.js";
import Logo from "./Logo.jsx";
import { Icon } from "./Visuals.jsx";

const mainLinks = [
  { label: "Platform", to: "/platform" },
  { label: "Health Initiative", to: "/health-initiative" },
  { label: "Customers", to: "/customers" },
  { label: "About Us", to: "/about" },
];

const productIcons = {
  scribe: "pulse",
  clinic: "building",
  hospital: "building",
  hub: "pulse",
  care: "heart",
  atm: "check",
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("yper-theme") === "dark");
  const rootRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    localStorage.setItem("yper-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

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
              Products
              <svg className="chevron" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                <path d="m5 7.5 5 5 5-5" />
              </svg>
            </button>
            <div
              className={`products-dropdown${productsOpen ? " is-open" : ""}`}
              id="products-dropdown"
              aria-hidden={!productsOpen}
            >
              <div className="products-dropdown-heading">
                <p className="eyebrow">THE YPER SUITE</p>
                <span>Explore connected health products</span>
              </div>
              <div className="products-dropdown-grid">
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    to={`/products/${product.slug}`}
                    tabIndex={productsOpen ? 0 : -1}
                    onClick={closeMenus}
                  >
                    <Icon className="product-menu-icon" kind={productIcons[product.visual]} />
                    <span className="product-menu-copy">
                      <small>{product.audience}</small>
                      <strong>{product.name}</strong>
                      <span>{product.description}</span>
                    </span>
                    <svg className="product-menu-arrow" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                      <path d="M4 10h11m-4-4 4 4-4 4" />
                    </svg>
                  </Link>
                ))}
              </div>
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
          <button
            className="theme-toggle"
            type="button"
            role="switch"
            aria-checked={darkMode}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            title={`Switch to ${darkMode ? "light" : "dark"} mode`}
            onClick={() => setDarkMode((enabled) => !enabled)}
          >
            <span className="theme-toggle-track" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                {darkMode ? (
                  <path d="M20.2 15.1A8.2 8.2 0 0 1 8.9 3.8 8.3 8.3 0 1 0 20.2 15.1Z" />
                ) : (
                  <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>
                )}
              </svg>
              <span className="theme-toggle-thumb" />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
