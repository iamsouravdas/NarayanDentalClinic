"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/config/siteConfig";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 md:bottom-7 right-5 z-40 flex items-center group">
      
      {/* Tooltip banner */}
      {showTooltip && (
        <div className="hidden sm:flex items-center space-x-2 mr-3 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold py-1.5 px-3 rounded-xl shadow-elevated border border-slate-200 animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Chat on WhatsApp</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-1"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Pulsing Trigger Button */}
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Direct WhatsApp Consultation"
        id="floating-whatsapp-btn"
      >
        {/* Radar wave effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 -z-10" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
}
