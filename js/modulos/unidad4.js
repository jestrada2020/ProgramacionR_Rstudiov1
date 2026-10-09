/**
 * Academia Bio-R · Unidad 4 · Estadística con R
 * Módulos: statistics, analysis, regression
 */

modules.statistics = {
    title: '10. Estadística descriptiva',
    description: 'Tendencia, dispersión y frecuencias',
    video: YT('4ZGI9iCbMHE'),
    additionalVideos: [
        { title: 'Estadísticas descriptivas en R', url: YT('ThVrrjqPaEY') },
        { title: 'Creación de la gráfica boxplot en R', url: YT('5DUhUxs5JE0') },
        { title: 'Manejo de NA en RStudio', url: YT('HcIEI9wVuxY') }
    ],
    content: `
        <h2>Describir los datos con números</h2>
        <p>La estadística descriptiva resume un conjunto de datos: <b>dónde se concentran</b> (tendencia central), <b>cuánto varían</b> (dispersión) y <b>cómo se reparten</b> (frecuencias y forma). En R cada medida es una función.</p>
        <div class="nota bio"><b>Del cuaderno a R:</b> en <a href="#/videos">Aprendo con videos</a> el profesor resuelve a mano los ejemplos de los refrescos y la nicotina (datos agrupados, no agrupados y boxplot). Aquí obtienes los mismos resultados con una línea de código.</div>
        <div class="indice">
            <a class="etiqueta" href="#e1">Tipos de variables</a><a class="etiqueta" href="#e2">Tendencia central</a><a class="etiqueta" href="#e3">Dispersión</a>
            <a class="etiqueta" href="#e4">Posición</a><a class="etiqueta" href="#e5">Frecuencias</a><a class="etiqueta" href="#e6">Por grupos</a><a class="etiqueta" href="#e7">Forma</a>
        </div>

        <h3 id="e1"><span class="n">1</span>Tipos de variables</h3>
        <div class="tabla-scroll"><table class="tabla">
            <tr><th>Tipo</th><th>Ejemplo</th><th>En R</th><th>Se resume con</th></tr>
            <tr><td>Cualitativa nominal</td><td>Especie, grupo sanguíneo</td><td><code>factor</code> / <code>character</code></td><td>Frecuencias, moda</td></tr>
            <tr><td>Cualitativa ordinal</td><td>Dolor leve / moderado / severo</td><td><code>factor(ordered = TRUE)</code></td><td>Frecuencias, mediana</td></tr>
            <tr><td>Cuantitativa discreta</td><td>Número de colonias</td><td><code>integer</code></td><td>Media, mediana, desviación</td></tr>
            <tr><td>Cuantitativa continua</td><td>Peso, glucosa, temperatura</td><td><code>numeric</code></td><td>Media, mediana, desviación, cuartiles</td></tr>
        </table></div>

        <h3 id="e2"><span class="n">2</span>Tendencia central: media, mediana y moda</h3>
        ${R`
nicotina <- c(1.1, 1.7, 1.7, 1.1, 1.1, 0.8, 1.7, 1.8, 1.9, 1.2, 1.3, 1.2, 1.4, 1.1, 1.0)   # mg por cigarrillo
mean(nicotina)                         # media
median(nicotina)                       # mediana
frecuencias <- table(nicotina)
names(frecuencias)[which.max(frecuencias)]   # moda (R no trae una función para ella)
mean(c(nicotina, 9), trim = 0.1)       # media recortada: resiste valores extremos
`}
        <div class="nota consejo"><b>¿Media o mediana?</b> Si hay valores extremos (por ejemplo un paciente con 600 mg/dL de glucosa) la media se desplaza y la mediana no. Reporta la mediana cuando los datos son asimétricos.</div>

        <h3 id="e3"><span class="n">3</span>Dispersión: cuánto varían los datos</h3>
        ${R`
nicotina <- c(1.1, 1.7, 1.7, 1.1, 1.1, 0.8, 1.7, 1.8, 1.9, 1.2, 1.3, 1.2, 1.4, 1.1, 1.0)
range(nicotina)                        # mínimo y máximo
diff(range(nicotina))                  # rango
var(nicotina)                          # varianza (muestral, divide entre n - 1)
sd(nicotina)                           # desviación estándar
IQR(nicotina)                          # rango intercuartílico
cv <- sd(nicotina) / mean(nicotina) * 100
cat("Coeficiente de variación:", round(cv, 1), "%\n")
`}

        <h3 id="e4"><span class="n">4</span>Medidas de posición y resumen de cinco números</h3>
        ${R`
pacientes <- read.csv("pacientes.csv")
p <- pacientes$presion_sistolica
quantile(p, na.rm = TRUE)                       # cuartiles
quantile(p, probs = c(0.10, 0.90), na.rm = TRUE)   # percentiles 10 y 90
summary(p)                                      # mínimo, cuartiles, media, máximo y NA
boxplot(p, horizontal = TRUE, col = "#75aadb", main = "Presión sistólica (mmHg)")
boxplot.stats(p)$out                            # valores atípicos según el boxplot
`}

        <h3 id="e5"><span class="n">5</span>Tablas de frecuencia y datos agrupados</h3>
        ${R`
estudiantes <- read.csv("estudiantes.csv")
f <- table(estudiantes$programa)          # frecuencia absoluta
data.frame(f, relativa = round(prop.table(f), 3), acumulada = cumsum(f))
`}
        <p>Para una variable continua se agrupa en <b>intervalos de clase</b> con <code>cut()</code>:</p>
        ${R`
pacientes <- read.csv("pacientes.csv")
intervalos <- cut(pacientes$edad, breaks = seq(10, 80, by = 10), right = FALSE)
tabla <- table(intervalos)
tabla
round(prop.table(tabla) * 100, 1)          # porcentaje de cada intervalo
hist(pacientes$edad, breaks = seq(10, 80, by = 10), right = FALSE,
     col = "#a78bfa", main = "Edades agrupadas", xlab = "Edad")
`}

        <h3 id="e6"><span class="n">6</span>Resúmenes por grupo</h3>
        ${R`
plantas <- read.csv("plantas.csv")
tapply(plantas$largo_petalo, plantas$especie, mean)
aggregate(cbind(largo_petalo, ancho_petalo) ~ especie, data = plantas, FUN = median)
`}
        ${R`
library(dplyr)
read.csv("pacientes.csv") %>%
  group_by(sexo) %>%
  summarise(n = n(), media = mean(peso_kg), de = sd(peso_kg),
            mediana = median(peso_kg), minimo = min(peso_kg), maximo = max(peso_kg))
`}

        <h3 id="e7"><span class="n">7</span>Forma de la distribución</h3>
        <p>Un histograma y el gráfico cuantil-cuantil (Q-Q) muestran si los datos se parecen a una distribución normal, algo que piden muchas pruebas del módulo 11.</p>
        ${R`
set.seed(10)
normales <- rnorm(200, mean = 50, sd = 8)
sesgados <- rexp(200, rate = 0.1)
par(mfrow = c(1, 2))
qqnorm(normales, main = "Normal: puntos sobre la recta"); qqline(normales, col = "red")
qqnorm(sesgados, main = "Asimétrica: se curvan"); qqline(sesgados, col = "red")
par(mfrow = c(1, 1))
`}
    `,
    exercises: [
        {
            title: 'Media, mediana y moda',
            description: 'Calcula y muestra la media (2 decimales), la mediana y la moda de los mililitros de refresco servidos por una máquina.',
            template: C`
refresco <- c(355, 350, 358, 355, 352, 355, 360, 349, 354, 355, 351, 358)
`,
            solution: C`
refresco <- c(355, 350, 358, 355, 352, 355, 360, 349, 354, 355, 351, 358)
cat("Media:", round(mean(refresco), 2), "\n")
cat("Mediana:", median(refresco), "\n")
f <- table(refresco)
cat("Moda:", names(f)[which.max(f)], "\n")
`
        },
        {
            title: 'Variabilidad de dos lotes',
            description: 'Compara dos lotes de un medicamento: muestra la desviación estándar y el coeficiente de variación (%) de cada uno, con 2 decimales, y cuál es más homogéneo (menor CV).',
            template: C`
lote_a <- c(98.2, 101.5, 99.8, 100.4, 97.9, 102.1, 100.0)
lote_b <- c(95.1, 104.8, 99.0, 106.2, 93.7, 101.4, 100.3)
`,
            solution: C`
lote_a <- c(98.2, 101.5, 99.8, 100.4, 97.9, 102.1, 100.0)
lote_b <- c(95.1, 104.8, 99.0, 106.2, 93.7, 101.4, 100.3)
cv_a <- sd(lote_a) / mean(lote_a) * 100
cv_b <- sd(lote_b) / mean(lote_b) * 100
cat("Lote A: DE =", round(sd(lote_a), 2), " CV =", round(cv_a, 2), "%\n")
cat("Lote B: DE =", round(sd(lote_b), 2), " CV =", round(cv_b, 2), "%\n")
cat("Más homogéneo:", ifelse(cv_a < cv_b, "lote A", "lote B"), "\n")
`
        },
        {
            title: 'Tabla de frecuencias por intervalos',
            description: 'Agrupa la presión sistólica de pacientes.csv en los intervalos [100,120), [120,140), [140,160), [160,180) con cut(..., right = FALSE) y muestra la frecuencia absoluta y el porcentaje (1 decimal) de cada intervalo.',
            template: C`
pacientes <- read.csv("pacientes.csv")
# cut(pacientes$presion_sistolica, breaks = c(100, 120, 140, 160, 180), right = FALSE)
`,
            solution: C`
pacientes <- read.csv("pacientes.csv")
intervalos <- cut(pacientes$presion_sistolica, breaks = c(100, 120, 140, 160, 180), right = FALSE)
f <- table(intervalos)
print(f)
print(round(prop.table(f) * 100, 1))
`
        },
        {
            title: 'Resumen por especie',
            description: 'Con plantas.csv muestra, para cada especie, la media y la desviación estándar del largo del sépalo, redondeadas a 2 decimales.',
            template: C`
plantas <- read.csv("plantas.csv")
# tapply() dos veces, o dplyr
`,
            solution: C`
plantas <- read.csv("plantas.csv")
media <- tapply(plantas$largo_sepalo, plantas$especie, mean)
de <- tapply(plantas$largo_sepalo, plantas$especie, sd)
print(data.frame(media = round(media, 2), de = round(de, 2)))
`
        }
    ],
    quiz: [
        { question: '¿Qué función calcula la mediana?', options: ['median()', 'mean()', 'mode()', 'middle()'], correct: 0 },
        { question: '¿Cómo se obtiene la moda en R base?', options: ['Con table() y which.max()', 'Con mode()', 'Con moda()', 'Con max()'], correct: 0 },
        { question: '¿Qué medida es más resistente a valores extremos?', options: ['La mediana', 'La media', 'El rango', 'La varianza'], correct: 0 },
        { question: '¿Qué mide la desviación estándar?', options: ['Cuánto se alejan en promedio los datos de la media', 'El valor más repetido', 'El dato central', 'La cantidad de datos'], correct: 0 },
        { question: '¿Qué devuelve IQR(x)?', options: ['La diferencia entre el tercer y el primer cuartil', 'El intervalo de confianza', 'El índice de la mediana', 'La varianza'], correct: 0 },
        { question: '¿Para qué sirve el coeficiente de variación?', options: ['Para comparar la variabilidad de conjuntos con medias o unidades distintas', 'Para calcular la moda', 'Para ordenar datos', 'Para contar NA'], correct: 0 },
        { question: '¿Qué función agrupa una variable continua en intervalos?', options: ['cut()', 'split()', 'group()', 'table()'], correct: 0 },
        { question: '¿Qué hace prop.table(table(x))?', options: ['Calcula frecuencias relativas', 'Ordena la tabla', 'Suma la tabla', 'Grafica la tabla'], correct: 0 },
        { question: '¿Qué información NO da summary() de un vector numérico?', options: ['La desviación estándar', 'La mediana', 'La media', 'Los cuartiles'], correct: 0 },
        { question: 'En un gráfico Q-Q de datos normales, ¿cómo se ven los puntos?', options: ['Aproximadamente sobre la recta', 'Formando un círculo', 'Todos en el eje x', 'En forma de U invertida siempre'], correct: 0 }
    ]
};

