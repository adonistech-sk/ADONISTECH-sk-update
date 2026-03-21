import React from "react";
import { motion } from "motion/react";

const TESTIMONIALS = [
  {
    text: "Vytvorili našu mobilnú aplikáciu presne tak, ako sme si ju predstavovali, dokonca aj lepšie. Komunikácia bola výborná počas celého projektu a termíny boli dodržané.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/client-4.webp",
    name: "Roman Kašák",
    role: "Mobilná aplikácia",
  },
  {
    text: "Spolupráca na tomto projekte bola bezproblémová. Vízia bola jasne pochopená a dizajny skutočne odrážajú identitu mojej značky.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/client-1.webp",
    name: "Daniel Bittner",
    role: "Vzdelávanie",
  },
  {
    text: "Dodali moderný, čistý dizajn a všetko funguje bezchybne.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_uhynnmuhynnmuhyn.webp",
    name: "Simon Malik",
    role: "Reštaurácia",
  },
  {
    text: "Kompletne pretvorili našu webovú stránku. Je rýchlejšia, čistejšia a konvertuje lepšie ako kedykoľvek predtým. Určite odporúčam.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/client-3.webp",
    name: "Sarah S. Clair",
    role: "E-shop",
  },
  {
    text: "Spolupráca bola bezproblémová. Vrelo ho odporúčam každému, kto hľadá talentovaného a spoľahlivého webového vývojára.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/client-2.webp",
    name: "Mark Williams",
    role: "Technológie",
  },
  {
    text: "Naše obchodné procesy sa zlepšili vďaka nádhernému vizuálnemu dizajnu a mimoriadne pozitívnej spätnej väzbe od zákazníkov.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_vmxd7pvmxd7pvmxd.webp",
    name: "Helena Adamcová",
    role: "Kaviareň",
  },
  {
    text: "Sme veľmi spokojní s webovou stránkou, ktorú nám vytvoril. Počas projektu bolo pár drobných úprav, ale zvládol ich rýchlo a profesionálne.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/client-5.webp",
    name: "P & J Macháč",
    role: "Nehnuteľnosti",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[6vw] md:text-[4.5vw] font-display font-bold text-center bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent mb-10 uppercase tracking-tighter leading-none whitespace-nowrap"
      >
        Výsledky, ktoré hovoria za nás
      </motion.p>

      {/* Auto-scrolling marquee */}
      <style>{`
        @keyframes scrollTestimonials {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-testimonials {
          animation: scrollTestimonials 40s linear infinite;
        }
        .animate-testimonials:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="flex overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div className="animate-testimonials flex gap-6 px-3">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[350px] md:w-[400px] rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-zinc-300">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-zinc-200 leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
