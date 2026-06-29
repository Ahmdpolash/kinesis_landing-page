"use client";

import { useInView, useCountUp } from "@/hooks/use-scroll-animation";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label?: string;
  className?: string;
  decimals?: number;
}

export function CountUp({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  label,
  className = "",
  decimals = 0,
}: CountUpProps) {
  const { ref, isVisible } = useInView(0.3);
  const count = useCountUp(end, duration, 0, isVisible);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="overflow-hidden">
        <span className="font-medium text-foreground tabular-nums text-5xl md:text-6xl lg:text-7xl block transition-all duration-700">
          {prefix}
          {decimals > 0 ? count.toFixed(decimals) : count}
          {suffix}
        </span>
      </div>
      {label && (
        <p className="mt-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {label}
        </p>
      )}
    </div>
  );
}
