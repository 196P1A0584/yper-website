import { Link } from "react-router-dom";
import DemoForm from "../components/DemoForm.jsx";
import { AbstractVisual } from "../components/Visuals.jsx";

const leaders = [
  {
    name: "Dr. Abhay Chopada",
    role: "FOUNDER & CHAIRMAN, YPER",
    image: "https://www.yper.in/_next/image?url=%2Fimages%2Fdr-abhay-chopada.jpg&w=640&q=75",
    alt: "Dr. Abhay Chopada, Founder and Chairman of YPER.",
    copy: "Dr. Abhay Chopada is a consultant surgeon, healthcare executive, and health-tech entrepreneur with over 30 years of experience. He is passionate about advancing accessible, connected, and technology-driven healthcare for everyone.",
  },
  {
    name: "Sri",
    role: "FOUNDER & MANAGING DIRECTOR, YPER",
    image: "https://www.yper.in/_next/image?url=%2Fimages%2Fyper%2Ffounder.webp&w=640&q=75",
    alt: "Sri, Founder and Managing Director of YPER.",
    copy: "Sri leads YPER’s vision of transforming healthcare accessibility through intelligent technology and connected diagnostics. His entrepreneurial interests span healthcare, education, cybersecurity, and artificial intelligence.",
  },
];

