# Seguridad Básica — Academia Bio-R

> La Academia Bio-R usa el mismo sistema de ingreso que la Academia Bio-Python, con claves de almacenamiento
> propias (`bior_db_v2`, `bior_session`, `br_estado_<id>`): las dos plataformas pueden publicarse en el mismo
> sitio (jestrada2020.github.io) sin mezclar usuarios ni progreso.

## El Problema: ¿Por qué los estudiantes no pueden iniciar sesión?

### Causa raíz

La aplicación Bio-R es una app **100% estática** (solo archivos HTML, CSS y JavaScript).
No tiene servidor ni base de datos real. Para guardar usuarios utiliza el **`localStorage`** del navegador.

> **`localStorage` es un almacenamiento local al navegador de cada computador.**
> Lo que se guarda en el navegador del profesor NO existe en el navegador del estudiante.

### Qué pasa cuando el profesor crea un usuario desde el panel admin

```
Computador del Profesor                    Computador del Estudiante
──────────────────────────                 ──────────────────────────
Panel admin → Crear usuario                Abre la app en el navegador
      ↓                                           ↓
Se guarda en localStorage                  Su localStorage está VACÍO
del navegador del profesor                 → No existe el usuario
      ↓                                           ↓
Solo funciona en ESE navegador             Login falla: "ID o clave incorrectos"
```

---

## La Solución: Usuarios Pre-cargados en el Código

Se creó una lista llamada `_PRESET_USERS` dentro del archivo `js/auth.js`.
Los usuarios definidos aquí se cargan automáticamente en **cualquier navegador** del mundo
al abrir la aplicación, porque viajan dentro del código fuente publicado en GitHub.

### Ubicación en el archivo `js/auth.js`

```javascript
const _PRESET_USERS = [
    { id: 'todos', cc: '111111', nombre: 'todos', password: 'todos123', rol: 'estudiante' },
    { id: 'pangui', cc: '222222', nombre: 'Juan Pablo Lopera Velez', password: 'pangua123', rol: 'estudiante' }
    // ... más estudiantes
];
```

Cada vez que un estudiante abre la app, el sistema lee esta lista y crea los usuarios
en su `localStorage` local de forma automática si aún no existen.

---

## Paso a Paso: Agregar un Nuevo Estudiante

### Método 1 — Exportar desde el Panel Admin (recomendado)

Este método permite crear usuarios desde la interfaz gráfica y luego exportarlos al código.

**Paso 1.** Abre la aplicación en **tu navegador** (el del profesor/admin).

**Paso 2.** Inicia sesión con las credenciales de administrador:
- ID: `admin`
- Contraseña: `admin123`

**Paso 3.** Ve a **Panel de Administración → Agregar Usuario** y completa el formulario:
- Nombre completo
- ID de usuario (letras minúsculas, números, guion bajo — entre 3 y 20 caracteres)
- Cédula (C.C.)
- Contraseña (mínimo 6 caracteres)
- Rol: Estudiante

**Paso 4.** Haz clic en **"Registrar Usuario"**.

**Paso 5.** Ve a **Gestionar Usuarios** y haz clic en el botón **"Exportar Usuarios"**.
- El código se copia automáticamente al portapapeles.

**Paso 6.** Abre el archivo `js/auth.js` en tu editor de texto (VS Code, Notepad++, etc.).

**Paso 7.** Busca el bloque `_PRESET_USERS` y **reemplázalo completamente** con el código copiado.
Debe verse así:

```javascript
const _PRESET_USERS = [
    { id: 'todos', cc: '111111', nombre: 'todos', password: 'todos123', rol: 'estudiante' },
    { id: 'nuevoe', cc: '987654321', nombre: 'Nuevo Estudiante', password: 'clave123', rol: 'estudiante' }
];
```

**Paso 8.** Guarda el archivo `js/auth.js`.

