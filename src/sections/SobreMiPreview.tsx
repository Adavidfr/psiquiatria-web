import { ImageWithFallback } from "@/components/utils/ImageWithFallback";

export function SobreMiPreview() {
  return (
    <section
      id="sobre-mi"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-beige"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="aspect-3/4 rounded-sm overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1714976694756-28bf07af3758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Profesional de salud mental"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              Sobre mí
            </h2>
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                Soy médica psiquiatra enfocada en el abordaje de la salud mental
                en adolescentes y adultos jóvenes.
              </p>
              <p>
                Mi trabajo combina la medicina basada en evidencia con una
                comprensión profunda de la experiencia emocional de cada
                paciente.
              </p>
              <p>
                Creo en una psiquiatría clara, respetuosa y humana, donde
                entender lo que te ocurre es tan importante como tratarlo.
              </p>
            </div>
            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-block px-8 py-4 border border-primary text-primary rounded-sm hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-200"
              >
                Conocer más
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