const contentPages = {
  about: {
    label: "ABOUT YPER",
    title: "Smarter Access to Healthcare.",
    intro: "YPER is a healthcare technology company working on guided screening and connected care, so a clearer next step can happen closer to where people already are.",
    sections: [
      {
        title: "Why YPER exists",
        cards: [
          ["The mission", "Make a first health check simpler to reach, and make the next step easier to see, without asking people to piece together separate devices and appointments."],
          ["The access problem", "Basic measurements and a conversation with a clinician are still hard to reach in many workplaces, neighbourhoods, and smaller clinics. People often move between counters before anyone has a clear picture."],
          ["The approach", "A Health ATM can collect the measurements a site chooses to offer, present them through a secure interface, and connect a person with a clinician when that pathway is configured. The device does not make the diagnosis."],
        ],
      },
      { title: "Meet Our Leadership", intro: "Building the Future of Accessible, Intelligent Healthcare.", people: true, id: "team" },
      {
        title: "Questions we hear first",
        intro: "If a detail depends on a deployment, the answer says so. Clinical, pricing, and certification claims are published only when YPER has confirmed them.",
        faqs: [["Does a Health ATM visit diagnose a condition?", "No. Measurements and test outputs are screening information for review. YPER does not independently diagnose, treat, or prescribe. A qualified clinician interprets results when a care pathway is configured."]],
      },
    ],
    action: ["Talk with the YPER team", "/contact"],
  },
  why: {
    label: "WHY YPER",
    title: "Trusted. Secure. Connected.",
    intro: "YPER is designed so screening, privacy, and a clinician’s next step can work together. The controls below describe the approach. Exact certifications and integrations are stated only when they are confirmed.",
    sections: [
      {
        title: "The YPER difference",
        cards: [
          ["Accurate & Reliable", "A visit uses the measurement devices included in that configuration. Results are recorded for review. YPER does not claim a clinical validation on this page unless a credential has been verified and published."],
          ["Your Data, Your Privacy", "Health information should be collected for a defined purpose, with consent, and kept according to the rules that apply to the deployment. Marketing forms on this website do not accept patient records."],
          ["Connected Care", "Measurements, consultation summaries, and reminders can stay with the connected record when those systems are part of the implementation. Follow-up remains the care team’s responsibility."],
          ["Designed for Everyone", "The guided flow is meant to be clear for people of different ages and settings. Language, accessibility, and on-site support are confirmed for each deployment."],
        ],
      },
      {
        title: "Your Health Data. Protected by Design.",
        intro: "Security, privacy, and responsible AI are essential to connected healthcare. YPER is designed around controlled access, secure integrations, and transparent data governance.",
        cards: [
          ["Data Privacy and Consent", "Designed with privacy in mind. Collection and use of health information should follow consent, a defined purpose, and the regulations that apply to each deployment."],
          ["Role-Based Access Control", "Access can be limited by role so people see the information required for their work. Roles are defined with the organization."],
          ["Encryption in Transit and at Rest", "The platform is designed to protect information while it moves and while it is stored. Specific cryptographic controls depend on the deployment."],
          ["Audit Logging", "Administrative and clinical access can be recorded to support review. What is logged, and how long it is kept, follows organizational policy."],
          ["Secure System Integrations", "Connections to record systems, laboratories, and devices should use authenticated interfaces approved by the organization."],
          ["AI Governance and Human Oversight", "AI features are intended to assist clinicians and operators. They do not replace professional medical judgment, and their use should remain reviewable."],
          ["Deployment and Infrastructure Security", "Cloud or on-premise deployment can be discussed according to organizational policy. The available model depends on the implementation."],
        ],
      },
      {
        title: "Healthcare Intelligence. In Motion.",
        cards: [
          ["Identify", "A person starts a guided visit using the workflow the organization has enabled."],
          ["Assess", "Supported devices can capture the measurements included in that configuration."],
          ["Connect", "The visit can be shared with a qualified professional when that pathway is configured."],
          ["Follow Up", "Summaries and reminders can remain with the connected record for the care team."],
        ],
      },
    ],
    action: ["Contact sales", "/contact"],
  },
  partners: {
    label: "FOR PARTNERS",
    title: "Bring Specialist Care to Where Your People Are.",
    intro: "Hospitals, employers, pharmacies, clinics, and public programmes can use a YPER Health ATM as a configurable first step. Specialist access, integrations, and pricing are confirmed for each pilot.",
    sections: [
      {
        title: "Specialist care where people already are.",
        cards: [
          ["Hospitals", "Reach patients in towns and neighbourhoods without opening a new clinic."],
          ["Employers", "Regular health checks and doctor access at the workplace."],
          ["Pharmacies and clinics", "Add screening and specialist consults to the counter."],
          ["Government and CSR", "Screening and referrals for underserved communities, with records that follow up."],
        ],
      },
      {
        title: "What a partnership is designed to cover",
        cards: [
          ["A screening point without a new clinic", "A pod, wall unit, or kit can sit where people already are. The hardware mix is chosen for the site."],
          ["A path to a clinician, when configured", "A consultation is available only when a qualified clinician and a telemedicine or local workflow are enabled. No specialist network is connected by default."],
          ["Records the organisation agrees to share", "Results can be sent to a participating record system when that interface has been agreed and tested."],
          ["Training and support in the proposal", "Operator training, maintenance, and support are discussed with the deployment. They are not a published service level on this page."],
          ["Reporting you define", "What is reported, to whom, and how often follows the organisation’s policy and the systems that are connected."],
          ["Privacy built around consent", "Access can be limited by role. Consent wording, retention, and purposes are set with each organisation."],
        ],
      },
    ],
    action: ["Host a CarePod Pilot", "/partners/host-a-carepod-pilot"],
  },
  audiences: {
    label: "HOSPITALS AND EMPLOYERS",
    title: "Specialist care where people already are.",
    intro: "Hospitals, employers, pharmacies, and public programmes can explore a configurable screening and care pathway for their setting.",
    sections: [{
      title: "Who YPER works with",
      cards: [
        ["Hospitals", "Reach patients in towns and neighbourhoods without opening a new clinic."],
        ["Employers", "Regular health checks and doctor access at the workplace."],
        ["Pharmacies and clinics", "Add screening and specialist consults to the counter."],
        ["Government and CSR", "Screening and referrals for underserved communities, with records that follow up."],
      ],
    }, {
      title: "A partnership is designed around the site",
      paragraphs: ["A pod, wall unit, or kit can sit where people already are. The hardware mix is chosen for the site.", "A consultation is available only when a qualified clinician and a telemedicine or local workflow are enabled. No specialist network is connected by default.", "Results can be sent to a participating record system when that interface has been agreed and tested."],
    }],
    action: ["Explore partner options", "/partners"],
  },
  pricing: {
    label: "PILOT AND PRICING",
    title: "Healthcare Infrastructure Designed Around Your Needs.",
    intro: "Pricing may depend on the hardware, devices, software, telemedicine, scale, support, and integrations a deployment requires. YPER does not publish a standard price.",
    sections: [{
      title: "Custom Pricing",
      intro: "A proposal can consider the configuration and support a deployment requires.",
      list: ["Kiosk hardware configuration", "Diagnostic device integrations", "Software modules", "Telemedicine integration", "Deployment scale", "Maintenance and support", "Integration requirements"],
    }, {
      title: "What a conversation can cover",
      cards: [
        ["Platform walkthrough", "Review the kiosk experience and the workflows that can be configured."],
        ["Your care setting", "Discuss the sites, devices, and clinical pathways you want to support."],
        ["Questions, answered directly", "Ask about integration, privacy, support, and what is included in a proposal."],
      ],
    }],
    action: ["Request a Quote", "/partners/host-a-carepod-pilot"],
  },
};

