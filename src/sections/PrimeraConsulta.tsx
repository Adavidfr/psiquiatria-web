import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function PrimeraConsulta() {
  return (
    <section
      id="adolescentes"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-offwhite"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-12 text-foreground">
          ¿Cómo es la primera consulta?
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              Es un espacio para conocerte, entender qué estás viviendo y
              comenzar a orientar el proceso.
            </p>
            <p>Hablaremos de tus síntomas, tu historia y lo que te preocupa.</p>
            <p>
              Si es necesario, se planteará un plan de tratamiento claro y
              adaptado a ti.
            </p>
            <p className="text-xl font-serif text-primary italic pt-4">
              Puedes venir con dudas. No necesitas tener todo claro.
            </p>
          </div>
          <div className="aspect-4/3 rounded-sm overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1650138179459-b32b7fad75a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Espacio de consulta tranquilo y acogedor"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
