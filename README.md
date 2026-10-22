# NODO | Network-Based Psychiatry
### Dra. Alejandra Castillo — Médico Psiquiatra

Sitio web oficial y landing page médica para **NODO | Network-Based Psychiatry**, la práctica clínica de la **Dra. Alejandra Castillo** en Quito, Ecuador. Una plataforma diseñada con estética editorial premium, minimalista y contemporánea, orientada a transmitir confianza, rigor científico y calidez humana.

---

## 🧠 Sobre el Proyecto

NODO propone una psiquiatría basada en redes y conexiones que entiende que la experiencia emocional no depende de un único factor aislado, sino de la interacción dinámica entre cerebro, cuerpo, desarrollo, vínculos y contexto vital.

### Pilares del Enfoque Clínico:
1. **Neurociencia clínica:** Redes cerebrales (*DMN / Saliencia / Ejecutiva*), plasticidad neuronal (*BDNF*) y funcionamiento cognitivo (*toma de decisiones*).
2. **Historia de vida:** Experiencias tempranas, desarrollo psicológico, aprendizajes, resiliencia y significado personal.
3. **Contexto y vínculos:** Relaciones interpersonales, familia, entorno sociocultural y sistema de creencias.
4. **Tratamiento personalizado:** Plan terapéutico individualizado basado en evidencia científica que integra psicofarmacología racional e intervenciones psicoterapéuticas.

---

## ✨ Características Principales

- **Diseño Editorial & Neuroestética:** Paleta cromática exclusiva (*NODO Navy* `#10253F`, *NODO Gold* `#C8A46A` y *NODO Ivory* `#F5F2EC`) con tipografía refinada (*Playfair Display* e *Inter*).
- **Hero Interactivo y Artístico:** Animación multicapa por canvas/SVG que despliega una silueta humana, red de circuitos neuronales y una nube dinámica de conceptos clave sincronizada al término de la animación.
- **Diagrama Radial Interactivo ("Mi Enfoque"):** Representación geométrica viva de los 4 pilares con ilustraciones transparentes personalizadas y efecto de pulsación orgánica (`pulseGlow`).
- **Servicios Clínicos Especializados:** Catálogo estructurado en tarjetas de alta legibilidad para evaluación integral, adolescentes y jóvenes, adultos, psicogeriatría, segunda opinión y orientación a familias.
- **Sección Biográfica & Credenciales:** Perfil profesional de la especialista, formación de posgrado, rotaciones internacionales y trayectoria docente con iconografía unificada.
- **Formulario de Contacto Funcional (EmailJS):** Formulario con validación en tiempo real y envío directo al correo oficial (`nodopsiquiatria@gmail.com`).
- **Botón Flotante Inteligente (`FloatingCTA`):** Acceso permanente a agendamiento por WhatsApp con detección automática vía `IntersectionObserver`: desaparece al entrar en la sección de llamada a la acción principal para evitar redundancia visual y reaparece al salir de ella.
- **100% Responsivo:** Adaptabilidad perfecta para smartphones, tablets y pantallas de escritorio.
- **Arquitectura Modular:** Componentes desacoplados, sección de blog/recursos (*Homo Sapiens*) preparada para futura activación.

---

## 🛠️ Stack Tecnológico

| Tecnología | Propósito |
| :--- | :--- |
| **React 18** | Biblioteca para la interfaz de usuario basada en componentes funcionales |
| **TypeScript** | Tipado estático para robustez y mantenimiento del código |
| **Vite 6** | Entorno de desarrollo ultra rápido y empaquetador de producción |
| **Tailwind CSS v4** | Framework de estilos utility-first de última generación |
| **Lucide Icons** | Iconografía moderna, consistente y de trazo fino |
| **@emailjs/browser** | Integración del formulario de contacto sin necesidad de backend dedicado |

---

## 📁 Estructura del Código

