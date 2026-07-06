"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedRays from "@/components/ui/animated-rays";
import TwistingRibbon from "@/components/ui/twisting-ribbon";
import ProgramCard from "@/components/ProgramCard";
import WhyChooseUsScroll from "@/components/WhyChooseUsScroll";

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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Gym theme color props for the TwistingRibbon
  const gymRibbonColors = {
    face: "#EF9F27",   // Gold accent
    foldA: "#1A1A18",  // Near-black
    foldB: "#EF9F27",  // Gold
    foldC: "#F2EFE9",  // Off-white
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
      
      {/* 1. NAV */}
      <header className="sticky top-0 z-40 w-full border-b border-gym-white/10 bg-gym-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-bebas text-3xl tracking-widest text-gym-white hover:text-gym-gold transition-colors">
            KOURAGE FITNESS<span className="text-gym-gold">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {["About", "Why Us", "Contact"].map((item) => {
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
              href="tel:+918169455350"
              className="bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-sm uppercase tracking-widest px-6 py-2.5 hover:bg-transparent hover:text-gym-gold transition-colors duration-300"
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
            className="absolute top-20 left-0 w-full bg-gym-black border-b border-gym-white/10 px-6 py-10 flex flex-col gap-6 md:hidden z-30"
          >
            {["About", "Why Us", "Contact"].map((item) => {
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
              href="tel:+918169455350"
              className="bg-gym-gold text-gym-black font-bebas text-lg uppercase tracking-widest w-full py-4 text-center block"
            >
              Call Now
            </a>
          </motion.div>
        )}
      </header>

      {/* 2. HERO */}
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
            BEST GYM IN MULUND
          </motion.span>
          
          <h1 className="font-bebas text-7xl sm:text-8xl md:text-9xl text-gym-white tracking-wide uppercase leading-[0.9] max-w-4xl select-none">
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

      {/* 3. ABOUT */}
      <section id="about" className="py-24 md:py-32 border-b border-gym-white/10 relative bg-gym-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-mono text-xs uppercase tracking-widest text-gym-gold mb-4">
              WHO WE ARE
            </span>
            <h2 className="font-bebas text-5xl md:text-6xl text-gym-white tracking-wider leading-none uppercase max-w-xl">
              Premium Fitness Experience
            </h2>
            <p className="font-inter text-base text-gym-white/70 leading-relaxed mt-8 max-w-lg">
              Kourage Fitness is Mulund&apos;s premier fitness destination, combining cutting-edge equipment with expert guidance to help you achieve your goals.
            </p>

            <div className="relative mt-12 w-full aspect-[4/3] border-2 border-gym-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gym-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gym_interior_about.png"
                alt="Kourage Fitness setups"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-gym-black border border-gym-gold px-4 py-2 font-mono text-[10px] uppercase text-gym-gold tracking-widest">
                Kourage Mulund West
              </div>
            </div>
          </div>

          {/* Right Block: Feature Grid (4) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-12">
            {[
              {
                num: "01",
                title: "Newly Equipped Gym",
                text: "Latest fitness equipment for every workout style",
              },
              {
                num: "02",
                title: "Certified Trainers",
                text: "Professional guidance every step of the way",
              },
              {
                num: "03",
                title: "Clean & Hygienic",
                text: "Sanitized environment for your safety",
              },
              {
                num: "04",
                title: "Personalized Training",
                text: "Custom programs designed for you",
              },
            ].map((feature) => (
              <div key={feature.num} className="border-2 border-gym-white/10 bg-gym-black/50 p-8 flex flex-col justify-between h-64 hover:border-gym-gold transition-colors duration-300">
                <span className="font-bebas text-4xl text-gym-gold/40">{feature.num}.</span>
                <div className="mt-auto">
                  <h3 className="font-bebas text-2xl md:text-3xl text-gym-white uppercase tracking-wider mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-sm text-gym-white/70 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TWISTING RIBBON DIVIDER #1 (Transition About -> Why Us) */}
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

      {/* 4. WHY CHOOSE US (Scroll-locked Pinned Storytelling Section) */}
      <WhyChooseUsScroll />

      {/* 5. MOTIVATION STRIP */}
      <section className="bg-gym-gold text-gym-black py-8 border-y-2 border-gym-black overflow-hidden relative z-20 flex items-center select-none">
        <div className="w-full flex items-center whitespace-nowrap overflow-hidden">
          {/* Scrolling Ticker Container */}
          <div className="animate-marquee flex gap-12 font-bebas text-3xl md:text-4xl font-bold uppercase tracking-wider">
            {/* Set 1 */}
            <span className="text-gym-black">FUEL YOUR FIRE</span>
            <span className="text-gym-black/40">•</span>
            <span className="text-gym-black">01 Your only limit is you.</span>
            <span className="text-gym-black/40">•</span>
            <span className="text-gym-black">02 Push harder than yesterday.</span>
            <span className="text-gym-black/40">•</span>
            <span className="text-gym-black">03 Discipline beats motivation.</span>
            <span className="text-gym-black/40">•</span>
            <span className="text-gym-black">04 Sweat today. Shine tomorrow.</span>
            <span className="text-gym-black/40">•</span>
            <span className="text-gym-black">05 The body achieves what the mind believes.</span>
            <span className="text-gym-black/40">•</span>
            
            {/* Set 2 (Duplicated for infinite scroll looping) */}
            <span className="text-gym-black">FUEL YOUR FIRE</span>
            <span className="text-gym-black/40">•</span>
            <span className="text-gym-black">01 Your only limit is you.</span>
            <span className="text-gym-black/40">•</span>
            <span className="text-gym-black">02 Push harder than yesterday.</span>
            <span className="text-gym-black/40">•</span>
            <span className="text-gym-black">03 Discipline beats motivation.</span>
            <span className="text-gym-black/40">•</span>
            <span className="text-gym-black">04 Sweat today. Shine tomorrow.</span>
            <span className="text-gym-black/40">•</span>
            <span className="text-gym-black">05 The body achieves what the mind believes.</span>
            <span className="text-gym-black/40">•</span>
          </div>
        </div>
      </section>

      {/* 6. CTA BAND */}
      <section className="bg-gym-black text-gym-white border-b border-gym-white/10 py-24 md:py-32 relative select-none">
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

      {/* 7. INSTAGRAM — single large card, no grid/feed */}
      <section className="py-24 md:py-32 bg-gym-black border-b border-gym-white/10 relative">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="border-2 border-gym-gold bg-gym-black/80 relative overflow-hidden flex flex-col md:flex-row items-stretch select-none">
            {/* Grid Overlay */}
            <div className="absolute inset-0 grid-bg-overlay opacity-25 pointer-events-none" />

            {/* Left Column: Visual graphic */}
            <div className="relative w-full md:w-2/5 min-h-[250px] md:min-h-auto overflow-hidden group shrink-0 border-b-2 md:border-b-0 md:border-r-2 border-gym-gold">
              <div className="absolute inset-0 bg-gym-black/35 group-hover:bg-transparent transition-colors duration-300 z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ig_post_1.png"
                alt="Instagram workout display"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 z-20 bg-gym-black border border-gym-gold p-2">
                <InstagramLogo size={24} className="text-gym-gold animate-pulse" />
              </div>
            </div>

            {/* Right Column: Copy and CTA */}
            <div className="p-8 md:p-12 flex flex-col justify-center items-start z-10 relative">
              <span className="font-mono text-xs uppercase tracking-widest text-gym-gold mb-3">
                FOLLOW US
              </span>
              <h3 className="font-bebas text-4xl md:text-5xl text-gym-white uppercase tracking-wider mb-4">
                Stay Connected
              </h3>
              <p className="font-inter text-sm md:text-base text-gym-white/70 leading-relaxed mb-6">
                Follow us on Instagram for daily workout tips, transformation stories, and behind-the-scenes action at Kourage Fitness.
              </p>
              
              <div className="font-mono text-sm text-gym-gold uppercase tracking-widest mb-8 font-bold">
                @kouragefitness_official
              </div>

              <a
                href="https://www.instagram.com/kouragefitness_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-md uppercase tracking-widest px-8 py-3.5 hover:bg-transparent hover:text-gym-gold transition-colors duration-300 text-center w-full sm:w-auto"
              >
                Follow us on Instagram &rarr;
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 8. CONTACT / LOCATION */}
      <section id="contact" className="py-24 md:py-32 bg-gym-black border-b border-gym-white/10 relative">
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

      {/* 9. FOOTER */}
      <footer className="bg-gym-black border-t border-gym-white/10 py-16 text-gym-white/50 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col items-start gap-4">
            <a href="#" className="font-bebas text-3xl tracking-widest text-gym-white">
              KOURAGE FITNESS<span className="text-gym-gold">.</span>
            </a>
            <p className="font-inter text-xs text-gym-white/40 leading-relaxed max-w-xs">
              Transform Your Body. Elevate Your Mind.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gym-gold text-lg">★★★★★</span>
              <span className="font-mono text-xs text-gym-white/40">4.9 (40 Reviews)</span>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gym-white/80 mb-4">Contact Channels</h4>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <a href="tel:+918169455350" className="hover:text-gym-gold transition-colors flex items-center gap-2">
                  <Phone size={14} className="text-gym-gold" />
                  +91 81694 55350
                </a>
              </li>
              <li>
                <a href="https://wa.me/918169455350" target="_blank" rel="noopener noreferrer" className="hover:text-gym-gold transition-colors flex items-center gap-2">
                  <span className="text-gym-gold font-bold">WA</span>
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kouragefitness_official/" target="_blank" rel="noopener noreferrer" className="hover:text-gym-gold transition-colors flex items-center gap-2">
                  <InstagramLogo size={14} className="text-gym-gold" />
                  @kouragefitness_official
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gym-white/80 mb-4">Address & Operating Hours</h4>
            <p className="font-inter text-xs text-gym-white/40 leading-relaxed">
              2nd Floor, B Wing, Bhagyashree Apartment,<br />
              Dr Ambedkar Road, Mulund West, Mumbai 400080<br />
              Opens 5:30 AM Daily
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-gym-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono">
          <p>© 2026 Kourage Fitness. All rights reserved.</p>
          <p className="text-gym-white/20">Excellence in every detail.</p>
        </div>
      </footer>
      
    </div>
  );
}
