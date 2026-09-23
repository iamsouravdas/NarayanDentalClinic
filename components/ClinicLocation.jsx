"use client";

import { useState } from "react";
import { 
  MapPin, 
  Clock, 
  Navigation, 
  Copy, 
  Check, 
  MessageCircle, 
  CalendarCheck, 
  Phone,
  Compass
} from "lucide-react";
import { siteConfig, getGeneralWhatsAppUrl } from "@/config/siteConfig";

export default function ClinicLocation() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(siteConfig.contact.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-Aligned Section Header Block */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-teal-600" />
            <span>Clinic Location & Timings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight font-display text-left max-w-xl">
            Visit <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-sky-600">
              Narayan Dental Care
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-lg text-left">
            Conveniently situated in Saheed Nagar, Bhubaneswar with easy access and dedicated clinical care.
          </p>
        </div>

        {/* Location & Timings Asymmetric Grid (Left Address/Timings 5 cols, Right Map 7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* Left: Address & Timings Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
            
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-soft text-left">
              <div className="flex items-start space-x-3.5 text-left">
                <div className="w-11 h-11 rounded-xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-navy-900 font-display text-left">
                    Clinic Address
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed font-medium text-left">
                    <strong className="text-navy-900">{siteConfig.contact.address.line1}</strong>,<br />
                    {siteConfig.contact.address.landmark},<br />
                    {siteConfig.contact.address.area}, {siteConfig.contact.address.city},<br />
                    {siteConfig.contact.address.state} — {siteConfig.contact.address.pincode}
                  </p>

                  {/* Address Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5 mt-5 text-left">
                    <a
                      href={siteConfig.maps.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold shadow-xs"
                      id="get-directions-btn"
                    >
                      <Navigation className="w-3.5 h-3.5 text-teal-400" />
                      <span>Get Directions</span>
                    </a>

                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold shadow-xs transition-colors"
                      id="copy-address-btn"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-soft text-left">
              <div className="flex items-start space-x-3.5 text-left">
                <div className="w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full text-left">
                  <h3 className="text-lg font-bold text-navy-900 font-display text-left">
                    Clinic Timings
                  </h3>
                  
                  {/* Timing Table */}
                  <div className="mt-3 divide-y divide-slate-200 text-xs sm:text-sm text-left">
                    <div className="py-2.5 flex justify-between items-center text-left">
                      <span className="font-semibold text-slate-700">{siteConfig.timings.weekdays}</span>
                      <span className="font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
                        {siteConfig.timings.weekdayHours}
                      </span>
                    </div>
                    <div className="py-2.5 flex justify-between items-center text-left">
                      <span className="font-semibold text-slate-700">{siteConfig.timings.sunday}</span>
                      <span className="font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
                        {siteConfig.timings.sundayHours}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mt-2 italic text-left">
                    *{siteConfig.timings.sundayNote}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-left">
                    <a
                      href="#appointment"
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-teal-700 hover:text-teal-800"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>Schedule Your Visit</span>
                    </a>
                    <a
                      href={getGeneralWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Ask via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Embedded Google Map Frame (7 cols) */}
          <div className="lg:col-span-7 h-full min-h-[360px] sm:min-h-[440px]">
            <div className="relative w-full h-full min-h-[380px] rounded-3xl overflow-hidden border border-slate-200 shadow-elevated bg-slate-100">
              <iframe
                title="Narayan Dental Care Saheed Nagar Bhubaneswar Location Map"
                src={siteConfig.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              {/* Map Floating Card */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-md border border-slate-200 max-w-xs text-xs pointer-events-none hidden sm:block text-left">
                <p className="font-bold text-navy-900 text-left">{siteConfig.clinicName}</p>
                <p className="text-slate-500 text-[11px] mt-0.5 text-left">Plot No-9, Saheed Nagar, Bhubaneswar</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
