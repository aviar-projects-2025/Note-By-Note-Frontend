"use client";
import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "slide-in";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.animationDelay = `${delay}ms`;
            el.classList.add(animation === "fade-up" ? "animate-[fadeUp_0.6s_ease-out_forwards]" : animation === "slide-in" ? "animate-[slideIn_0.5s_ease-out_forwards]" : "animate-[fadeIn_0.5s_ease-out_forwards]");
            el.style.opacity = "";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      ref.current.style.opacity = "0";
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, animation]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
