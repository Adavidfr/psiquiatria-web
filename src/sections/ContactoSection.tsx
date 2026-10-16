import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import { sendContactEmail } from "@/services/emailService";

export function ContactoSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);
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
      }, 5000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al enviar el mensaje",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#10253F]/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Texto Izquierdo */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#C8A46A] uppercase">
              CONTACTO DIRECTO
            </span>

            <h2
              className="text-3xl sm:text-4xl font-normal text-[#10253F] leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Hablemos
            </h2>

            <p className="text-sm sm:text-base text-[#10253F]/80 leading-relaxed font-normal">
              Si tienes preguntas sobre los servicios o quieres saber más antes
              de agendar una consulta, puedes escribirme directamente a través
              del formulario o por los canales oficiales.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#10253F]/10 flex items-center justify-center flex-shrink-0 text-[#C8A46A] group-hover:text-[#10253F] transition-colors shadow-sm">
                  <MapPin className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#10253F]">
                    Ubicación
                  </h4>
                  <p className="text-xs text-[#10253F]/70">Quito - Ecuador</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#10253F]/10 flex items-center justify-center flex-shrink-0 text-[#C8A46A] group-hover:text-[#10253F] transition-colors shadow-sm">
                  <Phone className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#10253F]">
                    Teléfono / WhatsApp
                  </h4>
                  <p className="text-xs text-[#10253F]/70">+593 96 913 0775</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#10253F]/10 flex items-center justify-center flex-shrink-0 text-[#C8A46A] group-hover:text-[#10253F] transition-colors shadow-sm">
                  <Mail className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#10253F]">
                    Correo Electrónico
                  </h4>
                  <p className="text-xs text-[#10253F]/70">alecis13@hotmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario Derecho */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#10253F]/10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center animate-fade-in">
                <CheckCircle className="w-12 h-12 text-[#C8A46A]" />
                <h3
                  className="text-2xl font-medium text-[#10253F]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Mensaje enviado
                </h3>
                <p className="text-sm text-[#10253F]/70 max-w-md">
                  Gracias por comunicarte. Responderé a tu solicitud a la
                  brevedad posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {error && (
                  <div className="flex items-center gap-3 p-3.5 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <p className="text-red-700 text-xs">{error}</p>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label
                    htmlFor="nombre"
                    className="text-xs font-semibold text-[#10253F] block"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre y apellido"
                    className="w-full bg-[#FAF8F5] border border-[#10253F]/15 rounded-lg px-4 py-2.5 text-sm text-[#10253F] placeholder:text-[#10253F]/40 focus:outline-none focus:border-[#10253F] focus:ring-1 focus:ring-[#10253F] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="correo"
                    className="text-xs font-semibold text-[#10253F] block"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    required
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    className="w-full bg-[#FAF8F5] border border-[#10253F]/15 rounded-lg px-4 py-2.5 text-sm text-[#10253F] placeholder:text-[#10253F]/40 focus:outline-none focus:border-[#10253F] focus:ring-1 focus:ring-[#10253F] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="mensaje"
                    className="text-xs font-semibold text-[#10253F] block"
                  >
                    Mensaje o motivo de consulta
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="¿En qué puedo orientarte?"
                    className="w-full bg-[#FAF8F5] border border-[#10253F]/15 rounded-lg px-4 py-2.5 text-sm text-[#10253F] placeholder:text-[#10253F]/40 focus:outline-none focus:border-[#10253F] focus:ring-1 focus:ring-[#10253F] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#10253F] text-[#F5F2EC] rounded-lg hover:bg-[#10253F]/90 transition-all font-medium text-sm shadow-sm disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Enviando mensaje...
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
    </section>
  );
}
