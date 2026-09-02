// Flip these to bring the full site back online for NGMUN IX.
export const FEATURES = {
  SAVE_THE_DATE: true,
  REGISTRATION_OPEN: false,
  SHOW_EVENT_INFO: true,
  SHOW_EVENT_INFO_CARD: false,
  SHOW_COMMITTEES: false,
  SHOW_STAFF: false,
  SHOW_SECRETARIAT_LETTER: false,
  EMAIL_SIGNUP: true,
} as const;

export const CONFERENCE = {
  name: "NGMUN IX",
  sessionLabel: "THE NINTH SESSION",
  date: "Sunday, May 2, 2027",
  shortDate: "May 2, 2027",
  dateOrdinal: "May 2nd, 2027",
  email: "ngmun@nobles.edu",
} as const;

// Backed by scripts/apps-script/Code.gs. Set to "" to fall back to a mailto: link.
export const EMAIL_SIGNUP_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzGvaNR7qlxU2B6htDRom-EgozfEIYWumCOgx6A6P5vZdWWX9ehfkkSnV4AGdygiC2g5Q/exec";

export const EMAIL_SIGNUP_FORM_TYPE = "email_signup";
