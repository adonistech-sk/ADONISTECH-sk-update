import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ExternalLink,
  Check,
  Globe,
  ShoppingCart,
  Smartphone,
  Search,
  Gauge,
  Lock,
  Palette,
  Code2,
  BarChart3,
} from "lucide-react";

const FEATURES = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Responzívny dizajn",
    description:
      "Každá stránka vyzerá perfektne na mobile, tablete aj desktope. Žiadne kompromisy.",
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-commerce riešenia",
    description:
      "Kompletné e-shopy s platobnou bránou, správou produktov a automatickými notifikáciami.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO optimalizácia",
    description:
      "Technické SEO, rýchle načítanie a štruktúrované dáta pre lepšie pozície vo vyhľadávačoch.",
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: "Vysoký výkon",
    description:
      "Optimalizované stránky s rýchlym načítaním pod 2 sekundy. Žiadne zbytočné spomalenia.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Bezpečnosť",
    description:
      "SSL certifikáty, ochrana pred útokmi a pravidelné zálohy. Vaše dáta sú v bezpečí.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Unikátny dizajn",
    description:
      "Žiadne šablóny. Každý web navrhujeme od nuly podľa vašej značky a cieľovej skupiny.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Moderné technológie",
    description:
      "React, Next.js, Tailwind CSS a ďalšie moderné nástroje pre najlepší výsledok.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytika & Konverzie",
    description:
      "Google Analytics, sledovanie konverzií a A/B testovanie pre maximálny výkon vášho webu.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "PWA podpora",
    description:
      "Progresívne webové aplikácie, ktoré fungujú aj offline a pôsobia ako natívna appka.",
  },
];

const PACKAGES = [
  {
    name: "Prezentačný web",
    price: "od 800 €",
    description: "Ideálne pre živnostníkov a malé firmy, ktoré potrebujú profesionálnu online prítomnosť.",
    features: [
      "Až 5 podstránok",
      "Responzívny dizajn",
      "Kontaktný formulár",
      "SEO základy",
      "SSL certifikát",
      "CMS pre správu obsahu",
    ],
    highlighted: false,
  },
  {
    name: "Firemný web",
    price: "od 1 500 €",
    description: "Pre rastúce firmy, ktoré potrebujú viac funkcií, stránok a pokročilé riešenia.",
    features: [
      "Až 15 podstránok",
      "Pokročilý dizajn na mieru",
      "Blog a novinky sekcia",
      "Pokročilé SEO",
      "Napojenie na CRM",
      "Viacjazyčná podpora",
      "Analytické dashboardy",
    ],
    highlighted: true,
  },
  {
    name: "E-shop",
    price: "od 2 000 €",
    description: "Kompletné e-commerce riešenie s platobnou bránou a správou objednávok.",
    features: [
      "Neobmedzený počet produktov",
      "Platobná brána (Stripe, GP)",
      "Správa objednávok",
      "Automatické emaily",
      "Skladové hospodárstvo",
      "Zľavové kupóny",
      "Napojenie na dopravcov",
      "Fakturačný systém",
    ],
    highlighted: false,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Analýza & Konzultácia",
    description:
      "Stretneme sa (online alebo osobne) a prejdeme si vaše ciele, cieľovú skupinu a konkurenciu. Na základe toho pripravíme stratégiu.",
  },
  {
    step: "02",
    title: "Wireframy & Prototyp",
    description:
      "Navrhneme štruktúru stránok a interaktívny prototyp, ktorý si môžete vyskúšať ešte pred vývojom.",
  },
  {
    step: "03",
    title: "Vizuálny dizajn",
    description:
      "Vytvoríme finálny dizajn v Figma — každú stránku, komponent a interakciu. Všetko schválite pred vývojom.",
  },
  {
    step: "04",
    title: "Vývoj & Testovanie",
    description:
      "Zakódujeme web s dôrazom na výkon, bezpečnosť a SEO. Dôkladne testujeme na všetkých zariadeniach.",
  },
  {
    step: "05",
    title: "Spustenie & Podpora",
    description:
      "Po finálnom schválení web spustíme. Poskytneme zaškolenie a ongoing technickú podporu.",
  },
];

