/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const Portfolio = React.lazy(() => import('@/src/pages/Portfolio'));
const Sluzby = React.lazy(() => import('@/src/pages/Sluzby'));
const WebStranky = React.lazy(() => import('@/src/pages/WebStranky'));
const Kontakt = React.lazy(() => import('@/src/pages/Kontakt'));
const ONas = React.lazy(() => import('@/src/pages/ONas'));
const OchranaOsobnychUdajov = React.lazy(() => import('@/src/pages/OchranaOsobnychUdajov'));
const ObchodnePodmienky = React.lazy(() => import('@/src/pages/ObchodnePodmienky'));
const NotFound = React.lazy(() => import('@/src/pages/NotFound'));
import HeroSection from '@/src/components/ui/glassmorphism-trust-hero';
import ScrollTextSection from '@/src/components/ui/scroll-text-section';
import CardStack from '@/src/components/ui/card-stack';
import WebSteps from '@/src/components/ui/web-steps';
import FeaturedWork from '@/src/components/ui/featured-work';
import Testimonials from '@/src/components/ui/testimonials';
import FAQ from '@/src/components/ui/faq';
import HoverFooter from '@/src/components/ui/hover-footer';
import { MagicText } from '@/src/components/ui/magic-text';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Menu, 
  X,
  ChevronRight,
  Globe,
  Cpu,
  Layers
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.includes('#')) {
      const [, hash] = href.split('#');
      if (location.pathname === '/') {
        // Already on homepage, just scroll
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to homepage first, then scroll after render
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    } else {
      window.scrollTo(0, 0);
    }
  };

  const navLinks = [
    { label: 'Služby', href: '/sluzby', isRoute: true },
    { label: 'Portfólio', href: '/portfolio', isRoute: true },
    { label: 'FAQ', href: '/#faq', isRoute: true },
    { label: 'O nás', href: '/o-nas', isRoute: true },
    { label: 'Kontakt', href: '/kontakt', isRoute: true },
  ];

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'top-4 px-4 lg:px-8' : 'top-0 px-0'}`}>
      <div className={`max-w-7xl mx-auto px-6 h-20 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'bg-zinc-950/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg shadow-black/20' : 'bg-transparent'} ${isMobileMenuOpen ? 'lg:bg-transparent bg-zinc-950/50 backdrop-blur-xl rounded-b-none rounded-t-2xl' : ''}`}>
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src="https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/AdonisTech%20(3)-Photoroom%20(1).webp" alt="Adonistech" className="h-24 lg:h-[6.75rem]" width={200} height={200} loading="eager" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href.includes('#') ? '/' : link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative text-sm font-semibold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-semibold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/kontakt" onClick={() => window.scrollTo(0, 0)} className="bg-white text-zinc-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300">
            Bezplatná Konzultácia
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden bg-zinc-950/50 backdrop-blur-xl overflow-hidden ${isScrolled ? 'rounded-b-2xl' : ''}`}
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href.includes('#') ? '/' : link.href}
                    className="text-base font-semibold uppercase tracking-wider text-zinc-200 hover:text-white"
                    onClick={() => { setIsMobileMenuOpen(false); handleNavClick(link.href); }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-base font-semibold uppercase tracking-wider text-zinc-200 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
                )
              )}
              <hr className="border-white/10" />
              <Link to="/kontakt" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="w-full bg-white text-zinc-900 py-3 rounded-full font-semibold flex items-center justify-center">
                Bezplatná Konzultácia
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Zap className="text-amber-500" />,
      title: "Lightning Fast",
      description: "Our engine processes millions of events per second with sub-millisecond latency."
    },
    {
      icon: <Shield className="text-indigo-500" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and SOC2 compliance out of the box for your peace of mind."
    },
    {
      icon: <Layers className="text-emerald-500" />,
      title: "Modular Design",
      description: "Connect any tool in your stack with our pre-built integrations and robust API."
    },
    {
      icon: <Users className="text-rose-500" />,
      title: "Team Collaboration",
      description: "Built for teams of all sizes. Share workflows, templates, and insights instantly."
    },
    {
      icon: <Cpu className="text-blue-500" />,
      title: "AI Automation",
      description: "Let our AI suggest optimizations and build complex workflows from natural language."
    },
    {
      icon: <Globe className="text-cyan-500" />,
      title: "Global Scale",
      description: "Deploy your workflows across regions with automatic scaling and high availability."
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">Core Capabilities</h2>
          <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Everything you need to scale your operations.</p>
          <p className="text-lg text-slate-600">NexusFlow provides a comprehensive suite of tools designed to handle the most demanding enterprise workflows.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      description: "Perfect for individuals and small side projects.",
      features: ["5 Workflows", "1,000 Events/mo", "Basic Analytics", "Community Support"],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "49",
      description: "For growing teams that need more power and control.",
      features: ["Unlimited Workflows", "50,000 Events/mo", "Advanced Analytics", "Priority Support", "Custom Integrations"],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Advanced features for large-scale organizations.",
      features: ["Unlimited Everything", "Dedicated Account Manager", "SLA Guarantee", "On-premise Options", "Custom Security"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">Pricing</h2>
          <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Simple, transparent pricing for everyone.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-indigo-600 shadow-2xl shadow-indigo-100' : 'border-slate-200'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.description}</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">{plan.price === 'Custom' ? '' : '$'}{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-slate-500 font-medium">/mo</span>}
                </div>
              </div>
              <div className="flex-grow mb-10">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 size={18} className="text-indigo-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const HomePage = () => (
  <>
    <Helmet>
      <title>AdonisTech | Tvorba webových stránok & digitálne riešenia | Nitra</title>
      <meta name="description" content="AdonisTech — profesionálna tvorba webových stránok, e-shopov, aplikácií a digitálnych riešení v Nitre. Bezplatná konzultácia. Moderný dizajn, rýchle dodanie." />
      <link rel="canonical" href="https://adonistech.sk/" />
      <meta property="og:title" content="AdonisTech | Tvorba webových stránok & digitálne riešenia" />
      <meta property="og:description" content="Profesionálna tvorba webových stránok, e-shopov a digitálnych riešení v Nitre. Bezplatná konzultácia." />
      <meta property="og:url" content="https://adonistech.sk/" />
      <meta name="keywords" content="tvorba webových stránok, web dizajn Nitra, digitálna agentúra, AdonisTech, webové riešenia, moderný dizajn, bezplatná konzultácia" />
    </Helmet>
    <main>
      <HeroSection />
      <ScrollTextSection />
      <CardStack />
      <WebSteps />
      <FeaturedWork />

      {/* Magic Text Reveal */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <MagicText
            text="Za každým úspešným biznisom sa skrýva príbeh, vízia a zmysel. My túto víziu pretvárame na značku, ktorá nielen skvele vyzerá, ale aj spája, inšpiruje a rastie."
          />
        </div>
      </section>

      <Testimonials />
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-10 md:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Začnime spolupracovať
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto mb-8">
              Povedzte nám o vašom projekte a my vám pripravíme riešenie na mieru. Prvá konzultácia je zadarmo.
            </p>
            <Link to="/kontakt" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full font-semibold text-sm hover:scale-[1.02] transition-transform active:scale-[0.98]">
              Bezplatná Konzultácia
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 bg-zinc-950">
      <div className="fixed inset-0 z-0 bg-[url(https://ridbtuorcmkjidenxudx.supabase.co/storage/v1/object/public/Public%20main/istockphoto-1405483493-612x612.webp)] bg-cover bg-center opacity-70" />
      <div className="relative z-10">
        <Navbar />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/sluzby" element={<Sluzby />} />
            <Route path="/sluzby/web-stranky" element={<WebStranky />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/o-nas" element={<ONas />} />
            <Route path="/ochrana-osobnych-udajov" element={<OchranaOsobnychUdajov />} />
            <Route path="/obchodne-podmienky" element={<ObchodnePodmienky />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <HoverFooter />
      </div>
    </div>
  );
}
