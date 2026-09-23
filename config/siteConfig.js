// Centralized configuration for Narayan Dental Care
// Update contact details and WhatsApp numbers here easily.

export const siteConfig = {
  clinicName: "Narayan Dental Care",
  tagline: "Advanced Dental Care. Confident Smiles.",
  category: "Multi Speciality Dental Clinic",

  doctor: {
    name: "Dr. Swagat Panda",
    honorific: "Professor Dr. Swagat Panda",
    displayTitle: "Professor Dr. Swagat Panda · MDS",
    degrees: ["B.D.S (Lucknow)", "M.D.S (Kolkata)", "F.A.G.E"],
    specialty: "Endodontist & Conservative Dentistry",
    experience: "15 Years of Clinical Excellence",
    role: "Chief Dental Surgeon & Consultant Endodontist",
    image: "/images/doctor.jpg",
    imageCutout: "/images/doctor-cutout.png",
  },

  logo: {
    image: "/images/logo.jpg",
    alt: "Narayan Dental Care Logo",
  },

  contact: {
    // International format without '+' or spaces for WhatsApp URLs (e.g. "919876543210")
    // Replace YOUR_WHATSAPP_NUMBER with your actual 10 or 12 digit phone number
    whatsappNumber: "7008249985",
    displayPhone: "+91 7008249985",
    phoneHref: "tel:+917008249985",
    email: "[EMAIL_ADDRESS]",
    address: {
      line1: "Gurukrupa, Plot No-9",
      landmark: "Adjacent to Banalata Apartment",
      area: "Saheed Nagar",
      city: "Bhubaneswar",
      state: "Odisha",
      pincode: "751007",
      full: "Gurukrupa, Plot No-9, adjacent to Banalata Apartment, Saheed Nagar, Bhubaneswar, Odisha 751007",
    },
  },

  timings: {
    weekdays: "Monday – Saturday",
    weekdayHours: "11:00 AM – 08:00 PM",
    sunday: "Sunday",
    sundayHours: "On Appointment Basis",
    sundayNote: "Sunday consultations are available by prior appointment.",
  },

  maps: {
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Narayan+Dental+Care,+Gurukrupa,+Plot+No-9,+adjacent+to+Banalata+Apartment,+Saheed+Nagar,+Bhubaneswar,+Odisha+751007",
    searchUrl: "https://www.google.com/maps/search/?api=1&query=Narayan+Dental+Care+Gurukrupa+Plot+No-9+Saheed+Nagar+Bhubaneswar+Odisha+751007",
    embedUrl: "https://maps.google.com/maps?q=Saheed+Nagar,+Bhubaneswar,+Odisha+751007&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },

  services: [
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      shortDesc: "Specialized, precision endodontic care to relieve tooth pain and preserve natural teeth effectively.",
      iconName: "Activity",
      category: "Specialized Endodontics",
      featured: true,
    },
    {
      id: "dental-implant",
      title: "Dental Implant",
      shortDesc: "Permanent, natural-looking tooth replacements with titanium implants for restored strength and aesthetics.",
      iconName: "ShieldCheck",
      category: "Restorative",
      featured: true,
    },
    {
      id: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      shortDesc: "Custom aesthetic enhancements to elevate smile harmony, tooth shape, and natural brightness.",
      iconName: "Sparkles",
      category: "Aesthetic",
      featured: true,
    },
    {
      id: "smile-designing",
      title: "Smile Designing",
      shortDesc: "Comprehensive digital smile planning tailored to facial symmetry and patient aesthetic goals.",
      iconName: "Smile",
      category: "Aesthetic",
      featured: true,
    },
    {
      id: "teeth-whitening",
      title: "Teeth Whitening",
      shortDesc: "Safe, professional clinic-grade whitening to remove deep stains and revive your brightest smile.",
      iconName: "Sun",
      category: "Aesthetic",
      featured: false,
    },
    {
      id: "pediatric-dentistry",
      title: "Pediatric Dentistry",
      shortDesc: "Gentle, friendly dental care for children to foster lifelong positive oral health habits.",
      iconName: "HeartHandshake",
      category: "Family Care",
      featured: false,
    },
    {
      id: "orthodontic-braces",
      title: "Orthodontic Braces",
      shortDesc: "Corrective alignment treatments including traditional braces and modern aligners for balanced bites.",
      iconName: "Layers",
      category: "Orthodontics",
      featured: false,
    },
    {
      id: "surgical-extraction",
      title: "Surgical Extraction",
      shortDesc: "Careful, atraumatic surgical removal of impacted wisdom teeth and non-restorable roots.",
      iconName: "Stethoscope",
      category: "Oral Surgery",
      featured: false,
    },
    {
      id: "dental-bridge-crowns",
      title: "Dental Bridge & Crowns",
      shortDesc: "High-durability ceramic and zirconia crowns & fixed bridges to protect damaged or missing teeth.",
      iconName: "Gem",
      category: "Restorative",
      featured: true,
    },
    {
      id: "fixed-removal-denture",
      title: "Fixed & Removal Denture",
      shortDesc: "Comfort-engineered complete and partial dentures designed for seamless chewing and speech.",
      iconName: "CheckCircle2",
      category: "Prosthodontics",
      featured: false,
    },
    {
      id: "teeth-scaling-polishing",
      title: "Teeth Scaling & Polishing",
      shortDesc: "Thorough ultrasonic plaque & calculus removal to maintain healthy gums and fresh breath.",
      iconName: "Sparkle",
      category: "Preventive Care",
      featured: false,
    },
  ],

  whyChooseUs: [
    {
      id: 1,
      title: "Personalized Patient Care",
      description: "Every patient receives focused, one-on-one attention with customized treatment strategies crafted for their unique oral health needs.",
      iconName: "UserCheck",
    },
    {
      id: 2,
      title: "Comprehensive Dental Services",
      description: "From routine hygiene and root canals to complex cosmetic reconstructions, get complete multi-speciality care under one roof.",
      iconName: "Layers",
    },
    {
      id: 3,
      title: "Professional Dental Expertise",
      description: "Led by Professor Dr. Swagat Panda (MDS, FAGE), offering deep endodontic clinical mastery and academic rigor.",
      iconName: "Award",
    },
    {
      id: 4,
      title: "Comfortable Treatment Experience",
      description: "A calming, warm, and hygienic clinical environment created to minimize anxiety and make dental visits reassuring.",
      iconName: "HeartPulse",
    },
    {
      id: 5,
      title: "Convenient Appointment Booking",
      description: "Easy online booking and direct WhatsApp coordination with flexible weekday and weekend availability.",
      iconName: "CalendarClock",
    },
    {
      id: 6,
      title: "Patient-Centered Approach",
      description: "Transparent explanations, clear procedure walk-throughs, and collaborative decision making at every step.",
      iconName: "CheckCheck",
    },
  ],

  patientJourney: [
    {
      step: "01",
      title: "Schedule Your Visit",
      desc: "Book your appointment online or reach out directly on WhatsApp to select your preferred date and time.",
    },
    {
      step: "02",
      title: "Discuss Your Dental Concerns",
      desc: "Consult directly with Dr. Swagat Panda in a thorough, comfortable, and unhurried clinical evaluation.",
    },
    {
      step: "03",
      title: "Receive a Personalized Treatment Plan",
      desc: "Get transparent recommendations and tailored treatment options explained clearly before proceeding.",
    },
    {
      step: "04",
      title: "Begin Your Journey to Better Oral Health",
      desc: "Experience attentive care in a modern, hygienic setting designed for long-term oral well-being.",
    },
  ],
};

