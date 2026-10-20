import { ArrowRight, ArrowDown, MapPin } from "lucide-react";
import footerBg from "@/imports/footer.jpg";

export function CTA() {
  return (
    <section
      id="tu-bienestar"
      className="relative min-h-[480px] sm:min-h-[540px] flex items-center justify-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F5F2EC]"
    >
      {/* Imagen de fondo de montañas al natural sin filtro azul */}
      <div className="absolute inset-0 z-0">
        <img
          src={footerBg}
          alt="Paisaje de montañas al atardecer en Quito"
          className="w-full h-full object-cover object-center contrast-[1.05]"
          loading="lazy"
        />
        {/* Overlay ligero y sutil para que la imagen se aprecie con mayor nitidez */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F2EC]/55 via-[#F5F2EC]/25 to-[#F5F2EC]/40" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center text-center lg:text-left">
          {/* Lado Izquierdo: Ubicación */}
          <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-center gap-2 text-[#10253F]/90">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#C8A46A] flex-shrink-0" />
              <span className="font-bold text-sm sm:text-base tracking-wider uppercase">
                Quito
              </span>
            </div>
            <span className="text-sm sm:text-base text-[#10253F]/80 font-normal">
              Presencial / Online / Domicilio
            </span>
          </div>

          {/* Centro: Titular Principal y Botón */}
          <div className="lg:col-span-6 space-y-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm sm:text-base lg:text-[16px] font-bold tracking-[0.24em] text-[#C8A46A] uppercase">
                TU BIENESTAR IMPORTA
              </span>
              <ArrowDown className="w-4 h-4 text-[#C8A46A] animate-bounce" />
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-[#10253F]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Comencemos por comprender.
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-[#10253F]/85 max-w-2xl mx-auto leading-relaxed font-normal">
              Cada proceso clínico comienza con una conversación y una
              evaluación cuidadosa de tu historia, necesidades y contexto.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/593969130775?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20con%20NODO%20Psiquiatr%C3%ADa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#10253F] hover:bg-[#10253F]/90 text-[#F5F2EC] text-sm sm:text-base font-medium px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] group border border-white/10"
              >
                <span>Agendar una consulta</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8A46A] transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Lado Derecho: Mensaje de acompañamiento */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end text-center lg:text-right space-y-3">
            <p className="text-sm sm:text-base lg:text-lg text-[#10253F]/85 max-w-[280px] leading-relaxed font-medium">
              Si estás listo/a para dar el primer paso, no dudes en contactarte conmigo.
            </p>
            <div className="w-12 h-[2px] bg-[#C8A46A]" />
          </div>
        </div>
      </div>
    </section>
  );
}
