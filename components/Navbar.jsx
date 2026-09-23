"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  CalendarCheck, 
  MessageCircle,
  ChevronRight
} from "lucide-react";
import { siteConfig, getGeneralWhatsAppUrl } from "@/config/siteConfig";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Doctor", href: "#doctor" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Patient Journey", href: "#journey" },
    { name: "Location & Hours", href: "#location" },
  ];

  return (
    <>
      {/* Top Notification Bar (Desktop only) */}
      <div className="hidden lg:block bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800/80">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Saheed Nagar, Bhubaneswar, Odisha 751007</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>Mon – Sat: 11:00 AM – 08:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-teal-400 hover:text-teal-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Consultation</span>
            </a>
            <span className="text-navy-700">|</span>
            <span className="text-amber-400 font-medium tracking-wide">
              {siteConfig.category}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="#home" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white p-0.5 flex-shrink-0">
              <Image
                src={siteConfig.logo.image}
                alt={siteConfig.logo.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-navy-900 block font-display leading-tight group-hover:text-teal-700 transition-colors">
                {siteConfig.clinicName}
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-teal-600 block tracking-wide">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-teal-600 hover:bg-teal-50/60 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#appointment"
              className="btn-primary inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold shadow-sm transition-all duration-200"
              id="nav-book-btn"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book an Appointment</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700 rounded-xl transition-all"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href="#appointment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl bg-teal-600 text-white font-semibold shadow-sm text-center"
                >
                  <CalendarCheck className="w-5 h-5" />
                  <span>Book an Appointment</span>
                </a>
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
