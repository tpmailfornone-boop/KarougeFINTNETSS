"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number; // in seconds
}

export function Counter({ value, suffix = "", duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const end = value;
    // Animate at ~60fps
    const totalFrames = Math.floor(duration * 60);

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      // Ease out quad formula
      const easedProgress = progress * (2 - progress);
      const current = Math.floor(easedProgress * end);
      
      setCount(current);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-bebas text-5xl md:text-6xl text-gym-gold tracking-wider">
      {count}
      {suffix}
    </span>
  );
}

export default Counter;
