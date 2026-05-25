# Configuración del Formulario de Contacto

## Pasos para configurar el envío de correos

El formulario de contacto está configurado para usar **EmailJS**, un servicio gratuito que permite enviar correos directamente desde el frontend.

### 1. Crear una cuenta en EmailJS

1. Ve a [EmailJS](https://www.emailjs.com/) y crea una cuenta gratuita
2. Verifica tu correo

### 2. Configurar un Email Service

1. En el dashboard, ve a **Email Services**
2. Haz clic en **Create New Service**
3. Elige tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta de email
5. Copia el **Service ID** (lo usaremos en `.env`)service_kuvkqlg

### 3. Crear una Email Template

1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Dale un nombre descriptivo (ej: "contact_form")
4. En el contenido, usa estas variables:

   ```
   Nuevo mensaje de contacto:

   Nombre: {{from_name}}
   Email: {{from_email}}

   Mensaje:
   {{message}}
   ```

5. Asegúrate de que el email de destino sea: **{{to_email}}**
6. Guarda y copia el **Template ID**

### 4. Obtener tus claves públicas

1. Ve a **Account** → **API Keys**
2. Copia tu **Public Key**

### 5. Configurar variables de entorno

1. Abre o crea el archivo `.env` en la raíz del proyecto
2. Agrega las siguientes líneas:
   ```
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
   VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
   ```
3. Reemplaza los valores con los que obtuviste en los pasos anteriores

### 6. Reinicia el servidor de desarrollo

```bash
npm run dev
```

## Características implementadas

✅ Validación de campos (nombre, email, mensaje)  
✅ Validación de formato de email  
✅ Indicador de carga mientras se envía  
✅ Mensaje de éxito tras envío exitoso  
✅ Manejo de errores con mensajes claros  
✅ Los correos se envían a: **adavidfruiz@gmail.com**

## Solucionar problemas

### El formulario no envía correos

- Verifica que las variables de entorno estén configuradas correctamente
- Asegúrate de que EmailJS está inicializado con tu Public Key
- Revisa la consola del navegador para ver errores

### No aparecen los correos en la bandeja

- Verifica que tu template de email tiene la sintaxis correcta
- Asegúrate de que el Service ID y Template ID sean correctos
- Revisa si el correo fue bloqueado por filtros de spam

### El email de destino no es correcto

- En `src/services/emailService.ts`, línea 36, cambia `'adavidfruiz@gmail.com'` por el email que desees

## Variables de email disponibles

En tu template de EmailJS puedes usar:

- `{{to_email}}` - Email de destino (adavidfruiz@gmail.com)
- `{{from_name}}` - Nombre del usuario
- `{{from_email}}` - Email del usuario
- `{{message}}` - Contenido del mensaje
- `{{reply_to}}` - Para responder directamente al usuario
