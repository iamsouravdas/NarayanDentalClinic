# Narayan Dental Care — Official Website

A website for **Narayan Dental Care** located in Saheed Nagar, Bhubaneswar, Odisha, led by **Professor Dr. Swagat Panda** (BDS, MDS Kolkata, FAGE).

---

## 🌟 Features

- **Brand Identity & Luxury Aesthetic**: Deep Navy, Medical Teal, Warm Ivory, and subtle Champagne Gold accents with Plus Jakarta Sans & Outfit typography.
- **Doctor Profile & Credentials**: Prominently highlights Dr. Swagat Panda's qualifications (B.D.S Lucknow, M.D.S Kolkata, F.A.G.E) and 15+ years of clinical excellence in Endodontics and multi-speciality dentistry.
- **11 Dental Services with WhatsApp Enquiry**:
  1. Root Canal Treatment
  2. Dental Implant
  3. Cosmetic Dentistry
  4. Smile Designing
  5. Teeth Whitening
  6. Pediatric Dentistry
  7. Orthodontic Braces
  8. Surgical Extraction
  9. Dental Bridge & Crowns
  10. Fixed & Removal Denture
  11. Teeth Scaling & Polishing
- **Interactive Appointment Booking**: Real-time form validation with one-click conversion to a pre-formatted WhatsApp appointment request.
- **Location & Timings**: Interactive embedded Google Map, one-click "Copy Address" with instant visual feedback, and "Get Directions" navigation link.
- **Mobile Sticky Action Bar**: Instant access to Call Now, WhatsApp Chat, and Book Visit on mobile devices.
- **Floating WhatsApp Consultation Button**: Pulsing green button with tooltip.
- **SEO & Schema.org**: Fully optimized meta tags, OpenGraph, and Schema.org `Dentist` / `LocalBusiness` JSON-LD structured data for Bhubaneswar local searches.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: JavaScript (ES6+ / React 18)
- **Styling**: Tailwind CSS & Vanilla CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (`Plus Jakarta Sans`, `Outfit`)

---

## ⚙️ Configuration & Customization

All clinic information, phone numbers, and WhatsApp numbers are centralized in [`config/siteConfig.js`](file:///d:/Freelance/Narayan%20Dental%20Care/config/siteConfig.js):

### 1. Update WhatsApp & Phone Number
Open `config/siteConfig.js` and edit the `contact` object:
```javascript
contact: {
  // Replace YOUR_WHATSAPP_NUMBER with your 10 or 12 digit international number (e.g. "919876543210")
  whatsappNumber: "YOUR_WHATSAPP_NUMBER",
  displayPhone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "contact@narayandentalcare.com",
}
```

---

## 🚀 Getting Started

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Custom healthcare gradients, glassmorphism, & animations
│   ├── layout.jsx           # Root layout, Google fonts, Schema.org JSON-LD & SEO meta
│   └── page.jsx             # Main landing page assembling all clinic sections
├── components/
│   ├── Navbar.jsx           # Sticky header, desktop links, mobile drawer
│   ├── MobileActionBar.jsx  # Mobile bottom quick action bar (Call, WhatsApp, Book)
│   ├── Hero.jsx             # High-impact hero with doctor photo & conversion CTAs
│   ├── DoctorProfile.jsx    # About Dr. Swagat Panda & credentials cards
│   ├── ServicesGrid.jsx     # 11 service cards with individual WhatsApp enquiry triggers
│   ├── WhyChooseUs.jsx      # 6 core patient-first trust pillars
│   ├── PatientExperience.jsx# 4-step patient journey & hygiene commitments
│   ├── AppointmentForm.jsx  # Booking form with validation & WhatsApp transfer
│   ├── ClinicLocation.jsx   # Embedded map, directions, copy address, & timings
│   ├── Footer.jsx           # Multi-column footer & copyright
│   └── FloatingWhatsApp.jsx # Pulsing bottom-right floating button
├── config/
│   └── siteConfig.js        # Centralized data & WhatsApp URL builders
├── public/
│   └── images/
│       ├── doctor.jpg       # Authentic portrait of Dr. Swagat Panda
│       └── logo.jpg         # Official Narayan Dental Care logo
└── tailwind.config.js       # Custom theme colors and styling rules
```
