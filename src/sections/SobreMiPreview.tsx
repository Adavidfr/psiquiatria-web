import aboutImage from "@/imports/about.jpg";
import firmaImage from "@/imports/firma.png";
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
              src={aboutImage}
              alt="Médica psiquiatra especializada en adolescentes y adultos jóvenes en Quito"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              Sobre mí
            </h2>
            <div className="space-y-4 text-lg text-foreground leading-relaxed text-justify">
              <p>
                Soy Génesis Alejandra Castillo, médico psiquiatra con una visión
                clínica orientada a la integración entre la neurociencia, el
                desarrollo humano y la historia de vida de cada persona.
              </p>
              <p>
                Mi práctica se fundamenta en comprender la salud mental desde
                una perspectiva de Network-Based Psychiatry, entendiendo que la
                experiencia emocional emerge de la interacción dinámica entre
                los circuitos cerebrales, el desarrollo, los vínculos, las
                experiencias vitales y el contexto en el que cada individuo ha
                construido su historia.
              </p>
              <p>
                Mi trabajo se centra en comprender la complejidad de cada
                persona desde una mirada científica, ética y profundamente
                humana, evitando aproximaciones reduccionistas y promoviendo una
                psiquiatría contemporánea, precisa, personalizada y basada en
                evidencia.
              </p>
            </div>

            {/* Firma */}
            <div className="pt-2 flex justify-end">
              <img
                src={firmaImage}
                alt="Firma Dra. Alejandra Castillo"
                className="h-18 w-auto object-contain opacity-80"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
