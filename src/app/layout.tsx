import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kourage Fitness | Premium Strength Gym Mulund West",
  description: "Elite boutique facility in Mulund West, Mumbai dedicated to high-performance strength training, CSCS personal coaching, and Hammer Strength equipment. No shortcuts, just results.",
  keywords: ["Kourage Fitness", "Gym Mulund West", "Strength Gym Mulund", "Personal Training Mulund", "Hammer Strength Mumbai", "Fitness Center Ambedkar Road"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-gym-black text-gym-white relative min-h-screen flex flex-col">
        {/* Stark premium grain overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        
        {/* Content */}
        {children}
      </body>
    </html>
  );
}
