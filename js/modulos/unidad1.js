/**
 * Academia Bio-R · Unidad 1 · Primeros pasos
 * Módulos: intro, installation, basics
 */

modules.intro = {
    title: '1. Introducción a R',
    description: '¿Qué es R y por qué usarlo?',
    video: YT('k3tiNvTmug8'),
    additionalVideos: [
        { title: '¿Qué es R y para qué nos sirve? (UNED)', url: YT('3hR2A2nCI4U') },
        { title: '¿Qué es R y RStudio en 2026?', url: YT('CKdrMEOCIUs') },
        { title: 'Algunas diferencias entre R y RStudio', url: YT('N26Dxt8DB8c') },
        { title: '3 errores cuando empiezas a usar RStudio', url: YT('8i-npTxUZHg') }
    ],
    content: `
        <h2>¿Qué es R?</h2>
        <p><b>R</b> es un lenguaje de programación y un entorno de software libre creado para el <b>análisis estadístico</b> y los <b>gráficos</b>.
        Lo crearon en 1993 Ross Ihaka y Robert Gentleman en la Universidad de Auckland (Nueva Zelanda) a partir del lenguaje S de los laboratorios Bell.
        Hoy lo usan millones de personas en universidades, hospitales, laboratorios y empresas.</p>
        <div class="indice">
            <a class="etiqueta" href="#i1">¿Por qué R?</a><a class="etiqueta" href="#i2">R y RStudio</a><a class="etiqueta" href="#i3">Primer programa</a>
            <a class="etiqueta" href="#i4">La consola</a><a class="etiqueta" href="#i5">Ayuda</a><a class="etiqueta" href="#i6">Errores comunes</a>
        </div>

        <h3 id="i1"><span class="n">1</span>¿Por qué aprender R en ciencias de la vida?</h3>
        <div class="mini-tarjetas">
            <div><b><i class="fas fa-chart-simple"></i>Bioestadística</b>Pruebas t, ANOVA, regresión y modelos con una línea de código.</div>
            <div><b><i class="fas fa-dna"></i>Bioinformática</b>Bioconductor reúne más de 2 000 paquetes para genómica.</div>
            <div><b><i class="fas fa-leaf"></i>Ecología</b>Diversidad, poblaciones y datos de campo (paquete vegan, entre otros).</div>
            <div><b><i class="fas fa-chart-column"></i>Gráficos</b>ggplot2 produce figuras listas para publicar.</div>
            <div><b><i class="fas fa-file-code"></i>Reproducibilidad</b>R Markdown une texto, código y resultados en un mismo informe.</div>
            <div><b><i class="fas fa-users"></i>Comunidad</b>Gratis, abierto y con más de 20 000 paquetes en CRAN.</div>
        </div>
        <div class="nota bio"><b>Dato bio:</b> el conjunto de datos <code>iris</code>, que viene con R, lo publicó en 1936 Ronald Fisher, biólogo y padre de la estadística moderna. Lo usarás en varios módulos.</div>

        <h3 id="i2"><span class="n">2</span>R y RStudio no son lo mismo</h3>
        <p><b>R</b> es el motor que hace los cálculos. <b>RStudio</b> es el tablero que hace cómodo manejar ese motor: un editor de código, la consola, el historial, los gráficos y la ayuda en una sola ventana.
        Primero se instala R y después RStudio (lo verás en el módulo 2).</p>
        <div class="tabla-scroll"><table class="tabla">
            <tr><th>Panel de RStudio</th><th>Para qué sirve</th></tr>
            <tr><td>Editor (arriba a la izquierda)</td><td>Escribir y guardar scripts <code>.R</code>.</td></tr>
            <tr><td>Consola (abajo a la izquierda)</td><td>Ejecutar instrucciones y ver resultados.</td></tr>
            <tr><td>Entorno / Historial (arriba a la derecha)</td><td>Ver los objetos creados y los comandos usados.</td></tr>
            <tr><td>Archivos / Gráficos / Paquetes / Ayuda (abajo a la derecha)</td><td>Navegar carpetas, ver figuras, instalar paquetes y leer la documentación.</td></tr>
        </table></div>
        <div class="nota info"><b>En esta academia</b> no necesitas instalar nada: el laboratorio ejecuta <b>R 4.5 real</b> dentro del navegador (con WebR). Lo que aprendas funciona igual en RStudio.</div>

        <h3 id="i3"><span class="n">3</span>Tu primer programa</h3>
        <p>La función <code>print()</code> muestra un valor y <code>cat()</code> muestra textos y números seguidos (con <code>"\\n"</code> se salta de línea). Todo lo que va después de <code>#</code> es un <b>comentario</b>: R lo ignora y sirve para explicar el código.</p>
        ${R`
# Mi primer programa en R
print("¡Hola, mundo!")
cat("Estoy aprendiendo R para biología\n")
cat("Dos más dos es", 2 + 2, "\n")
`}
        ${SAL`
[1] "¡Hola, mundo!"
Estoy aprendiendo R para biología
Dos más dos es 4
`}
        <p>Pulsa <b>▶ Probar</b> en el bloque de arriba: el código pasa al laboratorio y se ejecuta. Luego cámbialo y vuelve a ejecutarlo con <kbd>Ctrl</kbd> + <kbd>Enter</kbd>.</p>

        <h3 id="i4"><span class="n">4</span>¿Qué significa el [1] de la consola?</h3>
        <p>En R casi todo es un <b>vector</b> (una fila de valores). Cuando R muestra un resultado, el <code>[1]</code> indica que esa línea empieza en el elemento número 1. Si el resultado es largo, cada línea empieza con la posición de su primer elemento:</p>
        ${R`
5 * 3
1:30
`}
        <div class="nota consejo"><b>Recuerda:</b> en R las posiciones empiezan en <b>1</b> (en otros lenguajes, como Python, empiezan en 0).</div>

        <h3 id="i5"><span class="n">5</span>Cómo pedir ayuda</h3>
        <p>Toda función de R tiene su página de ayuda con la descripción, los argumentos y ejemplos. En RStudio aparece en el panel <b>Help</b>:</p>
        ${RS`
?mean                 # ayuda de la función mean
help("sd")            # lo mismo, con el nombre entre comillas
example(mean)         # ejecuta los ejemplos de la ayuda
help.search("regresión lineal")   # busca en toda la ayuda
`}
        <p>En el laboratorio puedes usar <code>args(mean)</code> para ver qué argumentos recibe una función.</p>

        <h3 id="i6"><span class="n">6</span>Los tres errores más comunes al empezar</h3>
        <ul>
            <li><b>Mayúsculas y minúsculas:</b> <code>Print("hola")</code> falla porque la función es <code>print</code>.</li>
            <li><b>Comillas:</b> los textos van entre comillas rectas <code>"..."</code> o <code>'...'</code>; sin ellas, R busca un objeto con ese nombre.</li>
            <li><b>Paréntesis:</b> cada <code>(</code> necesita su <code>)</code>. Si falta uno, la consola de RStudio muestra <code>+</code> esperando que termines.</li>
        </ul>
        ${R`
# Este código tiene un error a propósito: ejecútalo y lee lo que explica el Profe R
mensaje <- "Hola"
print(Mensaje)
`}
        <div class="nota atencion"><b>Equivocarse es parte de programar.</b> Cuando aparezca un error, el <b>Profe R</b> te explica en español qué pasó y cómo arreglarlo. Corregir un error te da la medalla «Cazabugs».</div>
    `,
    colabContent: `
        <h2>Tu primer programa en RStudio</h2>
        <ol>
            <li>Abre RStudio y crea un script nuevo: <b>File → New File → R Script</b> (o <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>).</li>
            <li>Escribe el código de la lección y guárdalo como <code>mi_primer_programa.R</code>.</li>
            <li>Pon el cursor en una línea y pulsa <kbd>Ctrl</kbd> + <kbd>Enter</kbd>: la línea se ejecuta en la consola.</li>
            <li>Para ejecutar todo el script usa el botón <b>Source</b> (o <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>).</li>
        </ol>
        ${RS`
# mi_primer_programa.R
print("¡Hola, mundo desde RStudio!")
R.version.string     # versión de R instalada
`}
        <div class="nota consejo"><b>Consejo:</b> escribe siempre en el editor (script) y no directamente en la consola. Así guardas tu trabajo y lo puedes repetir.</div>
        <p>¿Aún no instalas RStudio? En el módulo 2 están los pasos, y también puedes usar <a href="https://posit.cloud/" target="_blank" rel="noopener">Posit Cloud</a> (RStudio en el navegador).</p>
    `,
    exercises: [
        {
            title: '¡Hola, mundo!',
            description: 'Escribe un programa que muestre exactamente el texto ¡Hola, mundo! usando print().',
            template: C`
# Usa print() para mostrar el texto ¡Hola, mundo!
`,
            solution: C`
print("¡Hola, mundo!")
`
        },
        {
            title: 'Saludo personalizado',
            description: 'Pide el nombre con readline() y la carrera con otro readline(). Luego muestra con cat(): «Hola, <nombre>. Bienvenido/a a R desde <carrera>.» Las entradas de prueba ya están en la caja «Entradas».',
            entradas: 'Rosalind\nBiología',
            template: C`
nombre <- readline("¿Cómo te llamas? ")
# Pide la carrera con readline()

# Muestra el saludo con cat()
`,
            solution: C`
nombre <- readline("¿Cómo te llamas? ")
carrera <- readline("¿Qué estudias? ")
cat("Hola,", nombre, ". Bienvenido/a a R desde", carrera, "\n")
`
        },
        {
            title: 'R como calculadora',
            description: 'Calcula y muestra con cat() tres resultados: (12 + 8) × 3, 2 elevado a 10 y el residuo de dividir 17 entre 5 (operador %%).',
            template: C`
# 1. (12 + 8) * 3
# 2. 2 elevado a 10 (usa ^)
# 3. residuo de 17 entre 5 (usa %%)
`,
            solution: C`
cat("(12 + 8) x 3 =", (12 + 8) * 3, "\n")
cat("2^10 =", 2^10, "\n")
cat("Residuo de 17 / 5 =", 17 %% 5, "\n")
`
        }
    ],
    quiz: [
        { question: '¿Qué es R?', options: ['Un lenguaje de programación libre para estadística y gráficos', 'Un programa de hojas de cálculo de pago', 'Un sistema operativo', 'Un navegador web'], correct: 0 },
        { question: '¿Quiénes crearon R?', options: ['Ross Ihaka y Robert Gentleman', 'Guido van Rossum', 'Bill Gates y Paul Allen', 'Hadley Wickham y Ronald Fisher'], correct: 0 },
        { question: '¿Cuál es la relación entre R y RStudio?', options: ['R es el lenguaje (el motor) y RStudio es el entorno para usarlo', 'Son dos nombres del mismo programa', 'RStudio es un paquete de R para gráficos', 'R funciona solo dentro de RStudio en línea'], correct: 0 },
        { question: '¿Qué hace el símbolo # en R?', options: ['Inicia un comentario que R no ejecuta', 'Multiplica dos números', 'Crea una variable', 'Carga un paquete'], correct: 0 },
        { question: '¿Qué muestra la consola al ejecutar 5 * 3?', options: ['[1] 15', '15.0', 'Resultado: 15', '[0] 15'], correct: 0 },
        { question: 'En R, ¿en qué posición empieza un vector?', options: ['En la 1', 'En la 0', 'En la -1', 'Depende del tipo de datos'], correct: 0 },
        { question: '¿Cómo se abre la ayuda de la función mean en RStudio?', options: ['?mean', 'help mean', 'mean.help()', '#mean'], correct: 0 },
        { question: '¿Por qué falla Print("hola")?', options: ['Porque R distingue mayúsculas: la función es print', 'Porque faltan comillas', 'Porque print no existe en R', 'Porque los textos no se pueden imprimir'], correct: 0 },
        { question: '¿Qué repositorio oficial guarda los paquetes de R?', options: ['CRAN', 'PyPI', 'npm', 'Maven'], correct: 0 },
        { question: '¿Qué proyecto reúne paquetes de R para genómica y bioinformática?', options: ['Bioconductor', 'Biopython', 'BLAST', 'GenBank'], correct: 0 }
    ]
};

