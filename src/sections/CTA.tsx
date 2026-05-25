export function CTA() {
  return (
    <section
      id="familias"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-offwhite">
          Dar el primer paso puede cambiar mucho.
        </h2>
        <p className="text-xl md:text-2xl text-offwhite/90 leading-relaxed max-w-3xl mx-auto">
          Si sientes que necesitas ayuda, puedes agendar una consulta.
          <br />
          Este puede ser el inicio de un proceso de comprensión y cambio.
        </p>
        <div className="pt-4">
          <a
            href="https://wa.me/593969130775?text=Hola, me gustaría agendar una consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-secondary text-secondary-foreground rounded-sm hover:opacity-90 hover:scale-105 transition-all duration-200 text-base shadow-lg"
          >
            Agendar consulta
          </a>
        </div>
      </div>
    </section>
  );
}
