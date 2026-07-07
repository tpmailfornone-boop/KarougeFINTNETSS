"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Counter from "@/components/Counter";
import { Award, Globe, Medal, Star, Trophy } from "lucide-react";

interface AchievementItem {
  year: string;
  detail: string;
  medalType: "gold" | "silver" | "bronze" | "award";
}

const internationalAchievements: AchievementItem[] = [
  { year: "2018", detail: "IFBB Diamond Cup — Gold Medal", medalType: "gold" },
  { year: "2019", detail: "IFBB Diamond Cup — Bronze Medal", medalType: "bronze" },
  { year: "2022", detail: "Mr. Universe — Bronze Medal", medalType: "bronze" },
];

const indiaAchievements: AchievementItem[] = [
  { year: "2017", detail: "Mr. India — Gold Medal", medalType: "gold" },
  { year: "2018", detail: "Mr. India — Bronze Medal", medalType: "bronze" },
  { year: "2024", detail: "Mr. India — Bronze Medal", medalType: "bronze" },
];

const maharashtraAchievements: AchievementItem[] = [
  { year: "2015", detail: "Mr. Maharashtra — Silver Medal", medalType: "silver" },
  { year: "2016", detail: "Mr. Maharashtra — Bronze Medal", medalType: "bronze" },
  { year: "2017", detail: "Mr. Maharashtra — Gold Medal", medalType: "gold" },
  { year: "2019", detail: "Mr. Maharashtra — Gold Medal", medalType: "gold" },
  { year: "2024", detail: "Mr. Maharashtra — Gold Medal", medalType: "gold" },
  { year: "2025", detail: "Mr. Maharashtra (Masters) — Silver Medal", medalType: "silver" },
];

const mumbaiAchievements: AchievementItem[] = [
  { year: "2009", detail: "Navodit Mumbai Shree — Gold Medal", medalType: "gold" },
  { year: "2015", detail: "Mr. Mumbai — Gold Medal", medalType: "gold" },
  { year: "2016", detail: "Mr. Mumbai — Gold Medal", medalType: "gold" },
  { year: "2017", detail: "Mr. Mumbai — Gold Medal", medalType: "gold" },
  { year: "2018", detail: "Mr. Mumbai — Gold Medal", medalType: "gold" },
  { year: "2019", detail: "Mr. Mumbai — Gold Medal", medalType: "gold" },
  { year: "2021", detail: "Mr. Mumbai — Gold Medal", medalType: "gold" },
  { year: "2025", detail: "Mr. Mumbai (Masters) — Gold Medal", medalType: "gold" },
];

const recognitionAchievements: AchievementItem[] = [
  { year: "2021", detail: "Maharashtra Khel Ratna Award — Government Recognition", medalType: "award" },
];