modules.installation = {
    title: '2. Instalación de R y RStudio',
    description: 'R, RStudio y Posit Cloud',
    video: YT('hbgzW3Cvda4'),
    additionalVideos: [
        { title: 'Cómo descargar e instalar R y RStudio 2026 (Windows)', url: YT('MNCoHFr4ApU') },
        { title: 'Cómo instalar R y RStudio en Mac, Windows y Linux', url: YT('487LMyb1m30') },
        { title: 'Cómo usar RStudio: interfaz gráfica', url: YT('skPzCkvr8Cw') },
        { title: 'Programa en R sin instalar nada: Posit Cloud', url: YT('MH8gr8sBJvM') }
    ],
    content: `
        <h2>Prepara tu entorno de trabajo</h2>
        <p>Para trabajar con R en tu computador necesitas dos programas gratuitos, <b>en este orden</b>: primero <b>R</b> (el lenguaje) y después <b>RStudio Desktop</b> (el entorno). Si no puedes instalar programas, usa <b>Posit Cloud</b> o esta misma academia.</p>
        <div class="indice">
            <a class="etiqueta" href="#n1">Instalar R</a><a class="etiqueta" href="#n2">Instalar RStudio</a><a class="etiqueta" href="#n3">Paneles</a>
            <a class="etiqueta" href="#n4">Proyectos</a><a class="etiqueta" href="#n5">Sin instalar</a><a class="etiqueta" href="#n6">Comprobar</a>
        </div>

        <h3 id="n1"><span class="n">1</span>Instalar R desde CRAN</h3>
        <ol>
            <li>Entra a <a href="https://cran.r-project.org/" target="_blank" rel="noopener">cran.r-project.org</a>.</li>
            <li>Elige tu sistema: <b>Download R for Windows</b> → <i>base</i> → <i>Download R-4.x.x for Windows</i>; en Mac, el instalador <code>.pkg</code> que corresponda a tu procesador (Apple Silicon o Intel).</li>
            <li>Abre el instalador y acepta las opciones por defecto.</li>
        </ol>
        <p>En Linux (Ubuntu o Debian) se instala desde la terminal:</p>
        ${TERM`
sudo apt update
sudo apt install r-base r-base-dev
R --version
`}

        <h3 id="n2"><span class="n">2</span>Instalar RStudio Desktop</h3>
        <ol>
            <li>Entra a <a href="https://posit.co/download/rstudio-desktop/" target="_blank" rel="noopener">posit.co/download/rstudio-desktop</a> (Posit es la empresa que hace RStudio).</li>
            <li>Descarga el instalador para tu sistema y ejecútalo.</li>
            <li>Abre <b>RStudio</b> (no R): RStudio encuentra solo la instalación de R.</li>
        </ol>
        <div class="nota atencion"><b>¿RStudio dice que no encuentra R?</b> Instalaste RStudio antes que R. Instala R y vuelve a abrir RStudio.</div>

        <h3 id="n3"><span class="n">3</span>Los cuatro paneles de RStudio</h3>
        <div class="mini-tarjetas">
            <div><b><i class="fas fa-file-code"></i>Editor</b>Donde escribes y guardas tus scripts <code>.R</code>. Ejecuta con <kbd>Ctrl</kbd> + <kbd>Enter</kbd>.</div>
            <div><b><i class="fas fa-terminal"></i>Consola</b>Donde R ejecuta las instrucciones y muestra resultados.</div>
            <div><b><i class="fas fa-box-archive"></i>Entorno</b>Lista los objetos creados (variables, data frames…).</div>
            <div><b><i class="fas fa-folder-tree"></i>Archivos, gráficos y ayuda</b>Carpetas, figuras, paquetes instalados y documentación.</div>
        </div>

        <h3 id="n4"><span class="n">4</span>Proyectos y directorio de trabajo</h3>
        <p>R lee y guarda archivos en el <b>directorio de trabajo</b>. La mejor práctica es crear un <b>proyecto de RStudio</b> por cada trabajo (<b>File → New Project</b>): RStudio crea una carpeta con un archivo <code>.Rproj</code> y la usa como directorio de trabajo.</p>
        ${R`
getwd()          # directorio de trabajo actual
list.files()     # archivos que hay en él
`}
        ${RS`
setwd("C:/Users/tu_usuario/Documents/curso_R")   # cambiarlo a mano (mejor usa proyectos)
`}
        <div class="nota consejo"><b>Organiza cada proyecto</b> con carpetas <code>datos/</code>, <code>scripts/</code> y <code>resultados/</code>. Así tus rutas son cortas: <code>read.csv("datos/pacientes.csv")</code>.</div>

        <h3 id="n5"><span class="n">5</span>R sin instalar nada</h3>
        <div class="tabla-scroll"><table class="tabla">
            <tr><th>Opción</th><th>Ventajas</th><th>Ten en cuenta</th></tr>
            <tr><td><b>Esta academia</b> (WebR)</td><td>R real en el navegador, con datos de práctica y gráficos.</td><td>Algunos paquetes (Bioconductor, Shiny en servidor) no funcionan.</td></tr>
            <tr><td><a href="https://posit.cloud/" target="_blank" rel="noopener">Posit Cloud</a></td><td>RStudio completo en la nube; gratis con horas limitadas.</td><td>Requiere crear una cuenta.</td></tr>
            <tr><td><a href="https://colab.research.google.com/#create=true&language=r" target="_blank" rel="noopener">Google Colab con R</a></td><td>Cuadernos con tu cuenta de Google; se comparten fácil.</td><td>Hay que elegir R en <i>Entorno de ejecución → Cambiar tipo</i>.</td></tr>
        </table></div>

        <h3 id="n6"><span class="n">6</span>Comprueba tu instalación</h3>
        <p>Estas instrucciones dicen qué versión de R usas y qué paquetes están cargados. Funcionan igual en RStudio y aquí:</p>
        ${R`
R.version.string
Sys.Date()
sessionInfo()$R.version$version.string
`}
        <h4>Configuración recomendada en RStudio</h4>
        <ul>
            <li><b>Tools → Global Options → General:</b> desmarca «Restore .RData into workspace at startup» y elige «Never» en «Save workspace». Así cada sesión empieza limpia y reproducible.</li>
            <li><b>Tools → Global Options → Code → Saving:</b> codificación <b>UTF-8</b> (para tildes y eñes).</li>
            <li><b>Tools → Global Options → Appearance:</b> elige un tema oscuro si programas de noche.</li>
        </ul>
    `,
    colabContent: `
        <h2>Lista de verificación de la instalación</h2>
        <ol>
            <li>Instalé R desde <a href="https://cran.r-project.org/" target="_blank" rel="noopener">CRAN</a>.</li>
            <li>Instalé RStudio Desktop desde <a href="https://posit.co/download/rstudio-desktop/" target="_blank" rel="noopener">Posit</a>.</li>
            <li>Abrí RStudio y en la consola ejecuté <code>R.version.string</code>.</li>
            <li>Creé un proyecto nuevo (<b>File → New Project → New Directory</b>) llamado <code>curso_R</code>.</li>
            <li>Dentro del proyecto creé las carpetas <code>datos</code> y <code>scripts</code>.</li>
            <li>Instalé mi primer paquete: <code>install.packages("ggplot2")</code>.</li>
        </ol>
        ${RS`
R.version.string
install.packages("ggplot2")   # solo una vez por computador
library(ggplot2)              # en cada sesión en que lo uses
dir.create("datos"); dir.create("scripts")
`}
        <div class="nota info"><b>¿Usas Linux?</b> Si <code>install.packages()</code> falla al compilar, instala antes las bibliotecas del sistema: <code>sudo apt install libcurl4-openssl-dev libssl-dev libxml2-dev</code>.</div>
    `,
    exercises: [
        {
            title: 'Versión y fecha',
            description: 'Muestra la versión de R que estás usando (R.version.string) y la fecha de hoy (Sys.Date()).',
            template: C`
# Muestra la versión de R
# Muestra la fecha de hoy
`,
            solution: C`
print(R.version.string)
print(Sys.Date())
`
        },
        {
            title: 'Explora tu directorio de trabajo',
            description: 'Muestra el directorio de trabajo con getwd() y luego, con cat(), cuántos archivos hay en él (usa length(list.files())).',
            template: C`
# 1. Directorio de trabajo
# 2. Cantidad de archivos
`,
            solution: C`
print(getwd())
cat("Hay", length(list.files()), "archivos\n")
`
        },
        {
            title: 'Instala R y RStudio en tu computador',
            description: 'Instala R y RStudio (o crea una cuenta en Posit Cloud), crea un proyecto llamado curso_R y ejecuta en él R.version.string. Este reto se marca a mano cuando lo termines.',
            manual: true,
            template: C`
# En RStudio, dentro de tu proyecto curso_R:
R.version.string
`,
            solution: C`
R.version.string
`
        }
    ],
    quiz: [
        { question: '¿En qué orden se instalan R y RStudio?', options: ['Primero R y después RStudio', 'Primero RStudio y después R', 'Da igual el orden', 'Solo se instala RStudio'], correct: 0 },
        { question: '¿Desde qué sitio oficial se descarga R?', options: ['CRAN (cran.r-project.org)', 'La tienda de Microsoft', 'GitHub de Posit', 'PyPI'], correct: 0 },
        { question: '¿Qué empresa desarrolla RStudio?', options: ['Posit', 'Google', 'Microsoft', 'Oracle'], correct: 0 },
        { question: '¿Qué panel de RStudio muestra los objetos que has creado?', options: ['Entorno (Environment)', 'Consola', 'Editor', 'Visor (Viewer)'], correct: 0 },
        { question: '¿Qué función muestra el directorio de trabajo?', options: ['getwd()', 'setwd()', 'dir()', 'home()'], correct: 0 },
        { question: '¿Qué ventaja tiene crear un proyecto de RStudio (.Rproj)?', options: ['Fija el directorio de trabajo en la carpeta del proyecto', 'Hace que R se ejecute más rápido', 'Instala todos los paquetes', 'Convierte el código a Python'], correct: 0 },
        { question: '¿Qué atajo ejecuta la línea actual del script en RStudio?', options: ['Ctrl + Enter', 'Ctrl + S', 'Alt + F4', 'Ctrl + P'], correct: 0 },
        { question: '¿Cuál de estas opciones permite usar RStudio en el navegador sin instalarlo?', options: ['Posit Cloud', 'CRAN', 'Bioconductor', 'R Markdown'], correct: 0 },
        { question: '¿Qué conviene configurar para que cada sesión empiece limpia?', options: ['No restaurar ni guardar el archivo .RData', 'Guardar siempre el .RData', 'Desinstalar los paquetes al salir', 'Usar solo la consola'], correct: 0 },
        { question: '¿Qué codificación se recomienda para guardar scripts con tildes y eñes?', options: ['UTF-8', 'ASCII', 'Latin-1', 'Binaria'], correct: 0 }
    ]
};

