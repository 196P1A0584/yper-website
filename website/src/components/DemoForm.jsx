import { useState } from "react";

const initialForm = {
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
  demoStartDate: "",
  demoEndDate: "",
  message: "",
  privacyConsent: false,
  humanCheck: false,
};

export default function DemoForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const update = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    setStatus("");
  };

  const submit = async (event) => {
    event.preventDefault();
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      setStatus("Enter a phone number containing 7 to 15 digits.");
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
          Full Name *
          <input autoComplete="name" name="name" value={form.name} onChange={update} required />
        </label>
        <label>
          Email Address *
          <input autoComplete="email" name="email" type="email" value={form.email} onChange={update} required />
        </label>
        <label>
          Country Code *
          <input name="countryCode" type="tel" pattern={"\\+[0-9]{1,4}"} value={form.countryCode} onChange={update} placeholder="+91" required />
        </label>
        <label>
          Phone Number *
          <input
            autoComplete="tel-national"
            name="phone"
            type="tel"
            pattern={"[0-9\\s().-]{7,20}"}
            value={form.phone}
            onChange={update}
            aria-describedby="phone-help"
            required
          />
          {/* <span className="field-help" id="phone-help">Enter the number without the country code.</span> */}
        </label>
        <label>
          Organization Type *
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
          No. of Kiosks or Deployment Scale *
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
          City *
          <input autoComplete="address-level2" name="city" value={form.city} onChange={update} required />
        </label>
        <label>
          Pincode *
          <input autoComplete="postal-code" name="pincode" value={form.pincode} onChange={update} required />
        </label>
        <label>
          State *
          <input autoComplete="address-level1" name="state" value={form.state} onChange={update} required />
        </label>
        <label>
          Country *
          <input autoComplete="country-name" name="country" value={form.country} onChange={update} required />
        </label>
        <label>
          Demo Start Date *
          <input type="date" name="demoStartDate" value={form.demoStartDate} onChange={update} required />
        </label>
        <label>
          Demo End Date *
          <input type="date" name="demoEndDate" min={form.demoStartDate || undefined} value={form.demoEndDate} onChange={update} required />
        </label>
        <label className="form-full">
          Message
          <textarea name="message" rows="4" value={form.message} onChange={update} />
        </label>
        <div className="form-full form-checks">
          <label className="form-check">
            <input type="checkbox" name="privacyConsent" checked={form.privacyConsent} onChange={update} required />
            <span>I agree to the processing of this information as described in the <a href="https://www.yper.in/privacy" target="_blank" rel="noreferrer">privacy notice</a>.</span>
          </label>
          <label className="form-check">
            <input type="checkbox" name="humanCheck" checked={form.humanCheck} onChange={update} required />
            <span>I'm not a robot</span>
          </label>
        </div>
      </div>
      <div className="form-submit-row">
        <button className="button" type="submit" disabled={isLoading}>{isLoading ? "Checking…" : "Request a Demo"} {!isLoading && <span aria-hidden="true">→</span>}</button>
        {/* <p className="form-note">The form is a frontend preview and does not transmit or store information.</p> */}
      </div>
      {status && <p className={`form-status${status.startsWith("error:") ? " is-error" : ""}`} role="status">{status.replace(/^error: /, "")}</p>}
    </form>
  );
}
