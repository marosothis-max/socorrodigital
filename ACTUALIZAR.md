# 🔄 Cómo actualizar GitHub y la web (Guía Rápida)

## Cada vez que hagas cambios, sigue estos 3 pasos:

### 📝 PASO 1: Guardar cambios en Git (Commit)

```bash
# Ver qué archivos cambiaron
git status

# Agregar TODOS los cambios
git add .

# O agregar archivos específicos
git add archivo1.tsx archivo2.ts

# Guardar cambios con un mensaje descriptivo
git commit -m "Descripción de lo que cambiaste"
```

**Ejemplo real:**
```bash
git add .
git commit -m "Agregar nuevo tutorial de residencia por estudios"
```

---

### 🚀 PASO 2: Subir a GitHub (Push)

```bash
# Subir todos los commits pendientes
git push
```

**¡Eso es todo!** 
- GitHub se actualiza automáticamente
- Vercel detecta el cambio y actualiza la web en 2-3 minutos

---

### ✅ PASO 3: Verificar que se actualizó

1. **GitHub**: Ve a https://github.com/TU_USUARIO/socorrodigital
   - Deberías ver tu commit más reciente

2. **Vercel**: 
   - Ve a https://vercel.com/dashboard
   - Verás un "Building..." o "Deploying..."
   - Espera 2-3 minutos
   
3. **Tu Web**: 
   - Ve a https://socorrodigital.vercel.app
   - Refresca la página (Ctrl + Shift + R para forzar)
   - ¡Verás tus cambios!

---

## 🎯 Resumen: Los 3 comandos que usarás siempre

```bash
git add .
git commit -m "Tu mensaje aquí"
git push
```

---

## 🆘 Solución de problemas comunes

### Error: "Please tell me who you are"
```bash
git config --global user.email "tu@email.com"
git config --global user.name "Tu Nombre"
```

### Error: "Updates were rejected"
```bash
# Primero descarga los cambios del servidor
git pull

# Luego vuelve a subir
git push
```

### Error: "No tienes permisos"
- Verifica que el repositorio en GitHub sea tuyo
- Verifica que hayas hecho login con `git config --list`

---

## 💡 Consejos Pro

### Hacer commits pequeños y frecuentes
✅ BIEN:
```bash
git commit -m "Agregar tutorial de nacionalidad"
git commit -m "Corregir error en formulario de contacto"
git commit -m "Actualizar colores del header"
```

❌ MAL:
```bash
git commit -m "Muchos cambios"
```

### Mensajes descriptivos
✅ BIEN:
- "Agregar tutorial de arraigo social en España"
- "Corregir enlace roto en página de FAQ"
- "Actualizar fecha de último tutorial"

❌ MAL:
- "cambios"
- "fix"
- "update"

---

## 🔄 Flujo de trabajo típico

```
1. Haces cambios en los archivos
   ↓
2. git add .
   ↓
3. git commit -m "Descripción"
   ↓
4. git push
   ↓
5. Esperas 2-3 minutos
   ↓
6. Tu web se actualiza automáticamente
```

---

## 📊 Ver historial de cambios

```bash
# Ver últimos 5 commits
git log --oneline -5

# Ver qué archivos cambiaron
git diff

# Ver cambios de un archivo específico
git diff archivo.tsx
```

---

## 🎨 Ejemplo completo paso a paso

Imagina que agregaste un nuevo tutorial:

```bash
# 1. Ver qué cambió
git status
# Muestra: modified: content/espana-migracion.ts

# 2. Agregar cambios
git add content/espana-migracion.ts
# O agregar todo: git add .

# 3. Guardar con mensaje
git commit -m "Agregar tutorial de residencia por estudios en España"

# 4. Subir a GitHub
git push

# 5. Esperar 2-3 minutos

# 6. ¡Listo! Tu web está actualizada
```

---

## ⏰ ¿Cuánto tarda en actualizarse la web?

- **GitHub**: Instantáneo (menos de 5 segundos)
- **Vercel detecta el cambio**: 10-30 segundos
- **Vercel construye la web**: 1-2 minutos
- **Despliegue**: 30 segundos
- **Total**: ~2-3 minutos desde el `git push`

---

## 🔍 Verificar el estado del deploy

Opción 1: **Dashboard de Vercel**
- https://vercel.com/dashboard
- Verás: "Building", "Ready", o "Error"

Opción 2: **Desde la terminal**
```bash
# Si tienes Vercel CLI instalado
vercel --prod
```

---

## 📱 Actualizar desde diferentes dispositivos

Si trabajas desde varios lugares:

```bash
# Antes de empezar a trabajar, descarga últimos cambios
git pull

# Haz tus cambios...

# Sube tus cambios
git add .
git commit -m "Mensaje"
git push
```

---

¡Eso es todo! Con estos 3 comandos (`add`, `commit`, `push`) mantendrás tu web siempre actualizada. 🚀
