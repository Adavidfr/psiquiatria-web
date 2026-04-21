import { MapPin, Phone, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-beige py-16 px-4 sm:px-6 lg:px-8 border-t border-primary/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-6 text-foreground">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-foreground">Quito - Ecuador</p>
              </div>
              <div className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-secondary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-foreground">WhatsApp</p>
              </div>
              <div className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-secondary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-foreground">Correo</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-6 text-foreground">
              Modalidad
            </h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                Atención presencial
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                Atención virtual
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-6 text-foreground">
              Navegación
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#inicio"
                  className="text-foreground hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#sobre-mi"
                  className="text-foreground hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="#atencion-clinica"
                  className="text-foreground hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  Atención clínica
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-foreground hover:text-primary hover:translate-x-1 inline-block transition-all"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-6 text-foreground">
              Información
            </h3>
            <div className="space-y-4">
              <p className="text-foreground text-sm leading-relaxed bg-offwhite/50 p-4 rounded-sm border-l-2 border-secondary">
                Este sitio no reemplaza atención de emergencia. En caso de
                crisis o riesgo inmediato, acude a un servicio de urgencias.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            <span>© {new Date().getFullYear()} - Atención en Psiquiatría</span>
            <Heart className="w-4 h-4 text-secondary" />
          </p>
        </div>
      </div>
    </footer>
  );
}
