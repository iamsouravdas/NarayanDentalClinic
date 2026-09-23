"use client";

import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { siteConfig, getGeneralWhatsAppUrl } from "@/config/siteConfig";

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={siteConfig.contact.phoneHref}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-800 transition-colors"
          id="mobile-call-btn"
        >
          <Phone className="w-5 h-5 text-navy-800 mb-1" />
          <span className="text-[11px] font-bold">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 active:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors"
          id="mobile-whatsapp-btn"
        >
          <MessageCircle className="w-5 h-5 text-emerald-600 mb-1" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Book Appointment */}
        <a
          href="#appointment"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-teal-600 active:bg-teal-700 text-white shadow-sm transition-colors"
          id="mobile-book-bottom-btn"
        >
          <CalendarCheck className="w-5 h-5 text-white mb-1" />
          <span className="text-[11px] font-bold">Book Visit</span>
        </a>
      </div>
    </div>
  );
}
