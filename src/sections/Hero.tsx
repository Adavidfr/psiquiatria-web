import heroImage from "@/imports/hero.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Persona joven sintiendo libertad y paz"
          className="w-full h-full object-cover"
        />
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="space-y-8 animate-fade-in">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-7xl leading-tight text-white"
            style={{ animationDelay: "0.2s" }}
          >
            Comprender lo que te pasa es el primer paso para sentirte mejor.
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 leading-relaxed opacity-0 animate-fade-in max-w-3xl mx-auto"
            style={{ animationDelay: "0.4s" }}
          >
            Atención en psiquiatría para adolescentes y adultos jóvenes.
            <br />
            Evaluación clara, tratamiento basado en evidencia y un espacio
            seguro para hablar de lo que estás viviendo.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in justify-center pt-4"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#contacto"
              className="inline-block px-10 py-5 bg-secondary text-secondary-foreground rounded-sm hover:opacity-90 hover:scale-105 transition-all duration-200 text-center text-lg shadow-2xl"
            >
              Agendar consulta
            </a>
            <a
              href="#atencion-clinica"
              className="inline-block px-10 py-5 border-2 border-white text-white rounded-sm hover:bg-white hover:text-primary transition-all duration-200 text-center text-lg backdrop-blur-sm"
            >
              Conocer cómo puedo ayudarte
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
