"use client";

import React, { useState } from "react";
import { Copy, Check, Send, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "../ui/BrandIcons";
import { personalInfo } from "../../data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [copiedAcademic, setCopiedAcademic] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [transmissionStatus, setTransmissionStatus] = useState("idle");

  const copyEmail = (email, type) => {
    navigator.clipboard.writeText(email);
    if (type === "academic") {
      setCopiedAcademic(true);
      setTimeout(() => setCopiedAcademic(false), 2000);
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleTransmit = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setTransmissionStatus("sending");
    setTimeout(() => {
      setTransmissionStatus("sent");
      window.location.href = `mailto:${personalInfo.emails.primary}?subject=Inquiry from ${encodeURIComponent(
        formState.name || "Portfolio Visitor"
      )}&body=${encodeURIComponent(formState.message)}`;
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28 z-10 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 font-mono-code text-xs mb-3">
              <span>// CHAPTER 05</span>
              <span>•</span>
              <span>THE TRANSMISSION TERMINAL</span>
            </div>
            <h2 className="font-display-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              INITIATE CONTACT.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm font-light leading-relaxed">
            Direct dispatch to Ameer Siddiqui. Available for high-impact software engineering roles, distributed systems, and spatial 3D builds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Terminal Box */}
          <div className="lg:col-span-7 glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono-code text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-slate-300 font-semibold">terminal.sh // telemetry</span>
              </div>
              <span className="text-emerald-400">STATUS: READY</span>
            </div>

            <form onSubmit={handleTransmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono-code text-slate-400 uppercase tracking-wider mb-2">
                  TRANSMITTER NAME //
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova (Tech Lead)"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white font-mono-code text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-400 uppercase tracking-wider mb-2">
                  DISPATCH EMAIL //
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. elena@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white font-mono-code text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-400 uppercase tracking-wider mb-2">
                  PACKET PAYLOAD / MESSAGE //
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Discussing engineering opportunities, distributed backend systems, or interactive 3D platforms..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white font-mono-code text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-600 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={transmissionStatus === "sending"}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 font-heading-title font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 active:scale-[0.99]"
              >
                {transmissionStatus === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>ENCRYPTING & DISPATCHING...</span>
                  </>
                ) : transmissionStatus === "sent" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>PACKET TRANSMITTED SUCCESSFULLY</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT DISPATCH PAYLOAD</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Direct Channels & Verification */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/8 hover:border-sky-400/40 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  PRIMARY CONTACT
                </span>
                <span className="text-[10px] font-mono-code text-emerald-400">INSTANT DISPATCH</span>
              </div>
              <div className="font-mono-code text-sm sm:text-base text-white font-semibold mb-4 select-all">
                {personalInfo.emails.primary}
              </div>
              <button
                onClick={() => copyEmail(personalInfo.emails.primary, "primary")}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-code text-slate-300 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIED TO CLIPBOARD" : "COPY EMAIL"}</span>
              </button>
            </div>

            {/* Academic Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/8 hover:border-emerald-400/40 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  ACADEMIC AFFILIATION (NIT PATNA)
                </span>
                <span className="text-[10px] font-mono-code text-slate-500">ECE-VLSI DEPT</span>
              </div>
              <div className="font-mono-code text-xs sm:text-sm text-white font-medium mb-4 select-all">
                {personalInfo.emails.academic}
              </div>
              <button
                onClick={() => copyEmail(personalInfo.emails.academic, "academic")}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-code text-slate-300 transition-all"
              >
                {copiedAcademic ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedAcademic ? "COPIED TO CLIPBOARD" : "COPY ACADEMIC EMAIL"}</span>
              </button>
            </div>

            {/* Location & Presence Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading-title font-semibold text-white text-sm">
                    {personalInfo.location}
                  </div>
                  <div className="font-mono-code text-[11px] text-slate-400">
                    25.62° N, 84.88° E • Bihar, India
                  </div>
                </div>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Social Links Matrix */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 hover:border-sky-400/40 flex flex-col items-center justify-center gap-1.5 text-slate-300 hover:text-white transition-all group"
              >
                <GithubIcon className="w-5 h-5 text-slate-400 group-hover:text-sky-400 transition-colors" />
                <span className="font-mono-code text-[11px]">GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 hover:border-sky-400/40 flex flex-col items-center justify-center gap-1.5 text-slate-300 hover:text-white transition-all group"
              >
                <LinkedinIcon className="w-5 h-5 text-slate-400 group-hover:text-sky-400 transition-colors" />
                <span className="font-mono-code text-[11px]">LinkedIn</span>
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 hover:border-sky-400/40 flex flex-col items-center justify-center gap-1.5 text-slate-300 hover:text-white transition-all group"
              >
                <LeetCodeIcon className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                <span className="font-mono-code text-[11px]">LeetCode</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
