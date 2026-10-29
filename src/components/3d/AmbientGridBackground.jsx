"use client";

import React from "react";

export default function AmbientGridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 100%)"
        }}
      />

      {/* Atmospheric Ambient Glow Orbs */}
      <div className="absolute -top-[15%] left-[20%] w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[140px] mix-blend-screen" />
      <div className="absolute top-[35%] -right-[10%] w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[140px] mix-blend-screen" />
      <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-cyan-600/6 rounded-full blur-[150px] mix-blend-screen" />

      {/* Noise Texture Layer */}
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
