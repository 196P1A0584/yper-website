import { Link } from "react-router-dom";

export default function Logo({ onClick }) {
  return (
    <Link className="brand" to="/" aria-label="Yper home" onClick={onClick}>
      <img className="brand-logo" src={`${import.meta.env.BASE_URL}yper-logo.png`} alt="" />
      
    </Link>
  );
}
