import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Clock,
  Instagram,
  Linkedin,
  Facebook,
  ChevronDown,
  CheckCircle,
  Building2,
} from "lucide-react";

const COMPANY_INFO = [
  { label: "Obchodné meno", value: "Samuel Utanakachi Nduka - ADONISTECH" },
  { label: "IČO", value: "57 664 447" },
  { label: "Miesto podnikania", value: "Pod Zlatým brehom 786/19, 949 01 Nitra" },
  {
    label: "Zapísané v",
    value: "Živnostenský register Okresného úradu Nitra, č. 430-74391",
  },
];

function CustomSelect({
  label,
  placeholder,
  options,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative">
      <label className="text-xs font-semibold uppercase tracking-widest text-zinc-300 block mb-2">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full bg-white/[0.08] border rounded-xl px-5 py-3.5 text-left text-sm transition-all flex items-center justify-between gap-2 cursor-pointer ${
          open
            ? "border-purple-400/60 ring-1 ring-purple-400/30"
            : "border-white/15 hover:border-white/25"
        } ${selected ? "text-white" : "text-zinc-400"}`}
      >
        {selected ? selected.label : placeholder}
        <ChevronDown
          className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-2 w-full rounded-xl border border-white/15 bg-zinc-900/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden"
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`w-full text-left px-5 py-3 text-sm transition-colors ${
                  value === opt.value
                    ? "bg-purple-500/20 text-purple-300"
                    : "text-zinc-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const CONTACT_INFO = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "adonistech.sk@gmail.com",
    href: "mailto:adonistech.sk@gmail.com",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Telefón",
    value: "+421 950 280 922",
    href: "tel:+421950280922",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Adresa",
    value: "Nitra, Slovensko",
    href: null,
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: "Pracovná doba",
    value: "Po – Ne: 8:00 – 22:00",
    href: null,
  },
];

const SOCIALS = [
  { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "#" },
  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
  { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "#" },
];

const SERVICE_OPTIONS = [
  "Web Stránka",
  "E-shop",
  "Dizajn Produktov",
  "Automatizácia",
  "Vizuálna Identita",
  "Iné",
];

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          to_email: "adonistech.sk@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormData({ name: "", email: "", service: "", budget: "", message: "" });
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen font-sans text-white">
      <Helmet>
        <title>Kontakt | AdonisTech — Bezplatná konzultácia</title>
        <meta name="description" content="Kontaktujte AdonisTech pre bezplatnú konzultáciu. Napíšte nám alebo zavolajte na +421 950 280 922. Odpovieme do 24 hodín." />
        <link rel="canonical" href="https://adonistech.sk/kontakt" />
        <meta property="og:title" content="Kontakt | AdonisTech — Bezplatná konzultácia" />
        <meta property="og:description" content="Kontaktujte AdonisTech pre bezplatnú konzultáciu. Napíšte nám alebo zavolajte na +421 950 280 922." />
        <meta property="og:url" content="https://adonistech.sk/kontakt" />
        <meta name="keywords" content="kontakt AdonisTech, bezplatná konzultácia, webová agentúra kontakt, cenová ponuka web stránka, kontaktný formulár" />
      </Helmet>
      {/* Hero */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-[14vw] md:text-[10vw] lg:text-[8vw] font-display font-bold uppercase tracking-tighter leading-none bg-gradient-to-r from-white to-pink-300 sm:from-purple-400 sm:via-pink-300 sm:to-white bg-clip-text text-transparent mb-6">
              Kontakt
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-relaxed"
            >
              Máte projekt na mysli? Ozvite sa nám a spoločne ho premeníme na
              realitu. Prvá konzultácia je zadarmo.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left - Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div className="border border-white/15 rounded-3xl bg-zinc-900/60 backdrop-blur-xl p-5 sm:p-8 md:p-10">
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-20 h-20 text-green-400 mb-6" />
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="text-3xl font-display font-bold text-white mb-3"
                    >
                      Ďakujeme za váš záujem!
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="text-lg text-zinc-300 mb-8 max-w-md"
                    >
                      Vašu správu sme prijali a čoskoro sa vám ozveme.
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      onClick={() => setSubmitStatus('idle')}
                      className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/20 transition-all"
                    >
                      Odoslať ďalšiu správu
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                    <h2 className="text-2xl font-display font-bold text-white mb-8">
                      Napíšte nám
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs font-semibold uppercase tracking-widest text-zinc-300 block mb-2">
                            Meno a priezvisko
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Vaše meno"
                            className="w-full bg-white/[0.08] border border-white/15 rounded-xl px-5 py-3.5 text-white placeholder-zinc-400 focus:outline-none focus:border-purple-400/60 focus:ring-1 focus:ring-purple-400/30 transition-all text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold uppercase tracking-widest text-zinc-300 block mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="vas@email.sk"
                            className="w-full bg-white/[0.08] border border-white/15 rounded-xl px-5 py-3.5 text-white placeholder-zinc-400 focus:outline-none focus:border-purple-400/60 focus:ring-1 focus:ring-purple-400/30 transition-all text-sm"
                            required
                          />
                        </div>
                      </div>

                      {/* Service & Budget Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <CustomSelect
                          label="Typ služby"
                          placeholder="Vyberte službu"
                          value={formData.service}
                          onChange={(val) => setFormData({ ...formData, service: val })}
                          options={SERVICE_OPTIONS.map((opt) => ({ value: opt, label: opt }))}
                        />
                        <CustomSelect
                          label="Rozpočet"
                          placeholder="Vyberte rozpočet"
                          value={formData.budget}
                          onChange={(val) => setFormData({ ...formData, budget: val })}
                          options={[
                            { value: "do-1000", label: "Do 1 000 €" },
                            { value: "1000-2500", label: "1 000 – 2 500 €" },
                            { value: "2500-5000", label: "2 500 – 5 000 €" },
                            { value: "5000+", label: "5 000 € a viac" },
                            { value: "neviem", label: "Zatiaľ neviem" },
                          ]}
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-widest text-zinc-300 block mb-2">
                          Správa
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Popíšte váš projekt, ciele a predstavy..."
                          rows={5}
                          className="w-full bg-white/[0.08] border border-white/15 rounded-xl px-5 py-3.5 text-white placeholder-zinc-400 focus:outline-none focus:border-purple-400/60 focus:ring-1 focus:ring-purple-400/30 transition-all text-sm resize-none"
                          required
                        />
                      </div>

                      {/* Error Message */}
                      {submitStatus === 'error' && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm"
                        >
                          Niečo sa pokazilo. Skúste to prosím znova alebo nás kontaktujte telefonicky.
                        </motion.p>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={submitStatus === 'sending'}
                        className="group inline-flex items-center gap-3 bg-white text-zinc-900 px-8 py-4 rounded-full font-semibold text-sm hover:scale-[1.02] transition-transform active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {submitStatus === 'sending' ? 'Odosiela sa...' : 'Odoslať správu'}
                        <Send className={`w-4 h-4 transition-transform ${submitStatus === 'sending' ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right - Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Contact Details Card */}
            <div className="border border-white/15 rounded-3xl bg-zinc-900/60 backdrop-blur-xl p-5 sm:p-8 md:p-10 flex-grow">
              <motion.h2
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="text-2xl font-display font-bold text-white mb-8"
              >
                Kontaktné údaje
              </motion.h2>
              <div className="space-y-7">
                {CONTACT_INFO.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:border-purple-400/50 group-hover:bg-purple-500/20 transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-purple-300 block mb-0.5">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg text-white font-semibold hover:text-purple-300 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-lg text-white font-semibold">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Response */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-8 pt-7 border-t border-white/10"
              >
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  Rýchla odpoveď
                </h3>
                <p className="text-sm text-zinc-200 leading-relaxed">
                  Na každú správu odpovedáme do 24 hodín. Pripadne nás neváhajte kontaktovať telefonicky.
                </p>
              </motion.div>
            </div>

            {/* Company / Billing Details Card */}
            <div className="border border-white/15 rounded-3xl bg-zinc-900/60 backdrop-blur-xl p-5 sm:p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-display font-bold text-white">
                  Firemné údaje
                </h2>
              </div>
              <dl className="space-y-4">
                {COMPANY_INFO.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-purple-300 mb-0.5">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-white font-medium leading-relaxed">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 pt-5 border-t border-white/10 text-xs text-zinc-400">
                Nie sme platcami DPH.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
