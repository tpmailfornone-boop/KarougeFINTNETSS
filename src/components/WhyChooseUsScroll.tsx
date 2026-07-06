"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger in browser context
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CardData {
  num: string;
  tag: string;
  title: string;
  description: string;
  videoUrl: string;
}

const cards: CardData[] = [
  {
    num: "01",
    tag: "STATE-OF-THE-ART",
    title: "Latest Equipment",
    description: "State-of-the-art fitness equipment for optimal performance and structural safety in every movement.",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054ba2746c210992395dbd72f7e7779&profile_id=139"
  },
  {
    num: "02",
    tag: "EXPERT COACHES",
    title: "Certified Trainers",
    description: "Expert guidance from certified fitness professionals with years of coaching and biomechanics mastery.",
    videoUrl: "https://player.vimeo.com/external/435674703.sd.mp4?s=7fdfb154da2149b0682fa0ff6d1e434f0d7e48ea&profile_id=165"
  },
  {
    num: "03",
    tag: "CUSTOM FIT",
    title: "Personalized Plans",
    description: "Custom workout programs tailored to your goals, biometrics, and physical capabilities.",
    videoUrl: "https://player.vimeo.com/external/459389137.sd.mp4?s=87ae39ab5c1c01e3b3a6ef0e1215b22b62be81a3&profile_id=165"
  },
  {
    num: "04",
    tag: "HYGIENIC",
    title: "Clean & Safe",
    description: "Hygienic environment with regular sanitization, ventilation, and strict cleanliness codes.",
    videoUrl: "https://player.vimeo.com/external/435674681.sd.mp4?s=f5ef89759d57a2f584e031eb93a8d6728eb5a71c&profile_id=165"
  },
  {
    num: "05",
    tag: "FAT LOSS",
    title: "Weight Loss Programs",
    description: "Scientifically designed fat loss transformations focused on maintaining active muscle volume.",
    videoUrl: "https://player.vimeo.com/external/409440626.sd.mp4?s=d7e7e6ea3ff45cdb9ee8ee49d5bf1f574d75d654&profile_id=165"
  },
  {
    num: "06",
    tag: "PERFORMANCE",
    title: "Strength & Conditioning",
    description: "Build structural muscle, develop explosive athletic performance, and improve physical capacity.",
    videoUrl: "https://player.vimeo.com/external/510850877.sd.mp4?s=e5ca05ab1c5b8e2f8dc4d0f625076cfb74d6c6e7&profile_id=165"
  }
];

