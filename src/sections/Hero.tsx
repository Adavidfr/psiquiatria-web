import { ArrowRight, ArrowDown } from "lucide-react";
import { HeroArte } from "@/components/HeroArte";

const palabrasHero = [
  {
    texto: "psiquiatría",
    style: { top: "-6%", right: "2%", fontFamily: "'Playfair Display', Georgia, serif", animationDelay: "3.20s" },
    className: "text-3xl sm:text-4xl lg:text-[44px] font-normal italic text-[#10253F] -rotate-2",
  },
  {
    texto: "circuitos",
    style: { top: "13%", right: "54%", animationDelay: "3.27s" },
    className: "text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#10253F]/60",
  },
  {
    texto: "mente",
    style: { top: "22%", right: "12%", fontFamily: "'Playfair Display', Georgia, serif", animationDelay: "3.34s" },
    className: "text-2xl sm:text-3xl font-normal italic text-[#C8A46A] rotate-1",
  },
  {
    texto: "receptores",
    style: { top: "32%", right: "58%", animationDelay: "3.41s" },
    className: "text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#10253F]/65",
  },
  {
    texto: "sinapsis",
    style: { top: "40%", right: "18%", animationDelay: "3.48s" },
    className: "text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-[#C8A46A]/90",
  },
  {
    texto: "humano",
    style: { top: "49%", right: "52%", fontFamily: "'Playfair Display', Georgia, serif", animationDelay: "3.55s" },
    className: "text-lg sm:text-xl font-normal italic text-[#10253F]/85 -rotate-1",
  },
  {
    texto: "neuronas",
    style: { top: "58%", right: "6%", animationDelay: "3.62s" },
    className: "text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#10253F]/75",
  },
  {
    texto: "cerebro",
    style: { top: "67%", right: "50%", animationDelay: "3.69s" },
    className: "text-2xl sm:text-3xl lg:text-[34px] font-black uppercase tracking-[0.16em] text-[#10253F]",
  },
  {
    texto: "experiencias",
    style: { top: "76%", right: "14%", fontFamily: "'Playfair Display', Georgia, serif", animationDelay: "3.76s" },
    className: "text-sm sm:text-base font-normal italic text-[#10253F]/75 rotate-2",
  },
  {
    texto: "vínculos",
    style: { top: "85%", right: "48%", animationDelay: "3.83s" },
    className: "text-base sm:text-lg font-bold uppercase tracking-[0.22em] text-[#10253F]/85",
  },
  {
    texto: "contexto",
    style: { top: "93%", right: "8%", animationDelay: "3.90s" },
    className: "text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-[#10253F]/60",
  },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex items-center pt-24 pb-16 lg:py-0 overflow-hidden bg-[#F5F2EC]"
    >
      {/* Fondo animado por capas: fondo → silueta → manchas → red de puntos */}
      <div className="absolute inset-0 z-0">
        <HeroArte className="opacity-90" />
        {/* Overlay degradado ligero para apreciar la ilustración de red neuronal */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F2EC]/75 via-[#F5F2EC]/40 to-transparent" />
      </div>

      {/* Contenido sobre la imagen */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-6rem)] py-6 sm:py-12">
          {/* Columna Izquierda: Textos y Acciones */}
          <div className="order-1 lg:order-1 lg:col-span-7 space-y-6 sm:space-y-8 animate-fade-in">
            {/* Kicker */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm lg:text-[15px] font-bold tracking-[0.24em] text-[#10253F]/90 uppercase">
                CIENCIA · PERSONA · CONTEXTO
              </span>
            </div>

            {/* Titular Principal */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[56px] font-normal leading-[1.12] text-[#10253F] tracking-tight max-w-2xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Comprender la mente como una red
            </h1>

            {/* Descripción */}
            <p className="text-base sm:text-lg text-[#10253F]/85 leading-relaxed max-w-xl font-normal">
              NODO integra neurociencia, desarrollo humano, historia de vida y
              contexto para practicar una  psiquiatría contemporánea, personalizada y
              basada en evidencia.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-wrap items-center gap-4 pt-3 sm:pt-4">
              <a
                href="https://wa.me/593969130775?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20NODO%20Psiquiatr%C3%ADa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#10253F] hover:bg-[#10253F]/90 text-[#F5F2EC] text-[15px] sm:text-base font-medium px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
              >
                <span>Agendar cita</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href="#enfoque-nodo"
                className="inline-flex items-center justify-center border border-[#10253F]/35 hover:border-[#10253F] text-[#10253F] text-[15px] sm:text-base font-medium px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-white/40 hover:bg-white/70 backdrop-blur-xs transition-all duration-200"
              >
                Conocer NODO
              </a>
            </div>

            {/* Indicador de scroll */}
            <div className="pt-8 sm:pt-12 flex items-center gap-2.5">
              <div className="w-[1.5px] h-7 bg-[#C8A46A]" />
              <span className="text-[10px] tracking-[0.18em] uppercase text-[#10253F]/65 font-semibold">
                Desliza para explorar
              </span>
              <ArrowDown className="w-3.5 h-3.5 text-[#C8A46A] animate-bounce" />
            </div>
          </div>

          {/* Columna Derecha / Palabras clave desordenadas: oculto únicamente en mobile vertical (portrait) */}
          <div className="order-2 lg:order-2 lg:col-span-5 hidden landscape:flex lg:flex justify-end items-center self-center w-full">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] h-[360px] sm:h-[420px] lg:h-[480px] select-none ml-auto">
              {palabrasHero.map((p) => (
                <span
                  key={p.texto}
                  style={p.style}
                  className={`absolute hero-word-appear transition-transform duration-300 hover:scale-105 hover:text-[#C8A46A] cursor-default ${p.className}`}
                >
                  {p.texto}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
