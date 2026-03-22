import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function ScrollTextSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["-60%", "20%"] : ["-40%", "10%"]
  );
  const xRight = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["30%", "-50%"] : ["20%", "-30%"]
  );

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 lg:py-36 overflow-hidden"
    >
      <div className="flex flex-col items-center gap-0 leading-[0.95]">
        <motion.div style={{ x: xLeft }} className="whitespace-nowrap">
          <span className="text-[12vw] sm:text-[10vw] font-display font-bold tracking-tighter text-white">
            Vaša vízia,
          </span>
        </motion.div>

        <div className="whitespace-nowrap w-full flex justify-end">
          <span className="inline-block bg-white text-zinc-900 text-[12vw] sm:text-[10vw] font-display font-bold tracking-tighter px-[2vw] py-[0.5vw] rounded-full">
            naše know-how,
          </span>
        </div>

        <motion.div style={{ x: xRight }} className="whitespace-nowrap">
          <span className="text-[12vw] sm:text-[10vw] font-display font-bold tracking-tighter text-white">
            spoločný cieľ
          </span>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-16 md:mt-24 text-left sm:text-center">
        <p className="text-[1.2rem] sm:text-xl md:text-2xl text-white leading-relaxed mb-6">
          Chápeme, že web nie je len vizitka, ale kľúčová súčasť vášho online úspechu. Preto tvoríme moderné webové riešenia, ktoré spájajú atraktívny dizajn s funkčnosťou a výkonom.
        </p>
        <p className="text-[1.2rem] sm:text-xl md:text-2xl text-white leading-relaxed">
          Navrhujeme weby, ktoré zaujmú, premieňajú návštevníkov na zákazníkov a podporujú rast vašej značky. Vy sa sústreďte na biznis, my sa postaráme o zvyšok.
        </p>
      </div>
    </section>
  );
}
