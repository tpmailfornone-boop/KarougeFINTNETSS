"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import AnimatedRays from "@/components/ui/animated-rays";
import TwistingRibbon from "@/components/ui/twisting-ribbon";
import ProgramCard from "@/components/ProgramCard";
import SpotlightNavbar from "@/components/ui/spotlight-navbar";
import FounderBrand from "@/components/FounderBrand";
import CoachManish from "@/components/CoachManish";
import Link from "next/link";
import AboutFeatureCard from "@/components/AboutFeatureCard";
import Preloader from "@/components/Preloader";
import InstagramConnect from "@/components/InstagramConnect";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Custom SVG Icons to bypass lucide barrel-optimization SWC bugs
const InstagramLogo = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Phone = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPin = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Clock = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ArrowUpRight = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Menu = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const X = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" x2="6" y1="6" y2="18" />
    <line x1="6" x2="18" y1="6" y2="18" />
  </svg>
);

const galleryItems = [
  {
    id: 1,
    image: "/gallery/IMG_9986.JPG.jpeg",
    title: "Biomechanical Leg Press",
    zone: "STRENGTH ZONE",
    desc: "Engineered for maximum quad isolation, hamstring loading, and lower body power development.",
  },
  {
    id: 3,
    image: "/gallery/IMG_9990.JPG.jpeg",
    title: "Pro Dumbbell Station",
    zone: "FREE WEIGHT ZONE",
    desc: "Premium calibrated dumbbells ranging up to elite training loads with a massive custom rack.",
  },
  {
    id: 4,
    image: "/gallery/IMG_9991.JPG.jpeg",
    title: "Dual Cable Crossover",
    zone: "FUNCTIONAL ZONE",
    desc: "Multi-point pulley station offering variable resistance angles for total-body definition.",
  },
  {
    id: 6,
    image: "/gallery/IMG_9992.JPG.jpeg",
    title: "Elite Strength Floor",
    zone: "STRENGTH & MACHINE ZONE",
    desc: "A comprehensive training environment equipped with heavy-duty cable systems, plate-loaded machinery, and robust free weights for total body transformation.",
  },
  {
    id: 7,
    image: "/gallery/IMG_9995.JPG.jpeg",
    title: "Aerial Yoga Studio",
    zone: "MIND & BODY ZONE",
    desc: "Suspended anti-gravity hammocks designed to decompress the spine and enhance core stability.",
  },
];

