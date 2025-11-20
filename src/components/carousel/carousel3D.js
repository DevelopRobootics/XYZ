"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

// Carrusel 1
const imageGroups1 = [
  ["/Home/design.png", "/Home/develop.png", "/Home/meeting.jpg"],
  ["/Home/plan.jpg", "/Home/design.png", "/Home/develop.png"],
  ["/Home/meeting.jpg", "/Home/plan.jpg", "/Home/design.png"],
];

// Carrusel 2
const imageGroups2 = [
  ["/Home/develop.png", "/Home/plan.jpg", "/Home/design.png"],
  ["/Home/meeting.jpg", "/Home/develop.png", "/Home/plan.jpg"],
  ["/Home/design.png", "/Home/meeting.jpg", "/Home/develop.png"],
];

function Carousel({ imageGroups }) {
  const ref = useRef(null);

  useEffect(() => {
    let scrollPos = 0;

    const step = () => {
      const el = ref.current;
      if (!el) return;

      scrollPos += 0.5;
      if (scrollPos >= el.scrollWidth - el.clientWidth) {
        scrollPos = 0;
      }

      el.scrollTo({ left: scrollPos, behavior: "smooth" });
    };

    const interval = setInterval(step, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      className="flex overflow-x-auto scroll-smooth space-x-6 px-6 py-8"
      style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE/Edge
      }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {imageGroups.map((group, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-full grid grid-cols-3 gap-4"
        >
          {group.map((src, i) => (
            <div key={i} className="rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Imagen ${i + 1}`}
                width={300}
                height={200}
                className="object-cover w-full h-[200px] rounded-lg"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function PageWithCarousels() {
  return (
    <section className="relative w-full bg-white ">
      {/* Carrusel 1 */}
      <Carousel imageGroups={imageGroups1} />

      {/* Carrusel 2 */}
      <Carousel imageGroups={imageGroups2} />
    </section>
  );
}
