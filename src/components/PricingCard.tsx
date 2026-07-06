"use client";

import React from "react";
import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
  ctaText: string;
  onCtaClick: () => void;
}

export function PricingCard({
  title,
  price,
  period,
  features,
  featured = false,
  ctaText,
  onCtaClick,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        rotateX: featured ? 2 : 1,
        rotateY: featured ? -2 : -1,
        boxShadow: "0 25px 50px -12px rgba(239, 159, 39, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative w-full flex flex-col justify-between border-2 bg-gym-black/80 p-8 md:p-10 select-none cursor-pointer ${
        featured ? "border-gym-gold shadow-[0_15px_30px_rgba(239,159,39,0.1)]" : "border-gym-white/10"
      }`}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {/* Featured Header */}
      {featured && (
        <div className="absolute top-0 right-10 -translate-y-1/2 bg-gym-gold text-gym-black font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1">
          Most Disciplined
        </div>
      )}

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-bg-overlay opacity-25" />

      {/* Content */}
      <div className="relative z-10">
        <span className={`font-mono text-xs uppercase tracking-widest ${featured ? "text-gym-gold" : "text-gym-white/40"}`}>
          {title}
        </span>
        
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-bebas text-6xl md:text-7xl text-gym-white tracking-wider">
            {price}
          </span>
          <span className="font-mono text-xs text-gym-white/40 uppercase">
            / {period}
          </span>
        </div>

        <hr className={`my-8 border-t ${featured ? "border-gym-gold/20" : "border-gym-white/10"}`} />

        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className={`font-mono text-sm ${featured ? "text-gym-gold" : "text-gym-white/70"}`}>
                &#10003;
              </span>
              <span className="font-inter text-sm md:text-base text-gym-white/70">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 mt-12">
        <button
          onClick={onCtaClick}
          className={`w-full py-4 text-center font-bebas text-lg uppercase tracking-widest transition-colors duration-300 border-2 ${
            featured
              ? "bg-gym-gold border-gym-gold text-gym-black hover:bg-transparent hover:text-gym-gold"
              : "bg-transparent border-gym-white/20 text-gym-white hover:border-gym-gold hover:text-gym-gold"
          }`}
        >
          {ctaText}
        </button>
      </div>
    </motion.div>
  );
}

export default PricingCard;
