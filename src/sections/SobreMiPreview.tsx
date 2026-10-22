import {
  GraduationCap,
  Stethoscope,
  BookOpen,
  Globe,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Users,
} from "lucide-react";
import aboutImage from "@/imports/about.jpg";
import firmaImage from "@/imports/firma.png";
import { ImageWithFallback } from "@/components/utils/ImageWithFallback";

export function SobreMiPreview() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Especialista en Psiquiatría",
      institution: "Médico psiquiatra",
    },
    {
      icon: Globe,
      title: "Prácticas profesionales externas",
      institution: "Hospital Miguel Servet (España) y Hospital Santa Fé (Panamá)",
    },
    {
      icon: BookOpen,
      title: "Docente universitaria",
      institution: "Psiquiatría en pregrado y posgrado",
    },
    {
      icon: Users,
      title: "Actualización y formación continua",
      institution: "Neurociencia, psicofarmacología, psicogeriatría y educación en salud mental",
    },
  ];

  return (
    <section
      id="sobre-mi"
      className="relative py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#10253F]/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid landscape:grid-cols-12 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Columna Izquierda: Imagen del alto de la sección (desktop y mobile horizontal) */}
          <div className="hidden landscape:block lg:block landscape:col-span-5 lg:col-span-5 landscape:sticky lg:sticky landscape:top-20 lg:top-24">
            <div className="relative w-full h-[450px] landscape:max-lg:h-[340px] sm:h-[550px] lg:h-[720px] rounded-2xl overflow-hidden shadow-xl border border-[#10253F]/10">
              <ImageWithFallback
                src={aboutImage}
                alt="Dra. Alejandra Castillo - Médico Psiquiatra"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Columna Derecha: Todo el contenido en secciones verticales */}
          <div className="landscape:col-span-7 lg:col-span-7 space-y-10 sobre-mi-right-col">
            {/* SECCIÓN 1: Identidad y Biografía */}
            <div className="space-y-5 sobre-mi-bio">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base lg:text-[16px] font-bold tracking-[0.24em] text-[#C8A46A] uppercase">
                  SOBRE MÍ
                </span>
                <ArrowDown className="w-4 h-4 text-[#C8A46A] animate-bounce" />
              </div>

              <div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#10253F] leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Alejandra Castillo
                </h2>
                <p className="text-base sm:text-lg font-medium text-[#C8A46A] mt-1 font-serif italic">
                  Humano - Médico - Psiquiatra
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#10253F]/85 leading-relaxed text-justify">
                <p>
                 Mi práctica clínica parte de una convicción: comprender la salud mental requiere mirar más allá de los síntomas.
                 Integro neurociencia, desarrollo humano e historia de vida para comprender la complejidad de cada experiencia
                  emocional. Desde una perspectiva científica, ética y humana, busco construir una atención psiquiátrica precisa,
                  individualizada y respetuosa de la singularidad de cada persona.
                </p>
              </div>

              {/* Imagen visible SOLO en mobile vertical (portrait): en horizontal se muestra a la izquierda */}
              <div className="block landscape:hidden lg:hidden pt-2">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-[#10253F]/10">
                  <ImageWithFallback
                    src={aboutImage}
                    alt="Dra. Alejandra Castillo - Médico Psiquiatra"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>
            </div>

            {/* SECCIÓN 2: Credenciales y Formación Profesional */}
            <div className="space-y-4 pt-4 border-t border-[#10253F]/10 sobre-mi-full-width sobre-mi-credenciales">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C8A46A]" />
                <h3
                  className="text-lg sm:text-xl font-medium text-[#10253F]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Formación y Credenciales
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5">
                {credentials.map((cred, idx) => {
                  const Icon = cred.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-[#10253F]/10 shadow-xs flex items-start gap-3.5 hover:border-[#C8A46A]/50 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-[#F5F2EC] text-[#10253F] flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 stroke-[1.75]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-[#10253F] leading-snug">
                          {cred.title}
                        </h4>
                        <p className="text-[11px] text-[#10253F]/65 mt-0.5 leading-snug">
                          {cred.institution}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SECCIÓN 3: Filosofía y Tarjeta de Cita con Firma a la Derecha (Sin imagen de fondo) */}
            <div className="pt-4 border-t border-[#10253F]/10 sobre-mi-full-width">
              <div className="relative p-6 sm:p-7 rounded-2xl bg-[#F5F2EC] border border-[#10253F]/10 shadow-sm overflow-hidden flex flex-col justify-between space-y-4">
                <blockquote
                  className="text-lg sm:text-xl font-serif italic text-[#10253F] leading-relaxed max-w-xl"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  “Comprender a una persona implica reconocer las conexiones entre
                  <br className="hidden sm:inline" />
                  {" "}  su cerebro, su historia y el mundo que habita.”
                </blockquote>

                {/* Firma manuscrita proporcionada y alineada a la derecha */}
                <div className="flex justify-end items-center pt-2">
                  <img
                    src={firmaImage}
                    alt="Firma Dra. Alejandra Castillo"
                    className="h-10 sm:h-12 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
