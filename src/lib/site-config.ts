// TODO: replace placeholder contact details with real Vidvas School info
export const site = {
  name: "Vidvas School",
  tagline: "Where Values Meet Excellence",
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

export const nav = [
  { label: "Home", to: "/" },
  {
    label: "Academics",
    to: "/academics",
    menu: [
      { label: "Curriculum", desc: "AP State Board, English medium" },
      { label: "Teaching Methodology", desc: "Concept-first, inquiry-based learning" },
      { label: "Faculty Excellence", desc: "Mentors who shape minds" },
      { label: "Robotics & Coding", desc: "Future-ready STEM programs" },
      { label: "Academic Journey", desc: "Pre-primary through Class X" },
    ],
  },
  {
    label: "Admissions",
    to: "/admissions",
    menu: [
      { label: "Why Vidvas", desc: "The Vidvas advantage" },
      { label: "Eligibility", desc: "Age and class criteria" },
      { label: "Admission Process", desc: "Simple, transparent steps" },
      { label: "Documents Required", desc: "What to bring" },
      { label: "Campus Visit", desc: "Book a guided tour" },
    ],
  },
  {
    label: "Achievements",
    to: "/achievements",
    menu: [
      { label: "Academic Excellence", desc: "Top scorers and ranks" },
      { label: "Sports Excellence", desc: "State & national medals" },
      { label: "Cultural Excellence", desc: "Stage, music, dance" },
      { label: "Student Stories", desc: "Voices of our alumni" },
    ],
  },
  {
    label: "Campus Life",
    to: "/campus-life",
    menu: [
      { label: "Sports", desc: "Cricket, athletics, archery" },
      { label: "Events", desc: "Annual day & celebrations" },
      { label: "Activities", desc: "Clubs, labs, leadership" },
      { label: "Leadership", desc: "Student council & prefects" },
      { label: "Gallery", desc: "Moments from campus" },
    ],
  },
  { label: "Contact", to: "/contact" },
];
