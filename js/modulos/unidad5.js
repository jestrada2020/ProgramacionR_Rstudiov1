/**
 * Academia Bio-R · Unidad 5 · Ciencia reproducible
 * Módulos: bioconductor, rmarkdown, shiny, cloud
 */

modules.bioconductor = {
    title: '13. Bioinformática con R',
    description: 'Secuencias y datos genómicos',
    video: YT('czcfYraWJmE'),
    additionalVideos: [
        { title: 'R - Bioconductor: presentación del tutorial', url: YT('jDFapnVkdhw') },
        { title: 'Mini curso: introducción a R, RStudio y Bioconductor (CDSB)', url: YT('SZVPXT2McQM') }
    ],
    content: `
        <h2>Bioinformática con R y Bioconductor</h2>
        <p><b>Bioconductor</b> es el proyecto de R para la biología molecular: más de 2 000 paquetes para secuencias, genómica, transcriptómica (RNA-seq), proteómica y filogenia. Aquí aprenderás las ideas con <b>R base</b> (que sí funciona en el navegador) y verás cómo se hacen con Bioconductor en RStudio.</p>
        <div class="indice">
            <a class="etiqueta" href="#c1">Bioconductor</a><a class="etiqueta" href="#c2">Secuencias</a><a class="etiqueta" href="#c3">Traducción</a>
            <a class="etiqueta" href="#c4">Motivos</a><a class="etiqueta" href="#c5">FASTA</a><a class="etiqueta" href="#c6">Expresión</a><a class="etiqueta" href="#c7">Biostrings</a>
        </div>

        <h3 id="c1"><span class="n">1</span>El ecosistema Bioconductor</h3>
        <div class="mini-tarjetas">
            <div><b>Biostrings</b>Secuencias de ADN, ARN y proteínas.</div>
            <div><b>GenomicRanges</b>Coordenadas genómicas (genes, exones, picos).</div>
            <div><b>DESeq2 / edgeR / limma</b>Expresión diferencial en RNA-seq y microarreglos.</div>
            <div><b>phyloseq</b>Comunidades microbianas (microbioma).</div>
            <div><b>ggtree</b>Árboles filogenéticos con la gramática de ggplot2.</div>
            <div><b>rtracklayer</b>Leer y escribir archivos GFF, BED y BigWig.</div>
        </div>
        ${RS`
install.packages("BiocManager")              # una vez, desde CRAN
BiocManager::install("Biostrings")           # paquetes de Bioconductor
BiocManager::install(c("DESeq2", "GenomicRanges"))
BiocManager::version()
`}
        <div class="nota info"><b>En el navegador</b> los paquetes de Bioconductor no están disponibles: los bloques marcados «Para RStudio» se practican en RStudio, Posit Cloud o Google Colab. Todo lo demás corre aquí con R base.</div>

        <h3 id="c2"><span class="n">2</span>Manipular secuencias con R base</h3>
        ${R`
adn <- "ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG"
nchar(adn)                                     # longitud
bases <- strsplit(adn, "")[[1]]                # separar en bases
table(bases)                                   # composición
gc <- mean(bases %in% c("G", "C")) * 100
cat("GC:", round(gc, 1), "%\n")
complemento <- chartr("ATGC", "TACG", adn)     # complemento
reverso_comp <- paste(rev(strsplit(complemento, "")[[1]]), collapse = "")
reverso_comp
arn <- gsub("T", "U", adn)                     # transcripción
arn
`}

        <h3 id="c3"><span class="n">3</span>Codones y traducción a proteína</h3>
        ${R`
adn <- "ATGGCCTTTGGGTAA"
inicios <- seq(1, nchar(adn) - 2, by = 3)
codones <- substring(adn, inicios, inicios + 2)
codones
codigo <- c(ATG = "M", GCC = "A", TTT = "F", GGG = "G", TAA = "*", TAG = "*", TGA = "*")
proteina <- paste(codigo[codones], collapse = "")
proteina
`}
        <p>El código genético completo (64 codones) está en Biostrings como <code>GENETIC_CODE</code>, y <code>translate()</code> traduce en un solo paso.</p>

        <h3 id="c4"><span class="n">4</span>Buscar motivos: sitios de restricción</h3>
        ${R`
adn <- "TTGAATTCGGATCCAAGAATTCTTAAGCTTGG"
sitios <- c(EcoRI = "GAATTC", BamHI = "GGATCC", HindIII = "AAGCTT")
for (enzima in names(sitios)) {
  pos <- gregexpr(sitios[enzima], adn)[[1]]
  n <- sum(pos > 0)
  cat(enzima, ":", n, "sitio(s) en la posición", if (n) pos else "-", "\n")
}
grepl("GAATTC", c(gen1 = "AAGAATTCAA", gen2 = "CCCCGGGG"))   # ¿qué secuencias lo tienen?
`}

        <h3 id="c5"><span class="n">5</span>Leer un archivo FASTA</h3>
        <p>FASTA es el formato estándar de secuencias: una línea de encabezado que empieza con <code>&gt;</code> y luego la secuencia.</p>
        ${R`
writeLines(c(">gen_A Escherichia coli", "ATGGCTAGCTAGGCTA", "GGCTAACG",
             ">gen_B Bacillus subtilis", "ATGCCCGGGTTTAAACCC"), "ejemplo.fasta")
lineas <- readLines("ejemplo.fasta")
encabezados <- which(startsWith(lineas, ">"))
nombres <- sub(">", "", lineas[encabezados])
fin <- c(encabezados[-1] - 1, length(lineas))
secuencias <- mapply(function(a, b) paste(lineas[(a + 1):b], collapse = ""), encabezados, fin)
names(secuencias) <- nombres
secuencias
nchar(secuencias)
`}
        ${RS`
library(Biostrings)
seqs <- readDNAStringSet("ejemplo.fasta")
width(seqs); reverseComplement(seqs); letterFrequency(seqs, "GC", as.prob = TRUE)
translate(DNAString("ATGGCCTTTGGGTAA"))
`}

        <h3 id="c6"><span class="n">6</span>Expresión génica: cambio en veces (fold change)</h3>
        <p>En transcriptómica se compara la expresión entre condiciones con el <b>log2 del cambio en veces</b>: log2FC = 1 significa el doble, −1 la mitad.</p>
        ${R`
genes <- read.csv("genes.csv")
genes$log2FC <- round(log2(genes$expr_tratamiento / genes$expr_control), 2)
genes$estado <- ifelse(genes$log2FC > 1, "sube", ifelse(genes$log2FC < -1, "baja", "sin cambio"))
table(genes$estado)
head(genes[order(-genes$log2FC), c("gen", "cromosoma", "log2FC")], 5)
barplot(sort(genes$log2FC), col = ifelse(sort(genes$log2FC) > 1, "#ef4444", "gray70"),
        main = "log2 del cambio en la expresión", ylab = "log2FC")
abline(h = c(-1, 1), lty = 2)
`}

        <h3 id="c7"><span class="n">7</span>Un análisis real con DESeq2 (en RStudio)</h3>
        ${RS`
library(DESeq2)
dds <- DESeqDataSetFromMatrix(countData = conteos, colData = muestras, design = ~ condicion)
dds <- DESeq(dds)
res <- results(dds, contrast = c("condicion", "tratado", "control"))
summary(res)
plotMA(res)
`}
    `,
    colabContent: `
        <h2>Bioconductor en RStudio o Google Colab</h2>
        <ol>
            <li>Instala el administrador: <code>install.packages("BiocManager")</code>.</li>
            <li>Instala Biostrings: <code>BiocManager::install("Biostrings")</code> (tarda unos minutos).</li>
            <li>Prueba el código de la sección 5 con un FASTA real descargado de <a href="https://www.ncbi.nlm.nih.gov/nuccore" target="_blank" rel="noopener">NCBI Nucleotide</a>.</li>
        </ol>
        ${RS`
library(Biostrings)
insulina <- DNAString("ATGGCCCTGTGGATGCGCCTCCTGCCCCTGCTGGCGCTGCTGGCCCTCTGGGGACCTGACCCAGCCGCAGCC")
length(insulina)
alphabetFrequency(insulina, baseOnly = TRUE)
reverseComplement(insulina)
translate(insulina)
`}
        <div class="nota consejo"><b>En Google Colab</b> elige el entorno de R y ejecuta las mismas instrucciones; la instalación se pierde al cerrar la sesión, así que ponla en la primera celda.</div>
    `,
    exercises: [
        {
            title: 'Reverso complementario',
            description: 'Calcula el reverso complementario de la secuencia (complemento con chartr() y luego invertir el orden) y muéstralo con cat().',
            template: C`
adn <- "ATGCGTACCTTAGGC"
`,
            solution: C`
adn <- "ATGCGTACCTTAGGC"
complemento <- chartr("ATGC", "TACG", adn)
reverso <- paste(rev(strsplit(complemento, "")[[1]]), collapse = "")
cat("Reverso complementario:", reverso, "\n")
`
        },
        {
            title: 'Traducir un gen corto',
            description: 'Divide la secuencia en codones con substring() y tradúcela con el vector codigo. Muestra la proteína como una cadena de letras.',
            template: C`
adn <- "ATGAAAGGCTTTCTGTAA"
codigo <- c(ATG = "M", AAA = "K", GGC = "G", TTT = "F", CTG = "L", TAA = "*")
`,
            solution: C`
adn <- "ATGAAAGGCTTTCTGTAA"
codigo <- c(ATG = "M", AAA = "K", GGC = "G", TTT = "F", CTG = "L", TAA = "*")
inicios <- seq(1, nchar(adn) - 2, by = 3)
codones <- substring(adn, inicios, inicios + 2)
cat("Proteína:", paste(codigo[codones], collapse = ""), "\n")
`
        },
        {
            title: 'Sitios EcoRI',
            description: 'Cuenta cuántas veces aparece el sitio de EcoRI (GAATTC) en la secuencia y en qué posiciones (gregexpr()).',
            template: C`
adn <- "CCGAATTCAGGTACGAATTCTTAGCGAATTCAA"
`,
            solution: C`
adn <- "CCGAATTCAGGTACGAATTCTTAGCGAATTCAA"
pos <- gregexpr("GAATTC", adn)[[1]]
cat("Sitios EcoRI:", length(pos), "\n")
cat("Posiciones:", pos, "\n")
`
        },
        {
            title: 'Genes que cambian de expresión',
            description: 'Con genes.csv calcula log2FC = log2(expr_tratamiento / expr_control). Muestra cuántos genes tienen log2FC > 1 y el nombre del gen con el mayor log2FC.',
            template: C`
genes <- read.csv("genes.csv")
`,
            solution: C`
genes <- read.csv("genes.csv")
genes$log2FC <- log2(genes$expr_tratamiento / genes$expr_control)
cat("Genes con log2FC > 1:", sum(genes$log2FC > 1), "\n")
cat("Mayor cambio:", genes$gen[which.max(genes$log2FC)], "\n")
`
        },
        {
            title: 'Instala Bioconductor en RStudio',
            description: 'En RStudio (o Posit Cloud) instala BiocManager y Biostrings, y traduce con translate() la secuencia ATGGCCTTTGGGTAA. Este reto se marca a mano.',
            manual: true,
            template: C`
install.packages("BiocManager")
BiocManager::install("Biostrings")
library(Biostrings)
translate(DNAString("ATGGCCTTTGGGTAA"))
`,
            solution: C`
library(Biostrings)
translate(DNAString("ATGGCCTTTGGGTAA"))
`
        }
    ],
    quiz: [
        { question: '¿Qué es Bioconductor?', options: ['Un proyecto de paquetes de R para bioinformática y genómica', 'Un programa para secuenciar ADN', 'Una base de datos de proteínas', 'Un editor de código'], correct: 0 },
        { question: '¿Cómo se instalan los paquetes de Bioconductor?', options: ['BiocManager::install("paquete")', 'install.packages("paquete") siempre', 'library(Bioconductor)', 'pip install paquete'], correct: 0 },
        { question: '¿Qué paquete de Bioconductor trabaja con secuencias de ADN, ARN y proteínas?', options: ['Biostrings', 'ggplot2', 'dplyr', 'shiny'], correct: 0 },
        { question: '¿Qué hace chartr("ATGC", "TACG", adn)?', options: ['Cambia cada base por su complementaria', 'Invierte la secuencia', 'Cuenta las bases', 'Traduce a proteína'], correct: 0 },
        { question: '¿Cómo se pasa de ADN a ARN con R base?', options: ['gsub("T", "U", adn)', 'toupper(adn)', 'rev(adn)', 'nchar(adn)'], correct: 0 },
        { question: '¿Con qué carácter empieza el encabezado de una secuencia en formato FASTA?', options: ['>', '#', '@', '%'], correct: 0 },
        { question: '¿Qué función encuentra todas las posiciones de un motivo en una cadena?', options: ['gregexpr()', 'substr()', 'paste()', 'chartr()'], correct: 0 },
        { question: 'Un gen con log2FC = 2 en el tratamiento…', options: ['Se expresa 4 veces más que en el control', 'Se expresa 2 veces menos', 'No cambia', 'Se expresa el doble'], correct: 0 },
        { question: '¿Qué paquete se usa para expresión diferencial con datos de RNA-seq?', options: ['DESeq2', 'readxl', 'Biostrings', 'ggtree'], correct: 0 },
        { question: '¿Cuántas bases forman un codón?', options: ['3', '2', '4', '6'], correct: 0 }
    ]
};

