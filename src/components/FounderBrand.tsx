"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface AchievementDetail {
  year: string;
  result: string;
}

interface CategoryMedal {
  id: string;
  category: "intl" | "india" | "state" | "city" | "khel-ratna";
  type: "gold" | "silver" | "bronze" | "special";
  title: string;
  size: "sm" | "md" | "lg";
  ribbonHeight: string;
  swayDuration: string;
  swayDelay: string;
  achievements: AchievementDetail[];
}

const categoryMedals: CategoryMedal[] = [
  // 🌍 International Medal
  {
    id: "intl-medal",
    category: "intl",
    type: "gold",
    title: "International Placements",
    size: "md",
    ribbonHeight: "h-28",
    swayDuration: "5.4s",
    swayDelay: "-0.6s",
    achievements: [
      { year: "2018", result: "IFBB Diamond Cup — Gold Medal" },
      { year: "2019", result: "IFBB Diamond Cup — Bronze Medal" },
      { year: "2022", result: "Mr. Universe — Bronze Medal" },
    ],
  },
  // 🏆 Mr. India Medal
  {
    id: "india-medal",
    category: "india",
    type: "gold",
    title: "Mr. India Placements",
    size: "md",
    ribbonHeight: "h-32",
    swayDuration: "4.8s",
    swayDelay: "-1.7s",
    achievements: [
      { year: "2017", result: "Gold Medal" },
      { year: "2018", result: "Bronze Medal" },
      { year: "2024", result: "Bronze Medal" },
    ],
  },
  // 🏆 Mr. Maharashtra Medal
  {
    id: "state-medal",
    category: "state",
    type: "gold",
    title: "Mr. Maharashtra Placements",
    size: "md",
    ribbonHeight: "h-26",
    swayDuration: "5.8s",
    swayDelay: "-2.3s",
    achievements: [
      { year: "2015", result: "Silver Medal" },
      { year: "2016", result: "Bronze Medal" },
      { year: "2017", result: "Gold Medal" },
      { year: "2019", result: "Gold Medal" },
      { year: "2024", result: "Gold Medal" },
      { year: "2025", result: "Masters Silver" },
    ],
  },
  // 🏆 Mr. Mumbai Medal
  {
    id: "city-medal",
    category: "city",
    type: "gold",
    title: "Mr. Mumbai Placements",
    size: "md",
    ribbonHeight: "h-30",
    swayDuration: "4.5s",
    swayDelay: "-0.9s",
    achievements: [
      { year: "2009", result: "Navodit Gold Medal" },
      { year: "2015", result: "Gold Medal" },
      { year: "2016", result: "Gold Medal" },
      { year: "2017", result: "Gold Medal" },
      { year: "2018", result: "Gold Medal" },
      { year: "2019", result: "Gold Medal" },
      { year: "2021", result: "Gold Medal" },
      { year: "2025", result: "Masters Gold" },
    ],
  },
  // 🎖️ Maharashtra Khel Ratna Medal
  {
    id: "khel-ratna",
    category: "khel-ratna",
    type: "special",
    title: "Khel Ratna Honor",
    size: "lg",
    ribbonHeight: "h-28",
    swayDuration: "6.2s",
    swayDelay: "-1.2s",
    achievements: [
      { year: "2021", result: "Maharashtra Khel Ratna Award — State Athletic Honor" },
    ],
  },
];

