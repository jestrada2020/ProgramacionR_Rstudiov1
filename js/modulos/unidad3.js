/**
 * Academia Bio-R · Unidad 3 · Programar y graficar
 * Módulos: programming, packages, graphics
 */

modules.programming = {
    title: '7. Programación en R',
    description: 'if, for, while y funciones',
    video: YT('b71uk1IiYPo'),
    additionalVideos: [
        { title: 'Bucles (loops) en R: for, while y repeat', url: YT('8Nq6kkFOv8I') },
        { title: 'Creando funciones en R', url: YT('D8q2Q69fT8Y') },
        { title: 'Funciones lapply y sapply', url: YT('ZpNUR8DXtpw') }
    ],
    content: `
        <h2>Decisiones, repeticiones y funciones</h2>
        <p>Programar es decirle a R <b>qué hacer según los datos</b> (condicionales), <b>cuántas veces</b> (bucles) y <b>empaquetar</b> esas instrucciones para reutilizarlas (funciones).</p>
        <div class="indice">
            <a class="etiqueta" href="#p1">if / else</a><a class="etiqueta" href="#p2">ifelse y switch</a><a class="etiqueta" href="#p3">for</a>
            <a class="etiqueta" href="#p4">while y repeat</a><a class="etiqueta" href="#p5">Funciones</a><a class="etiqueta" href="#p6">sapply</a><a class="etiqueta" href="#p7">Simulación</a>
        </div>

        <h3 id="p1"><span class="n">1</span>Condicionales: if, else if, else</h3>
        ${R`
glucosa <- 132   # mg/dL en ayunas
if (glucosa < 100) {
  cat("Normal\n")
} else if (glucosa < 126) {
  cat("Prediabetes\n")
} else {
  cat("Posible diabetes: repetir la prueba\n")
}
`}
        <div class="nota atencion"><b>Cuidado con el else:</b> debe ir en la misma línea que la llave que cierra el <code>if</code>: <code>} else {</code>. Y la condición del <code>if</code> debe ser <b>un solo</b> TRUE o FALSE.</div>

        <h3 id="p2"><span class="n">2</span>ifelse() para vectores y switch() para varias opciones</h3>
        ${R`
temperaturas <- c(36.4, 38.2, 37.0, 39.1)
ifelse(temperaturas >= 38, "fiebre", "normal")    # decide elemento por elemento

base <- "G"
complemento <- switch(base, A = "T", T = "A", G = "C", C = "G")
complemento
`}

        <h3 id="p3"><span class="n">3</span>Bucles for</h3>
        <p>Un <code>for</code> repite un bloque para cada elemento de un vector.</p>
        ${R`
especies <- c("jaguar", "oso de anteojos", "cóndor")
for (e in especies) {
  cat("Especie protegida:", e, "\n")
}

# Guardar resultados: crea primero el vector y llénalo
poblacion <- numeric(6)
poblacion[1] <- 50
for (anio in 2:6) {
  poblacion[anio] <- poblacion[anio - 1] * 1.2   # crece 20 % por año
}
round(poblacion)
`}
        <div class="nota consejo"><b>Antes de escribir un bucle</b>, pregúntate si una operación vectorizada lo resuelve: <code>50 * 1.2^(0:5)</code> da el mismo resultado en una línea.</div>

        <h3 id="p4"><span class="n">4</span>Bucles while y repeat</h3>
        <p><code>while</code> repite <b>mientras</b> la condición sea verdadera; <code>repeat</code> repite hasta encontrar un <code>break</code>. <code>next</code> salta a la siguiente vuelta.</p>
        ${R`
# ¿Cuántas generaciones tarda un cultivo en pasar de 100 a 1 000 000 de bacterias si se duplica?
bacterias <- 100
generaciones <- 0
while (bacterias < 1e6) {
  bacterias <- bacterias * 2
  generaciones <- generaciones + 1
}
cat("Generaciones:", generaciones, "→", bacterias, "bacterias\n")

for (i in 1:10) {
  if (i %% 2 == 0) next   # salta los pares
  cat(i, "")
}
`}

        <h3 id="p5"><span class="n">5</span>Funciones propias</h3>
        <p>Una función recibe datos (argumentos), hace un cálculo y <b>devuelve</b> un resultado. La última expresión es lo que devuelve (o usa <code>return()</code>).</p>
        ${R`
imc <- function(peso, altura) {
  peso / altura^2
}
imc(70, 1.75)

# Argumentos con valor por defecto
dilucion <- function(c_inicial, v_inicial, v_final = 10) {
  c_inicial * v_inicial / v_final      # C1·V1 = C2·V2
}
dilucion(2, 1)            # usa v_final = 10
dilucion(2, 1, v_final = 50)

# Devolver varios resultados en una lista
resumen <- function(x) {
  list(media = mean(x), de = sd(x), n = length(x))
}
resumen(c(4.1, 3.8, 4.5, 4.0))
`}

        <h3 id="p6"><span class="n">6</span>Aplicar una función a muchos datos: sapply()</h3>
        ${R`
contenido_gc <- function(secuencia) {
  bases <- strsplit(secuencia, "")[[1]]
  round(mean(bases %in% c("G", "C")) * 100, 1)
}
secuencias <- c(gen1 = "ATGCGC", gen2 = "ATATAT", gen3 = "GGGCCA")
sapply(secuencias, contenido_gc)      # aplica la función a cada secuencia
lapply(list(a = 1:3, b = 4:6), sum)   # lo mismo pero devuelve una lista
`}

        <h3 id="p7"><span class="n">7</span>Números aleatorios y simulación</h3>
        <p>La simulación permite explorar modelos biológicos. <code>set.seed()</code> fija la semilla para que los resultados se puedan repetir.</p>
        ${R`
set.seed(42)
sample(c("A", "T", "G", "C"), 12, replace = TRUE)   # ADN aleatorio
rnorm(5, mean = 37, sd = 0.4)                       # 5 temperaturas normales
runif(3)                                            # uniformes entre 0 y 1

# Modelo logístico discreto: N(t+1) = N(t) + r N(t) (1 - N(t)/K)
N <- 10; r <- 0.5; K <- 500
for (t in 1:15) N <- N + r * N * (1 - N / K)
round(N)
`}
    `,
    exercises: [
        {
            title: 'Clasificar soluciones por pH',
            description: 'Recorre el vector ph con un for y cuenta cuántas soluciones son ácidas (pH < 7), neutras (pH igual a 7) y básicas (pH > 7). Muestra los tres conteos.',
            template: C`
ph <- c(3.5, 7.0, 8.2, 6.9, 12.1, 7.0, 5.5)
acidas <- 0
neutras <- 0
basicas <- 0
# for (valor in ph) { if ... }
`,
            solution: C`
ph <- c(3.5, 7.0, 8.2, 6.9, 12.1, 7.0, 5.5)
acidas <- 0
neutras <- 0
basicas <- 0
for (valor in ph) {
  if (valor < 7) {
    acidas <- acidas + 1
  } else if (valor == 7) {
    neutras <- neutras + 1
  } else {
    basicas <- basicas + 1
  }
}
cat("Ácidas:", acidas, "\n")
cat("Neutras:", neutras, "\n")
cat("Básicas:", basicas, "\n")
`
        },
        {
            title: 'Función para el IMC',
            description: 'Escribe la función imc(peso, altura) que devuelva el IMC redondeado a 1 decimal, y la función clasificar(valor) que devuelva "Bajo peso" (< 18.5), "Normal" (< 25), "Sobrepeso" (< 30) u "Obesidad". Muestra el IMC y la clasificación de una persona de 82 kg y 1.70 m.',
            template: C`
imc <- function(peso, altura) {
  # devuelve el IMC redondeado a 1 decimal
}
clasificar <- function(valor) {
  # devuelve la categoría
}
`,
            solution: C`
imc <- function(peso, altura) {
  round(peso / altura^2, 1)
}
clasificar <- function(valor) {
  if (valor < 18.5) {
    "Bajo peso"
  } else if (valor < 25) {
    "Normal"
  } else if (valor < 30) {
    "Sobrepeso"
  } else {
    "Obesidad"
  }
}
valor <- imc(82, 1.70)
cat("IMC:", valor, "-", clasificar(valor), "\n")
`
        },
        {
            title: 'Duplicación bacteriana con while',
            description: 'Un cultivo empieza con 100 bacterias y se duplica cada 20 minutos. Usa un while para calcular cuántos minutos pasan hasta superar 1 000 000 de bacterias y cuántas hay en ese momento.',
            template: C`
bacterias <- 100
minutos <- 0
# while (bacterias <= 1e6) { ... }
`,
            solution: C`
bacterias <- 100
minutos <- 0
while (bacterias <= 1e6) {
  bacterias <- bacterias * 2
  minutos <- minutos + 20
}
cat("Minutos:", minutos, "\n")
cat("Bacterias:", format(bacterias, scientific = FALSE), "\n")
`
        },
        {
            title: 'Longitud de proteínas con sapply()',
            description: 'Escribe la función codones(secuencia) que devuelva cuántos codones (grupos de 3 bases) completos tiene una secuencia (usa nchar() y %/%). Aplícala con sapply() al vector de genes.',
            template: C`
genes <- c(insulina = "ATGGCCCTGTGGATGCGCCTCCTG", globina = "ATGGTGCACCTGACTCCTGAGGAGAAG", corto = "ATGAA")
# codones <- function(secuencia) ...
`,
            solution: C`
genes <- c(insulina = "ATGGCCCTGTGGATGCGCCTCCTG", globina = "ATGGTGCACCTGACTCCTGAGGAGAAG", corto = "ATGAA")
codones <- function(secuencia) {
  nchar(secuencia) %/% 3
}
print(sapply(genes, codones))
`
        }
    ],
    quiz: [
        { question: '¿Qué ocurre si la condición de un if es un vector de varios valores?', options: ['R da un error: la condición debe ser un solo TRUE o FALSE', 'R evalúa todos los valores', 'R usa el último valor', 'R lo convierte en un bucle'], correct: 0 },
        { question: '¿Qué función decide elemento por elemento en un vector?', options: ['ifelse()', 'if', 'switch()', 'while'], correct: 0 },
        { question: '¿Qué imprime este código?', code: 'for (i in 1:3) cat(i * 2, "")', options: ['2 4 6', '1 2 3', '6', '2 2 2'], correct: 0 },
        { question: '¿Qué palabra detiene un bucle por completo?', options: ['break', 'next', 'stop', 'exit'], correct: 0 },
        { question: '¿Qué hace next dentro de un bucle?', options: ['Salta a la siguiente vuelta', 'Termina el bucle', 'Repite la vuelta actual', 'Devuelve un valor'], correct: 0 },
        { question: '¿Qué devuelve una función de R si no usa return()?', options: ['El valor de la última expresión evaluada', 'NULL siempre', 'TRUE', 'Un error'], correct: 0 },
        { question: 'Con f <- function(x, y = 2) x^y, ¿cuánto vale f(3)?', options: ['9', '6', '8', '3'], correct: 0 },
        { question: '¿Para qué sirve set.seed()?', options: ['Para que los números aleatorios se puedan repetir', 'Para sembrar datos faltantes', 'Para ordenar un vector', 'Para crear un factor'], correct: 0 },
        { question: '¿Qué función aplica otra función a cada elemento y simplifica el resultado a un vector?', options: ['sapply()', 'lapply()', 'apply()', 'mapply.list()'], correct: 0 },
        { question: '¿Cuál es la forma correcta de escribir el else?', options: ['} else {', 'en una línea nueva después de la llave }', 'else: sin llaves', 'elif'], correct: 0 }
    ]
};

