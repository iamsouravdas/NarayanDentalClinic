"use client";

import { 
  CalendarCheck, 
  MessageSquare, 
  FileSpreadsheet, 
  Smile, 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function PatientExperience() {
  const stepIcons = [CalendarCheck, MessageSquare, FileSpreadsheet, Smile];

  const clinicCommitments = [
    {
      title: "Hygienic & Sanitized Environment",
      desc: "Strict sterilization procedures following standard clinical hygiene protocols for your safety.",
    },
    {
      title: "Unhurried Consultations",
      desc: "Dedicated time to understand your personal dental concerns and medical history thoroughly.",
    },
    {
      title: "Transparent Care",
      desc: "Clear explanations of proposed procedures, expected visits, and options prior to commencing.",
    },
    {
      title: "Gentle Approach",
      desc: "Attentive care focused on patient comfort and minimizing anxiety at every stage of treatment.",
    },
  ];

  return (
    <section id="journey" className="py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Left-Aligned Section Header Block */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Patient Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white text-left max-w-xl">
            Your Comfort Is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-sky-300">
              Our Priority
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed max-w-lg text-left">
            We believe dental visits should be predictable, calming, and focused on patient well-being. Here is how we ensure a seamless experience for every visit.
          </p>
        </div>

        {/* 4-Step Patient Journey (Cards strictly left-aligned) */}
        <div className="mb-16">
          <h3 className="text-xs uppercase font-bold tracking-widest text-teal-400 mb-6 text-left">
            What to Expect During Your Visit
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative text-left">
            {siteConfig.patientJourney.map((step, idx) => {
              const Icon = stepIcons[idx] || Sparkles;
              return (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-navy-900/90 border border-slate-800 hover:border-teal-500/50 hover:bg-navy-850 transition-all duration-300 flex flex-col justify-between text-left group"
                >
                  <div className="text-left">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black font-display text-teal-400/50 group-hover:text-teal-400 transition-colors">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-300 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white font-display mb-2 text-left">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-left">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clinic Environment Commitments (Cards strictly left-aligned) */}
        <div className="p-7 sm:p-9 rounded-3xl bg-navy-900/80 border border-slate-800 backdrop-blur-sm text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {clinicCommitments.map((commit, idx) => (
              <div key={idx} className="space-y-2 text-left">
                <div className="flex items-center space-x-2 text-teal-300 text-left">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <h4 className="font-bold text-white text-sm sm:text-base font-display text-left">
                    {commit.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-7 text-left">
                  {commit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