modules.analysis = {
    title: '11. Pruebas de hipótesis',
    description: 'Pruebas t, chi cuadrado y ANOVA',
    video: YT('_IRO-jhJ-ZU'),
    additionalVideos: [
        { title: 'Prueba de chi cuadrado en RStudio', url: YT('DC7u9zdxRug') },
        { title: 'Cómo hacer e interpretar un ANOVA en R', url: YT('Ly0-UHIwD7o') },
        { title: 'ANOVA, chi cuadrado y t de Student en R', url: YT('Ju2Ju7q5ES0') }
    ],
    content: `
        <h2>¿Es real la diferencia que veo?</h2>
        <p>Las pruebas de hipótesis responden si una diferencia observada (entre grupos, tratamientos o proporciones) es mayor de lo que produciría el azar. Son la base de los artículos científicos en biología y salud.</p>
        <div class="indice">
            <a class="etiqueta" href="#h1">Lógica</a><a class="etiqueta" href="#h2">Normalidad</a><a class="etiqueta" href="#h3">Prueba t</a>
            <a class="etiqueta" href="#h4">Chi cuadrado</a><a class="etiqueta" href="#h5">ANOVA</a><a class="etiqueta" href="#h6">No paramétricas</a><a class="etiqueta" href="#h7">Elegir y reportar</a>
        </div>

        <h3 id="h1"><span class="n">1</span>La lógica de una prueba</h3>
        <ul>
            <li><b>H₀ (hipótesis nula):</b> no hay efecto ni diferencia (por ejemplo, el fertilizante no cambia la altura).</li>
            <li><b>H₁ (alternativa):</b> sí hay diferencia.</li>
            <li><b>Valor p:</b> probabilidad de observar una diferencia como la de los datos (o mayor) si H₀ fuera cierta.</li>
            <li><b>Nivel de significancia α</b> (casi siempre 0.05): si <b>p &lt; α</b>, se rechaza H₀.</li>
        </ul>
        <div class="nota atencion"><b>Cuidado:</b> «no rechazar H₀» no prueba que no haya efecto; puede faltar tamaño de muestra. Y un p pequeño no dice que el efecto sea grande: mira también la diferencia de medias y su intervalo de confianza.</div>

        <h3 id="h2"><span class="n">2</span>¿Los datos son normales?</h3>
        ${R`
fert <- read.csv("fertilizante.csv")
control <- fert$altura_cm[fert$fertilizante == "Control"]
shapiro.test(control)        # H0: los datos vienen de una distribución normal
`}
        <p>Si p &gt; 0.05 no hay evidencia contra la normalidad y se pueden usar pruebas paramétricas (t, ANOVA). Complementa siempre con un histograma o un gráfico Q-Q.</p>

        <h3 id="h3"><span class="n">3</span>Prueba t: comparar medias</h3>
        ${R`
# Una muestra: ¿la temperatura media de estos ratones es distinta de 37 °C?
temperaturas <- c(37.4, 37.9, 37.2, 38.1, 37.6, 37.8, 37.3, 37.7)
t.test(temperaturas, mu = 37)
`}
        ${R`
# Dos muestras independientes (Welch, no supone varianzas iguales)
fert <- read.csv("fertilizante.csv")
control <- fert$altura_cm[fert$fertilizante == "Control"]
organico <- fert$altura_cm[fert$fertilizante == "Organico"]
prueba <- t.test(organico, control)
prueba
round(prueba$p.value, 4)          # se puede extraer cada resultado
round(prueba$conf.int, 2)         # intervalo de confianza de la diferencia
`}
        ${R`
# Muestras pareadas: el mismo gen antes y después del tratamiento
genes <- read.csv("genes.csv")
t.test(log2(genes$expr_tratamiento), log2(genes$expr_control), paired = TRUE)
`}

        <h3 id="h4"><span class="n">4</span>Chi cuadrado: ¿están asociadas dos variables categóricas?</h3>
        ${R`
# ¿La recuperación depende del tratamiento?
tabla <- matrix(c(42, 18,
                  28, 32), nrow = 2, byrow = TRUE,
                dimnames = list(tratamiento = c("vacuna", "placebo"), estado = c("sano", "enfermo")))
tabla
prueba <- chisq.test(tabla)
prueba
prueba$expected        # frecuencias esperadas (deben ser ≥ 5)
`}
        <p>Con frecuencias esperadas pequeñas usa la prueba exacta de Fisher: <code>fisher.test(tabla)</code>.</p>

        <h3 id="h5"><span class="n">5</span>ANOVA: comparar tres o más grupos</h3>
        ${R`
fert <- read.csv("fertilizante.csv")
modelo <- aov(altura_cm ~ fertilizante, data = fert)
summary(modelo)                 # ¿hay diferencias entre algún par de grupos?
TukeyHSD(modelo)                # ¿cuáles grupos difieren? (comparaciones múltiples)
bartlett.test(altura_cm ~ fertilizante, data = fert)   # supuesto: varianzas iguales
`}

        <h3 id="h6"><span class="n">6</span>Pruebas no paramétricas</h3>
        <p>Cuando los datos no son normales o son ordinales, se usan pruebas basadas en rangos:</p>
        ${R`
fert <- read.csv("fertilizante.csv")
wilcox.test(altura_cm ~ fertilizante, data = subset(fert, fertilizante != "Quimico"))   # 2 grupos
kruskal.test(altura_cm ~ fertilizante, data = fert)                                  # 3 o más grupos
`}

        <h3 id="h7"><span class="n">7</span>¿Qué prueba uso? ¿Cómo la reporto?</h3>
        <div class="tabla-scroll"><table class="tabla">
            <tr><th>Pregunta</th><th>Datos normales</th><th>Datos no normales</th></tr>
            <tr><td>Una media contra un valor</td><td><code>t.test(x, mu = )</code></td><td><code>wilcox.test(x, mu = )</code></td></tr>
            <tr><td>Dos grupos independientes</td><td><code>t.test(a, b)</code></td><td><code>wilcox.test(a, b)</code></td></tr>
            <tr><td>Dos mediciones del mismo individuo</td><td><code>t.test(a, b, paired = TRUE)</code></td><td><code>wilcox.test(a, b, paired = TRUE)</code></td></tr>
            <tr><td>Tres o más grupos</td><td><code>aov()</code> + <code>TukeyHSD()</code></td><td><code>kruskal.test()</code></td></tr>
            <tr><td>Dos variables categóricas</td><td colspan="2"><code>chisq.test()</code> (o <code>fisher.test()</code> con pocos datos)</td></tr>
        </table></div>
        <div class="nota consejo"><b>Ejemplo de reporte:</b> «Las plantas con fertilizante orgánico fueron más altas que las del control (23.7 vs. 21.1 cm; t de Welch, p = 0.01).» Incluye las medias, la prueba usada y el valor p.</div>
    `,
    exercises: [
        {
            title: 'Prueba t de una muestra',
            description: 'Un fabricante dice que sus cápsulas tienen 500 mg. Con t.test(), prueba si la media de la muestra es distinta de 500 y muestra el estadístico t y el valor p redondeados a 4 decimales, y la conclusión con α = 0.05.',
            template: C`
capsulas <- c(492, 498, 501, 489, 495, 497, 490, 494, 499, 493)
`,
            solution: C`
capsulas <- c(492, 498, 501, 489, 495, 497, 490, 494, 499, 493)
prueba <- t.test(capsulas, mu = 500)
cat("t =", round(prueba$statistic, 4), "\n")
cat("p =", round(prueba$p.value, 4), "\n")
cat(ifelse(prueba$p.value < 0.05, "Se rechaza H0: la media es distinta de 500 mg", "No se rechaza H0"), "\n")
`
        },
        {
            title: '¿El tratamiento cambia el peso?',
            description: 'Con el data frame PlantGrowth (viene con R), compara el peso del grupo trt2 contra ctrl con una prueba t de Welch. Muestra las dos medias (3 decimales) y el valor p (4 decimales).',
            template: C`
ctrl <- PlantGrowth$weight[PlantGrowth$group == "ctrl"]
trt2 <- PlantGrowth$weight[PlantGrowth$group == "trt2"]
`,
            solution: C`
ctrl <- PlantGrowth$weight[PlantGrowth$group == "ctrl"]
trt2 <- PlantGrowth$weight[PlantGrowth$group == "trt2"]
prueba <- t.test(trt2, ctrl)
cat("Media ctrl:", round(mean(ctrl), 3), "\n")
cat("Media trt2:", round(mean(trt2), 3), "\n")
cat("p =", round(prueba$p.value, 4), "\n")
`
        },
        {
            title: 'Chi cuadrado de independencia',
            description: 'En un estudio, 30 de 50 fumadores y 15 de 60 no fumadores tuvieron bronquitis. Construye la tabla 2×2 y aplica chisq.test(). Muestra el estadístico X² y el valor p con 4 decimales.',
            template: C`
# filas: fumador, no_fumador · columnas: bronquitis, sano
tabla <- matrix(c(30, 20,
                  15, 45), nrow = 2, byrow = TRUE)
`,
            solution: C`
tabla <- matrix(c(30, 20,
                  15, 45), nrow = 2, byrow = TRUE)
prueba <- chisq.test(tabla)
cat("X2 =", round(prueba$statistic, 4), "\n")
cat("p =", round(prueba$p.value, 4), "\n")
`
        },
        {
            title: 'ANOVA y Tukey',
            description: 'Con fertilizante.csv ajusta un ANOVA de altura_cm según fertilizante. Muestra el estadístico F y el valor p (con signif(p, 3)), y luego la tabla de TukeyHSD() redondeada a 3 decimales.',
            template: C`
fert <- read.csv("fertilizante.csv")
modelo <- aov(altura_cm ~ fertilizante, data = fert)
# summary(modelo)[[1]] tiene las columnas "F value" y "Pr(>F)"
`,
            solution: C`
fert <- read.csv("fertilizante.csv")
modelo <- aov(altura_cm ~ fertilizante, data = fert)
tabla <- summary(modelo)[[1]]
cat("F =", round(tabla[["F value"]][1], 2), "\n")
cat("p =", signif(tabla[["Pr(>F)"]][1], 3), "\n")
print(round(TukeyHSD(modelo)$fertilizante, 3))
`
        }
    ],
    quiz: [
        { question: '¿Qué afirma la hipótesis nula (H₀)?', options: ['Que no hay efecto o diferencia', 'Que siempre hay diferencia', 'Que los datos son incorrectos', 'Que la muestra es grande'], correct: 0 },
        { question: 'Con α = 0.05 se obtiene p = 0.003. ¿Qué se concluye?', options: ['Se rechaza H₀', 'No se rechaza H₀', 'Hay que aumentar α', 'La prueba no sirve'], correct: 0 },
        { question: '¿Qué prueba evalúa si los datos siguen una distribución normal?', options: ['shapiro.test()', 'chisq.test()', 't.test()', 'cor.test()'], correct: 0 },
        { question: '¿Qué prueba compara la media de dos grupos independientes con datos normales?', options: ['t.test(a, b)', 'aov()', 'chisq.test()', 'kruskal.test()'], correct: 0 },
        { question: '¿Qué argumento de t.test() se usa para mediciones antes y después en los mismos individuos?', options: ['paired = TRUE', 'mu = 0', 'var.equal = TRUE', 'alternative = "less"'], correct: 0 },
        { question: '¿Qué prueba evalúa la asociación entre dos variables categóricas?', options: ['chisq.test()', 't.test()', 'shapiro.test()', 'lm()'], correct: 0 },
        { question: '¿Qué función compara las medias de tres o más grupos?', options: ['aov()', 't.test()', 'cor()', 'wilcox.test()'], correct: 0 },
        { question: 'Después de un ANOVA significativo, ¿qué función indica qué pares de grupos difieren?', options: ['TukeyHSD()', 'summary()', 'shapiro.test()', 'table()'], correct: 0 },
        { question: '¿Qué prueba no paramétrica reemplaza al ANOVA de una vía?', options: ['kruskal.test()', 'fisher.test()', 'bartlett.test()', 't.test()'], correct: 0 },
        { question: '¿Qué significa un valor p de 0.40?', options: ['Los datos son compatibles con H₀; no hay evidencia de diferencia', 'Hay un 40 % de diferencia entre grupos', 'H₀ es falsa con 40 % de seguridad', 'El efecto es grande'], correct: 0 }
    ]
};