export default function Home() {
  const lenis = useLenis();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  // Lock smooth scroll during preloader introduction or lightbox modal
  useEffect(() => {
    if (preloaderActive || selectedImage) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [preloaderActive, selectedImage, lenis]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [gymOpen, setGymOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const checkGymOpen = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinutes = now.getMinutes();
      const totalMinutes = currentHour * 60 + currentMinutes;

      // Gym is open daily from 5:30 AM to 10:30 PM (22:30)
      const openTime = 5 * 60 + 30;   // 330 minutes
      const closeTime = 22 * 60 + 30; // 1350 minutes

      setGymOpen(totalMinutes >= openTime && totalMinutes <= closeTime);
    };

    checkGymOpen();
    const interval = setInterval(checkGymOpen, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("2nd Floor, B Wing, Bhagyashree Apartment, Dr Ambedkar Road, Mulund West, Mumbai 400080");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Gym theme color props for the TwistingRibbon
  const gymRibbonColors = {
    face: "#EF9F27",   // Gold accent
    foldA: "#2A0D12",  // Deep maroon
    foldB: "#EF9F27",  // Gold
    foldC: "#F2EFE9",  // Off-white
  };

  const scrollToSection = (id: string, isMobileClick = false) => {
    const target = `#${id}`;
    if (isMobileClick) {
      setMobileMenuOpen(false);
      setTimeout(() => {
        lenis?.scrollTo(target, { duration: 1.2 });
      }, 150);
    } else {
      lenis?.scrollTo(target, { duration: 1.2 });
    }
  };

  return (
    <div className="min-h-screen bg-gym-black font-sans text-gym-white flex flex-col relative select-none">
      
      {/* Cinematic pre-loader intro overlay with Go Up transition */}
      {preloaderActive && (
        <Preloader onComplete={() => setPreloaderActive(false)} />
      )}
      
      {/* 1. NAV */}
      <header className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-500",
        scrolled
          ? "border-b border-gym-gold/15 bg-gym-black/90 backdrop-blur-md py-2 h-20 sm:h-26 lg:h-32 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "border-b border-transparent bg-transparent py-4 h-24 sm:h-32 lg:h-36"
      )}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              lenis?.scrollTo(0, { duration: 1.2 });
            }}
            className="flex items-center justify-start group relative h-16 sm:h-22 lg:h-32 w-32 sm:w-48 lg:w-64"
          >
            <Image 
              src="/logo.png" 
              alt="Kourage Fitness Logo"
              fill
              sizes="(max-width: 768px) 128px, (max-width: 1024px) 192px, 256px"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>

          {/* Desktop Nav (Spotlight Navbar component restored) */}
          <SpotlightNavbar
            className="hidden md:flex"
            items={[
              { label: "Gallery", href: "#gallery" },
              { label: "Founder", href: "#founder" },
              { label: "Competition", href: "#competition" },
              { label: "Contact", href: "#contact" },
            ]}
            onItemClick={(item) => scrollToSection(item.href.replace("#", ""))}
          />

          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+918169455350"
              className="bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-sm uppercase tracking-widest px-6 py-2.5 hover:bg-transparent hover:text-gym-gold transition-colors duration-300 hover:shadow-[0_0_15px_rgba(239,159,39,0.25)]"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gym-white hover:text-gym-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-bg-primary border-b border-gym-gold/15 px-6 py-10 flex flex-col gap-6 md:hidden z-30 shadow-[0_10px_20px_rgba(239,159,39,0.03)]"
          >
            {["Gallery", "Founder", "Competition", "Contact"].map((item) => {
              const id = item.toLowerCase().replace(" ", "-");
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id, true)}
                  className="font-bebas text-3xl uppercase tracking-wider text-left text-gym-white hover:text-gym-gold transition-colors"
                >
                  {item}
                </button>
              );
            })}
            <hr className="border-border-subtle my-2" />
            <a
              href="tel:+918169455350"
              className="bg-gym-gold text-gym-black font-bebas text-lg uppercase tracking-widest w-full py-4 text-center block"
            >
              Call Now
            </a>
          </motion.div>
        )}
      </header>

      {/* 2. HERO */}
      <section className="relative w-full min-h-[90dvh] md:min-h-[100dvh] flex items-center overflow-hidden border-b-2 border-gym-white/10 bg-gym-black">
        {/* AnimatedRays background layer behind hero */}
        <div className="absolute inset-0 z-0">
          <AnimatedRays className="w-full h-full" />
        </div>
        
        {/* Overlay grid details */}
        <div className="absolute inset-0 z-0 grid-bg-overlay opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20 md:py-32 flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gym-gold mb-6 font-semibold"
          >
            BEST GYM IN MULUND
          </motion.span>
          
          <h1 className="font-bebas text-6xl sm:text-8xl md:text-9xl text-gym-white tracking-wide uppercase leading-[0.85] max-w-4xl select-none">
            Transform Your Body. <br />
            <span className="text-gym-gold relative">Elevate Your Mind.</span>
          </h1>

          <p className="font-inter text-base sm:text-lg md:text-xl text-gym-white/70 max-w-xl mt-8 leading-relaxed">
            Mulund&apos;s most premium fitness experience with expert trainers and world-class equipment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto">
            <a
              href="https://wa.me/918169455350"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-lg uppercase tracking-widest px-10 py-4 hover:bg-transparent hover:text-gym-gold transition-colors duration-300 text-center w-full sm:w-auto"
            >
              Enquire Now &rarr;
            </a>
            <a
              href="tel:+918169455350"
              className="border-2 border-gym-white/20 text-gym-white font-bebas text-lg uppercase tracking-widest px-10 py-4 hover:border-gym-gold hover:text-gym-gold transition-colors duration-300 text-center w-full sm:w-auto"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* 2.5. GYM GALLERY (STATE-OF-THE-ART EQUIPMENT) */}
      <section id="gallery" className="scroll-mt-24 md:scroll-mt-28 py-24 md:py-32 border-b border-border-subtle relative bg-bg-surface overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-bg-overlay opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="w-full flex flex-col items-start mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-gym-gold mb-3 font-semibold">
              PREMIUM TRAINING ENVIRONMENTS
            </span>
            <h2 className="font-bebas text-5xl md:text-7xl text-gym-white uppercase tracking-wider leading-none">
              State-Of-The-Art Equipment
            </h2>
            <p className="font-inter text-sm md:text-base text-gym-white/70 max-w-xl mt-4 leading-relaxed">
              Explore our world-class training zones equipped with top-tier, biomechanically optimized machinery designed to maximize your performance.
            </p>
          </div>

          {/* Responsive Zig-Zag Layout: Alternating Large Images & Text */}
          <div className="flex flex-col gap-16 md:gap-32 w-full mt-10">
            {galleryItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.id} 
                  className={`flex flex-col items-center gap-8 md:gap-16 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Large Image Block (Click to Pop Lightbox) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full md:w-1/2 select-none group cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="relative overflow-hidden border-2 border-gym-white/15 group-hover:border-gym-gold/75 transition-colors duration-500 shadow-xl md:shadow-2xl aspect-[4/3] w-full bg-gym-black/40">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-500 z-10">
                        <span className="font-bebas tracking-widest text-lg bg-gym-gold text-gym-black px-6 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                          VIEW FULL
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Description Block */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
                    className={`w-full md:w-1/2 flex flex-col items-start text-left ${
                      isEven ? "md:items-start md:text-left" : "md:items-end md:text-right"
                    }`}
                  >
                    <span className="font-sans text-xs md:text-sm text-gym-gold uppercase tracking-[0.3em] font-semibold mb-4">
                      {item.zone}
                    </span>
                    <h3 className="font-bebas text-4xl md:text-6xl lg:text-7xl text-gym-white uppercase tracking-wider leading-[0.9] mb-6">
                      {item.title}
                    </h3>
                    <p className="font-inter text-base md:text-lg text-gym-white/70 leading-relaxed max-w-lg">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3.5. FOUNDER & MENTOR (JAGESH PITAJI DAIT & MENTOR) */}
      <FounderBrand />
      
      {/* 3.6. ELITE TRAINING PARTNER (MANISH ADVILKAR) */}
      <CoachManish />

      {/* TWISTING RIBBON DIVIDER #1 (Transition About -> Why Us) */}
      <div className="w-full h-32 md:h-40 bg-bg-primary relative z-20 flex items-center justify-center">
        <TwistingRibbon
          className="w-full h-full"
          waveAmplitude={0.9}
          waveSpeed={0.015}
          twistCycles={5}
          lightColors={gymRibbonColors}
          darkColors={gymRibbonColors}
        />
      </div>

      {/* 5. MOTIVATION STRIP */}
      <section className="bg-gym-gold text-bg-primary py-8 border-y-2 border-bg-primary overflow-hidden relative z-20 flex items-center select-none">
        <div className="w-full flex items-center whitespace-nowrap overflow-hidden">
          {/* Scrolling Ticker Container */}
          <div className="animate-marquee flex gap-8 md:gap-12 font-bebas text-2xl md:text-4xl font-bold uppercase tracking-wider">
            {/* Set 1 */}
            <span className="text-bg-primary">FUEL YOUR FIRE</span>
            <span className="text-bg-primary/45">•</span>
            {[
              "Your only limit is you.",
              "Push harder than yesterday.",
              "Discipline beats motivation.",
              "Sweat today. Shine tomorrow.",
              "The body achieves what the mind believes."
            ].map((quote, idx) => (
              <React.Fragment key={`set1-${idx}`}>
                <span className="text-bg-primary">{quote}</span>
                <span className="text-bg-primary/45">•</span>
              </React.Fragment>
            ))}
            
            {/* Set 2 (Duplicated for infinite scroll looping) */}
            <span className="text-bg-primary">FUEL YOUR FIRE</span>
            <span className="text-bg-primary/45">•</span>
            {[
              "Your only limit is you.",
              "Push harder than yesterday.",
              "Discipline beats motivation.",
              "Sweat today. Shine tomorrow.",
              "The body achieves what the mind believes."
            ].map((quote, idx) => (
              <React.Fragment key={`set2-${idx}`}>
                <span className="text-bg-primary">{quote}</span>
                <span className="text-bg-primary/45">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA BAND */}
      <section className="bg-bg-primary text-gym-white border-b border-border-subtle py-24 md:py-32 relative select-none">
        <div className="absolute inset-0 grid-bg-overlay opacity-20" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wider leading-none uppercase text-gym-gold">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="font-inter text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed text-gym-white/80">
            Join Mulund&apos;s premier fitness destination today. Experience world-class layouts and expert coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 w-full sm:w-auto">
            <a
              href="https://wa.me/918169455350"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-lg uppercase tracking-widest px-10 py-4 hover:bg-transparent hover:text-gym-gold transition-colors duration-300 text-center"
            >
              Enquire Now &rarr;
            </a>
            <a
              href="tel:+918169455350"
              className="border-2 border-gym-white/20 text-gym-white font-bebas text-lg uppercase tracking-widest px-10 py-4 hover:border-gym-gold hover:text-gym-gold transition-colors duration-300 text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* TWISTING RIBBON DIVIDER #2 (Transition CTA -> Instagram) */}
      <div className="w-full h-32 md:h-40 bg-bg-primary relative z-20 flex items-center justify-center">
        <TwistingRibbon
          className="w-full h-full"
          waveAmplitude={0.9}
          waveSpeed={0.015}
          twistCycles={5}
          lightColors={gymRibbonColors}
          darkColors={gymRibbonColors}
        />
      </div>

      {/* 7. INSTAGRAM — INTERACTIVE CONNECT SECTION */}
      <InstagramConnect />

      {/* 8. CONTACT / LOCATION (Bento-Grid Dashboard) */}
      <section id="contact" className="scroll-mt-24 md:scroll-mt-28 py-24 md:py-32 bg-bg-primary border-b border-border-subtle relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-overlay opacity-15 pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gym-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="w-full flex flex-col items-start mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-gym-gold mb-3 font-bold">
              MULUND WEST HQ
            </span>
            <h2 className="font-bebas text-5xl md:text-7xl text-gym-white uppercase tracking-wider leading-none">
              VISIT THE FACILITY
            </h2>
          </div>

          {/* Bento grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Address Bento Card */}
            <div className="sm:col-span-2 border-2 border-border-subtle bg-bg-surface/85 p-8 relative overflow-hidden flex flex-col justify-between group rounded-sm hover:border-gym-gold transition-all duration-300">
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(#EF9F27_1px,transparent_1px)] [background-size:16px_16px] opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="hover-shine-sweep z-20" />
              </div>
              
              {/* Corner Brackets */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] transition-all duration-300" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] transition-all duration-300" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] transition-all duration-300" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] transition-all duration-300" />

              <div className="relative z-10 flex justify-between items-start w-full mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-gym-gold/20 flex items-center justify-center text-gym-gold bg-gym-gold/5 group-hover:scale-105 transition-transform duration-300">
                    <MapPin size={20} />
                  </div>
                  <span className="font-bebas text-lg uppercase tracking-widest text-gym-white/80">
                    HQ Address
                  </span>
                </div>
                <button 
                  onClick={handleCopy}
                  className="font-sans text-[10px] uppercase tracking-widest text-gym-gold/60 border border-gym-gold/20 px-2.5 py-1 hover:border-gym-gold hover:text-gym-gold transition-colors duration-300"
                >
                  {copied ? "COPIED" : "COPY INFO"}
                </button>
              </div>

              <div className="relative z-10">
                <p className="font-inter text-base md:text-lg text-gym-white leading-relaxed font-medium">
                  2nd Floor, B Wing, Bhagyashree Apartment,<br />
                  Dr Ambedkar Road, Mulund West, Mumbai 400080
                </p>
              </div>
            </div>

            {/* Operating Hours Bento Card */}
            <div className="border-2 border-border-subtle bg-bg-surface/85 p-8 relative overflow-hidden flex flex-col justify-between group rounded-sm hover:border-gym-gold transition-all duration-300">
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(#EF9F27_1px,transparent_1px)] [background-size:16px_16px] opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="hover-shine-sweep z-20" />
              </div>
              
              {/* Corner Brackets */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] transition-all duration-300" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] transition-all duration-300" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] transition-all duration-300" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] transition-all duration-300" />

              <div className="relative z-10 flex justify-between items-center w-full mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-gym-gold/20 flex items-center justify-center text-gym-gold bg-gym-gold/5 group-hover:scale-105 transition-transform duration-300">
                    <Clock size={20} />
                  </div>
                  <span className="font-bebas text-lg uppercase tracking-widest text-gym-white/80">
                    Gym Hours
                  </span>
                </div>
                
                {/* Dynamic Status Badge */}
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${
                    gymOpen ? "bg-emerald-500 animate-ping" : "bg-amber-500 animate-pulse"
                  }`} />
                  <span className={`font-sans text-[9px] uppercase tracking-widest font-bold ${
                    gymOpen ? "text-emerald-400" : "text-amber-400"
                  }`}>
                    {gymOpen ? "OPEN NOW" : "CLOSED"}
                  </span>
                </div>
              </div>

              <div className="relative z-10">
                <p className="font-inter text-base text-gym-white leading-relaxed">
                  Opens 5:30 AM Daily
                </p>
                <p className="font-inter text-xs text-gym-white/60 mt-1 uppercase tracking-widest">
                  Monday to Sunday
                </p>
              </div>
            </div>

            {/* Direct Channels Bento Card */}
            <div className="border-2 border-border-subtle bg-bg-surface/85 p-8 relative overflow-hidden flex flex-col justify-between group rounded-sm hover:border-gym-gold transition-all duration-300">
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(#EF9F27_1px,transparent_1px)] [background-size:16px_16px] opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="hover-shine-sweep z-20" />
              </div>
              
              {/* Corner Brackets */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] transition-all duration-300" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] transition-all duration-300" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] transition-all duration-300" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] transition-all duration-300" />

              <div className="relative z-10 flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-gym-gold/20 flex items-center justify-center text-gym-gold bg-gym-gold/5 group-hover:scale-105 transition-transform duration-300">
                  <Phone size={20} />
                </div>
                <span className="font-bebas text-lg uppercase tracking-widest text-gym-white/80">
                  Quick Connect
                </span>
              </div>

              <div className="relative z-10 flex flex-col gap-3 w-full">
                <a
                  href="https://wa.me/918169455350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center bg-gym-gold border border-gym-gold text-gym-black font-bebas text-xs uppercase tracking-widest py-3 px-4 hover:bg-transparent hover:text-gym-gold transition-all duration-300"
                >
                  WhatsApp Chat <span>&rarr;</span>
                </a>
                <a
                  href="tel:+918169455350"
                  className="flex justify-between items-center border border-gym-white/20 text-gym-white font-bebas text-xs uppercase tracking-widest py-3 px-4 hover:border-gym-gold hover:text-gym-gold transition-all duration-300"
                >
                  Call HQ Direct <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Google Maps link button placed below the details cards */}
            <div className="sm:col-span-2 flex justify-center mt-4">
              <a
                href="https://maps.google.com/?q=Kourage+Fitness+Mulund+West+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-sm uppercase tracking-widest py-4 hover:bg-transparent hover:text-gym-gold transition-all duration-300 group/btn"
              >
                Launch Navigation in Google Maps
                <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 8.5. COMPETITION PREVIEW SECTION */}
      <section id="competition" className="scroll-mt-24 md:scroll-mt-28 py-24 md:py-32 border-b border-border-subtle bg-bg-surface relative overflow-hidden select-none">
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-bg-overlay opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="w-full flex flex-col items-center text-center mb-16">
            <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gym-gold mb-3 font-semibold">
              India's Digital Physique Competition
            </span>
            <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl text-gym-white uppercase tracking-wider leading-none">
              KOURAGE MASTER PHYSIQUE
            </h2>
            <p className="font-inter text-sm md:text-base text-gym-white/70 max-w-2xl mt-6 leading-relaxed">
              Compete from anywhere in India by submitting your official physique posing video. Showcase your hard work, get judged by professionals, and earn national recognition.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full mt-10">
            {[
              {
                num: "01",
                title: "Participate From Anywhere",
                text: "No travel required. Submit your official posing video digitally from any city or state across India.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                )
              },
              {
                num: "02",
                title: "60 Second Video",
                text: "Submit a high-quality, continuous 60-second video demonstrating your symmetry and conditioning.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 7a2 2 0 0 0-2.45-1.45L16 7V5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2l4.55 1.45A2 2 0 0 0 23 17V7z" />
                  </svg>
                )
              },
              {
                num: "03",
                title: "Professional Judging",
                text: "Your entry is scored by certified national and international physique judges for authentic results.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                )
              },
              {
                num: "04",
                title: "Official Kourage Competition",
                text: "Earn official titles, elite custom medals, and high-performance sponsorship consideration.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                    <path d="M12 2a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                  </svg>
                )
              }
            ].map((card, idx) => (
              <AboutFeatureCard
                key={idx}
                num={card.num}
                title={card.title}
                text={card.text}
                icon={card.icon}
                className="w-full h-full"
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16 w-full">
            <Link
              href="/competition/rules"
              className="bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-lg uppercase tracking-widest px-10 py-4 hover:bg-transparent hover:text-gym-gold transition-colors duration-300 text-center w-full sm:w-auto inline-flex items-center justify-center gap-2 group/btn"
            >
              View Official Rules 
              <span className="group-hover/btn:translate-x-1 transition-transform duration-300">&rarr;</span>
            </Link>
            <Link
              href="/competition/register"
              className="border-2 border-gym-white/20 text-gym-white font-bebas text-lg uppercase tracking-widest px-10 py-4 hover:border-gym-gold hover:text-gym-gold transition-colors duration-300 text-center w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              Register / Submit Entry
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-bg-primary border-t border-border-subtle py-12 text-gym-white/50 text-xs font-sans relative z-10 select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Kourage Fitness. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6 text-gym-white/40">
            <Link href="/privacy-policy" className="hover:text-gym-gold transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-of-use" className="hover:text-gym-gold transition-colors">
              Terms of Use
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-gym-gold transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </footer>

      {/* FULLSCREEN IMAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-6xl w-full max-h-screen flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 sm:-top-16 right-0 text-gym-white hover:text-gym-gold transition-colors z-50 flex items-center gap-2 font-bebas tracking-widest text-base sm:text-lg"
              >
                <span>CLOSE</span> <X className="w-5 h-5 sm:w-7 sm:h-7" />
              </button>
              
              <div className="relative w-full h-[60vh] sm:h-[85vh] shadow-[0_0_50px_rgba(239,159,39,0.15)] border border-gym-gold/20 overflow-hidden group/modal bg-gym-black">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain select-none"
                />
                
                {/* Image Details Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 sm:p-10 pointer-events-none">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <span className="block font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-gym-gold mb-2 font-bold">
                      {selectedImage.zone}
                    </span>
                    <h3 className="font-bebas text-3xl sm:text-5xl text-gym-white uppercase tracking-wider leading-none drop-shadow-lg">
                      {selectedImage.title}
                    </h3>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
