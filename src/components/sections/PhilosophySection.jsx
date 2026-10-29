"use client";

import React from "react";
import { Cpu, Layers, Zap, Activity, CheckCircle2 } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-28 z-10 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 font-mono-code text-xs mb-3">
              <span>// CHAPTER 01</span>
              <span>•</span>
              <span>THE SIGNAL PATH</span>
            </div>
            <h2 className="font-display-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              WHY HARDWARE MEETS SYSTEMS.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm font-light leading-relaxed">
            From silicon gate logic and edge sensor arrays to cloud hypertable ingestion and 60 FPS WebGL rendering.
          </p>
        </div>

        {/* Narrative & Philosophy Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Narrative Card */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 via-emerald-400 to-transparent" />
            
            <div className="flex items-center gap-2 font-mono-code text-xs text-emerald-400 mb-6">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>THE TRAJECTORY // 2020 TO PRESENT</span>
            </div>

            <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                My engineering journey didn’t start in an elite bootcamp; it started in <strong className="text-white font-medium">9th grade during the pandemic lockdown</strong>, typing HTML and CSS tags directly on a mobile phone before getting access to a family laptop.
              </p>
              <p>
                That raw curiosity quickly escalated. By age 15, I solo-developed and published <strong className="text-white font-medium">Starwars.io 3D</strong> on the Amazon Appstore, programming enemy AI finite state machines in C# and hosting game servers on Google Cloud VMs.
              </p>
              <p>
                Balancing rigorous academic discipline led to a <strong className="text-sky-300 font-semibold">98.05 percentile in JEE Main</strong> and admission to <strong className="text-white font-medium">NIT Patna’s ECE-VLSI branch</strong>. Rather than remaining in pure software abstraction, studying silicon micro-architecture, frequency transforms, and hardware signals reshaped how I think about computers.
              </p>
              <p>
                Whether architecting sub-50ms IoT pipelines for the <strong className="text-emerald-300 font-medium">Smart India Hackathon</strong> or optimizing 3D spatial draw-calls during my <strong className="text-white font-medium">Astomverse VR internship</strong>, I build software with mechanical sympathy for the hardware underneath.
              </p>
            </div>

            {/* Verification Badges */}
            <div className="mt-8 pt-6 border-t border-white/8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-xs font-mono-code text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero AI Slop</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono-code text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Production Tested</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono-code text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Hardware Aware</span>
              </div>
            </div>
          </div>

          {/* Three Core Disciplines Pillar Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Discipline 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/8 hover:border-sky-400/40 transition-all group">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/20 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading-title font-semibold text-white text-base">
                    01. Low-Level Silicon & Edge
                  </h3>
                  <span className="font-mono-code text-[11px] text-slate-400">
                    ECE-VLSI • Microcontrollers • Signals
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                Knowledge of digital logic, CMOS fundamentals, and ESP32 telemetry gives intuition for memory layout, cache coherency, and bus protocols.
              </p>
            </div>

            {/* Discipline 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/8 hover:border-emerald-400/40 transition-all group">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-400/20 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading-title font-semibold text-white text-base">
                    02. Distributed Backend Systems
                  </h3>
                  <span className="font-mono-code text-[11px] text-slate-400">
                    FastAPI • TimescaleDB • Redis
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                Designing resilient REST & WebSocket APIs, time-series hypertables, role-based access control, and asynchronous task pipelines that handle live loads cleanly.
              </p>
            </div>

            {/* Discipline 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/8 hover:border-teal-400/40 transition-all group">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-400/20 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading-title font-semibold text-white text-base">
                    03. 3D Spatial & Real-Time WebGL
                  </h3>
                  <span className="font-mono-code text-[11px] text-slate-400">
                    Three.js • Unity • Custom Shaders
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                Transforming mathematical coordinate matrices into tactile 3D browser worlds, VR classrooms, and physics simulations running at 60+ FPS.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