export function FounderBrand() {
  const [activeSlide, setActiveSlide] = useState(0);

  const medalColVariants = {
    hidden: { opacity: 0, x: -35 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" as const
      } 
    }
  };

  const plaqueVariants = {
    hidden: { opacity: 0, x: 35 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" as const,
        delay: 0.15
      } 
    }
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring" as const, 
        stiffness: 100, 
        damping: 12 
      } 
    }
  };

  return (
    <div>
      {/* ──────── 1. FOUNDER INTRO MOMENT (SCROLL-TRIGGERED 2-BEAT) ──────── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-[#1A1210] select-none">
        
        {/* BEAT 1 BACKGROUND: Group Podium Stage Photo */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/jagesh_stage.jpg" 
            alt="Stage Background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1210]/85 via-[#1A1210]/70 to-[#1A1210]/95" />
        </div>
        
        {/* Intro Tagline & Name Fades */}
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-sans text-xs uppercase tracking-[0.25em] text-[#EF9F27] font-bold"
          >
            Founder & Mentor
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="font-bebas text-5xl sm:text-7xl md:text-9xl text-[#F2EFE9] tracking-wider mt-3 uppercase"
          >
            Jagesh Dait
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="font-sans text-sm md:text-base text-[#F2EFE9]/85 tracking-[0.18em] mt-6 font-semibold uppercase max-w-2xl mx-auto border-t border-[#5C1F27]/40 pt-4"
          >
            This is the face of Kourage. Champion Athlete, Elite Trainer, Builder of Legacies.
          </motion.p>
        </div>
      </section>

      {/* ──────── 2. CONTINUED SCROLL: STORY & BIOGRAPHY (SOLO PHOTO TRANSITION) ──────── */}
      <section id="founder" className="scroll-mt-24 md:scroll-mt-28 relative py-24 bg-[#1A1210] border-t border-[#5C1F27]/30 select-none">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Solo Photo Fades in on scroll */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative aspect-[3/4] w-full max-w-[380px] border-2 border-gym-gold bg-[#3D141B] overflow-hidden group shadow-2xl">
                <Image
                  src="/jagesh_flag.jpg"
                  alt="Jagesh Dait competitive journey"
                  fill
                  sizes="(max-width: 768px) 380px, 380px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-[#1A1210] border border-gym-gold px-4 py-1.5 font-sans text-[10px] uppercase text-[#EF9F27] tracking-widest font-bold">
                  International Athlete
                </div>
              </div>
            </motion.div>

            {/* Biography Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-7 flex flex-col justify-center text-left"
            >
              <span className="font-sans text-xs uppercase tracking-widest text-[#EF9F27] font-bold">
                The Competitive Arc
              </span>
              <h3 className="font-bebas text-4xl md:text-5xl text-[#F2EFE9] uppercase tracking-wider mt-2 mb-6">
                Championship Journey
              </h3>
              
              <p className="font-inter text-base text-[#F2EFE9]/80 leading-relaxed mb-6">
                With over 15 years of competitive bodybuilding, Jagesh Dait has established a reputation for structured elite training. As the mentor of Kourage Fitness, Jagesh translates international championship protocols into result-driven routines for dedicated lifters.
              </p>

              <p className="font-inter text-sm md:text-base text-gym-white/70 leading-relaxed mb-8">
                His training philosophy is based on meticulous discipline, custom nutrition modeling, and advanced lifting biomechanics. By eliminating standard gym templates, he focuses strictly on structural transformations.
              </p>

              <div className="border-l-4 border-gym-gold pl-6 py-4 bg-[#3D141B]/40 pr-4 mt-2">
                <p className="font-inter text-sm italic text-[#F2EFE9]/95 leading-relaxed">
                  &ldquo;Every placement on the stage is a byproduct of execution. At Kourage, we do not ask for motivation — we build structural discipline.&rdquo;
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4 border-t border-[#5C1F27]/40 pt-4">
                  <span className="block font-sans text-[10px] text-[#EF9F27] uppercase tracking-wider font-bold">— Jagesh Dait</span>
                  <a 
                    href="https://www.instagram.com/jageshdait?igsh=MTEyaDJzOWhjcWE3Mg==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-gym-white/60 hover:text-gym-gold transition-colors duration-300"
                  >
                    Follow on Instagram <span className="text-sm font-bold leading-none mb-0.5">↗</span>
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ──────── 3. INTERACTIVE TROPHY WALL SECTION ──────── */}
      <section 
        className="py-24 md:py-32 bg-[#1A1210] border-t border-[#5C1F27]/30 relative overflow-hidden select-none"
      >
        {/* ATMOSPHERIC BACKGROUND LAYER: Heavily darkened & blurred SOLO photo */}
        <div className="hidden md:block absolute inset-0 z-0 overflow-hidden opacity-35 pointer-events-none">
          <Image 
            src="/jagesh_flag.jpg" 
            alt="Atmospheric background"
            fill
            sizes="100vw"
            className="object-cover object-center filter blur-3xl brightness-[15%]"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-20">
          
          <div className="text-center mb-12">
            <span className="font-sans text-xs uppercase tracking-widest text-[#EF9F27] font-bold">
              Interactive Trophy Wall
            </span>
            <h3 className="font-bebas text-4xl md:text-6xl text-[#F2EFE9] uppercase tracking-wider mt-2">
              Career Placements
            </h3>
            <p className="font-sans text-[10px] text-gym-white/40 uppercase tracking-widest mt-2">
              Explore the championship achievements and honors of our mentor
            </p>
          </div>

          {/* Active Slide Display Container */}
          <div className="bg-[#2A0D12]/40 border-2 border-border-subtle p-4 sm:p-12 mb-8 relative min-h-[460px] flex items-center justify-center">
            <div className="absolute inset-0 grid-bg-overlay opacity-15 pointer-events-none" />
            
            {/* Left Navigation Arrow */}
            <button 
              onClick={() => setActiveSlide((prev) => (prev === 0 ? categoryMedals.length - 1 : prev - 1))}
              className="absolute left-3 sm:left-6 z-30 p-2 sm:p-3 rounded-full border border-gym-gold/30 hover:border-gym-gold bg-bg-primary/80 hover:bg-gym-gold text-gym-white hover:text-gym-black transition-all duration-300 shadow-md group cursor-pointer"
              aria-label="Previous Placement"
            >
              <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
            </button>
            
            {/* Right Navigation Arrow */}
            <button 
              onClick={() => setActiveSlide((prev) => (prev === categoryMedals.length - 1 ? 0 : prev + 1))}
              className="absolute right-3 sm:right-6 z-30 p-2 sm:p-3 rounded-full border border-gym-gold/30 hover:border-gym-gold bg-bg-primary/80 hover:bg-gym-gold text-gym-white hover:text-gym-black transition-all duration-300 shadow-md group cursor-pointer"
              aria-label="Next Placement"
            >
              <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
            </button>

            <AnimatePresence mode="wait">
              {(() => {
                const medal = categoryMedals[activeSlide];
                const details = getMedalDetails(medal.id);
                return (
                  <motion.div
                    key={activeSlide}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center px-2 sm:px-12"
                  >
                    {/* Left Column: Huge Horizontal Medal with Physics Sway hover */}
                    <motion.div 
                      variants={medalColVariants}
                      className="lg:col-span-7 flex flex-col items-center justify-center"
                    >
                      <div className="w-full flex items-center justify-center gap-1 md:gap-3 py-6">
                        
                        {/* The Horizontal Ribbon */}
                        <div className="relative h-12 sm:h-16 md:h-18 flex items-center select-none w-[52%] sm:w-[58%] shrink-0">
                          {/* Left slanted dark header */}
                          <div className="relative w-[38%] h-full bg-[#0d0d0d] flex items-center justify-center pl-3 pr-5 shrink-0 border-y-2 border-l-2 border-[#D4A537] z-20 shadow-md">
                            {/* Slanted gold right border overlay */}
                            <div 
                              className="absolute top-0 right-0 h-full w-4 translate-x-full bg-[#0d0d0d] border-y-2 border-r-2 border-[#D4A537] z-20"
                              style={{
                                clipPath: "polygon(0 0, 100% 0, 0 100%)"
                              }}
                            />
                            <span className="font-serif text-[8px] sm:text-[9px] md:text-xs text-[#EF9F27] uppercase tracking-[0.18em] font-extrabold text-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] leading-tight">
                              {details.ribbonLeftText}
                            </span>
                          </div>
                          
                          {/* Right striped section */}
                          <div className="flex-grow h-full bg-[linear-gradient(to_bottom,#121212_0%,#121212_15%,#D4A537_15%,#D4A537_32%,#121212_32%,#121212_48%,#D4A537_48%,#D4A537_65%,#121212_65%,#121212_82%,#D4A537_82%,#D4A537_100%)] pl-4 relative border-y-2 border-[#D4A537]">
                            {/* Fabric weave overlays */}
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0)_0px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0)_4px)] opacity-30 pointer-events-none" />
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0)_0px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0)_4px)] opacity-40 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/35 pointer-events-none" />
                          </div>
                          
                          {/* Ribbon end gold loop container */}
                          <div className="w-1.5 h-full bg-gradient-to-b from-[#8A6A1E] via-[#FFE380] to-[#8A6A1E] border border-[#D4A537] shadow-md shrink-0 z-10" />
                        </div>

                        {/* Hinge loop connector */}
                        <div className="w-6 sm:w-8 h-2 sm:h-2.5 border border-[#EF9F27]/80 rounded-full z-10 bg-gradient-to-r from-[#996D10] via-[#FFE380] to-[#996D10] shadow-[0_2px_4px_rgba(0,0,0,0.45)] shrink-0" />

                        {/* Medal Disc */}
                        <div 
                          className="w-20 sm:w-32 md:w-38 h-20 sm:h-32 md:h-38 rounded-full flex items-center justify-center relative shrink-0"
                          style={{
                            boxShadow: "inset 2px 2px 4px rgba(255,255,255,0.45), inset -3px -3px 6px rgba(0,0,0,0.65), 0 16px 32px rgba(0,0,0,0.55)"
                          }}
                        >
                          <svg viewBox="0 0 100 100" className="w-full h-full select-none pointer-events-none z-10">
                            <defs>
                              <radialGradient id={`goldRadial-${activeSlide}`} cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#FFF2B2" />
                                <stop offset="25%" stopColor="#F5C453" />
                                <stop offset="60%" stopColor="#D4A537" />
                                <stop offset="85%" stopColor="#A67B1E" />
                                <stop offset="100%" stopColor="#5E430A" />
                              </radialGradient>
                              <radialGradient id={`silverRadial-${activeSlide}`} cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#FFFFFF" />
                                <stop offset="30%" stopColor="#E5E7EB" />
                                <stop offset="65%" stopColor="#9CA3AF" />
                                <stop offset="90%" stopColor="#4B5563" />
                                <stop offset="100%" stopColor="#1F2937" />
                              </radialGradient>
                              <radialGradient id={`bronzeRadial-${activeSlide}`} cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#FBE8D8" />
                                <stop offset="25%" stopColor="#E29A66" />
                                <stop offset="60%" stopColor="#B86230" />
                                <stop offset="85%" stopColor="#87431D" />
                                <stop offset="100%" stopColor="#4F220B" />
                              </radialGradient>
                            </defs>

                            {/* Outer Coin Disk */}
                            <circle cx="50" cy="50" r="48" fill={`url(#${medal.type === "silver" ? "silverRadial" : medal.type === "bronze" ? "bronzeRadial" : "goldRadial"}-${activeSlide})`} stroke={medal.type === "silver" ? "#9CA3AF" : medal.type === "bronze" ? "#B86230" : "#D4A537"} strokeWidth="1" />
                            
                            {/* Concentric Rim Ring (stamped ridge) */}
                            <circle cx="50" cy="50" r="44" fill="none" stroke="#2A0D12" strokeWidth="0.75" opacity="0.25" />
                            
                            {/* Brushed Metal Radial Angle reflection lines */}
                            <g opacity="0.3" style={{ mixBlendMode: "overlay" }}>
                              <polygon points="50,50 15,15 25,10" fill="#FFFFFF" />
                              <polygon points="50,50 85,85 75,90" fill="#FFFFFF" />
                              <polygon points="50,50 85,15 90,25" fill="#FFFFFF" />
                              <polygon points="50,50 15,85 10,75" fill="#FFFFFF" />
                            </g>

                            {/* Laurel Wreath */}
                            <g className="text-[#2A0D12]/70 fill-current opacity-85">
                              <path d="M30,68 C25,62 23,54 23,46 C23,38 25,30 30,24" fill="none" stroke="#2A0D12" strokeWidth="0.8" opacity="0.7" />
                              <path d="M28,26 C26,24 23,26 25,28 C27,30 29,28 28,26 Z" />
                              <path d="M25,34 C23,32 20,34 22,36 C24,38 26,36 25,34 Z" />
                              <path d="M24,42 C22,40 19,42 21,44 C23,46 25,44 24,42 Z" />
                              <path d="M24,50 C22,48 19,50 21,52 C23,54 25,52 24,50 Z" />
                              <path d="M26,58 C24,56 21,58 23,60 C25,62 27,60 26,58 Z" />
                              <path d="M29,65 C27,63 24,65 26,67 C28,69 30,67 29,65 Z" />
                              <path d="M70,68 C75,62 77,54 77,46 C77,38 75,30 70,24" fill="none" stroke="#2A0D12" strokeWidth="0.8" opacity="0.7" />
                              <path d="M72,26 C74,24 77,26 75,28 C73,30 71,28 72,26 Z" />
                              <path d="M75,34 C77,32 80,34 78,36 C76,38 74,36 75,34 Z" />
                              <path d="M76,42 C78,40 81,42 79,44 C77,46 75,44 76,42 Z" />
                              <path d="M76,50 C78,48 81,50 79,52 C77,54 75,52 76,50 Z" />
                              <path d="M74,58 C76,56 79,58 77,60 C75,62 73,60 74,58 Z" />
                              <path d="M71,65 C73,63 76,65 74,67 C72,69 70,67 71,65 Z" />
                            </g>

                            {/* Center Coin text or Star matching Reference Image */}
                            {details.isStar ? (
                              <path d="M50,34 L54.5,44 L65,45 L57,53.5 L59.5,64 L50,58.5 L40.5,64 L43,53.5 L35,45 L45.5,44 Z" fill="#2A0D12" opacity="0.9" className="filter drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.45)]" />
                            ) : (
                              <g className="filter drop-shadow-[0_1.2px_1px_rgba(0,0,0,0.4)]">
                                <text x="50" y="47" textAnchor="middle" className="font-serif font-black text-[15px] fill-[#2A0D12] tracking-tighter">{details.topText}</text>
                                <text x="50" y="56" textAnchor="middle" className="font-bebas text-[7.5px] fill-[#2A0D12] tracking-[0.2em] font-semibold">{details.bottomText}</text>
                              </g>
                            )}

                            {/* Circular rim text path matching Reference Image style */}
                            <path id={`rimPath-${activeSlide}`} d="M 50,50 m -36.5,0 a 36.5,36.5 0 1,1 73,0 a 36.5,36.5 0 1,1 -73,0" fill="none" />
                            <text className="font-bebas text-[7.5px] fill-[#2A0D12]/85 tracking-[0.09em] font-semibold" style={{ letterSpacing: "0.08em" }}>
                              <textPath href={`#rimPath-${activeSlide}`} startOffset="0%">
                                {details.rimText}
                              </textPath>
                            </text>
                          </svg>
                        </div>

                      </div>
                    </motion.div>

                    {/* Right Column: Improved Plaque Details Card matching Reference Screenshot */}
                    <motion.div 
                      variants={plaqueVariants}
                      whileHover={{ 
                        y: -5,
                        scale: 1.01,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                      className="lg:col-span-5 flex flex-col justify-center w-full max-w-sm mx-auto lg:max-w-none cursor-pointer"
                    >
                      <div className="group bg-[#090707] border-2 border-[#EF9F27] p-5 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_45px_rgba(239,159,39,0.18)] relative overflow-hidden flex flex-col justify-center items-center text-center transition-all duration-500 w-full">
                        {/* Gold dot pattern background texture */}
                        <div className="absolute inset-0 bg-[radial-gradient(#EF9F27_1.2px,transparent_1.2px)] [background-size:14px_14px] opacity-10 pointer-events-none" />
                        {/* Soft radial gold glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,159,39,0.04)_0%,transparent_75%)] pointer-events-none" />
                        
                        {/* Glossy light shine sweep overlay */}
                        <div className="hover-shine-sweep pointer-events-none z-20" />
                        
                        {/* Premium Gold Corner Brackets */}
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-3 h-3 border-t-2 border-l-2 border-[#EF9F27]/60 pointer-events-none group-hover:border-[#EF9F27] group-hover:scale-105 transition-all duration-300" />
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-3 h-3 border-t-2 border-r-2 border-[#EF9F27]/60 pointer-events-none group-hover:border-[#EF9F27] group-hover:scale-105 transition-all duration-300" />
                        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-3 h-3 border-b-2 border-l-2 border-[#EF9F27]/60 pointer-events-none group-hover:border-[#EF9F27] group-hover:scale-105 transition-all duration-300" />
                        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-3 h-3 border-b-2 border-r-2 border-[#EF9F27]/60 pointer-events-none group-hover:border-[#EF9F27] group-hover:scale-105 transition-all duration-300" />

                        <span className="relative z-10 font-sans text-[9px] sm:text-[10px] uppercase text-[#EF9F27] tracking-[0.25em] mb-2 font-extrabold">
                          {medal.category === "khel-ratna" ? "State Honour" : "Medal Achievements"}
                        </span>
                        
                        <h4 className="relative z-10 font-bebas text-2xl sm:text-5xl text-[#F2EFE9] uppercase tracking-wider mb-2 leading-tight">
                          {medal.title}
                        </h4>
                        
                        {/* Divider Line */}
                        <div className="relative z-10 w-full border-t border-[#EF9F27]/20 my-4" />
                        
                        {/* Achievements list (staggered entrance) */}
                        <motion.div 
                          variants={listContainerVariants}
                          initial="hidden"
                          animate="visible"
                          className="relative z-10 w-full flex flex-col gap-3.5 items-center justify-center pt-2"
                        >
                          {medal.achievements.map((ach, i) => (
                            <motion.div 
                              key={i} 
                              variants={listItemVariants}
                              whileHover={{ x: 6 }}
                              className="group/item flex items-center justify-start w-full font-sans text-[10px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-[0.12em] transition-all duration-200"
                            >
                              <span className="font-serif text-[#EF9F27] group-hover/item:text-[#FFE380] font-bold text-xs sm:text-sm w-10 sm:w-12 text-right shrink-0 transition-colors duration-300">
                                {ach.year}
                              </span>
                              <span className="text-gym-white/30 px-2 sm:px-3 shrink-0">—</span>
                              <span className="font-medium text-gym-white/85 group-hover/item:text-[#FFF2B2] text-left transition-colors duration-300 break-words flex-1">
                                {ach.result}
                              </span>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>

                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Slide Navigation Tabs with Sliding gold pill active indicator */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mt-8">
            {categoryMedals.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveSlide(idx)}
                className={`relative px-3 sm:px-6 py-2 sm:py-2.5 font-bebas text-[10px] sm:text-sm uppercase tracking-widest transition-all duration-300 border-2 overflow-hidden cursor-pointer ${
                  activeSlide === idx
                    ? "border-gym-gold text-gym-black font-bold shadow-[0_0_15px_rgba(239,159,39,0.25)]"
                    : "border-border-subtle text-gym-white/60 hover:text-gym-white hover:border-gym-white/20"
                }`}
              >
                {activeSlide === idx && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-gym-gold z-0"
                    transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  />
                )}
                <span className="relative z-10">
                  {idx + 1}. {item.category === "khel-ratna" ? "Khel Ratna" : item.category === "intl" ? "Int'l" : item.title.replace(" Placements", "").replace("Mr. ", "")}
                </span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Shimmer & Shine animation support inside global CSS styles */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translate(-100%, -100%) rotate(45deg); }
          100% { transform: translate(100%, 100%) rotate(45deg); }
        }
        .animate-shimmer {
          animation: shimmer 6s infinite linear;
        }
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(100%) skewX(-15deg); }
        }
        .hover-shine-sweep {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: translateX(-100%) skewX(-15deg);
        }
        .group:hover .hover-shine-sweep {
          animation: shine 1.2s ease-in-out;
        }
      `}</style>
    </div>
  );
}

const getMedalDetails = (id: string) => {
  switch (id) {
    case "intl-medal":
      return {
        rimText: "• IFBB DIAMOND CUP • Mr UNIVERSE CHAMPION • ",
        topText: "IFBB",
        bottomText: "GOLD",
        isStar: false,
        ribbonLeftText: "HONOR • VICTORY",
      };
    case "india-medal":
      return {
        rimText: "• MR. INDIA GOLD MEDALIST • CSCS COACH • ",
        topText: "1st",
        bottomText: "PLACE",
        isStar: false,
        ribbonLeftText: "STRENGTH • DISCIPLINE",
      };
    case "state-medal":
      return {
        rimText: "• MR. MAHARASHTRA STATE • GOLD MEDALIST • ",
        topText: "1st",
        bottomText: "STATE",
        isStar: false,
        ribbonLeftText: "PRIDE • GLORY",
      };
    case "city-medal":
      return {
        rimText: "• MR. MUMBAI GOLD MEDALIST • EXCELLENCE • ",
        topText: "1st",
        bottomText: "MUMBAI",
        isStar: false,
        ribbonLeftText: "GRIT • POWER",
      };
    case "khel-ratna":
      return {
        rimText: "• MAHARASHTRA STATE HONOUR • KHEL RATNA • ",
        topText: "",
        bottomText: "",
        isStar: true,
        ribbonLeftText: "STATE • HONOUR",
      };
    default:
      return {
        rimText: "• CHAMPIONSHIP EXCELLENCE • KOURAGE • ",
        topText: "1st",
        bottomText: "PLACE",
        isStar: false,
        ribbonLeftText: "HONOR • VICTORY",
      };
  }
};

export default FounderBrand;
