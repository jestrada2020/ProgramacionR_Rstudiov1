/**
 * Academia Bio-R · Unidad 2 · Datos en R
 * Módulos: vectors, dataframes, io
 */

modules.vectors = {
    title: '4. Vectores y matrices',
    description: 'La estructura básica de R',
    video: YT('0Ji7TSsxLsY'),
    additionalVideos: [
        { title: 'Cómo crear matrices en RStudio', url: YT('OKhPofz0P3A') },
        { title: 'Tutorial R: vectores (Econometría con R)', url: YT('k5B-0LjidhY') },
        { title: 'Generar datos en R: seq(), rep() y más', url: YT('Qlufz86MJeI') }
    ],
    content: `
        <h2>Vectores: la estructura básica de R</h2>
        <p>Un <b>vector</b> es una secuencia de valores del <b>mismo tipo</b>: las alturas de 10 plantas, las bases de una secuencia de ADN o las temperaturas de una semana. Casi todo en R se construye con vectores.</p>
        <div class="indice">
            <a class="etiqueta" href="#v1">Crear</a><a class="etiqueta" href="#v2">Vectorización</a><a class="etiqueta" href="#v3">Índices</a>
            <a class="etiqueta" href="#v4">Funciones útiles</a><a class="etiqueta" href="#v5">Vectores de texto</a><a class="etiqueta" href="#v6">Matrices</a>
        </div>

        <h3 id="v1"><span class="n">1</span>Crear vectores</h3>
        ${R`
alturas <- c(12.5, 14.1, 13.8, 15.2, 11.9)   # c() combina valores
dias <- 1:7                                 # secuencia de enteros
tiempos <- seq(0, 60, by = 15)              # de 0 a 60 de 15 en 15
replicas <- rep(c("control", "tratado"), times = 3)
length(alturas)
tiempos
replicas
`}
        <div class="nota atencion"><b>Un solo tipo por vector:</b> si mezclas números y textos, R convierte todo a texto: <code>c(1, "dos", 3)</code> da <code>"1" "dos" "3"</code>.</div>

        <h3 id="v2"><span class="n">2</span>Vectorización: operar con todos a la vez</h3>
        <p>Las operaciones se aplican <b>elemento por elemento</b>, sin escribir bucles. Es la gran ventaja de R.</p>
        ${R`
celsius <- c(36.5, 37.2, 38.9, 35.8)
fahrenheit <- celsius * 9 / 5 + 32
fahrenheit
inicial <- c(10, 20, 30)
final <- c(15, 18, 45)
cambio <- (final - inicial) / inicial * 100   # % de cambio de cada muestra
round(cambio, 1)
`}
        <p>Si los vectores tienen distinta longitud, R <b>recicla</b> el más corto: <code>c(1, 2, 3, 4) * c(1, 10)</code> da <code>1 20 3 40</code>.</p>

        <h3 id="v3"><span class="n">3</span>Seleccionar elementos con corchetes</h3>
        ${R`
colonias <- c(lunes = 45, martes = 80, miercoles = 120, jueves = 95, viernes = 150)
colonias[1]                 # el primero
colonias[c(2, 4)]           # el segundo y el cuarto
colonias[-1]                # todos menos el primero
colonias["jueves"]          # por nombre
colonias[colonias > 90]     # los que cumplen una condición
which(colonias > 90)        # ¿en qué posiciones?
which.max(colonias)         # posición del máximo
`}
        <div class="nota consejo"><b>Filtrar con condiciones</b> (<code>x[x &gt; 90]</code>) es una de las técnicas que más usarás: es la misma idea para filtrar filas de un data frame.</div>

        <h3 id="v4"><span class="n">4</span>Funciones útiles con vectores</h3>
        <div class="tabla-scroll"><table class="tabla">
            <tr><th>Función</th><th>Qué hace</th><th>Función</th><th>Qué hace</th></tr>
            <tr><td><code>sum()</code></td><td>suma</td><td><code>sort()</code></td><td>ordena</td></tr>
            <tr><td><code>mean()</code></td><td>promedio</td><td><code>rev()</code></td><td>invierte el orden</td></tr>
            <tr><td><code>max()</code>, <code>min()</code></td><td>máximo, mínimo</td><td><code>cumsum()</code></td><td>suma acumulada</td></tr>
            <tr><td><code>range()</code></td><td>mínimo y máximo</td><td><code>unique()</code></td><td>valores sin repetir</td></tr>
            <tr><td><code>length()</code></td><td>cantidad de elementos</td><td><code>table()</code></td><td>frecuencia de cada valor</td></tr>
            <tr><td><code>round()</code></td><td>redondea</td><td><code>%in%</code></td><td>¿está en el conjunto?</td></tr>
        </table></div>
        ${R`
huevos <- c(3, 5, 2, 5, 4, 3, 5)
sum(huevos); mean(huevos); range(huevos)
sort(huevos, decreasing = TRUE)
cumsum(huevos)
table(huevos)
c(2, 7) %in% huevos
`}

        <h3 id="v5"><span class="n">5</span>Vectores de texto: secuencias de ADN</h3>
        ${R`
adn <- c("A", "T", "G", "C", "G", "A", "T", "A", "C", "G", "G", "C")
table(adn)
sum(adn == "G")                         # cuántas guaninas
gc <- mean(adn %in% c("G", "C")) * 100  # porcentaje de G + C
cat("Contenido GC:", round(gc, 1), "%\n")
paste(adn, collapse = "")               # unir en una sola cadena
strsplit("ATGCCA", "")[[1]]             # separar una cadena en bases
`}

        <h3 id="v6"><span class="n">6</span>Matrices: datos en filas y columnas</h3>
        <p>Una <b>matriz</b> es un vector con dos dimensiones (filas × columnas); todos sus valores son del mismo tipo. Es ideal para tablas de expresión génica o de distancias.</p>
        ${R`
expresion <- matrix(c(5.1, 6.3, 2.2, 8.4, 7.9, 3.1), nrow = 2, byrow = TRUE,
                    dimnames = list(c("gen_A", "gen_B"), c("ctrl", "trat1", "trat2")))
expresion
dim(expresion)
expresion["gen_B", "trat1"]     # fila y columna
expresion[, "ctrl"]             # una columna completa
rowMeans(expresion)             # promedio de cada gen
apply(expresion, 2, max)        # máximo de cada columna (2 = columnas)
t(expresion)                    # transpuesta
`}
        ${R`
A <- matrix(1:4, nrow = 2)
B <- matrix(c(2, 0, 1, 3), nrow = 2)
A * B        # producto elemento por elemento
A %*% B      # producto matricial
cbind(A, B)  # unir por columnas
rbind(A, B)  # unir por filas
`}
    `,
    exercises: [
        {
            title: 'Contenido GC',
            description: 'Dado el vector de bases adn, calcula el porcentaje de bases G o C y muéstralo redondeado a 1 decimal con cat().',
            template: C`
adn <- c("A", "T", "G", "C", "G", "G", "A", "T", "C", "C", "G", "A", "T", "G", "C", "A")
# Calcula el porcentaje de G + C
`,
            solution: C`
adn <- c("A", "T", "G", "C", "G", "G", "A", "T", "C", "C", "G", "A", "T", "G", "C", "A")
gc <- sum(adn %in% c("G", "C")) / length(adn) * 100
cat("Contenido GC:", round(gc, 1), "%\n")
`
        },
        {
            title: 'Colonias de la semana',
            description: 'Con el vector colonias, muestra el total de la semana, el promedio, el día con más colonias (names(which.max())) y los días con más de 100 colonias.',
            template: C`
colonias <- c(lunes = 45, martes = 80, miercoles = 120, jueves = 95, viernes = 150, sabado = 110)
# total, promedio, día máximo y días con más de 100
`,
            solution: C`
colonias <- c(lunes = 45, martes = 80, miercoles = 120, jueves = 95, viernes = 150, sabado = 110)
cat("Total:", sum(colonias), "\n")
cat("Promedio:", mean(colonias), "\n")
cat("Día con más colonias:", names(which.max(colonias)), "\n")
cat("Días con más de 100:", names(colonias[colonias > 100]), "\n")
`
        },
        {
            title: 'Normalizar mediciones',
            description: 'Normaliza el vector de absorbancias al intervalo 0–1 con (x − mín) / (máx − mín) y muestra el resultado redondeado a 2 decimales.',
            template: C`
absorbancia <- c(0.12, 0.45, 0.33, 0.80, 0.27, 0.61)
# normalizada <- (x - min) / (max - min)
`,
            solution: C`
absorbancia <- c(0.12, 0.45, 0.33, 0.80, 0.27, 0.61)
normalizada <- (absorbancia - min(absorbancia)) / (max(absorbancia) - min(absorbancia))
print(round(normalizada, 2))
`
        },
        {
            title: 'Matriz de expresión génica',
            description: 'Crea una matriz con 3 genes (filas) y 4 muestras (columnas) con los valores dados (llénala por filas) y muestra el promedio de expresión de cada gen con rowMeans().',
            template: C`
valores <- c(2.1, 2.5, 2.3, 2.7,
             8.0, 7.6, 8.4, 7.9,
             0.5, 0.9, 0.7, 0.6)
# matrix(valores, nrow = 3, byrow = TRUE) y nombres de filas gen1, gen2, gen3
`,
            solution: C`
valores <- c(2.1, 2.5, 2.3, 2.7,
             8.0, 7.6, 8.4, 7.9,
             0.5, 0.9, 0.7, 0.6)
m <- matrix(valores, nrow = 3, byrow = TRUE)
rownames(m) <- c("gen1", "gen2", "gen3")
print(rowMeans(m))
`
        }
    ],
    quiz: [
        { question: '¿Qué función crea un vector combinando valores?', options: ['c()', 'vector.new()', 'list()', 'combine()'], correct: 0 },
        { question: '¿Qué devuelve length(seq(0, 10, by = 2))?', options: ['6', '5', '10', '11'], correct: 0 },
        { question: '¿Qué resultado da c(1, 2, 3) * 2?', options: ['2 4 6', '1 2 3 1 2 3', '12', 'Error'], correct: 0 },
        { question: '¿Qué hace x[-1]?', options: ['Devuelve todos los elementos menos el primero', 'Devuelve el último elemento', 'Cambia el signo del primer elemento', 'Da error porque no existen posiciones negativas'], correct: 0 },
        { question: 'Si x <- c(4, 9, 2, 7), ¿qué devuelve x[x > 5]?', options: ['9 7', '2 4', 'TRUE FALSE TRUE FALSE', '2 4 (las posiciones)'], correct: 0 },
        { question: '¿Qué tipo de vector resulta de c(1, "dos", 3)?', options: ['character (todo se vuelve texto)', 'numeric', 'una mezcla de tipos', 'logical'], correct: 0 },
        { question: '¿Qué función cuenta cuántas veces aparece cada valor?', options: ['table()', 'count()', 'sum()', 'unique()'], correct: 0 },
        { question: '¿Qué operador hace el producto matricial?', options: ['%*%', '*', '%x%', '**'], correct: 0 },
        { question: 'En apply(m, 2, mean), ¿qué significa el 2?', options: ['Aplicar la función a cada columna', 'Aplicar la función a cada fila', 'Redondear a 2 decimales', 'Usar las 2 primeras filas'], correct: 0 },
        { question: '¿Qué devuelve "G" %in% c("A", "T", "G")?', options: ['TRUE', 'FALSE', '3', '"G"'], correct: 0 }
    ]
};

