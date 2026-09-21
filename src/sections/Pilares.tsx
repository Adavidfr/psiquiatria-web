import { Brain, Sprout, Network, Compass } from "lucide-react";

export function Pilares() {
  const pilares = [
    {
      icon: Brain,
      title: "NEUROCIENCIA",
      desc: "Comprender los circuitos de la experiencia humana.",
    },
    {
      icon: Sprout,
      title: "DESARROLLO HUMANO",
      desc: "Integrar la historia de vida en la práctica clínica.",
    },
    {
      icon: Network,
      title: "PSIQUIATRÍA PERSONALIZADA",
      desc: "Más que diagnósticos, personas.",
    },
    {
      icon: Compass,
      title: "CONTEXTO",
      desc: "La salud mental también ocurre en el mundo real.",
    },
  ];

  return (
    <section className="bg-[#FAF8F5] border-y border-[#10253F]/10 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-[#10253F]/10">
          {pilares.map((pilar, index) => {
            const Icon = pilar.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3.5 px-3 lg:px-5 group cursor-default"
              >
                <div className="p-2 rounded-lg bg-[#F5F2EC] text-[#C8A46A] group-hover:text-[#10253F] transition-colors flex-shrink-0">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[11px] font-bold tracking-[0.18em] text-[#10253F] uppercase">
                    {pilar.title}
                  </h3>
                  <p className="text-xs text-[#10253F]/70 leading-relaxed font-normal">
                    {pilar.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Columna 5: SALUD MENTAL - PARA UNA VIDA CON SENTIDO */}
          <div className="flex flex-col justify-center px-3 lg:px-6 py-2 lg:py-0 border-t sm:border-t-0 border-[#10253F]/10 pt-4 sm:pt-0">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#C8A46A] uppercase">
              SALUD MENTAL
            </span>
            <span
              className="text-xs sm:text-[13px] font-semibold tracking-[0.12em] text-[#10253F] uppercase mt-0.5 leading-snug"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              PARA UNA VIDA CON SENTIDO
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
