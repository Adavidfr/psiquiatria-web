import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/imports/logo.png";

const homoSapiensItems = [
  { label: "Adolescentes", href: "#" },
  { label: "Adultos Jóvenes", href: "#" },
  { label: "Adultos Mayores", href: "#" },
  { label: "Familias", href: "#" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Servicios", href: "#atencion-clinica" },
    { label: "Salud mental", href: "#salud-mental" },
  ];

  const contactoItem = { label: "Contacto", href: "#contacto" };

  const linkClass = `transition-colors duration-200 relative group text-sm font-medium ${
    isScrolled ? "text-foreground" : "text-white"
  }`;

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
              aria-label="Ir al inicio - NODO Psiquiatría"
              className="flex items-center gap-2 sm:gap-3 group select-none"
            >
              {/* Ícono de red neuronal */}
              <img
                src={logo}
                alt="Logo NODO red neuronal"
                className="w-11 h-11 sm:w-16 sm:h-16 object-contain flex-shrink-0"
                style={{ filter: isScrolled ? "none" : "brightness(0) invert(1)" }}
              />

              {/* Bloque de texto del logo */}
              <div className="flex flex-col">
                {/* N O D O */}
                <span
                  className="font-serif transition-colors duration-300"
                  style={{
                    color: isScrolled ? "#1a2744" : "#ffffff",
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    fontSize: "clamp(1.05rem, 4vw, 1.65rem)",
                    letterSpacing: "0.38em",
                    lineHeight: 1,
                  }}
                >
                  NODO
                </span>

                {/* NETWORK-BASED PSYCHIATRY */}
                <span
                  className="uppercase font-medium transition-colors duration-300"
                  style={{
                    color: isScrolled ? "#1a2744" : "rgba(255,255,255,0.85)",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    fontSize: "clamp(0.45rem, 1.8vw, 0.72rem)",
                    letterSpacing: "0.18em",
                    lineHeight: 1,
                    marginTop: "2px",
                  }}
                >
                  Network-Based Psychiatry
                </span>

                {/* by Alejandra Castillo */}
                <span
                  className="italic transition-colors duration-300"
                  style={{
                    color: isScrolled ? "#b59a5e" : "rgba(255,255,255,0.75)",
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    fontSize: "clamp(0.6rem, 2vw, 0.8rem)",
                    letterSpacing: "0.2em",
                    lineHeight: 1,
                    marginTop: "3px",
                  }}
                >
                  by Alejandra Castillo M.D.
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className={linkClass}>
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Homosapiens Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                id="homosapiens-dropdown-btn"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 relative group ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Homosapiens
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Dropdown Panel */}
              <div
                className={`absolute top-full right-0 mt-3 w-52 rounded-xl shadow-2xl border overflow-hidden transition-all duration-300 origin-top ${
                  isDropdownOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
                style={{
                  background: "rgba(255,255,255,0.97)",
                  borderColor: "rgba(181,154,94,0.25)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {homoSapiensItems.map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-gray-700 transition-colors duration-150 group"
                    style={{
                      borderBottom: i < homoSapiensItems.length - 1 ? "1px solid rgba(181,154,94,0.15)" : "none",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f0efec'; e.currentTarget.style.color = '#AA7C68'; (e.currentTarget.querySelector('span') as HTMLElement).style.backgroundColor = '#AA7C68'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; (e.currentTarget.querySelector('span') as HTMLElement).style.backgroundColor = ''; }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                    />
                    {item.label}
                </a>
                ))}
              </div>
            </div>

            {/* Contacto - último ítem */}
            <a href={contactoItem.href} className={linkClass}>
              {contactoItem.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
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
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } ${isScrolled ? "bg-offwhite border-b border-border" : "bg-black/50 backdrop-blur-sm border-b border-transparent"}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
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

          {/* Mobile Homosapiens Dropdown */}
          <div>
            <button
              id="homosapiens-mobile-btn"
              onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between py-2 text-sm font-medium transition-colors duration-200 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              style={{ animationDelay: `${menuItems.length * 0.05}s` }}
            >
              Homosapiens
              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${isMobileDropdownOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isMobileDropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pt-1 pb-2 space-y-1 border-l-2 border-amber-400/40 ml-2">
                {homoSapiensItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileDropdownOpen(false);
                    }}
                    className={`block py-1.5 text-sm transition-colors duration-150 ${
                      isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Contacto - último ítem */}
          <a
            href={contactoItem.href}
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 text-sm font-medium transition-colors duration-200 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {contactoItem.label}
          </a>
        </div>
      </div>
    </nav>
  );
}