modules.rmarkdown = {
    title: '14. R Markdown y Quarto',
    description: 'Informes reproducibles',
    video: YT('6Qj8yBFgT9Q'),
    additionalVideos: [
        { title: 'Informes automatizados con R Markdown', url: YT('9tk1SiihDcY') },
        { title: 'RMarkdown para principiantes', url: YT('V0eJE55aTrY') }
    ],
    content: `
        <h2>Informes que se actualizan solos</h2>
        <p>Un informe de <b>R Markdown</b> (<code>.Rmd</code>) mezcla texto, código R y resultados. Al pulsar <b>Knit</b>, R ejecuta el código y genera un documento HTML, Word o PDF con las tablas y gráficos incluidos. Si cambian los datos, vuelves a pulsar Knit y el informe se actualiza: eso es <b>investigación reproducible</b>.</p>
        <div class="indice">
            <a class="etiqueta" href="#m1">Estructura</a><a class="etiqueta" href="#m2">Markdown</a><a class="etiqueta" href="#m3">Bloques</a>
            <a class="etiqueta" href="#m4">Código en línea</a><a class="etiqueta" href="#m5">Tablas</a><a class="etiqueta" href="#m6">Exportar</a><a class="etiqueta" href="#m7">Quarto</a>
        </div>

        <h3 id="m1"><span class="n">1</span>Estructura de un archivo .Rmd</h3>
        <p>En RStudio: <b>File → New File → R Markdown…</b>. El archivo tiene tres partes: el encabezado YAML (entre <code>---</code>), el texto en Markdown y los bloques de código (<i>chunks</i>).</p>
        ${RMD`
---
title: "Crecimiento de dos cepas bacterianas"
author: "Rosalind Franklin"
date: "2026-10-08"
output: html_document
---

## Introducción

Comparamos el crecimiento de *E. coli* y *B. subtilis* a 37 °C.

${'```'}{r datos}
crec <- read.csv("crecimiento.csv")
summary(crec)
${'```'}

## Resultados

${'```'}{r grafico, echo=FALSE, fig.cap="Curvas de crecimiento"}
library(ggplot2)
ggplot(crec, aes(hora, do600, color = cepa)) + geom_line()
${'```'}
`}

        <h3 id="m2"><span class="n">2</span>Lo básico de Markdown</h3>
        <div class="tabla-scroll"><table class="tabla">
            <tr><th>Escribes</th><th>Obtienes</th></tr>
            <tr><td><code># Título</code>, <code>## Subtítulo</code></td><td>Títulos de distinto nivel</td></tr>
            <tr><td><code>**negrita**</code>, <code>*cursiva*</code></td><td><b>negrita</b>, <i>cursiva</i> (nombres científicos)</td></tr>
            <tr><td><code>- elemento</code></td><td>Lista con viñetas</td></tr>
            <tr><td><code>1. paso</code></td><td>Lista numerada</td></tr>
            <tr><td><code>[texto](https://...)</code></td><td>Enlace</td></tr>
            <tr><td><code>$\\bar{x} = \\frac{\\sum x_i}{n}$</code></td><td>Ecuación en LaTeX</td></tr>
        </table></div>

        <h3 id="m3"><span class="n">3</span>Opciones de los bloques de código</h3>
        <div class="tabla-scroll"><table class="tabla">
            <tr><th>Opción</th><th>Efecto</th></tr>
            <tr><td><code>echo = FALSE</code></td><td>Muestra el resultado pero oculta el código</td></tr>
            <tr><td><code>eval = FALSE</code></td><td>Muestra el código sin ejecutarlo</td></tr>
            <tr><td><code>include = FALSE</code></td><td>Ejecuta pero no muestra nada (útil para cargar paquetes)</td></tr>
            <tr><td><code>message = FALSE</code>, <code>warning = FALSE</code></td><td>Oculta mensajes y advertencias</td></tr>
            <tr><td><code>fig.cap = "..."</code>, <code>fig.width = 6</code></td><td>Título y tamaño de la figura</td></tr>
        </table></div>

        <h3 id="m4"><span class="n">4</span>Resultados dentro del texto</h3>
        <p>Con <code>\`r expresión\`</code> el número se calcula al generar el informe y nunca queda desactualizado:</p>
        ${RMD`
Se midieron ${'`'}r nrow(crec)${'`'} registros. La densidad óptica máxima de E. coli
fue ${'`'}r max(crec$do600[crec$cepa == "E_coli"])${'`'}.
`}
        <p>Puedes probar la idea en el laboratorio construyendo la frase con <code>sprintf()</code>:</p>
        ${R`
crec <- read.csv("crecimiento.csv")
cat(sprintf("Se midieron %d registros. La DO600 máxima de E. coli fue %.2f.\n",
            nrow(crec), max(crec$do600[crec$cepa == "E_coli"])))
`}

        <h3 id="m5"><span class="n">5</span>Tablas para informes con knitr::kable()</h3>
        ${R`
library(knitr)
plantas <- read.csv("plantas.csv")
resumen <- aggregate(cbind(largo_petalo, ancho_petalo) ~ especie, data = plantas, FUN = mean)
kable(resumen, digits = 2, caption = "Medidas promedio de los pétalos (cm)")
`}
        <p>En el informe, <code>kable()</code> se convierte en una tabla con formato. Paquetes como <b>gt</b> y <b>flextable</b> dan aún más control.</p>

        <h3 id="m6"><span class="n">6</span>Generar el documento</h3>
        <ul>
            <li><b>HTML:</b> <code>output: html_document</code> (no necesita nada más).</li>
            <li><b>Word:</b> <code>output: word_document</code>, ideal para que tu profesor comente.</li>
            <li><b>PDF:</b> <code>output: pdf_document</code>; necesita LaTeX: <code>install.packages("tinytex"); tinytex::install_tinytex()</code>.</li>
        </ul>
        ${RS`
rmarkdown::render("informe.Rmd", output_format = "html_document")   # lo mismo que el botón Knit
`}

        <h3 id="m7"><span class="n">7</span>Quarto: la nueva generación</h3>
        <p><a href="https://quarto.org/" target="_blank" rel="noopener">Quarto</a> (<code>.qmd</code>) es el sucesor de R Markdown: la misma idea, pero funciona con R, Python y Julia, y crea también presentaciones, libros y sitios web. Viene incluido en RStudio reciente: <b>File → New File → Quarto Document</b>.</p>
    `,
    colabContent: `
        <h2>Tu primer informe en RStudio</h2>
        <ol>
            <li><b>File → New File → R Markdown…</b>, título «Mi primer informe», formato HTML.</li>
            <li>Guarda el archivo como <code>informe.Rmd</code> en tu proyecto, junto a <code>crecimiento.csv</code>.</li>
            <li>Reemplaza el contenido de ejemplo por el de la sección 1 de la lección.</li>
            <li>Pulsa <b>Knit</b> (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd>) y revisa el HTML.</li>
            <li>Cambia un dato del CSV y vuelve a pulsar Knit: el informe se actualiza.</li>
        </ol>
        <div class="nota consejo"><b>Para entregar trabajos</b> usa <code>output: word_document</code> o <code>html_document</code> con <code>toc: true</code> (índice automático).</div>
    `,
    exercises: [
        {
            title: 'Tabla para el informe',
            description: 'Con knitr::kable() muestra una tabla con la altura media de las plantas (fertilizante.csv) por fertilizante, con 1 decimal.',
            template: C`
library(knitr)
fert <- read.csv("fertilizante.csv")
# aggregate(altura_cm ~ fertilizante, data = fert, FUN = mean)
`,
            solution: C`
library(knitr)
fert <- read.csv("fertilizante.csv")
resumen <- aggregate(altura_cm ~ fertilizante, data = fert, FUN = mean)
kable(resumen, digits = 1)
`
        },
        {
            title: 'Frase con resultados dinámicos',
            description: 'Con plantas.csv construye con sprintf() la frase: «Se analizaron 45 flores; el largo medio del pétalo fue 3.73 cm.» (los números deben calcularse con nrow() y mean(), con 2 decimales).',
            template: C`
plantas <- read.csv("plantas.csv")
# cat(sprintf("Se analizaron %d flores; el largo medio del pétalo fue %.2f cm.\n", ...))
`,
            solution: C`
plantas <- read.csv("plantas.csv")
cat(sprintf("Se analizaron %d flores; el largo medio del pétalo fue %.2f cm.\n",
            nrow(plantas), mean(plantas$largo_petalo)))
`
        },
        {
            title: 'Genera tu primer informe',
            description: 'En RStudio crea un .Rmd con título, un párrafo, un bloque que lea crecimiento.csv y un gráfico, y genera el HTML con Knit. Este reto se marca a mano.',
            manual: true,
            template: C`
# En RStudio: File → New File → R Markdown…
`,
            solution: C`
crec <- read.csv("crecimiento.csv")
summary(crec)
`
        }
    ],
    quiz: [
        { question: '¿Qué combina un documento de R Markdown?', options: ['Texto, código R y sus resultados', 'Solo código R', 'Solo texto con formato', 'Hojas de cálculo'], correct: 0 },
        { question: '¿Qué botón de RStudio genera el documento final de un .Rmd?', options: ['Knit', 'Source', 'Run', 'Build'], correct: 0 },
        { question: '¿Dónde se escriben el título, el autor y el formato de salida?', options: ['En el encabezado YAML entre ---', 'En el primer bloque de código', 'Al final del documento', 'En un archivo aparte'], correct: 0 },
        { question: '¿Qué opción de un bloque oculta el código pero muestra el resultado?', options: ['echo = FALSE', 'eval = FALSE', 'include = TRUE', 'message = TRUE'], correct: 0 },
        { question: '¿Cómo se escribe una palabra en negrita en Markdown?', options: ['**palabra**', '#palabra#', '<palabra>', '_palabra_ siempre'], correct: 0 },
        { question: '¿Qué función de knitr crea tablas para informes?', options: ['kable()', 'table()', 'print.table()', 'View()'], correct: 0 },
        { question: '¿Qué se necesita para generar un PDF desde R Markdown?', options: ['Una instalación de LaTeX (por ejemplo tinytex)', 'Microsoft Word', 'Una cuenta de Google', 'El paquete shiny'], correct: 0 },
        { question: '¿Cuál es la ventaja principal de un informe reproducible?', options: ['Si cambian los datos, el informe se regenera con los resultados correctos', 'Ocupa menos espacio', 'No necesita código', 'Se ve en cualquier celular'], correct: 0 },
        { question: '¿Qué extensión tienen los documentos de Quarto?', options: ['.qmd', '.Rmd', '.R', '.docx'], correct: 0 },
        { question: '¿Cómo se incluye un resultado de R dentro de una frase del informe?', options: ['Con código en línea: `r expresión`', 'Copiándolo a mano', 'Con un comentario #', 'Con print() en el YAML'], correct: 0 }
    ]
};

