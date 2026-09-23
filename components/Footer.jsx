"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  MessageCircle, 
  Navigation, 
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { siteConfig, getGeneralWhatsAppUrl } from "@/config/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Dr. Swagat Panda", href: "#doctor" },
    { name: "Dental Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Patient Journey", href: "#journey" },
    { name: "Book Appointment", href: "#appointment" },
    { name: "Clinic Location", href: "#location" },
  ];

  const popularServices = [
    "Root Canal Treatment",
    "Dental Implant",
    "Cosmetic Dentistry",
    "Smile Designing",
    "Teeth Whitening",
    "Pediatric Dentistry",
    "Orthodontic Braces",
    "Dental Bridge and Crowns",
    "Teeth Scaling Polishing",
  ];

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-navy-800 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-800/80 text-left">
          
          {/* Col 1: Brand (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center space-x-3 text-left">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white p-0.5 shadow-sm flex-shrink-0">
                <Image
                  src={siteConfig.logo.image}
                  alt={siteConfig.logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <span className="text-xl font-bold text-white font-display block leading-tight text-left">
                  {siteConfig.clinicName}
                </span>
                <span className="text-xs text-teal-400 font-medium block text-left">
                  {siteConfig.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pt-2 text-left">
              Multi-speciality dental healthcare clinic led by <strong className="text-slate-200">Professor Dr. Swagat Panda</strong> (MDS Kolkata, FAGE). Dedicated to comfortable, transparent, and expert dental treatments in Bhubaneswar.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400 text-left">
              <span className="px-2.5 py-1 rounded-md bg-navy-850 border border-navy-800 text-teal-300 font-medium">
                BDS (Lucknow)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-navy-850 border border-navy-800 text-teal-300 font-medium">
                MDS (Kolkata)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-navy-850 border border-navy-800 text-teal-300 font-medium">
                FAGE
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display border-l-2 border-teal-500 pl-2.5 text-left">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-left">
              {quickLinks.map((link) => (
                <li key={link.name} className="text-left">
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-teal-300 transition-colors flex items-center space-x-1.5 py-0.5 text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-navy-600 flex-shrink-0" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Dental Services (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display border-l-2 border-teal-500 pl-2.5 text-left">
              Key Treatments
            </h4>
            <ul className="space-y-2 text-sm text-left">
              {popularServices.map((srv) => (
                <li key={srv} className="text-left">
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-teal-300 transition-colors flex items-center space-x-1.5 py-0.5 text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-navy-600 flex-shrink-0" />
                    <span>{srv}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display border-l-2 border-teal-500 pl-2.5 text-left">
              Contact & Location
            </h4>
            <div className="space-y-3 text-sm text-slate-300 text-left">
              <div className="flex items-start space-x-2.5 text-left">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-slate-300 leading-relaxed text-left">
                  {siteConfig.contact.address.full}
                </span>
              </div>

              <div className="flex items-start space-x-2.5 text-left">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-300 text-left">
                  <p>Mon – Sat: 11:00 AM – 08:00 PM</p>
                  <p className="text-amber-400 text-xs mt-0.5">Sunday: On Appointment</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2 text-left">
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href={siteConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-navy-850 border border-navy-700 text-slate-300 hover:text-white hover:border-slate-500 text-xs font-bold transition-colors"
                >
                  <Navigation className="w-4 h-4 text-teal-400" />
                  <span>Google Maps Directions</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400 text-left">
          <p className="text-left">© {currentYear} {siteConfig.clinicName}. All Rights Reserved.</p>
          <p className="flex items-center space-x-1 text-left">
            <span>Designed with care for better smiles</span>
            <span className="text-teal-400">&bull;</span>
            <span>Saheed Nagar, Bhubaneswar</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
