import emailjs from "@emailjs/browser";

// Configurar EmailJS con tu Public Key
// Necesitas crear una cuenta en emailjs.com
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";

// Inicializar EmailJS
if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
}

interface ContactFormData {
  nombre: string;
  correo: string;
  mensaje: string;
}

export async function sendContactEmail(
  formData: ContactFormData,
): Promise<boolean> {
  // Validación básica
  if (
    !formData.nombre.trim() ||
    !formData.correo.trim() ||
    !formData.mensaje.trim()
  ) {
    throw new Error("Por favor completa todos los campos");
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.correo)) {
    throw new Error("Por favor ingresa un email válido");
  }

  // Verificar que las claves estén configuradas
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    console.error("EmailJS no está configurado correctamente");
    throw new Error("El servicio de correo no está disponible en este momento");
  }

  try {
    // Enviar email al usuario
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      to_email: "adavidfruiz@gmail.com",
      from_name: formData.nombre,
      from_email: formData.correo,
      message: formData.mensaje,
      reply_to: formData.correo,
    });

    return true;
  } catch (error) {
    console.error("Error al enviar correo:", error);
    throw new Error("No se pudo enviar el mensaje. Intenta más tarde.");
  }
}
