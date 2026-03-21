import React, { useState } from "react";
import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "Koľko stojí vytvorenie webovej stránky?",
    answer:
      "Cena závisí od rozsahu projektu, funkcií a dizajnu. Jednoduché prezentačné weby začínajú od 800 €, komplexnejšie riešenia s e-commerce alebo vlastnými funkciami sa pohybujú od 2 000 € vyššie. Po konzultácii vám pripravíme presnú cenovú ponuku.",
  },
  {
    question: "Ako dlho trvá vytvorenie webu?",
    answer:
      "Štandardná webová stránka je hotová do 10 dní. Väčšie projekty ako e-shopy alebo aplikácie môžu trvať niekoľko týždňov. Presný harmonogram nastavíme po úvodnej konzultácii podľa vašich potrieb.",
  },
  {
    question: "Pomôžete mi aj s obsahom a textami?",
    answer:
      "Áno, ponúkame služby copywritingu a tvorby obsahu v slovenčine aj angličtine. Vieme pripraviť texty, ktoré sú optimalizované pre vyhľadávače a zároveň oslovujú vašich zákazníkov.",
  },
  {
    question: "Pre aké typy klientov je spolupráca vhodná?",
    answer:
      "Spolupracujeme s malými aj veľkými firmami, startupmi, e-shopmi aj freelancermi. Každý projekt prispôsobujeme individuálnym potrebám klienta bez ohľadu na veľkosť.",
  },
  {
    question: "Viete prerobiť moju existujúcu stránku namiesto novej?",
    answer:
      "Samozrejme. Redizajn existujúcej stránky je bežná služba. Zanalyzujeme váš aktuálny web, zachováme to, čo funguje, a vylepšíme dizajn, výkon aj používateľský zážitok.",
  },
  {
    question: "Riešite aj registráciu domény a hosting?",
    answer:
      "Áno, pomôžeme vám s výberom a registráciou domény aj s nastavením hostingu. Poradíme vám najlepšie riešenie podľa veľkosti a potrieb vášho projektu.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 md:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-[12vw] md:text-[10vw] lg:text-[6vw] font-display font-bold uppercase tracking-tighter leading-none bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent">
              Odpovede,
              <br />
              ktoré
              <br />
              hľadáte
            </h2>
          </motion.div>

          {/* Right - Accordion */}
          <div className="space-y-0 divide-y divide-zinc-700">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-start gap-4 py-6 text-left"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center mt-0.5">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-zinc-900" />
                      ) : (
                        <Plus className="w-4 h-4 text-zinc-900" />
                      )}
                    </div>
                    <span className="text-base md:text-lg font-bold text-white uppercase tracking-wide">
                      {faq.question}
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-12 pb-6 text-sm md:text-base text-zinc-200 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
