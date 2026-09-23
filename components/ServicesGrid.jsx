"use client";

import { useState } from "react";
import { 
  Sparkles, 
  Activity, 
  Smile, 
  Sun, 
  ShieldCheck, 
  HeartHandshake, 
  Layers, 
  Stethoscope, 
  Crown, 
  CheckCircle2, 
  Sparkle,
  MessageCircle,
  CalendarCheck,
  ArrowRight,
  CheckCircle,
  Clock,
  ChevronRight
} from "lucide-react";
import { siteConfig, getServiceWhatsAppUrl } from "@/config/siteConfig";

// Map icon string names to Lucide icon components
const iconMap = {
  Activity: Activity,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Smile: Smile,
  Sun: Sun,
  HeartHandshake: HeartHandshake,
  Layers: Layers,
  Stethoscope: Stethoscope,
  Gem: Crown,
  CheckCircle2: CheckCircle2,
  Sparkle: Sparkle,
};

// Category filters
const categories = [
  { id: "all", label: "All Treatments" },
  { id: "Specialized Endodontics", label: "Root Canal & Endodontics" },
  { id: "Aesthetic", label: "Cosmetic & Smile Design" },
  { id: "Restorative", label: "Implants & Restorative" },
  { id: "Orthodontics", label: "Braces & Orthodontics" },
  { id: "Oral Surgery", label: "Surgical Care" },
  { id: "Family Care", label: "Pediatric & Preventive" },
];

export default function ServicesGrid({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all" 
    ? siteConfig.services 
    : siteConfig.services.filter(s => {
        if (activeCategory === "Family Care") {
          return s.category === "Family Care" || s.category === "Preventive Care" || s.category === "Prosthodontics";
        }
        return s.category === activeCategory;
      });

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/80 relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-Aligned Section Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 text-left gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-100/90 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Multi-Speciality Clinical Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight font-display max-w-xl text-left leading-tight">
              Comprehensive Dental Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-sky-600">
                Under One Roof
              </span>
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-xl text-left">
              From microscopic endodontics and dental implants to cosmetic smile redesigns, explore personalized treatments crafted for lasting oral health.
            </p>
          </div>

          {/* Quick Header Summary */}
          <div className="text-left lg:text-right flex-shrink-0">
            <div className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-soft text-xs text-slate-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>11 Specialized Treatments Available</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none text-left">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                activeCategory === cat.id
                  ? "bg-navy-900 text-white shadow-soft"
                  : "bg-white text-slate-600 hover:text-navy-900 hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Revamped High-End Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;
            const waUrl = getServiceWhatsAppUrl(service.title);

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-7 border border-slate-200/90 shadow-soft hover:shadow-premium hover:border-teal-400/80 transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1.5"
              >
                {/* Top Card Header */}
                <div className="text-left">
                  <div className="flex items-center justify-between mb-6">
                    {/* Modern Gradient Icon Badge */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/70 border border-teal-200/60 text-teal-700 group-hover:from-teal-600 group-hover:to-teal-700 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    {/* Category or Popular Badge */}
                    <div className="flex flex-col items-end gap-1">
                      {service.featured && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                          Popular
                        </span>
                      )}
                      <span className="text-[11px] font-semibold text-slate-400">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-navy-900 font-display group-hover:text-teal-700 transition-colors leading-snug text-left mb-2.5">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-sm text-slate-600 leading-relaxed text-left">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col gap-2.5 text-left">
                  {/* Primary Book Action (Directly auto-selects form dropdown) */}
                  <button
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(service.title);
                      }
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-teal-50 hover:bg-teal-600 text-teal-800 hover:text-white font-bold text-xs flex items-center justify-between transition-all duration-200 group/btn"
                    id={`book-service-${service.id}`}
                  >
                    <span className="flex items-center space-x-1.5">
                      <CalendarCheck className="w-4 h-4" />
                      <span>Book Consultation</span>
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {/* Secondary WhatsApp Action */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200/80 hover:border-emerald-200 font-semibold text-xs flex items-center justify-between transition-colors"
                  >
                    <span className="flex items-center space-x-1.5">
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Enquire on WhatsApp</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner (Left-aligned content) */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-navy-900 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-premium text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-left space-y-2 max-w-2xl relative z-10">
            <span className="text-xs uppercase font-bold tracking-widest text-teal-400 block">
              Personalized Treatment Guidance
            </span>
            <h4 className="text-2xl sm:text-3xl font-bold font-display text-white text-left">
              Unsure which dental treatment is right for your symptoms?
            </h4>
            <p className="text-sm text-slate-300 text-left leading-relaxed">
              Schedule a comprehensive clinical consultation with Professor Dr. Swagat Panda to diagnose your condition and receive an unhurried, transparent evaluation.
            </p>
          </div>

          <div className="flex-shrink-0 relative z-10">
            <button
              onClick={() => {
                if (onSelectService) {
                  onSelectService("General Consultation");
                }
              }}
              className="btn-primary px-7 py-3.5 rounded-full bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold text-sm shadow-md inline-flex items-center space-x-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book General Consultation</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
