import { useEffect, useRef, useState } from "react";
import silueta from "@/imports/hero/hero-silueta.webp";
import manchas from "@/imports/hero/hero-manchas.webp";
import red from "@/imports/hero/hero-red.webp";
import "./HeroArte.css";

/**
 * Arte animado del hero.
 * Secuencia de entrada: fondo -> silueta -> manchas -> red de puntos.
 * Después de aparecer, manchas y red se mueven de forma casi imperceptible.
 *
 * Debe ir dentro de un contenedor con `position: relative` (o absolute)
 * y `overflow: hidden`. Ocupa todo el contenedor (absolute inset-0).
 */
interface HeroArteProps {
  className?: string;
  /**
   * Qué pasa al hacer scroll:
   * - "scroll" (por defecto): la ilustración sigue tu scroll. Al bajar, las capas se
   *   desvanecen y se separan (la red primero, la silueta al final); al subir, vuelven.
   * - "repetir": cuando el hero sale de pantalla y vuelves a verlo, la secuencia
   *   de entrada se reproduce otra vez desde el principio.
   * - "ninguno": la secuencia solo se reproduce una vez, al cargar.
   */
  modo?: "scroll" | "repetir" | "ninguno";
  onFinAnimacion?: () => void;
}

export function HeroArte({ className = "", modo = "scroll", onFinAnimacion }: HeroArteProps) {
  const raiz = useRef<HTMLDivElement>(null);
  const [cargada, setCargada] = useState(false);
  const [visible, setVisible] = useState(true);

  // Espera a que las 3 imágenes estén decodificadas para que la secuencia
  // empiece completa y no se vea ningún salto.
  useEffect(() => {
    let cancelado = false;

    const cargar = (src: string) =>
      new Promise<void>((resolver) => {
        const img = new Image();
        img.onload = () => resolver();
        img.onerror = () => resolver();
        img.src = src;
        if (img.decode) img.decode().then(() => resolver(), () => resolver());
      });

    Promise.all([silueta, manchas, red].map(cargar)).then(() => {
      if (!cancelado) setCargada(true);
    });

    return () => {
      cancelado = true;
    };
  }, []);

  // Modo "scroll": guarda en --scroll cuánto del hero ya pasó (0 a 1).
  // El CSS usa ese valor para desvanecer y mover cada capa a distinta velocidad.
  useEffect(() => {
    if (modo !== "scroll") return;
    const el = raiz.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let marco = 0;
    let ultimo = -1;

    const actualizar = () => {
      marco = 0;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / Math.max(r.height, 1)));
      if (p === ultimo) return;
      ultimo = p;
      el.style.setProperty("--scroll", p.toFixed(4));
    };
    const alScroll = () => {
      if (!marco) marco = requestAnimationFrame(actualizar);
    };

    actualizar();
    window.addEventListener("scroll", alScroll, { passive: true });
    window.addEventListener("resize", alScroll);
    return () => {
      window.removeEventListener("scroll", alScroll);
      window.removeEventListener("resize", alScroll);
      if (marco) cancelAnimationFrame(marco);
      el.style.removeProperty("--scroll");
    };
  }, [modo]);

  // Modo "repetir": al salir del todo de pantalla se reinicia la secuencia,
  // y vuelve a empezar cuando una parte suficiente del hero se ve otra vez.
  useEffect(() => {
    if (modo !== "repetir") {
      setVisible(true);
      return;
    }
    const el = raiz.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const observador = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) {
          setVisible(false);
          return;
        }
        const minimo = Math.min(
          e.boundingClientRect.height * 0.35,
          window.innerHeight * 0.3
        );
        if (e.intersectionRect.height >= minimo) setVisible(true);
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    );
    observador.observe(el);
    return () => observador.disconnect();
  }, [modo]);

  const lista = cargada && visible;

  useEffect(() => {
    if (!lista) return;
    const duracion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 0
        : 3200;
    const timer = setTimeout(() => {
      onFinAnimacion?.();
    }, duracion);
    return () => clearTimeout(timer);
  }, [lista, onFinAnimacion]);

  return (
    <div
      ref={raiz}
      className={`hero-arte ${lista ? "hero-arte--lista" : ""} ${className}`.trim()}
      aria-hidden="true"
    >
      <div className="hero-arte__capa hero-arte__capa--silueta">
        <div className="hero-arte__par">
          <img className="hero-arte__img" src={silueta} alt="" draggable={false} />
        </div>
      </div>
      <div className="hero-arte__capa hero-arte__capa--manchas">
        <div className="hero-arte__par">
          <img
            className="hero-arte__img hero-arte__img--manchas"
            src={manchas}
            alt=""
            draggable={false}
          />
        </div>
      </div>
      <div className="hero-arte__capa hero-arte__capa--red">
        <div className="hero-arte__par">
          <img
            className="hero-arte__img hero-arte__img--red"
            src={red}
            alt=""
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}