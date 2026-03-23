import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedText } from "@/src/components/ui/animated-underline-text";
import { Helmet } from "react-helmet-async";

const SERVICES = [
  {
    id: "web-stranky",
    title: "Web Stránky a E-shopy",
    description:
      "Tvoríme moderné webové stránky a výkonné e-shopy, ktoré zaujmú na prvý pohľad a premieňajú návštevníkov na zákazníkov. Od dizajnu po spustenie.",
    image:
      "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_gmjf5cgmjf5cgmjf.webp",
    features: [
      "Príjemný zážitok pre návštevníkov",
      "Jednoduchá orientácia",
      "Obsah, ktorý zaujme",
      "Moderný vzhľad",
      "Plynulé fungovanie bez chýb",
    ],
  },
  {
    id: "dizajn-produktov",
    title: "Dizajn Produktov",
    description:
      "Navrhujeme digitálne produkty s dôrazom na používateľský zážitok. Od wireframov cez prototypy až po finálny UI dizajn, ktorý vaši používatelia budú milovať.",
    image:
      "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_kw1tqqkw1tqqkw1t.webp",
    features: [
      "Silnejší vizuálny dojem",
      "Menej zbytočných úprav",
      "Lepšia použiteľnosť",
      "Vyššia spokojnosť používateľov",
      "Rýchlejšie uvedenie na trh",
    ],
  },
  {
    id: "automatizovane-systemy",
    title: "Automatizované Systémy",
    description:
      "Automatizujeme vaše firemné procesy a prepájame systémy tak, aby vám šetrili čas, znižovali chybovosť a umožnili škálovanie bez zbytočných nákladov.",
    image:
      "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_pbieukpbieukpbie.webp",
    features: [
      "Automatizácia e-mailov a notifikácií",
      "Chatboty a AI asistenti",
      "Menej manuálnej práce",
      "Lepší prehľad o biznise",
      "Viac času na dôležité veci",
    ],
  },
  {
    id: "vizualna-identita",
    title: "Vizuálna Identita",
    description:
      "Vizuálna identita nie je len o estetike. Je to nástroj, ktorý vašu značku odlíši od konkurencie. Každý detail, od farieb po typografiu, formuje spôsob, akým vás zákazníci vnímajú.",
    image:
      "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_esllnxesllnxeslltt.webp",
    features: [
      "Značka, ktorá si vás zapamätá",
      "Jasný a rozpoznateľný štýl",
      "Silný prvý dojem",
      "Konzistentný vzhľad všade",
      "Dizajn, ktorý buduje dôveru",
    ],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Konzultácia",
    description:
      "Začíname rozhovorom o vašich cieľoch, cieľovej skupine a víziách. Pochopíme váš biznis, aby sme navrhli riešenie na mieru.",
  },
  {
    step: "02",
    title: "Stratégia & Dizajn",
    description:
      "Navrhneme štruktúru, wireframy a vizuálny dizajn. Každý krok konzultujeme s vami, aby výsledok presne sedel.",
  },
  {
    step: "03",
    title: "Vývoj",
    description:
      "Premeníme dizajn na funkčný produkt s dôrazom na rýchlosť, bezpečnosť a moderné technológie.",
  },
  {
    step: "04",
    title: "Spustenie & Podpora",
    description:
      "Po dôkladnom testovaní spustíme projekt a poskytneme ongoing podporu, aby všetko fungovalo bezchybne.",
  },
];

export default function Sluzby() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for page to render before scrolling to anchor
      const timer = setTimeout(() => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="relative min-h-screen font-sans text-white">
      <Helmet>
        <title>Služby | AdonisTech — Čo ponúkame</title>
        <meta name="description" content="Webové stránky, e-shopy, dizajn produktov, automatizácia a vizuálna identita. Kompletné digitálne služby od AdonisTech." />
        <link rel="canonical" href="https://adonistech.sk/sluzby" />
        <meta property="og:title" content="Služby | AdonisTech — Čo ponúkame" />
        <meta property="og:description" content="Webové stránky, e-shopy, dizajn produktov, automatizácia a vizuálna identita. Kompletné digitálne služby od AdonisTech." />
        <meta property="og:url" content="https://adonistech.sk/sluzby" />
        <meta name="keywords" content="webové služby, tvorba web stránok, e-shop riešenia, dizajn produktov, automatizácia, vizuálna identita, digitálne služby Slovensko" />
      </Helmet>
      {/* Hero / Header */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-[14vw] md:text-[10vw] lg:text-[8vw] font-display font-bold uppercase tracking-tighter leading-none bg-gradient-to-r from-white to-pink-300 sm:from-purple-400 sm:via-pink-300 sm:to-white bg-clip-text text-transparent mb-6">
              Služby
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-2xl leading-relaxed"
          >
            Komplexné digitálne riešenia pre váš biznis. Od webových stránok cez
            dizajn produktov až po automatizáciu procesov.
          </motion.p>
        </div>
      </div>

      {/* Services Detail */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="space-y-24 md:space-y-32">
          {SERVICES.map((service, i) => (
            <motion.div
              id={service.id}
              key={service.title}
              className="scroll-mt-40"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
              >
                {/* Image */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-5 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-xl text-zinc-100 leading-relaxed mb-8 max-w-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-100 text-base md:text-lg">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <AnimatedText
              text="Ako pracujeme"
              textClassName="text-[10vw] md:text-[6vw] lg:text-[5vw] font-display font-bold uppercase tracking-tighter leading-none bg-gradient-to-r from-white to-pink-300 sm:from-purple-400 sm:via-pink-300 sm:to-white bg-clip-text text-transparent"
              underlineClassName="text-white"
              underlineDuration={3}
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-zinc-300 max-w-xl mx-auto mt-6"
            >
              Jednoduchý proces od prvého kontaktu po spustenie.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="border border-white/20 rounded-2xl bg-zinc-800/70 backdrop-blur-lg p-6 sm:p-8 h-full hover:border-purple-400/50 hover:bg-zinc-800/90 transition-all duration-300">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-purple-400 block mb-4 sm:mb-6">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-white/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
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
            Začnime spolupracovať
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg text-zinc-300 max-w-xl mx-auto mb-8"
          >
            Povedzte nám o vašom projekte a my vám pripravíme riešenie na mieru.
            Prvá konzultácia je zadarmo.
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
