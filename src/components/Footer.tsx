import { Instagram, Linkedin } from "lucide-react";
import logo from "@/imports/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Enfoque NODO", href: "#enfoque-nodo" },
    { label: "Servicios", href: "#servicios" },
    { label: "Homo sapiens", href: "#homo-sapiens" },
    { label: "Recursos", href: "#homo-sapiens" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="bg-[#10253F] text-[#F5F2EC] pt-14 pb-8 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fila Principal */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="NODO Logo"
              className="w-10 h-10 object-contain filter brightness-0 invert"
            />
            <div className="flex flex-col">
              <span
                className="font-serif text-[#F5F2EC] tracking-[0.35em] text-base font-normal leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                NODO
              </span>
              <span className="text-[#F5F2EC]/75 text-[8px] tracking-[0.18em] uppercase font-semibold leading-tight">
                NETWORK-BASED PSYCHIATRY
              </span>
              <span
                className="italic text-[#C8A46A] text-[10px] leading-tight font-serif"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                by Alejandra Castillo
              </span>
            </div>
          </div>

          {/* Enlaces de Navegación */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-normal text-[#F5F2EC]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#C8A46A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Redes Sociales y Frase */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3 text-[#F5F2EC]/80">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:text-[#C8A46A] hover:bg-white/5 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:text-[#C8A46A] hover:bg-white/5 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <span
              className="text-xs font-serif italic text-[#F5F2EC]/80 hidden sm:inline"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Una red. Muchas posibilidades.
            </span>
          </div>
        </div>

        {/* Fila Inferior de Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F5F2EC]/60 gap-3">
          <p>© {currentYear} NODO. Todos los derechos reservados.</p>
          <p>Quito, Ecuador</p>
        </div>
      </div>
    </footer>
  );
}
