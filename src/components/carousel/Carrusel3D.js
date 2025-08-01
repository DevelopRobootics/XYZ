"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const images = ["/designer.jpg", "/designer.jpg", "/designer.jpg", "/designer.jpg"];

export default function CarruselDoble() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    let offset1 = 0;
    let offset2 = 0;

    const interval = setInterval(() => {
      offset1 -= 1; // izquierda
      offset2 += 1; // derecha

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset1}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${offset2}px)`;
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const filaImagenes = images.concat(images); // duplicamos para que nunca se corte

  return (
    <div className="bg-black py-10">
      <div className="overflow-hidden w-full h-[220px]">
        <div ref={row1Ref} className="flex gap-4">
          {filaImagenes.map((src, i) => (
            <div key={`fila1-${i}`} className="w-[200px] h-[180px]">
              <Image
                src={src}
                alt={`Imagen arriba ${i + 1}`}
                width={200}
                height={180}
                className="rounded-md object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden w-full h-[220px] mt-6">
        <div ref={row2Ref} className="flex gap-4">
          {filaImagenes.map((src, i) => (
            <div key={`fila2-${i}`} className="w-[200px] h-[180px]">
              <Image
                src={src}
                alt={`Imagen abajo ${i + 1}`}
                width={200}
                height={180}
                className="rounded-md object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
