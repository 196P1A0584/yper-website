const publicImage = (filename) => `${import.meta.env.BASE_URL}images/${filename}`;

export const media = {
  carePod: publicImage("yper-kiosk-front.webp"),
  wallCarePod: publicImage("wall-mounted-kiosk.webp"),
  healthKit: publicImage("portable-health-kit.webp"),
  founderAbhay: publicImage("dr-abhay-chopada.jpg"),
  founderSri: publicImage("founder.jpg"),
  mobileUnit: publicImage("mobile-medical-unit.jpg"),
  careVisit: publicImage("care/book-appointment.webp"),
  healthAtmHero: publicImage("health-atm/hero.png"),
  healthAtmTests: publicImage("health-atm/tests-kiosk.png"),
  healthAtmStep1: publicImage("health-atm/step-1.png"),
  healthAtmStep2: publicImage("health-atm/step-2.png"),
  healthAtmStep3: publicImage("health-atm/step-3.png"),
  healthAtmStep4: publicImage("health-atm/step-4.png"),
  overviewEmployers: publicImage("overview/employers.png"),
  overviewCommunities: publicImage("overview/communities.png"),
  overviewClinics: publicImage("overview/clinics.png"),
  overviewProgrammes: publicImage("overview/programmes.png"),
  initiativeStart: publicImage("initiative/kasurdi-1.png"),
  initiativeTest: publicImage("initiative/kasurdi-2.png"),
  initiativeResponse: publicImage("initiative/kasurdi-3.png"),
};
