"use client";

import { 
  UserCheck, 
  Layers, 
  Award, 
  HeartPulse, 
  CalendarClock, 
  CheckCheck,
  PhoneCall,
  CalendarCheck
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const iconMap = {
  UserCheck: UserCheck,
  Layers: Layers,
  Award: Award,
  HeartPulse: HeartPulse,
  CalendarClock: CalendarClock,
  CheckCheck: CheckCheck,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 12-Column Grid: Left Header Block (4 cols) + Right Cards Grid (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Anchor (4 cols): Eyebrow, Heading, Description & Quick CTA */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 text-left space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider text-left">
              <span>Patient-First Care</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight font-display max-w-sm text-left">
              Why Choose <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-sky-600">
                Narayan Dental Care
              </span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed max-w-sm text-left">
              We are dedicated to fostering long-term doctor-patient trust through high clinical standards, unhurried consultations, and patient-centered treatment.
            </p>

            {/* Quick Assurance Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 text-left">
              <div className="flex items-center space-x-2 text-teal-700 font-bold text-sm">
                <CheckCheck className="w-4 h-4" />
                <span>Ethical & Transparent</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Clear cost estimates and step-by-step procedure walk-throughs before any procedure begins.
              </p>
              <div className="pt-1">
                <a
                  href="#appointment"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-navy-900 hover:text-teal-700 transition-colors"
                >
                  <CalendarCheck className="w-3.5 h-3.5 text-teal-600" />
                  <span>Book Your Consultation</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Cards Grid (8 cols): 2-Column Grid of 6 Benefit Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 text-left">
            {siteConfig.whyChooseUs.map((item) => {
              const IconComponent = iconMap[item.iconName] || Award;
              return (
                <div
                  key={item.id}
                  className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-teal-300 hover:shadow-elevated transition-all duration-300 group text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 group-hover:bg-teal-600 group-hover:border-teal-600 text-teal-700 group-hover:text-white flex items-center justify-center transition-colors mb-4 shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 font-display mb-2 group-hover:text-teal-700 transition-colors text-left">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-left">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
