"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface ProgramCardProps {
  number: string;
  title: string;
  description: string;
  tag: string;
}

export function ProgramCard({ number, title, description, tag }: ProgramCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coords relative to the element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-10 to 10 degrees)
    const rY = ((mouseX - width / 2) / (width / 2)) * 12;
    const rX = -((mouseY - height / 2) / (height / 2)) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="w-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          scale: rotateX !== 0 || rotateY !== 0 ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
        className="relative h-full flex flex-col justify-between border-2 border-gym-white/10 bg-gym-black/40 p-8 md:p-10 select-none cursor-pointer group hover:border-gym-gold transition-colors duration-300"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Subtle grid background on card */}
        <div className="absolute inset-0 grid-bg-overlay opacity-30" />

        {/* Content */}
        <div style={{ transform: "translateZ(30px)" }}>
          <div className="flex justify-between items-start mb-12">
            <span className="font-bebas text-4xl text-gym-white/20 group-hover:text-gym-gold/40 transition-colors duration-300">
              {number}
            </span>
            <span className="border border-gym-gold px-3 py-1 font-mono text-[10px] uppercase text-gym-gold tracking-widest">
              {tag}
            </span>
          </div>

          <h3 className="font-bebas text-4xl md:text-5xl text-gym-white tracking-wide uppercase mb-4 leading-none group-hover:text-gym-gold transition-colors duration-300">
            {title}
          </h3>
        </div>

        <div style={{ transform: "translateZ(20px)" }} className="mt-auto">
          <p className="font-inter text-sm md:text-base leading-relaxed text-gym-white/70">
            {description}
          </p>
          <div className="mt-8 flex items-center gap-2 text-gym-gold font-mono text-xs uppercase tracking-widest font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Enquire Discipline &rarr;
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProgramCard;
