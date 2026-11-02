import { Link } from "react-router-dom";

export default function Logo({ onClick }) {
  return (
    <Link className="brand" to="/" aria-label="Yper home" onClick={onClick}>
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="brand-name">YPER</span>
      <span className="brand-tagline">Bring Your Health Into Focus.</span>
    </Link>
  );
}
