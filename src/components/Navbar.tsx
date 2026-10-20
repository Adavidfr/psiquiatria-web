import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/imports/logo.png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "#inicio", id: "inicio" },
    { label: "Enfoque NODO", href: "#enfoque-nodo", id: "enfoque-nodo" },
    { label: "Servicios", href: "#servicios", id: "servicios" },
    { label: "Sobre mí", href: "#sobre-mi", id: "sobre-mi" },
    // Ocultos temporalmente para uso futuro:
    // { label: "Homo sapiens", href: "#homo-sapiens", id: "homo-sapiens" },
    // { label: "Recursos", href: "#homo-sapiens", id: "recursos" },
    { label: "Contacto", href: "#contacto", id: "contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-[#F5F2EC]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#10253F]/10"
          : "bg-transparent py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#inicio"
            aria-label="NODO - Inicio"
            className="flex items-center gap-3.5 sm:gap-4 group select-none"
          >
            <img
              src={logo}
              alt="Logo NODO"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center">
              <span
                className="font-serif text-[#10253F] tracking-[0.32em] text-lg sm:text-2xl font-normal leading-none mb-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                NODO
              </span>
              <span className="text-[#10253F]/80 text-[9px] sm:text-[10.5px] tracking-[0.2em] uppercase font-semibold leading-tight">
                NETWORK-BASED PSYCHIATRY
              </span>
              <span
                className="italic text-[#C8A46A] text-[11px] sm:text-[12.5px] leading-tight font-serif"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                by Alejandra Castillo
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative py-1 text-[13px] font-medium text-[#10253F]/75 hover:text-[#10253F] transition-colors"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C8A46A] rounded-full scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
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
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-[#F5F2EC] border-b border-[#10253F]/10 ${
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
        </div>
      </div>
    </header>
  );
}
