"use client";

import Image from "next/image";
import { 
  CalendarCheck, 
  MessageCircle, 
  Award, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  GraduationCap, 
  CheckCircle2
} from "lucide-react";
import { siteConfig, getGeneralWhatsAppUrl } from "@/config/siteConfig";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden mesh-gradient-hero pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Background 3D Ambient Medical Glows */}
      <div className="absolute top-12 right-1/4 w-[500px] h-[500px] bg-teal-400/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 7 Cols (Asymmetric 60/40 split) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-ping" />
              <span>Saheed Nagar, Bhubaneswar</span>
              <span className="text-teal-400">•</span>
              <span className="text-teal-700">Multi-Speciality Dental Clinic</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.12] font-display max-w-2xl">
              Your Smile Deserves <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-sky-600">
                Expert Care.
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl text-left">
              Comprehensive dental care with advanced treatments, personalized attention, and a commitment to your healthiest, most confident smile.
            </p>

            {/* Doctor Credentials Callout Banner */}
            <div className="w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-soft text-left">
              <div className="flex items-start sm:items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-navy-900 font-display">
                      {siteConfig.doctor.honorific}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
                      M.D.S Kolkata
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                    B.D.S (Lucknow) &nbsp;|&nbsp; M.D.S (Kolkata) &nbsp;|&nbsp; F.A.G.E &nbsp;|&nbsp; Consultant Endodontist
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-1">
              <a
                href="#appointment"
                className="btn-primary inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base shadow-elevated"
                id="hero-book-btn"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Book an Appointment</span>
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-base shadow-soft"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Highlights Grid */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 border-t border-slate-200/80 w-full max-w-xl text-left">
              <div className="flex items-center space-x-2 text-left">
                <Award className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700">15+ Years Excellence</span>
              </div>
              <div className="flex items-center space-x-2 text-left">
                <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Multi-Speciality Care</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1 text-left">
                <Clock className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Mon–Sat 11am–8pm</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Seamless Blended Doctor Visual (5 Cols - Zoomed & Enlarged) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative pt-4 lg:pt-0">
            <div className="relative w-full max-w-[500px] lg:max-w-[540px] flex flex-col items-center">
              
              {/* 3D Circular Ambient Glow Rings Behind Subject */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[460px] sm:h-[460px] rounded-full bg-gradient-to-tr from-teal-500/30 via-sky-400/25 to-amber-300/20 filter blur-3xl -z-10 animate-pulse-glow" />
              
              {/* 3D Backdrop Arch & Frosted Layer */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[340px] sm:w-[420px] h-[440px] sm:h-[520px] rounded-t-full bg-gradient-to-b from-white/75 via-teal-50/45 to-white/90 border-t border-x border-white/80 shadow-[0_25px_60px_rgba(13,148,136,0.15)] -z-10 backdrop-blur-xs" />
              
              {/* 3D Doctor Cutout with Zoomed Scale and Natural Drop Shadow */}
              <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[600px] flex items-end justify-center overflow-hidden sm:overflow-visible">
                <div className="relative w-full h-full transform scale-115 sm:scale-125 origin-bottom">
                  <Image
                    src={siteConfig.doctor.imageCutout}
                    alt={`${siteConfig.doctor.honorific} - Chief Dental Surgeon`}
                    fill
                    className="object-contain object-bottom filter drop-shadow-[0_28px_38px_rgba(11,25,44,0.25)]"
                    priority
                    sizes="(max-width: 768px) 100vw, 540px"
                  />
                  {/* Seamless Bottom Gradient Fade into Website Surface */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background-ivory via-background-ivory/60 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Identity Glass Tag */}
              <div className="mt-3 w-full max-w-sm px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-elevated flex items-center justify-between text-left relative z-10">
                <div className="text-left">
                  <h3 className="text-sm sm:text-base font-bold text-navy-900 font-display leading-tight text-left">
                    {siteConfig.doctor.honorific}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-semibold text-teal-600 text-left">
                    Chief Dental Surgeon &bull; Consultant Endodontist
                  </p>
                </div>
                <div className="flex items-center space-x-1 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80 text-[11px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Available</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
