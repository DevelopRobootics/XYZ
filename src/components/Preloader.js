"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const MIN_DISPLAY_MS = 2000;
const MAX_TIMEOUT_MS = 3500;

export default function Preloader({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = performance.now();

    const startExit = () => {
      setIsLoaded(true);
      // Espera breve para permitir la animación de salida antes de quitar interacción
      setTimeout(() => setIsVisible(false), 450);
    };

    const handleLoad = () => {
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(startExit, remaining);
    };

    const timerFallback = setTimeout(startExit, MAX_TIMEOUT_MS); // fallback para evitar bloqueo

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timerFallback);
    };
  }, []);

  const overlayState = isLoaded ? "opacity-0" : "opacity-100";

  const overlayZ = isVisible ? "z-[60] pointer-events-auto" : "-z-10 pointer-events-none";

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-white/95 backdrop-blur-sm transition-opacity duration-500 ${overlayState} ${overlayZ}`}
        aria-busy={!isLoaded && isVisible}
      >
        <div className="w-20 h-20">
          <Image
            src="/favicon.png"
            alt="Logo cargando"
            width={160}
            height={160}
            className={`w-full h-full object-contain ${
              isLoaded ? "animate-logo-popout" : "animate-logo-spin"
            }`}
            priority
          />
        </div>
      </div>

      <div className={isLoaded ? "opacity-100 transition-opacity duration-100" : "opacity-0 transition-opacity duration-100"}>
        {children}
      </div>

      <style jsx global>{`
        @keyframes logo-spin {
          0% {
            transform: rotate(0deg) scale(0.5);
          }
          50% {
            transform: rotate(180deg) scale(1.5);
          }
          100% {
            transform: rotate(360deg) scale(2.5);
          }
        }
        @keyframes logo-popout {
          0% {
            transform: rotate(0deg) scale(3);
            opacity: 1;
          }
          60% {
            transform: rotate(0deg) scale(0);
            opacity: 1;
          }
          100% {
            transform: rotate(360deg) scale(0) translateY(-200px);
            opacity: 0;
          }
        }
        .animate-logo-spin {
          animation: logo-spin 1.25s ease-in-out 1 forwards;
        }
        .animate-logo-popout {
          animation: logo-popout 0.75s cubic-bezier(0.6, 0, 0.4, 1) forwards;
        }
      `}</style>
    </>
  );
}
