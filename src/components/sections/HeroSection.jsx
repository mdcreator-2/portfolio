"use client";

import React from "react";
import { ArrowDown, Terminal, Cpu, ShieldCheck, Sparkles } from "lucide-react";
import SiliconHeroCanvas from "../3d/SiliconHeroCanvas";
import { personalInfo } from "../../data/portfolioData";

export default function HeroSection() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[100vh] pt-28 pb-16 flex items-center z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Telemetry Status Bar */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 w-fit backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono-code text-[11px] text-emerald-300 font-medium tracking-wide uppercase">
                {personalInfo.status}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display-title text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              BRIDGING <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">SILICON</span> & SPATIAL SYSTEMS.
            </h1>

            {/* Subheading Narrative */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-light">
              Hi, I’m <strong className="font-semibold text-white">Mohammad Ameer Siddiqui</strong>. B.Tech ECE-VLSI at <span className="text-sky-300">NIT Patna</span>. I architect distributed backends, IoT edge pipelines, and real-time interactive 3D WebGL / VR environments.
            </p>

            {/* Core Metrics Deck */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/50 border border-white/8 backdrop-blur-sm hover:border-sky-500/30 transition-colors"
                >
                  <div className="text-xs font-mono-code text-slate-400 uppercase tracking-wider mb-1">
                    {stat.label}
                  </div>
                  <div className="text-base sm:text-lg font-heading-title font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 font-heading-title font-bold text-sm tracking-wide transition-all shadow-lg shadow-sky-500/20 active:scale-[0.98]"
              >
                <span>EXPLORE WORKS</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-400/40 text-slate-200 font-heading-title font-semibold text-sm transition-all"
              >
                <Terminal className="w-4 h-4 text-sky-400" />
                <span>TERMINAL</span>
              </button>
            </div>

            {/* Technical Sub-tags */}
            <div className="mt-8 pt-6 border-t border-white/8 flex flex-wrap items-center gap-4 text-xs font-mono-code text-slate-400">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-teal-400" />
                <span>ECE-VLSI & IoT</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>FastAPI & TimescaleDB</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Three.js / WebGL</span>
              </span>
            </div>

          </div>

          {/* Right Column: 3D Interactive Stage */}
          <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[520px] lg:h-[620px] flex items-center justify-center">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-sky-500/15 via-emerald-500/10 to-transparent blur-3xl pointer-events-none" />
            <SiliconHeroCanvas />
          </div>

        </div>
      </div>
    </section>
  );
}
