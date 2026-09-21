import {
  GraduationCap,
  Stethoscope,
  BookOpen,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import aboutImage from "@/imports/about.jpg";
import firmaImage from "@/imports/firma.png";
import { ImageWithFallback } from "@/components/utils/ImageWithFallback";

export function SobreMiPreview() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Especialista en Psiquiatría",
      institution: "Universidad UTE",
    },
    {
      icon: Stethoscope,
      title: "Médico General",
      institution: "Universidad Nacional de Loja",
    },
    {
      icon: BookOpen,
      title: "Maestría en Educación (en curso)",
      institution: "Universidad Casa Grande",
    },
    {
      icon: Globe,
      title: "Nivel de Inglés C1",
      institution: "Competencia profesional avanzada",
    },
  ];

  return (
    <section
      id="sobre-mi"
      className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#10253F]/10 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Columna Izquierda: Imagen del alto de la sección */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[720px] rounded-2xl overflow-hidden shadow-xl border border-[#10253F]/10 group">
              <ImageWithFallback
                src={aboutImage}
                alt="Dra. Alejandra Castillo - Médico Psiquiatra"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay sutil inferior con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#10253F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Columna Derecha: Todo el contenido en secciones verticales */}
          <div className="lg:col-span-7 space-y-10">
            {/* SECCIÓN 1: Identidad y Biografía */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#C8A46A] uppercase">
                  SOBRE MÍ
                </span>
                <span className="w-8 h-px bg-[#C8A46A]/50" />
              </div>

              <div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#10253F] leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Alejandra Castillo
                </h2>
                <p className="text-base sm:text-lg font-medium text-[#C8A46A] mt-1 font-serif italic">
                  Médico psiquiatra
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#10253F]/85 leading-relaxed text-justify">
                <p>
                  Creo en una psiquiatría que escucha, que integra la ciencia con la experiencia humana 
                  y que entiende que cada persona es una historia única.
                </p>
              </div>
            </div>

            {/* SECCIÓN 2: Credenciales y Formación Profesional */}
            <div className="space-y-4 pt-4 border-t border-[#10253F]/10">
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
            <div className="pt-4 border-t border-[#10253F]/10">
              <div className="relative p-6 sm:p-7 rounded-2xl bg-[#F5F2EC] border border-[#10253F]/10 shadow-sm overflow-hidden flex flex-col justify-between space-y-4">
                <blockquote
                  className="text-lg sm:text-xl font-serif italic text-[#10253F] leading-relaxed max-w-xl"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  “La ciencia nos ayuda a comprender.
                  <br className="hidden sm:inline" />
                  {" "}La empatía nos permite acompañar.”
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
