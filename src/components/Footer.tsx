import {
  MapPin,
  Phone,
  Mail,
  Heart,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from "../services/emailService";

export function Footer() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await sendContactEmail(formData);
      setSubmitted(true);
      setFormData({ nombre: "", correo: "", mensaje: "" });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al enviar el mensaje",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      id="contacto"
      className="bg-beige border-t border-primary/10"
    >
      {/* Formulario de contacto */}
      <div className="py-10 px-4 sm:px-6 lg:px-8 border-b border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Texto izquierdo */}
            <div className="space-y-6 pb-2 md:pb-0">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
                Hablemos
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Si tienes preguntas sobre los servicios o quieres saber más
                antes de agendar una consulta, puedes escribirme directamente.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-sm bg-offwhite flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-foreground">Quito - Ecuador</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-sm bg-offwhite flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-foreground">+593 96 913 0775</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-sm bg-offwhite flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-foreground">alecis13@hotmail.com</span>
                </div>
              </div>
            </div>

            {/* Formulario derecho */}
            <div className="bg-offwhite/60 backdrop-blur-sm rounded-sm p-6 sm:p-8 shadow-sm border border-primary/8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center animate-fade-in">
                  <CheckCircle className="w-14 h-14 text-secondary" />
                  <h3 className="font-serif text-2xl text-foreground">
                    Mensaje enviado
                  </h3>
                  <p className="text-foreground/70">
                    Gracias por escribirme. Me pondré en contacto contigo muy
                    pronto.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                >
                  {/* Mostrar errores */}
                  {error && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-sm">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}
                  {/* Nombre */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="nombre"
                      className="text-sm font-medium text-foreground/80 block"
                    >
                      Nombre
                    </label>
                    <div
                      className={`relative transition-all duration-200 ${focused === "nombre" ? "ring-2 ring-secondary/40 rounded-sm" : ""}`}
                    >
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        onFocus={() => setFocused("nombre")}
                        onBlur={() => setFocused(null)}
                        placeholder="Tu nombre completo"
                        className="w-full bg-offwhite border border-primary/20 rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-secondary/60 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Correo */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="correo"
                      className="text-sm font-medium text-foreground/80 block"
                    >
                      Correo electrónico
                    </label>
                    <div
                      className={`relative transition-all duration-200 ${focused === "correo" ? "ring-2 ring-secondary/40 rounded-sm" : ""}`}
                    >
                      <input
                        id="correo"
                        name="correo"
                        type="email"
                        required
                        value={formData.correo}
                        onChange={handleChange}
                        onFocus={() => setFocused("correo")}
                        onBlur={() => setFocused(null)}
                        placeholder="tu@correo.com"
                        className="w-full bg-offwhite border border-primary/20 rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-secondary/60 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="mensaje"
                      className="text-sm font-medium text-foreground/80 block"
                    >
                      Mensaje
                    </label>
                    <div
                      className={`relative transition-all duration-200 ${focused === "mensaje" ? "ring-2 ring-secondary/40 rounded-sm" : ""}`}
                    >
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        rows={5}
                        value={formData.mensaje}
                        onChange={handleChange}
                        onFocus={() => setFocused("mensaje")}
                        onBlur={() => setFocused(null)}
                        placeholder="¿En qué puedo ayudarte?"
                        className="w-full bg-offwhite border border-primary/20 rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-secondary/60 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-medium shadow-sm disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:grid sm:grid-cols-[1fr_auto_1fr] gap-0 mb-6 items-start">
            <div className="sm:pr-8">
              <h3 className="font-serif text-xl mb-5 text-foreground">
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
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  Atención a domicilio
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  Emergencias psiquiátricas
                </li>
              </ul>
            </div>

            {/* Divisor centrado — oculto en móvil */}
            <div className="hidden sm:flex justify-center pt-1">
              <div className="w-px h-28 bg-primary/15" />
            </div>

            <div className="sm:pl-8 mt-8 sm:mt-0">
              <h3 className="font-serif text-xl mb-5 text-foreground">
                Información
              </h3>
              <p className="text-foreground text-sm leading-relaxed bg-offwhite/50 p-4 rounded-sm border-l-2 border-secondary max-w-full sm:max-w-[80%]">
                Este sitio no reemplaza atención de emergencia. En caso de
                crisis o riesgo inmediato, acude a un servicio de urgencias.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior delgada */}
      <div
        style={{ backgroundColor: "#495A58" }}
        className="py-2 px-4"
      >
        <p
          className="text-center text-[10px] sm:text-xs flex flex-row items-center justify-center gap-1.5 whitespace-nowrap"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          {/* Versión corta en móvil */}
          <span className="sm:hidden">
            © {new Date().getFullYear()} NODO | Alejandra Castillo M.D.
          </span>
          {/* Versión completa en sm+ */}
          <span className="hidden sm:inline">
            © {new Date().getFullYear()} NODO | Network-Based Psychiatry by Alejandra Castillo M.D.
          </span>
          <Heart className="w-3 h-3 text-secondary flex-shrink-0" />
        </p>
      </div>
    </footer>
  );
}