const legalPages = {
  privacy: {
    label: "LEGAL",
    title: "Privacy Policy",
    intro: "Last updated 20 October 2026. This notice should be reviewed by counsel before it is relied on. This notice describes the YPER website. It is not a complete privacy policy for a deployed health kiosk. A deployment that handles patient information needs its own notice, based on the systems and regulations that apply there.",
    sections: [
      ["Information this form collects", "The Book a Demo form asks for your name, organization, work email, phone number, organization type, deployment scale, country, an optional message, and your consent. It also stores a submission identifier so the same request is not delivered twice."],
      ["How a request is delivered", "A request is sent only when the website operator has configured a delivery webhook or an email service. If neither is configured, the form says the request was not sent. Credentials for that service stay on the server.", "When delivery is configured, the information is sent to the destination the operator configured, so YPER can respond about a demonstration, quote, or sales conversation."],
      ["What this website does not do", "This marketing website is not the clinical record system. Do not submit patient information or health records through the demonstration form."],
      ["Contact", "Privacy questions can be sent to contact@yper.in."],
    ],
    // note: "On this local website, the demo form is a frontend preview and does not transmit or store information.",
  },
  terms: {
    label: "LEGAL",
    title: "Terms and Conditions",
    intro: "Last updated 20 October 2026. This notice should be reviewed by counsel before it is relied on. These terms cover use of the YPER website. They do not describe a clinical service agreement. A deployment is governed by the contract agreed with the organization.",
    sections: [
      ["The website", "Content on this website describes capabilities that may be configured. It is not a promise that every device, test, integration, or language is included."],
      ["No medical advice", "Nothing on this website is medical advice, a diagnosis, or an invitation to delay emergency care. AI features described here are preliminary assistance for configured workflows and do not replace a qualified clinician."],
      ["Demonstrations and pricing", "Submitting the form asks for a conversation. It does not create an order. Pricing is custom and is confirmed in a proposal. If lead delivery is not configured, the request is not sent."],
      ["Acceptable use", "Do not misuse the form, attempt to access non-public systems, or submit information you are not allowed to share. Patient information does not belong in this form."],
    ],
  },
  accessibility: {
    label: "LEGAL",
    title: "Accessibility",
    intro: "Last updated 20 October 2026. This notice should be reviewed by counsel before it is relied on.",
    sections: [
      ["Our approach", "YPER intends this website to be usable with a keyboard, a screen reader, and at common desktop, tablet, and phone sizes. Controls expose names, focus is visible, and motion is reduced when the operating system requests it."],
      ["Known limits", "Concept images include descriptive alternative text. Some product visuals are decorative illustrations of interfaces. The kiosk software itself has separate accessibility requirements that depend on the release deployed."],
      ["Feedback", "If you have trouble using this website, email contact@yper.in and describe the page and the barrier you found."],
    ],
  },
};

function PageHero({ label, title, intro, action }) {
  return (
    <section className="reference-hero">
      <div className="container reference-hero-inner">
        <div>
          <p className="eyebrow">{label}</p>
          <h1>{title}</h1>
          <p className="reference-hero-copy">{intro}</p>
          {action && <div className="reference-hero-actions"><Link className="button" to={action[1]}>{action[0]} <span aria-hidden="true">→</span></Link></div>}
        </div>
        <div className="reference-hero-art"><AbstractVisual variant="reference-visual" /></div>
      </div>
    </section>
  );
}