modules.packages = {
    title: '8. Paquetes y tidyverse',
    description: 'CRAN, tidyverse y dplyr',
    video: YT('Bay9FTIJaiY'),
    additionalVideos: [
        { title: '¿Qué es tidyverse? 8 paquetes de R para ciencia de datos', url: YT('uGg13_qOwhQ') },
        { title: 'Domina dplyr en R: select, mutate, filter, group_by', url: YT('un6uTE_Vw-8') }
    ],
    content: `
        <h2>Paquetes: superpoderes para R</h2>
        <p>Un <b>paquete</b> es un conjunto de funciones, datos y documentación que alguien publicó para resolver un tipo de problema. R trae los básicos (<i>base</i>, <i>stats</i>, <i>graphics</i>…) y puedes instalar miles más.</p>
        <div class="indice">
            <a class="etiqueta" href="#k1">Instalar y cargar</a><a class="etiqueta" href="#k2">tidyverse</a><a class="etiqueta" href="#k3">dplyr</a>
            <a class="etiqueta" href="#k4">Tubería</a><a class="etiqueta" href="#k5">Agrupar</a><a class="etiqueta" href="#k6">tidyr</a>
        </div>

        <h3 id="k1"><span class="n">1</span>Instalar una vez, cargar en cada sesión</h3>
        <div class="tabla-scroll"><table class="tabla">
            <tr><th>Repositorio</th><th>Qué tiene</th><th>Cómo se instala</th></tr>
            <tr><td><b>CRAN</b></td><td>Más de 20 000 paquetes revisados</td><td><code>install.packages("dplyr")</code></td></tr>
            <tr><td><b>Bioconductor</b></td><td>Bioinformática y genómica</td><td><code>BiocManager::install("Biostrings")</code></td></tr>
            <tr><td><b>GitHub</b></td><td>Versiones en desarrollo</td><td><code>remotes::install_github("usuario/paquete")</code></td></tr>
        </table></div>
        ${RS`
install.packages("tidyverse")   # instalar: una sola vez por computador (necesita internet)
library(tidyverse)              # cargar: cada vez que abres R
update.packages()               # actualizar los paquetes instalados
`}
        ${R`
library(dplyr)                       # en la academia, library() instala solo el paquete la primera vez
packageVersion("dplyr")
stats::median(c(5, 1, 9))            # paquete::función usa una función sin cargar el paquete
`}
        <div class="nota info"><b>En esta academia</b> los paquetes se descargan del repositorio de WebR la primera vez que escribes <code>library()</code> (tarda unos segundos). Los de Bioconductor y algunos con programas externos no están disponibles en el navegador.</div>

        <h3 id="k2"><span class="n">2</span>El tidyverse</h3>
        <p>Es una familia de paquetes que comparten filosofía: <b>datos ordenados</b> (cada variable una columna, cada observación una fila) y funciones con nombres de verbos.</p>
        <div class="mini-tarjetas">
            <div><b>ggplot2</b>Gráficos (módulo 9).</div>
            <div><b>dplyr</b>Filtrar, crear columnas, resumir por grupos.</div>
            <div><b>tidyr</b>Cambiar la forma de las tablas.</div>
            <div><b>readr</b>Leer CSV más rápido.</div>
            <div><b>stringr</b>Trabajar con textos.</div>
            <div><b>forcats</b>Trabajar con factores.</div>
        </div>

        <h3 id="k3"><span class="n">3</span>dplyr: los cinco verbos</h3>
        <div class="tabla-scroll"><table class="tabla">
            <tr><th>Verbo</th><th>Qué hace</th><th>Equivalente en R base</th></tr>
            <tr><td><code>filter()</code></td><td>Elige filas que cumplen condiciones</td><td><code>d[d$x &gt; 5, ]</code></td></tr>
            <tr><td><code>select()</code></td><td>Elige columnas</td><td><code>d[, c("a", "b")]</code></td></tr>
            <tr><td><code>mutate()</code></td><td>Crea o modifica columnas</td><td><code>d$nueva &lt;- ...</code></td></tr>
            <tr><td><code>arrange()</code></td><td>Ordena filas</td><td><code>d[order(d$x), ]</code></td></tr>
            <tr><td><code>summarise()</code></td><td>Resume en una fila (media, conteo…)</td><td><code>mean(d$x)</code></td></tr>
        </table></div>
        ${R`
library(dplyr)
plantas <- read.csv("plantas.csv")
setosas <- filter(plantas, especie == "setosa", largo_petalo > 1.5)
nrow(setosas)
head(select(plantas, especie, largo_petalo))
plantas <- mutate(plantas, area_petalo = largo_petalo * ancho_petalo)
head(arrange(plantas, desc(area_petalo)), 3)
summarise(plantas, media = mean(largo_petalo), maximo = max(largo_petalo))
`}

        <h3 id="k4"><span class="n">4</span>La tubería: encadenar pasos</h3>
        <p>La tubería <code>%&gt;%</code> (o la nativa <code>|&gt;</code>) pasa el resultado de un paso como primer argumento del siguiente. Se lee «y luego». Atajo en RStudio: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>.</p>
        ${R`
library(dplyr)
pacientes <- read.csv("pacientes.csv")
pacientes %>%
  filter(!is.na(edad)) %>%
  mutate(imc = round(peso_kg / altura_m^2, 1)) %>%
  select(id, edad, imc, fumador) %>%
  arrange(desc(imc)) %>%
  head(5)
`}

        <h3 id="k5"><span class="n">5</span>Resumir por grupos</h3>
        ${R`
library(dplyr)
pacientes <- read.csv("pacientes.csv")
pacientes %>%
  group_by(fumador) %>%
  summarise(n = n(),
            edad_media = round(mean(edad, na.rm = TRUE), 1),
            pas_media = round(mean(presion_sistolica, na.rm = TRUE), 1))
count(pacientes, sexo, fumador)     # conteos por combinación
`}

        <h3 id="k6"><span class="n">6</span>tidyr: tablas anchas y largas</h3>
        <p>Muchos gráficos y modelos necesitan la forma <b>larga</b> (una fila por medición). <code>pivot_longer()</code> la crea y <code>pivot_wider()</code> la deshace.</p>
        ${R`
library(tidyr)
genes <- read.csv("genes.csv")
largo <- pivot_longer(genes[1:3, c("gen", "expr_control", "expr_tratamiento")],
                      cols = c(expr_control, expr_tratamiento),
                      names_to = "condicion", values_to = "expresion")
largo
pivot_wider(largo, names_from = condicion, values_from = expresion)
`}
    `,
    colabContent: `
        <h2>Instalar paquetes en RStudio</h2>
        <ol>
            <li>Con código: <code>install.packages("dplyr")</code> en la consola.</li>
            <li>Con el menú: panel <b>Packages → Install</b>, escribe el nombre y pulsa <b>Install</b>.</li>
            <li>Cárgalo en tu script con <code>library(dplyr)</code> (al inicio del archivo).</li>
        </ol>
        ${RS`
install.packages(c("tidyverse", "readxl", "writexl"))
library(tidyverse)
tidyverse_packages()     # lista de paquetes del tidyverse
`}
        <div class="nota atencion"><b>No pongas install.packages() dentro de tus scripts</b> de análisis: se reinstalaría cada vez. Instálalo una vez desde la consola.</div>
    `,
    exercises: [
        {
            title: 'Filtrar y seleccionar con dplyr',
            description: 'Lee plantas.csv y, con dplyr, filtra las flores virginica con ancho de pétalo mayor que 2. Muestra cuántas son y su largo de pétalo promedio redondeado a 2 decimales.',
            template: C`
library(dplyr)
plantas <- read.csv("plantas.csv")
# filter(), nrow(), mean()
`,
            solution: C`
library(dplyr)
plantas <- read.csv("plantas.csv")
virginicas <- filter(plantas, especie == "virginica", ancho_petalo > 2)
cat("Flores:", nrow(virginicas), "\n")
cat("Largo de pétalo promedio:", round(mean(virginicas$largo_petalo), 2), "\n")
`
        },
        {
            title: 'Nota final por programa',
            description: 'Lee estudiantes.csv. Con mutate() crea final = promedio de nota1, nota2 y nota3. Luego agrupa por programa y calcula el promedio de final (2 decimales), ordenado de mayor a menor. Muestra el resultado como data.frame.',
            template: C`
library(dplyr)
estudiantes <- read.csv("estudiantes.csv")
# mutate, group_by, summarise, arrange(desc(...))
`,
            solution: C`
library(dplyr)
estudiantes <- read.csv("estudiantes.csv")
resultado <- estudiantes %>%
  mutate(final = (nota1 + nota2 + nota3) / 3) %>%
  group_by(programa) %>%
  summarise(promedio = round(mean(final), 2)) %>%
  arrange(desc(promedio))
print(as.data.frame(resultado))
`
        },
        {
            title: 'Días de lluvia fuerte',
            description: 'Lee clima.csv y cuenta, por ciudad, los días con más de 10 mm de lluvia (filter() y count()). Muestra el resultado como data.frame.',
            template: C`
library(dplyr)
clima <- read.csv("clima.csv")
`,
            solution: C`
library(dplyr)
clima <- read.csv("clima.csv")
lluviosos <- clima %>%
  filter(lluvia_mm > 10) %>%
  count(ciudad)
print(as.data.frame(lluviosos))
`
        },
        {
            title: 'De ancho a largo',
            description: 'Lee genes.csv y convierte las columnas expr_control y expr_tratamiento a formato largo con pivot_longer() (columnas condicion y expresion). Muestra cuántas filas tiene la tabla larga y la expresión media de cada condición.',
            template: C`
library(tidyr)
genes <- read.csv("genes.csv")
`,
            solution: C`
library(tidyr)
genes <- read.csv("genes.csv")
largo <- pivot_longer(genes, cols = c(expr_control, expr_tratamiento),
                      names_to = "condicion", values_to = "expresion")
cat("Filas:", nrow(largo), "\n")
print(round(tapply(largo$expresion, largo$condicion, mean), 2))
`
        }
    ],
    quiz: [
        { question: '¿Con qué frecuencia se ejecuta install.packages() para un paquete?', options: ['Una vez por computador (o al actualizarlo)', 'Cada vez que abres R', 'Antes de cada línea de código', 'Nunca, viene incluido'], correct: 0 },
        { question: '¿Qué función carga un paquete instalado en la sesión?', options: ['library()', 'install.packages()', 'source()', 'load.package()'], correct: 0 },
        { question: '¿Qué significa dplyr::filter?', options: ['Usar la función filter del paquete dplyr', 'Filtrar el paquete dplyr', 'Instalar dplyr', 'Dividir dplyr entre filter'], correct: 0 },
        { question: '¿Qué verbo de dplyr crea columnas nuevas?', options: ['mutate()', 'select()', 'filter()', 'arrange()'], correct: 0 },
        { question: '¿Qué verbo de dplyr elige filas según una condición?', options: ['filter()', 'select()', 'summarise()', 'mutate()'], correct: 0 },
        { question: '¿Qué hace la tubería %>%?', options: ['Pasa el resultado de un paso al siguiente', 'Calcula un porcentaje', 'Compara dos tablas', 'Comenta el código'], correct: 0 },
        { question: '¿Qué combinación calcula la media por grupo?', options: ['group_by() + summarise()', 'filter() + select()', 'arrange() + mutate()', 'count() + filter()'], correct: 0 },
        { question: '¿Cómo se ordena de mayor a menor con arrange()?', options: ['arrange(desc(x))', 'arrange(x, -1)', 'arrange(reverse = x)', 'arrange(x > 0)'], correct: 0 },
        { question: '¿Qué función de tidyr pasa de formato ancho a largo?', options: ['pivot_longer()', 'pivot_wider()', 'gather_wide()', 'melt.long()'], correct: 0 },
        { question: '¿De qué repositorio se instalan los paquetes de genómica como Biostrings?', options: ['Bioconductor', 'CRAN', 'PyPI', 'Posit Cloud'], correct: 0 }
    ]
};

