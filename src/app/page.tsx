"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Analytics } from "@/components/Analytics";
import { initPerformanceMonitoring } from "@/lib/performance";

export default function Home() {
  useEffect(() => {
    initPerformanceMonitoring();
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* Services Section */}
      <section id="services">
        <Services />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      
      {/* FAQ Section */}
      <section id="faq">
        <FAQ />
      </section>
      
      {/* CTA Section */}
      <CTA />
      
      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Analytics */}
      <Analytics />
    </main>
  );
}
