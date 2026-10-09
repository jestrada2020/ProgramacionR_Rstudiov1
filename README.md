# Academia Bio-R · Programación en R con RStudio

Aplicación web para aprender R desde cero **jugando**, con el mismo diseño de la
[Academia Bio-Python](https://github.com/jestrada2020/principiosdeprogramacionpythonV1): inicio de sesión solo para
estudiantes matriculados, lecciones con video, un laboratorio con **R 4.5 real en el navegador** (WebR), retos con
verificación automática, quizzes, experiencia (XP), niveles, rachas y medallas. Los ejemplos son de biología, salud y ecología.

## Cómo se aprende

Cada módulo es una **misión de cuatro pasos** (y algunos tienen un paso extra «En RStudio»):

| Paso | Qué hace el estudiante | Recompensa |
|---|---|---|
| 1. Lección | Ve los videos y lee el contenido. Cada ejemplo de código tiene un botón **▶ Probar** | 15 XP |
| 2. Laboratorio | Ejecuta y modifica código R (Ctrl+Enter). Los errores se explican en español («Profe R») | 10 XP |
| 3. Retos | Escribe su solución y pulsa **Verificar**: se compara con la salida de la solución oficial | 25 XP (8 si vio la solución) |
| 4. Quiz | 10 preguntas, una a la vez, con respuesta inmediata y combos. Con 70 % o más se completa el módulo | 8 XP por acierto nuevo + 100 XP |

Además: **reto del día** (XP doble), **meta diaria** de 60 XP, **racha**, 22 **medallas**, 11 **niveles**
(de «Semilla de R» a «Gran Maestro useR») y un **diploma** imprimible al completar los 16 módulos.

## Módulos (16 en 5 unidades + bonus)

| Unidad | Módulos |
|---|---|
| 1. Primeros pasos | 1. Introducción a R · 2. Instalación de R y RStudio · 3. Primeros pasos en R |
| 2. Datos en R | 4. Vectores y matrices · 5. Listas, factores y data frames · 6. Importar, limpiar y exportar datos |
| 3. Programar y graficar | 7. Programación en R · 8. Paquetes y tidyverse · 9. Gráficos en R |
| 4. Estadística con R | 10. Estadística descriptiva · 11. Pruebas de hipótesis · 12. Correlación y regresión |
| 5. Ciencia reproducible | 13. Bioinformática con R · 14. R Markdown y Quarto · 15. Aplicaciones con Shiny · 16. R en la nube y con IA |
| Bonus (opcional) | Actividades Extras (10 videos) · Proyecto final: análisis de un experimento · Desafíos de programación bio |

En total: 86 bloques de código ejecutables, 67 retos con verificación automática (y 5 que se hacen en RStudio) y 172 preguntas.

## Secciones

- **Inicio · Mapa**: saludo, siguiente misión, reto del día, meta diaria, dato curioso y el mapa de 5 unidades.
- **Laboratorio libre**: editor con experimentos de biología (ADN, ARN, IMC, crecimiento bacteriano, modelo logístico, ggplot2…).
- **Mis logros**: estadísticas, medallas, niveles y diploma.
- **Evaluaciones**: autoevaluaciones de cada módulo y, cuando el profesor las publique, los quizzes y parciales oficiales con enlace y código QR.
- **Recursos del curso**: manual, chuleta de R, atajos de RStudio, datos de práctica, páginas recomendadas y otras aplicaciones del profesor.
- **Datos de práctica**: siete bases (pacientes, plantas, crecimiento, fertilizante, genes, clima, estudiantes), ya cargadas en el R del navegador y descargables.
- **Actividades Extras** (bonus): los 10 videos de la Academia Bio-Python sobre biología computacional, el futuro de la
  programación, pensamiento crítico e inteligencia artificial, con reproductor (empiezan en el minuto recomendado).
- **Aprendo con videos**: 23 videos del canal del profesor (bioestadística, data frames, Colab, modelos de biología) en 7 temas.
- **Manual de usuario**: `docs/manual_usuario.pdf` dentro de la aplicación, con «Ver en ventana emergente» y «Descargar PDF».
- **Buscador** (Ctrl+K), **notas** por módulo y **tema claro/oscuro**.

## El laboratorio de R

- Usa [WebR](https://webr.r-wasm.org/) 0.5.7 (R 4.5.1 compilado a WebAssembly). La primera carga descarga R (unos 10 s).
- `library(ggplot2)`, `library(dplyr)`, `library(readxl)`… se instalan solos la primera vez. Bioconductor y Shiny en servidor no
  funcionan en el navegador (los bloques marcados «Para RStudio» se practican en RStudio, Posit Cloud o Colab).
- `readline()` lee de la caja **Entradas** (una por línea); si faltan, la academia las pregunta y vuelve a ejecutar.
- Gráficos base y ggplot2 aparecen en la consola. `mostrar(df)` dibuja un data frame como tabla.
- Si un programa tarda más de 12 s (bucle infinito) se detiene y se avisa. Los errores indican la línea exacta.
- **Archivos**: **Subir** (CSV, Excel, JSON, TXT), botón de carpeta para usarlos y descargar los que cree el programa. Se borran al recargar.
- Atajos de RStudio: Alt + - (`<-`), Ctrl + Shift + M (`%>%`), Ctrl + Shift + C (comentar).

## Usuarios y progreso

- Inicio de sesión en `login.html`; solo entran los usuarios de `_PRESET_USERS` en `js/auth.js` y los que cree el administrador
  (ver `_seguridadBasica.md`). Administrador: `admin` / `admin123` (cámbiela).
- **La lista de estudiantes se copió de la Academia Bio-Python: reemplácela con los matriculados en el curso de R.**
- El progreso se guarda **por usuario** en el navegador (`localStorage`, clave `br_estado_<id>`). Las claves son distintas de las
  de Bio-Python, así que las dos academias pueden estar en el mismo sitio de GitHub Pages sin mezclarse.

## Estructura de archivos

```
index.html            Redirige a login.html
login.html            Inicio de sesión
admin.html            Panel del administrador (usuarios)
app.html              Aplicación (barra lateral, vistas y ventanas)
css/academia.css      Sistema visual (temas claro y oscuro, adaptación a celular)
js/auth.js            Usuarios y sesión
js/modules-data.js    Objeto `modules` y ayudas para escribir lecciones (R`…`, RS`…`, C`…`)
js/modulos/unidad1-5.js, bonus.js   CONTENIDO: lecciones, videos, retos y quizzes de cada módulo
js/gamificacion.js    XP, niveles, racha, meta diaria, medallas y confeti
js/laboratorio.js     R en el navegador (WebR), explicación de errores y verificación de retos
js/recursos.js        Catálogo de evaluaciones (con QR) y recursos
js/videos.js          «Aprendo con videos»: temas y videos verificados del canal del profesor
js/datos-practica.js  Datos de práctica que se copian al R del navegador
data/                 Los mismos datos en CSV
js/registro.js, js/registro-config.js   Registro opcional en Google Forms (desactivado)
js/app-core.js        Navegación, mapa, módulos por pasos, quiz, logros, buscador y notas
docs/manual_usuario.html / .pdf     Manual de usuario (21 páginas, 15 figuras) y docs/img/ con las capturas
docs/crear_formularios.gs           Script para crear los formularios de registro
docs/historial/       Archivos de la versión anterior que la aplicación ya no usa
```

## Cómo agregar o cambiar contenido

- **Un módulo**: edite su entrada en `js/modulos/unidadN.js`. Para que aparezca en el mapa agregue su id a `UNIDADES`
  (inicio de `js/app-core.js`) y un icono en `ICONOS` y `SUBTITULOS`.
- **Código en la lección**: `${R`…`}` crea un bloque con ▶ Probar; `${RS`…`}` un bloque «Para RStudio» (no se ejecuta).
- **Un reto**: `{ title, description, template, solution, entradas?, pista?, manual? }`. La verificación ejecuta `solution`
  con las mismas entradas y exige los mismos números junto a su etiqueta y el valor que va después de «:». `manual: true` para
  retos que se hacen en RStudio.
- **Una pregunta**: `{ question, code?, options: [4 opciones], correct: índice }`.
- **Una evaluación oficial**: agréguela a `EVALUACIONES` en `js/recursos.js` (`{ id, titulo, sub, url, ico, color }`).

## Actualizar el manual

Edite `docs/manual_usuario.html` y, desde la carpeta `docs`, genere el PDF con:

```
google-chrome --headless --no-pdf-header-footer --print-to-pdf=manual_usuario.pdf manual_usuario.html
```

## Uso

Publíquela en GitHub Pages (o ábrala con un servidor local, por ejemplo `python3 -m http.server`) en un navegador moderno con
internet. No requiere instalar nada. Si se abre como archivo local (`file://`), YouTube no permite videos incrustados
(«Error 153»): en ese caso la academia abre cada video directamente en YouTube.

Versión 2 · octubre de 2026. Historial en `CHANGELOG.md`.
