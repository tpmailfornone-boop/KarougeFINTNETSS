"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedRays from "@/components/ui/animated-rays";

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

export default function RulesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const steps = [
    {
      num: "Step 1",
      title: "Read the Official Rules",
      desc: "Before participating, every participant must carefully read all the Terms & Conditions."
    },
    {
      num: "Step 2",
      title: "Accept the Rules",
      desc: "At the end of the Rules page, show a checkbox: 'I have read and agree to the Official Terms & Conditions.' The Proceed to Participate button must remain disabled until this checkbox is selected. Once checked, enable the button."
    },
    {
      num: "Step 3",
      title: "Registration Payment",
      desc: "Redirect the participant to the Registration page. Display the QR Code and payment instructions."
    },
    {
      num: "Step 4",
      title: "Payment Verification",
      desc: "After payment, participants must send their payment screenshot on WhatsApp. This is NOT the competition submission. It is only used to verify payment."
    },
    {
      num: "Step 5",
      title: "Reel Submission",
      desc: "After payment verification, our team will contact the participant on WhatsApp and ask them to upload their Instagram Reel and send the Reel link. Only verified participants can submit their Reel."
    },
    {
      num: "Step 6",
      title: "Selection",
      desc: "The judging panel will review all verified entries. Submitting a Reel does not guarantee selection."
    },
    {
      num: "Step 7",
      title: "Refund Policy",
      desc: "If a participant is not selected, the registration amount will be refunded. Participants will be informed about their selection status and refund process through WhatsApp."
    }
  ];

  const accordionItems = [
    {
      title: "Eligibility Criteria",
      content: "Open to all amateur, natural bodybuilding, and classic physique athletes across India. Competitors must be at least 18 years old at the time of registration. Certified professional athletes currently signed to international federations are excluded."
    },
    {
      title: "Posing Video Requirements",
      content: "The 7 poses are:\n\n1. Front Double Biceps\n2. Front Lat Spread\n3. Side Chest\n4. Side Triceps\n5. Back Double Biceps\n6. Back Lat Spread (or Rear Lat Spread)\n7. Abdominals and Thighs"
    },
    {
      title: "Mandatory Physique Poses",
      content: "Your 60-second video sequence must showcase the following classic poses in order: 1. Front Double Biceps, 2. Side Chest (any side), 3. Back Double Biceps, 4. Abdominals & Thighs, and 5. Favorite Classic Pose. Transition between poses smoothly."
    },
    {
      title: "Lighting & Attire Guidelines",
      content: "Videos must be recorded in clean, bright lighting (natural daylight or strong indoor gym lighting) against a plain, clutter-free background. Athletes must wear proper posing trunks or athletic board shorts. Wearing loose shirts, pants, or oversized attire will result in automatic disqualification."
    },
    {
      title: "Official Judging Standards",
      content: "Entries are scored out of 100 points by certified national and international physique judges. The score breakdown is: Symmetry & Proportion (25%), Muscularity & Balance (25%), Conditioning & Hardness (25%), and Stage Presence/Posing execution (25%). Judging panel decisions are absolute and final."
    },
    {
      title: "Selection Status & Refund Policy",
      content: "Our team will update you on selection results via WhatsApp. Submitting an entry does not guarantee selection into the final bracket. If you are not selected by the judging panel, Kourage Fitness will refund 100% of your registration fee. Refund processing details will be shared on WhatsApp."
    }
  ];

  const toggleAccordion = (idx: number) => {
    setOpenAccordion(openAccordion === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-gym-black font-sans text-gym-white flex flex-col relative select-none">
      {/* 1. NAV */}
      <header className="fixed top-0 left-0 w-full z-40 border-b border-gym-gold/15 bg-gym-black/95 backdrop-blur-md py-2 h-20 sm:h-26 lg:h-32 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center justify-start group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/logo.png" 
              alt="Kourage Fitness Logo" 
              className="h-16 sm:h-22 lg:h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="font-bebas text-lg uppercase tracking-widest text-gym-white/70 hover:text-gym-gold transition-colors duration-300"
            >
              &larr; Back to Home
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gym-white hover:text-gym-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-bg-primary border-b border-gym-gold/15 px-6 py-10 flex flex-col gap-6 md:hidden z-30 shadow-[0_10px_20px_rgba(239,159,39,0.03)]">
            <Link 
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-bebas text-3xl uppercase tracking-wider text-left text-gym-white hover:text-gym-gold transition-colors"
            >
              &larr; Back to Home
            </Link>
          </div>
        )}
      </header>

      {/* 2. HERO */}
      <section className="relative w-full min-h-[35vh] md:min-h-[45vh] flex items-center overflow-hidden border-b-2 border-gym-white/10 bg-gym-black pt-32 sm:pt-40">
        <div className="absolute inset-0 z-0">
          <AnimatedRays className="w-full h-full" />
        </div>
        
        {/* Overlay grid details */}
        <div className="absolute inset-0 z-0 grid-bg-overlay opacity-30 pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 relative z-10 w-full py-16 md:py-20 flex flex-col items-center text-center"
        >
          <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gym-gold mb-6 font-semibold">
            Kourage Master Physique
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gym-white tracking-wide uppercase leading-none max-w-4xl select-none">
            Official Rules <span className="text-gym-gold">&amp; Flow</span>
          </h1>
          <p className="font-inter text-base sm:text-lg md:text-xl text-gym-white/70 max-w-2xl mt-6 leading-relaxed">
            Understand the complete participation process and rules before submitting your entry.
          </p>
        </motion.div>
      </section>

      {/* 3. HOW PARTICIPATION WORKS TIMELINE */}
      <section className="py-24 bg-bg-surface relative border-b border-border-subtle overflow-hidden">
        <div className="absolute inset-0 grid-bg-overlay opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center text-center mb-20"
          >
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-gym-gold mb-3 font-semibold">
              STEP-BY-STEP PROCESS
            </span>
            <h2 className="font-bebas text-4xl md:text-6xl text-gym-white uppercase tracking-wider">
              How Participation Works
            </h2>
            <p className="font-inter text-xs sm:text-sm text-gym-white/60 max-w-xl mt-4 leading-relaxed">
              Below is the step-by-step timeline of how you participate, complete payment verification, and submit your entry.
            </p>
          </motion.div>

          {/* Premium Vertical Timeline / Stepper */}
          <div className="relative w-full">
            {/* Central line connector */}
            <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gym-gold via-gym-gold/40 to-gym-gold/5 -translate-x-1/2 z-0" />

            <div className="flex flex-col gap-16 w-full">
              {steps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    key={idx} 
                    className="relative w-full flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between z-10"
                  >
                    {/* Centered Circle Stepper Number */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-gym-gold bg-bg-surface text-gym-gold flex items-center justify-center font-bebas text-lg font-bold shadow-[0_0_15px_rgba(239,159,39,0.2)] z-20">
                      {idx + 1}
                    </div>

                    {/* Timeline Card */}
                    <div className={`w-full md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 ${
                      isEven ? "md:mr-auto text-left" : "md:ml-auto text-left"
                    }`}>
                      <div className="border border-border-subtle bg-bg-primary/80 p-6 sm:p-8 relative rounded-sm group hover:border-gym-gold transition-all duration-300 shadow-xl">
                        {/* Corner Brackets */}
                        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-gym-gold/20 group-hover:border-gym-gold transition-all duration-300" />
                        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-gym-gold/20 group-hover:border-gym-gold transition-all duration-300" />
                        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-gym-gold/20 group-hover:border-gym-gold transition-all duration-300" />
                        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-gym-gold/20 group-hover:border-gym-gold transition-all duration-300" />

                        <span className="font-bebas text-sm text-gym-gold tracking-widest block mb-1">
                          {step.num}
                        </span>
                        <h4 className="font-bebas text-xl sm:text-2xl uppercase tracking-wider text-gym-white mb-3 group-hover:text-gym-gold transition-colors">
                          {step.title}
                        </h4>
                        <p className="font-inter text-xs sm:text-sm text-gym-white/70 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 4. DETAILED ACCORDION RULES */}
      <section className="py-24 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-overlay opacity-15 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center text-center mb-16"
          >
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-gym-gold mb-3 font-semibold">
              COMPREHENSIVE GUIDELINES
            </span>
            <h2 className="font-bebas text-4xl md:text-6xl text-gym-white uppercase tracking-wider">
              Official Rules
            </h2>
            <p className="font-inter text-xs sm:text-sm text-gym-white/60 max-w-xl mt-4 leading-relaxed">
              Read the complete Terms &amp; Conditions below before checking the agreement at the bottom.
            </p>
          </motion.div>

          {/* Accordion Component - Accordion ONLY, No cards, no summaries */}
          <div className="flex flex-col gap-4">
            {accordionItems.map((item, idx) => {
              const isOpen = openAccordion === idx;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4 }}
                  key={idx}
                  className="border border-border-subtle bg-bg-surface/50 rounded-none transition-all duration-300 hover:border-gym-gold/40"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex justify-between items-center p-6 text-left cursor-pointer focus:outline-none"
                  >
                    <span className="font-bebas text-xl sm:text-2xl uppercase tracking-wider text-gym-white hover:text-gym-gold transition-colors">
                      {item.title}
                    </span>
                    <span className="text-gym-gold text-2xl font-bebas ml-4 transition-transform duration-300 select-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 border-t border-border-subtle/50 animate-fade-in">
                      <p className="font-inter text-xs sm:text-sm text-gym-white/70 leading-relaxed whitespace-pre-wrap">
                        {item.content}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Checkbox agreement & proceed block (Bottom Section) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="border-2 border-border-subtle bg-bg-surface/90 p-8 sm:p-12 mt-16 relative rounded-sm text-center"
          >
            {/* Corner brackets */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-gym-gold/30" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-gym-gold/30" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-gym-gold/30" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-gym-gold/30" />

            <div className="flex flex-col items-center gap-6">
              <label className="flex items-start justify-center gap-3 cursor-pointer max-w-lg select-none">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 accent-gym-gold cursor-pointer w-4 h-4 rounded-none"
                />
                <span className="font-sans text-xs sm:text-sm text-gym-white/80 text-left leading-relaxed">
                  I have read and agree to the Official Terms &amp; Conditions.
                </span>
              </label>

              {agreed ? (
                <Link
                  href="/competition/register"
                  className="bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-lg uppercase tracking-widest px-12 py-4 hover:bg-transparent hover:text-gym-gold hover:shadow-[0_0_15px_rgba(239,159,39,0.25)] transition-all duration-300 w-full sm:w-auto"
                >
                  Proceed to Participate &rarr;
                </Link>
              ) : (
                <button
                  disabled
                  className="border-2 border-gym-white/10 text-gym-white/20 bg-gym-white/5 font-bebas text-lg uppercase tracking-widest px-12 py-4 cursor-not-allowed w-full sm:w-auto transition-all duration-300"
                >
                  Proceed to Participate
                </button>
              )}
            </div>
            </motion.div>

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
    </div>
  );
}
