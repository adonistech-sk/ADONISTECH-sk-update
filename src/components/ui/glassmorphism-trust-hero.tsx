import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
} from "lucide-react";
import { WordRotate } from "@/src/components/ui/word-rotate";

const INDUSTRIES = [
  "🛒 E-Commerce",
  "🏡 Nehnuteľnosti",
  "🏥 Zdravotníctvo",
  "🍽️ Reštaurácie",
  "🎓 Vzdelávanie",
  "💼 Financie",
  "💻 Technológie",
  "💪 Fitnes",
  "⚖️ Profesionálne Služby",
];

// --- SUB-COMPONENTS ---
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-xs">{label}</span>
  </div>
);

// --- MAIN COMPONENT ---
export default function HeroSection() {
  return (
    <div className="relative w-full bg-zinc-950 text-white overflow-hidden font-sans">
      {/* 
        SCOPED ANIMATIONS 
      */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite; /* Slower for readability */
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Background Image with Gradient Mask */}
      <div
        className="absolute inset-0 z-0 bg-[url(https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/istockphoto-1405483493-612x612.webp)] bg-cover bg-center opacity-70"
        style={{
          maskImage: "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-6 sm:pt-28 sm:pb-12 sm:px-6 md:pt-36 md:pb-16 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-12 lg:grid-cols-2 items-center min-h-[75vh]">

          {/* --- LEFT COLUMN --- */}
          <div className="flex flex-col justify-center space-y-5 sm:space-y-8">

            {/* Badge */}
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  Líder v dizajne
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1
              className="animate-fade-in delay-200 text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1] uppercase"
            >
              Dizajn<br />
              <span className="bg-gradient-to-br from-white via-white to-[#ffcd75] bg-clip-text text-transparent">
                Ktorý<br className="sm:hidden" /> Prekonáva
              </span><br />
              <WordRotate words={["Hranice", "Limity"]} className="inline-block bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent" />
            </h1>

            {/* Description */}
            <p className="animate-fade-in delay-300 max-w-xl text-base sm:text-xl text-zinc-100 leading-relaxed">
              Sme full-servisová agentúra, ktorá navrhuje a vyvíja weby, aplikácie a digitálne riešenia, pre rast vášho biznisu.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4">
              <Link to="/kontakt" onClick={() => window.scrollTo(0, 0)} className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]">
                Bezplatná Konzultácia
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="flex items-center justify-end">
            <div className="animate-fade-in delay-500 relative w-full scale-[1.15] sm:scale-100 lg:scale-[1.6] lg:translate-x-4 lg:-translate-y-14">
              <img
                src="https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_pctkq4pctkq4pctk-Photoroom.webp"
                alt="Hero visual"
                className="w-full h-auto object-contain drop-shadow-2xl"
                width={1200}
                height={800}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Full-width Marquee */}
        <div
          className="animate-fade-in delay-500 mt-12 relative flex overflow-hidden py-6"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
          }}
        >
          <div className="animate-marquee flex gap-8 sm:gap-12 md:gap-16 whitespace-nowrap px-4">
            {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map((industry, i) => (
              <div
                key={i}
                className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
