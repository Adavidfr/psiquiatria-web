import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/593969130775?text=Hola, me gustaría agendar una consulta"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 px-6 py-4 bg-secondary text-secondary-foreground rounded-full shadow-2xl hover:opacity-90 hover:scale-110 transition-all duration-300 flex items-center gap-2 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <Calendar className="w-5 h-5" />
      <span className="hidden sm:inline">Agendar consulta</span>
    </a>
  );
}
