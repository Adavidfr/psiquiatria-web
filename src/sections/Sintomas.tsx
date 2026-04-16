import { Check } from "lucide-react";

export function Sintomas() {
  const symptoms = [
    "Ansiedad constante o sensación de que algo malo va a pasar",
    "Episodios de pánico o dificultad para respirar",
    "Dificultad para dormir o descansar",
    "Cansancio emocional o falta de motivación",
    "Pensamientos que no puedes detener",
    "Cambios en tu estado de ánimo",
    "Sensación de estar perdido o sobrepasado",
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-beige">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16 text-foreground">
          Tal vez te estás sintiendo así…
        </h2>
        <div className="space-y-5 mb-12">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-offwhite/70 rounded-sm hover:bg-offwhite transition-all duration-300 hover:shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <p className="text-lg text-foreground">{symptom}</p>
            </div>
          ))}
        </div>
        <p className="text-xl md:text-2xl font-serif text-center text-primary italic">
          No estás exagerando. Lo que sientes tiene una explicación y puede ser
          tratado.
        </p>
      </div>
    </section>
  );
}
