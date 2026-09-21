import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/imports/logo.png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["inicio", "sobre-mi", "enfoque-nodo", "servicios", "homo-sapiens", "recursos", "contacto"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "#inicio", id: "inicio" },
    { label: "Sobre mí", href: "#sobre-mi", id: "sobre-mi" },
    { label: "Enfoque NODO", href: "#enfoque-nodo", id: "enfoque-nodo" },
    { label: "Servicios", href: "#servicios", id: "servicios" },
    { label: "Homo sapiens", href: "#homo-sapiens", id: "homo-sapiens" },
    { label: "Recursos", href: "#homo-sapiens", id: "recursos" },
    { label: "Contacto", href: "#contacto", id: "contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F2EC]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#10253F]/10"
          : "bg-[#F5F2EC] py-4"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#inicio"
            aria-label="NODO - Inicio"
            className="flex items-center gap-3 group select-none"
          >
            <img
              src={logo}
              alt="Logo NODO"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span
                className="font-serif text-[#10253F] tracking-[0.35em] text-base sm:text-lg font-normal leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                NODO
              </span>
              <span className="text-[#10253F]/80 text-[8px] sm:text-[9px] tracking-[0.18em] uppercase font-semibold leading-tight">
                NETWORK-BASED PSYCHIATRY
              </span>
              <span
                className="italic text-[#C8A46A] text-[10px] sm:text-[11px] leading-tight font-serif"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                by Alejandra Castillo
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-[13px] font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-[#10253F] font-semibold"
                      : "text-[#10253F]/75 hover:text-[#10253F]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A46A] rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/593969130775?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20NODO%20Psiquiatr%C3%ADa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#10253F] text-[#F5F2EC] hover:bg-[#10253F]/90 text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow hover:scale-[1.02]"
            >
              <span>Agendar cita</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#10253F] hover:bg-[#10253F]/5 rounded-lg transition-colors"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`xl:hidden transition-all duration-300 overflow-hidden bg-[#F5F2EC] border-b border-[#10253F]/10 ${
          isMenuOpen ? "max-h-[480px] opacity-100 py-4 shadow-lg" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#10253F]/85 hover:text-[#10253F] hover:bg-[#10253F]/5 px-3 rounded-md transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="https://wa.me/593969130775?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20NODO%20Psiquiatr%C3%ADa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#10253F] text-[#F5F2EC] text-sm font-medium py-2.5 rounded-full mt-2"
            >
              <span>Agendar cita</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
