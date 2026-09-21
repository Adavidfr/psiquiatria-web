import { ArrowRight, MapPin } from "lucide-react";
import footerBg from "@/imports/footer.jpg";

export function CTA() {
  return (
    <section className="relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F5F2EC]">
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
        <div className="grid lg:grid-cols-12 gap-8 items-center text-center lg:text-left">
          {/* Lado Izquierdo: Ubicación */}
          <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-center gap-2 text-[#10253F]/90">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C8A46A] flex-shrink-0" />
              <span className="font-semibold text-xs tracking-wider uppercase">
                Quito
              </span>
            </div>
            <span className="text-xs text-[#10253F]/75 font-normal">
              Presencial / Online
            </span>
          </div>

          {/* Centro: Titular Principal y Botón */}
          <div className="lg:col-span-6 space-y-5 text-center">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#C8A46A] uppercase">
              TU BIENESTAR IMPORTA
            </span>

            <h2
              className="text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.15] text-[#10253F]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Comencemos por comprender.
            </h2>

            <p className="text-xs sm:text-sm text-[#10253F]/80 max-w-xl mx-auto leading-relaxed">
              Cada proceso clínico comienza con una conversación y una
              evaluación cuidadosa de tu historia, necesidades y contexto.
            </p>

            <div className="pt-3">
              <a
                href="https://wa.me/593969130775?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20con%20NODO%20Psiquiatr%C3%ADa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#10253F] hover:bg-[#10253F]/90 text-[#F5F2EC] text-sm font-medium px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.03]"
              >
                <span>Agendar una consulta</span>
                <ArrowRight className="w-4 h-4 text-[#C8A46A]" />
              </a>
            </div>
          </div>

          {/* Lado Derecho: Mensaje de acompañamiento */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end text-center lg:text-right space-y-2">
            <p className="text-xs sm:text-[13px] text-[#10253F]/85 max-w-[240px] leading-relaxed">
              Si estás listo/a para dar el primer paso, estoy aquí para
              acompañarte.
            </p>
            <div className="w-10 h-[1.5px] bg-[#C8A46A]" />
          </div>
        </div>
      </div>
    </section>
  );
}
