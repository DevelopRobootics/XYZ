"use client";
import { useEffect, useRef, useState } from "react";

export default function PackageShowcaseCard({ card, delay = 0 }) {
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
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animateClasses = visible
    ? "opacity-100 translate-y-0 rotate-0 scale-100 blur-0"
    : "opacity-0 translate-y-10 rotate-1 scale-95 blur-sm";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group cursor-pointer transform transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${animateClasses}`}
    >
      <div className="relative rounded-2xl border border-[#742b85] bg-white/85 text-[#0e0e0e] shadow-md hover:shadow-lg p-6 transition-all duration-400">
        <h3 className="text-lg font-semibold text-[#0e0e0e]">{card.title}</h3>
        <p className="text-sm text-gray-700 leading-relaxed mt-3">{card.desc}</p>
        <ul className="mt-4 text-xs text-gray-700 space-y-1 list-disc list-inside">
          {card.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
