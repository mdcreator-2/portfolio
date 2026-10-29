import "./globals.css";

export const metadata = {
  title: "Mohammad Ameer Siddiqui — Systems & 3D Interactive Portfolio",
  description:
    "Mohammad Ameer Siddiqui — B.Tech ECE-VLSI at NIT Patna. Systems Architect, Full-Stack & 3D/VR Engineer. Smart India Hackathon National Finalist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#060709] text-slate-100 antialiased selection:bg-sky-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
