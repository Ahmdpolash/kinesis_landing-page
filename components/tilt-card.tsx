"use client";

import { useRef, useState, useCallback } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  perspective?: number;
  speed?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  scale = 1.01,
  perspective = 1000,
  speed = 400,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});
  const isHovering = useRef(false);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      isHovering.current = true;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) / (rect.width / 2);
        const deltaY = (e.clientY - centerY) / (rect.height / 2);

        const tiltX = deltaY * -maxTilt;
        const tiltY = deltaX * maxTilt;

        setStyle({
          transform: `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`,
          transition: `transform ${speed * 0.3}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        });

        if (glare) {
          const glareX = (deltaX + 1) / 2;
          const glareY = (deltaY + 1) / 2;
          setGlareStyle({
            background: `radial-gradient(circle at ${glareX * 100}% ${glareY * 100}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
          });
        }
      });
    },
    [maxTilt, scale, perspective, speed, glare]
  );

  const handleMouseLeave = useCallback(() => {
    isHovering.current = false;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: `transform ${speed}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    });
    if (glare) {
      setGlareStyle({ background: "transparent" });
    }
  }, [perspective, speed, glare]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        ...style,
        willChange: "transform",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0"
          style={glareStyle}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
