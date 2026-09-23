import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://narayandentalcare.com"),
  title: "Narayan Dental Care | Dr. Swagat Panda | Dental Clinic in Saheed Nagar, Bhubaneswar",
  description:
    "Visit Narayan Dental Care in Saheed Nagar, Bhubaneswar, led by Professor Dr. Swagat Panda (MDS, FAGE). Explore comprehensive dental treatments and request your appointment today.",
  keywords: [
    "Dental Clinic in Saheed Nagar",
    "Dentist in Bhubaneswar",
    "Narayan Dental Care",
    "Root Canal Treatment Bhubaneswar",
    "Dental Implant Bhubaneswar",
    "Cosmetic Dentist Bhubaneswar",
    "Dr Swagat Panda",
    "Endodontist Bhubaneswar",
    "Multi Speciality Dental Clinic Bhubaneswar",
  ],
  authors: [{ name: "Professor Dr. Swagat Panda" }],
  creator: "Narayan Dental Care",
  publisher: "Narayan Dental Care",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://narayandentalcare.com",
    title: "Narayan Dental Care | Dr. Swagat Panda | Dental Clinic in Saheed Nagar, Bhubaneswar",
    description:
      "Comprehensive multi-speciality dental care with advanced treatments, personalized attention, and a commitment to your healthiest smile in Saheed Nagar, Bhubaneswar.",
    siteName: "Narayan Dental Care",
    images: [
      {
        url: "/images/doctor.jpg",
        width: 1200,
        height: 1200,
        alt: "Professor Dr. Swagat Panda - Narayan Dental Care Bhubaneswar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Narayan Dental Care | Dr. Swagat Panda | Dental Clinic in Saheed Nagar, Bhubaneswar",
    description:
      "Comprehensive multi-speciality dental care led by Professor Dr. Swagat Panda (MDS, FAGE). Request your appointment in Saheed Nagar, Bhubaneswar.",
    images: ["/images/doctor.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b192c",
};

export default function RootLayout({ children }) {
  // Schema.org Structured Data for Local Dentist Practice
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Narayan Dental Care",
    "image": "https://narayandentalcare.com/images/doctor.jpg",
    "description": "Multi Speciality Dental Clinic led by Professor Dr. Swagat Panda (MDS Kolkata, FAGE) offering comprehensive dental solutions in Saheed Nagar, Bhubaneswar.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gurukrupa, Plot No-9, adjacent to Banalata Apartment, Saheed Nagar",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "postalCode": "751007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.2925",
      "longitude": "85.8458"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "11:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "description": "On Appointment Basis"
      }
    ],
    "medicalSpecialty": ["Dentistry", "Endodontics", "Cosmetic Dentistry"],
    "founder": {
      "@type": "Person",
      "name": "Dr. Swagat Panda",
      "jobTitle": "Lead Dentist & Consultant Endodontist",
      "alumniOf": ["King George's Medical University / Lucknow Dental", "Calcutta Dental College / MDS Kolkata"]
    },
    "priceRange": "$$"
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-teal-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
