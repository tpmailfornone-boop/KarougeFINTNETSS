"use client";

import React from "react";
import { motion } from "framer-motion";

interface InstagramPost {
  id: number;
  imageUrl: string;
  caption: string;
  likes: string;
}

const posts: InstagramPost[] = [
  {
    id: 1,
    imageUrl: "/ig_post_1.png",
    caption: "Early 5:30 AM block loading. Mulund West stands up.",
    likes: "142",
  },
  {
    id: 2,
    imageUrl: "/ig_post_2.png",
    caption: "Heavy rows. Hammer Strength setups built for numbers.",
    likes: "98",
  },
  {
    id: 3,
    imageUrl: "/ig_post_3.png",
    caption: "CSCS lead coaching templates. No amateurs, no shortcuts.",
    likes: "210",
  },
  {
    id: 4,
    imageUrl: "/ig_post_4.png",
    caption: "Capacity capped, distraction free. Your slot, your iron.",
    likes: "167",
  },
  {
    id: 5,
    imageUrl: "/ig_post_5.png",
    caption: "Discipline isn't selective. Rain or shine, we lift.",
    likes: "189",
  },
  {
    id: 6,
    imageUrl: "/ig_post_6.png",
    caption: "Standard dumbbells up to 60kg. Heavy is the standard.",
    likes: "224",
  },
];

export function InstagramFeed() {
  return (
    <div className="w-full">
      {/* Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <motion.a
            key={post.id}
            href="https://www.instagram.com/kouragefitness_official/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative aspect-square border border-gym-white/10 group overflow-hidden block cursor-pointer"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gym-black/40 group-hover:bg-gym-black/10 transition-colors duration-300 z-10" />

            {/* Post Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.imageUrl}
              alt={post.caption}
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
            />

            {/* Hover Caption Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-gym-black via-gym-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
              <span className="font-mono text-[10px] text-gym-gold uppercase tracking-widest mb-1">
                @kouragefitness_official
              </span>
              <p className="font-inter text-xs text-gym-white/90 leading-relaxed mb-4">
                {post.caption}
              </p>
              <div className="flex items-center gap-2 text-[10px] text-gym-white/40 font-mono">
                <span>&hearts; {post.likes} Likes</span>
                <span>•</span>
                <span>View Post</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default InstagramFeed;
