import {
  Stethoscope,
  ClipboardList,
  Pill,
  Users,
  Brain,
  BookOpen,
  Presentation,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    label: "Consulta psiquiátrica\nespecializada",
  },
  {
    icon: ClipboardList,
    label: "Evaluación diagnóstica\nintegral",
  },
  {
    icon: Pill,
    label: "Tratamiento psicofarmacológico\nracional",
  },
  {
    icon: Users,
    label: "Salud mental en adolescentes\ny adultos jóvenes",
  },
  {
    icon: Brain,
    label: "Ansiedad, depresión, trauma,\nTDAH y trastornos afectivos",
  },
  {
    icon: BookOpen,
    label: "Psicoeducación para\npacientes y familias",
  },
  {
    icon: Presentation,
    label: "Conferencias y formación\nen salud mental",
  },
];

export function ComoAyudo() {
  return (
    <section
      id="atencion-clinica"
      className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-10">
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-offwhite"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Servicios
          </h2>
          <div className="flex items-center justify-center mt-4 gap-3">
            <div className="h-px w-16 bg-secondary/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <div className="h-px w-16 bg-secondary/50" />
          </div>
        </div>

        {/* Fila de servicios con divisores */}
        <div className="flex items-stretch justify-between overflow-x-auto">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={i} className="flex items-stretch">
                {/* Tarjeta de servicio */}
                <div className="flex flex-col items-center text-center gap-2 px-3 py-1 group min-w-[110px] max-w-[140px] cursor-default">
                  {/* Icono sin círculo */}
                  <Icon
                    className="text-secondary transition-all duration-300 group-hover:text-offwhite group-hover:scale-110"
                    style={{ width: "2.4rem", height: "2.4rem", strokeWidth: 1.25 }}
                  />
                  {/* Texto */}
                  <p
                    className="text-offwhite/85 leading-snug group-hover:text-offwhite transition-colors duration-300"
                    style={{
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      fontSize: "0.78rem",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {svc.label}
                  </p>
                </div>

                {/* Divisor vertical (excepto después del último) */}
                {i < services.length - 1 && (
                  <div className="self-stretch flex items-center">
                    <div
                      className="w-px"
                      style={{
                        height: "70%",
                        backgroundColor: "rgba(181,154,94,0.30)",
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