modules.shiny = {
    title: '15. Aplicaciones con Shiny',
    description: 'Aplicaciones web interactivas',
    video: YT('DtGfvsM1NMU'),
    additionalVideos: [
        { title: 'Primera app de R Shiny en 5 minutos con RStudio', url: YT('JgQGuWrWcF8') },
        { title: 'Aprende lo básico de Shiny en 20 minutos', url: YT('if69cxd2myY') }
    ],
    content: `
        <h2>Shiny: tu análisis convertido en una aplicación web</h2>
        <p><b>Shiny</b> es un paquete de R para crear aplicaciones web interactivas sin saber HTML ni JavaScript: el usuario mueve un control (un deslizador, una lista) y el gráfico o la tabla se actualizan solos. Sirve para tableros de datos, calculadoras clínicas o para enseñar modelos biológicos.</p>
        <div class="indice">
            <a class="etiqueta" href="#s1">Estructura</a><a class="etiqueta" href="#s2">Entradas y salidas</a><a class="etiqueta" href="#s3">App completa</a>
            <a class="etiqueta" href="#s4">Reactividad</a><a class="etiqueta" href="#s5">Lógica en funciones</a><a class="etiqueta" href="#s6">Publicar</a>
        </div>

        <h3 id="s1"><span class="n">1</span>Las tres piezas de una app</h3>
        <ul>
            <li><b>ui</b> (interfaz): qué ve el usuario y dónde (controles y espacios para resultados).</li>
            <li><b>server</b> (servidor): las instrucciones R que calculan los resultados a partir de las entradas.</li>
            <li><b>shinyApp(ui, server)</b>: une las dos y lanza la aplicación.</li>
        </ul>
        ${RS`
library(shiny)
ui <- fluidPage(
  titlePanel("Hola, Shiny"),
  textInput("nombre", "¿Cómo te llamas?", "Rosalind"),
  textOutput("saludo")
)
server <- function(input, output) {
  output$saludo <- renderText(paste("Hola,", input$nombre))
}
shinyApp(ui, server)
`}

        <h3 id="s2"><span class="n">2</span>Entradas y salidas más usadas</h3>
        <div class="tabla-scroll"><table class="tabla">
            <tr><th>Entrada (ui)</th><th>Para qué</th><th>Salida (ui) + render (server)</th><th>Muestra</th></tr>
            <tr><td><code>sliderInput()</code></td><td>Número con deslizador</td><td><code>plotOutput()</code> + <code>renderPlot()</code></td><td>Gráficos</td></tr>
            <tr><td><code>numericInput()</code></td><td>Número escrito</td><td><code>textOutput()</code> + <code>renderText()</code></td><td>Texto</td></tr>
            <tr><td><code>selectInput()</code></td><td>Elegir de una lista</td><td><code>tableOutput()</code> + <code>renderTable()</code></td><td>Tablas</td></tr>
            <tr><td><code>checkboxInput()</code></td><td>Sí / no</td><td><code>verbatimTextOutput()</code> + <code>renderPrint()</code></td><td>Salida de consola</td></tr>
            <tr><td><code>fileInput()</code></td><td>Subir un archivo</td><td><code>downloadButton()</code> + <code>downloadHandler()</code></td><td>Descargas</td></tr>
        </table></div>
        <p>Dentro de <code>server</code> cada entrada se lee como <code>input$id</code> y cada salida se asigna como <code>output$id</code>.</p>

        <h3 id="s3"><span class="n">3</span>Una app completa: explorador de flores</h3>
        ${RS`
library(shiny)
plantas <- read.csv("plantas.csv")

ui <- fluidPage(
  titlePanel("Explorador de flores de iris"),
  sidebarLayout(
    sidebarPanel(
      selectInput("especie", "Especie:", choices = unique(plantas$especie)),
      sliderInput("barras", "Número de barras:", min = 3, max = 20, value = 8),
      selectInput("color", "Color:", c("steelblue", "tomato", "seagreen"))
    ),
    mainPanel(
      plotOutput("histograma"),
      tableOutput("resumen")
    )
  )
)

server <- function(input, output) {
  datos <- reactive(plantas[plantas$especie == input$especie, ])
  output$histograma <- renderPlot({
    hist(datos()$largo_petalo, breaks = input$barras, col = input$color,
         main = paste("Pétalos de", input$especie), xlab = "Largo (cm)")
  })
  output$resumen <- renderTable({
    data.frame(n = nrow(datos()), media = mean(datos()$largo_petalo), de = sd(datos()$largo_petalo))
  })
}

shinyApp(ui, server)
`}

        <h3 id="s4"><span class="n">4</span>Reactividad</h3>
        <p>Shiny recalcula <b>solo</b> lo que depende de la entrada que cambió. <code>reactive()</code> guarda un cálculo intermedio (como <code>datos()</code> arriba) para no repetirlo; <code>observeEvent()</code> ejecuta algo cuando se pulsa un botón.</p>

        <h3 id="s5"><span class="n">5</span>Consejo profesional: la lógica en funciones</h3>
        <p>Escribe los cálculos de tu app como <b>funciones normales</b> de R y pruébalas antes de ponerlas en <code>server</code>. Así encuentras los errores en el laboratorio, no en la app:</p>
        ${R`
dosis_mg <- function(peso_kg, mg_por_kg) peso_kg * mg_por_kg
tabletas <- function(dosis, mg_tableta) ceiling(dosis / mg_tableta)

# Lo que haría la app para tres valores del deslizador
for (peso in c(20, 45, 70)) {
  d <- dosis_mg(peso, 15)
  cat("Peso", peso, "kg → dosis", d, "mg →", tabletas(d, 250), "tableta(s) de 250 mg\n")
}
`}

        <h3 id="s6"><span class="n">6</span>Ejecutar y publicar</h3>
        <ul>
            <li><b>En RStudio:</b> guarda el código como <code>app.R</code> y pulsa <b>Run App</b>.</li>
            <li><b>En el navegador, sin servidor:</b> <a href="https://shinylive.io/r/editor/" target="_blank" rel="noopener">Shinylive</a> ejecuta apps de Shiny con WebR (la misma tecnología de esta academia).</li>
            <li><b>Publicar en internet:</b> <a href="https://www.shinyapps.io/" target="_blank" rel="noopener">shinyapps.io</a> (gratis con límites) con <code>rsconnect::deployApp()</code>.</li>
        </ul>
    `,
    colabContent: `
        <h2>Ejecuta tu primera app</h2>
        <ol>
            <li>En RStudio: <b>File → New File → Shiny Web App…</b>, nombre <code>flores</code>, tipo «Single File (app.R)».</li>
            <li>Copia <code>plantas.csv</code> (de <a href="#/recursos/datosPractica">Datos de práctica</a>) en la carpeta de la app.</li>
            <li>Pega el código de la sección 3 y pulsa <b>Run App</b>.</li>
            <li>Sin instalar nada: abre <a href="https://shinylive.io/r/editor/" target="_blank" rel="noopener">shinylive.io/r/editor</a>, pega el código y pulsa ▶ (cambia la lectura del CSV por <code>plantas &lt;- iris</code> y los nombres de columnas).</li>
        </ol>
        ${RS`
install.packages("shiny")
shiny::runExample("01_hello")     # ejemplos incluidos en el paquete
`}
    `,
    exercises: [
        {
            title: 'Lógica de una calculadora de dosis',
            description: 'Escribe dosis_mg(peso, mg_por_kg) y tabletas(dosis, mg_tableta) (redondea hacia arriba con ceiling()). Muestra la dosis y las tabletas para pesos de 18, 32 y 60 kg con 20 mg/kg y tabletas de 500 mg.',
            template: C`
dosis_mg <- function(peso, mg_por_kg) {
}
tabletas <- function(dosis, mg_tableta) {
}
`,
            solution: C`
dosis_mg <- function(peso, mg_por_kg) {
  peso * mg_por_kg
}
tabletas <- function(dosis, mg_tableta) {
  ceiling(dosis / mg_tableta)
}
for (peso in c(18, 32, 60)) {
  d <- dosis_mg(peso, 20)
  cat("Peso:", peso, "kg - Dosis:", d, "mg - Tabletas:", tabletas(d, 500), "\n")
}
`
        },
        {
            title: 'Filtro como el de un selectInput',
            description: 'Escribe filtrar(datos, especie) que devuelva las filas de esa especie. Úsala con plantas.csv para mostrar el largo medio del pétalo de cada especie (2 decimales), recorriendo unique(plantas$especie).',
            template: C`
plantas <- read.csv("plantas.csv")
filtrar <- function(datos, especie) {
}
`,
            solution: C`
plantas <- read.csv("plantas.csv")
filtrar <- function(datos, especie) {
  datos[datos$especie == especie, ]
}
for (e in unique(plantas$especie)) {
  cat(e, ":", round(mean(filtrar(plantas, e)$largo_petalo), 2), "cm\n")
}
`
        },
        {
            title: 'La función del gráfico',
            description: 'Escribe grafico(x, barras, color) que dibuje un histograma de x con ese número de barras y color, y úsala con la temperatura máxima de clima.csv (12 barras, "tomato").',
            template: C`
clima <- read.csv("clima.csv")
grafico <- function(x, barras, color) {
}
`,
            solution: C`
clima <- read.csv("clima.csv")
grafico <- function(x, barras, color) {
  hist(x, breaks = barras, col = color, main = "Temperatura máxima", xlab = "°C")
}
grafico(clima$temp_max, 12, "tomato")
`
        },
        {
            title: 'Corre una app de Shiny',
            description: 'Ejecuta en RStudio (o en shinylive.io) la app «Explorador de flores» de la lección y cambia el color y el número de barras. Este reto se marca a mano.',
            manual: true,
            template: C`
library(shiny)
# Pega aquí la app de la sección 3 y pulsa Run App
`,
            solution: C`
library(shiny)
`
        }
    ],
    quiz: [
        { question: '¿Qué es Shiny?', options: ['Un paquete de R para crear aplicaciones web interactivas', 'Un tipo de gráfico', 'Un editor de R Markdown', 'Una base de datos'], correct: 0 },
        { question: '¿Cuáles son las dos partes principales de una app Shiny?', options: ['ui y server', 'input y print', 'html y css', 'data y plot'], correct: 0 },
        { question: '¿Cómo se lee el valor de un control con id "peso" dentro de server?', options: ['input$peso', 'output$peso', 'ui$peso', 'peso()'], correct: 0 },
        { question: '¿Qué pareja se usa para mostrar un gráfico?', options: ['plotOutput() en ui y renderPlot() en server', 'textOutput() y renderPlot()', 'plot() y print()', 'tableOutput() y renderText()'], correct: 0 },
        { question: '¿Qué control permite elegir un valor de una lista?', options: ['selectInput()', 'sliderInput()', 'textOutput()', 'fileInput()'], correct: 0 },
        { question: '¿Para qué sirve reactive()?', options: ['Para guardar un cálculo que se actualiza cuando cambian sus entradas', 'Para reiniciar la app', 'Para publicar la app', 'Para leer un CSV'], correct: 0 },
        { question: '¿Qué función une la interfaz y el servidor y lanza la app?', options: ['shinyApp(ui, server)', 'runApp(server)', 'library(shiny)', 'render(app)'], correct: 0 },
        { question: '¿Qué servicio permite ejecutar apps de Shiny en el navegador sin servidor?', options: ['Shinylive', 'CRAN', 'Bioconductor', 'tinytex'], correct: 0 },
        { question: '¿Dónde se publica gratis (con límites) una app de Shiny?', options: ['shinyapps.io', 'cran.r-project.org', 'bioconductor.org', 'quarto.org'], correct: 0 },
        { question: '¿Por qué conviene escribir la lógica de la app en funciones aparte?', options: ['Para probarlas y depurarlas antes de ponerlas en la app', 'Porque Shiny no permite cálculos', 'Para que la app sea más lenta', 'Porque server no acepta código'], correct: 0 }
    ]
};

