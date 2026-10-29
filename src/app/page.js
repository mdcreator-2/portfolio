"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import PhilosophySection from "../components/sections/PhilosophySection";
import ProjectsSection from "../components/sections/ProjectsSection";
import TechRadarSection from "../components/sections/TechRadarSection";
import ChronicleSection from "../components/sections/ChronicleSection";
import ContactSection from "../components/sections/ContactSection";
import AmbientGridBackground from "../components/3d/AmbientGridBackground";
import CustomCursor from "../components/ui/CustomCursor";

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "power3.out", duration: 0.85 });

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis;

    if (!reduceMotion) {
      lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 0.9,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const updateLenis = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);
    }

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#060709] text-slate-100 selection:bg-sky-500/30 selection:text-white">
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Atmospheric Ambient Grid & Glow Background */}
      <AmbientGridBackground />

      {/* Fixed Precision Telemetry Navigation Header */}
      <Navbar />

      {/* Editorial Chapter Sequence */}
      <main className="relative z-10">
        <HeroSection />
        <PhilosophySection />
        <ProjectsSection />
        <TechRadarSection />
        <ChronicleSection />
        <ContactSection />
      </main>

      {/* Terminal Footer */}
      <Footer />
    </div>
  );
}
