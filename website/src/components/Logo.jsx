import { Link } from "react-router-dom";

export default function Logo({ onClick }) {
  return (
    <Link className="brand" to="/" aria-label="Yper home" onClick={onClick}>
      <img className="brand-logo" src="/yper-logo.png" alt="" />
      
    </Link>
  );
}
