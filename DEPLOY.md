# 🚀 Guía de Despliegue de SocorroDigital

## Paso 1: Crear repositorio en GitHub

1. Ve a [https://github.com/new](https://github.com/new)
2. Nombre del repositorio: `socorrodigital`
3. Descripción: `Plataforma gratuita de tutoriales para trámites migratorios`
4. Visibilidad: **Public** (para poder usar Vercel gratis)
5. **NO** marques "Add a README file" (ya tenemos uno)
6. Haz clic en **Create repository**

## Paso 2: Conectar tu repositorio local con GitHub

Ejecuta estos comandos en tu terminal (reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub):

```bash
git remote add origin https://github.com/TU_USUARIO/socorrodigital.git
git branch -M main
git push -u origin main
```

## Paso 3: Desplegar en Vercel (GRATIS)

### Opción A: Desde la web de Vercel (Recomendado)

1. Ve a [https://vercel.com](https://vercel.com)
2. Haz clic en **Sign Up** o **Log In**
3. Selecciona **Continue with GitHub**
4. Autoriza a Vercel para acceder a tus repositorios
5. Haz clic en **Import Project**
6. Busca el repositorio `socorrodigital` y haz clic en **Import**
7. Configuración:
   - **Framework Preset**: Next.js (se detecta automáticamente)
   - **Build Command**: `npm run build` (ya está configurado)
   - **Output Directory**: `.next` (ya está configurado)
8. Haz clic en **Deploy**

¡Listo! En 2-3 minutos tu sitio estará en vivo en: `https://socorrodigital.vercel.app`

### Opción B: Desde la terminal con Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login en Vercel
vercel login

# Desplegar (sigue las instrucciones en pantalla)
vercel

# Para producción
vercel --prod
```

## Paso 4: Dominio gratuito

Vercel te da GRATIS un dominio `.vercel.app`. Tu sitio estará disponible en:

```
https://socorrodigital.vercel.app
```

### Dominio personalizado (Opcional)

Si quieres un dominio como `socorrodigital.com`:

#### Opción 1: Comprar dominio en Vercel
1. En tu proyecto en Vercel, ve a **Settings** → **Domains**
2. Busca el dominio que quieres
3. Cuesta ~$12-15 USD/año

#### Opción 2: Dominio gratuito con restricciones
Algunos servicios ofrecen subdominios gratis:
- **Freenom**: `.tk`, `.ml`, `.ga`, `.cf`, `.gq` (ej: `socorrodigital.tk`)
- **is-a.dev**: Solo para desarrolladores, necesitas PR en GitHub
- **js.org**: Solo para proyectos JavaScript open source

#### Opción 3: Usar dominio que ya tengas
1. En Vercel: **Settings** → **Domains** → **Add**
2. Ingresa tu dominio
3. Configura los DNS según las instrucciones de Vercel

## 🔄 Actualizar el sitio

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de tus cambios"
git push
```

Vercel **automáticamente** desplegará la nueva versión en 2-3 minutos.

## 🌐 URLs importantes después del deploy

- **Sitio en producción**: https://socorrodigital.vercel.app
- **Dashboard de Vercel**: https://vercel.com/dashboard
- **Analytics gratis**: Automático en Vercel
- **Logs y errores**: En el dashboard de Vercel

## 📊 Características gratuitas de Vercel

- ✅ HTTPS automático
- ✅ CDN global
- ✅ Preview deployments (cada PR tiene su propio link)
- ✅ Analytics básico
- ✅ 100 GB de ancho de banda/mes
- ✅ Rollback instantáneo
- ✅ Edge Functions
- ✅ Dominios personalizados ilimitados

## 🆘 Solución de problemas

### Error: "Repository already exists"
```bash
# Elimina el remote y vuelve a agregarlo
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/socorrodigital.git
```

### Error en el build de Vercel
- Revisa los logs en el dashboard de Vercel
- Los errores más comunes son:
  - TypeScript errors: Revisa que no haya errores de tipos
  - Missing dependencies: Asegúrate de que package.json esté completo
  - Environment variables: Si usas variables de entorno, agrégalas en Settings

### El sitio no se actualiza
- Espera 2-3 minutos después del push
- Verifica en el dashboard de Vercel que el deploy haya terminado
- Limpia la caché del navegador (Ctrl + Shift + R)

## 📱 Compartir tu sitio

Una vez desplegado, puedes compartir:

- Link directo: `https://socorrodigital.vercel.app`
- QR code: Genera uno en [https://qr.io](https://qr.io) con tu URL
- Redes sociales: Vercel genera automáticamente Open Graph images

---

**¡Felicidades!** 🎉 Tu plataforma de ayuda humanitaria ya está en línea y ayudando a migrantes de todo el mundo.
