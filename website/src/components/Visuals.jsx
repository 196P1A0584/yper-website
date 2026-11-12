export function Icon({ kind = "heart", className = "" }) {
  const paths = {
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" /><path d="M4.5 12h4l2-3 3 6 2-3h4" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-1a6 6 0 0 1 12 0v1M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5v1" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    pulse: <><path d="M3 12h4l3-7 4 14 3-7h4" /><circle cx="12" cy="12" r="10" /></>,
    droplet: <><path d="M12 22a7 7 0 0 0 7-7c0-4-7-13-7-13S5 11 5 15a7 7 0 0 0 7 7Z" /><path d="M9 16a3 3 0 0 0 3 3" /></>,
    building: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 21v-4h6v4M8 7h1m6 0h1M8 11h1m6 0h1" /></>,
    check: <><circle cx="12" cy="12" r="10" /><path d="m8 12 2.5 2.5L16 9" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    mapPin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  };

  return (
    <span className={`icon-wrap ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {paths[kind] || paths.heart}
      </svg>
    </span>
  );
}

export function KioskVisual() {
  return (
    <div className="kiosk-scene" aria-label="Illustration of a Yper health screening kiosk" role="img">
      <div className="scene-orbit orbit-one" />
      <div className="scene-orbit orbit-two" />
      <div className="plant plant-one"><i /><i /><i /><b /></div>
      <div className="kiosk">
        <div className="kiosk-camera"><i /><i /><i /></div>
        <div className="kiosk-screen">
          <img className="screen-brand" src="/yper-logo.png" alt="" />
          <small>Your Health<br />Our Priority</small>
          <span className="screen-cta">Start Health Check</span>
          <div className="screen-icons"><b>♡</b><b>⌁</b><b>✓</b></div>
        </div>
        <img className="kiosk-brand" src="/yper-logo.png" alt="" />
        <small>Health ATM</small>
      </div>
      <div className="person patient"><i className="person-head" /><i className="person-body" /><i className="person-arm" /></div>
      <div className="person clinician"><i className="person-head" /><i className="person-body" /><i className="person-arm" /><i className="clipboard" /></div>
      <span className="scene-label">A more connected health experience</span>
    </div>
  );
}

export function AbstractVisual({ variant = "soft" }) {
  return (
    <div className={`abstract-visual ${variant}`} aria-hidden="true">
      <span className="abstract-ring ring-a" />
      <span className="abstract-ring ring-b" />
      <span className="abstract-orb" />
      <span className="abstract-cross">+</span>
      <span className="abstract-wave">⌁</span>
    </div>
  );
}