export function WhyChooseUsScroll() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 1. Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", motionListener);

    // 2. Check screen dimensions for responsiveness
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", motionListener);
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const trigger = triggerRef.current;
    const pin = pinRef.current;
    if (!trigger || !pin) return;

    // Normalizes scroll events to prevent touch momentum issues on iOS devices
    ScrollTrigger.normalizeScroll(true);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        pin: pin,
        scrub: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          // Calculate active index cleanly bounded [0, 5]
          const index = Math.min(Math.floor(progress * cards.length), cards.length - 1);
          setActiveIndex(index);
        }
      });
    }, triggerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.normalizeScroll(false);
    };
  }, [prefersReducedMotion]);

  // FALLBACK: Static Grid Layout if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <section id="why-us" className="py-24 md:py-32 bg-gym-black border-b border-gym-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-gym-gold">
              WHY CHOOSE US
            </span>
            <h2 className="font-bebas text-5xl md:text-6xl text-gym-white uppercase tracking-wider mt-2">
              Excellence in Every Detail
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <div
                key={card.num}
                className="border-2 border-gym-white/10 hover:border-gym-gold bg-gym-black p-8 flex flex-col justify-between h-72 select-none group"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="font-bebas text-4xl text-gym-gold/40">{card.num}</span>
                  <span className="border border-gym-gold px-2.5 py-0.5 font-mono text-[9px] uppercase text-gym-gold tracking-widest">
                    {card.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-bebas text-2xl md:text-3xl text-gym-white uppercase tracking-wider mb-2 group-hover:text-gym-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-inter text-sm text-gym-white/70 leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <a
                    href="https://wa.me/918169455350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gym-gold font-mono text-[10px] uppercase tracking-widest font-semibold"
                  >
                    ENQUIRE DISCIPLINE &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ACTIVE INTERACTION: Scroll-Locked Pinned Viewport Container
  // Scroll height is 600vh on desktop, 480vh (80vh * 6) on mobile for smooth thumb scrolling
  const scrollHeightClass = isMobile ? "h-[480vh]" : "h-[600vh]";

  return (
    <div ref={triggerRef} className={`w-full relative bg-gym-black border-b border-gym-white/10 ${scrollHeightClass}`}>
      <div ref={pinRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        
        {/* Background Videos with 500ms crossfade transitions */}
        <div className="absolute inset-0 z-0">
          {cards.map((card, i) => {
            // Lazy load strategy: only render video if within activeRange index +/- 1
            const isLoaded = Math.abs(i - activeIndex) <= 1;
            if (!isLoaded) return null;

            return (
              <video
                key={card.num}
                src={card.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 transition-opacity duration-500 ${
                  i === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            );
          })}
        </div>

        {/* Brand contrast overlay wrapper: rgba(26,26,24,0.75) i.e. our #1A1A18 at 75% opacity */}
        <div className="absolute inset-0 bg-[#1A1A18]/75 z-10" />

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-6 w-full h-full relative z-20 flex flex-col justify-between py-12 md:py-24">
          
          {/* Header (Top-Left Fixed Panel) */}
          <div className="w-full">
            <span className="font-mono text-xs uppercase tracking-widest text-gym-gold">
              WHY CHOOSE US
            </span>
            <h2 className="font-bebas text-5xl md:text-7xl text-gym-white uppercase tracking-wider mt-2 leading-none">
              Excellence in Every Detail
            </h2>
          </div>

          {/* Centered Active Card Container */}
          <div className="flex-grow flex items-center justify-center md:justify-start w-full my-8">
            <div className="w-full md:max-w-xl md:pl-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="border-2 border-gym-gold bg-gym-black/80 p-8 md:p-12 w-full relative"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                  }}
                >
                  {/* Subtle Grid Overlay */}
                  <div className="absolute inset-0 grid-bg-overlay opacity-30 pointer-events-none" />

                  <div className="relative z-10 flex justify-between items-start mb-10">
                    <span className="font-bebas text-5xl text-gym-gold">
                      {cards[activeIndex].num}
                    </span>
                    <span className="border border-gym-gold px-3 py-1 font-mono text-[10px] uppercase text-gym-gold tracking-widest">
                      {cards[activeIndex].tag}
                    </span>
                  </div>

                  <h3 className="relative z-10 font-bebas text-4xl md:text-5xl text-gym-white uppercase tracking-wider mb-4 leading-none">
                    {cards[activeIndex].title}
                  </h3>
                  
                  <p className="relative z-10 font-inter text-sm md:text-base leading-relaxed text-gym-white/80">
                    {cards[activeIndex].description}
                  </p>

                  <a
                    href="https://wa.me/918169455350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 mt-10 inline-flex items-center gap-2 text-gym-gold font-mono text-xs uppercase tracking-widest font-semibold hover:translate-x-2 transition-transform duration-300"
                  >
                    ENQUIRE DISCIPLINE &rarr;
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Progress Tracker (Side/Bottom Indicator Bar) */}
          <div className="w-full flex justify-between items-center md:items-end">
            <span className="hidden md:inline font-mono text-xs text-gym-white/40 uppercase tracking-widest">
              Scroll to explore indicators
            </span>

            {/* Dash indicators */}
            <div className="flex gap-4 md:gap-6 items-center">
              {cards.map((card, i) => (
                <div key={card.num} className="flex items-center gap-2 cursor-pointer" onClick={() => {
                  // Allow jumping to card by scrolling to its respective position in the trigger container
                  const trigger = triggerRef.current;
                  if (!trigger) return;
                  const rect = trigger.getBoundingClientRect();
                  const segmentHeight = rect.height / cards.length;
                  const targetScroll = window.scrollY + rect.top + (i * segmentHeight) + 10;
                  window.scrollTo({ top: targetScroll, behavior: "smooth" });
                }}>
                  <span className={`font-mono text-xs transition-colors duration-300 ${
                    i === activeIndex ? "text-gym-gold font-bold" : "text-gym-white/30"
                  }`}>
                    {card.num}
                  </span>
                  
                  {/* Progress Dash */}
                  <div className="h-[2px] w-6 md:w-10 bg-gym-white/10 relative overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gym-gold transition-all duration-300"
                      style={{
                        width: i <= activeIndex ? "100%" : "0%"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default WhyChooseUsScroll;
