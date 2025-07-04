"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import { ServicesHeroStyle } from "@/components/sections/ServicesHeroStyle";
import { About } from "@/components/sections/About";
import { Customers } from "@/components/sections/Customers";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { initPerformanceMonitoring } from "@/lib/performance";

export default function Home() {
  useEffect(() => {
    initPerformanceMonitoring();
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <ServicesHeroStyle />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
