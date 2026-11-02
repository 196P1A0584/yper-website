import { useState } from "react";
import { products } from "../data/products.js";

const initialForm = {
  name: "",
  email: "",
  organization: "",
  phone: "",
  product: "",
  message: "",
};

export default function DemoForm({ selectedProduct = "" }) {
  const [form, setForm] = useState({ ...initialForm, product: selectedProduct });
  const [status, setStatus] = useState("");

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setStatus("");
  };

  const submit = (event) => {
    event.preventDefault();
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      setStatus("Enter a phone number containing 7 to 15 digits.");
      return;
    }
    setStatus("This demo form is not connected yet. Your details have not been sent.");
  };

  return (
    <form className="demo-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Full Name <span aria-hidden="true">*</span>
          <input autoComplete="name" name="name" value={form.name} onChange={update} required />
        </label>
        <label>
          Work Email <span aria-hidden="true">*</span>
          <input autoComplete="email" name="email" type="email" value={form.email} onChange={update} required />
        </label>
        <label>
          Organization <span aria-hidden="true">*</span>
          <input autoComplete="organization" name="organization" value={form.organization} onChange={update} required />
        </label>
        <label>
          Phone Number <span aria-hidden="true">*</span>
          <input
            autoComplete="tel"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={update}
            aria-describedby="phone-help"
            required
          />
          <span className="field-help" id="phone-help">Include your country code if applicable.</span>
        </label>
        <label className="form-full">
          Product of Interest <span aria-hidden="true">*</span>
          <select name="product" value={form.product} onChange={update} required>
            <option value="">Select a product</option>
            {products.map((product) => (
              <option value={product.name} key={product.slug}>{product.name}</option>
            ))}
          </select>
        </label>
        <label className="form-full">
          Message
          <textarea name="message" rows="4" value={form.message} onChange={update} />
        </label>
      </div>
      <div className="form-submit-row">
        <button className="button" type="submit">Request a Demo <span aria-hidden="true">→</span></button>
        <p className="form-note">The form is a frontend preview and does not transmit or store information.</p>
      </div>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}
