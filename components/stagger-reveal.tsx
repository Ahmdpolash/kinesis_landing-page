"use client";

import { useStaggeredReveal } from "@/hooks/use-scroll-animation";

interface StaggerRevealProps {
  children: React.ReactNode[];
  className?: string;
  threshold?: number;
  baseDelay?: number;
  wrapperClassName?: string;
}

export function StaggerReveal({
  children,
  className = "",
  threshold = 0.05,
  baseDelay = 0.06,
  wrapperClassName = "",
}: StaggerRevealProps) {
  const { ref, getStyles } = useStaggeredReveal(children.length, threshold, baseDelay);

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={wrapperClassName}
          style={getStyles(index)}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

/**
 * A simpler inline reveal — one element that fades+slides up when in view.
 */
export function Reveal({
  children,
  className = "",
  threshold = 0.15,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}) {
  const { ref, isVisible } = useStaggeredReveal(1, threshold, delay);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