modules.cloud = {
    title: '16. R en la nube y con IA',
    description: 'Colab, Posit Cloud y asistentes de IA',
    video: YT('eY_JU5srGk0'),
    additionalVideos: [
        { title: 'Utiliza R sin instalar nada: R en Google Colab', url: YT('62YJnndhysg') },
        { title: '¡Programa en R sin instalar nada! Posit Cloud', url: YT('MH8gr8sBJvM') },
        { title: 'Programar en R con ChatGPT, Claude o DeepSeek', url: YT('cH8QM_q3B1Y') },
        { title: 'Mejora en R con IA (ChatGPT para R)', url: YT('CIAbHnsfj4A') }
    ],
    content: `
        <h2>R en cualquier lugar y con ayuda de la IA</h2>
        <p>Hoy puedes programar en R desde un computador del laboratorio, desde casa o desde una tableta, y apoyarte en asistentes de inteligencia artificial. Este módulo te muestra cómo hacerlo <b>bien</b>: aprovechando las herramientas sin dejar de entender tu código.</p>
        <div class="indice">
            <a class="etiqueta" href="#u1">Google Colab</a><a class="etiqueta" href="#u2">Posit Cloud</a><a class="etiqueta" href="#u3">WebR</a>
            <a class="etiqueta" href="#u4">IA</a><a class="etiqueta" href="#u5">Buenas prácticas</a><a class="etiqueta" href="#u6">Reproducibilidad</a>
        </div>

        <h3 id="u1"><span class="n">1</span>Google Colab con R</h3>
        <ol>
            <li>Abre <a href="https://colab.research.google.com/#create=true&language=r" target="_blank" rel="noopener">este enlace</a>: crea un cuaderno nuevo con R.</li>
            <li>Si abriste un cuaderno de Python, ve a <b>Entorno de ejecución → Cambiar tipo de entorno de ejecución → R</b>.</li>
            <li>Escribe código en una celda y ejecútala con <kbd>Ctrl</kbd> + <kbd>Enter</kbd> (o <kbd>Shift</kbd> + <kbd>Enter</kbd> para pasar a la siguiente).</li>
            <li>Sube tus datos con el ícono de carpeta del panel izquierdo y léelos con <code>read.csv("/content/archivo.csv")</code>.</li>
        </ol>
        ${RS`
install.packages("readxl")          # en Colab hay que instalar en cada sesión
datos <- read.csv("/content/pacientes.csv")
summary(datos)
`}
        <div class="nota bio"><b>Videos del canal del profe:</b> convertir Excel a CSV, cargar datos y trabajar en grupo en Colab, en <a href="#/videos">Aprendo con videos</a>.</div>

        <h3 id="u2"><span class="n">2</span>Posit Cloud: RStudio en el navegador</h3>
        <ul>
            <li>Crea una cuenta gratuita en <a href="https://posit.cloud/" target="_blank" rel="noopener">posit.cloud</a> (con tu correo o tu cuenta de Google).</li>
            <li><b>New Project → New RStudio Project</b>: tendrás RStudio completo, con consola, editor y paneles.</li>
            <li>El plan gratuito tiene horas de uso limitadas al mes: cierra el proyecto cuando termines.</li>
            <li>Tu profesor puede compartirte un <b>espacio de trabajo</b> con los datos y scripts del curso ya cargados.</li>
        </ul>

        <h3 id="u3"><span class="n">3</span>WebR: R dentro del navegador</h3>
        <p>Esta academia usa <a href="https://webr.r-wasm.org/" target="_blank" rel="noopener">WebR</a>, una versión de R compilada a WebAssembly. No hay servidor: tu código se ejecuta en tu propio equipo, por eso funciona incluso con poca conexión una vez cargado. Sus límites: algunos paquetes no están disponibles y no se pueden abrir ventanas de RStudio como <code>View()</code>.</p>

        <h3 id="u4"><span class="n">4</span>Asistentes de IA para programar en R</h3>
        <div class="mini-tarjetas">
            <div><b><i class="fas fa-comments"></i>Chat (ChatGPT, Claude, Gemini, DeepSeek)</b>Explican errores, proponen código y te ayudan a entender funciones.</div>
            <div><b><i class="fas fa-wand-magic-sparkles"></i>Copilot en RStudio</b><i>Tools → Global Options → Copilot</i>: sugiere código mientras escribes.</div>
            <div><b><i class="fas fa-book"></i>Documentación</b>La ayuda de R (<code>?funcion</code>) sigue siendo la fuente oficial.</div>
        </div>
        <h4>Cómo pedirle ayuda a una IA</h4>
        <ul>
            <li>Describe tus datos (nombres y tipos de columnas) <b>sin pegar datos personales</b> de pacientes.</li>
            <li>Di qué quieres obtener y qué paquete prefieres: «Con dplyr, calcula la media de peso por sexo».</li>
            <li>Si hay un error, copia el mensaje exacto y la línea que lo produce.</li>
            <li>Pide que te <b>explique</b> el código línea por línea, no solo que lo escriba.</li>
        </ul>

        <h3 id="u5"><span class="n">5</span>Revisa siempre lo que escribe la IA</h3>
        <p>La IA se equivoca con seguridad: inventa funciones, olvida los <code>NA</code> o usa el paquete equivocado. Este código «generado por una IA» tiene tres errores. ¿Los encuentras? Ejecútalo y lee lo que dice el Profe R:</p>
        ${R`
# Código sugerido por una IA (con errores)
pacientes <- read.csv("pacientes.csv")
fumadores <- pacientes[pacientes$fumador = "Sí", ]
cat("Edad media de los fumadores:", mean(fumadores$edad), "\n")
`}
        <div class="nota atencion"><b>Errores:</b> 1) para comparar se usa <code>==</code>, no <code>=</code>; 2) la columna <code>edad</code> tiene datos faltantes, falta <code>na.rm = TRUE</code>; 3) nadie revisó si el valor <code>"Sí"</code> tiene tilde en los datos (<code>unique(pacientes$fumador)</code>). Corrígelos en el reto 2.</div>
        <div class="nota consejo"><b>Integridad académica:</b> si usas IA en un trabajo, dilo y explica qué parte hizo. Lo que entregas debes poder explicarlo tú.</div>

        <h3 id="u6"><span class="n">6</span>Que tu análisis se pueda repetir</h3>
        ${R`
set.seed(2026)                  # misma semilla → mismos números aleatorios en cualquier computador
muestra <- sample(1:100, 5)
muestra
R.version.string                # versión de R usada (inclúyela en tus informes)
`}
        ${RS`
sessionInfo()                   # versiones de R y de todos los paquetes cargados
install.packages("renv")
renv::init()                    # guarda las versiones exactas de los paquetes del proyecto
`}
        <p>Para trabajar en equipo y guardar el historial de cambios, RStudio se conecta con <b>Git</b> y <b>GitHub</b> (<i>File → New Project → Version Control</i>).</p>
    `,
    colabContent: `
        <h2>Tu primer cuaderno de R en Google Colab</h2>
        <ol>
            <li>Abre <a href="https://colab.research.google.com/#create=true&language=r" target="_blank" rel="noopener">colab.research.google.com/#create=true&amp;language=r</a> con tu cuenta de Google.</li>
            <li>En la primera celda escribe <code>R.version.string</code> y ejecútala.</li>
            <li>Sube <code>crecimiento.csv</code> (panel de archivos) y en otra celda dibuja las curvas de crecimiento del módulo 9.</li>
            <li>Comparte el cuaderno con tu profesor (botón <b>Compartir</b>).</li>
        </ol>
        ${RS`
crec <- read.csv("/content/crecimiento.csv")
library(ggplot2)
ggplot(crec, aes(hora, do600, color = cepa)) + geom_line()
`}
    `,
    exercises: [
        {
            title: 'Simulación reproducible',
            description: 'Con set.seed(2026) simula 30 presiones sistólicas con rnorm(30, mean = 120, sd = 15). Muestra la media y la desviación estándar de la muestra con 2 decimales.',
            template: C`
set.seed(2026)
`,
            solution: C`
set.seed(2026)
presion <- rnorm(30, mean = 120, sd = 15)
cat("Media:", round(mean(presion), 2), "\n")
cat("DE:", round(sd(presion), 2), "\n")
`
        },
        {
            title: 'Corrige el código de la IA',
            description: 'El código de la plantilla lo escribió una IA y tiene errores. Corrígelo para que muestre cuántos fumadores hay y su edad media (1 decimal, ignorando los NA).',
            template: C`
pacientes <- read.csv("pacientes.csv")
fumadores <- pacientes[pacientes$fumador = "Si", ]
cat("Fumadores:", nrow(fumadores), "\n")
cat("Edad media:", mean(fumadores$edad), "\n")
`,
            solution: C`
pacientes <- read.csv("pacientes.csv")
fumadores <- pacientes[pacientes$fumador == "Sí", ]
cat("Fumadores:", nrow(fumadores), "\n")
cat("Edad media:", round(mean(fumadores$edad, na.rm = TRUE), 1), "\n")
`,
            pista: 'Revisa el operador de comparación, cómo está escrito el valor en los datos (<code>unique(pacientes$fumador)</code>) y los NA de la edad.'
        },
        {
            title: 'R en Google Colab',
            description: 'Crea un cuaderno de R en Google Colab, sube crecimiento.csv y grafica las curvas de crecimiento. Este reto se marca a mano.',
            manual: true,
            template: C`
crec <- read.csv("/content/crecimiento.csv")
`,
            solution: C`
crec <- read.csv("/content/crecimiento.csv")
`
        }
    ],
    quiz: [
        { question: '¿Cómo se usa R en Google Colab?', options: ['Cambiando el tipo de entorno de ejecución a R', 'Instalando RStudio en Colab', 'No es posible', 'Escribiendo %R en cada línea de Python siempre'], correct: 0 },
        { question: '¿Qué es Posit Cloud?', options: ['RStudio en el navegador, sin instalar nada', 'Un paquete de gráficos', 'Un repositorio de paquetes', 'Un antivirus'], correct: 0 },
        { question: '¿Qué tecnología permite ejecutar R dentro de esta academia?', options: ['WebR (R compilado a WebAssembly)', 'Un servidor de la universidad', 'Python', 'Microsoft Excel'], correct: 0 },
        { question: '¿Qué NO debes pegar en un chat de IA?', options: ['Datos personales o confidenciales de pacientes', 'El mensaje de error', 'Los nombres de las columnas', 'La pregunta que quieres resolver'], correct: 0 },
        { question: 'La IA sugiere una función que no existe. ¿Qué haces?', options: ['Verifico en la ayuda de R y pruebo el código antes de usarlo', 'La uso igual porque la IA no se equivoca', 'Desinstalo R', 'Cambio de lenguaje'], correct: 0 },
        { question: '¿Para qué sirve set.seed()?', options: ['Para que la simulación dé los mismos números en cualquier computador', 'Para instalar paquetes', 'Para guardar el script', 'Para conectar con Colab'], correct: 0 },
        { question: '¿Qué función muestra las versiones de R y de los paquetes cargados?', options: ['sessionInfo()', 'R.home()', 'library()', 'Sys.time()'], correct: 0 },
        { question: '¿Qué paquete guarda las versiones exactas de los paquetes de un proyecto?', options: ['renv', 'ggplot2', 'readxl', 'knitr'], correct: 0 },
        { question: 'En Colab, ¿en qué carpeta quedan los archivos que subes?', options: ['/content', '/home/web_user', 'C:/Users', '/datos'], correct: 0 },
        { question: 'Si usas IA en un trabajo del curso, lo correcto es…', options: ['Declararlo y poder explicar el código que entregas', 'Ocultarlo', 'Entregar sin revisar', 'Pedirle a la IA que firme el trabajo'], correct: 0 }
    ]
};
