"use client";

import React, { useState } from "react";
import { ArrowUpRight, Code, Cpu, Terminal } from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons";
import { flagshipProjects } from "../../data/portfolioData";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [inspectedProjectId, setInspectedProjectId] = useState(null);

  const filteredProjects = activeFilter === "all"
    ? flagshipProjects
    : activeFilter === "featured"
    ? flagshipProjects.filter((p) => p.featured)
    : flagshipProjects.filter((p) =>
        p.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <section id="projects" className="relative py-28 z-10 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 font-mono-code text-xs mb-3">
              <span>// CHAPTER 02</span>
              <span>•</span>
              <span>ENGINEERING CASE STUDIES</span>
            </div>
            <h2 className="font-display-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              PROVEN ARCHITECTURES.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/60 border border-white/8 backdrop-blur-md">
            {[
              { id: "all", label: "ALL BUILDS" },
              { id: "featured", label: "FLAGSHIPS" },
              { id: "fastapi", label: "BACKEND / IOT" },
              { id: "three.js", label: "3D & SPATIAL" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all ${
                  activeFilter === f.id
                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Case Studies Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => {
            const isInspected = inspectedProjectId === project.id;

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl glass-panel p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-sky-400/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/10 transition-colors" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Title, Metrics & Story */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    
                    {/* Badge & Index Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono-code text-xs text-sky-400 font-medium">
                        [{String(index + 1).padStart(2, "0")}]
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono-code text-slate-300">
                        {project.badge}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-[10px] font-mono-code text-emerald-300">
                          FEATURED
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="font-heading-title text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                    
                    {/* Tagline */}
                    <div className="text-sm font-mono-code text-emerald-400 mb-4">
                      {project.tagline}
                    </div>

                    {/* Detailed Narrative Description */}
                    <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Architecture Flow Box */}
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/8 mb-6 font-mono-code text-xs text-slate-300 flex items-center gap-2 overflow-x-auto">
                      <Terminal className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="text-slate-500 font-bold shrink-0">DATAFLOW:</span>
                      <span className="text-sky-300/90 whitespace-nowrap">{project.architecture}</span>
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
                      {project.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-2.5 rounded-lg bg-white/3 border border-white/6 text-left"
                        >
                          <div className="text-[10px] font-mono-code text-slate-400 uppercase">
                            {m.label}
                          </div>
                          <div className="text-xs sm:text-sm font-heading-title font-semibold text-slate-100">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-400/40 text-slate-200 text-xs font-mono-code transition-all"
                        >
                          <GithubIcon className="w-3.5 h-3.5 text-sky-400" />
                          <span>SOURCE REPOSITORY</span>
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/30 text-sky-300 text-xs font-mono-code font-medium transition-all"
                        >
                          <span>LIVE DEPLOYMENT</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <button
                        onClick={() =>
                          setInspectedProjectId(isInspected ? null : project.id)
                        }
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-slate-200 text-xs font-mono-code transition-all"
                      >
                        <Code className="w-3.5 h-3.5" />
                        <span>{isInspected ? "HIDE SPECS" : "INSPECT SPECS"}</span>
                      </button>
                    </div>

                  </div>

                  {/* Right Column: Interactive Schematic / Tech Blueprint */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full bg-slate-950/60 p-6 rounded-xl border border-white/8 relative">
                    
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/8 font-mono-code text-[11px] text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-sky-400" />
                        SYSTEM SPECIFICATION
                      </span>
                      <span className="text-emerald-400">STATUS: VERIFIED</span>
                    </div>

                    {isInspected ? (
                      <div className="space-y-3 font-mono-code text-xs text-slate-300 mb-6 bg-slate-900/80 p-4 rounded-lg border border-sky-500/20">
                        <div className="text-sky-300 font-semibold mb-2">
                          // ARCHITECTURAL NOTES:
                        </div>
                        <p className="text-slate-400 font-light text-[11px] leading-relaxed">
                          • Strict separation of concerns following clean domain patterns.
                        </p>
                        <p className="text-slate-400 font-light text-[11px] leading-relaxed">
                          • Asynchronous non-blocking event loops for high-concurrency ingestion.
                        </p>
                        <p className="text-slate-400 font-light text-[11px] leading-relaxed">
                          • Containerized via Docker Compose with deterministic networking.
                        </p>
                      </div>
                    ) : (
                      <div className="py-6 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500/10 to-emerald-500/10 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                          <Terminal className="w-8 h-8 text-sky-400" />
                        </div>
                        <span className="font-mono-code text-xs text-slate-300 font-medium mb-1">
                          {project.title} Infrastructure
                        </span>
                        <span className="font-mono-code text-[11px] text-slate-500 max-w-xs">
                          {project.tags.join(" • ")}
                        </span>
                      </div>
                    )}

                    {/* Technology Stack Tags */}
                    <div>
                      <div className="text-[10px] font-mono-code text-slate-500 uppercase tracking-wider mb-2.5">
                        TECHNOLOGY STACK
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-[11px] font-mono-code text-slate-300 hover:text-sky-300 hover:border-sky-400/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
