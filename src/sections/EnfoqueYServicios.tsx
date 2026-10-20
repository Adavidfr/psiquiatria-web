import {
  ArrowRight,
  ArrowDown,
  ClipboardList,
  Smile,
  Activity,
  HeartHandshake,
  FileCheck,
  MessagesSquare,
} from "lucide-react";
import logo from "@/imports/logo.png";
import imgNeurociencia from "@/imports/enfoque/neurocienciaClinica.png";
import imgHistoria from "@/imports/enfoque/historiaDeVida.png";
import imgContexto from "@/imports/enfoque/contextoYVinculos.png";
import imgTratamiento from "@/imports/enfoque/tratamientoPersonalizado.png";

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
      desc: "Estados mentales: depresivos, ansiosos, hipoejecutivos, psicóticos, búsqueda de identidad, etc",
    },
    {
      icon: Activity,
      title: "Adultos",
      desc: "Construcción de identidad, vínculos, toma de decisiones.",
    },
    {
      icon: HeartHandshake,
      title: "Psicogeriatría",
      desc: "Deterioro cognitivo, demencias, delirium, Salud Mental en el adulto mayor.",
    },
    {
      icon: FileCheck,
      title: "Segunda opinión",
      desc: "Revisión de diagnósticos y tratamientos.",
    },
    {
      icon: MessagesSquare,
      title: "Orientación a la familia",
      desc: "Psicoeducación y guía en el proceso.",
    },
  ];

  return (
    <section id="enfoque-nodo" className="py-16 sm:py-24 bg-[#F5F2EC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fila 1: MI ENFOQUE y DIAGRAMA RADIAL EXPANDIDO */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Columna Izquierda: MI ENFOQUE */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base lg:text-[16px] font-bold tracking-[0.24em] text-[#C8A46A] uppercase">
                  MI ENFOQUE
                </span>
                <ArrowDown className="w-4 h-4 text-[#C8A46A] animate-bounce" />
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.15] text-[#10253F]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Una psiquiatría basada en conexiones e historia de vida.
              </h2>
            </div>

            <p className="text-base text-[#10253F]/80 leading-relaxed font-normal">
              La experiencia emocional no depende de un único factor. Cerebro,
              cuerpo, desarrollo, vínculos, experiencias y contexto forman
              sistemas que interactúan de manera dinámica.
            </p>

            <p className="text-base text-[#10253F]/80 leading-relaxed font-normal">
              En NODO, comprender esas conexiones forma parte del proceso
              clínico.
            </p>

            <div className="pt-2">
              <a
                href="#sobre-mi"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.16em] text-[#10253F] hover:text-[#C8A46A] transition-colors uppercase group"
              >
                <span>CONOCE MÁS SOBRE NODO</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#C8A46A]" />
              </a>
            </div>
          </div>

          {/* Columna Derecha: Diagrama Radial de Nodos Ampliado */}
          <div className="lg:col-span-7 flex justify-center items-center py-16 sm:py-28 px-2 sm:px-10 overflow-hidden sm:overflow-visible">
            <div className="relative w-[270px] h-[270px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] scale-[0.88] xs:scale-[0.94] sm:scale-100 origin-center transition-transform duration-300 flex items-center justify-center my-8 sm:my-0">
              {/* Anillo exterior animado que crece y se empequeñece con contraste equilibrado y sutil */}
              <div className="absolute inset-0 rounded-full border border-[#C8A46A]/50 bg-[#C8A46A]/[0.02] shadow-[0_0_18px_rgba(200,164,106,0.18)] animate-pulse-glow" />

              {/* Anillo interior punteado */}
              <div className="absolute inset-8 sm:inset-10 rounded-full border border-dashed border-[#10253F]/20" />

              {/* Líneas conectoras a los 4 puntos cardinales que llegan al nodo central */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[calc(50%-40px)] sm:h-[calc(50%-56px)] lg:h-[calc(50%-64px)] bg-gradient-to-b from-transparent via-[#C8A46A]/45 to-[#C8A46A]/30" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-[calc(50%-40px)] sm:h-[calc(50%-56px)] lg:h-[calc(50%-64px)] bg-gradient-to-t from-transparent via-[#C8A46A]/45 to-[#C8A46A]/30" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-[calc(50%-40px)] sm:w-[calc(50%-56px)] lg:w-[calc(50%-64px)] bg-gradient-to-r from-transparent via-[#C8A46A]/45 to-[#C8A46A]/30" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-[calc(50%-40px)] sm:w-[calc(50%-56px)] lg:w-[calc(50%-64px)] bg-gradient-to-l from-transparent via-[#C8A46A]/45 to-[#C8A46A]/30" />

              {/* NODO CENTRAL (Sin fondo blanco) */}
              <div className="relative z-10 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border border-[#C8A46A]/40 flex flex-col items-center justify-center text-center p-2 group hover:scale-105 transition-transform duration-300">
                <img
                  src={logo}
                  alt="NODO Center"
                  className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                />
                <span className="text-[11px] sm:text-sm font-bold tracking-[0.2em] text-[#10253F] mt-0.5 sm:mt-1">
                  NODO
                </span>
              </div>

              {/* NODO SUPERIOR: Neurociencia clínica */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center w-64 sm:w-72 lg:w-80 z-10">
                <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 flex items-center justify-center mb-1 transition-transform hover:scale-110 duration-200">
                  <img
                    src={imgNeurociencia}
                    alt="Neurociencia clínica"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#10253F] leading-tight">
                  Neurociencia clínica
                </span>
                <p className="text-[10px] sm:text-[11.5px] text-[#10253F]/75 leading-snug mt-1 font-normal max-w-[260px] sm:max-w-[280px]">
                  Redes cerebrales (DMN/SALIENCIA/EJECUTIVA), plasticidad (BDNF) y funcionamiento cognitivo (toma de decisiones).
                </p>
              </div>

              {/* NODO DERECHO: Contexto y vínculos */}
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center w-40 sm:w-60 z-10">
                <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 flex items-center justify-center mb-1 transition-transform hover:scale-110 duration-200">
                  <img
                    src={imgContexto}
                    alt="Contexto y vínculos"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#10253F] leading-tight">
                  Contexto y vínculos
                </span>
                <p className="text-[10px] sm:text-[11.5px] text-[#10253F]/75 leading-snug mt-1 font-normal max-w-[155px] sm:max-w-[220px]">
                  Relaciones personales, familia, entorno sociocultural, qué crees de ti y del mundo.
                </p>
              </div>

              {/* NODO INFERIOR: Tratamiento personalizado */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col items-center text-center w-64 sm:w-80 lg:w-92 z-10">
                <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 flex items-center justify-center mb-1 transition-transform hover:scale-110 duration-200">
                  <img
                    src={imgTratamiento}
                    alt="Tratamiento personalizado"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#10253F] leading-tight">
                  Tratamiento personalizado
                </span>
                <p className="text-[10px] sm:text-[11.5px] text-[#10253F]/75 leading-snug mt-1 font-normal max-w-[270px] sm:max-w-[320px]">
                  Un plan terapéutico individualizado, basado en evidencia científica, que integra psicofarmacología racional, intervenciones psicoterapéuticas y estrategias adaptadas a tus necesidades.
                </p>
              </div>

              {/* NODO IZQUIERDO: Historia de vida */}
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center w-40 sm:w-60 z-10">
                <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 flex items-center justify-center mb-1 transition-transform hover:scale-110 duration-200">
                  <img
                    src={imgHistoria}
                    alt="Historia de vida"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#10253F] leading-tight">
                  Historia de vida
                </span>
                <p className="text-[10px] sm:text-[11.5px] text-[#10253F]/75 leading-snug mt-1 font-normal max-w-[155px] sm:max-w-[220px]">
                  Experiencias tempranas, desarrollo, aprendizajes, resiliencia y significado personal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fila 2: SERVICIOS (Ubicado abajo en formato amplio de 3 columnas) */}
        <div id="servicios" className="pt-20 sm:pt-24 mt-20 sm:mt-24 border-t border-[#10253F]/10 space-y-8 sm:space-y-10">
          <div className="pb-4 border-b border-[#10253F]/10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base lg:text-[16px] font-bold tracking-[0.24em] text-[#C8A46A] uppercase">
                  SERVICIOS
                </span>
                <ArrowDown className="w-4 h-4 text-[#C8A46A] animate-bounce" />
              </div>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#10253F]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Acompañamiento en cada etapa de la vida
              </h2>
            </div>
          </div>

          {/* Grid de 3 Columnas de Servicios */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white/80 border border-[#10253F]/8 hover:bg-white hover:shadow-lg hover:border-[#C8A46A]/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#F5F2EC] text-[#C8A46A] group-hover:text-[#10253F] group-hover:bg-[#C8A46A]/15 transition-colors flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm sm:text-base font-semibold text-[#10253F] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#10253F]/75 leading-relaxed font-normal">
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
    </section>
  );
}
