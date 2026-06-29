"use client";

import { useMousePosition } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";

interface AmbientGlowProps {
  className?: string;
  color?: string;
  size?: number;
  opacity?: number;
  followSpeed?: number;
}

export function AmbientGlow({
  className = "",
  color = "rgba(14, 165, 233, 0.15)",
  size = 600,
  opacity = 1,
}: AmbientGlowProps) {
  const mouse = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay initial render to avoid layout shift
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div
        className="absolute transition-[left,top] duration-300 ease-out will-change-transform"
        style={{
          left: mouse.x,
          top: mouse.y,
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          background: `radial-gradient(circle at center, ${color}, transparent 70%)`,
          WebkitMaskImage: "radial-gradient(circle at center, black, transparent 70%)",
          maskImage: "radial-gradient(circle at center, black, transparent 70%)",
        }}
      />
    </div>
  );
}