function PageSection({ section }) {
  return (
    <section className="reference-section" id={section.id}>
      <div className="container">
        <div className="reference-section-heading"><p className="eyebrow">{section.kicker || "YPER"}</p><h2>{section.title}</h2>{section.intro && <p>{section.intro}</p>}</div>
        {section.paragraphs && <div className="reference-prose">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
        {section.cards && <div className="reference-card-grid">{section.cards.map(([title, copy]) => <article className="reference-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>}
        {section.list && <ul className="reference-list">{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
        {section.faqs && <div className="reference-faq">{section.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>}
        {section.people && <div className="reference-person-grid">{leaders.map((leader) => <article className="reference-person" key={leader.name}><img src={leader.image} alt={leader.alt} loading="lazy" /><div className="reference-person-copy"><h3>{leader.name}</h3><p className="eyebrow">{leader.role}</p><p>{leader.copy}</p></div></article>)}</div>}
      </div>
    </section>
  );
}

function ContentPage({ page }) {
  const content = contentPages[page];
  return <main className="reference-page"><PageHero {...content} />{content.sections.map((section) => <PageSection section={section} key={section.title} />)}</main>;
}

function TeamPage() {
  return (
    <main className="reference-page">
      <PageHero label="LEADERSHIP" title="Meet Our Leadership" intro="Building the Future of Accessible, Intelligent Healthcare." action={["About YPER", "/about"]} />
      <PageSection section={{ title: "Leadership", people: true }} />
    </main>
  );
}

function RoadmapPage() {
  const items = [
    ["YPER Mobile Unit", "A CarePod on wheels for villages, camps and outreach drives.", "https://www.yper.in/_next/image?url=%2Fimages%2Fyper%2Fmobile-medical-unit.webp&w=384&q=75", "Concept visualization of a white YPER medical van with an open clinical interior."],
    ["YPER Smart Health Card", "YPER Smart Health Card is designed to provide a convenient way to identify patients and connect their healthcare information across participating hospitals, clinics, diagnostic centers, pharmacies, and other authorized healthcare providers."],
  ];
  return (
    <main className="reference-page">
      <PageHero label="ROADMAP" title="Roadmap" intro="Explore product concepts described in YPER's roadmap." />
      <section className="reference-section"><div className="container"><div className="reference-roadmap-grid">{items.map(([title, copy, image, alt]) => <article className="reference-roadmap-card" key={title}>{image ? <img src={image} alt={alt} loading="lazy" /> : <div className="reference-health-card" role="img" aria-label="Illustrative YPER Smart Health Card with sample details"><span>YPER SMART HEALTH CARD</span><small>CARD HOLDER</small><strong>ALEX MORGAN</strong><small>PATIENT ID</small><b>YP-DEMO-2048</b><small>ISSUED 10/26 · SAMPLE DETAILS</small></div>}<div className="reference-roadmap-copy"><h3>{title}</h3><p>{copy}</p></div></article>)}</div><div className="reference-hero-actions"><Link className="text-link" to="/products/health-atm">Explore Health ATM <span aria-hidden="true">→</span></Link></div></div></section>
    </main>
  );
}

function LegalPage({ page }) {
  const content = legalPages[page];
  return (
    <main className="reference-page">
      <PageHero label={content.label} title={content.title} intro={content.intro} />
      <section className="reference-section"><div className="container reference-legal">{content.sections.map(([title, ...paragraphs]) => <section className="reference-legal-section" key={title}><h2>{title}</h2>{paragraphs.map((paragraph) => <p key={paragraph}>{title === "Contact" && paragraph.includes("contact@yper.in") ? <>Privacy questions can be sent to <a href="mailto:contact@yper.in">contact@yper.in</a>.</> : paragraph.includes("email contact@yper.in") ? <>If you have trouble using this website, email <a href="mailto:contact@yper.in">contact@yper.in</a> and describe the page and the barrier you found.</> : paragraph}</p>)}</section>)}{content.note && <p className="reference-local-note">{content.note}</p>}</div></section>
    </main>
  );
}

function ContactPage({ pilot = false }) {
  const selectedProduct = pilot ? "YPER CarePod" : "";
  return (
    <main className="reference-page">
      <PageHero label={pilot ? "PILOT ENQUIRY" : "CONTACT"} title={pilot ? "Host a CarePod Pilot" : "Book a Demo"} intro={pilot ? "Tell us about the sites and the kind of pilot you want to discuss. This form is for organisations. Do not include patient health information." : "Tell us about your organisation and the kind of deployment you want to discuss. A request is sent only when this website’s delivery service is configured. Do not include patient health information."} />
      <section className="reference-section"><div className="container reference-contact-layout"><div className="reference-contact-details"><p>Use a work email so the right team can reply.</p><p>Choose a country code with the phone number.</p><p>Pricing and device support are confirmed in the conversation, not on this form.</p><a href="mailto:contact@yper.in">contact@yper.in</a><p>H.No. 2-4-1033, Plot No. 8,<br />Samathapuri Colony,<br />Road No. 1, New Nagole Colony,<br />Kothapet Road, Hyderabad – 500035,<br />Telangana, India.</p><a href="https://www.google.com/maps/search/?api=1&query=H.No.%202-4-1033%2C%20Plot%20No.%208%2C%20Samathapuri%20Colony%2C%20Road%20No.%201%2C%20New%20Nagole%20Colony%2C%20Kothapet%20Road%2C%20Hyderabad%20500035%2C%20Telangana%2C%20India" target="_blank" rel="noreferrer">Get Directions</a></div><DemoForm selectedProduct={selectedProduct} /></div></section>
    </main>
  );
}

export default function ReferencePage({ page }) {
  if (page === "team") return <TeamPage />;
  if (page === "roadmap") return <RoadmapPage />;
  if (legalPages[page]) return <LegalPage page={page} />;
  if (page === "contact") return <ContactPage />;
  if (page === "pilot") return <ContactPage pilot />;
  return <ContentPage page={page} />;
}