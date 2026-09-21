import { ArrowRight } from "lucide-react";
import heroImage from "@/imports/hero2.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex items-center pt-24 pb-16 lg:py-0 overflow-hidden bg-[#F5F2EC]"
    >
      {/* Background Image: Pantalla completa (Full Screen) */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="NODO - Red neuronal y mente humana"
          className="w-full h-full object-cover object-center lg:object-right opacity-90 contrast-[1.03]"
          fetchPriority="high"
          decoding="async"
        />
        {/* Overlay degradado ligero para apreciar la ilustración de red neuronal */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F2EC]/75 via-[#F5F2EC]/40 to-transparent" />
      </div>

      {/* Contenido sobre la imagen */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-6rem)] py-12">
          {/* Columna Izquierda: Textos y Acciones */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 animate-fade-in">
            {/* Kicker */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#10253F]/80 uppercase">
                CIENCIA · PERSONA · CONTEXTO
              </span>
            </div>

            {/* Titular Principal */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[56px] font-normal leading-[1.12] text-[#10253F] tracking-tight max-w-2xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Comprender la mente como una red.
            </h1>

            {/* Descripción */}
            <p className="text-base sm:text-lg text-[#10253F]/85 leading-relaxed max-w-xl font-normal">
              NODO integra neurociencia, desarrollo humano, historia de vida y
              contexto para una psiquiatría contemporánea, personalizada y
              basada en evidencia.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/593969130775?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20NODO%20Psiquiatr%C3%ADa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#10253F] hover:bg-[#10253F]/90 text-[#F5F2EC] text-sm font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
              >
                <span>Agendar cita</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#enfoque-nodo"
                className="inline-flex items-center justify-center border border-[#10253F]/35 hover:border-[#10253F] text-[#10253F] text-sm font-medium px-6 py-3 rounded-lg bg-white/40 hover:bg-white/70 backdrop-blur-xs transition-all duration-200"
              >
                Conocer NODO
              </a>
            </div>

            {/* Indicador de scroll */}
            <div className="pt-8 sm:pt-12 flex items-center gap-3">
              <div className="w-[1.5px] h-7 bg-[#C8A46A]" />
              <span className="text-[10px] tracking-[0.18em] uppercase text-[#10253F]/65 font-semibold">
                Desliza para explorar
              </span>
            </div>
          </div>

          {/* Columna Derecha: Tags y Frase Superior Derecha */}
          <div className="lg:col-span-5 flex flex-col justify-start items-end text-right self-start lg:pt-8 pointer-events-none select-none">
            <div className="space-y-1.5 text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#10253F]/80 uppercase bg-[#F5F2EC]/40 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-3 sm:p-0 rounded-lg">
              <div>CEREBRO</div>
              <div>EXPERIENCIAS</div>
              <div>VÍNCULOS</div>
              <div>CONTEXTO</div>
              <div>PERSONA</div>
            </div>
            <div className="w-10 sm:w-12 h-[1.5px] bg-[#C8A46A] my-3 ml-auto" />
            <div
              className="font-serif italic text-sm sm:text-base text-[#10253F]/90 max-w-[200px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Una red.
              <br />
              Muchas posibilidades.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
