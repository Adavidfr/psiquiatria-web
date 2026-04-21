import heroImage from "@/imports/hero.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-start pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Persona joven sintiendo libertad y paz"
          className="w-full h-full object-cover"
        />
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-8 animate-fade-in">
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-white"
            style={{ animationDelay: "0.2s" }}
          >
            Comprender lo que te pasa es el primer paso para sentirte mejor.
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Atención en psiquiatría para adolescentes y adultos jóvenes.
            Evaluación clara, tratamiento basado en evidencia y un espacio
            seguro para hablar de lo que estás viviendo.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in pt-4"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://wa.me/593969130775?text=Hola, me gustaría agendar una consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-secondary text-secondary-foreground rounded-sm hover:opacity-90 hover:scale-105 transition-all duration-200 text-center text-lg font-medium shadow-2xl"
            >
              Agendar consulta
            </a>
            <a
              href="#atencion-clinica"
              className="inline-block px-8 py-3 border-2 border-white text-white rounded-sm hover:bg-white hover:text-primary transition-all duration-200 text-center text-lg backdrop-blur-sm font-medium"
            >
              Conocer más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
