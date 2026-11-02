import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import InfoPages from "./pages/InfoPages.jsx";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function NotFound() {
  return (
    <main className="not-found container">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>Let’s get your health journey back on track.</h1>
      <a className="button" href="/">Return home <span aria-hidden="true">→</span></a>
    </main>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/platform" element={<InfoPages page="platform" />} />
        <Route path="/health-initiative" element={<InfoPages page="initiative" />} />
        <Route path="/customers" element={<InfoPages page="customers" />} />
        <Route path="/about-us" element={<InfoPages page="about" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
