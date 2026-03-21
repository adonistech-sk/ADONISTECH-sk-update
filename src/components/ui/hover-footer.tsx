"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const inViewRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(inViewRef, { once: false, amount: 0.3 });
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={(node) => {
        (svgRef as React.MutableRefObject<SVGSVGElement | null>).current = node;
        (inViewRef as React.MutableRefObject<SVGSVGElement | null>).current = node;
      }}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={`select-none uppercase cursor-pointer ${className || ""}`}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="25%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="75%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-700 font-[helvetica] text-7xl font-bold"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-purple-500/60 font-[helvetica] text-7xl font-bold"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={isInView ? {
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        } : {
          strokeDashoffset: 1000,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};

const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #0F0F1166 50%, #7c3aed33 100%)",
      }}
    />
  );
};

export default function HoverFooter() {
  const footerLinks = [
    {
      title: "Služby",
      links: [
        { label: "Web Stránky & E-shopy", href: "/sluzby#web-stranky" },
        { label: "Dizajn Produktov", href: "/sluzby#dizajn-produktov" },
        { label: "Automatizované Systémy", href: "/sluzby#automatizovane-systemy" },
        { label: "Vizuálna Identita", href: "/sluzby#vizualna-identita" },
      ],
    },
    {
      title: "Spoločnosť",
      links: [
        { label: "O nás", href: "/o-nas" },
        { label: "Portfólio", href: "/portfolio" },
        { label: "FAQ", href: "/#faq" },
        { label: "Kontakt", href: "/kontakt" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={22} className="text-purple-400" />,
      text: "adonistech.sk@gmail.com",
      href: "mailto:adonistech.sk@gmail.com",
    },
    {
      icon: <Phone size={22} className="text-purple-400" />,
      text: "+421 950 280 922",
      href: "tel:+421950280922",
    },
    {
      icon: <MapPin size={22} className="text-purple-400" />,
      text: "Nitra, Slovensko",
    },
  ];

  return (
    <footer className="relative h-fit rounded-3xl overflow-hidden m-4 md:m-8 bg-zinc-900/30 border border-white/5">
      <div className="max-w-7xl mx-auto p-8 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <img src="https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/AdonisTech%20(3)-Photoroom%20(1).webp" alt="Adonistech" className="h-[8.5rem]" />
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Tvoríme moderné webové stránky, aplikácie a digitálne riešenia pre rast vášho biznisu.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={() => {
                        if (link.href.includes('#')) {
                          const hash = link.href.split('#')[1];
                          setTimeout(() => {
                            const el = document.getElementById(hash);
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }, 500);
                        } else {
                          window.scrollTo(0, 0);
                        }
                      }}
                      className="text-zinc-400 hover:text-purple-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Kontakt
            </h4>
            <ul className="space-y-5">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-zinc-300 hover:text-purple-400 transition-colors text-base font-medium"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-zinc-300 text-base font-medium">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10 my-8" />

        {/* Footer bottom */}
        <div className="flex justify-center items-center text-sm">
          <p className="text-zinc-500 text-center">
            &copy; {new Date().getFullYear()} Adonistech. Všetky práva vyhradené.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="ADONIS" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
