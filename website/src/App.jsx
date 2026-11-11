import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import HealthAtmPage from "./pages/HealthAtmPage.jsx";
import InfoPages from "./pages/InfoPages.jsx";
import ReferencePage from "./pages/ReferencePage.jsx";

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
        <Route path="/products/health-atm" element={<HealthAtmPage />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/platform" element={<InfoPages page="platform" />} />
        <Route path="/health-initiative" element={<InfoPages page="initiative" />} />
        <Route path="/customers" element={<InfoPages page="customers" />} />
        <Route path="/about" element={<ReferencePage page="about" />} />
        <Route path="/about-us" element={<ReferencePage page="about" />} />
        <Route path="/team" element={<ReferencePage page="team" />} />
        <Route path="/why-yper" element={<ReferencePage page="why" />} />
        <Route path="/roadmap" element={<ReferencePage page="roadmap" />} />
        <Route path="/privacy" element={<ReferencePage page="privacy" />} />
        <Route path="/terms" element={<ReferencePage page="terms" />} />
        <Route path="/accessibility" element={<ReferencePage page="accessibility" />} />
        <Route path="/contact" element={<ReferencePage page="contact" />} />
        <Route path="/partners" element={<ReferencePage page="partners" />} />
        <Route path="/partners/hospitals-employers" element={<ReferencePage page="audiences" />} />
        <Route path="/partners/pilot-pricing" element={<ReferencePage page="pricing" />} />
        <Route path="/partners/host-a-carepod-pilot" element={<ReferencePage page="pilot" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
