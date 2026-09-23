"use client";

import Image from "next/image";
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  CheckCircle, 
  CalendarCheck,
  Building2,
  Stethoscope,
  ShieldCheck,
  Activity,
  UserCheck
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function DoctorProfile() {
  const credentials = [
    {
      title: "B.D.S",
      institution: "Lucknow",
      desc: "Bachelor of Dental Surgery, providing extensive foundational oral health mastery.",
      icon: GraduationCap,
    },
    {
      title: "M.D.S",
      institution: "Kolkata",
      desc: "Master of Dental Surgery specializing in Conservative Dentistry & Endodontics.",
      icon: Award,
    },
    {
      title: "F.A.G.E",
      institution: "Fellowship",
      desc: "Fellow of the Academy of General Education, reflecting rigorous clinical training.",
      icon: Sparkles,
    },
    {
      title: "15 Years Excellence",
      institution: "Clinical Practice",
      desc: "Over a decade and a half of dedicated patient-centric dental care in Bhubaneswar.",
      icon: Stethoscope,
    },
  ];

  const highlights = [
    "Precise Endodontic (Root Canal) specialist focused on preserving natural tooth structure",
    "Personalized, unhurried treatment consultations explained in clear patient terms",
    "Comfortable, transparent, and anxiety-free clinical environment",
    "Comprehensive multi-speciality restorative, aesthetic, and surgical care",
  ];

  return (
    <section id="doctor" className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#0b192c_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Asymmetric 12-Column Grid (Visual Showcase Left 5 cols, Bio & Credentials Right 7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (5 cols): Clinical Mastery & Clinic Identity Showcase Card (No repeated photo) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-3xl bg-slate-50/80 border border-slate-200/90 p-6 sm:p-8 shadow-elevated relative overflow-hidden">
              
              {/* Subtle gradient light */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Clinic Identity Card */}
              <div className="flex items-center space-x-4 pb-6 border-b border-slate-200/80">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white p-1 border border-slate-200 shadow-xs flex-shrink-0">
                  <Image
                    src={siteConfig.logo.image}
                    alt={siteConfig.logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="text-xs uppercase tracking-wider font-bold text-teal-600 block">
                    Chief Dental Surgeon
                  </span>
                  <h3 className="text-xl font-bold text-navy-900 font-display">
                    {siteConfig.doctor.honorific}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    M.D.S &bull; Consultant Endodontist
                  </p>
                </div>
              </div>

              {/* Speciality Badge Highlights */}
              <div className="py-6 space-y-4 text-left">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-navy-900 font-display">
                      Endodontic Specialization
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Advanced precision root canal treatments and microscopic conservative restorations.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-navy-900 font-display">
                      15 Years Clinical Practice
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Extensive multi-speciality diagnosis and treatments serving the Bhubaneswar community.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-navy-900 font-display">
                      Patient-Centric Approach
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Transparent procedure walkthroughs with a warm, reassuring treatment environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Practice Callout */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Location:</span>
                <span>Saheed Nagar, Bhubaneswar</span>
              </div>

            </div>
          </div>

          {/* Right Column (7 cols): Left-aligned Section Header, Narrative Bio & Credentials Grid */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            
            {/* Section Eyebrow + Heading + Short Intro (Strict Left-Aligned Pattern) */}
            <div className="text-left space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-teal-600" />
                <span>About Lead Dentist</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight font-display max-w-xl text-left">
                Expertise You Can Trust. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-sky-600">
                  Care You Can Feel.
                </span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-lg text-left pt-1">
                Meet the dental specialist dedicated to patient comfort, tooth preservation, and evidence-based clinical treatments.
              </p>
            </div>

            {/* Narrative Bio */}
            <div className="space-y-3.5 text-left text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                With a strong academic foundation and over 15 years of clinical practice, <strong className="text-navy-900">Professor Dr. Swagat Panda</strong> provides comprehensive dental solutions tailored to every patient’s comfort and long-term oral well-being.
              </p>
              <p>
                Specializing in Endodontics and Conservative Dentistry, Dr. Panda focuses on preserving natural tooth structure through gentle, accurate, and transparent procedures. Every visit begins with attentive listening and a shared understanding of your treatment options.
              </p>
            </div>

            {/* Clinical Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-left">
                  <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-700 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Qualifications & Degrees Grid */}
            <div className="pt-3 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 text-left">
                Educational Qualifications & Credentials
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                {credentials.map((cred, idx) => {
                  const Icon = cred.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-teal-300 transition-colors text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-2">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="font-bold text-navy-900 text-sm">{cred.title}</div>
                      <div className="text-xs font-semibold text-teal-600">{cred.institution}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section CTA */}
            <div className="pt-2 text-left">
              <a
                href="#appointment"
                className="btn-primary inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm shadow-soft"
              >
                <CalendarCheck className="w-4 h-4 text-teal-400" />
                <span>Consult with Dr. Swagat Panda</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