// Helper functions for generating WhatsApp links
export function getGeneralWhatsAppUrl() {
  const num = siteConfig.contact.whatsappNumber;
  const msg = encodeURIComponent(
    "Hello Dr. Swagat Panda Sir, I would like to enquire about dental treatment at Narayan Dental Care. Please guide me regarding an appointment."
  );
  return `https://wa.me/${num}?text=${msg}`;
}

export function getServiceWhatsAppUrl(serviceName) {
  const num = siteConfig.contact.whatsappNumber;
  const msg = encodeURIComponent(
    `Hello Dr. Swagat Panda Sir, I would like to know more about ${serviceName} at Narayan Dental Care.`
  );
  return `https://wa.me/${num}?text=${msg}`;
}

export function getAppointmentWhatsAppUrl({ name, phone, date, time, service, message }) {
  const num = siteConfig.contact.whatsappNumber;
  const formattedText =
    `Hello Dr. Swagat Panda Sir, I would like to request a dental appointment at Narayan Dental Care.

Name: ${name || "Not specified"}
Phone: ${phone || "Not specified"}
Preferred Date: ${date || "Flexible"}
Preferred Time: ${time || "Flexible"}
Service: ${service || "General Consultation"}
${message ? `Message: ${message}\n` : ""}
Thank you.`;

  return `https://wa.me/${num}?text=${encodeURIComponent(formattedText)}`;
}
