"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { personalInfo } from "../../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "philosophy", "projects", "radar", "chronicle", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#060709]/85 backdrop-blur-xl border-b border-white/8 py-3.5 shadow-2xl shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Status */}
        <div
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3.5 cursor-pointer group"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-sky-400/50 transition-colors">
            <span className="font-mono-code font-bold text-xs text-sky-400">AS</span>
            <div className="absolute inset-0 bg-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex flex-col">
            <span className="font-heading-title font-semibold text-sm tracking-tight text-slate-100 group-hover:text-sky-300 transition-colors">
              M. Ameer Siddiqui
            </span>
            <div className="flex items-center gap-1.5 text-[10px] font-mono-code text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>NIT PATNA // ECE-VLSI</span>
            </div>
          </div>
        </div>

        {/* Navigation Items (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-900/60 border border-white/8 backdrop-blur-lg">
          {[
            { id: "hero", label: "00. CORE" },
            { id: "philosophy", label: "01. SIGNAL" },
            { id: "projects", label: "02. WORKS" },
            { id: "radar", label: "03. RADAR" },
            { id: "chronicle", label: "04. TIMELINE" },
            { id: "contact", label: "05. TRANSMIT" },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono-code transition-all ${
                  isActive
                    ? "bg-sky-500/15 text-sky-300 border border-sky-400/30 shadow-sm shadow-sky-500/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-sky-400/40 hover:bg-sky-500/10 transition-all"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-sky-400/40 hover:bg-sky-500/10 transition-all"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 hover:border-sky-400 text-sky-300 text-xs font-mono-code font-medium transition-all shadow-sm shadow-sky-500/10"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">TRANSMIT</span>
          </button>
        </div>
      </div>
    </header>
  );
}