```text
psiquiatria-web/
├── public/                     # Activos estáticos públicos
├── src/
│   ├── app/
│   │   └── page.tsx            # Ensamblador principal de la landing page
│   ├── components/             # Componentes transversales
│   │   ├── FloatingCTA.tsx     # Botón flotante inteligente de WhatsApp
│   │   ├── Footer.tsx          # Pie de página institucional
│   │   ├── HeroArte.tsx        # Animación visual por capas del Hero
│   │   └── Navbar.tsx          # Barra de navegación fija con backdrop blur
│   ├── imports/                # Recursos gráficos y multimedia
│   │   ├── enfoque/            # Ilustraciones transparentes de los 4 pilares
│   │   │   ├── contextoYVinculos.png
│   │   │   ├── historiaDeVida.png
│   │   │   ├── neurocienciaClinica.png
│   │   │   └── tratamientoPersonalizado.png
│   │   ├── about.jpg           # Fotografía profesional de la Dra. Alejandra Castillo
│   │   ├── footer.jpg          # Paisaje de fondo de montañas (Quito)
│   │   ├── firma.png           # Firma manuscrita de la psiquiatra
│   │   └── logo.png            # Logotipo vectorial de la red NODO
│   ├── sections/               # Secciones de la página
│   │   ├── ContactoSection.tsx # Formulario y canales directos de contacto
│   │   ├── CTA.tsx             # Sección de paisaje "Tu Bienestar Importa"
│   │   ├── EnfoqueYServicios.tsx # Mi Enfoque (diagrama radial) y Servicios
│   │   ├── Hero.tsx            # Encabezado principal con títulos y acciones
│   │   ├── HomoSapiens.tsx     # Sección de divulgación (modular / reservada)
│   │   └── SobreMiPreview.tsx  # Perfil, biografía y credenciales profesionales
│   ├── services/
│   │   └── emailService.ts     # Configuración y envío de correo con EmailJS
│   └── styles/
│       └── theme.css           # Tokens de diseño, variables CSS y keyframes
├── .env                        # Credenciales de EmailJS (ignorado en Git)
├── index.html                  # Plantilla HTML con SEO y fuentes de Google
├── package.json                # Dependencias y scripts del proyecto
├── tsconfig.json               # Configuración de TypeScript
└── vite.config.ts              # Configuración de Vite y plugins
```

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
- **Node.js** (versión 18.x o superior recomendada)
- **npm**, **pnpm** o **yarn**

### 1. Clonar el repositorio
```bash
git clone https://github.com/Adavidfr/psiquiatria-web.git
cd psiquiatria-web
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configuración de Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto basándote en la plantilla:

```env
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
```

> **Nota:** El servicio de correo está configurado para remitir los mensajes a `nodopsiquiatria@gmail.com`.

### 4. Ejecutar en modo desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173/`.

### 5. Compilar para producción
```bash
npm run build
```
Los archivos optimizados para despliegue se generarán en la carpeta `dist/`.

---

## 🎨 Paleta de Colores de NODO

- **NODO Navy (`#10253F`):** Color principal que representa serenidad, profundidad y rigor médico.
- **NODO Gold (`#C8A46A`):** Acento cálido que simboliza calidez humana, iluminación y empatía.
- **NODO Ivory (`#F5F2EC`):** Fondo neutro orgánico que evita la frialdad del blanco puro.
- **NODO Stone (`#B8B7B2`):** Tono neutro para bordes y detalles sutiles.

---

## 📞 Canales de Contacto Directo

- **Ubicación:** Quito, Ecuador (Modalidad: Presencial / Online / Domicilio)
- **WhatsApp Directo:** [+593 96 913 0775](https://wa.me/593969130775)
- **Correo Electrónico:** [nodopsiquiatria@gmail.com](mailto:nodopsiquiatria@gmail.com)

---

## 📄 Licencia

Desarrollado para **NODO | Network-Based Psychiatry by Alejandra Castillo M.D.** Todos los derechos reservados © 2026.
