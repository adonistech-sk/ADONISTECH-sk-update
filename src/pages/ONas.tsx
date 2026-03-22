import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Users,
  Target,
  Heart,
  Lightbulb,
  Award,
  Rocket,
  Globe,
  Code2,
  ArrowRight,
  TrendingDown,
  Palette,
  Zap,
  MessageCircleWarning,
  ShieldAlert,
} from "lucide-react";
import Testimonials from "@/src/components/ui/testimonials";
import { AnimatedText } from "@/src/components/ui/animated-underline-text";
import { Link } from "react-router-dom";

const VALUES = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Orientácia na výsledky",
    description:
      "Každý projekt meriame podľa reálneho dopadu na váš biznis a nie podľa počtu hodín.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Vášeň pre dizajn",
    description:
      "Veríme, že dobrý dizajn nie je luxus, ale nevyhnutnosť. Každý pixel má svoj účel.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Inovatívny prístup",
    description:
      "Sledujeme najnovšie trendy a technológie, aby vaše riešenia boli vždy o krok vpred.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Partnerský vzťah",
    description:
      "Nie sme len dodávateľ ale aj váš digitálny partner. Váš úspech je aj náš úspech.",
  },
];

const STATS = [
  { value: 1, suffix: "+", label: "Roky skúseností" },
  { value: 25, suffix: "+", label: "Dokončených projektov" },
  { value: 25, suffix: "+", label: "Spokojných klientov" },
  { value: 100, suffix: "%", label: "Nasadenie" },
];

