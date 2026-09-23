"use client";

import { useState, useEffect } from "react";
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  MessageCircle, 
  Info,
  CalendarCheck,
  ShieldCheck,
  Check
} from "lucide-react";
import { siteConfig, getAppointmentWhatsAppUrl, getGeneralWhatsAppUrl } from "@/config/siteConfig";

export default function AppointmentForm({ selectedService, setSelectedService }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "Morning (11:00 AM – 02:00 PM)",
    service: selectedService || "General Consultation",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [serviceHighlighted, setServiceHighlighted] = useState(false);

  // Sync selectedService prop with formData
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
      setServiceHighlighted(true);
      const timer = setTimeout(() => setServiceHighlighted(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [selectedService]);

  // Set min date to today
  const today = new Date().toISOString().split("T")[0];

  const serviceOptions = [
    "General Consultation",
    "Root Canal Treatment",
    "Dental Implant",
    "Cosmetic Dentistry",
    "Smile Designing",
    "Teeth Whitening",
    "Pediatric Dentistry",
    "Orthodontic Braces",
    "Surgical Extraction",
    "Dental Bridge and Crowns",
    "Fixed & Removal Denture",
    "Teeth Scaling Polishing",
  ];

  const timeOptions = [
    "Morning (11:00 AM – 02:00 PM)",
    "Afternoon (02:00 PM – 05:00 PM)",
    "Evening (05:00 PM – 08:00 PM)",
    "Sunday (By Prior Appointment)",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact phone number.";
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.date) {
      newErrors.date = "Please select a preferred appointment date.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a dental service.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmittedData({ ...formData });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "Morning (11:00 AM – 02:00 PM)",
      service: "General Consultation",
      message: "",
    });
  };

  return (
    <section id="appointment" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 12-Column Grid: Left Column 4 cols + Right Form Card 8 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start text-left">
          
          {/* Left Column (4 cols): Left-Aligned Header Block & Clinic Assistance Card */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="space-y-3 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider text-left">
                <span>Direct Scheduling</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight font-display text-left max-w-sm">
                Schedule Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-sky-600">
                  Dental Visit
                </span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed text-left max-w-sm">
                Request an in-person consultation with Professor Dr. Swagat Panda at our Saheed Nagar clinic.
              </p>
            </div>

            {/* Direct Helpline Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft space-y-4 text-left">
              <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider text-left">
                Need Immediate Assistance?
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed text-left">
                You can also call or message our desk directly for quick slot availability and general inquiries.
              </p>
              
              <div className="space-y-2.5 pt-1 text-left">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 transition-colors text-left"
                >
                  <Phone className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="text-xs font-bold">{siteConfig.contact.displayPhone}</span>
                </a>

                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 transition-colors text-left"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-bold">Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Privacy & Hygiene Guarantee */}
            <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-100 text-xs text-teal-900 flex items-start space-x-2.5 text-left">
              <ShieldCheck className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
              <span>
                Your health details are treated with strict medical confidentiality and care.
              </span>
            </div>
          </div>

          {/* Right Column (8 cols): Appointment Form Card (strictly left-aligned inputs and labels) */}
          <div className="lg:col-span-8 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-elevated relative text-left">
              
              {/* Disclaimer Notice */}
              <div className="mb-8 p-3.5 rounded-xl bg-sky-50/80 border border-sky-100 flex items-start space-x-3 text-sky-900 text-xs sm:text-sm text-left">
                <Info className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <span className="text-left">
                  <strong>Note:</strong> This form sends an appointment request. Our clinic desk will confirm the final slot with you directly on phone or WhatsApp.
                </span>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                    
                    {/* Full Name */}
                    <div className="text-left">
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 text-left">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rajesh Mohapatra"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
                            errors.name
                              ? "border-rose-400 focus:ring-rose-200 bg-rose-50/30"
                              : "border-slate-200 focus:border-teal-500 focus:ring-teal-100 bg-slate-50/50"
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 text-left">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="text-left">
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 text-left">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 7008249985"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
                            errors.phone
                              ? "border-rose-400 focus:ring-rose-200 bg-rose-50/30"
                              : "border-slate-200 focus:border-teal-500 focus:ring-teal-100 bg-slate-50/50"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 text-left">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email (Optional) */}
                    <div className="text-left">
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 text-left">
                        Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. name@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 bg-slate-50/50 text-sm transition-colors"
                        />
                      </div>
                    </div>

                    {/* Dental Service Dropdown */}
                    <div className="text-left">
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs sm:text-sm font-bold text-slate-700 text-left">
                          Select Dental Service <span className="text-rose-500">*</span>
                        </label>
                        {serviceHighlighted && (
                          <span className="text-[11px] font-bold text-teal-700 bg-teal-100/90 px-2.5 py-0.5 rounded-full animate-bounce">
                            ✓ Auto-Selected
                          </span>
                        )}
                      </div>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-300 ${
                          serviceHighlighted
                            ? "border-teal-500 ring-4 ring-teal-100 bg-teal-50/50 font-semibold text-teal-900"
                            : "border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 bg-slate-50/50"
                        }`}
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 text-left">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.service}
                        </p>
                      )}
                    </div>

                    {/* Preferred Date */}
                    <div className="text-left">
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 text-left">
                        Preferred Date <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <input
                          type="date"
                          name="date"
                          min={today}
                          value={formData.date}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
                            errors.date
                              ? "border-rose-400 focus:ring-rose-200 bg-rose-50/30"
                              : "border-slate-200 focus:border-teal-500 focus:ring-teal-100 bg-slate-50/50"
                          }`}
                        />
                      </div>
                      {errors.date && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 text-left">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.date}
                        </p>
                      )}
                    </div>

                    {/* Preferred Time */}
                    <div className="text-left">
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 text-left">
                        Preferred Time Slot <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Clock className="w-4 h-4" />
                        </div>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 bg-slate-50/50 text-sm transition-colors"
                        >
                          {timeOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                  </div>

                  {/* Message / Dental Concern */}
                  <div className="text-left">
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 text-left">
                      Dental Concern / Message <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe any specific symptoms (e.g. tooth pain, sensitivity, smile consultation, routine scaling)..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 bg-slate-50/50 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2 text-left">
                    <button
                      type="submit"
                      className="btn-primary w-full py-4 px-6 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-base shadow-elevated flex items-center justify-center space-x-2"
                      id="submit-appointment-btn"
                    >
                      <Send className="w-5 h-5" />
                      <span>Request Appointment</span>
                    </button>
                    <p className="text-left text-xs text-slate-500 mt-3">
                      Fast response during clinic hours (Mon–Sat 11:00 AM – 08:00 PM).
                    </p>
                  </div>
                </form>
              ) : (
                /* Submission Success & WhatsApp Transfer Card */
                <div className="text-left py-4 space-y-6 animate-in fade-in duration-300">
                  <div className="flex items-center space-x-3 text-emerald-600">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center shadow-xs">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-navy-900 font-display text-left">
                        Appointment Request Prepared!
                      </h3>
                      <p className="text-xs text-slate-500 text-left">
                        Ready for instant WhatsApp confirmation
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 text-left">
                    Thank you, <strong className="text-navy-900">{submittedData?.name}</strong>. For instant confirmation, please forward your appointment details directly to our clinic WhatsApp desk below.
                  </p>

                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <div><strong>Patient:</strong> {submittedData?.name} ({submittedData?.phone})</div>
                    <div><strong>Service:</strong> {submittedData?.service}</div>
                    <div><strong>Date & Time:</strong> {submittedData?.date} &bull; {submittedData?.time}</div>
                    {submittedData?.message && <div><strong>Note:</strong> {submittedData?.message}</div>}
                  </div>

                  {/* Direct WhatsApp Action Button */}
                  <div className="space-y-3 pt-2 text-left">
                    <a
                      href={getAppointmentWhatsAppUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-elevated flex items-center justify-center space-x-2.5"
                      id="whatsapp-confirm-btn"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <span>Send Details on WhatsApp</span>
                    </a>

                    <button
                      onClick={handleReset}
                      className="text-xs font-semibold text-slate-500 hover:text-navy-900 underline py-2 block text-left"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
