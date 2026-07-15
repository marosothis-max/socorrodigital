# 🤝 SocorroDigital

**Tu guía gratuita para realizar trámites migratorios y legales de forma autónoma**

SocorroDigital es una plataforma de ayuda humanitaria creada por y para migrantes venezolanos y de todas las nacionalidades. Ofrecemos tutoriales gratuitos, claros y paso a paso para que puedas realizar tus propios trámites migratorios y legales sin necesidad de pagar a gestores.

## 🎯 Misión

Empoderar a migrantes para que puedan regularizar su situación migratoria de forma autónoma, ahorrando tiempo y dinero, evitando abusos y construyendo una vida digna en el país que los acoge.

## ✨ Características

- ✅ **100% Gratuito** - Sin costos ocultos, sin suscripciones
- 📝 **Tutoriales paso a paso** - Información clara y sin tecnicismos
- 🌍 **Múltiples países** - España activo, Francia y EEUU próximamente
- 📱 **Mobile-first** - Diseñado para funcionar perfectamente en móviles
- 🔄 **Actualizado constantemente** - Información verificada y al día

## 🗂️ Países y Categorías

### España 🇪🇸 (Activo)
- **Migración**: Residencias, permisos de trabajo, nacionalidad
- Próximamente: Vivienda, Empleo, Salud, Educación, Trámites Bancarios

### Francia 🇫🇷 (Próximamente)
### Estados Unidos 🇺🇸 (Próximamente)

## 🚀 Tecnologías

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Deployment**: Vercel
- **Arquitectura**: Escalable y modular (País → Categoría → Tutorial)

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar producción
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
├── app/                    # Pages (Next.js App Router)
│   ├── [pais]/            # Rutas dinámicas por país
│   ├── acerca-de/         # Quiénes somos
│   ├── faq/               # Preguntas frecuentes
│   └── contacto/          # Contacto
├── components/            # Componentes React
│   ├── ui/               # Componentes base
│   ├── layout/           # Header, Footer
│   ├── country/          # Componentes de país
│   ├── category/         # Componentes de categoría
│   └── tutorial/         # Componentes de tutorial
├── config/               # Configuración
│   ├── site.ts          # Config general
│   ├── countries.ts     # Config de países
│   └── categories.ts    # Config de categorías
├── content/              # Contenido de tutoriales
└── types/                # TypeScript types
```

## 🤝 Contribuir

¿Has pasado por un trámite que no está en la plataforma? ¿Encontraste información desactualizada? ¡Nos encantaría tu ayuda!

1. Abre un Issue describiendo el tutorial que falta o la corrección necesaria
2. Fork del repositorio
3. Crea una rama con tu contribución
4. Envía un Pull Request

## 📝 Aviso Legal

La información en SocorroDigital es orientativa y se basa en fuentes oficiales. No sustituye el asesoramiento legal profesional. Siempre verifica la información con las autoridades competentes y consulta con un abogado para casos complejos.

## 💖 Creado por

**Maro. G**

Migrante, desarrollador y creador de SocorroDigital. Convirtiendo la experiencia migratoria en herramientas útiles para la comunidad.

## 📄 Licencia

Este proyecto está bajo licencia MIT. El contenido está disponible para uso educativo y no comercial.

---

**SocorroDigital** - Ayudando a migrantes a construir una vida digna a través de la información gratuita y accesible.

🌐 [socorrodigital.vercel.app](https://socorrodigital.vercel.app)
