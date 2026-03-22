import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    title: "Web Stránky\na E-shopy",
    description:
      "Tvoríme moderné webové stránky a výkonné e-shopy, ktoré zaujmú na prvý pohľad a premieňajú návštevníkov na zákazníkov. Od dizajnu po spustenie.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_gmjf5cgmjf5cgmjf.webp",
    link: "/sluzby#web-stranky",
  },
  {
    title: "Dizajn\nProduktov",
    description:
      "Navrhujeme digitálne produkty s dôrazom na používateľský zážitok. Od wireframov cez prototypy až po finálny UI dizajn, ktorý vaši používatelia budú milovať.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_kw1tqqkw1tqqkw1t.webp",
    link: "/sluzby#dizajn-produktov",
  },
  {
    title: "Automatizované\nSystémy",
    description:
      "Automatizujeme vaše firemné procesy a prepájame systémy tak, aby vám šetrili čas, znižovali chybovosť a umožnili škálovanie bez zbytočných nákladov.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_pbieukpbieukpbie.webp",
    link: "/sluzby#automatizovane-systemy",
  },
  {
    title: "Vizuálna\nIdentita",
    description:
      "Vizuálna identita nie je len o estetike. Je to nástroj, ktorý vašu značku odlíši od konkurencie. Každý detail, od farieb po typografiu, formuje spôsob, akým vás zákazníci vnímajú.",
    image: "https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/Gemini_Generated_Image_esllnxesllnxeslltt.webp",
    link: "/sluzby#vizualna-identita",
  },
];

function Card({
  service,
  index,
  progress,
}: {
  service: (typeof SERVICES)[number];
  index: number;
  progress: any;
}) {
  const navigate = useNavigate();
  const total = SERVICES.length;

  // Card appears at its own range, then scales/shifts as later cards stack on top
  const rangeStart = (index + 1) / total;
  const rangeEnd = Math.min((index + 2) / total, 1);

  const scale = useTransform(
    progress,
    [rangeStart, rangeEnd],
    [1, 0.95]
  );

  const y = useTransform(
    progress,
    [rangeStart, rangeEnd],
    [0, -30]
  );

  return (
    <motion.div
      style={{ scale, y, zIndex: index, willChange: 'transform' }}
      className="sticky top-[15vh] sm:top-24 md:top-32 mb-[10vh] sm:mb-[30vh] md:mb-[40vh]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl min-h-[320px] sm:min-h-[420px] md:min-h-[500px]">
        {/* Image - mobile (on top) */}
        <div className="relative bg-zinc-900 overflow-hidden lg:hidden aspect-[16/9]">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Left - White info card */}
        <div className="bg-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between relative">
          <div>
            <div className="flex items-start justify-between gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-20">
              <button
                onClick={() => navigate(service.link)}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center flex-shrink-0 hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <ArrowUpRight className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </button>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-zinc-900 tracking-tight text-right leading-[1.05] whitespace-pre-line">
                {service.title}
              </h3>
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-zinc-500 leading-relaxed max-w-md">
            {service.description}
          </p>
        </div>

        {/* Image - desktop (right side) */}
        <div className="relative bg-zinc-900 overflow-hidden hidden lg:block">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function CardStack() {
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
    offset: ["start start", "end end"],
  });

  const scrollToEnd = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const sectionBottom = window.scrollY + rect.bottom;
      window.scrollTo({ top: sectionBottom, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="relative px-4 md:px-6 pb-8 sm:pb-16 md:pb-32 overflow-clip"
      style={{ minHeight: `${SERVICES.length * (isMobile ? 22 : 60)}vh` }}
    >
      {/* Background glow effect */}
      <div className="absolute bottom-0 left-0 w-[50%] h-[60%] bg-yellow-300/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto pt-16 md:pt-24 mb-12 md:mb-16">
        <h2 className="text-[12vw] md:text-[10vw] font-display font-bold uppercase tracking-tighter leading-none text-center bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent">
          Naše služby
        </h2>
      </div>

      {SERVICES.map((service, i) => (
        <Card key={i} service={service} index={i} progress={scrollYProgress} />
      ))}

    </section>
  );
}