export function FounderBrand() {
  const [activeTab, setActiveTab] = useState<"intl" | "india" | "state" | "city" | "award">("intl");

  const getAchievements = () => {
    switch (activeTab) {
      case "intl": return internationalAchievements;
      case "india": return indiaAchievements;
      case "state": return maharashtraAchievements;
      case "city": return mumbaiAchievements;
      case "award": return recognitionAchievements;
    }
  };

  const getMedalIcon = (type: "gold" | "silver" | "bronze" | "award") => {
    switch (type) {
      case "gold": return <span className="text-2xl">🥇</span>;
      case "silver": return <span className="text-2xl">🥈</span>;
      case "bronze": return <span className="text-2xl">🥉</span>;
      case "award": return <span className="text-2xl">🏅</span>;
    }
  };

  const tabs = [
    { id: "intl", label: "International", icon: Globe },
    { id: "india", label: "Mr. India", icon: Trophy },
    { id: "state", label: "Mr. Maharashtra", icon: Award },
    { id: "city", label: "Mr. Mumbai", icon: Medal },
    { id: "award", label: "Honors", icon: Star },
  ];

  return (
    <section id="founder" className="scroll-mt-24 md:scroll-mt-28 py-24 md:py-32 bg-bg-primary border-b border-border-subtle relative select-none">
      <div className="absolute inset-0 grid-bg-overlay opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center md:text-left mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-gym-gold">
            Founder & Head Coach
          </span>
          <h2 className="font-bebas text-5xl md:text-7xl text-gym-white uppercase tracking-wider mt-2">
            Jagesh Pitaji Dait
          </h2>
          <p className="font-mono text-xs text-gym-gold uppercase tracking-[0.2em] mt-1 font-semibold">
            3-Time Mr. India Medalist • 8-Time Mr. Mumbai Champion • 6-Time Mr. Maharashtra Medalist
          </p>
        </div>

        {/* PROFILE CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Portfolio */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <div className="relative aspect-[3/4] border-2 border-gym-gold bg-bg-surface overflow-hidden group shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jagesh_flag.jpg"
                alt="Jagesh Dait representing India"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-3 left-3 z-20 bg-bg-primary border border-gym-gold px-3 py-1 font-mono text-[9px] uppercase text-gym-gold tracking-widest">
                International Tier
              </div>
            </div>

            <div className="relative aspect-[3/4] border-2 border-gym-gold bg-bg-surface overflow-hidden group shadow-lg mt-8 lg:mt-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jagesh_stage.jpg"
                alt="Jagesh Dait on stage"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-3 left-3 z-20 bg-bg-primary border border-gym-gold px-3 py-1 font-mono text-[9px] uppercase text-gym-gold tracking-widest">
                Championship Stage
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Achievements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="font-bebas text-3xl md:text-4xl text-gym-white uppercase tracking-wider mb-6">
              The Face of Kourage
            </h3>
            
            <p className="font-inter text-base text-gym-white/80 leading-relaxed mb-8">
              With over 15 years of elite competitive bodybuilding, Jagesh Pitaji Dait has established himself as one of India&apos;s most respected physique athletes. As the founder and head coach of Kourage Fitness, Jagesh translates international training methodologies into structured, result-driven programs for general members and competitive athletes alike.
            </p>

            {/* Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              <motion.div 
                whileHover={{ y: -6, scale: 1.03, borderColor: '#EF9F27' }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="border border-border-subtle bg-bg-surface p-5 flex flex-col justify-between h-28 relative group transition-all duration-300"
              >
                <span className="font-mono text-[9px] uppercase text-gym-white/45 tracking-wider">Mr. Mumbai</span>
                <div className="flex items-baseline mt-auto">
                  <Counter value={8} suffix="x" />
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -6, scale: 1.03, borderColor: '#EF9F27' }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="border border-border-subtle bg-bg-surface p-5 flex flex-col justify-between h-28 relative group transition-all duration-300"
              >
                <span className="font-mono text-[9px] uppercase text-gym-white/45 tracking-wider">Mr. Maharashtra</span>
                <div className="flex items-baseline mt-auto">
                  <Counter value={6} suffix="x" />
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -6, scale: 1.03, borderColor: '#EF9F27' }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="border border-border-subtle bg-bg-surface p-5 flex flex-col justify-between h-28 relative group transition-all duration-300"
              >
                <span className="font-mono text-[9px] uppercase text-gym-white/45 tracking-wider">Mr. India</span>
                <div className="flex items-baseline mt-auto">
                  <Counter value={3} suffix="x" />
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -6, scale: 1.03, borderColor: '#EF9F27' }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="border border-border-subtle bg-bg-surface p-5 flex flex-col justify-between h-28 relative group transition-all duration-300"
              >
                <span className="font-mono text-[9px] uppercase text-gym-white/45 tracking-wider">Int&apos;l Medals</span>
                <div className="flex items-baseline mt-auto">
                  <Counter value={3} suffix="x" />
                </div>
              </motion.div>
            </div>

            {/* TABS SELECTOR */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-border-subtle pb-4">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 font-mono text-[10px] uppercase tracking-wider border transition-all duration-300 ${
                      isActive
                        ? "bg-gym-gold border-gym-gold text-gym-black font-semibold shadow-[0_0_15px_rgba(239,159,39,0.2)]"
                        : "bg-bg-surface border-border-subtle text-gym-white/60 hover:text-gym-white hover:border-gym-white/20"
                    }`}
                  >
                    <TabIcon size={12} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* TAB CONTENT (LIST OF MEDALS) */}
            <div className="min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  {getAchievements().map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 6, borderColor: "rgba(239, 159, 39, 0.4)", backgroundColor: "rgba(61, 20, 27, 0.6)" }}
                      className="flex items-center gap-4 p-4 border border-border-subtle bg-bg-surface/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center shrink-0">
                        {getMedalIcon(item.medalType)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[10px] text-gym-gold uppercase font-bold tracking-widest">
                          {item.year}
                        </span>
                        <span className="font-bebas text-lg md:text-xl text-gym-white uppercase tracking-wider mt-0.5">
                          {item.detail}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </motion.div>

        </div>

        {/* ──────── MENTOR / COACH LEGACY SUBSECTION ──────── */}
        <div className="mt-24 border-t-2 border-border-subtle pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Copy */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-gym-gold">
                The Mentor&apos;s Legacy
              </span>
              <h3 className="font-bebas text-4xl md:text-5xl text-gym-white uppercase tracking-wider mt-2 mb-6">
                Elite Coaching Authority
              </h3>
              
              <p className="font-inter text-base text-gym-white/80 leading-relaxed mb-6">
                Credentialed coaching starts with elite guidance. Jagesh Pitaji Dait&apos;s competitive bodybuilding framework and the coaching infrastructure at Kourage Fitness are established under the direct mentorship of a legendary national bodybuilding coach.
              </p>
              <p className="font-inter text-sm md:text-base text-gym-white/70 leading-relaxed mb-6">
                With a reputation for molding championship physiques, our chief mentor has guided:
              </p>
              
              <ul className="space-y-3 font-mono text-xs text-gym-white/90 mb-8 pl-1">
                <li className="flex items-center gap-3">
                  <span className="text-gym-gold font-bold">✔</span>
                  <span>Jagesh Pitaji Dait (3-Time Mr. India Medalist)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gym-gold font-bold">✔</span>
                  <span>Salman Khan (Bollywood Action Superstar)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gym-gold font-bold">✔</span>
                  <span>Multiple Professional Bodybuilding Athletes across India</span>
                </li>
              </ul>
            </motion.div>

            {/* Right side: Portrait Frame */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-full max-w-[340px] border-2 border-border-subtle bg-bg-surface p-6 relative overflow-hidden flex flex-col justify-center items-center text-center group shadow-xl">
                <div className="absolute inset-0 grid-bg-overlay opacity-20 pointer-events-none" />
                <div className="relative w-full aspect-square border border-border-subtle overflow-hidden mb-6 bg-bg-primary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ig_post_3.png"
                    alt="Legacy mentorship showcase"
                    className="w-full h-full object-cover filter contrast-110 group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <span className="font-mono text-[10px] text-gym-gold uppercase tracking-widest mb-2 font-semibold">
                  Elite Guidance
                </span>
                <p className="font-bebas text-xl text-gym-white uppercase tracking-wider leading-tight">
                  &ldquo;Champions are forged, not born.&rdquo;
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default FounderBrand;
