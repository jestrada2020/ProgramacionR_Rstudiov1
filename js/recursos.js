/**
 * Academia Bio-R · Recursos y evaluaciones del curso
 * - EVALUACIONES: quizzes y parciales externos del profesor (cada uno con enlace y código QR).
 *   Para agregar uno: { id, titulo, sub, url, ico, color } (el código QR se genera solo).
 * - RECURSOS: tarjetas de la sección «Recursos del curso»; cada una abre su panel (html).
 */
const EVALUACIONES = [
    // Ejemplo: { id: 'primerQuizR', titulo: 'Primer quiz', sub: 'Vectores y data frames', url: 'https://jestrada2020.github.io/PrimerQuizR/', ico: 'fa-clipboard-check', color: '#10b981' }
];

const _enlaces = lista => `<div class="recurso-enlaces">${lista.map(([t, d, u, ico]) => `
    <a href="${u}" target="_blank" rel="noopener"><i class="${ico || 'fas fa-up-right-from-square'}"></i><div><b>${t}</b><span>${d}</span></div></a>`).join('')}</div>`;

const _codigo = s => `<pre class="codigo-r">${String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;

const RECURSOS = [
    {
        id: 'manualUsuario', titulo: 'Manual de usuario', sub: 'Cómo usar la academia paso a paso', ico: 'fa-book', color: '#276dc3',
        html: () => `<div class="tarjeta">
            <div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:14px">
                <h3 style="flex:1;font-size:1.2rem"><i class="fas fa-book" style="color:var(--azul)"></i> Manual de usuario</h3>
                <button class="boton primario peq" onclick="abrirManual()"><i class="fas fa-up-right-from-square"></i>Ver en ventana emergente</button>
                <a class="boton peq" href="docs/manual_usuario.pdf" download><i class="fas fa-download"></i>Descargar PDF</a>
            </div>
            <iframe class="visor-manual" src="docs/manual_usuario.pdf" title="Manual de usuario de Academia Bio-R" style="width:100%;height:80vh;border:0;border-radius:12px;background:#525659"></iframe>
        </div>`
    },
    {
        id: 'chuleta', titulo: 'Chuleta de R', sub: 'Las funciones que más usarás, en una página', ico: 'fa-list-check', color: '#10b981',
        html: () => `<div class="tarjeta texto-modulo">
            <h2>Chuleta de R</h2>
            <p>Lo esencial del curso en una sola página. Cada fila dice qué hace la función y un ejemplo corto.</p>
            <div class="tabla-scroll"><table class="tabla">
                <tr><th>Tema</th><th>Funciones</th><th>Ejemplo</th></tr>
                <tr><td>Asignar y ver</td><td><code>&lt;-</code>, <code>print()</code>, <code>cat()</code>, <code>paste()</code></td><td><code>x &lt;- 5; cat("x vale", x, "\\n")</code></td></tr>
                <tr><td>Tipos</td><td><code>class()</code>, <code>is.numeric()</code>, <code>as.numeric()</code>, <code>as.character()</code></td><td><code>as.numeric("3.5")</code></td></tr>
                <tr><td>Vectores</td><td><code>c()</code>, <code>seq()</code>, <code>rep()</code>, <code>length()</code>, <code>sort()</code>, <code>rev()</code></td><td><code>seq(0, 1, by = 0.25)</code></td></tr>
                <tr><td>Índices</td><td><code>x[2]</code>, <code>x[-1]</code>, <code>x[x &gt; 3]</code>, <code>which()</code></td><td><code>which(x == max(x))</code></td></tr>
                <tr><td>Matrices</td><td><code>matrix()</code>, <code>dim()</code>, <code>t()</code>, <code>%*%</code>, <code>apply()</code></td><td><code>matrix(1:6, nrow = 2)</code></td></tr>
                <tr><td>Listas y factores</td><td><code>list()</code>, <code>$</code>, <code>[[ ]]</code>, <code>factor()</code>, <code>levels()</code>, <code>table()</code></td><td><code>table(factor(c("a","b","a")))</code></td></tr>
                <tr><td>Data frames</td><td><code>data.frame()</code>, <code>head()</code>, <code>str()</code>, <code>summary()</code>, <code>nrow()</code>, <code>subset()</code>, <code>order()</code></td><td><code>datos[datos$edad &gt; 30, ]</code></td></tr>
                <tr><td>Archivos</td><td><code>read.csv()</code>, <code>write.csv()</code>, <code>read_excel()</code> (readxl), <code>readRDS()</code></td><td><code>read.csv("pacientes.csv")</code></td></tr>
                <tr><td>Datos faltantes</td><td><code>is.na()</code>, <code>na.omit()</code>, <code>complete.cases()</code>, <code>na.rm = TRUE</code></td><td><code>mean(x, na.rm = TRUE)</code></td></tr>
                <tr><td>Control de flujo</td><td><code>if</code>/<code>else</code>, <code>ifelse()</code>, <code>for</code>, <code>while</code>, <code>repeat</code>, <code>break</code>, <code>next</code></td><td><code>for (i in 1:3) print(i)</code></td></tr>
                <tr><td>Funciones</td><td><code>function()</code>, <code>return()</code>, <code>sapply()</code>, <code>lapply()</code>, <code>tapply()</code></td><td><code>cuadrado &lt;- function(x) x^2</code></td></tr>
                <tr><td>dplyr</td><td><code>filter()</code>, <code>select()</code>, <code>mutate()</code>, <code>arrange()</code>, <code>group_by()</code>, <code>summarise()</code>, <code>%&gt;%</code></td><td><code>datos %&gt;% group_by(sexo) %&gt;% summarise(m = mean(peso_kg))</code></td></tr>
                <tr><td>Gráficos base</td><td><code>plot()</code>, <code>hist()</code>, <code>boxplot()</code>, <code>barplot()</code>, <code>lines()</code>, <code>abline()</code>, <code>legend()</code></td><td><code>hist(x, col = "skyblue")</code></td></tr>
                <tr><td>ggplot2</td><td><code>ggplot()</code>, <code>aes()</code>, <code>geom_point()</code>, <code>geom_histogram()</code>, <code>geom_boxplot()</code>, <code>labs()</code></td><td><code>ggplot(d, aes(x, y)) + geom_point()</code></td></tr>
                <tr><td>Descriptiva</td><td><code>mean()</code>, <code>median()</code>, <code>sd()</code>, <code>var()</code>, <code>quantile()</code>, <code>IQR()</code>, <code>range()</code></td><td><code>quantile(x, c(.25, .75))</code></td></tr>
                <tr><td>Inferencia</td><td><code>t.test()</code>, <code>chisq.test()</code>, <code>aov()</code>, <code>TukeyHSD()</code>, <code>shapiro.test()</code>, <code>wilcox.test()</code></td><td><code>t.test(a, b)</code></td></tr>
                <tr><td>Relaciones</td><td><code>cor()</code>, <code>cor.test()</code>, <code>lm()</code>, <code>coef()</code>, <code>predict()</code></td><td><code>lm(y ~ x, data = d)</code></td></tr>
                <tr><td>Ayuda</td><td><code>?funcion</code>, <code>help()</code>, <code>example()</code>, <code>args()</code></td><td><code>?mean</code> (en RStudio)</td></tr>
            </table></div>
        </div>`
    },
    {
        id: 'atajos', titulo: 'Atajos de RStudio', sub: 'Teclas que ahorran tiempo', ico: 'fa-keyboard', color: '#8b5cf6',
        html: () => `<div class="tarjeta texto-modulo">
            <h2>Atajos de teclado de RStudio</h2>
            <p>En Mac, cambie <kbd>Ctrl</kbd> por <kbd>Cmd</kbd> y <kbd>Alt</kbd> por <kbd>Option</kbd>. Los marcados con ★ también funcionan en el laboratorio de la academia.</p>
            <div class="tabla-scroll"><table class="tabla">
                <tr><th>Atajo</th><th>Qué hace</th></tr>
                <tr><td><kbd>Ctrl</kbd> + <kbd>Enter</kbd> ★</td><td>Ejecuta la línea actual o la selección (en la academia, todo el programa)</td></tr>
                <tr><td><kbd>Alt</kbd> + <kbd>-</kbd> ★</td><td>Escribe la flecha de asignación <code>&lt;-</code></td></tr>
                <tr><td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> ★</td><td>Escribe la tubería <code>%&gt;%</code></td></tr>
                <tr><td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> ★</td><td>Comenta o descomenta las líneas seleccionadas</td></tr>
                <tr><td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd></td><td>Ejecuta todo el script (source)</td></tr>
                <tr><td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd></td><td>Nuevo script</td></tr>
                <tr><td><kbd>Ctrl</kbd> + <kbd>L</kbd></td><td>Limpia la consola</td></tr>
                <tr><td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd></td><td>Genera el informe (Knit) de un archivo R Markdown</td></tr>
                <tr><td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>I</kbd></td><td>Inserta un bloque de código en R Markdown</td></tr>
                <tr><td><kbd>Tab</kbd></td><td>Autocompleta nombres de funciones, objetos y archivos</td></tr>
                <tr><td><kbd>F1</kbd></td><td>Abre la ayuda de la función donde está el cursor</td></tr>
                <tr><td><kbd>↑</kbd> en la consola</td><td>Recupera los comandos anteriores</td></tr>
            </table></div>
        </div>`
    },
    {
        id: 'datosPractica', titulo: 'Datos de práctica', sub: 'Siete bases de datos de biología, salud y ecología', ico: 'fa-database', color: '#0ea5e9',
        html: () => `<div class="tarjeta texto-modulo">
            <h2>Datos de práctica</h2>
            <p>Ya están cargados en el R de la academia: léalos directamente con <code>read.csv("nombre.csv")</code> en cualquier laboratorio. También puede descargarlos para usarlos en RStudio, Posit Cloud o Google Colab.</p>
            <div class="tabla-scroll"><table class="tabla">
                <tr><th>Archivo</th><th>Contenido</th><th>Variables</th><th></th></tr>
                <tr><td><code>pacientes.csv</code></td><td>50 pacientes (con datos faltantes y filas repetidas, para practicar limpieza)</td><td>id, edad, sexo, peso_kg, altura_m, presion_sistolica, fumador</td><td><a class="boton peq" href="data/pacientes.csv" download><i class="fas fa-download"></i></a></td></tr>
                <tr><td><code>plantas.csv</code></td><td>45 flores de tres especies de iris</td><td>especie, largo_sepalo, ancho_sepalo, largo_petalo, ancho_petalo</td><td><a class="boton peq" href="data/plantas.csv" download><i class="fas fa-download"></i></a></td></tr>
                <tr><td><code>crecimiento.csv</code></td><td>Densidad óptica de dos bacterias durante 12 horas</td><td>hora, cepa, do600</td><td><a class="boton peq" href="data/crecimiento.csv" download><i class="fas fa-download"></i></a></td></tr>
                <tr><td><code>fertilizante.csv</code></td><td>Altura de 30 plantas con tres tratamientos (experimento para ANOVA)</td><td>parcela, fertilizante, altura_cm</td><td><a class="boton peq" href="data/fertilizante.csv" download><i class="fas fa-download"></i></a></td></tr>
                <tr><td><code>genes.csv</code></td><td>24 genes con su expresión en control y tratamiento</td><td>gen, cromosoma, longitud_pb, gc, expr_control, expr_tratamiento</td><td><a class="boton peq" href="data/genes.csv" download><i class="fas fa-download"></i></a></td></tr>
                <tr><td><code>clima.csv</code></td><td>Temperatura y lluvia diaria en tres ciudades de Colombia</td><td>fecha, ciudad, temp_max, temp_min, lluvia_mm</td><td><a class="boton peq" href="data/clima.csv" download><i class="fas fa-download"></i></a></td></tr>
                <tr><td><code>estudiantes.csv</code></td><td>40 estudiantes universitarios con tres notas</td><td>nombre, programa, semestre, nota1, nota2, nota3, asistencia</td><td><a class="boton peq" href="data/estudiantes.csv" download><i class="fas fa-download"></i></a></td></tr>
            </table></div>
            <h3>Para empezar</h3>
            ${_codigo('datos <- read.csv("pacientes.csv")\nstr(datos)\nsummary(datos)\nmostrar(head(datos))')}
            <div class="nota info"><b>mostrar()</b> es una ayuda de la academia que dibuja un data frame como tabla. En RStudio use <code>View(datos)</code> o simplemente <code>head(datos)</code>.</div>
        </div>`
    },
    {
        id: 'paginas', titulo: 'Páginas recomendadas', sub: 'Libros, guías y comunidades de R en español', ico: 'fa-link', color: '#3b82f6',
        html: () => `<div class="tarjeta texto-modulo">
            <h2>Páginas recomendadas</h2>
            <h3>Libros y guías gratuitas</h3>
            ${_enlaces([
                ['R para Ciencia de Datos (2.ª edición en español)', 'El libro de Hadley Wickham traducido por la comunidad: tidyverse, ggplot2, dplyr.', 'https://es.r4ds.hadley.nz/', 'fas fa-book'],
                ['R-Coder', 'Tutoriales de R en español con ejemplos de cada función.', 'https://r-coder.com/', 'fas fa-code'],
                ['R para principiantes (Emmanuel Paradis)', 'Clásico manual en PDF publicado en CRAN.', 'https://cran.r-project.org/doc/contrib/rdebuts_es.pdf', 'fas fa-file-pdf'],
                ['Manual de estadística descriptiva con R', 'Guía de la Universidad de Chile en bookdown.', 'https://bookdown.org/gboccardo/manual-ED-UCH/', 'fas fa-chart-simple'],
                ['Big Book of R', 'Catálogo de cientos de libros gratuitos sobre R (también en español).', 'https://www.bigbookofr.com/', 'fas fa-book-open']
            ])}
            <h3>Herramientas oficiales</h3>
            ${_enlaces([
                ['CRAN', 'Descarga oficial de R y de más de 20 000 paquetes.', 'https://cran.r-project.org/', 'fab fa-r-project'],
                ['RStudio Desktop', 'El entorno de trabajo para R (gratuito).', 'https://posit.co/download/rstudio-desktop/', 'fas fa-desktop'],
                ['Posit Cloud', 'RStudio en el navegador, sin instalar nada.', 'https://posit.cloud/', 'fas fa-cloud'],
                ['Hojas de referencia (cheatsheets) de Posit', 'ggplot2, dplyr, RStudio, R Markdown, Shiny… en PDF.', 'https://posit.co/resources/cheatsheets/', 'fas fa-file-lines'],
                ['Bioconductor', 'Paquetes de R para bioinformática y genómica.', 'https://www.bioconductor.org/', 'fas fa-dna'],
                ['Galería de gráficos en R', 'Cientos de gráficos con su código (R Graph Gallery).', 'https://r-graph-gallery.com/', 'fas fa-chart-pie'],
                ['Quarto', 'La nueva generación de R Markdown para informes y presentaciones.', 'https://quarto.org/', 'fas fa-file-code'],
                ['WebR', 'El proyecto que permite ejecutar R dentro del navegador (lo usa esta academia).', 'https://webr.r-wasm.org/', 'fas fa-globe']
            ])}
            <h3>Comunidad y práctica</h3>
            ${_enlaces([
                ['swirl', 'Paquete para aprender R dentro de la consola, paso a paso.', 'https://swirlstats.com/', 'fas fa-person-chalkboard'],
                ['Stack Overflow en español (etiqueta r)', 'Preguntas y respuestas de la comunidad.', 'https://es.stackoverflow.com/questions/tagged/r', 'fab fa-stack-overflow'],
                ['R-Ladies', 'Comunidad mundial con capítulos en Latinoamérica.', 'https://rladies.org/', 'fas fa-people-group']
            ])}
        </div>`
    },
    {
        id: 'profesor', titulo: 'Otras aplicaciones del profesor', sub: 'Bioestadística y programación en Python', ico: 'fa-chalkboard-user', color: '#f59e0b',
        html: () => `<div class="tarjeta texto-modulo">
            <h2>Otras aplicaciones del profesor John Jairo Estrada</h2>
            <p>Complementan este curso: la de bioestadística explica los conceptos que en R se calculan con una línea de código.</p>
            ${_enlaces([
                ['Curso de Bioestadística Uno', 'Conceptos de bioestadística: datos agrupados y no agrupados, medidas de tendencia y dispersión.', 'https://jestrada2020.github.io/CursoBioEstadisticaUno_version1_2026/', 'fas fa-chart-column'],
                ['Academia Bio-Python', 'La plataforma hermana para aprender Python con el mismo estilo de misiones.', 'https://jestrada2020.github.io/principiosdeprogramacionpythonV1/', 'fab fa-python'],
                ['Canal de YouTube del profesor', 'Videos de bioestadística, data frames, Google Colab y modelos de biología.', 'https://www.youtube.com/channel/UCe_8YXWBojXgfgaiQODPWTg', 'fab fa-youtube']
            ])}
        </div>`
    }
];

function showNotification(mensaje) { UI.aviso(mensaje, 'ok', 'fa-check-circle'); }

function copiarTexto(texto, mensaje = '¡Copiado al portapapeles!') {
    const respaldo = () => {
        const ta = document.createElement('textarea');
        ta.value = texto; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (e) { /* sin portapapeles */ }
        ta.remove();
        showNotification(mensaje);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(texto).then(() => showNotification(mensaje)).catch(respaldo);
    else respaldo();
}

function generarQR(url, idContenedor) {
    const c = document.getElementById(idContenedor);
    if (!c || c.childElementCount) return;
    const img = document.createElement('img');
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
    img.alt = 'Código QR de la evaluación';
    img.width = 200; img.height = 200;
    img.style.margin = '0 auto';
    img.onerror = () => { c.innerHTML = '<p style="color:#475569;font-size:.8rem;padding:12px">No se pudo generar el código QR.<br>Usa el enlace directo.</p>'; };
    c.appendChild(img);
}

// Panel de una evaluación externa: enlace, código QR y enlace para copiar
function panelEvaluacion(e) {
    return `<div class="tarjeta" style="text-align:center;padding:30px 20px">
        <div style="width:64px;height:64px;border-radius:50%;margin:0 auto 14px;display:grid;place-items:center;background:${e.color};color:#fff;font-size:1.6rem"><i class="fas ${e.ico}"></i></div>
        <h2 style="font-size:1.4rem;font-weight:900">${e.titulo}</h2>
        <p style="color:var(--texto-2);margin:6px 0 18px">${e.sub}</p>
        <a class="boton primario grande" href="${e.url}" target="_blank" rel="noopener"><i class="fas fa-up-right-from-square"></i>Iniciar evaluación</a>
        <p style="color:var(--texto-3);font-size:.8rem;margin-top:8px">Se abrirá en una ventana nueva</p>
        <h3 style="margin:22px 0 10px;font-size:.95rem">O escanea el código QR desde tu celular</h3>
        <div style="background:#fff;padding:12px;border-radius:14px;display:inline-block"><div id="qr_${e.id}"></div></div>
        <div style="margin:20px auto 0;max-width:520px">
            <button class="boton fantasma peq mono" style="width:100%;white-space:normal;word-break:break-all" onclick="copiarTexto('${e.url}', '¡Enlace copiado!')">${e.url} <i class="fas fa-copy"></i></button>
        </div>
    </div>`;
}

// Abre el manual en una ventana emergente; si el navegador la bloquea, avisa en la página
function abrirManual() {
    const w = window.open('docs/manual_usuario.pdf', 'manualBioR', 'width=1000,height=800,resizable=yes,scrollbars=yes');
    if (!w) UI.aviso('El navegador bloqueó la ventana emergente. Permítela o usa «Descargar PDF».', 'error');
}
