import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/imports/logo.png";

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
    { label: "Adultos Jóvenes", href: "#adultos-jovenes" },
    { label: "Familias", href: "#familias" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
              className={`flex items-center gap-1 text-2xl font-serif transition-opacity ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              <img
                src={logo}
                alt="Logo Dra. Alejandra Castillo"
                className="w-14 h-14 object-contain mix-blend-multiply"
              />
              <span className={`block sm:hidden ml-2 text-lg font-serif transition-opacity ${isScrolled ? "text-primary" : "text-white"}`}>
                NODO
              </span>
              <span className="hidden sm:block"> N O D O</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
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
