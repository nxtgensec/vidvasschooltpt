// TODO: replace placeholder contact details with real Vidvas School info
export const site = {
  name: "Vidvas School",
  tagline: "Where Values Meet Excellence",
  taglineLines: ["Where values", "meet excellence."] as const,
  location: "Tirupati, Andhra Pradesh",
  curriculum: "Andhra Pradesh State Board",
  email: "admissions@vidvasschool.com",
  phone: "+91 90000 00000",
  phoneDisplay: "+91 90000 00000",
  whatsapp: "919000000000",
  address: "Vidvas School Campus, Tirupati, Andhra Pradesh 517501, India",
  social: {
    instagram: "https://instagram.com/vidvasschool",
    facebook: "https://facebook.com/vidvasschool",
    youtube: "https://youtube.com/@vidvasschool",
    linkedin: "https://linkedin.com/company/vidvasschool",
  },
};

export const mailto = (subject = "Admissions enquiry", body = "") =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const whatsapp = (message = "Hello, I'd like to know more about admissions at Vidvas School.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const tel = `tel:${site.phone.replace(/\s/g, "")}`;

export type NavSubItem = { label: string; desc: string; hash: string };
export type NavItem = { label: string; to: string; menu?: NavSubItem[] };

export const nav: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Academics",
    to: "/academics",
    menu: [
      { label: "Philosophy", hash: "philosophy", desc: "Concept-first, inquiry-based learning" },
      { label: "Academic Journey", hash: "journey", desc: "Pre-primary through Class X" },
      { label: "Curriculum", hash: "curriculum", desc: "AP State Board, English medium" },
      { label: "Teaching Methodology", hash: "methodology", desc: "Six classroom moves" },
      { label: "Special Programs", hash: "programs", desc: "Robotics, coding & design" },
      { label: "Faculty Excellence", hash: "faculty", desc: "Mentors who shape minds" },
    ],
  },
  {
    label: "Admissions",
    to: "/admissions",
    menu: [
      { label: "Why Vidvas", hash: "why", desc: "The Vidvas advantage" },
      { label: "Eligibility", hash: "eligibility", desc: "Age and class criteria" },
      { label: "Documents Required", hash: "documents", desc: "What to bring" },
      { label: "Admission Process", hash: "process", desc: "Simple, transparent steps" },
      { label: "Campus Visit", hash: "visit", desc: "Book a guided tour" },
      { label: "FAQ", hash: "faq", desc: "Common questions" },
    ],
  },
  {
    label: "Achievements",
    to: "/achievements",
    menu: [
      { label: "Academic Excellence", hash: "academic", desc: "Top scorers and ranks" },
      { label: "Sports Excellence", hash: "sports", desc: "State & national medals" },
      { label: "Cultural & Tech", hash: "cultural", desc: "Stage, music, robotics" },
      { label: "Student Stories", hash: "stories", desc: "Voices of our students" },
      { label: "Milestones", hash: "milestones", desc: "The Vidvas timeline" },
    ],
  },
  {
    label: "Campus Life",
    to: "/campus-life",
    menu: [
      { label: "Facilities", hash: "facilities", desc: "Labs, library, sports" },
      { label: "Activities", hash: "activities", desc: "Clubs and disciplines" },
      { label: "Events", hash: "events", desc: "Annual day & celebrations" },
      { label: "Leadership", hash: "leadership", desc: "Student council & prefects" },
      { label: "Gallery", hash: "gallery", desc: "Moments from campus" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

// Sub-nav sections per page (for scrollspy + sticky sub-nav)
export const pageSections: Record<string, { id: string; label: string }[]> = {
  "/": [
    { id: "about", label: "About" },
    { id: "vision", label: "Vision" },
    { id: "leadership", label: "Leadership" },
    { id: "way", label: "The Vidvas Way" },
    { id: "journey", label: "Journey" },
    { id: "beyond", label: "Beyond Class" },
    { id: "voices", label: "Parent Voices" },
    { id: "faq", label: "FAQ" },
  ],
  "/academics": [
    { id: "philosophy", label: "Philosophy" },
    { id: "journey", label: "Journey" },
    { id: "curriculum", label: "Curriculum" },
    { id: "methodology", label: "Methodology" },
    { id: "programs", label: "Programs" },
    { id: "faculty", label: "Faculty" },
    { id: "faq", label: "FAQ" },
  ],
  "/admissions": [
    { id: "why", label: "Why Vidvas" },
    { id: "eligibility", label: "Eligibility" },
    { id: "documents", label: "Documents" },
    { id: "process", label: "Process" },
    { id: "visit", label: "Campus Visit" },
    { id: "faq", label: "FAQ" },
  ],
  "/achievements": [
    { id: "stats", label: "At a glance" },
    { id: "academic", label: "Academic" },
    { id: "sports", label: "Sports" },
    { id: "cultural", label: "Cultural & Tech" },
    { id: "stories", label: "Stories" },
    { id: "milestones", label: "Milestones" },
  ],
  "/campus-life": [
    { id: "facilities", label: "Facilities" },
    { id: "activities", label: "Activities" },
    { id: "events", label: "Events" },
    { id: "leadership", label: "Leadership" },
    { id: "gallery", label: "Gallery" },
  ],
};
