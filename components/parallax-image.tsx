"use client";

import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  fill?: boolean;
  style?: React.CSSProperties;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  className = "",
  fill = true,
  style,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateParallax = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const centerProgress = (rect.top + rect.height / 2 - windowHeight / 2) / windowHeight;
    setOffsetY(centerProgress * speed * 100);
  }, [speed]);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateParallax]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      <div
        className="h-[120%] w-full will-change-transform"
        style={{
          transform: `translateY(${offsetY}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {fill ? (
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-cover"
          />
        ) : (
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
}
