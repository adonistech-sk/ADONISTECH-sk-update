import React from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const SECTIONS = [
  {
    title: "1. Prevádzkovateľ",
    body: (
      <>
        <p>
          Prevádzkovateľom, ktorý spracúva vaše osobné údaje, je:
        </p>
        <ul className="mt-3 space-y-1.5 text-zinc-300">
          <li><span className="text-white font-medium">Samuel Utanakachi Nduka - ADONISTECH</span></li>
          <li>IČO: 57 664 447</li>
          <li>Miesto podnikania: Pod Zlatým brehom 786/19, 949 01 Nitra</li>
          <li>Zapísané v Živnostenskom registri Okresného úradu Nitra, č. 430-74391</li>
          <li>
            E-mail:{" "}
            <a href="mailto:adonistech.sk@gmail.com" className="text-purple-300 hover:text-purple-200 transition-colors">
              adonistech.sk@gmail.com
            </a>
          </li>
          <li>
            Telefón:{" "}
            <a href="tel:+421950280922" className="text-purple-300 hover:text-purple-200 transition-colors">
              +421 950 280 922
            </a>
          </li>
        </ul>
        <p className="mt-3">
          Prevádzkovateľ spracúva osobné údaje v súlade s Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR) a
          zákonom č. 18/2018 Z. z. o ochrane osobných údajov.
        </p>
      </>
    ),
  },
  {
    title: "2. Aké údaje spracúvame",
    body: (
      <>
        <p>
          Pri odoslaní kontaktného formulára na tejto stránke spracúvame údaje, ktoré nám dobrovoľne poskytnete:
        </p>
        <ul className="mt-3 space-y-1.5 list-disc list-inside text-zinc-300">
          <li>meno,</li>
          <li>e-mailová adresa,</li>
          <li>obsah vašej správy a údaje o dopytovanej službe či rozpočte.</li>
        </ul>
        <p className="mt-3">
          Nezhromažďujeme citlivé osobné údaje a nevykonávame automatizované rozhodovanie ani profilovanie.
        </p>
      </>
    ),
  },
  {
    title: "3. Účel a právny základ spracúvania",
    body: (
      <p>
        Vaše údaje spracúvame výhradne za účelom vybavenia vášho dopytu, odpovede na vašu správu a prípadnej následnej
        komunikácie ohľadom spolupráce. Právnym základom je vykonanie opatrení pred uzatvorením zmluvy na základe vašej
        žiadosti (čl. 6 ods. 1 písm. b GDPR), prípadne náš oprávnený záujem odpovedať na vaše otázky (čl. 6 ods. 1 písm. f
        GDPR).
      </p>
    ),
  },
  {
    title: "4. Sprostredkovatelia a príjemcovia",
    body: (
      <p>
        Na odoslanie a doručenie správ z kontaktného formulára využívame službu EmailJS (EmailJS, Inc.), ktorá vystupuje
        ako sprostredkovateľ. Vaše údaje neposkytujeme ďalším tretím stranám na marketingové účely ani ich nepredávame.
        Prenos údajov prebieha zabezpečene.
      </p>
    ),
  },
  {
    title: "5. Doba uchovávania",
    body: (
      <p>
        Osobné údaje uchovávame len po dobu nevyhnutnú na vybavenie vášho dopytu a na prípadnú súvisiacu komunikáciu,
        následne ich vymažeme, ak nevznikne zmluvný vzťah alebo iná zákonná povinnosť ich uchovávať.
      </p>
    ),
  },
  {
    title: "6. Vaše práva",
    body: (
      <>
        <p>V súvislosti so spracúvaním osobných údajov máte právo:</p>
        <ul className="mt-3 space-y-1.5 list-disc list-inside text-zinc-300">
          <li>na prístup k svojim osobným údajom,</li>
          <li>na opravu nesprávnych alebo neúplných údajov,</li>
          <li>na vymazanie údajov (právo „na zabudnutie"),</li>
          <li>na obmedzenie spracúvania,</li>
          <li>namietať proti spracúvaniu,</li>
          <li>na prenosnosť údajov,</li>
          <li>
            podať sťažnosť na Úrad na ochranu osobných údajov Slovenskej republiky, ak sa domnievate, že spracúvanie je v
            rozpore s právnymi predpismi.
          </li>
        </ul>
        <p className="mt-3">
          Svoje práva môžete uplatniť e-mailom na{" "}
          <a href="mailto:adonistech.sk@gmail.com" className="text-purple-300 hover:text-purple-200 transition-colors">
            adonistech.sk@gmail.com
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function OchranaOsobnychUdajov() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <Helmet>
        <title>Ochrana osobných údajov | AdonisTech</title>
        <meta name="description" content="Zásady ochrany osobných údajov (GDPR) spoločnosti AdonisTech — ako spracúvame a chránime vaše osobné údaje." />
        <link rel="canonical" href="https://adonistech.sk/ochrana-osobnych-udajov" />
        <meta property="og:title" content="Ochrana osobných údajov | AdonisTech" />
        <meta property="og:description" content="Zásady ochrany osobných údajov (GDPR) spoločnosti AdonisTech." />
        <meta property="og:url" content="https://adonistech.sk/ochrana-osobnych-udajov" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero */}
      <div className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[10vw] md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tighter leading-none bg-gradient-to-r from-white to-pink-300 sm:from-purple-400 sm:via-pink-300 sm:to-white bg-clip-text text-transparent mb-6">
              Ochrana osobných údajov
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed">
              Vaše súkromie je pre nás dôležité. Nižšie nájdete informácie o tom, ako spracúvame a chránime vaše osobné
              údaje v súlade s GDPR.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="pb-28 md:pb-36">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          {SECTIONS.map((section, i) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border border-white/10 rounded-2xl bg-zinc-900/40 backdrop-blur-sm p-6 md:p-8"
            >
              <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4">
                {section.title}
              </h2>
              <div className="text-base text-zinc-300 leading-relaxed space-y-3">
                {section.body}
              </div>
            </motion.section>
          ))}

          <p className="text-sm text-zinc-500">
            Tieto zásady sú platné a účinné od 29. 05. 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
