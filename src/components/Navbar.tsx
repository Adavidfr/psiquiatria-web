import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Atención clínica", href: "#atencion-clinica" },
    { label: "Salud mental", href: "#salud-mental" },
    { label: "Adolescentes", href: "#adolescentes" },
    { label: "Familias", href: "#familias" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-offwhite shadow-lg"
          : "bg-transparent backdrop-blur-none"
      } border-b ${isScrolled ? "border-border" : "border-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a
              href="#inicio"
              className={`text-2xl font-serif transition-opacity ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Dra. Alejandra Castillo
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.slice(0, 6).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-200 relative group text-sm font-medium ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/593969130775?text=Hola, me gustaría agendar una consulta"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-sm hover:scale-105 transition-all duration-200 font-medium text-sm tracking-wide ${
                isScrolled
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              RESERVAR CITA
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <a
              href="https://wa.me/5939691307755?text=Hola, me gustaría agendar una consulta"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 bg-secondary text-secondary-foreground rounded-sm text-sm hover:scale-105 transition-all font-medium`}
            >
              Agendar
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${isScrolled ? "bg-offwhite border-b border-border" : "bg-black/50 backdrop-blur-sm border-b border-transparent"}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 transition-all duration-200 opacity-0 animate-fade-in text-sm font-medium ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
