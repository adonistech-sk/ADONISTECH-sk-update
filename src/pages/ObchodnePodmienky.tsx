import React from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const SECTIONS = [
  {
    title: "1. Poskytovateľ služieb",
    body: (
      <>
        <p>Tieto obchodné podmienky upravujú poskytovanie služieb zo strany poskytovateľa:</p>
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
        <p className="mt-3">Poskytovateľ nie je platcom DPH.</p>
      </>
    ),
  },
  {
    title: "2. Predmet služieb",
    body: (
      <>
        <p>Poskytovateľ poskytuje najmä nasledovné služby:</p>
        <ul className="mt-3 space-y-1.5 list-disc list-inside text-zinc-300">
          <li>tvorba webových stránok a e-shopov,</li>
          <li>dizajn produktov a vizuálna identita,</li>
          <li>automatizované systémy a digitálne riešenia,</li>
          <li>reklamné, marketingové a informačné služby.</li>
        </ul>
        <p className="mt-3">
          Presný rozsah, obsah a cena služieb sú vždy dohodnuté individuálne pre každý projekt.
        </p>
      </>
    ),
  },
  {
    title: "3. Objednávka a uzatvorenie zmluvy",
    body: (
      <p>
        Dopyt je možné zaslať prostredníctvom kontaktného formulára, e-mailom alebo telefonicky. Na základe dopytu
        poskytovateľ pripraví individuálnu cenovú ponuku. Zmluvný vzťah vzniká odsúhlasením ponuky a rozsahu prác oboma
        stranami (napr. e-mailom alebo písomnou objednávkou).
      </p>
    ),
  },
  {
    title: "4. Ceny a platobné podmienky",
    body: (
      <p>
        Ceny služieb sú stanovené individuálne podľa rozsahu konkrétneho projektu a sú uvedené v cenovej ponuke. Keďže
        poskytovateľ nie je platcom DPH, uvádzané ceny sú konečné. Platba prebieha na základe vystavenej faktúry v lehote
        jej splatnosti, ak nie je dohodnuté inak.
      </p>
    ),
  },
  {
    title: "5. Dodanie a súčinnosť klienta",
    body: (
      <p>
        Termíny dodania sú dohodnuté individuálne. Klient sa zaväzuje poskytnúť potrebnú súčinnosť a podklady (texty,
        obrázky, prístupy a pod.) v dohodnutom čase. Omeškanie so súčinnosťou zo strany klienta môže primerane predĺžiť
        termín dodania.
      </p>
    ),
  },
  {
    title: "6. Reklamácie",
    body: (
      <p>
        Prípadné vady poskytnutého plnenia je klient oprávnený reklamovať bez zbytočného odkladu e-mailom na{" "}
        <a href="mailto:adonistech.sk@gmail.com" className="text-purple-300 hover:text-purple-200 transition-colors">
          adonistech.sk@gmail.com
        </a>
        . Poskytovateľ vybaví reklamáciu v zákonnej lehote a o jej vybavení klienta informuje.
      </p>
    ),
  },
  {
    title: "7. Alternatívne riešenie sporov",
    body: (
      <p>
        Ak je klientom spotrebiteľ a nie je spokojný s vybavením reklamácie, má právo obrátiť sa na poskytovateľa so
        žiadosťou o nápravu. Ak poskytovateľ na žiadosť odpovie zamietavo alebo neodpovie do 30 dní, spotrebiteľ má právo
        podať návrh na alternatívne riešenie sporu subjektu ARS, ktorým je najmä Slovenská obchodná inšpekcia (
        <a href="https://www.soi.sk" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 transition-colors">
          www.soi.sk
        </a>
        ), prípadne využiť platformu RSO.
      </p>
    ),
  },
  {
    title: "8. Záverečné ustanovenia",
    body: (
      <p>
        Vzťahy neupravené týmito obchodnými podmienkami sa riadia právnym poriadkom Slovenskej republiky, najmä
        Občianskym zákonníkom a Obchodným zákonníkom. Poskytovateľ si vyhradzuje právo tieto podmienky aktualizovať.
      </p>
    ),
  },
];

export default function ObchodnePodmienky() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <Helmet>
        <title>Obchodné podmienky | AdonisTech</title>
        <meta name="description" content="Obchodné podmienky spoločnosti AdonisTech — podmienky poskytovania služieb tvorby webov, dizajnu a digitálnych riešení." />
        <link rel="canonical" href="https://adonistech.sk/obchodne-podmienky" />
        <meta property="og:title" content="Obchodné podmienky | AdonisTech" />
        <meta property="og:description" content="Obchodné podmienky poskytovania služieb spoločnosti AdonisTech." />
        <meta property="og:url" content="https://adonistech.sk/obchodne-podmienky" />
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
              Obchodné podmienky
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed">
              Podmienky, za ktorých poskytujeme naše služby. Odporúčame sa s nimi oboznámiť pred začatím spolupráce.
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
            Tieto obchodné podmienky sú platné a účinné od 29. 05. 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
