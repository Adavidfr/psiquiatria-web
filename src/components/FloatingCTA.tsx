import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

export function FloatingCTA() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isInCTASection, setIsInCTASection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledPastHero(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctaSection = document.getElementById("tu-bienestar");
    if (!ctaSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInCTASection(entry.isIntersecting);
        });
      },
      {
        rootMargin: "-80px 0px -80px 0px",
        threshold: 0.15,
      }
    );

    observer.observe(ctaSection);
    return () => observer.disconnect();
  }, []);

  const isVisible = isScrolledPastHero && !isInCTASection;

  return (
    <a
      href="https://wa.me/593969130775?text=Hola, me gustaría agendar una consulta"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta de psiquiatría por WhatsApp"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 px-6 py-3.5 sm:px-8 sm:py-4 bg-[#10253F] text-white text-sm sm:text-base font-medium rounded-full shadow-2xl shadow-[#10253F]/35 border border-white/15 hover:bg-[#10253F]/90 hover:scale-105 transition-all duration-300 flex items-center gap-3 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#C8A46A]" aria-hidden="true" />
      <span>Agendar consulta</span>
    </a>
  );
}
