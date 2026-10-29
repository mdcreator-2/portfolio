"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 z-10 border-t border-white/8 bg-[#040507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Metadata & Clock */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-mono-code text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-300 font-medium">BIHTA CLOCK: {time}</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <span>B.TECH ECE-VLSI // NIT PATNA</span>
        </div>

        {/* Center: Attribution */}
        <div className="text-center font-mono-code text-xs text-slate-500">
          Handcrafted by <span className="text-slate-300">Mohammad Ameer Siddiqui</span> with Next.js, Three.js & Tailwind CSS.
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/8 text-xs font-mono-code text-slate-400 hover:text-white transition-all"
        >
          <span>RETURN TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
