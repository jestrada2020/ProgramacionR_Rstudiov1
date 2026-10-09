/**
 * Academia Bio-R · Contenido del curso
 * Cada unidad está en js/modulos/unidadN.js (y el bonus en js/modulos/bonus.js) y agrega sus módulos a `modules`:
 *
 *   modules.id = {
 *     title, description,
 *     video: 'https://www.youtube.com/embed/ID', additionalVideos: [{ title, url }],   (videos verificados)
 *     content:      HTML de la lección,
 *     colabContent: HTML del paso extra «En RStudio» (opcional),
 *     exercises: [{ title, description, template, solution, entradas?, pista?, manual? }],
 *     quiz:      [{ question, code?, options: [4 opciones], correct: índice }]
 *   }
 *
 * Bloques de código en las lecciones (se escriben tal cual, sin escapar < ni &):
 *   R`...`    código R ejecutable: recibe el botón «▶ Probar» que lo lleva al laboratorio
 *   RS`...`   código para RStudio (no se ejecuta en el navegador: install.packages, shiny, Bioconductor…)
 *   RMD`...`  contenido de un archivo R Markdown
 *   SAL`...`  salida que muestra R
 * En los retos, C`...` conserva las barras invertidas (por ejemplo "\n" dentro de cat()).
 */
const modules = {};

const _escHTML = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const _bloque = (clase, extra = '') => (s, ...v) => `<pre class="${clase}"${extra}>${_escHTML(String.raw(s, ...v).replace(/^\n/, '').replace(/\s+$/, ''))}</pre>`;
const R = _bloque('codigo-r');
const RS = _bloque('codigo-r sin-probar', ' data-donde="Para RStudio"');
const RMD = _bloque('codigo-r sin-probar', ' data-donde="Archivo .Rmd"');
const TERM = _bloque('codigo-r sin-probar', ' data-donde="Terminal"');
const SAL = _bloque('salida-r');
const C = (s, ...v) => String.raw(s, ...v).replace(/^\n/, '').replace(/\s+$/, '');
const YT = id => 'https://www.youtube.com/embed/' + id;
