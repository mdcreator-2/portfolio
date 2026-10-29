"use client";

import React from "react";
import { chronicleMilestones } from "../../data/portfolioData";

export default function ChronicleSection() {
  return (
    <section id="chronicle" className="relative py-28 z-10 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-400/20 text-teal-400 font-mono-code text-xs mb-3">
              <span>// CHAPTER 04</span>
              <span>•</span>
              <span>CHRONOLOGICAL TIMELINE</span>
            </div>
            <h2 className="font-display-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              KEY MILESTONES.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm font-light leading-relaxed">
            The formative events, hard-won competitions, and discipline streaks shaping my engineering trajectory.
          </p>
        </div>

        {/* Connected Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {chronicleMilestones.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              
              {/* Illuminated Step Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-sky-400 group-hover:border-emerald-400 group-hover:scale-125 transition-all shadow-sm shadow-sky-400/50" />

              {/* Year Tag */}
              <div className="md:absolute md:-left-32 md:top-1 font-mono-code text-xs text-sky-400 font-bold tracking-wider mb-1 md:mb-0">
                {item.year}
              </div>

              {/* Milestone Card */}
              <div className="p-6 rounded-2xl glass-panel border border-white/8 hover:border-sky-400/30 transition-all">
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <h3 className="font-heading-title font-bold text-lg text-white">
                    {item.title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 font-mono-code text-[11px]">
                    {item.role}
                  </span>
                </div>
                
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
