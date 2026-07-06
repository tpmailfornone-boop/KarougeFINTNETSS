"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedRaysProps {
    /** Additional CSS classes */
    className?: string;
    /** Optional children to render over the background */
    children?: React.ReactNode;
}

export function AnimatedRays({
    className = "",
    children,
}: AnimatedRaysProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const stripes = `repeating-linear-gradient(
        100deg,
        var(--stripe-color, #1A1A18) 0%,
        var(--stripe-color, #1A1A18) 7%,
        transparent 10%,
        transparent 12%,
        var(--stripe-color, #1A1A18) 16%
    )`;
    const rainbow = `repeating-linear-gradient(
        100deg,
        #EF9F27 10%,
        #1A1A18 15%,
        #EF9F27 20%,
        #FFF3D4 25%,
        #EF9F27 30%
    )`;

    return (
        <section className={cn("relative w-full h-full overflow-hidden", className)}>
            {/* Aurora Background — gold-on-black */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `${stripes}, ${rainbow}`,
                    backgroundSize: "300%, 200%",
                    backgroundPosition: "50% 50%, 50% 50%",
                    filter: "blur(10px) opacity(60%) saturate(150%)",
                    maskImage: "radial-gradient(ellipse at 100% 0%, black 50%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse at 100% 0%, black 50%, transparent 80%)",
                }}
            >
                {/* Animated overlay */}
                <div
                    className="absolute inset-0 animate-aurora-bg"
                    style={{
                        backgroundImage: `${stripes}, ${rainbow}`,
                        backgroundSize: "200%, 100%",
                        backgroundAttachment: "fixed",
                        mixBlendMode: "difference",
                    }}
                />
            </div>

            {children && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                    {children}
                </div>
            )}
        </section>
    );
}

export default AnimatedRays;