modules.dataframes = {
    title: '5. Listas, factores y data frames',
    description: 'Listas, factores y tablas de datos',
    video: YT('BT7LJu2A5_M'),
    additionalVideos: [
        { title: 'Factores en RStudio', url: YT('pLdZFmxtBJ0') },
        { title: 'Qué son las listas en R', url: YT('8ndmtEIUH0s') },
        { title: 'Crear un data frame (Estadística Fácil)', url: YT('qQzEQevsipE') }
    ],
    content: `
        <h2>Listas, factores y data frames</h2>
        <p>Los datos reales mezclan tipos: el nombre de un paciente (texto), su edad (número) y si fuma (sí/no). Para eso existen las <b>listas</b>, los <b>factores</b> y, sobre todo, los <b>data frames</b>: la tabla de datos de R, donde cada fila es una unidad de observación y cada columna una variable.</p>
        <div class="indice">
            <a class="etiqueta" href="#d1">Listas</a><a class="etiqueta" href="#d2">Factores</a><a class="etiqueta" href="#d3">Data frames</a>
            <a class="etiqueta" href="#d4">Seleccionar</a><a class="etiqueta" href="#d5">Modificar</a><a class="etiqueta" href="#d6">Datos incluidos</a>
        </div>

        <h3 id="d1"><span class="n">1</span>Listas: cajas con objetos de distinto tipo</h3>
        ${R`
muestra <- list(
  id = "M-017",
  especie = "Pseudomonas aeruginosa",
  dias = c(1, 2, 3),
  crecimiento = c(0.2, 0.9, 1.6),
  resistente = TRUE
)
muestra$especie          # con $ y el nombre
muestra[["dias"]]        # con doble corchete
names(muestra)
str(muestra)             # estructura resumida
`}

        <h3 id="d2"><span class="n">2</span>Factores: variables categóricas</h3>
        <p>Un <b>factor</b> guarda categorías (tratamiento, sexo, especie) y conoce sus <b>niveles</b>. R los usa en tablas, gráficos y modelos estadísticos.</p>
        ${R`
tratamiento <- factor(c("control", "dosis_baja", "control", "dosis_alta", "dosis_baja", "control"))
levels(tratamiento)
table(tratamiento)
# Factor ordenado: el orden de los niveles tiene sentido
dolor <- factor(c("leve", "severo", "moderado", "leve"),
                levels = c("leve", "moderado", "severo"), ordered = TRUE)
dolor
dolor > "leve"
`}

        <h3 id="d3"><span class="n">3</span>Data frames: la tabla de datos</h3>
        <p>Un data frame es una lista de vectores de la <b>misma longitud</b> (las columnas). Puedes crearlo con <code>data.frame()</code> o leerlo de un archivo (módulo 6).</p>
        ${R`
cultivos <- data.frame(
  cepa = c("E_coli", "S_aureus", "B_subtilis", "P_putida"),
  gram = c("negativa", "positiva", "positiva", "negativa"),
  colonias = c(120, 85, 64, 143),
  temperatura = c(37, 37, 30, 30)
)
cultivos
str(cultivos)        # tipo de cada columna
dim(cultivos)        # filas y columnas
names(cultivos)
summary(cultivos)
mostrar(cultivos)    # tabla bonita (ayuda de la academia; en RStudio usa View())
`}

        <h3 id="d4"><span class="n">4</span>Seleccionar filas y columnas</h3>
        <p>La regla es <code>datos[filas, columnas]</code>. Si dejas un lado vacío, se toman todas.</p>
        ${R`
cultivos <- data.frame(
  cepa = c("E_coli", "S_aureus", "B_subtilis", "P_putida"),
  gram = c("negativa", "positiva", "positiva", "negativa"),
  colonias = c(120, 85, 64, 143),
  temperatura = c(37, 37, 30, 30)
)
cultivos$colonias                       # una columna como vector
cultivos[2, ]                           # la fila 2
cultivos[, c("cepa", "colonias")]       # dos columnas
cultivos[cultivos$colonias > 100, ]     # filas que cumplen una condición
cultivos[cultivos$gram == "positiva" & cultivos$temperatura == 37, ]
subset(cultivos, colonias > 80, select = c(cepa, colonias))   # lo mismo con subset()
`}

        <h3 id="d5"><span class="n">5</span>Agregar, modificar y ordenar</h3>
        ${R`
cultivos <- data.frame(
  cepa = c("E_coli", "S_aureus", "B_subtilis", "P_putida"),
  gram = c("negativa", "positiva", "positiva", "negativa"),
  colonias = c(120, 85, 64, 143),
  temperatura = c(37, 37, 30, 30)
)
cultivos$log_colonias <- round(log10(cultivos$colonias), 2)          # columna nueva
cultivos$nivel <- ifelse(cultivos$colonias >= 100, "alto", "bajo")    # según una condición
cultivos[order(cultivos$colonias, decreasing = TRUE), ]               # ordenar
nueva <- data.frame(cepa = "L_lactis", gram = "positiva", colonias = 70,
                    temperatura = 30, log_colonias = 1.85, nivel = "bajo")
cultivos <- rbind(cultivos, nueva)                                    # agregar una fila
nrow(cultivos)
tapply(cultivos$colonias, cultivos$gram, mean)                        # promedio por grupo
`}

        <h3 id="d6"><span class="n">6</span>Datos de biología que ya vienen con R</h3>
        <div class="mini-tarjetas">
            <div><b><code>iris</code></b>150 flores de 3 especies con medidas de sépalos y pétalos (Fisher, 1936).</div>
            <div><b><code>PlantGrowth</code></b>Peso de plantas con un control y dos tratamientos.</div>
            <div><b><code>ToothGrowth</code></b>Crecimiento dental de cobayos con vitamina C.</div>
            <div><b><code>airquality</code></b>Calidad del aire en Nueva York (con datos faltantes).</div>
            <div><b><code>ChickWeight</code></b>Peso de pollitos según la dieta.</div>
            <div><b><code>mtcars</code></b>Datos de 32 autos (muy usado en ejemplos).</div>
        </div>
        ${R`
head(iris)
str(PlantGrowth)
table(iris$Species)
mean(iris$Petal.Length[iris$Species == "setosa"])
`}
        <div class="nota bio"><b>Mira el video del canal del profe</b> «De la unidad de observación al data frame» en <a href="#/videos">Aprendo con videos</a>: explica cómo pasar de un estudio real a una tabla como estas.</div>
    `,
    exercises: [
        {
            title: 'Tu primer data frame',
            description: 'Crea un data frame plantas con las columnas especie, altura_cm y riego (los valores están en la plantilla). Muestra cuántas filas tiene y la altura promedio.',
            template: C`
# especie: "Frijol", "Maíz", "Tomate", "Lechuga"
# altura_cm: 34, 120, 65, 22
# riego: "diario", "semanal", "diario", "diario"
`,
            solution: C`
plantas <- data.frame(
  especie = c("Frijol", "Maíz", "Tomate", "Lechuga"),
  altura_cm = c(34, 120, 65, 22),
  riego = c("diario", "semanal", "diario", "diario")
)
cat("Filas:", nrow(plantas), "\n")
cat("Altura promedio:", mean(plantas$altura_cm), "cm\n")
`
        },
        {
            title: 'Filtrar flores de iris',
            description: 'Con el data frame iris (viene con R), muestra cuántas flores tienen pétalos de más de 5 cm (Petal.Length > 5) y el largo promedio del sépalo (Sepal.Length) de esas flores, redondeado a 2 decimales.',
            template: C`
# Filtra iris con iris$Petal.Length > 5
`,
            solution: C`
grandes <- iris[iris$Petal.Length > 5, ]
cat("Flores con pétalos de más de 5 cm:", nrow(grandes), "\n")
cat("Sépalo promedio:", round(mean(grandes$Sepal.Length), 2), "cm\n")
`
        },
        {
            title: 'Columna nueva con ifelse()',
            description: 'Agrega al data frame cultivos una columna crecimiento que diga "rápido" si colonias es 100 o más y "lento" si es menor. Muestra el data frame completo.',
            template: C`
cultivos <- data.frame(cepa = c("A", "B", "C", "D"), colonias = c(120, 85, 100, 40))
# cultivos$crecimiento <- ifelse(...)
`,
            solution: C`
cultivos <- data.frame(cepa = c("A", "B", "C", "D"), colonias = c(120, 85, 100, 40))
cultivos$crecimiento <- ifelse(cultivos$colonias >= 100, "rápido", "lento")
print(cultivos)
`
        },
        {
            title: 'Promedio por grupo',
            description: 'Con el data frame PlantGrowth (viene con R: columnas weight y group), muestra el peso promedio de cada grupo (ctrl, trt1, trt2) usando tapply().',
            template: C`
# tapply(columna_numerica, columna_de_grupos, función)
`,
            solution: C`
print(tapply(PlantGrowth$weight, PlantGrowth$group, mean))
`
        }
    ],
    quiz: [
        { question: '¿Qué estructura de R puede guardar objetos de distinto tipo, incluso vectores de distintas longitudes?', options: ['Una lista', 'Un vector', 'Una matriz', 'Un factor'], correct: 0 },
        { question: '¿Qué condición deben cumplir las columnas de un data frame?', options: ['Tener la misma cantidad de valores', 'Ser todas numéricas', 'Tener el mismo nombre', 'Ser todas de texto'], correct: 0 },
        { question: '¿Cómo se selecciona la columna edad del data frame d?', options: ['d$edad', 'd.edad', 'd(edad)', 'd->edad'], correct: 0 },
        { question: '¿Qué selecciona d[3, ]?', options: ['La fila 3 con todas sus columnas', 'La columna 3', 'El tercer valor de la primera columna', 'Las tres primeras filas'], correct: 0 },
        { question: '¿Qué función muestra el tipo de cada columna de un data frame?', options: ['str()', 'print()', 'levels()', 'class()'], correct: 0 },
        { question: '¿Para qué sirve un factor?', options: ['Para guardar variables categóricas con sus niveles', 'Para multiplicar columnas', 'Para leer archivos', 'Para crear gráficos 3D'], correct: 0 },
        { question: '¿Qué devuelve levels(factor(c("b", "a", "b")))?', options: ['"a" "b"', '"b" "a" "b"', '2', '"b" "a"'], correct: 0 },
        { question: '¿Cómo se filtran las filas de d con peso mayor que 70?', options: ['d[d$peso > 70, ]', 'd[, d$peso > 70]', 'd$peso > 70', 'filter(peso > 70)'], correct: 0 },
        { question: '¿Qué hace tapply(x, grupo, mean)?', options: ['Calcula la media de x para cada grupo', 'Ordena x por grupo', 'Cuenta los grupos', 'Une x con grupo'], correct: 0 },
        { question: '¿Qué conjunto de datos incluido en R tiene medidas de flores de tres especies?', options: ['iris', 'mtcars', 'airquality', 'ChickWeight'], correct: 0 }
    ]
};

