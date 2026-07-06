"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !goal) return;

    const whatsAppNumber = "918169455350"; // Official Kourage Mulund WhatsApp
    const rawMessage = `Hi Kourage Fitness Mulund, I'd like to book a trial workout!\n\n` +
                       `*Name:* ${name}\n` +
                       `*Phone:* ${phone}\n` +
                       `*Training Goal:* ${goal}\n\n` +
                       `_(Inquiry sent via Kourage Fitness Mumbai)_`;

    const encodedText = encodeURIComponent(rawMessage);
    const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${encodedText}`;

    window.open(whatsAppUrl, "_blank", "noopener");
    setName("");
    setPhone("");
    setGoal("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gym-black/90 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-md border-2 border-gym-gold bg-gym-black p-8 select-none z-10 text-gym-white"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gym-white/40 hover:text-gym-gold text-2xl transition-colors font-mono"
            >
              &times;
            </button>

            {/* Header */}
            <div className="mb-8">
              <h3 className="font-bebas text-4xl tracking-wider text-gym-gold">
                BOOK TRIAL SESSION
              </h3>
              <p className="font-inter text-xs text-gym-white/60 mt-2">
                Leave your details below. We will compile a direct WhatsApp booking link to confirm your session instantly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-gym-white/60">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gym-black border border-gym-white/20 p-3 font-inter text-sm text-gym-white placeholder-gym-white/30 focus:border-gym-gold focus:outline-none rounded-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-mono text-xs uppercase tracking-widest text-gym-white/60">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="Enter 10-digit mobile number"
                  pattern="[0-9]{10}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-gym-black border border-gym-white/20 p-3 font-inter text-sm text-gym-white placeholder-gym-white/30 focus:border-gym-gold focus:outline-none rounded-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="goal" className="font-mono text-xs uppercase tracking-widest text-gym-white/60">
                  Training Goal
                </label>
                <select
                  id="goal"
                  required
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-gym-black border border-gym-white/20 p-3 font-inter text-sm text-gym-white focus:border-gym-gold focus:outline-none rounded-none appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
                    backgroundPosition: 'right 12px center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '16px',
                  }}
                >
                  <option value="" disabled>Select goal...</option>
                  <option value="Strength Training">Strength & Conditioning</option>
                  <option value="Personal Training">1-on-1 Personal Training</option>
                  <option value="Weight Loss">Weight Loss & Transformation</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gym-gold text-gym-black font-bebas text-lg py-4 uppercase tracking-widest border border-gym-gold hover:bg-transparent hover:text-gym-gold transition-colors duration-300 rounded-none mt-2"
              >
                Generate WhatsApp Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default BookingModal;
