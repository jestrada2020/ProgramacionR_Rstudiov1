# Historial de cambios

## Versión 2.2 (8 de octubre de 2026) · Videos sin «Error 153»
- El «Error 153» (error de configuración del reproductor) no era de un video en particular: YouTube lo muestra en **todos** los
  videos incrustados cuando la academia se abre como archivo local (`file://`), porque el navegador no envía la dirección del sitio.
- Ahora, si la academia está abierta como archivo, al pulsar un video se abre en YouTube en una pestaña nueva (en el minuto
  recomendado) y el reproductor explica por qué. Publicada en GitHub Pages o con un servidor, se ve dentro de la academia.
- Probados en Chrome por HTTP los 94 videos de la aplicación (lecciones, Actividades Extras y Aprendo con videos): todos se reproducen.

## Versión 2.1 (8 de octubre de 2026) · Actividades Extras
- Módulo opcional **Actividades Extras** en el bonus (y en la barra lateral), con los 10 videos de la misma sección de la
  Academia Bio-Python: biología computacional (Jensen Huang), el futuro de la programación, pensamiento crítico e inteligencia
  artificial (historia, evolución hasta los agentes y cómo funcionan). Verificados (existen y se pueden incrustar).
- Se ven dentro de la lección y en tarjetas; los videos largos empiezan en el minuto recomendado (también al abrirlos en YouTube).
  Da XP al marcarlo como completado y no cuenta para el diploma.

## Versión 2 (8 de octubre de 2026) · Rediseño completo con el estilo de la Academia Bio-Python

### Acceso solo para estudiantes matriculados
- `login.html`, `admin.html` y `js/auth.js` iguales a los de la Academia Bio-Python (usuarios precargados, panel de
  administración, exportar usuarios), con logo y colores de R. `index.html` redirige al inicio de sesión y `app.html` exige sesión.
- Claves de almacenamiento propias (`bior_…`, `br_…`): no se mezclan usuarios ni progreso con Bio-Python en el mismo sitio.
- El formulario de matrícula de Google del panel admin y el registro de actividad quedan desactivados (los de Bio-Python son de
  otro curso); se activan con `docs/crear_formularios.gs` y `js/registro-config.js`.

### Nueva experiencia «aprender jugando»
- Mapa de aventura con 16 módulos en 5 unidades + bonus, módulos en 4 pasos (Lección → Laboratorio → Retos → Quiz) y paso
  extra «En RStudio», XP, 11 niveles, racha, meta diaria, 22 medallas, reto del día, diploma, buscador (Ctrl+K), notas,
  tema claro/oscuro y adaptación a celular.
- **Laboratorio con R real en el navegador** (WebR 0.5.7, R 4.5.1): gráficos base y ggplot2, instalación automática de
  paquetes (dplyr, tidyr, readxl…), `readline()` con caja de entradas, línea exacta de cada error, explicación en español
  («Profe R»), límite de tiempo para bucles infinitos, subir y descargar archivos, `mostrar()` para tablas. Antes el editor
  usaba Pyodide (Python) y no podía ejecutar R.
- Verificador de retos mejorado respecto al de Bio-Python: asocia cada número a su etiqueta (detecta resultados intercambiados),
  exige el valor que va después de «:» y no exige el texto de los mensajes de `readline()`.

### Contenido reescrito
- Los 16 módulos tienen lección completa, 3 a 5 retos y 10 preguntas. Antes 8 módulos estaban vacíos («Estadística en Colab»),
  el menú «8. Importar/Exportar» abría contenido de Python y había 8 módulos de Python sobrantes (módulos, clases, venv…).
- Módulos nuevos: Importar/limpiar/exportar, Programación, Paquetes y tidyverse, Pruebas de hipótesis, Correlación y regresión,
  Bioinformática con R, R Markdown y Quarto, Shiny, R en la nube y con IA; bonus Proyecto final y Desafíos.
- Siete bases de datos de práctica (`data/`), ya cargadas en el R del navegador.
- Probado en Chrome: los 86 bloques ejecutables corren sin error (salvo dos ejemplos de error a propósito), las 67 soluciones
  aprueban su reto y ninguna plantilla sin resolver aprueba.

### Videos
- Se verificaron los 45 videos de la versión anterior: 17 no existían, muchos eran de Python y uno era un video musical.
  Se reemplazaron por 60 videos en español, verificados (existen, se pueden incrustar y tratan el tema de la lección).
- «Aprendo con videos»: 23 videos del canal del profesor (bioestadística, data frames, Colab, modelos de biología), verificados
  con el canal UCe_8YXWBojXgfgaiQODPWTg. El canal no tiene videos de programación en R; los temas van como apoyo.

### Evaluaciones, recursos y manual
- Se quitó el enlace al «Primer quiz Bio-Python» (era de otro curso). Evaluaciones muestra las autoevaluaciones de cada módulo y
  queda lista para los quizzes de R del profesor (`EVALUACIONES` en `js/recursos.js`, con QR automático).
- Recursos: manual, chuleta de R, atajos de RStudio, datos de práctica, páginas recomendadas (enlaces comprobados) y otras
  aplicaciones del profesor.
- Manual de usuario nuevo: `docs/manual_usuario.pdf` (21 páginas, 15 figuras).
- Los archivos de la versión anterior se movieron a `docs/historial/`.

## Versión 1 (agosto de 2025)
- Primera adaptación de la plataforma Bio-Python a R: 6 módulos con contenido, editor sin ejecución de R.