modules.io = {
    title: '6. Importar, limpiar y exportar datos',
    description: 'Leer, limpiar y guardar archivos',
    video: YT('agkPSaYEDgQ'),
    additionalVideos: [
        { title: 'Cómo importar datos de Excel a R', url: YT('Bi0PoYq_gjE') },
        { title: 'Importar y exportar datos de Excel en RStudio', url: YT('lLzUX4SDF30') },
        { title: 'Eliminar valores faltantes: na.omit, complete.cases y drop_na', url: YT('RTOGpSNpdGk') },
        { title: 'Manejo de NA en RStudio', url: YT('HcIEI9wVuxY') }
    ],
    content: `
        <h2>Importar, limpiar y exportar datos</h2>
        <p>En investigación los datos llegan en archivos: hojas de Excel, archivos CSV exportados por un equipo de laboratorio o bases públicas. Este módulo te enseña a <b>leerlos</b>, <b>revisarlos</b>, <b>limpiarlos</b> y <b>guardar</b> los resultados.</p>
        <div class="nota info"><b>Datos de práctica ya cargados:</b> <code>pacientes.csv</code>, <code>plantas.csv</code>, <code>crecimiento.csv</code>, <code>fertilizante.csv</code>, <code>genes.csv</code>, <code>clima.csv</code> y <code>estudiantes.csv</code>. Puedes descargarlos en <a href="#/recursos/datosPractica">Datos de práctica</a> o subir los tuyos con el botón <b>Subir</b> del laboratorio.</div>
        <div class="indice">
            <a class="etiqueta" href="#a1">CSV</a><a class="etiqueta" href="#a2">Explorar</a><a class="etiqueta" href="#a3">Excel</a>
            <a class="etiqueta" href="#a4">Faltantes</a><a class="etiqueta" href="#a5">Duplicados</a><a class="etiqueta" href="#a6">Guardar</a><a class="etiqueta" href="#a7">Rutas</a>
        </div>

        <h3 id="a1"><span class="n">1</span>Leer archivos CSV</h3>
        <p>CSV («valores separados por comas») es el formato más usado para compartir datos. <code>read.csv()</code> lo convierte en un data frame:</p>
        ${R`
pacientes <- read.csv("pacientes.csv")
head(pacientes)      # primeras 6 filas
`}
        <div class="tabla-scroll"><table class="tabla">
            <tr><th>Función</th><th>Separador</th><th>Decimal</th><th>Cuándo usarla</th></tr>
            <tr><td><code>read.csv()</code></td><td><code>,</code></td><td><code>.</code></td><td>Formato internacional (el más común).</td></tr>
            <tr><td><code>read.csv2()</code></td><td><code>;</code></td><td><code>,</code></td><td>CSV de Excel en español (Colombia, España).</td></tr>
            <tr><td><code>read.delim()</code></td><td>tabulador</td><td><code>.</code></td><td>Archivos <code>.tsv</code> o <code>.txt</code> de equipos.</td></tr>
        </table></div>
        <div class="nota atencion"><b>¿Todo quedó en una sola columna?</b> Tu archivo usa punto y coma: léelo con <code>read.csv2()</code> o con <code>read.csv("archivo.csv", sep = ";", dec = ",")</code>.</div>

        <h3 id="a2"><span class="n">2</span>Explorar antes de analizar</h3>
        ${R`
pacientes <- read.csv("pacientes.csv")
dim(pacientes)              # filas y columnas
str(pacientes)              # tipo de cada columna
summary(pacientes)          # resumen (incluye NA)
table(pacientes$fumador)
mostrar(head(pacientes, 10))
`}

        <h3 id="a3"><span class="n">3</span>Archivos de Excel</h3>
        <p>El paquete <b>readxl</b> lee archivos <code>.xlsx</code> y <code>.xls</code> sin necesidad de tener Excel. Aquí primero creamos un Excel de ejemplo con <b>writexl</b> y luego lo leemos:</p>
        ${R`
library(writexl)
write_xlsx(iris, "iris.xlsx")           # guardar un data frame como Excel

library(readxl)
flores <- read_excel("iris.xlsx")       # leer la primera hoja
head(flores)
excel_sheets("iris.xlsx")               # nombres de las hojas
`}
        ${RS`
install.packages(c("readxl", "writexl"))   # una sola vez en tu computador
datos <- read_excel("datos/muestreo.xlsx", sheet = "campo", skip = 2)
`}

        <h3 id="a4"><span class="n">4</span>Datos faltantes (NA)</h3>
        <p>Una medición que no se tomó queda como <code>NA</code>. Muchas funciones devuelven <code>NA</code> si hay uno solo: usa <code>na.rm = TRUE</code> o quita las filas incompletas.</p>
        ${R`
pacientes <- read.csv("pacientes.csv")
colSums(is.na(pacientes))                 # NA por columna
mean(pacientes$edad)                      # da NA
mean(pacientes$edad, na.rm = TRUE)        # ignora los NA
sum(complete.cases(pacientes))            # filas sin ningún NA
completos <- na.omit(pacientes)           # quita filas con NA
nrow(completos)
`}

        <h3 id="a5"><span class="n">5</span>Filas repetidas y nombres de columnas</h3>
        ${R`
pacientes <- read.csv("pacientes.csv")
sum(duplicated(pacientes))                # ¿cuántas filas repetidas?
limpios <- unique(na.omit(pacientes))     # sin NA y sin repetidas
nrow(limpios)
names(limpios)[names(limpios) == "presion_sistolica"] <- "pas"   # renombrar una columna
names(limpios)
limpios$imc <- round(limpios$peso_kg / limpios$altura_m^2, 1)   # variable derivada
head(limpios)
`}

        <h3 id="a6"><span class="n">6</span>Guardar resultados</h3>
        ${R`
pacientes <- read.csv("pacientes.csv")
fumadores <- pacientes[pacientes$fumador == "Sí", ]
write.csv(fumadores, "fumadores.csv", row.names = FALSE)   # CSV sin la columna de números de fila
saveRDS(fumadores, "fumadores.rds")                        # formato de R (conserva los tipos)
file.exists("fumadores.csv")
nrow(read.csv("fumadores.csv"))
`}
        <p>Los archivos que crees aparecen en el botón <b><i class="fas fa-folder-open"></i></b> del laboratorio, desde donde puedes descargarlos.</p>

        <h3 id="a7"><span class="n">7</span>Rutas de archivos en RStudio</h3>
        <ul>
            <li>Trabaja dentro de un <b>proyecto</b> y usa rutas relativas: <code>read.csv("datos/pacientes.csv")</code>.</li>
            <li>En Windows usa <code>/</code> o <code>\\\\</code> en las rutas, nunca una sola <code>\\</code>: <code>"C:/Users/ana/datos.csv"</code>.</li>
            <li>El botón <b>Import Dataset</b> del panel Environment genera el código de lectura por ti.</li>
        </ul>
        ${RS`
datos <- read.csv(file.choose())     # abre una ventana para elegir el archivo
View(datos)                          # ver la tabla como hoja de cálculo
`}
    `,
    colabContent: `
        <h2>Importar datos en RStudio paso a paso</h2>
        <ol>
            <li>Crea (o abre) tu proyecto <code>curso_R</code> y una carpeta <code>datos</code>.</li>
            <li>Descarga <code>pacientes.csv</code> desde <a href="#/recursos/datosPractica">Datos de práctica</a> y guárdalo en <code>datos/</code>.</li>
            <li>En un script nuevo escribe y ejecuta:</li>
        </ol>
        ${RS`
pacientes <- read.csv("datos/pacientes.csv")
View(pacientes)
summary(pacientes)
limpios <- unique(na.omit(pacientes))
write.csv(limpios, "datos/pacientes_limpios.csv", row.names = FALSE)
`}
        <div class="nota consejo"><b>Desde Excel:</b> «Archivo → Guardar como → CSV UTF-8 (delimitado por comas)». Si tu Excel está en español puede guardarlo con punto y coma: léelo con <code>read.csv2()</code>.</div>
    `,
    exercises: [
        {
            title: 'Dimensiones de una base de datos',
            description: 'Lee pacientes.csv y muestra con cat() cuántas filas y cuántas columnas tiene, y la edad promedio (ignorando los NA) redondeada a 1 decimal.',
            template: C`
pacientes <- read.csv("pacientes.csv")
# filas, columnas y edad promedio
`,
            solution: C`
pacientes <- read.csv("pacientes.csv")
cat("Filas:", nrow(pacientes), "\n")
cat("Columnas:", ncol(pacientes), "\n")
cat("Edad promedio:", round(mean(pacientes$edad, na.rm = TRUE), 1), "\n")
`
        },
        {
            title: 'Auditoría de datos faltantes',
            description: 'Lee pacientes.csv y muestra el número de NA de cada columna (colSums(is.na())) y cuántas filas están completas (complete.cases()).',
            template: C`
pacientes <- read.csv("pacientes.csv")
`,
            solution: C`
pacientes <- read.csv("pacientes.csv")
print(colSums(is.na(pacientes)))
cat("Filas completas:", sum(complete.cases(pacientes)), "\n")
`
        },
        {
            title: 'Limpieza completa',
            description: 'Lee pacientes.csv, cuenta las filas repetidas, crea limpios sin NA ni filas repetidas y muestra cuántas filas quedaron.',
            template: C`
pacientes <- read.csv("pacientes.csv")
# duplicated(), na.omit(), unique()
`,
            solution: C`
pacientes <- read.csv("pacientes.csv")
cat("Filas repetidas:", sum(duplicated(pacientes)), "\n")
limpios <- unique(na.omit(pacientes))
cat("Filas después de limpiar:", nrow(limpios), "\n")
`
        },
        {
            title: 'Guardar un subconjunto',
            description: 'De estudiantes.csv, guarda en medicina.csv solo los estudiantes del programa "Medicina" (sin números de fila). Luego lee medicina.csv y muestra cuántas filas tiene.',
            template: C`
estudiantes <- read.csv("estudiantes.csv")
# filtra, write.csv(..., row.names = FALSE) y vuelve a leer
`,
            solution: C`
estudiantes <- read.csv("estudiantes.csv")
medicina <- estudiantes[estudiantes$programa == "Medicina", ]
write.csv(medicina, "medicina.csv", row.names = FALSE)
cat("Estudiantes de Medicina guardados:", nrow(read.csv("medicina.csv")), "\n")
`
        }
    ],
    quiz: [
        { question: '¿Qué función lee un CSV separado por comas con punto decimal?', options: ['read.csv()', 'read.csv2()', 'read_excel()', 'readRDS()'], correct: 0 },
        { question: 'Un CSV de Excel en español usa ; como separador y , como decimal. ¿Con qué función se lee?', options: ['read.csv2()', 'read.csv()', 'read.delim()', 'readLines()'], correct: 0 },
        { question: '¿Qué paquete lee archivos .xlsx?', options: ['readxl', 'ggplot2', 'dplyr', 'shiny'], correct: 0 },
        { question: '¿Qué devuelve mean(c(4, NA, 6))?', options: ['NA', '5', '3.33', 'Error'], correct: 0 },
        { question: '¿Cómo se calcula la media ignorando los NA?', options: ['mean(x, na.rm = TRUE)', 'mean(na.omit = x)', 'mean(x, NA = FALSE)', 'mean(!is.na)'], correct: 0 },
        { question: '¿Qué hace na.omit(datos)?', options: ['Quita las filas que tienen algún NA', 'Reemplaza los NA por 0', 'Cuenta los NA', 'Quita las columnas con NA'], correct: 0 },
        { question: '¿Qué función detecta filas repetidas?', options: ['duplicated()', 'unique.rows()', 'repeat()', 'copies()'], correct: 0 },
        { question: '¿Para qué sirve row.names = FALSE en write.csv()?', options: ['Para no guardar la columna con los números de fila', 'Para no guardar los nombres de las columnas', 'Para guardar sin comas', 'Para ordenar las filas'], correct: 0 },
        { question: '¿Qué ruta de Windows funciona en R?', options: ['"C:/Users/ana/datos.csv"', '"C:\\Users\\ana\\datos.csv" con una sola barra invertida', 'C:/Users/ana/datos.csv sin comillas', '"C:|Users|ana|datos.csv"'], correct: 0 },
        { question: '¿Qué formato guarda un objeto de R conservando sus tipos de datos?', options: ['.rds (saveRDS)', '.csv', '.txt', '.pdf'], correct: 0 }
    ]
};