modules.basics = {
    title: '3. Primeros pasos en R',
    description: 'Calculadora, variables y tipos de datos',
    video: YT('Gwuckx_Y0b8'),
    additionalVideos: [
        { title: 'Operaciones básicas con R', url: YT('kWy21P7t1cI') },
        { title: 'Operadores lógicos en R', url: YT('CRRf9ptIfwQ') },
        { title: 'Introducción a R y RStudio: conceptos básicos', url: YT('wGO8EIRXaUs') }
    ],
    content: `
        <h2>R como calculadora, variables y tipos de datos</h2>
        <p>En este módulo aprendes las piezas con las que se construye todo programa en R: operaciones, variables, tipos de datos, comparaciones y textos.</p>
        <div class="indice">
            <a class="etiqueta" href="#b1">Operaciones</a><a class="etiqueta" href="#b2">Variables</a><a class="etiqueta" href="#b3">Tipos de datos</a>
            <a class="etiqueta" href="#b4">Comparaciones</a><a class="etiqueta" href="#b5">Textos</a><a class="etiqueta" href="#b6">Valores especiales</a>
        </div>

        <h3 id="b1"><span class="n">1</span>R como calculadora</h3>
        <div class="tabla-scroll"><table class="tabla">
            <tr><th>Operación</th><th>Símbolo</th><th>Ejemplo</th><th>Resultado</th></tr>
            <tr><td>Suma, resta</td><td><code>+ -</code></td><td><code>7 + 3 - 2</code></td><td>8</td></tr>
            <tr><td>Multiplicación, división</td><td><code>* /</code></td><td><code>6 * 4 / 3</code></td><td>8</td></tr>
            <tr><td>Potencia</td><td><code>^</code></td><td><code>2 ^ 5</code></td><td>32</td></tr>
            <tr><td>División entera</td><td><code>%/%</code></td><td><code>17 %/% 5</code></td><td>3</td></tr>
            <tr><td>Residuo (módulo)</td><td><code>%%</code></td><td><code>17 %% 5</code></td><td>2</td></tr>
        </table></div>
        <p>Se respeta la jerarquía de operaciones (primero potencias, luego multiplicaciones y divisiones, al final sumas y restas). Usa paréntesis para cambiarla. R también trae funciones matemáticas:</p>
        ${R`
(3 + 5) * 2
sqrt(144)          # raíz cuadrada
exp(1)             # número e
log(100, base = 10)
abs(-7.5)          # valor absoluto
round(3.14159, 2)  # redondear a 2 decimales
pi
`}

        <h3 id="b2"><span class="n">2</span>Variables: guardar valores con nombre</h3>
        <p>Una variable guarda un valor para usarlo después. En R se asigna con la flecha <code>&lt;-</code> (atajo en RStudio: <kbd>Alt</kbd> + <kbd>-</kbd>). También funciona <code>=</code>, pero la flecha es la costumbre.</p>
        ${R`
peso_kg <- 68
altura_m <- 1.72
imc <- peso_kg / altura_m^2
imc
round(imc, 1)
`}
        <ul>
            <li>Los nombres pueden tener letras, números, <code>.</code> y <code>_</code>, pero no empezar con número ni tener espacios: <code>temp_max</code> ✔, <code>2temp</code> ✖, <code>temp max</code> ✖.</li>
            <li>R distingue mayúsculas: <code>Peso</code> y <code>peso</code> son variables distintas.</li>
            <li>Usa nombres que expliquen el contenido: <code>colonias</code> es mejor que <code>x</code>.</li>
        </ul>

        <h3 id="b3"><span class="n">3</span>Tipos de datos</h3>
        <div class="tabla-scroll"><table class="tabla">
            <tr><th>Tipo (<code>class()</code>)</th><th>Ejemplo</th><th>Uso en biología</th></tr>
            <tr><td><code>numeric</code></td><td><code>37.5</code></td><td>Temperatura, peso, concentración</td></tr>
            <tr><td><code>integer</code></td><td><code>12L</code></td><td>Conteos (colonias, individuos)</td></tr>
            <tr><td><code>character</code></td><td><code>"E. coli"</code></td><td>Nombres de especies, secuencias</td></tr>
            <tr><td><code>logical</code></td><td><code>TRUE</code>, <code>FALSE</code></td><td>¿Es patógena?, ¿tiene fiebre?</td></tr>
        </table></div>
        ${R`
especie <- "Escherichia coli"
colonias <- 120L
temperatura <- 37.5
patogena <- TRUE
class(especie); class(colonias); class(temperatura); class(patogena)
is.numeric(temperatura)
as.numeric("3.8") + 1     # convertir texto a número
as.character(42)          # convertir número a texto
`}
        <div class="nota atencion"><b>Importante:</b> <code>readline()</code> siempre devuelve <b>texto</b>. Para hacer cuentas con lo que escribe el usuario, conviértelo con <code>as.numeric()</code>.</div>

        <h3 id="b4"><span class="n">4</span>Comparaciones y operadores lógicos</h3>
        <p>Las comparaciones responden <code>TRUE</code> o <code>FALSE</code>: <code>==</code> (igual), <code>!=</code> (distinto), <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Se combinan con <code>&amp;</code> (y), <code>|</code> (o) y <code>!</code> (no).</p>
        ${R`
temperatura <- 38.4
temperatura >= 38            # ¿tiene fiebre?
temperatura > 36 & temperatura < 37.5   # ¿está en rango normal?
!(temperatura == 37)
"ATG" == "atg"               # los textos distinguen mayúsculas
`}

        <h3 id="b5"><span class="n">5</span>Trabajar con textos</h3>
        ${R`
gen <- "BRCA1"
paste("El gen", gen, "está en el cromosoma", 17)   # une con espacios
paste0("muestra_", 1:3)                           # une sin espacios
nchar("ATGCGT")                                    # número de caracteres
toupper("atgc"); tolower("ATGC")
substr("ATGCGTACG", 1, 3)                          # primer codón
sprintf("Concentración: %.2f mg/mL", 2.34567)      # formato con 2 decimales
`}
        <p><code>print()</code> muestra un objeto tal como es (con comillas y <code>[1]</code>); <code>cat()</code> muestra el contenido «limpio» y no salta de línea si no le pones <code>"\\n"</code>.</p>

        <h3 id="b6"><span class="n">6</span>Valores especiales</h3>
        <ul>
            <li><code>NA</code>: dato faltante (una muestra que no se midió).</li>
            <li><code>NULL</code>: «nada», un objeto vacío.</li>
            <li><code>Inf</code> y <code>-Inf</code>: infinito (por ejemplo <code>1/0</code>).</li>
            <li><code>NaN</code>: resultado indefinido (<code>0/0</code>).</li>
        </ul>
        ${R`
1 / 0
0 / 0
NA + 5          # cualquier cuenta con NA da NA
is.na(NA)
`}
    `,
    exercises: [
        {
            title: 'Conversor de temperatura',
            description: 'Lee una temperatura en grados Celsius con readline() y muestra su valor en Fahrenheit (C × 9/5 + 32) y en Kelvin (C + 273.15).',
            template: C`
celsius <- as.numeric(readline("Temperatura en °C: "))
# Calcula fahrenheit y kelvin

# Muéstralos con cat()
`,
            solution: C`
celsius <- as.numeric(readline("Temperatura en °C: "))
fahrenheit <- celsius * 9 / 5 + 32
kelvin <- celsius + 273.15
cat("Fahrenheit:", fahrenheit, "\n")
cat("Kelvin:", kelvin, "\n")
`
        },
        {
            title: 'Índice de masa corporal',
            description: 'Lee el peso (kg) y la altura (m) con readline() y muestra el IMC (peso / altura²) redondeado a 1 decimal.',
            entradas: '68\n1.72',
            template: C`
peso <- as.numeric(readline("Peso (kg): "))
# Lee la altura

# Calcula y muestra el IMC con round(..., 1)
`,
            solution: C`
peso <- as.numeric(readline("Peso (kg): "))
altura <- as.numeric(readline("Altura (m): "))
imc <- peso / altura^2
cat("IMC:", round(imc, 1), "\n")
`
        },
        {
            title: 'Volumen de una célula esférica',
            description: 'Lee el radio de una célula en micrómetros y muestra su volumen (4/3 · π · r³) redondeado a 2 decimales.',
            template: C`
radio <- as.numeric(readline("Radio (µm): "))
# volumen = 4/3 * pi * radio^3
`,
            solution: C`
radio <- as.numeric(readline("Radio (µm): "))
volumen <- 4 / 3 * pi * radio^3
cat("Volumen:", round(volumen, 2), "µm³\n")
`
        },
        {
            title: 'Tipos de datos',
            description: 'Crea una variable con el nombre de una especie (texto), otra con un número de individuos (entero con L) y otra lógica que diga si está en peligro. Muestra la clase (class()) de cada una.',
            template: C`
especie <- "Ateles hybridus"
# Crea individuos (usa L) y en_peligro (TRUE o FALSE)

# Muestra class() de las tres
`,
            solution: C`
especie <- "Ateles hybridus"
individuos <- 250L
en_peligro <- TRUE
print(class(especie))
print(class(individuos))
print(class(en_peligro))
`
        }
    ],
    quiz: [
        { question: '¿Cuál es el operador de asignación más usado en R?', options: ['<-', '==', '=>', ':='], correct: 0 },
        { question: '¿Qué resultado da 17 %% 5?', options: ['2', '3', '3.4', '85'], correct: 0 },
        { question: '¿Qué resultado da 17 %/% 5?', options: ['3', '2', '3.4', '12'], correct: 0 },
        { question: '¿Qué tipo de dato devuelve readline()?', options: ['character (texto)', 'numeric', 'logical', 'integer'], correct: 0 },
        { question: '¿Qué función convierte el texto "3.5" en número?', options: ['as.numeric()', 'class()', 'is.numeric()', 'paste()'], correct: 0 },
        { question: '¿Cuál de estos nombres de variable NO es válido en R?', options: ['2temperatura', 'temp_max', 'peso.kg', 'Altura2'], correct: 0 },
        { question: '¿Qué devuelve 38 >= 38 & 5 < 3?', options: ['FALSE', 'TRUE', 'NA', 'Error'], correct: 0 },
        { question: '¿Qué hace paste0("gen_", 1)?', options: ['Une sin espacio: "gen_1"', 'Une con espacio: "gen_ 1"', 'Suma 1 al texto', 'Da error'], correct: 0 },
        { question: '¿Qué representa NA en R?', options: ['Un dato faltante', 'El número cero', 'Un texto vacío', 'Infinito'], correct: 0 },
        { question: '¿Qué resultado da NA + 5?', options: ['NA', '5', '0', 'Error'], correct: 0 }
    ]
};
