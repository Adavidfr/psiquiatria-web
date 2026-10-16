import { ArrowRight, Clock } from "lucide-react";
import brainImg from "@/imports/evaluacion.jpg";
import plantImg from "@/imports/consulta.jpg";
import mountainImg from "@/imports/footer.jpg";

export function HomoSapiens() {
  const articulos = [
    {
      img: brainImg,
      category: "NEUROCIENCIA",
      title: "El sueño: mucho más que descanso",
      readTime: "6 min de lectura",
      link: "#",
    },
    {
      img: plantImg,
      category: "DESARROLLO HUMANO",
      title: "La adolescencia: una construcción en curso",
      readTime: "5 min de lectura",
      link: "#",
    },
    {
      img: mountainImg,
      category: "PSIQUIATRÍA",
      title: "Ansiedad en un mundo hiperconectado",
      readTime: "7 min de lectura",
      link: "#",
    },
  ];

  return (
    <section id="homo-sapiens" className="py-16 sm:py-24 bg-[#F5F2EC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Encabezado / Lado Izquierdo */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#C8A46A] uppercase">
              HOMO SAPIENS
            </span>

            <h2
              className="text-2xl sm:text-3xl lg:text-[34px] font-normal leading-tight text-[#10253F]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ideas para comprendernos.
            </h2>

            <p className="text-sm sm:text-base text-[#10253F]/80 leading-relaxed font-normal">
              Un espacio para explorar la mente, el cerebro y la experiencia
              humana desde la psiquiatría, la neurociencia y el contexto.
            </p>

            <div className="pt-2">
              <a
                href="#homo-sapiens"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[#10253F] hover:text-[#C8A46A] transition-colors uppercase group"
              >
                <span>VISITAR HOMO SAPIENS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#C8A46A]" />
              </a>
            </div>
          </div>

          {/* 3 Tarjetas de Artículos */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
            {articulos.map((art, idx) => (
              <a
                key={idx}
                href={art.link}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#10253F]/10 hover:shadow-md hover:border-[#C8A46A]/40 transition-all duration-300"
              >
                {/* Imagen del artículo */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={art.img}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Contenido */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-[#C8A46A] uppercase">
                      {art.category}
                    </span>
                    <h3
                      className="text-sm sm:text-base font-medium text-[#10253F] leading-snug group-hover:text-[#C8A46A] transition-colors"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {art.title}
                    </h3>
                  </div>

                  {/* Footer con tiempo de lectura y flecha */}
                  <div className="pt-2 border-t border-[#10253F]/5 flex items-center justify-between text-[11px] text-[#10253F]/60">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C8A46A] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
