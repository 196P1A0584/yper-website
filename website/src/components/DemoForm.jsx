import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const productOptions = [
  "YperScribe",
  "YperMD",
  "YperHIS",
  "YperHealthHub",
  "YperCare",
  "Health ATM",
  "YPER CarePod",
  "YPER CarePod Wall",
  "YPER Kit",
];

const createInitialForm = (product = "") => ({
  name: "",
  email: "",
  countryCode: "+91",
  phone: "",
  organizationType: "",
  deploymentScale: "",
  city: "",
  pincode: "",
  state: "",
  country: "",
  product,
  demoStartDate: "",
  demoEndDate: "",
  message: "",
  privacyConsent: false,
  humanCheck: false,
});

const formatDate = (date) => [
  date.getFullYear(),
  String(date.getMonth() + 1).padStart(2, "0"),
  String(date.getDate()).padStart(2, "0"),
].join("-");

export default function DemoForm({ selectedProduct = "" }) {
  const [form, setForm] = useState(() => createInitialForm(selectedProduct));
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const today = new Date();
  const minDemoDate = formatDate(today);
  const maxDemoDate = `${today.getFullYear() + 1}-12-31`;

  useEffect(() => {
    if (selectedProduct) {
      setForm((current) => ({ ...current, product: selectedProduct }));
    }
  }, [selectedProduct]);

  const update = (event) => {
    const { name, value, type, checked } = event.target;
    const updatedValue = name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : updatedValue }));
    setStatus("");
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!/^\d{10}$/.test(form.phone)) {
      setStatus("Enter a phone number containing exactly 10 digits.");
      return;
    }
    if (!form.email.includes("@")) {
      setStatus("Enter an email address containing @.");
      return;
    }
    if (form.demoEndDate < form.demoStartDate) {
      setStatus("The demo end date must be on or after the start date.");
      return;
    }
    setIsLoading(true);
    setStatus("");
    await new Promise((resolve) => window.setTimeout(resolve, 350));
    setIsLoading(false);
    setStatus("error: This demo form is not connected yet. Your details have not been sent.");
  };

  return (
    <form className="demo-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          <span className="field-label">Full Name <span className="required-indicator">*</span></span>
          <input autoComplete="name" name="name" value={form.name} onChange={update} required />
        </label>
        <label>
          <span className="field-label">Email Address <span className="required-indicator">*</span></span>
          <input autoComplete="email" name="email" type="email" pattern={"[^@\\s]+@[^@\\s]+"} value={form.email} onChange={update} required />
        </label>
        <label>
          <span className="field-label">Country Code <span className="required-indicator">*</span></span>
          <input name="countryCode" type="tel" pattern={"\\+[0-9]{1,4}"} value={form.countryCode} onChange={update} placeholder="+91" required />
        </label>
        <label>
          <span className="field-label">Phone Number <span className="required-indicator">*</span></span>
          <input
            autoComplete="tel-national"
            name="phone"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            value={form.phone}
            onChange={update}
            aria-describedby="phone-help"
            required
          />
          
        </label>
        <label>
          <span className="field-label">Organization Type <span className="required-indicator">*</span></span>
          <select autoComplete="organization" name="organizationType" value={form.organizationType} onChange={update} required>
            <option value="">Select organization type</option>
            <option>Hospital or health system</option>
            <option>Clinic</option>
            <option>Diagnostic laboratory</option>
            <option>Public health program</option>
            <option>Employer or campus health</option>
            <option>Pharmacy or community health</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          <span className="field-label">No. of Kiosks or Deployment Scale <span className="required-indicator">*</span></span>
          <select name="deploymentScale" value={form.deploymentScale} onChange={update} required>
            <option value="">Select deployment scale</option>
            <option>Pilot - 1 kiosk</option>
            <option>Small deployment - 2 to 10</option>
            <option>Regional - 11 to 50</option>
            <option>Enterprise - 51 or more</option>
            <option>Not yet determined</option>
          </select>
        </label>
        <label>
          <span className="field-label">City <span className="required-indicator">*</span></span>
          <input autoComplete="address-level2" name="city" value={form.city} onChange={update} required />
        </label>
        <label>
          <span className="field-label">Pincode <span className="required-indicator">*</span></span>
          <input autoComplete="postal-code" name="pincode" value={form.pincode} onChange={update} required />
        </label>
        <label>
          <span className="field-label">State <span className="required-indicator">*</span></span>
          <input autoComplete="address-level1" name="state" value={form.state} onChange={update} required />
        </label>
        <label>
          <span className="field-label">Country <span className="required-indicator">*</span></span>
          <input autoComplete="country-name" name="country" value={form.country} onChange={update} required />
        </label>
        <label className="form-full">
          <span className="field-label">Product of Interest <span className="required-indicator">*</span></span>
          <select name="product" value={form.product} onChange={update} required>
            <option value="">Select a product</option>
            {productOptions.map((product) => <option key={product}>{product}</option>)}
          </select>
        </label>
        <label>
          <span className="field-label">Demo Start Date <span className="required-indicator">*</span></span>
          <input type="date" name="demoStartDate" min={minDemoDate} max={maxDemoDate} value={form.demoStartDate} onChange={update} required />
        </label>
        <label>
          <span className="field-label">Demo End Date <span className="required-indicator">*</span></span>
          <input type="date" name="demoEndDate" min={form.demoStartDate || minDemoDate} max={maxDemoDate} value={form.demoEndDate} onChange={update} required />
        </label>
        <label className="form-full">
          Message
          <textarea name="message" rows="4" value={form.message} onChange={update} aria-describedby="message-help" />
          <span className="field-help" id="message-help">Do not include patient health information.</span>
        </label>
        <div className="form-full form-checks">
          <label className="form-check">
            <input type="checkbox" name="privacyConsent" checked={form.privacyConsent} onChange={update} required />
            <span>I agree to the processing of this information as described in the <Link to="/privacy">privacy notice</Link>.</span>
          </label>
          <label className="form-check">
            <input type="checkbox" name="humanCheck" checked={form.humanCheck} onChange={update} required />
            <span>I'm not a robot</span>
          </label>
        </div>
      </div>
      <div className="form-submit-row">
        <button className="button" type="submit" disabled={isLoading}>{isLoading ? "Checking…" : "Request a Demo"} {!isLoading && <span aria-hidden="true">→</span>}</button>
        <p className="form-note">This preview does not send or store information. Do not include patient health information.</p>
      </div>
      {status && <p className={`form-status${status.startsWith("error:") ? " is-error" : ""}`} role="status">{status.replace(/^error: /, "")}</p>}
    </form>
  );
}
