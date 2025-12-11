"use client";
import { useEffect, useRef, useState } from "react";

export default function CardServiceList({
  icon,
  title,
  message,
  linkText,
  linkUrl,
  animationDirection = "up",
  animationDelay = 0,
}) {
  const hasLink = linkText && linkUrl;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const initialOffset =
    animationDirection === "left"
      ? "-translate-x-16"
      : animationDirection === "right"
        ? "translate-x-16"
        : "translate-y-12";

  const animateClasses = visible
    ? "opacity-100 translate-x-0 translate-y-0 scale-100 blur-0"
    : `opacity-0 ${initialOffset} scale-90 blur-sm`;

  return (
    <div
      ref={ref}
      className={`group relative max-w-sm rounded-2xl border border-[#742b85] bg-transparent p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-transform will-change-opacity ${animateClasses}`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      {/* Icono junto al título */}
      {icon && (
        <div className="flex items-center gap-3 mb-3 text-[#742b85]">
          <span className="w-6 h-6">{icon}</span>
          <h5 className="text-xl font-semibold text-gray-900">{title}</h5>
        </div>
      )}

      <div className="flex flex-col h-full justify-start text-left">
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">{message}</p>

        {hasLink && (
          <p className="text-sm font-semibold text-[#742b85] mt-auto">
          </p>
        )}
      </div>
    </div>
  );
}
