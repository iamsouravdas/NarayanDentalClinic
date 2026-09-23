"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DoctorProfile from "@/components/DoctorProfile";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import PatientExperience from "@/components/PatientExperience";
import AppointmentForm from "@/components/AppointmentForm";
import ClinicLocation from "@/components/ClinicLocation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileActionBar from "@/components/MobileActionBar";

export default function Home() {
  const [selectedService, setSelectedService] = useState("General Consultation");

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
    const appointmentEl = document.getElementById("appointment");
    if (appointmentEl) {
      appointmentEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Doctor Section */}
        <DoctorProfile />

        {/* 3. Dental Services Section */}
        <ServicesGrid onSelectService={handleSelectService} />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Patient Experience & Journey */}
        <PatientExperience />

        {/* 6. Appointment Booking Form */}
        <AppointmentForm 
          selectedService={selectedService} 
          setSelectedService={setSelectedService} 
        />

        {/* 7. Clinic Location & Working Hours */}
        <ClinicLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <FloatingWhatsApp />
      <MobileActionBar />
    </div>
  );
}
