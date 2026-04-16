import { Stethoscope, Pill, Heart } from "lucide-react";

export function ComoAyudo() {
  const services = [
    {
      title: "Evaluación clínica completa",
      description:
        "Comprender tu historia, tus síntomas y el contexto en el que aparecen.",
      icon: Stethoscope,
    },
    {
      title: "Tratamiento basado en evidencia",
      description:
        "Uso adecuado de medicación cuando es necesario, con explicación clara y seguimiento.",
      icon: Pill,
    },
    {
      title: "Espacio de comprensión",
      description: "Un lugar donde puedes hablar sin ser juzgado.",
      icon: Heart,
    },
  ];

  return (
    <section
      id="atencion-clinica"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-16 text-offwhite">
          Cómo puedo ayudarte
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 group"
              >
                <div className="w-20 h-20 mx-auto mb-6 border-2 border-secondary rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-secondary group-hover:scale-110">
                  <IconComponent className="w-10 h-10 text-secondary group-hover:text-primary transition-colors duration-300 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl text-offwhite mb-3">
                  {service.title}
                </h3>
                <p className="text-lg text-offwhite/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