**Paso 9.** Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
git add js/auth.js
git commit -m "Agregar nuevo estudiante"
git push origin main
```

**Paso 10.** Espera **1 a 2 minutos** para que GitHub Pages actualice.

**Paso 11.** El estudiante ya puede ingresar desde cualquier computador con sus credenciales.

---

### Método 2 — Editar `auth.js` directamente

Si prefieres no usar el panel admin, puedes agregar el usuario directamente al archivo.

**Paso 1.** Abre `js/auth.js` en tu editor.

**Paso 2.** Localiza el bloque `_PRESET_USERS` y agrega una línea por cada estudiante:

```javascript
const _PRESET_USERS = [
    // Usuarios existentes
    { id: 'todos',  cc: '111111',   nombre: 'todos',              password: 'todos123',  rol: 'estudiante' },
    // Nuevo estudiante (agrega aquí):
    { id: 'maria',  cc: '1234567890', nombre: 'María García López', password: 'miClave1', rol: 'estudiante' }
];
```

**Reglas del formato:**
| Campo      | Descripción                                              | Ejemplo              |
|------------|----------------------------------------------------------|----------------------|
| `id`       | Identificador de login (minúsculas, sin espacios)        | `'maria'`            |
| `cc`       | Número de cédula                                         | `'1234567890'`       |
| `nombre`   | Nombre completo                                          | `'María García'`     |
| `password` | Contraseña en texto plano (mínimo 6 caracteres)          | `'miClave1'`         |
| `rol`      | Siempre `'estudiante'` para estudiantes                  | `'estudiante'`       |

**Paso 3.** Guarda y sube a GitHub:

```bash
git add js/auth.js
git commit -m "Agregar estudiante María García"
git push origin main
```

---

## Usuarios del Sistema Actual

| Nombre | ID | Contraseña | Rol |
|---|---|---|---|
| Administrador | `admin` | `admin123` | Admin |
| todos | `todos` | `todos321` | Estudiante |
| Juan Pablo Lopera Velez | `pangui` | `pangua123` | Estudiante |
| John Jairo Estrada Alvarez | `jestrada` | `graciela123` | Estudiante |
| todos321 | `111111` | `todos321` | Estudiante |
| Andrea Hincapie Gonzalez | `1017926430` | `1017926430` | Estudiante |
| Sofia Cuervo Henao | `1034988185` | `1034988185` | Estudiante |
| Brahian Marín Giraldo | `1025760349` | `1025760349` | Estudiante |
| Luisa Fernanda Muñoz Calle | `1037663395` | `1037663395` | Estudiante |
| Andrés Ramírez Saumet | `1034987447` | `1034987447` | Estudiante |
| María José Restrepo T. | `1020108089` | `1020108089` | Estudiante |

> Esta lista se copió de la Academia Bio-Python. Reemplácela con los estudiantes matriculados en el curso de R
> (panel admin → «Exportar Usuarios» → pegar en `_PRESET_USERS` de `js/auth.js`).

---|---|---|---|
| Administrador | `admin` | `admin123` | Admin |
| todos | `todos` | `todos123` | Estudiante |
| Juan Pablo Lopera Velez | `pangui` | `pangua123` | Estudiante |
| Betancur Avendaño Santiago | `1001236049` | `1001236049` | Estudiante |
| Chinome Anteliz Alejandro | `1091357120` | `1091357120` | Estudiante |
| Forero Acevedo Isabela | `1036449034` | `1036449034` | Estudiante |
| Gaviria Betancur Valeria | `1015070271` | `1015070271` | Estudiante |
| Gómez Arbeláez Sarah | `1036250076` | `1036250076` | Estudiante |
| Hernández López Camila | `1036937290` | `1036937290` | Estudiante |
| Jaramillo Londoño Sofía | `1017925330` | `1017925330` | Estudiante |
| Martínez Carvajal Sebastián | `1020414507` | `1020414507` | Estudiante |
| Montoya Sanes Manuela Andrea | `1000899141` | `1000899141` | Estudiante |
| Páez Pérez Haider Felipe | `1022003039` | `1022003039` | Estudiante |
| Ramírez Echavarria Karen Dayana | `1040570943` | `1040570943` | Estudiante |
| Ríos Acuña Salomé | `1000557084` | `1000557084` | Estudiante |
| Vargas Ramirez Yojan Camilo | `1007507963` | `1007507963` | Estudiante |

---

## Advertencia de Seguridad

> Las contraseñas se almacenan en **texto plano** dentro del archivo `js/auth.js`
> porque la app no tiene servidor. Cualquier persona que acceda al repositorio de GitHub
> puede leer las contraseñas.
>
> **Recomendación:** Si el repositorio es público, usa contraseñas genéricas o
> el número de cédula como contraseña (como se hace actualmente), no contraseñas
> personales de los estudiantes.

---

## Resumen Visual del Flujo Completo

```
Profesor agrega estudiante
         ↓
Panel Admin → "Exportar Usuarios"
         ↓
Copia el código → pega en js/auth.js
         ↓
git add js/auth.js
git commit -m "nuevo estudiante"
git push origin main
         ↓
GitHub Pages actualiza (1-2 min)
         ↓
Estudiante abre la URL → ve el login → ingresa con su clave ✓
```
