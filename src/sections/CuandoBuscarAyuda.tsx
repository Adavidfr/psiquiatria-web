import consultaImage from "@/imports/consulta.jpg";
import { ImageWithFallback } from "@/components/utils/ImageWithFallback";

export function CuandoBuscarAyuda() {
  const reasons = [
    "Cuando lo que sientes interfiere con tu vida diaria.",
    "Cuando llevas tiempo sintiéndote mal y no mejoras.",
    "Cuando ya no sabes cómo manejar lo que te pasa.",
    "Cuando tu forma de pensar o sentir ha cambiado.",
    "Cuando sientas que estás perdiendo el control de tu vida.",
    "Cuando quieras conocer más sobre como funciona tu cerebro.",
  ];

  return (
    <section
      id="salud-mental"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-offwhite"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-4/3 rounded-sm overflow-hidden shadow-xl">
              <ImageWithFallback
                src={consultaImage}
                alt="Persona reflexionando en un momento de calma, buscando apoyo en salud mental"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              ¿Cuándo es momento de buscar ayuda profesional?
            </h2>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                >
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2.5 flex-shrink-0" />
                  <p className="text-lg text-foreground">{reason}</p>
                </div>
              ))}
            </div>
            <p className="text-xl font-serif text-primary italic pt-4">
              No necesitas estar "muy mal" para pedir ayuda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
