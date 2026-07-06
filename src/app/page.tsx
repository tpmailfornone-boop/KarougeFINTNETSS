"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
// Custom SVG Icons to bypass lucide barrel-optimization SWC bugs
const Instagram = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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

const Phone = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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
import AnimatedRays from "@/components/ui/animated-rays";
import TwistingRibbon from "@/components/ui/twisting-ribbon";
import ProgramCard from "@/components/ProgramCard";
import PricingCard from "@/components/PricingCard";
import InstagramFeed from "@/components/InstagramFeed";
import BookingModal from "@/components/BookingModal";
import Counter from "@/components/Counter";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Gym theme color props for the TwistingRibbon
  const gymRibbonColors = {
    face: "#EF9F27",   // Gold accent
    foldA: "#1A1A18",  // Near-black
    foldB: "#EF9F27",  // Gold
    foldC: "#F2EFE9",  // Off-white
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gym-black font-sans text-gym-white flex flex-col relative select-none">
      
      {/* 1. STICKY NAVBAR */}
      <header className="sticky top-0 z-40 w-full border-b border-gym-white/10 bg-gym-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-bebas text-3xl tracking-widest text-gym-white hover:text-gym-gold transition-colors">
            KOURAGE<span className="text-gym-gold">.</span>
          </a>

          {/* Desktop Nav links with hover line animation */}
          <nav className="hidden md:flex items-center gap-10">
            {["The Standard", "Programs", "Trainers", "Pricing", "Location"].map((item) => {
              const id = item.toLowerCase().replace(" ", "-");
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className="font-mono text-xs uppercase tracking-widest text-gym-white/70 hover:text-gym-gold transition-colors relative py-2 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gym-gold transition-all duration-300 group-hover:w-full" />
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://wa.me/918169455350"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gym-white/60 hover:text-gym-gold transition-colors"
            >
              <Phone size={14} className="text-gym-gold" />
              +91 81694 55350
            </a>
            <button
              onClick={handleOpenModal}
              className="bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-sm uppercase tracking-widest px-6 py-2.5 hover:bg-transparent hover:text-gym-gold transition-colors duration-300"
            >
              Book Free Trial
            </button>
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
            className="absolute top-20 left-0 w-full bg-gym-black border-b border-gym-white/10 px-6 py-10 flex flex-col gap-6 md:hidden z-30"
          >
            {["The Standard", "Programs", "Trainers", "Pricing", "Location"].map((item) => {
              const id = item.toLowerCase().replace(" ", "-");
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className="font-bebas text-3xl uppercase tracking-wider text-left text-gym-white hover:text-gym-gold transition-colors"
                >
                  {item}
                </button>
              );
            })}
            <hr className="border-gym-white/10 my-2" />
            <a
              href="https://wa.me/918169455350"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-gym-white/70"
            >
              <Phone size={18} className="text-gym-gold" />
              +91 81694 55350
            </a>
            <button
              onClick={handleOpenModal}
              className="bg-gym-gold text-gym-black font-bebas text-lg uppercase tracking-widest w-full py-4 mt-2"
            >
              Book Free Trial
            </button>
          </motion.div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center overflow-hidden border-b-2 border-gym-white/10">
        {/* AnimatedRays background layer behind hero */}
        <div className="absolute inset-0 z-0">
          <AnimatedRays className="w-full h-full" />
        </div>
        
        {/* Overlay grid details */}
        <div className="absolute inset-0 z-0 grid-bg-overlay opacity-30" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20 md:py-32 flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-gym-gold mb-6 font-semibold"
          >
            MULUND WEST • EST. 2019
          </motion.span>
          
          <h1 className="font-bebas text-7xl sm:text-8xl md:text-9xl text-gym-white tracking-wide uppercase leading-[0.9] max-w-4xl select-none">
            MULUND&apos;S <br className="hidden sm:inline" />
            <span className="text-gym-gold relative">HARDEST</span> GYM.
          </h1>

          <p className="font-inter text-base sm:text-lg md:text-xl text-gym-white/70 max-w-xl mt-8 leading-relaxed">
            We don&apos;t sell comfortable club layouts or aesthetic cardio zones. This is a CSCS-certified strength facility loaded with elite plate frames. Lift heavy, keep quiet, and earn it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto">
            <button
              onClick={handleOpenModal}
              className="bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-lg uppercase tracking-widest px-10 py-4 hover:bg-transparent hover:text-gym-gold transition-colors duration-300 w-full sm:w-auto"
            >
              Book a Free Trial
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="border-2 border-gym-white/20 text-gym-white font-bebas text-lg uppercase tracking-widest px-10 py-4 hover:border-gym-gold hover:text-gym-gold transition-colors duration-300 w-full sm:w-auto"
            >
              View Plans
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-6 mt-16 border-t border-gym-white/10 pt-8 w-full max-w-lg">
            <div className="flex -space-x-4">
              <div className="w-10 h-10 border-2 border-gym-black bg-gym-gold text-gym-black flex items-center justify-center font-bebas text-sm font-bold">KF</div>
              <div className="w-10 h-10 border-2 border-gym-black bg-gym-white text-gym-black flex items-center justify-center font-bebas text-sm font-bold">MW</div>
              <div className="w-10 h-10 border-2 border-gym-black bg-gym-black text-gym-gold flex items-center justify-center font-bebas text-sm font-bold">PT</div>
            </div>
            <div>
              <div className="flex text-gym-gold text-sm font-bold">★★★★★</div>
              <div className="font-mono text-[10px] uppercase text-gym-white/40 tracking-wider mt-1">
                4.9★ (40+ Google Reviews)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="bg-gym-black border-b border-gym-white/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 text-center lg:text-left">
          <div className="flex flex-col gap-2">
            <Counter value={7} suffix="+" />
            <span className="font-mono text-xs uppercase tracking-widest text-gym-white/50">
              Years of Discipline
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <Counter value={800} suffix="+" />
            <span className="font-mono text-xs uppercase tracking-widest text-gym-white/50">
              Active Lifters Trained
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <Counter value={14} suffix="kg" />
            <span className="font-mono text-xs uppercase tracking-widest text-gym-white/50">
              Average Weight Lost
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <Counter value={49} suffix="/5" duration={1.2} />
            <span className="font-mono text-xs uppercase tracking-widest text-gym-white/50">
              Google Rating (4.9★)
            </span>
          </div>
        </div>
      </section>

      {/* 4. THE STANDARD (ABOUT SECTION) */}
      <section id="the-standard" className="py-24 md:py-32 border-b border-gym-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="font-mono text-xs uppercase tracking-widest text-gym-gold mb-4">
              THE STANDARD
            </span>
            <h2 className="font-bebas text-5xl md:text-6xl text-gym-white tracking-wider leading-none uppercase max-w-xl">
              WE BUILT KOURAGE BECAUSE MULUND WAS CROWDED WITH CLUBS THAT SELL COMFORT.
            </h2>
            <p className="font-inter text-base text-gym-white/70 leading-relaxed mt-8 max-w-lg">
              We do not accommodate casual workouts. Our facility limits capacity so you never wait for a rack or platform. Led by CSCS specialists, we train for real output.
            </p>

            {/* Asymmetric photo wrapper */}
            <div className="relative mt-12 w-full aspect-[4/3] border-2 border-gym-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gym-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gym_interior_about.png"
                alt="Kourage Fitness Hammer Strength Equipment"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-gym-black border border-gym-gold px-4 py-2 font-mono text-[10px] uppercase text-gym-gold tracking-widest">
                Bhagyashree Apartment HQ
              </div>
            </div>
          </div>

          {/* Right Block: Stark Differentiators */}
          <div className="lg:col-span-6 space-y-12 lg:pl-12">
            {[
              {
                num: "01.",
                title: "5:30 AM Start",
                text: "The earliest lifting block in Mulund West. Designed for professional training before the workday begins.",
              },
              {
                num: "02.",
                title: "Hammer Strength® Cages",
                text: "Professional power cages, elite plate-loaded frames, and custom dumbbells going all the way up to 60kg.",
              },
              {
                num: "03.",
                title: "CSCS Certified Coaches",
                text: "Coaching led by Certified Strength and Conditioning Specialists. No fitness amateurs, no unverified advice.",
              },
              {
                num: "04.",
                title: "Strict Capacity Cap",
                text: "We cap active member entry. No queues, no crowded floors, no distraction from the grind.",
              },
            ].map((diff) => (
              <div key={diff.num} className="flex gap-6 border-b border-gym-white/10 pb-8 last:border-b-0 last:pb-0">
                <span className="font-bebas text-3xl md:text-4xl text-gym-gold">{diff.num}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bebas text-2xl md:text-3xl text-gym-white uppercase tracking-wider">
                    {diff.title}
                  </h3>
                  <p className="font-inter text-sm md:text-base text-gym-white/70 leading-relaxed">
                    {diff.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. PROGRAMS / CLASSES (3D TILT DECK) */}
      <section id="programs" className="py-24 md:py-32 bg-gym-black border-b border-gym-white/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gym-gold">
                THE OFFERINGS
              </span>
              <h2 className="font-bebas text-5xl md:text-6xl text-gym-white uppercase tracking-wider mt-2">
                CORE DISCIPLINES
              </h2>
            </div>
            <p className="font-inter text-sm md:text-base text-gym-white/50 max-w-md">
              Select your path. Every program is customized for metrics and results.
            </p>
          </div>

          {/* 3D card deck grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramCard
              number="01"
              title="Strength Training"
              tag="POWER & SIZE"
              description="Focus on compounding basic lifts. Utilize dual power cages, heavy platforms, and standard plates. Designed for pure structural strength."
            />
            <ProgramCard
              number="02"
              title="Weight Loss"
              tag="METABOLIC CONDITIONING"
              description="High-output metabolic conditioning combined with hypertrophic lifts. Strip body fat efficiently while building active lean mass."
            />
            <ProgramCard
              number="03"
              title="Personal Coaching"
              tag="CSCS 1-ON-1"
              description="Customized biomechanics corrections, tailored hypertrophy planning, and weekly accountability checks under certified specialists."
            />
          </div>
        </div>
      </section>

      {/* 6. TWISTING RIBBON DIVIDER #1 (Transition Programs -> Pricing) */}
      <div className="w-full h-32 md:h-40 bg-gym-black relative z-20 flex items-center justify-center">
        <TwistingRibbon
          className="w-full h-full"
          waveAmplitude={0.9}
          waveSpeed={0.015}
          twistCycles={5}
          lightColors={gymRibbonColors}
          darkColors={gymRibbonColors}
        />
      </div>

      {/* 7. TRAINERS SECTION */}
      <section id="trainers" className="py-24 md:py-32 bg-gym-black border-b border-gym-white/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gym-gold">
                THE SYSTEM
              </span>
              <h2 className="font-bebas text-5xl md:text-6xl text-gym-white uppercase tracking-wider mt-2">
                ELITE COACHING LEAD
              </h2>
            </div>
            <p className="font-inter text-sm md:text-base text-gym-white/50 max-w-md">
              We do not hire commercial trainers. Our coaches are CSCS certified and lift the same numbers they teach.
            </p>
          </div>

          {/* Trainer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Coach Aditya",
                role: "Strength & Barbell Lead",
                bio: "7+ years coaching competitive lifting. Expert in biomechanics, low-bar squatting technique, and active CNS loading.",
                ig: "@aditya_kourage",
                bgLetter: "A",
              },
              {
                name: "Coach Manoj",
                role: "CSCS Conditioning Head",
                bio: "Specializes in high-velocity energy systems, fat loss programming, and CSCS athlete physical preparedness.",
                ig: "@manoj_kourage",
                bgLetter: "M",
              },
              {
                name: "Coach Rakesh",
                role: "Hypertrophy Specialist",
                bio: "Focuses on volume mapping, metabolic damage repair, and direct mechanical tension techniques for hypertrophy.",
                ig: "@rakesh_kourage",
                bgLetter: "R",
              },
            ].map((trainer, index) => (
              <div
                key={index}
                className="border-2 border-gym-white/10 hover:border-gym-gold bg-gym-black relative overflow-hidden group aspect-[3/4] flex flex-col justify-between p-8 transition-colors duration-300"
              >
                {/* Visual Letter Placeholder in background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <span className="font-bebas text-[18rem] text-gym-white">{trainer.bgLetter}</span>
                </div>

                <div className="flex justify-between items-start z-10">
                  <span className="font-mono text-[10px] text-gym-white/40 uppercase tracking-widest">
                    KOURAGE CERTIFIED
                  </span>
                  <a
                    href="https://www.instagram.com/kouragefitness_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gym-white/40 hover:text-gym-gold transition-colors z-20"
                  >
                    <Instagram size={18} />
                  </a>
                </div>

                <div className="z-10 mt-auto">
                  <h3 className="font-bebas text-4xl text-gym-white uppercase tracking-wide group-hover:text-gym-gold transition-colors duration-300">
                    {trainer.name}
                  </h3>
                  <span className="font-mono text-xs text-gym-gold uppercase tracking-wider block mt-1">
                    {trainer.role}
                  </span>
                  
                  {/* Bio reveal on hover */}
                  <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-32 group-hover:opacity-100 group-hover:mt-4 transition-all duration-300 ease-in-out">
                    <p className="font-inter text-xs text-gym-white/70 leading-relaxed border-t border-gym-white/10 pt-4">
                      {trainer.bio}
                    </p>
                    <span className="font-mono text-[10px] text-gym-gold uppercase tracking-widest mt-2 block font-semibold">
                      {trainer.ig}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRICING SECTION */}
      <section id="pricing" className="py-24 md:py-32 bg-gym-black border-b border-gym-white/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gym-gold">
                THE SUBSCRIPTION
              </span>
              <h2 className="font-bebas text-5xl md:text-6xl text-gym-white uppercase tracking-wider mt-2">
                UNCOMPROMISING TIERS
              </h2>
            </div>
            <p className="font-inter text-sm md:text-base text-gym-white/50 max-w-md">
              Choose your program tier. All memberships enforce strict capacity caps to preserve lifting quality.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <PricingCard
              title="Monthly Grind"
              price="₹3,500"
              period="Month"
              ctaText="Enquire Monthly"
              onCtaClick={handleOpenModal}
              features={[
                "Full Hammer Strength Cages access",
                "5:30 AM early lifting slot",
                "Basic barbell stance review",
                "No lock-in commitments",
              ]}
            />
            <PricingCard
              title="Quarterly Build"
              price="₹9,000"
              period="3 Months"
              featured={true}
              ctaText="Enquire Quarterly"
              onCtaClick={handleOpenModal}
              features={[
                "All Monthly access features included",
                "CSCS biomechanics template review",
                "Priority lifting slot allocations",
                "1 free guest pass per month",
                "Equals ₹3,000 / month rate",
              ]}
            />
            <PricingCard
              title="1-on-1 Coaching"
              price="₹15,000"
              period="Month"
              ctaText="Enquire Coaching"
              onCtaClick={handleOpenModal}
              features={[
                "12 personal coached sessions/mo",
                "CSCS certified specialist lead",
                "Tailored nutrition & programming",
                "Weekly biometric scans & tracking",
                "24/7 direct WhatsApp access",
              ]}
            />
          </div>
        </div>
      </section>

      {/* 9. TWISTING RIBBON DIVIDER #2 (Transition Pricing -> Instagram) */}
      <div className="w-full h-32 md:h-40 bg-gym-black relative z-20 flex items-center justify-center">
        <TwistingRibbon
          className="w-full h-full"
          waveAmplitude={0.9}
          waveSpeed={0.015}
          twistCycles={5}
          lightColors={gymRibbonColors}
          darkColors={gymRibbonColors}
        />
      </div>

      {/* 10. INSTAGRAM GRID SECTION */}
      <section className="py-24 md:py-32 bg-gym-black border-b border-gym-white/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gym-gold">
                THE INSTAGRAM
              </span>
              <h2 className="font-bebas text-5xl md:text-6xl text-gym-white uppercase tracking-wider mt-2">
                FOLLOW THE GRIND
              </h2>
            </div>
            
            <a
              href="https://www.instagram.com/kouragefitness_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-gym-gold text-gym-gold font-bebas text-sm uppercase tracking-widest px-6 py-3 hover:bg-gym-gold hover:text-gym-black transition-colors duration-300"
            >
              <Instagram size={16} />
              @kouragefitness_official
            </a>
          </div>

          <InstagramFeed />
        </div>
      </section>

      {/* 11. LOCATION SECTION */}
      <section id="location" className="py-24 md:py-32 bg-gym-black border-b border-gym-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Location details */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-mono text-xs uppercase tracking-widest text-gym-gold mb-4">
              MULUND WEST HQ
            </span>
            <h2 className="font-bebas text-5xl md:text-6xl text-gym-white uppercase tracking-wider leading-none">
              VISIT THE FACILITY
            </h2>
            
            <div className="space-y-8 mt-10">
              <div className="flex gap-4">
                <MapPin size={24} className="text-gym-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-mono text-xs uppercase text-gym-white/40 tracking-wider">Address</h4>
                  <p className="font-inter text-sm md:text-base text-gym-white/80 mt-1">
                    2nd Floor, B Wing, Bhagyashree Apartment,<br />
                    Dr Ambedkar Road, Mulund West, Mumbai 400080
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={24} className="text-gym-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-mono text-xs uppercase text-gym-white/40 tracking-wider">Operating Hours</h4>
                  <p className="font-inter text-sm md:text-base text-gym-white/80 mt-1">
                    Opens 5:30 AM Daily • Monday to Sunday
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Kourage+Fitness+Mulund+West+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-gym-white/20 text-gym-white font-bebas text-sm uppercase tracking-widest px-6 py-3 mt-10 hover:border-gym-gold hover:text-gym-gold transition-colors duration-300"
            >
              Open in Google Maps
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Styled high-contrast embedded map */}
          <div className="lg:col-span-7 w-full h-[400px] border-2 border-gym-white/10 relative overflow-hidden group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2045543666245!2d72.9510113154378!3d19.18625905353597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8e19cffffff%3A0xe54d4f826359bc75!2sKourage%20Fitness!5e0!3m2!1sen!2sin!4v1687834526930!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2) brightness(0.9)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location of Kourage Fitness Mulund West"
              aria-label="Google Maps frame showing gym address in Mulund"
            ></iframe>
          </div>

        </div>
      </section>

      {/* 12. FINAL CALL TO ACTION */}
      <section className="bg-gym-gold text-gym-black py-20 text-center relative border-t-2 border-gym-white/10 z-10 select-none">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-bebas text-6xl md:text-8xl tracking-wider leading-none uppercase">
            DECIDE TODAY.
          </h2>
          <p className="font-inter text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed text-gym-black/80">
            No commitment trials. Come in, lift, and see the standard for yourself. Experience the best equipment and elite coaching environment in Mulund.
          </p>
          <button
            onClick={handleOpenModal}
            className="bg-gym-black text-gym-gold border-2 border-gym-black font-bebas text-lg uppercase tracking-widest px-10 py-4 mt-10 hover:bg-transparent hover:text-gym-black transition-colors duration-300 rounded-none"
          >
            WhatsApp Enquiry
          </button>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-gym-black border-t border-gym-white/10 py-16 text-gym-white/50 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="flex flex-col items-start gap-4">
            <a href="#" className="font-bebas text-3xl tracking-widest text-gym-white">
              KOURAGE<span className="text-gym-gold">.</span>
            </a>
            <p className="font-inter text-xs text-gym-white/40 leading-relaxed max-w-xs">
              Mulund West&apos;s Elite boutique strength facility. Built for results.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gym-white/80 mb-4">Contact Info</h4>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a href="tel:+918169455350" className="hover:text-gym-gold transition-colors">
                  Tel: +91 81694 55350
                </a>
              </li>
              <li>
                <a href="https://wa.me/918169455350" target="_blank" rel="noopener noreferrer" className="hover:text-gym-gold transition-colors">
                  WhatsApp: +91 81694 55350
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gym-white/80 mb-4">Location & Hours</h4>
            <p className="font-inter text-xs text-gym-white/40 leading-relaxed">
              2nd Floor, B Wing, Bhagyashree Apartment,<br />
              Dr Ambedkar Road, Mulund West<br />
              Opens 5:30 AM Daily
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gym-white/80 mb-4">Follow the grind</h4>
            <a
              href="https://www.instagram.com/kouragefitness_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gym-white/20 px-4 py-2 hover:border-gym-gold hover:text-gym-gold transition-colors"
            >
              <Instagram size={14} />
              <span className="font-mono text-[10px] uppercase tracking-wider">Instagram</span>
            </a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-gym-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono">
          <p>&copy; {new Date().getFullYear()} Kourage Fitness. All rights reserved.</p>
          <p className="text-gym-white/20">Built for uncompromising strength.</p>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
    </div>
  );
}