function CountUp({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const TIMELINE = [
  {
    year: "2022",
    title: "Začiatok cesty",
    description:
      "Začali sme ako freelance vývojári s víziou vytvárať weby, ktoré robia rozdiel. Prvé projekty pre lokálne firmy.",
  },
  {
    year: "2023",
    title: "Rast a špecializácia",
    description:
      "Rozšírili sme tím a služby o dizajn produktov a automatizáciu. Začali sme spolupracovať s väčšími klientmi.",
  },
  {
    year: "2024",
    title: "Etablovanie značky",
    description:
      "Adonistech sa stal uznávanou agentúrou s desiatkami úspešných projektov a stabilnou klientskou základňou.",
  },
  {
    year: "2025",
    title: "Nová éra",
    description:
      "Zameriavame sa na AI integrácie, pokročilé e-commerce riešenia a expanziu na medzinárodné trhy.",
  },
];

const SKILLS = [
  { name: "Web Development", icon: <Code2 className="w-5 h-5" /> },
  { name: "UI/UX Dizajn", icon: <Lightbulb className="w-5 h-5" /> },
  { name: "E-commerce", icon: <Globe className="w-5 h-5" /> },
  { name: "Branding", icon: <Award className="w-5 h-5" /> },
  { name: "Automatizácia", icon: <Rocket className="w-5 h-5" /> },
];

export default function ONas() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <Helmet>
        <title>O nás | AdonisTech — Náš tím a hodnoty</title>
        <meta name="description" content="Spoznajte tím AdonisTech. Pomáhame firmám rásť cez moderné webové riešenia. Naše hodnoty, misia a prístup k práci." />
        <link rel="canonical" href="https://adonistech.sk/o-nas" />
        <meta property="og:title" content="O nás | AdonisTech — Náš tím a hodnoty" />
        <meta property="og:description" content="Spoznajte tím AdonisTech. Pomáhame firmám rásť cez moderné webové riešenia." />
        <meta property="og:url" content="https://adonistech.sk/o-nas" />
        <meta name="keywords" content="AdonisTech tím, o nás, webová agentúra Nitra, naše hodnoty, digitálna agentúra Slovensko" />
      </Helmet>
      {/* Hero */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[14vw] md:text-[10vw] lg:text-[8vw] font-display font-bold uppercase tracking-tighter leading-none bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent mb-6">
              O nás
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl leading-relaxed">
              Tvoríme digitálne riešenia na mieru, kde sa stretáva precízny dizajn s modernými technológiami. Každý detail má význam a každý projekt je pre nás jedinečný.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="hidden md:block text-sm font-semibold uppercase tracking-widest text-purple-400 mb-4">
                Naša misia
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 leading-tight">
                Pomáhame firmám rásť v digitálnom svete
              </h2>
              <p className="text-lg text-white leading-relaxed mb-6">
                Veríme, že každá firma si zaslúži profesionálnu online
                prítomnosť. Naším poslaním je tvoriť webové stránky, aplikácie a
                digitálne riešenia, ktoré nielen dobre vyzerajú, ale predovšetkým
                prinášajú výsledky.
              </p>
              <p className="text-lg text-zinc-200 leading-relaxed">
                Spájame kreatívny dizajn s modernými technológiami a strategickým
                myslením. Každý projekt berieme osobne a pristupujeme k nemu s
                rovnakým nasadením, akoby bol náš vlastný.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="border border-white/20 rounded-2xl bg-zinc-800/70 backdrop-blur-lg p-4 sm:p-6 md:p-8 text-center hover:border-purple-400/50 transition-colors"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent block mb-2">
                    <CountUp target={stat.value} suffix={stat.suffix} duration={2} />
                  </span>
                  <span className="text-xs sm:text-sm text-white uppercase tracking-wider font-semibold md:whitespace-nowrap">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
              Naše hodnoty
            </h2>
            <p className="text-lg text-white max-w-xl">
              Princípy, ktorými sa riadime pri každom projekte a každej
              spolupráci.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 border border-white/20 rounded-2xl bg-zinc-800/70 backdrop-blur-lg p-8 hover:border-purple-400/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Problémy, ktoré riešime */}
      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-20">
            <AnimatedText
              text="Problémy, ktoré riešime"
              textClassName="text-[8.5vw] sm:text-[6vw] md:text-[4.5vw] font-display font-bold text-center bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent uppercase tracking-tighter leading-none sm:whitespace-nowrap"
              underlineClassName="text-white"
              underlineDuration={3}
            />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Mobile vertical timeline line */}
            <div className="md:hidden absolute left-[19px] top-0 bottom-0 w-0.5 bg-white/20" />
            {/* Desktop vertical center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/30 -translate-x-1/2" />

            <div className="space-y-8 md:space-y-12 pl-14 md:pl-0">
              {[
                { num: "01", title: "Nízke konverzie", description: "Návštevníci sa nemenia na zákazníkov, my to napravíme.", icon: <TrendingDown className="w-6 h-6" /> },
                { num: "02", title: "Zastaralý dizajn", description: "Vaša značka pôsobí zastaralo, my ju posunieme na dnešnú úroveň.", icon: <Palette className="w-6 h-6" /> },
                { num: "03", title: "Pomalé Weby", description: "Rýchlosť ovplyvňuje všetko, my optimalizujeme pre maximálny výkon.", icon: <Zap className="w-6 h-6" /> },
                { num: "04", title: "Nejasný Obsah", description: "Chaos na stránke brzdí predaj, my v tom spravíme poriadok.", icon: <MessageCircleWarning className="w-6 h-6" /> },
                { num: "05", title: "Slabá Online Prítomnosť", description: "Ak ľudia nedôverujú vašej stránke, nebudú dôverovať ani vášmu biznisu.", icon: <ShieldAlert className="w-6 h-6" /> },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex ${i % 2 === 0 ? 'md:justify-start md:pr-[55%]' : 'md:justify-end md:pl-[55%]'}`}
                >
                  {/* Mobile icon on timeline line */}
                  <div className="md:hidden absolute -left-14 top-3 w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-purple-400 z-10">
                    {item.icon}
                  </div>

                  {/* Desktop dot on center line */}
                  <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-zinc-950 z-10" />

                  {/* Desktop icon circle */}
                  <div className={`hidden md:block absolute top-5 z-10 ${i % 2 === 0 ? 'left-[calc(50%+20px)]' : 'right-[calc(50%+20px)]'}`}>
                    <div className="w-14 h-14 rounded-2xl bg-zinc-700/80 flex items-center justify-center text-purple-400">
                      {item.icon}
                    </div>
                  </div>

                  <div className="border border-white/25 rounded-2xl bg-zinc-800/80 backdrop-blur-lg p-5 sm:p-6 md:p-8 hover:border-purple-400/50 transition-colors w-full">
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-400 block mb-1">
                      Krok {item.num}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ako Pracujeme */}
      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <AnimatedText
              text="Ako pracujeme"
              textClassName="text-[10vw] md:text-[6vw] lg:text-[5vw] font-display font-bold uppercase tracking-tighter leading-none bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent"
              underlineClassName="text-white"
              underlineDuration={3}
            />
            <p className="text-xl text-zinc-300 max-w-xl mx-auto mt-6">
              Jednoduchý proces od prvého kontaktu po spustenie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Konzultácia", description: "Začíname rozhovorom o vašich cieľoch, cieľovej skupine a víziách. Pochopíme váš biznis, aby sme navrhli riešenie na mieru." },
              { step: "02", title: "Stratégia & Dizajn", description: "Navrhneme štruktúru, wireframy a vizuálny dizajn. Každý krok konzultujeme s vami, aby výsledok presne sedel." },
              { step: "03", title: "Vývoj", description: "Premeníme dizajn na funkčný produkt s dôrazom na rýchlosť, bezpečnosť a moderné technológie." },
              { step: "04", title: "Spustenie & Podpora", description: "Po dôkladnom testovaní spustíme projekt a poskytneme ongoing podporu, aby všetko fungovalo bezchybne." },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="border border-white/20 rounded-2xl bg-zinc-800/70 backdrop-blur-lg p-8 h-full hover:border-purple-400/50 hover:bg-zinc-800/90 transition-all duration-300">
                  <span className="text-6xl font-display font-bold text-purple-400 block mb-6">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-white/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Výsledky, ktoré hovoria za nás */}
      <Testimonials />

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
            Poďme tvoriť spolu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg text-white max-w-xl mx-auto mb-8"
          >
            Máte nápad alebo projekt? Radi sa s vami stretneme a preberieme, ako
            vám vieme pomôcť.
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