modules.regression = {
    title: '12. Correlación y regresión',
    description: 'Correlación y regresión lineal',
    video: YT('SjwkIIq5KfM'),
    additionalVideos: [
        { title: 'Correlación de Pearson y Spearman en R', url: YT('_uOt4_ArG1Y') },
        { title: 'Regresión lineal simple en RStudio', url: YT('IYkk1L6r7KI') }
    ],
    content: `
        <h2>Relaciones entre variables</h2>
        <p>¿Las personas más altas pesan más? ¿La expresión de un gen sube con la dosis? La <b>correlación</b> mide qué tan fuerte es la relación entre dos variables y la <b>regresión</b> la describe con una ecuación que sirve para predecir.</p>
        <div class="indice">
            <a class="etiqueta" href="#r1">Correlación</a><a class="etiqueta" href="#r2">Prueba</a><a class="etiqueta" href="#r3">Regresión</a>
            <a class="etiqueta" href="#r4">Interpretar</a><a class="etiqueta" href="#r5">Predecir</a><a class="etiqueta" href="#r6">Supuestos</a><a class="etiqueta" href="#r7">Crecimiento</a>
        </div>

        <h3 id="r1"><span class="n">1</span>Coeficiente de correlación</h3>
        <p>Va de −1 a 1: cerca de 1, relación positiva fuerte; cerca de −1, negativa fuerte; cerca de 0, sin relación <b>lineal</b>. <b>Pearson</b> mide relaciones lineales con datos normales; <b>Spearman</b> usa rangos (relaciones monótonas, datos con atípicos).</p>
        ${R`
plantas <- read.csv("plantas.csv")
cor(plantas$largo_petalo, plantas$ancho_petalo)                        # Pearson
cor(plantas$largo_petalo, plantas$ancho_petalo, method = "spearman")
round(cor(plantas[, -1]), 2)                                           # matriz de correlación
plot(plantas$largo_petalo, plantas$ancho_petalo, pch = 19, col = factor(plantas$especie),
     xlab = "Largo del pétalo", ylab = "Ancho del pétalo")
`}
        <div class="nota atencion"><b>Correlación no es causalidad.</b> Las ventas de helado y los ahogamientos se correlacionan porque ambos suben en verano. Para hablar de causas se necesita un experimento controlado.</div>

        <h3 id="r2"><span class="n">2</span>¿La correlación es significativa?</h3>
        ${R`
pacientes <- read.csv("pacientes.csv")
cor.test(pacientes$altura_m, pacientes$peso_kg)       # H0: correlación = 0
cor.test(pacientes$edad, pacientes$presion_sistolica, method = "spearman", exact = FALSE)
`}

        <h3 id="r3"><span class="n">3</span>Regresión lineal simple</h3>
        <p>El modelo <b>y = b₀ + b₁·x</b> describe cómo cambia la respuesta (y) cuando cambia el predictor (x). En R: <code>lm(y ~ x, data = datos)</code>.</p>
        ${R`
pacientes <- read.csv("pacientes.csv")
modelo <- lm(presion_sistolica ~ edad, data = pacientes)
modelo
summary(modelo)
`}

        <h3 id="r4"><span class="n">4</span>Interpretar los resultados</h3>
        <ul>
            <li><b>Intercepto (b₀):</b> valor esperado de y cuando x = 0 (a veces sin sentido biológico).</li>
            <li><b>Pendiente (b₁):</b> cuánto cambia y por cada unidad de x. Aquí: cuántos mmHg sube la presión por cada año de edad.</li>
            <li><b>Valor p de la pendiente:</b> si es &lt; 0.05, la relación es significativa.</li>
            <li><b>R²:</b> proporción de la variación de y explicada por x (de 0 a 1).</li>
        </ul>
        ${R`
pacientes <- read.csv("pacientes.csv")
modelo <- lm(presion_sistolica ~ edad, data = pacientes)
round(coef(modelo), 3)
round(summary(modelo)$r.squared, 3)
round(confint(modelo), 3)            # intervalos de confianza de los coeficientes
`}
        <div class="nota info"><b>Lee el resultado con cuidado:</b> en estos pacientes la pendiente es muy pequeña (unos 0.05 mmHg por año), su valor p es mayor que 0.05 y R² es casi 0: la edad <b>no explica</b> la presión en esta muestra, y el intervalo de confianza de la pendiente incluye el 0. Un resultado no significativo también es un resultado que se reporta. Compáralo con la relación entre altura y peso del reto 2.</div>

        <h3 id="r5"><span class="n">5</span>Graficar y predecir</h3>
        ${R`
library(ggplot2)
pacientes <- read.csv("pacientes.csv")
ggplot(pacientes, aes(edad, presion_sistolica)) +
  geom_point(color = "gray40") +
  geom_smooth(method = "lm", color = "#276dc3") +     # recta con su banda de confianza
  labs(x = "Edad (años)", y = "Presión sistólica (mmHg)")
`}
        ${R`
pacientes <- read.csv("pacientes.csv")
modelo <- lm(presion_sistolica ~ edad, data = pacientes)
nuevos <- data.frame(edad = c(30, 50, 70))
round(predict(modelo, newdata = nuevos), 1)
round(predict(modelo, newdata = nuevos, interval = "prediction"), 1)
`}

        <h3 id="r6"><span class="n">6</span>Revisar los supuestos</h3>
        <p>La regresión supone relación lineal, residuos con varianza constante y aproximadamente normales. Los cuatro gráficos de diagnóstico ayudan a revisarlo:</p>
        ${R`
pacientes <- read.csv("pacientes.csv")
modelo <- lm(presion_sistolica ~ edad, data = pacientes)
par(mfrow = c(2, 2))
plot(modelo)
par(mfrow = c(1, 1))
shapiro.test(residuals(modelo))
`}
        <p>Con varios predictores se usa regresión <b>múltiple</b>: <code>lm(presion_sistolica ~ edad + peso_kg + fumador, data = pacientes)</code>.</p>

        <h3 id="r7"><span class="n">7</span>Aplicación: tasa de crecimiento bacteriano</h3>
        <p>En la fase exponencial, N(t) = N₀·e<sup>r·t</sup>. Al tomar logaritmo, <b>log(N) = log(N₀) + r·t</b> es una recta: la pendiente de la regresión es la tasa de crecimiento <b>r</b> y el tiempo de duplicación es <b>ln(2) / r</b>.</p>
        ${R`
crec <- read.csv("crecimiento.csv")
fase_exp <- subset(crec, cepa == "E_coli" & hora <= 5)
modelo <- lm(log(do600) ~ hora, data = fase_exp)
r <- coef(modelo)["hora"]
cat("Tasa de crecimiento r =", round(r, 3), "por hora\n")
cat("Tiempo de duplicación =", round(log(2) / r * 60), "minutos\n")
plot(log(do600) ~ hora, data = fase_exp, pch = 19, main = "Fase exponencial (escala log)")
abline(modelo, col = "red", lwd = 2)
`}
        <div class="nota bio"><b>Apoyo del canal del profe:</b> el video «Deducción de la ecuación logística por dos métodos» en <a href="#/videos">Aprendo con videos</a> explica por qué el crecimiento se frena al llegar a la capacidad de carga.</div>
    `,
    exercises: [
        {
            title: 'Correlación de los pétalos',
            description: 'Con plantas.csv calcula la correlación de Pearson y la de Spearman entre largo_sepalo y largo_petalo. Muestra ambas con 3 decimales.',
            template: C`
plantas <- read.csv("plantas.csv")
`,
            solution: C`
plantas <- read.csv("plantas.csv")
cat("Pearson:", round(cor(plantas$largo_sepalo, plantas$largo_petalo), 3), "\n")
cat("Spearman:", round(cor(plantas$largo_sepalo, plantas$largo_petalo, method = "spearman"), 3), "\n")
`
        },
        {
            title: 'Recta de regresión',
            description: 'Ajusta lm(peso_kg ~ altura_m) con pacientes.csv. Muestra el intercepto y la pendiente con 2 decimales y el R² con 3 decimales.',
            template: C`
pacientes <- read.csv("pacientes.csv")
modelo <- lm(peso_kg ~ altura_m, data = pacientes)
`,
            solution: C`
pacientes <- read.csv("pacientes.csv")
modelo <- lm(peso_kg ~ altura_m, data = pacientes)
cat("Intercepto:", round(coef(modelo)[1], 2), "\n")
cat("Pendiente:", round(coef(modelo)[2], 2), "\n")
cat("R2:", round(summary(modelo)$r.squared, 3), "\n")
`
        },
        {
            title: 'Predecir con el modelo',
            description: 'Con el modelo lm(presion_sistolica ~ edad) de pacientes.csv, predice la presión sistólica de personas de 25, 45 y 65 años. Muestra las predicciones con 1 decimal.',
            template: C`
pacientes <- read.csv("pacientes.csv")
modelo <- lm(presion_sistolica ~ edad, data = pacientes)
# predict(modelo, newdata = data.frame(edad = ...))
`,
            solution: C`
pacientes <- read.csv("pacientes.csv")
modelo <- lm(presion_sistolica ~ edad, data = pacientes)
predicciones <- predict(modelo, newdata = data.frame(edad = c(25, 45, 65)))
print(round(predicciones, 1))
`
        },
        {
            title: 'Tiempo de duplicación',
            description: 'Con crecimiento.csv toma B_subtilis entre las horas 0 y 5, ajusta lm(log(do600) ~ hora) y muestra la tasa r (pendiente, 3 decimales) y el tiempo de duplicación en minutos (log(2) / r × 60, sin decimales).',
            template: C`
crec <- read.csv("crecimiento.csv")
fase <- subset(crec, cepa == "B_subtilis" & hora <= 5)
`,
            solution: C`
crec <- read.csv("crecimiento.csv")
fase <- subset(crec, cepa == "B_subtilis" & hora <= 5)
modelo <- lm(log(do600) ~ hora, data = fase)
r <- coef(modelo)[2]
cat("r =", round(r, 3), "\n")
cat("Duplicación:", round(log(2) / r * 60), "minutos\n")
`
        }
    ],
    quiz: [
        { question: '¿Entre qué valores está el coeficiente de correlación?', options: ['Entre −1 y 1', 'Entre 0 y 100', 'Entre 0 y 1', 'No tiene límites'], correct: 0 },
        { question: 'Una correlación de −0.9 indica…', options: ['Una relación negativa fuerte', 'Que no hay relación', 'Una relación positiva débil', 'Un error de cálculo'], correct: 0 },
        { question: '¿Qué método de correlación usa rangos y resiste mejor los atípicos?', options: ['Spearman', 'Pearson', 'Bonferroni', 'Tukey'], correct: 0 },
        { question: '¿Qué función prueba si una correlación es distinta de cero?', options: ['cor.test()', 'cor()', 'lm()', 't.test()'], correct: 0 },
        { question: '¿Cómo se escribe en R una regresión de y sobre x?', options: ['lm(y ~ x, data = d)', 'lm(x ~ y)', 'regression(y, x)', 'cor(y ~ x)'], correct: 0 },
        { question: 'En y = 50 + 1.2·x, ¿qué significa 1.2?', options: ['Cuánto aumenta y por cada unidad que aumenta x', 'El valor de y cuando x = 0', 'El R²', 'El valor p'], correct: 0 },
        { question: '¿Qué indica un R² de 0.80?', options: ['Que el modelo explica el 80 % de la variación de y', 'Que la pendiente es 0.80', 'Que el 80 % de los datos son correctos', 'Que p = 0.80'], correct: 0 },
        { question: '¿Qué función usa un modelo para estimar y en valores nuevos de x?', options: ['predict()', 'summary()', 'coef()', 'residuals()'], correct: 0 },
        { question: '¿Qué capa de ggplot2 agrega la recta de regresión?', options: ['geom_smooth(method = "lm")', 'geom_line()', 'geom_abline(lm)', 'stat_lm()'], correct: 0 },
        { question: '¿Por qué una correlación alta no prueba causalidad?', options: ['Porque otra variable puede influir en ambas', 'Porque R calcula mal la correlación', 'Porque solo vale con datos negativos', 'Porque la correlación siempre es baja'], correct: 0 }
    ]
};
