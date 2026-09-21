import {
  ArrowRight,
  Brain,
  User,
  Users,
  Sparkles,
  ClipboardList,
  Smile,
  Activity,
  HeartHandshake,
  FileCheck,
  MessagesSquare,
} from "lucide-react";
import logo from "@/imports/logo.png";

export function EnfoqueYServicios() {
  const servicios = [
    {
      icon: ClipboardList,
      title: "Evaluación psiquiátrica integral",
      desc: "Diagnóstico y plan de tratamiento personalizado.",
    },
    {
      icon: Smile,
      title: "Adolescentes y jóvenes",
      desc: "Ansiedad, depresión, TDAH, psicosis, identidad, etc.",
    },
    {
      icon: Activity,
      title: "Adultos",
      desc: "Depresión, bipolaridad, trastornos de ansiedad, estrés, etc.",
    },
    {
      icon: HeartHandshake,
      title: "Psicogeriatría",
      desc: "Deterioro cognitivo, demencias, delirium, salud mental en el adulto mayor.",
    },
    {
      icon: FileCheck,
      title: "Segunda opinión",
      desc: "Revisión de diagnósticos y tratamientos.",
    },
    {
      icon: MessagesSquare,
      title: "Orientación a familiares",
      desc: "Psicoeducación y guía en el proceso.",
    },
  ];

  return (
    <section id="enfoque-nodo" className="py-16 sm:py-24 bg-[#F5F2EC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Columna Izquierda: NUESTRO ENFOQUE */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#C8A46A] uppercase">
                NUESTRO ENFOQUE
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-[34px] font-normal leading-tight text-[#10253F]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Una psiquiatría basada en conexiones.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#10253F]/80 leading-relaxed font-normal">
              La experiencia emocional no depende de un único factor. Cerebro,
              cuerpo, desarrollo, vínculos, experiencias y contexto forman
              sistemas que interactúan de manera dinámica.
            </p>

            <p className="text-sm sm:text-base text-[#10253F]/80 leading-relaxed font-normal">
              En NODO, comprender esas conexiones forma parte del proceso
              clínico.
            </p>

            <div className="pt-2">
              <a
                href="#sobre-mi"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[#10253F] hover:text-[#C8A46A] transition-colors uppercase group"
              >
                <span>CONOCE MÁS SOBRE NODO</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#C8A46A]" />
              </a>
            </div>
          </div>

          {/* Columna Central: Diagrama Radial de Nodos */}
          <div className="lg:col-span-4 flex justify-center py-4">
            <div className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] flex items-center justify-center">
              {/* Anillos orbitales decorativos */}
              <div className="absolute inset-0 rounded-full border border-[#10253F]/10 animate-pulse-glow" />
              <div className="absolute inset-8 rounded-full border border-dashed border-[#C8A46A]/30" />

              {/* Líneas conectoras a los 4 puntos cardinales */}
              <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#C8A46A]/40 to-transparent" />
              <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#C8A46A]/40 to-transparent" />

              {/* NODO CENTRAL */}
              <div className="relative z-10 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white shadow-md border border-[#10253F]/10 flex flex-col items-center justify-center text-center p-2 group hover:scale-105 transition-transform">
                <img
                  src={logo}
                  alt="NODO Center"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-[10px] font-bold tracking-widest text-[#10253F] mt-0.5">
                  NODO
                </span>
              </div>

              {/* NODO SUPERIOR: Neurociencia clínica */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col items-center text-center w-40 z-10">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#10253F]/10 flex items-center justify-center text-[#C8A46A] mb-1">
                  <Brain className="w-5 h-5 stroke-[1.5]" />
                </div>
                <span className="text-[11px] font-semibold text-[#10253F] leading-tight">
                  Neurociencia clínica
                </span>
                <span className="text-[9px] text-[#10253F]/60 leading-tight hidden sm:block max-w-[130px]">
                  Redes cerebrales, plasticidad y funcionamiento cognitivo.
                </span>
              </div>

              {/* NODO DERECHO: Contexto y vínculos */}
              <div className="absolute right-0 top-1/2 translate-x-1/4 -translate-y-1/2 flex flex-col items-center text-center w-28 z-10">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#10253F]/10 flex items-center justify-center text-[#C8A46A] mb-1">
                  <Users className="w-5 h-5 stroke-[1.5]" />
                </div>
                <span className="text-[11px] font-semibold text-[#10253F] leading-tight">
                  Contexto y vínculos
                </span>
              </div>

              {/* NODO INFERIOR: Tratamiento personalizado */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 flex flex-col items-center text-center w-36 z-10">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#10253F]/10 flex items-center justify-center text-[#C8A46A] mb-1">
                  <Sparkles className="w-5 h-5 stroke-[1.5]" />
                </div>
                <span className="text-[11px] font-semibold text-[#10253F] leading-tight">
                  Tratamiento personalizado
                </span>
              </div>

              {/* NODO IZQUIERDO: Historia de vida */}
              <div className="absolute left-0 top-1/2 -translate-x-1/4 -translate-y-1/2 flex flex-col items-center text-center w-28 z-10">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#10253F]/10 flex items-center justify-center text-[#C8A46A] mb-1">
                  <User className="w-5 h-5 stroke-[1.5]" />
                </div>
                <span className="text-[11px] font-semibold text-[#10253F] leading-tight">
                  Historia de vida
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: SERVICIOS */}
          <div id="servicios" className="lg:col-span-4 space-y-6">
            <div className="flex items-center justify-between border-b border-[#10253F]/10 pb-3">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#C8A46A] uppercase">
                SERVICIOS
              </span>
              <a
                href="#contacto"
                className="inline-flex items-center gap-1 text-xs text-[#10253F]/70 hover:text-[#10253F] transition-colors"
              >
                <span>Ver todos los servicios</span>
                <ArrowRight className="w-3 h-3 text-[#C8A46A]" />
              </a>
            </div>

            <h2
              className="text-2xl sm:text-3xl font-normal leading-tight text-[#10253F]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Acompañamiento en cada etapa de la vida.
            </h2>

            {/* Grid 2x3 de Servicios */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {servicios.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/70 border border-[#10253F]/8 hover:bg-white hover:shadow-sm hover:border-[#C8A46A]/40 transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="p-1.5 rounded-md bg-[#F5F2EC] text-[#C8A46A] group-hover:text-[#10253F] transition-colors flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 stroke-[1.75]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-semibold text-[#10253F] leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-[#10253F]/70 leading-normal font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
