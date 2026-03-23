import React from "react";
import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";
import { AnimatedText } from "@/src/components/ui/animated-underline-text";

const STEPS = [
  {
    label: "KROK 1",
    title: "Zákazník príde",
    description:
      "Má reálny záujem, klikol na reklamu alebo dostal odporúčanie. Strávili ste peniaze aj čas, aby sa sem dostal, a teraz máte len pár sekúnd na to, aby ste ho presvedčili, že je na správnom mieste.",
  },
  {
    label: "KROK 2",
    title: "Nenájde odpovede",
    description:
      "Pozerá sa na stránku, no niečo mu nesedí. Nerozumie presne, čo robíte, pre koho to je ani prečo by si mal vybrať práve vás. Hľadá istotu, ale namiesto nej nachádza otázniky a práve v tejto chvíli začína váhať.",
  },
  {
    label: "KROK 3",
    title: "Odíde ku konkurencii",
    description:
      "Bez emócie zatvorí stránku a otvorí ďalšiu. Nezanechá žiadnu stopu, žiadny kontakt. Nie preto, že by konkurencia bola lepšia, ale preto, že bola jasnejšia a urobila rozhodnutie jednoduchším.",
  },
];

export default function WebSteps() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 md:mb-20">
          <AnimatedText
            text="Takto prichádzate o zákazníkov"
            textClassName="text-[8.5vw] sm:text-[6vw] md:text-[4.5vw] font-display font-bold uppercase tracking-tighter leading-tight sm:leading-none text-center bg-gradient-to-r from-white to-pink-300 sm:from-purple-400 sm:via-pink-300 sm:to-white bg-clip-text text-transparent sm:whitespace-nowrap"
            underlineClassName="text-white"
            underlineDuration={3}
          />
        </div>

        {/* Dark backdrop for readability */}
        <div className="bg-zinc-950/60 backdrop-blur-md rounded-3xl p-5 sm:p-8 md:p-12">
          {/* Timeline */}
          <div className="relative mb-12">
            {/* Line */}
            <div className="hidden md:block absolute top-3 left-0 right-0 h-0.5 bg-white/40" />

            {/* Dots + Steps */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
              {/* Mobile vertical timeline line */}
              <div className="md:hidden absolute left-[7px] top-2 bottom-2 w-0.5 bg-white/40" />

              {STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  className="relative pl-10 md:pl-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  {/* Dot */}
                  <div className="hidden md:flex w-6 h-6 rounded-full border-[3px] border-white bg-white mb-8" />
                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-0 top-1 w-4 h-4 rounded-full bg-white" />

                  <p className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-3">
                    {step.label}
                  </p>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-base text-zinc-300 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Result banner */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl px-6 md:px-8 py-5 flex items-center justify-center gap-4 max-w-3xl mx-auto">
            <AlertCircle className="w-6 h-6 text-pink-400 flex-shrink-0" />
            <p className="text-base md:text-lg font-medium text-white">
              Výsledok?{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent font-semibold">
                Neprišli ste o návštevnosť. Prišli ste o zákazníkov.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
