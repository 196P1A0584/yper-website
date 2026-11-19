import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";

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

const organizationTypeOptions = [
  "Hospital or health system",
  "Clinic",
  "Diagnostic laboratory",
  "Public health program",
  "Employer or campus health",
  "Pharmacy or community health",
  "Other",
].map((label) => ({ value: label, label }));

const deploymentScaleOptions = [
  "Pilot - 1 kiosk",
  "Small deployment - 2 to 10",
  "Regional - 11 to 50",
  "Enterprise - 51 or more",
  "Not yet determined",
].map((label) => ({ value: label, label }));

const productSelectOptions = productOptions.map((product) => ({ value: product, label: product }));
const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
const countryCodeOptions = getCountries()
  .map((region) => {
    const name = regionNames.of(region) || region;
    const callingCode = `+${getCountryCallingCode(region)}`;
    return {
      value: region,
      label: name,
      detail: callingCode,
      searchText: `${name} ${callingCode} ${region}`,
      callingCode,
    };
  })
  .sort((a, b) => a.label.localeCompare(b.label));

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

function CustomSelect({
  name,
  labelId,
  value,
  submittedValue = value,
  options,
  placeholder,
  onChange,
  required = false,
  searchable = false,
  searchPlaceholder,
  invalid = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const searchRef = useRef(null);
  const optionRefs = useRef([]);
  const selectedOption = options.find((option) => option.value === value);
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const visibleOptions = searchable && normalizedQuery
    ? options.filter((option) => `${option.label} ${option.detail || ""} ${option.searchText || ""}`.toLocaleLowerCase().includes(normalizedQuery))
    : options;

  const closeMenu = (restoreFocus = false) => {
    setIsOpen(false);
    setQuery("");
    if (restoreFocus) {
      requestAnimationFrame(() => triggerRef.current?.focus());
    }
  };

  const openMenu = () => {
    const selectedIndex = options.findIndex((option) => option.value === value);
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    setQuery("");
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;
    if (searchable) {
      searchRef.current?.focus();
    } else {
      requestAnimationFrame(() => optionRefs.current[activeIndex]?.focus());
    }
  }, [isOpen, searchable]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnOutsideClick = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [isOpen]);

  const focusOption = (index) => {
    if (!visibleOptions.length) return;
    const nextIndex = (index + visibleOptions.length) % visibleOptions.length;
    setActiveIndex(nextIndex);
    requestAnimationFrame(() => optionRefs.current[nextIndex]?.focus());
  };

  const selectOption = (option) => {
    onChange(option);
    closeMenu(true);
  };

  const handleTriggerKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!isOpen) openMenu();
      else focusOption(activeIndex + (event.key === "ArrowDown" ? 1 : -1));
    }
    if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      closeMenu(true);
    }
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      focusOption(activeIndex + (event.key === "ArrowDown" ? 1 : -1));
    } else if (event.key === "Enter" && visibleOptions.length) {
      event.preventDefault();
      selectOption(visibleOptions[activeIndex] || visibleOptions[0]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
    }
  };

  const handleOptionKeyDown = (event, index) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      focusOption(index + (event.key === "ArrowDown" ? 1 : -1));
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      focusOption(event.key === "Home" ? 0 : visibleOptions.length - 1);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectOption(visibleOptions[index]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
    }
  };

  return (
    <div
      className={`custom-select${isOpen ? " is-open" : ""}`}
      ref={containerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
      }}
    >
      <input type="hidden" name={name} value={submittedValue} />
      <button
        className="custom-select-trigger"
        id={`${name}-trigger`}
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${name}-listbox`}
        aria-labelledby={labelId}
        aria-required={required}
        aria-invalid={invalid || undefined}
        onClick={() => (isOpen ? closeMenu() : openMenu())}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className={`custom-select-value${selectedOption ? "" : " is-placeholder"}`}>
          {selectedOption?.label || placeholder}
        </span>
        {selectedOption?.detail && <span className="custom-select-value-detail">{selectedOption.detail}</span>}
        <svg className="custom-select-chevron" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          <path d="m5 7.5 5 5 5-5" />
        </svg>
      </button>
      <div className="custom-select-menu" hidden={!isOpen}>
        {searchable && (
          <input
            className="custom-select-search"
            ref={searchRef}
            type="search"
            value={query}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            aria-controls={`${name}-listbox`}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleSearchKeyDown}
          />
        )}
        <div className="custom-select-options" id={`${name}-listbox`} role="listbox" aria-labelledby={labelId}>
          {visibleOptions.length ? visibleOptions.map((option, index) => (
            <div
              className={`custom-select-option${activeIndex === index ? " is-active" : ""}`}
              id={`${name}-option-${index}`}
              key={option.value}
              ref={(element) => { optionRefs.current[index] = element; }}
              role="option"
              aria-selected={value === option.value}
              tabIndex={activeIndex === index ? 0 : -1}
              onFocus={() => setActiveIndex(index)}
              onClick={() => selectOption(option)}
              onKeyDown={(event) => handleOptionKeyDown(event, index)}
            >
              <span className="custom-select-option-label">{option.label}</span>
              {option.detail && <span className="custom-select-option-detail">{option.detail}</span>}
              {value === option.value && <span className="custom-select-option-check" aria-hidden="true">✓</span>}
            </div>
          )) : <p className="custom-select-empty">No matching countries.</p>}
        </div>
      </div>
    </div>
  );
}

export default function DemoForm({ selectedProduct = "" }) {
  const [form, setForm] = useState(() => createInitialForm(selectedProduct));
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countryRegion, setCountryRegion] = useState("IN");
  const [invalidDropdown, setInvalidDropdown] = useState("");
  const today = new Date();
  const minDemoDate = formatDate(today);
  const maxDemoDate = `${today.getFullYear() + 1}-12-31`;

  useEffect(() => {
    if (selectedProduct) {
      setForm((current) => ({ ...current, product: selectedProduct }));
    }
  }, [selectedProduct]);

  const updateField = (name, value) => {
    setForm((current) => ({ ...current, [name]: value }));
    setStatus("");
    if (name === invalidDropdown) setInvalidDropdown("");
  };

  const update = (event) => {
    const { name, value, type, checked } = event.target;
    const updatedValue = type === "checkbox"
      ? checked
      : name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;
    updateField(name, updatedValue);
  };

  const submit = async (event) => {
    event.preventDefault();
    const missingDropdown = [
      ["countryCode", "a country code"],
      ["organizationType", "an organization type"],
      ["deploymentScale", "a deployment scale"],
      ["product", "a product of interest"],
    ].find(([name]) => !form[name]);
    if (missingDropdown) {
      const [name, description] = missingDropdown;
      setInvalidDropdown(name);
      setStatus(`Select ${description} to continue.`);
      document.getElementById(`${name}-trigger`)?.focus();
      return;
    }
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
          <span className="field-label" id="countryCode-label">Country Code <span className="required-indicator">*</span></span>
          <CustomSelect
            name="countryCode"
            labelId="countryCode-label"
            value={countryRegion}
            submittedValue={form.countryCode}
            options={countryCodeOptions}
            placeholder="Select a country code"
            searchPlaceholder="Search countries or codes"
            onChange={(option) => {
              setCountryRegion(option.value);
              updateField("countryCode", option.callingCode);
            }}
            required
            searchable
            invalid={invalidDropdown === "countryCode"}
          />
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
          <span className="field-label" id="organizationType-label">Organization Type <span className="required-indicator">*</span></span>
          <CustomSelect
            name="organizationType"
            labelId="organizationType-label"
            value={form.organizationType}
            options={organizationTypeOptions}
            placeholder="Select organization type"
            onChange={(option) => updateField("organizationType", option.value)}
            required
            invalid={invalidDropdown === "organizationType"}
          />
        </label>
        <label>
          <span className="field-label" id="deploymentScale-label">No. of Kiosks or Deployment Scale <span className="required-indicator">*</span></span>
          <CustomSelect
            name="deploymentScale"
            labelId="deploymentScale-label"
            value={form.deploymentScale}
            options={deploymentScaleOptions}
            placeholder="Select deployment scale"
            onChange={(option) => updateField("deploymentScale", option.value)}
            required
            invalid={invalidDropdown === "deploymentScale"}
          />
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
          <span className="field-label" id="product-label">Product of Interest <span className="required-indicator">*</span></span>
          <CustomSelect
            name="product"
            labelId="product-label"
            value={form.product}
            options={productSelectOptions}
            placeholder="Select a product"
            onChange={(option) => updateField("product", option.value)}
            required
            invalid={invalidDropdown === "product"}
          />
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
