/**
 * Academia Bio-R · Bonus (opcional: da XP y medallas, no cuenta para el diploma)
 * Módulos: actividades-extras, proyecto, desafios
 */

// Videos de «Actividades Extras» de la Academia Bio-Python (verificados en octubre de 2026)
const _EXTRAS_VIDEOS = [
    ['Mhx9jLqFqHg', 0,    'La biología es el nuevo código', 'Jensen Huang (NVIDIA) · The AI Generation', 'Biología y computación'],
    ['Hub1M5Uw6tY', 0,    'No aprendas a programar, mejor estudia esto', 'Jensen Huang · DonebyLaura', 'El futuro de la programación'],
    ['PKc1T-t3574', 0,    '¿Por qué tu hijo no debe aprender a programar?', 'Eduardo Vázquez IA', 'El futuro de la programación'],
    ['mm4W5Y-TNH0', 3101, 'IA: cómo entenderla sin miedo', 'José Ignacio Latorre · AprendemosJuntos', 'Inteligencia artificial'],
    ['WRj1mQElBfM', 1065, 'Pensamiento crítico en la sociedad actual', 'Aniceto Masferrer', 'Pensamiento crítico'],
    ['0R3MeOj49xI', 2003, 'El arte de pensar: filosofía para el siglo XXI', 'José Carlos Ruiz · AprendemosJuntos', 'Pensamiento crítico'],
    ['ydnOSMbyyQo', 0,    'Raj Reddy: el futuro de la IA (en inglés)', 'CMU Robotics Institute', 'Inteligencia artificial'],
    ['mykrieNb9p0', 57,   'Historia de la inteligencia artificial', 'Tecnología 4.0', 'Inteligencia artificial'],
    ['zuSS7EbGRro', 80,   'Historia y evolución de la IA: de reglas a agentes', 'Latin AI Coder', 'Inteligencia artificial'],
    ['RduS9sfQZ6A', 0,    '¿Cómo funciona por dentro un agente de IA?', 'Oliver Nabani', 'Inteligencia artificial']
];
const _ytInicio = ([id, t]) => YT(id) + (t ? '?start=' + t : '');

modules['actividades-extras'] = {
    title: 'Actividades Extras',
    description: 'Videos del futuro de la tecnología',
    video: _ytInicio(_EXTRAS_VIDEOS[0]),
    additionalVideos: _EXTRAS_VIDEOS.slice(1).map(v => ({ title: v[2], url: _ytInicio(v) })),
    content: `
        <h2>Actividades Extras</h2>
        <p>Videos esenciales sobre el futuro de la programación, la biología computacional, el pensamiento crítico y la inteligencia artificial: su historia, su evolución hasta los agentes y cómo funcionan por dentro. Son los mismos de la Academia Bio-Python.</p>
        <div class="nota consejo"><b>Cómo usarlos:</b> pulsa una tarjeta para verla en el reproductor de arriba (los videos largos empiezan en el minuto recomendado). Después de cada uno, escribe en <b>Mis notas</b> una idea que te sirva para tu carrera.</div>
        <div class="rejilla-extras">
            ${_EXTRAS_VIDEOS.map((v, i) => `
            <button class="tarjeta-extra" onclick="document.querySelector('.video-item[data-video=&quot;${i}&quot;]').click(); window.scrollTo({ top: 0, behavior: 'smooth' })">
                <span class="miniatura" style="background-image:url(https://img.youtube.com/vi/${v[0]}/mqdefault.jpg)"><i class="fas fa-play"></i></span>
                <span class="tema">${v[4]}</span>
                <b>${v[2]}</b>
                <small>${v[3]}${v[1] >= 60 ? ' · desde el minuto ' + Math.floor(v[1] / 60) : ''}</small>
            </button>`).join('')}
        </div>
        <h3><span class="n">?</span>Para reflexionar</h3>
        <ul>
            <li>Si «la biología es el nuevo código», ¿qué papel tienen R y la estadística en esa idea?</li>
            <li>Si la IA escribe código, ¿qué necesitas saber tú para revisarlo? (Mira el módulo 16).</li>
            <li>¿Qué diferencia hay entre un asistente de IA que responde y un <b>agente</b> que actúa?</li>
        </ul>
    `,
    exercises: [],
    quiz: []
};

