export function FilosofiaBanner() {
  return (
    <section
      aria-label="Filosofía NODO"
      className="bg-primary py-6 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">

        {/* Lado izquierdo: título */}
        <div className="flex-shrink-0">
          <p
            className="italic leading-snug text-secondary"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)",
              maxWidth: "220px",
            }}
          >
            Una psiquiatría<br />basada en conexiones
          </p>
        </div>

        {/* Divisor vertical */}
        <div
          className="hidden md:block self-stretch flex-shrink-0 bg-secondary/30"
          style={{ width: "1px", minHeight: "60px" }}
        />

        {/* Lado derecho: dos párrafos */}
        <div
          className="space-y-3 text-primary-foreground/80 leading-relaxed"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", fontSize: "clamp(0.8rem, 1.5vw, 0.92rem)" }}
        >
          <p>
            La salud mental no ocurre en el vacío. Cada persona expresa su sufrimiento
            dentro de una red única de factores biológicos, emocionales, relacionales
            y socioculturales.
          </p>
          <p>
            En NODO, el diagnóstico no busca reducir a la persona a una etiqueta, sino
            comprender con precisión cómo se organizan sus síntomas, su historia,
            su funcionamiento y sus recursos.
          </p>
        </div>

      </div>
    </section>
  );
}
