import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CATEGORIES: string[] = [];

const PROJECTS = [
  {
    title: "Super Chill",
    category: "Webové Stránky",
    tags: ["Web Dizajn", "Vzdelávanie"],
    description: "Moderná vzdelávacia platforma s čistým dizajnom a intuitívnou navigáciou pre online kurzy.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_lv6slflv6slflv6s.webp",
    year: "2025",
    link: "https://superchill.org/en/",
  },
  {
    title: "Volta Yachts",
    category: "E-shopy",
    tags: ["E-commerce", "Obchodná Platforma"],
    description: "Luxusná obchodná platforma pre predaj a prenájom jácht s pokročilým filtrom a rezervačným systémom.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_ooakeuooakeuooak.webp",
    year: "2025",
    link: "https://www.voltayachts.com/",
  },
  {
    title: "Joi Planner",
    category: "Dizajn",
    tags: ["UI/UX", "Produktivita"],
    description: "Produktová aplikácia na plánovanie úloh s minimalistickým dizajnom a výkonným backendovým systémom.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_gy97pqgy97pqgy97.webp",
    year: "2024",
    link: "https://joi.software/",
  },
  {
    title: "Vimcosmo",
    category: "Webové Stránky",
    tags: ["Web Dizajn", "Krása a Kozmetika"],
    description: "Elegantná prezentačná stránka pre kozmetický salón s online rezerváciou a galériou prác.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_jt5p9cjt5p9cjt5p.webp",
    year: "2024",
    link: "https://vimcosmo.com/",
  },
  {
    title: "Cylinder",
    category: "Webové Stránky",
    tags: ["Web Dizajn", "Produkt"],
    description: "Minimalistická produktová stránka s dôrazom na vizuálnu prezentáciu a moderný dizajn.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_932hmj932hmj932h%20(1).webp",
    year: "2025",
    link: "https://cylinderhealth.com/",
  },
  {
    title: "Portfolio",
    category: "Dizajn",
    tags: ["UI/UX", "Portfólio"],
    description: "Kreatívne portfólio s dynamickým layoutom a plynulými animáciami pre maximálny vizuálny dojem.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_w6ktn8w6ktn8w6ktSN%20(1).webp",
    year: "2025",
    link: "https://samuelnduka.com/",
  },
  {
    title: "Matcha Ren",
    category: "E-shopy",
    tags: ["E-commerce", "Zdravie"],
    description: "Elegantný e-shop pre prémiovú matcha značku s prepracovaným produktovým katalógom.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_l3m0p8l3m0p8l3m0%20(1).webp",
    year: "2025",
    link: "https://www.matcharen.com/",
  },
  {
    title: "Amprit Palace",
    category: "Webové Stránky",
    tags: ["Web Dizajn", "Hotelierstvo"],
    description: "Luxusná prezentačná stránka pre hotelový komplex s rezervačným systémom a galériou.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_flzflqflzflqflzffff%20(1).webp",
    year: "2025",
    link: "https://amritpalace.com/",
  },
  {
    title: "Codex",
    category: "Webové Stránky",
    tags: ["Web Dizajn", "Technológie"],
    description: "Moderná technologická platforma s čistým rozhraním a intuitívnou navigáciou.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_c9khpmc9khpmc9kh%20(1).webp",
    year: "2025",
    link: "https://www.codex.io/",
  },
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <div className="relative min-h-screen font-sans text-white">
        <Helmet>
          <title>Portfólio | AdonisTech — Naše projekty</title>
          <meta name="description" content="Prezrite si naše najlepšie projekty — moderné webové stránky, e-shopy a digitálne riešenia pre firmy na Slovensku." />
          <link rel="canonical" href="https://adonistech.sk/portfolio" />
          <meta property="og:title" content="Portfólio | AdonisTech — Naše projekty" />
          <meta property="og:description" content="Prezrite si naše najlepšie projekty — moderné webové stránky, e-shopy a digitálne riešenia pre firmy na Slovensku." />
          <meta property="og:url" content="https://adonistech.sk/portfolio" />
          <meta name="keywords" content="portfólio webových stránok, naše projekty, web dizajn ukážky, referencie, AdonisTech projekty, webové stránky pre firmy" />
        </Helmet>
        {/* Hero / Header */}
        <div className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-[14vw] md:text-[10vw] lg:text-[8vw] font-display font-bold uppercase tracking-tighter leading-none bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent mb-6">
                Portfólio
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-white max-w-2xl leading-relaxed"
            >
              Výber z našich najlepších projektov. Každý web, dizajn a systém je výsledkom úzkej spolupráce s klientom.
            </motion.p>
          </div>
        </div>


        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-32">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    {/* Browser Header */}
                    <div className="flex items-center justify-between bg-zinc-800 rounded-t-2xl border border-b-0 border-zinc-600 px-5 py-4">
                      <div className="flex items-baseline gap-3">
                        <h3 className="text-xl font-display font-bold text-white">
                          {project.title}
                        </h3>
                        <span className="text-sm text-zinc-300">/ {project.tags[0]}</span>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-zinc-500" />
                        <div className="w-3 h-3 rounded-full bg-zinc-500" />
                        <div className="w-3 h-3 rounded-full bg-zinc-500" />
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative rounded-b-2xl overflow-hidden border border-t-0 border-zinc-600 aspect-[16/10]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                      />

                      {/* Hover Overlay */}
                      <div className={`absolute inset-0 bg-zinc-950/80 backdrop-blur-sm flex flex-col justify-end p-6 transition-opacity duration-300 ${hoveredIndex === i ? "opacity-100" : "opacity-0"}`}>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-medium rounded-full border border-white/30 text-white"
                            >
                              {tag}
                            </span>
                          ))}
                          <span className="px-3 py-1 text-xs font-medium rounded-full border border-white/30 text-zinc-300">
                            {project.year}
                          </span>
                        </div>
                        <p className="text-base text-white leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-2 text-white font-semibold text-base">
                          Zobraziť projekt
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {!showAll && PROJECTS.length > 4 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-12 flex justify-center"
            >
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 bg-white text-zinc-900 px-10 py-4 rounded-full font-bold text-base hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.03] transition-all duration-300 active:scale-[0.98]"
              >
                Zobraziť Viac
              </button>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 pb-32"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-10 md:p-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-4"
            >
              Máte projekt na mysli?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg text-white max-w-xl mx-auto mb-8"
            >
              Povedzte nám o vašom nápade a my ho premeníme na realitu.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link to="/kontakt" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full font-semibold text-sm hover:scale-[1.02] transition-transform active:scale-[0.98]">
                Bezplatná Konzultácia
              </Link>
            </motion.div>
          </div>
        </motion.div>
    </div>
  );
}
