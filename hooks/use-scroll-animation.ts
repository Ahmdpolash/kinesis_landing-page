"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Tracks scroll progress (0→1) for a section as it moves through the viewport.
 * Supports phased progress for multi-step animations.
 */
export function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const height = ref.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollableRange = height - windowHeight;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / scrollableRange)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return progress;
}

/**
 * Tracks element visibility with IntersectionObserver.
 * Returns isVisible boolean and can trigger once or continuously.
 */
export function useInView(
  threshold = 0.15,
  triggerOnce = true,
  rootMargin = "0px 0px -50px 0px"
) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, isVisible };
}

/**
 * Staggered reveal hook — returns an array of animation styles
 * for children elements based on a parent's visibility.
 */
export function useStaggeredReveal(
  count: number,
  threshold = 0.1,
  baseDelay = 0.05
) {
  const { ref, isVisible } = useInView(threshold);

  const getStyles = useCallback(
    (index: number) => ({
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0px) scale(1)" : "translateY(30px) scale(0.97)",
      transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
      transitionDelay: isVisible ? `${baseDelay * index}s` : "0s",
    }),
    [isVisible, baseDelay]
  );

  return { ref, isVisible, getStyles };
}

/**
 * Animated counter hook — animates from start to end value.
 */
export function useCountUp(
  end: number,
  duration = 2000,
  start = 0,
  enabled = true
) {
  const [value, setValue] = useState(start);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(start + (end - start) * eased));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration, start, enabled]);

  return value;
}

/**
 * Mouse position tracking hook (for ambient glow, parallax, etc.)
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}
