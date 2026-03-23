import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    title: "Super Chill",
    tags: "Vzdelávanie",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_lv6slflv6slflv6s.webp",
  },
  {
    title: "Volta Yachts",
    tags: "Obchodná Platforma, ",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_ooakeuooakeuooak.webp",
  },
  {
    title: "Joi Planner",
    tags: "Produktivita",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_gy97pqgy97pqgy97.webp",
  },
  {
    title: "Vimcosmo",
    tags: "Krása a Kozmetika",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_jt5p9cjt5p9cjt5p.webp",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[12vw] md:text-[10vw] font-display font-bold uppercase tracking-tighter leading-none text-center bg-gradient-to-r from-white to-pink-300 sm:from-purple-400 sm:via-pink-300 sm:to-white bg-clip-text text-transparent mb-16 md:mb-20"
        >
          Portfólio
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Header bar */}
              <div className="flex items-center justify-between bg-zinc-800/80 backdrop-blur-sm rounded-t-2xl border border-b-0 border-zinc-700 px-5 py-3">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-lg font-display font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-zinc-400">/ {project.tags}</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-600" />
                  <div className="w-3 h-3 rounded-full bg-zinc-600" />
                  <div className="w-3 h-3 rounded-full bg-zinc-600" />
                </div>
              </div>

              {/* Image */}
              <div className="relative rounded-b-2xl overflow-hidden border border-t-0 border-zinc-700 aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)} className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:opacity-80 transition-all">
            Zobraziť všetky
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
