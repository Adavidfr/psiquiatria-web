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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-offwhite shadow-lg" : "bg-offwhite/95 backdrop-blur-sm"
      } border-b border-border`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a
              href="#inicio"
              className="text-2xl font-serif text-primary hover:opacity-80 transition-opacity"
            >
              Psiquiatría
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.slice(0, 6).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contacto"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-sm hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              Agendar consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <a
              href="#contacto"
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-sm text-sm hover:opacity-90 transition-opacity"
            >
              Agendar
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-offwhite border-b border-border transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-foreground hover:text-primary transition-colors duration-200 opacity-0 animate-fade-in"
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
