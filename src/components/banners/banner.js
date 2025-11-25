"use client";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"; // usa /24/solid

export default function BannerKitDigital() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null; // si está cerrado, no se renderiza

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-800/50 px-6 py-2.5 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 sm:px-3.5 sm:before:flex-1">
      {/* Fondo decorativo */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="aspect-577/310 w-144.25 bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-40"
        />
      </div>

      {/* Texto + CTA */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm text-gray-100">
          <strong className="font-semibold">XYZ Digital</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline size-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          Solicita ya tu Kit Digital y acelera la transformación de tu empresa.
        </p>
        <a
          href="/contacto"
          className="flex-none rounded-full bg-white/10 px-3.5 py-1 text-sm font-semibold text-white shadow hover:bg-white/15 transition"
        >
          Solicitar ahora <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      {/* Botón cerrar */}
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="-m-3 p-3 focus-visible:outline-none"
        >
          <span className="sr-only">Cerrar</span>
          <XMarkIcon aria-hidden="true" className="w-5 h-5 text-gray-100" />
        </button>
      </div>
    </div>
  );
}