modules.proyecto = {
    title: 'Proyecto final: análisis de un experimento',
    description: 'Análisis completo de un experimento',
    video: YT('VFdqLxqz4M4'),
    additionalVideos: [
        { title: 'Biorreactor (parte 1): qué es y sus ecuaciones diferenciales', url: YT('Y0XPC_ohq1s') }
    ],
    content: `
        <h2>Proyecto: ¿qué fertilizante funciona mejor y qué bacteria crece más rápido?</h2>
        <p>En este proyecto integras todo el curso en el ciclo de un análisis real: <b>pregunta → datos → limpieza → exploración → gráfico → prueba estadística → conclusión</b>. Cada paso es un reto con verificación automática.</p>
        <div class="mini-tarjetas">
            <div><b><i class="fas fa-circle-question"></i>1. Pregunta</b>¿El fertilizante cambia la altura de las plantas?</div>
            <div><b><i class="fas fa-database"></i>2. Datos</b><code>fertilizante.csv</code>: 30 parcelas, 3 tratamientos.</div>
            <div><b><i class="fas fa-magnifying-glass-chart"></i>3. Exploración</b>Medias, desviaciones y un diagrama de caja.</div>
            <div><b><i class="fas fa-scale-balanced"></i>4. Prueba</b>ANOVA y comparaciones de Tukey.</div>
            <div><b><i class="fas fa-bacteria"></i>5. Segunda pregunta</b>¿Qué cepa crece más rápido? (<code>crecimiento.csv</code>)</div>
            <div><b><i class="fas fa-file-lines"></i>6. Informe</b>Resultados en una frase con números calculados.</div>
        </div>

        <h3><span class="n">1</span>Plan del análisis</h3>
        ${R`
fert <- read.csv("fertilizante.csv")
str(fert)
table(fert$fertilizante)          # ¿diseño balanceado?
any(is.na(fert))                  # ¿hay datos faltantes?
`}
        <h3><span class="n">2</span>Exploración</h3>
        ${R`
fert <- read.csv("fertilizante.csv")
aggregate(altura_cm ~ fertilizante, data = fert, FUN = function(x) round(c(media = mean(x), de = sd(x)), 2))
boxplot(altura_cm ~ fertilizante, data = fert, col = c("gray80", "#86efac", "#93c5fd"),
        main = "Altura según el fertilizante", ylab = "Altura (cm)")
`}
        <h3><span class="n">3</span>Modelo de crecimiento logístico</h3>
        <p>Las bacterias crecen rápido al principio y se frenan al acercarse a la capacidad del medio (K). El modelo logístico N(t) = K / (1 + ((K − N₀)/N₀)·e<sup>−rt</sup>) se ajusta en R con <code>nls()</code>:</p>
        ${R`
crec <- read.csv("crecimiento.csv")
ecoli <- subset(crec, cepa == "E_coli")
ajuste <- nls(do600 ~ K / (1 + ((K - N0) / N0) * exp(-r * hora)), data = ecoli,
              start = list(K = 2, N0 = 0.05, r = 0.5))
round(coef(ajuste), 3)
plot(do600 ~ hora, data = ecoli, pch = 19, main = "Ajuste logístico de E. coli")
lines(ecoli$hora, predict(ajuste), col = "red", lwd = 2)
`}
        <div class="nota bio"><b>Para profundizar:</b> el profesor deduce la ecuación logística y modela biorreactores en los videos de <a href="#/videos">Aprendo con videos</a>.</div>
    `,
    exercises: [
        {
            title: 'Paso 1: describir los grupos',
            description: 'Lee fertilizante.csv y muestra la media de altura_cm de cada fertilizante (2 decimales) y cuál tuvo la mayor media.',
            template: C`
fert <- read.csv("fertilizante.csv")
`,
            solution: C`
fert <- read.csv("fertilizante.csv")
medias <- round(tapply(fert$altura_cm, fert$fertilizante, mean), 2)
print(medias)
cat("Mayor media:", names(which.max(medias)), "\n")
`
        },
        {
            title: 'Paso 2: el gráfico',
            description: 'Haz con ggplot2 un diagrama de caja de altura_cm por fertilizante, con los puntos encima (geom_jitter) y títulos en los ejes.',
            template: C`
library(ggplot2)
fert <- read.csv("fertilizante.csv")
`,
            solution: C`
library(ggplot2)
fert <- read.csv("fertilizante.csv")
ggplot(fert, aes(fertilizante, altura_cm, fill = fertilizante)) +
  geom_boxplot(alpha = 0.6, show.legend = FALSE) +
  geom_jitter(width = 0.1, show.legend = FALSE) +
  labs(x = "Fertilizante", y = "Altura (cm)")
`
        },
        {
            title: 'Paso 3: la prueba estadística',
            description: 'Ajusta un ANOVA (aov) de altura_cm según fertilizante y muestra con TukeyHSD() las diferencias entre pares redondeadas a 2 decimales. Luego muestra cuántos pares difieren con p ajustado < 0.05.',
            template: C`
fert <- read.csv("fertilizante.csv")
`,
            solution: C`
fert <- read.csv("fertilizante.csv")
modelo <- aov(altura_cm ~ fertilizante, data = fert)
tukey <- TukeyHSD(modelo)$fertilizante
print(round(tukey, 2))
cat("Pares con diferencia significativa:", sum(tukey[, "p adj"] < 0.05), "\n")
`
        },
        {
            title: 'Paso 4: ¿qué bacteria crece más rápido?',
            description: 'Con crecimiento.csv ajusta para cada cepa lm(log(do600) ~ hora) con las horas 0 a 5 y muestra la tasa r (pendiente, 3 decimales) de cada una y cuál crece más rápido.',
            template: C`
crec <- read.csv("crecimiento.csv")
`,
            solution: C`
crec <- read.csv("crecimiento.csv")
tasas <- sapply(c("E_coli", "B_subtilis"), function(nombre) {
  fase <- crec[crec$cepa == nombre & crec$hora <= 5, ]
  coef(lm(log(do600) ~ hora, data = fase))[2]
})
names(tasas) <- c("E_coli", "B_subtilis")
print(round(tasas, 3))
cat("Crece más rápido:", names(which.max(tasas)), "\n")
`
        },
        {
            title: 'Paso 5: la conclusión',
            description: 'Escribe con sprintf() una conclusión con números calculados: «El fertilizante Quimico produjo la mayor altura media (25.72 cm) frente al control (21.14 cm).»',
            template: C`
fert <- read.csv("fertilizante.csv")
medias <- tapply(fert$altura_cm, fert$fertilizante, mean)
`,
            solution: C`
fert <- read.csv("fertilizante.csv")
medias <- tapply(fert$altura_cm, fert$fertilizante, mean)
mejor <- names(which.max(medias))
cat(sprintf("El fertilizante %s produjo la mayor altura media (%.2f cm) frente al control (%.2f cm).\n",
            mejor, max(medias), medias["Control"]))
`
        }
    ],
    quiz: [
        { question: '¿Cuál es el orden correcto de un análisis de datos?', options: ['Pregunta, datos, limpieza, exploración, prueba, conclusión', 'Prueba, gráfico, pregunta, datos', 'Conclusión, datos, pregunta', 'Gráfico, conclusión, limpieza'], correct: 0 },
        { question: '¿Por qué se revisa table(fert$fertilizante) antes del ANOVA?', options: ['Para ver cuántas observaciones tiene cada grupo', 'Para calcular el valor p', 'Para dibujar el gráfico', 'Para quitar los NA'], correct: 0 },
        { question: 'El ANOVA da p < 0.001. ¿Qué falta para saber qué fertilizantes difieren?', options: ['Una prueba de comparaciones múltiples como Tukey', 'Nada, ya se sabe', 'Una correlación', 'Un histograma'], correct: 0 },
        { question: '¿Qué función ajusta un modelo no lineal como el logístico?', options: ['nls()', 'lm()', 'aov()', 'cor()'], correct: 0 },
        { question: 'En el modelo logístico, ¿qué representa K?', options: ['La capacidad de carga del medio', 'La tasa de crecimiento', 'El tiempo inicial', 'El número de cepas'], correct: 0 },
        { question: '¿Por qué se usa log(do600) para estimar la tasa en la fase exponencial?', options: ['Porque el logaritmo convierte el crecimiento exponencial en una recta', 'Porque los datos son negativos', 'Porque lm() no acepta números', 'Para quitar los NA'], correct: 0 }
    ]
};

