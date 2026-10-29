"use client";

import React, { useState } from "react";
import { Cpu, Server, Boxes, GitBranch, Terminal, CheckCircle } from "lucide-react";
import { skillCategories } from "../../data/portfolioData";

export default function TechRadarSection() {
  const [selectedCluster, setSelectedCluster] = useState(0);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-emerald-400" />;
      case "Boxes":
        return <Boxes className="w-5 h-5 text-teal-400" />;
      case "GitBranch":
        return <GitBranch className="w-5 h-5 text-cyan-400" />;
      default:
        return <Terminal className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="radar" className="relative py-28 z-10 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono-code text-xs mb-3">
              <span>// CHAPTER 03</span>
              <span>•</span>
              <span>SKILL CONSTELLATION</span>
            </div>
            <h2 className="font-display-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              TECHNICAL MATRIX.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm font-light leading-relaxed">
            Zero superficial buzzwords. Each competency represents code shipped, systems deployed, or hardware analyzed in the lab.
          </p>
        </div>

        {/* 4 Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl glass-panel relative flex flex-col justify-between transition-all duration-300 hover:border-sky-400/40 cursor-pointer ${
                selectedCluster === idx
                  ? "border-sky-400/50 shadow-lg shadow-sky-500/10 bg-slate-900/80"
                  : "border-white/8"
              }`}
              onClick={() => setSelectedCluster(idx)}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    {getIcon(cat.icon)}
                  </div>
                  <span className="font-mono-code text-[11px] text-slate-500">
                    0{idx + 1} // MATRIX
                  </span>
                </div>

                <h3 className="font-heading-title text-lg font-bold text-white mb-4">
                  {cat.category}
                </h3>

                <div className="space-y-3 mb-6">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-slate-950/50 border border-white/5 flex items-center justify-between"
                    >
                      <span className="text-xs font-mono-code text-slate-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono-code text-emerald-400/90 bg-emerald-500/10 px-2 py-0.5 rounded">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/8 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
                <span>{cat.skills.length} COMPETENCIES</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ECE-VLSI Technical Callout Ribbon */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-sky-950/40 via-slate-900/40 to-emerald-950/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div className="font-mono-code text-xs text-slate-300">
              <span className="text-white font-semibold">ACADEMIC FOUNDATION:</span> Signals & Systems, Frequency Analysis, Logic Optimization, CMOS & Hardware Security at NIT Patna.
            </div>
          </div>
          <a
            href="https://leetcode.com/u/mdcreator/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono-code text-sky-400 hover:text-sky-300 underline underline-offset-4 shrink-0"
          >
            VIEW LEETCODE PROFILE (140+ SOLVED) →
          </a>
        </div>

      </div>
    </section>
  );
}