const TECHNOLOGIES = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js",
  "Shopify", "WordPress", "Supabase", "Stripe", "Figma",
];

export default function WebStranky() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <Helmet>
        <title>Tvorba web stránok & e-shopov | AdonisTech</title>
        <meta name="description" content="Profesionálny vývoj webových stránok a e-shopov na mieru. Od návrhu po spustenie za 7 dní. Moderné technológie, responzívny dizajn." />
        <link rel="canonical" href="https://adonistech.sk/sluzby/web-stranky" />
        <meta property="og:title" content="Tvorba web stránok & e-shopov | AdonisTech" />
        <meta property="og:description" content="Profesionálny vývoj webových stránok a e-shopov na mieru. Od návrhu po spustenie za 7 dní." />
        <meta property="og:url" content="https://adonistech.sk/sluzby/web-stranky" />
        <meta name="keywords" content="tvorba web stránok na mieru, tvorba e-shopov, responzívny web dizajn, webová stránka pre firmu, e-shop Slovensko, moderné webové technológie" />
      </Helmet>
      {/* Hero */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-purple-400 mb-4">
              01 — Naše služby
            </span>
            <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-display font-bold uppercase tracking-tighter leading-[0.9] bg-gradient-to-r from-white to-pink-300 sm:from-purple-400 sm:via-pink-300 sm:to-white bg-clip-text text-transparent mb-8">
              Web Stránky
              <br />
              & E-shopy
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-relaxed mb-10"
          >
            Tvoríme moderné webové stránky a výkonné e-shopy, ktoré zaujmú na
            prvý pohľad a premieňajú návštevníkov na zákazníkov.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link to="/kontakt" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full font-semibold text-sm hover:scale-[1.02] transition-transform active:scale-[0.98]">
              Bezplatná Konzultácia
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[21/9]"
        >
          <img
            src="https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_gmjf5cgmjf5cgmjf.webp"
            alt="Web Stránky a E-shopy"
            className="w-full h-full object-cover"
            width={1200}
            height={514}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
              Čo všetko dostanete
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl">
              Každý web, ktorý vytvoríme, obsahuje tieto kľúčové vlastnosti pre
              maximálny úspech vášho podnikania.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm p-5 sm:p-7 hover:border-purple-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 group-hover:bg-purple-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
              Ako prebieha spolupráca
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl">
              Od prvého kontaktu po spustenie webu. Transparentný proces v 5
              krokoch.
            </p>
          </motion.div>

          <div className="space-y-0">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-4 sm:gap-8 py-8 border-b border-white/10 group"
              >
                <span className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white/10 group-hover:text-purple-500/30 transition-colors w-14 sm:w-20 flex-shrink-0">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
              Cenové balíky
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl">
              Vyberte si balík, ktorý najlepšie zodpovedá vašim potrebám.
              Každý projekt prispôsobujeme na mieru.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  pkg.highlighted
                    ? "border-2 border-purple-500/50 bg-purple-500/5"
                    : "border border-white/10 bg-white/5"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Najpopulárnejší
                  </div>
                )}
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-display font-bold text-white mb-3">
                  {pkg.price}
                </div>
                <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all ${
                    pkg.highlighted
                      ? "bg-white text-zinc-900 hover:bg-zinc-200"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  Začať projekt
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
              Technológie, ktoré používame
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-4"
          >
            {TECHNOLOGIES.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-full border border-white/15 text-zinc-300 text-xs sm:text-sm font-semibold hover:border-purple-500/30 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA */}
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
            Pripravení na nový web?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg text-zinc-300 max-w-xl mx-auto mb-8"
          >
            Povedzte nám o vašom projekte a do 24 hodín vám pošleme nezáväznú
            cenovú ponuku.
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