modules.desafios = {
    title: 'Desafíos de programación bio',
    description: 'Retos variados para practicar',
    video: YT('wGO8EIRXaUs'),
    additionalVideos: [],
    content: `
        <h2>Desafíos de programación con sabor a biología</h2>
        <p>Retos cortos para entrenar la lógica: cada uno combina vectores, funciones, bucles y condicionales. Resuélvelos en orden de dificultad y gana XP extra.</p>
        <div class="tabla-scroll"><table class="tabla">
            <tr><th>Desafío</th><th>Practicas</th><th>Dificultad</th></tr>
            <tr><td>Conejos de Fibonacci</td><td>Bucles y vectores</td><td>⭐</td></tr>
            <tr><td>Equilibrio de Hardy-Weinberg</td><td>Fórmulas y funciones</td><td>⭐</td></tr>
            <tr><td>Cruce de Mendel</td><td>Simulación con sample()</td><td>⭐⭐</td></tr>
            <tr><td>Palíndromos de ADN</td><td>Textos y funciones</td><td>⭐⭐</td></tr>
            <tr><td>Distancia de Hamming</td><td>Comparar vectores</td><td>⭐⭐</td></tr>
            <tr><td>Marco de lectura abierto</td><td>Buscar codones</td><td>⭐⭐⭐</td></tr>
        </table></div>
        <div class="nota consejo"><b>Método:</b> escribe primero los pasos como comentarios (<code>#</code>), luego conviértelos en código uno por uno y ejecuta con frecuencia.</div>
        ${R`
# Calentamiento: frecuencia de cada base en una secuencia
adn <- "ATGCGATACGCTTGAGCATG"
round(prop.table(table(strsplit(adn, "")[[1]])), 2)
`}
    `,
    exercises: [
        {
            title: 'Conejos de Fibonacci',
            description: 'Cada pareja de conejos produce una nueva pareja por mes desde su segundo mes (F(n) = F(n−1) + F(n−2), con F(1) = F(2) = 1). Calcula con un for las parejas de los primeros 12 meses y muéstralas.',
            template: C`
parejas <- numeric(12)
parejas[1] <- 1
parejas[2] <- 1
`,
            solution: C`
parejas <- numeric(12)
parejas[1] <- 1
parejas[2] <- 1
for (n in 3:12) {
  parejas[n] <- parejas[n - 1] + parejas[n - 2]
}
print(parejas)
`
        },
        {
            title: 'Equilibrio de Hardy-Weinberg',
            description: 'Escribe hw(p) que devuelva las frecuencias esperadas de los genotipos AA (p²), Aa (2pq) y aa (q²), con q = 1 − p. Muéstralas para p = 0.7 redondeadas a 2 decimales.',
            template: C`
hw <- function(p) {
}
`,
            solution: C`
hw <- function(p) {
  q <- 1 - p
  c(AA = p^2, Aa = 2 * p * q, aa = q^2)
}
print(round(hw(0.7), 2))
`
        },
        {
            title: 'Cruce de Mendel',
            description: 'Simula 400 descendientes de un cruce Aa × Aa: cada uno recibe un alelo al azar de cada progenitor (sample(c("A", "a"), 400, replace = TRUE) dos veces). Con set.seed(1) muestra cuántos tienen fenotipo dominante (al menos una A) y la proporción (3 decimales).',
            template: C`
set.seed(1)
`,
            solution: C`
set.seed(1)
padre <- sample(c("A", "a"), 400, replace = TRUE)
madre <- sample(c("A", "a"), 400, replace = TRUE)
dominante <- padre == "A" | madre == "A"
cat("Dominantes:", sum(dominante), "\n")
cat("Proporción:", round(mean(dominante), 3), "\n")
`
        },
        {
            title: 'Palíndromos de ADN',
            description: 'Un sitio palindrómico es igual a su reverso complementario (como GAATTC). Escribe es_palindromo(s) y aplícala con sapply() a los sitios del vector.',
            template: C`
sitios <- c("GAATTC", "GGATCC", "ATGCAA", "AAGCTT", "TTTAAA", "GATTACA")
`,
            solution: C`
sitios <- c("GAATTC", "GGATCC", "ATGCAA", "AAGCTT", "TTTAAA", "GATTACA")
es_palindromo <- function(s) {
  rc <- paste(rev(strsplit(chartr("ATGC", "TACG", s), "")[[1]]), collapse = "")
  s == rc
}
print(sapply(sitios, es_palindromo))
`
        },
        {
            title: 'Distancia de Hamming',
            description: 'La distancia de Hamming es el número de posiciones en que difieren dos secuencias de igual longitud (mutaciones puntuales). Calcúlala para las dos secuencias y muestra también en qué posiciones difieren.',
            template: C`
s1 <- "GAGCCTACTAACGGGAT"
s2 <- "CATCGTAATGACGGCCT"
`,
            solution: C`
s1 <- "GAGCCTACTAACGGGAT"
s2 <- "CATCGTAATGACGGCCT"
a <- strsplit(s1, "")[[1]]
b <- strsplit(s2, "")[[1]]
cat("Distancia de Hamming:", sum(a != b), "\n")
cat("Posiciones:", which(a != b), "\n")
`
        },
        {
            title: 'Marco de lectura abierto',
            description: 'Encuentra el primer ATG de la secuencia y, desde ahí, recorre de 3 en 3 hasta el primer codón de parada (TAA, TAG o TGA). Muestra la posición de inicio, la del codón de parada y cuántos codones tiene el marco (incluido el de parada).',
            template: C`
adn <- "CCATGAAACGTTTGGGCATAGCCTAA"
`,
            solution: C`
adn <- "CCATGAAACGTTTGGGCATAGCCTAA"
inicio <- regexpr("ATG", adn)[1]
pos <- inicio
repeat {
  codon <- substr(adn, pos, pos + 2)
  if (codon %in% c("TAA", "TAG", "TGA") || pos + 2 > nchar(adn)) break
  pos <- pos + 3
}
cat("Inicio:", inicio, "\n")
cat("Parada:", pos, "\n")
cat("Codones:", (pos - inicio) / 3 + 1, "\n")
`
        }
    ],
    quiz: [
        { question: '¿Qué estructura conviene para calcular la sucesión de Fibonacci paso a paso?', options: ['Un bucle for que use los dos valores anteriores', 'Un factor', 'Un data frame vacío', 'Un gráfico'], correct: 0 },
        { question: 'En Hardy-Weinberg con p = 0.5, ¿cuál es la frecuencia esperada de heterocigotos?', options: ['0.5', '0.25', '0.75', '1'], correct: 0 },
        { question: 'En un cruce Aa × Aa, ¿qué proporción se espera con fenotipo dominante?', options: ['3/4', '1/2', '1/4', '1'], correct: 0 },
        { question: '¿Qué secuencia es un palíndromo de ADN?', options: ['GAATTC', 'GATTACA', 'AAAAAA', 'ATGCAA'], correct: 0 },
        { question: '¿Qué mide la distancia de Hamming?', options: ['El número de posiciones distintas entre dos secuencias de igual longitud', 'La longitud de una secuencia', 'El contenido GC', 'El número de genes'], correct: 0 },
        { question: '¿Cuáles son los codones de parada estándar?', options: ['TAA, TAG y TGA', 'ATG, GGG y CCC', 'AAA, TTT y GGG', 'ATG y TAA'], correct: 0 }
    ]
};