modules.graphics = {
    title: '9. Gráficos en R',
    description: 'Gráficos base y ggplot2',
    video: YT('bYxjgO2dkXI'),
    additionalVideos: [
        { title: 'Cómo hacer histogramas en R (base y ggplot2)', url: YT('UhFL6rSjR_c') },
        { title: 'Aprende ggplot2 en R', url: YT('BUzTAr_QqKs') },
        { title: 'ggplot2 desde cero: datos y componentes', url: YT('O8p4pMb-ezc') },
        { title: 'Creación de la gráfica boxplot en R', url: YT('5DUhUxs5JE0') }
    ],
    content: `
        <h2>Visualizar datos: gráficos base y ggplot2</h2>
        <p>Un buen gráfico muestra en segundos lo que una tabla esconde. R tiene dos sistemas: los <b>gráficos base</b> (rápidos, con funciones como <code>plot()</code>) y <b>ggplot2</b> (por capas, ideal para publicar).</p>
        <div class="indice">
            <a class="etiqueta" href="#g1">¿Qué gráfico?</a><a class="etiqueta" href="#g2">plot()</a><a class="etiqueta" href="#g3">hist y boxplot</a>
            <a class="etiqueta" href="#g4">barplot</a><a class="etiqueta" href="#g5">ggplot2</a><a class="etiqueta" href="#g6">Capas y facetas</a><a class="etiqueta" href="#g7">Buenas prácticas</a>
        </div>

        <h3 id="g1"><span class="n">1</span>Elige el gráfico según la pregunta</h3>
        <div class="tabla-scroll"><table class="tabla">
            <tr><th>Pregunta</th><th>Gráfico</th><th>R base</th><th>ggplot2</th></tr>
            <tr><td>¿Cómo se distribuye una variable?</td><td>Histograma</td><td><code>hist()</code></td><td><code>geom_histogram()</code></td></tr>
            <tr><td>¿Difieren los grupos?</td><td>Diagrama de caja</td><td><code>boxplot()</code></td><td><code>geom_boxplot()</code></td></tr>
            <tr><td>¿Se relacionan dos variables?</td><td>Dispersión</td><td><code>plot(x, y)</code></td><td><code>geom_point()</code></td></tr>
            <tr><td>¿Cómo cambia en el tiempo?</td><td>Líneas</td><td><code>plot(type = "l")</code></td><td><code>geom_line()</code></td></tr>
            <tr><td>¿Cuántos hay por categoría?</td><td>Barras</td><td><code>barplot()</code></td><td><code>geom_bar()</code> / <code>geom_col()</code></td></tr>
        </table></div>

        <h3 id="g2"><span class="n">2</span>plot(): dispersión y líneas</h3>
        ${R`
crec <- read.csv("crecimiento.csv")
ecoli <- crec[crec$cepa == "E_coli", ]
bsub <- crec[crec$cepa == "B_subtilis", ]
plot(ecoli$hora, ecoli$do600, type = "b", pch = 19, col = "#276dc3", lwd = 2,
     ylim = c(0, 2), main = "Curvas de crecimiento bacteriano",
     xlab = "Tiempo (h)", ylab = "Densidad óptica (DO600)")
lines(bsub$hora, bsub$do600, type = "b", pch = 17, col = "#ef4444", lwd = 2)
legend("topleft", legend = c("E. coli", "B. subtilis"), col = c("#276dc3", "#ef4444"), pch = c(19, 17), bty = "n")
abline(h = 1, lty = 2, col = "gray50")    # línea horizontal de referencia
`}
        <p>Argumentos más usados: <code>main</code> (título), <code>xlab</code>/<code>ylab</code> (ejes), <code>col</code> (color), <code>pch</code> (forma del punto), <code>lty</code> (tipo de línea), <code>lwd</code> (grosor), <code>type</code> (<code>"p"</code> puntos, <code>"l"</code> líneas, <code>"b"</code> ambos).</p>

        <h3 id="g3"><span class="n">3</span>Histogramas y diagramas de caja</h3>
        ${R`
pacientes <- read.csv("pacientes.csv")
par(mfrow = c(1, 2))     # dos gráficos lado a lado
hist(pacientes$presion_sistolica, breaks = 8, col = "#75aadb", border = "white",
     main = "Presión sistólica", xlab = "mmHg")
boxplot(peso_kg ~ sexo, data = pacientes, col = c("#f9a8d4", "#93c5fd"),
        main = "Peso por sexo", ylab = "kg")
par(mfrow = c(1, 1))
`}
        <div class="nota bio"><b>Interpreta el diagrama de caja:</b> la línea gruesa es la mediana, la caja va del primer al tercer cuartil y los puntos sueltos son posibles datos atípicos. El canal del profe tiene dos videos sobre boxplots en <a href="#/videos">Aprendo con videos</a>.</div>

        <h3 id="g4"><span class="n">4</span>Barras para categorías</h3>
        ${R`
estudiantes <- read.csv("estudiantes.csv")
conteo <- sort(table(estudiantes$programa), decreasing = TRUE)
barplot(conteo, col = "#10b981", main = "Estudiantes por programa", ylab = "Cantidad", las = 2, cex.names = 0.8)
`}

        <h3 id="g5"><span class="n">5</span>ggplot2: la gramática de los gráficos</h3>
        <p>Un gráfico de ggplot2 se arma por <b>capas</b> sumadas con <code>+</code>: los <b>datos</b>, la <b>estética</b> <code>aes()</code> (qué variable va en x, y, color…) y la <b>geometría</b> <code>geom_*()</code> (puntos, barras, cajas…).</p>
        ${R`
library(ggplot2)
plantas <- read.csv("plantas.csv")
ggplot(plantas, aes(x = largo_petalo, y = ancho_petalo, color = especie)) +
  geom_point(size = 3, alpha = 0.8) +
  labs(title = "Pétalos de tres especies de iris",
       x = "Largo del pétalo (cm)", y = "Ancho del pétalo (cm)", color = "Especie") +
  theme_minimal()
`}
        ${R`
library(ggplot2)
fert <- read.csv("fertilizante.csv")
ggplot(fert, aes(x = fertilizante, y = altura_cm, fill = fertilizante)) +
  geom_boxplot(alpha = 0.6, show.legend = FALSE) +
  geom_jitter(width = 0.1, size = 2, show.legend = FALSE) +
  labs(title = "Altura de las plantas según el fertilizante", x = NULL, y = "Altura (cm)") +
  theme_classic()
`}

        <h3 id="g6"><span class="n">6</span>Más capas: líneas, histogramas y facetas</h3>
        ${R`
library(ggplot2)
crec <- read.csv("crecimiento.csv")
ggplot(crec, aes(hora, do600, color = cepa)) +
  geom_line(linewidth = 1.2) +
  geom_point(size = 2) +
  labs(title = "Crecimiento bacteriano", x = "Hora", y = "DO600") +
  theme_light()
`}
        ${R`
library(ggplot2)
clima <- read.csv("clima.csv")
ggplot(clima, aes(temp_max)) +
  geom_histogram(bins = 12, fill = "#f59e0b", color = "white") +
  facet_wrap(~ ciudad) +                 # un panel por ciudad
  labs(title = "Temperatura máxima diaria", x = "°C", y = "Días")
`}
        ${RS`
ggsave("crecimiento.png", width = 8, height = 5, dpi = 300)   # guarda el último gráfico (en RStudio)
`}

        <h3 id="g7"><span class="n">7</span>Buenas prácticas</h3>
        <ul>
            <li>Título claro y ejes <b>con unidades</b> (cm, mg/dL, horas).</li>
            <li>Un mensaje por gráfico. Si necesitas comparar muchos grupos, usa facetas.</li>
            <li>Evita los gráficos de torta y el 3D: deforman las proporciones.</li>
            <li>Usa colores distinguibles también para personas daltónicas (por ejemplo <code>scale_color_viridis_d()</code>).</li>
        </ul>
    `,
    exercises: [
        {
            title: 'Histograma de edades',
            description: 'Lee pacientes.csv y dibuja un histograma de la edad con título «Edad de los pacientes», eje x «Años» y el color que prefieras.',
            template: C`
pacientes <- read.csv("pacientes.csv")
# hist(...)
`,
            solution: C`
pacientes <- read.csv("pacientes.csv")
hist(pacientes$edad, col = "#75aadb", border = "white",
     main = "Edad de los pacientes", xlab = "Años")
`
        },
        {
            title: 'Diagrama de caja por tratamiento',
            description: 'Lee fertilizante.csv y dibuja un boxplot de altura_cm según fertilizante (usa la fórmula altura_cm ~ fertilizante). Además muestra la mediana de cada grupo con tapply().',
            template: C`
fert <- read.csv("fertilizante.csv")
`,
            solution: C`
fert <- read.csv("fertilizante.csv")
boxplot(altura_cm ~ fertilizante, data = fert, col = c("gray80", "#86efac", "#93c5fd"),
        main = "Altura según el fertilizante", ylab = "Altura (cm)")
print(tapply(fert$altura_cm, fert$fertilizante, median))
`
        },
        {
            title: 'Curvas de crecimiento con ggplot2',
            description: 'Lee crecimiento.csv y haz con ggplot2 un gráfico de líneas de do600 contra hora, con un color por cepa y título.',
            template: C`
library(ggplot2)
crec <- read.csv("crecimiento.csv")
# ggplot(crec, aes(...)) + geom_line()
`,
            solution: C`
library(ggplot2)
crec <- read.csv("crecimiento.csv")
ggplot(crec, aes(hora, do600, color = cepa)) +
  geom_line(linewidth = 1.2) +
  labs(title = "Crecimiento bacteriano", x = "Hora", y = "DO600")
`
        },
        {
            title: 'Dispersión con línea de tendencia',
            description: 'Con pacientes.csv dibuja peso_kg (eje y) contra altura_m (eje x) y agrega la recta de regresión con abline(lm(...)). Muestra también la correlación entre ambas variables redondeada a 2 decimales.',
            template: C`
pacientes <- read.csv("pacientes.csv")
# plot(), abline(lm(peso_kg ~ altura_m, data = pacientes)), cor()
`,
            solution: C`
pacientes <- read.csv("pacientes.csv")
plot(peso_kg ~ altura_m, data = pacientes, pch = 19, col = "gray40",
     main = "Peso y altura", xlab = "Altura (m)", ylab = "Peso (kg)")
abline(lm(peso_kg ~ altura_m, data = pacientes), col = "red", lwd = 2)
cat("Correlación:", round(cor(pacientes$altura_m, pacientes$peso_kg), 2), "\n")
`
        }
    ],
    quiz: [
        { question: '¿Qué gráfico muestra mejor la distribución de una sola variable numérica?', options: ['Un histograma', 'Un gráfico de torta', 'Un gráfico de barras de categorías', 'Una tabla'], correct: 0 },
        { question: '¿Qué argumento de plot() cambia el título?', options: ['main', 'title', 'head', 'label'], correct: 0 },
        { question: 'En plot(), ¿qué hace type = "l"?', options: ['Dibuja líneas', 'Dibuja puntos', 'Usa escala logarítmica', 'Dibuja una leyenda'], correct: 0 },
        { question: '¿Qué representa la línea gruesa dentro de la caja de un boxplot?', options: ['La mediana', 'La media', 'El máximo', 'La desviación estándar'], correct: 0 },
        { question: '¿Qué hace par(mfrow = c(1, 2))?', options: ['Pone dos gráficos lado a lado', 'Duplica el tamaño del gráfico', 'Cambia los colores', 'Une dos data frames'], correct: 0 },
        { question: 'En ggplot2, ¿qué se define dentro de aes()?', options: ['Qué variables van en x, y, color, etc.', 'El título del gráfico', 'El tipo de archivo', 'El tamaño de la ventana'], correct: 0 },
        { question: '¿Con qué símbolo se suman las capas de ggplot2?', options: ['+', '%>%', '&', ','], correct: 0 },
        { question: '¿Qué geometría de ggplot2 dibuja un diagrama de dispersión?', options: ['geom_point()', 'geom_bar()', 'geom_histogram()', 'geom_scatter()'], correct: 0 },
        { question: '¿Qué hace facet_wrap(~ ciudad)?', options: ['Crea un panel por cada ciudad', 'Ordena las ciudades', 'Colorea por ciudad', 'Filtra una ciudad'], correct: 0 },
        { question: '¿Qué función agrega una recta a un gráfico base?', options: ['abline()', 'geom_line()', 'legend()', 'hist()'], correct: 0 }
    ]
};
