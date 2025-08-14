// Consolidated modules data
const modules = {
    intro: {
        title: "1. Introducción a R",
        description: "¿Qué es R y por qué usarlo?",
        video: "https://www.youtube.com/embed/_V8eKsto3Ug",
        additionalVideos: [
            { title: "R Programming Tutorial - Learn R", url: "https://www.youtube.com/embed/fDRa82lxzaU" },
            { title: "Getting started with R", url: "https://www.youtube.com/embed/YBAWVNWiZlU" },
            { title: "Intro to R - R-Coder.com", url: "https://www.youtube.com/embed/SWxoJqTqo08" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">¿Qué es R?</h2>
            <p class="theme-text-secondary mb-4">R es un lenguaje de programación y un entorno de software libre para computación estadística y gráficos. Es ampliamente utilizado entre estadísticos, científicos de datos y analistas para el análisis de datos y desarrollo de software estadístico.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">¿Por qué R?</h3>
            <ul class="list-disc list-inside theme-text-secondary space-y-2 mb-6">
                <li>Especializado en estadística y análisis de datos</li>
                <li>Excelente para visualización de datos</li>
                <li>Amplia comunidad científica y académica</li>
                <li>Miles de paquetes especializados (CRAN)</li>
                <li>Reproducibilidad en investigación</li>
                <li>Integración con RStudio</li>
            </ul>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Aplicaciones de R</h3>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Bioinformática</h4>
                    <p class="text-sm theme-text-secondary">Bioconductor, análisis genómico</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Estadística</h4>
                    <p class="text-sm theme-text-secondary">Análisis estadístico, modelos</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Visualización</h4>
                    <p class="text-sm theme-text-secondary">ggplot2, plotly, shiny</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Machine Learning</h4>
                    <p class="text-sm theme-text-secondary">caret, randomForest, tidymodels</p>
                </div>
            </div>
            
            <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 ¿Sabías que?</h4>
                <p class="text-sm text-blue-700 dark:text-blue-300">R fue creado por Ross Ihaka y Robert Gentleman en la Universidad de Auckland, Nueva Zelanda. El nombre "R" proviene de las iniciales de sus creadores y también es una referencia al lenguaje S.</p>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🚀 Práctica con R en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Experimenta con estos ejercicios prácticos en Google Colab usando R. Cada bloque de código está diseñado para ayudarte a entender mejor R.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab
                    </button>
                    <p class="text-xs theme-text-secondary mt-2">💡 Tip: Crea un nuevo notebook y selecciona R como runtime</p>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📝 Ejercicio 1: Tu primer programa en R</h5>
                        <p class="text-sm theme-text-secondary mb-3">Copia y pega este código en Google Colab:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Mi primer programa en R<br>
print("¡Hola, mundo desde Google Colab!")<br>
print("R es increíble para análisis de datos")<br>
print("¡Estoy aprendiendo R!")<br><br>
# Verificar la versión de R<br>
R.version.string</code>
                        </div>
                        <p class="text-sm theme-text-secondary">Presiona <kbd>Shift + Enter</kbd> para ejecutar</p>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🎯 Ejercicio 2: Variables y vectores</h5>
                        <p class="text-sm theme-text-secondary mb-3">Personaliza este código con tu información:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Personaliza tu información<br>
nombre <- "Tu nombre aquí"<br>
edad <- 20<br>
ciudad <- "Tu ciudad"<br>
lenguaje_favorito <- "R"<br><br>
# Imprimir información<br>
cat("Hola, soy", nombre, "\n")<br>
cat("Tengo", edad, "años\n")<br>
cat("Vivo en", ciudad, "\n")<br>
cat("Mi lenguaje favorito es", lenguaje_favorito, "\n")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🎨 Ejercicio 3: R como calculadora</h5>
                        <p class="text-sm theme-text-secondary mb-3">Explora las operaciones matemáticas básicas:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># R como calculadora<br>
cat("=== Operaciones Básicas ===\n")<br>
cat("2 + 3 =", 2 + 3, "\n")<br>
cat("10 - 4 =", 10 - 4, "\n")<br>
cat("6 * 7 =", 6 * 7, "\n")<br>
cat("15 / 3 =", 15 / 3, "\n")<br>
cat("2 ^ 8 =", 2 ^ 8, "\n")<br>
cat("17 %% 5 =", 17 %% 5, "\n")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📊 Ejercicio 4: Tu primer gráfico</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crea una visualización simple:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Mi primer gráfico en R<br>
x <- 1:10<br>
y <- x^2<br><br>
plot(x, y, type="b", <br>
     main="Mi primer gráfico en R",<br>
     xlab="Valores X", ylab="Valores Y",<br>
     col="blue", pch=19)</code>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Tu primer programa",
                description: "Escribe un programa que imprima 'Hola, mundo!'",
                template: "# Escribe tu código aquí\nprint('Hola, mundo!')",
                solution: "print('Hola, mundo!')"
            },
            {
                title: "Variables básicas",
                description: "Crea una variable con tu nombre y muéstrala",
                template: "# Crea una variable llamada 'nombre' con tu nombre\n# Luego imprímela\n",
                solution: "nombre = 'Tu nombre'\nprint(nombre)"
            },
            {
                title: "Separadores en print()",
                description: "Practica con diferentes separadores en la función print().",
                template: "print(\"=== SEPARADORES EN PRINT() ===\")\n    \n    nombre = \"Juan\"\n    \n    # Separador por defecto (espacio)\n    print(\"Separador por defecto:\")\n    print(\"Hola\", nombre, \"!\")\n    print(\"Por defecto, print() usa un espacio como separador\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Sin separador (cadena vacía)\n    print(\"Sin separador (sep=''):\")\n    print(\"Hola\", nombre, \"!\", sep=\"\")\n    print(\"Al usar sep='', las palabras se pegan sin espacio\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Separador personalizado con asteriscos\n    print(\"Separador personalizado (sep='***'):\")\n    print(\"Hola\", nombre, \"!\", sep=\"***\")\n    print(\"Podemos usar cualquier cadena como separador\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Más ejemplos de separadores creativos\n    print(\"Otros separadores creativos:\")\n    print(\"Python\", \"es\", \"genial\", sep=\" -> \" )\n    print(\"A\", \"B\", \"C\", sep=\" | \" )\n    print(\"1\", \"2\", \"3\", sep=\"-\")\n    print(\"Palabra1\", \"Palabra2\", \"Palabra3\", sep=\"___\")",
                solution: "print(\"=== SEPARADORES EN PRINT() ===\")\n    \n    nombre = \"Juan\"\n    \n    # Separador por defecto (espacio)\n    print(\"Separador por defecto:\")\n    print(\"Hola\", nombre, \"!\")\n    print(\"Por defecto, print() usa un espacio como separador\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Sin separador (cadena vacía)\n    print(\"Sin separador (sep=''):\")\n    print(\"Hola\", nombre, \"!\", sep=\"\")\n    print(\"Al usar sep='', las palabras se pegan sin espacio\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Separador personalizado con asteriscos\n    print(\"Separador personalizado (sep='***'):\")\n    print(\"Hola\", nombre, \"!\", sep=\"***\")\n    print(\"Podemos usar cualquier cadena como separador\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Más ejemplos de separadores creativos\n    print(\"Otros separadores creativos:\")\n    print(\"Python\", \"es\", \"genial\", sep=\" -> \" )\n    print(\"A\", \"B\", \"C\", sep=\" | \" )\n    print(\"1\", \"2\", \"3\", sep=\"-\")\n    print(\"Palabra1\", \"Palabra2\", \"Palabra3\", sep=\"___\")"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es una característica principal de Python?",
                options: ["Sintaxis compleja", "Legibilidad del código", "Solo para web", "Difícil de aprender"],
                correct: 1
            },
            {
                question: "¿Python es un lenguaje interpretado?",
                options: ["Sí", "No", "A veces", "Depende del sistema"],
                correct: 0
            },
            {
                question: "¿Quién creó el lenguaje Python?",
                options: ["James Gosling", "Guido van Rossum", "Brendan Eich", "Dennis Ritchie"],
                correct: 1
            },
            {
                question: "¿En qué año fue lanzado por primera vez Python?",
                options: ["1989", "1991", "1995", "2000"],
                correct: 1
            },
            {
                question: "¿Cuál es la extensión de archivo para scripts de Python?",
                options: [".py", ".python", ".pt", ".pyt"],
                correct: 0
            },
            {
                question: "¿Python es sensible a mayúsculas y minúsculas?",
                options: ["Sí", "No", "Solo en funciones", "Solo en variables"],
                correct: 0
            },
            {
                question: "¿Cuál de estos NO es un tipo de dato básico en Python?",
                options: ["int", "float", "string", "char"],
                correct: 3
            },
            {
                question: "¿Qué significa que Python sea multiplataforma?",
                options: ["Solo funciona en Windows", "Funciona en diferentes sistemas operativos", "Solo funciona en Linux", "Necesita compilación específica"],
                correct: 1
            },
            {
                question: "¿Cuál es el paradigma principal de programación que soporta Python?",
                options: ["Solo orientado a objetos", "Solo funcional", "Multiparadigma", "Solo procedural"],
                correct: 2
            },
            {
                question: "¿Python utiliza llaves {} para delimitar bloques de código?",
                options: ["Sí, siempre", "No, usa indentación", "Solo en funciones", "Solo en clases"],
                correct: 1
            }
        ]
    },
    
    installation: {
        title: "2. Instalación de R y RStudio",
        description: "Configuración del entorno",
        video: "https://www.youtube.com/embed/TFGYlKvQEQ4",
        additionalVideos: [
            { title: "Installing R on Windows", url: "https://www.youtube.com/embed/mfGFv-iB724" },
            { title: "R and RStudio Setup", url: "https://www.youtube.com/embed/D6CunpqF04E" },
            { title: "Install R and RStudio on Linux Ubuntu", url: "https://www.youtube.com/embed/CnhP6xbOwck" },
            { title: "R Installation Linux Tutorial", url: "https://www.youtube.com/embed/YrEe2TLr3MI" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Instalación de R y RStudio</h2>
            <p class="theme-text-secondary mb-4">Para empezar con R necesitas instalar dos componentes: R (el lenguaje) y RStudio (el entorno de desarrollo integrado).</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Paso 1: Instalar R</h3>
            <div class="space-y-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Windows</h4>
                    <p class="text-sm theme-text-secondary mb-2">1. Ve a <a href="https://cran.r-project.org/" class="text-blue-500 hover:underline" target="_blank">cran.r-project.org</a></p>
                    <p class="text-sm theme-text-secondary mb-2">2. Haz clic en "Download R for Windows"</p>
                    <p class="text-sm theme-text-secondary">3. Descarga e instala la versión más reciente</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">macOS</h4>
                    <p class="text-sm theme-text-secondary mb-2">1. Ve a <a href="https://cran.r-project.org/" class="text-blue-500 hover:underline" target="_blank">cran.r-project.org</a></p>
                    <p class="text-sm theme-text-secondary">2. Haz clic en "Download R for macOS" y sigue las instrucciones</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Linux</h4>
                    <div class="space-y-3">
                        <div>
                            <p class="text-sm font-medium theme-text-primary mb-1">Ubuntu/Debian:</p>
                            <div class="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono">
                                # Actualizar repositorios<br>
                                sudo apt update<br><br>
                                # Instalar R base<br>
                                sudo apt install r-base<br><br>
                                # Instalar herramientas de desarrollo (recomendado)<br>
                                sudo apt install r-base-dev
                            </div>
                        </div>
                        <div>
                            <p class="text-sm font-medium theme-text-primary mb-1">CentOS/RHEL/Fedora:</p>
                            <div class="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono">
                                # Fedora<br>
                                sudo dnf install R<br><br>
                                # CentOS/RHEL (habilitar EPEL primero)<br>
                                sudo yum install epel-release<br>
                                sudo yum install R
                            </div>
                        </div>
                        <div>
                            <p class="text-sm font-medium theme-text-primary mb-1">Arch Linux:</p>
                            <div class="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono">
                                sudo pacman -S r
                            </div>
                        </div>
                        <div>
                            <p class="text-sm font-medium theme-text-primary mb-1">openSUSE:</p>
                            <div class="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono">
                                sudo zypper install R-base R-base-devel
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Paso 2: Instalar RStudio</h3>
            <div class="space-y-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Windows y macOS</h4>
                    <p class="text-sm theme-text-secondary mb-2">1. Ve a <a href="https://rstudio.com/products/rstudio/download/" class="text-blue-500 hover:underline" target="_blank">rstudio.com</a></p>
                    <p class="text-sm theme-text-secondary mb-2">2. Descarga RStudio Desktop (versión gratuita)</p>
                    <p class="text-sm theme-text-secondary">3. Ejecuta el instalador y sigue las instrucciones</p>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Linux</h4>
                    <div class="space-y-3">
                        <div>
                            <p class="text-sm font-medium theme-text-primary mb-1">Ubuntu/Debian (.deb):</p>
                            <div class="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono">
                                # Descargar el paquete .deb desde rstudio.com<br>
                                wget https://download1.rstudio.org/electron/jammy/amd64/rstudio-2023.12.1-402-amd64.deb<br><br>
                                # Instalar<br>
                                sudo dpkg -i rstudio-2023.12.1-402-amd64.deb<br><br>
                                # Resolver dependencias si es necesario<br>
                                sudo apt-get install -f
                            </div>
                        </div>
                        <div>
                            <p class="text-sm font-medium theme-text-primary mb-1">CentOS/RHEL/Fedora (.rpm):</p>
                            <div class="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono">
                                # Descargar el paquete .rpm<br>
                                wget https://download1.rstudio.org/electron/centos7/x86_64/rstudio-2023.12.1-402-x86_64.rpm<br><br>
                                # Instalar<br>
                                sudo rpm -i rstudio-2023.12.1-402-x86_64.rpm
                            </div>
                        </div>
                        <div>
                            <p class="text-sm font-medium theme-text-primary mb-1">Arch Linux (AUR):</p>
                            <div class="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono">
                                # Usando yay (AUR helper)<br>
                                yay -S rstudio-desktop<br><br>
                                # O usando makepkg manualmente<br>
                                git clone https://aur.archlinux.org/rstudio-desktop.git<br>
                                cd rstudio-desktop<br>
                                makepkg -si
                            </div>
                        </div>
                        <div class="p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-700">
                            <p class="text-xs text-blue-700 dark:text-blue-300">💡 <strong>Tip:</strong> Verifica la versión más reciente en el sitio oficial de RStudio antes de descargar.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Verificar la Instalación</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <p class="text-sm theme-text-secondary mb-2">Abre RStudio y ejecuta:</p>
                <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                    R.version.string<br>
                    > [1] "R version 4.x.x ..."
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Troubleshooting en Linux</h3>
            <div class="space-y-3 mb-6">
                <div class="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                    <h5 class="font-medium text-yellow-800 dark:text-yellow-200 mb-1">Problema: Dependencias faltantes</h5>
                    <p class="text-xs text-yellow-700 dark:text-yellow-300 mb-2">Si RStudio no inicia, instala las dependencias:</p>
                    <div class="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono">
                        sudo apt install libnss3 libatk-bridge2.0-0 libdrm2 libxcomposite1 libxdamage1 libxrandr2 libgbm1 libxss1 libasound2
                    </div>
                </div>
                
                <div class="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                    <h5 class="font-medium text-yellow-800 dark:text-yellow-200 mb-1">Problema: Error de permisos</h5>
                    <p class="text-xs text-yellow-700 dark:text-yellow-300 mb-2">Si tienes problemas de permisos con bibliotecas:</p>
                    <div class="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono">
                        # Crear directorio personal para bibliotecas<br>
                        mkdir -p ~/R/library<br>
                        echo 'R_LIBS_USER="~/R/library"' >> ~/.Renviron
                    </div>
                </div>
                
                <div class="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                    <h5 class="font-medium text-yellow-800 dark:text-yellow-200 mb-1">Alternativa: R desde terminal</h5>
                    <p class="text-xs text-yellow-700 dark:text-yellow-300 mb-2">Si RStudio no funciona, siempre puedes usar R desde terminal:</p>
                    <div class="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono">
                        # Abrir R en terminal<br>
                        R<br><br>
                        # Salir de R<br>
                        q()
                    </div>
                </div>
            </div>
            
            <div class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">✅ ¡Listo!</h4>
                <p class="text-sm text-green-700 dark:text-green-300">Una vez instalado, tendrás acceso a la consola de R, editor de scripts, visualizador de gráficos y gestor de paquetes, todo integrado en RStudio.</p>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🐍 Intérprete de Python en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Explora las características del intérprete de Python directamente en Colab.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🔍 Ejercicio 1: Información del intérprete</h5>
                        <p class="text-sm theme-text-secondary mb-3">Descubre detalles sobre el intérprete de Python:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code>import sys<br>
import platform<br>
<br>
print("🐍 INFORMACIÓN DEL INTÉRPRETE DE PYTHON")<br>
print("=" * 45)<br>
print(f"Versión de Python: {sys.version}")<br>
print(f"Versión corta: {sys.version_info}")<br>
print(f"Plataforma: {platform.platform()}")<br>
print(f"Arquitectura: {platform.architecture()}")<br>
print(f"Directorio ejecutable: {sys.executable}")<br>
print(f"Path de Python: {sys.path[:3]}...")  # Primeros 3 elementos<br>
<br>
# Información del sistema<br>
print(f"\\nSistema operativo: {platform.system()}")<br>
print(f"Nombre del equipo: {platform.node()}")<br>
print(f"Procesador: {platform.processor()}")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">⚙️ Ejercicio 2: Configuración del intérprete</h5>
                        <p class="text-sm theme-text-secondary mb-3">Explora la configuración y módulos disponibles:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Módulos incorporados<br>
import sys<br>
<br>
print("📦 MÓDULOS INCORPORADOS")<br>
print("=" * 30)<br>
builtin_modules = sorted(sys.builtin_module_names)<br>
print(f"Total de módulos incorporados: {len(builtin_modules)}")<br>
print("\\nPrimeros 10 módulos:")<br>
for i, module in enumerate(builtin_modules[:10]):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"{i+1:2d}. {module}")<br>
<br>
# Configuración de codificación<br>
print(f"\\n🔤 CODIFICACIÓN")<br>
print("=" * 20)<br>
print(f"Codificación por defecto: {sys.getdefaultencoding()}")<br>
print(f"Codificación del sistema: {sys.getfilesystemencoding()}")<br>
<br>
# Límites del sistema<br>
print(f"\\n📊 LÍMITES DEL SISTEMA")<br>
print("=" * 25)<br>
print(f"Recursión máxima: {sys.getrecursionlimit()}")<br>
print(f"Tamaño máximo de int: {sys.maxsize}")</code>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Verificar versión",
                description: "Usa el comando para verificar la versión de Python",
                template: "# Ejecuta este código para ver la versión de Python\nimport sys\nprint(sys.version)",
                solution: "import sys\nprint(sys.version)"
            }
        ],
        quiz: [
            {
                question: "¿Cómo se inicia el intérprete interactivo de Python?",
                options: ["python", "py", "python3", "Todas las anteriores"],
                correct: 3
            },
            {
                question: "¿Qué comando se usa para salir del intérprete de Python?",
                options: ["exit", "quit()", "exit()", "Todas las anteriores"],
                correct: 3
            },
            {
                question: "¿Cómo se ejecuta un archivo Python desde la línea de comandos?",
                options: ["python archivo.py", "run archivo.py", "exec archivo.py", "start archivo.py"],
                correct: 0
            },
            {
                question: "¿Qué son los prompts >>> y ... en el intérprete?",
                options: ["Errores de sintaxis", "Indicadores de entrada primaria y secundaria", "Comandos especiales", "Decoradores"],
                correct: 1
            },
            {
                question: "¿Cómo se verifica la versión de Python instalada?",
                options: ["python --version", "python -V", "python --v", "Opciones A y B son correctas"],
                correct: 3
            },
            {
                question: "¿Qué variable contiene la ruta donde está instalado Python?",
                options: ["sys.path", "sys.executable", "os.path", "python.path"],
                correct: 1
            },
            {
                question: "¿Cómo se accede al historial de comandos en el intérprete?",
                options: ["Flechas arriba/abajo", "history()", "Ctrl+H", "No es posible"],
                correct: 0
            },
            {
                question: "¿Qué hace el comando help() en el intérprete?",
                options: ["Cierra Python", "Muestra ayuda interactiva", "Lista archivos", "Limpia pantalla"],
                correct: 1
            },
            {
                question: "¿Qué variable especial contiene el resultado de la última expresión en el intérprete?",
                options: ["_last", "_", "__result__", "result"],
                correct: 1
            },
            {
                question: "¿Cómo se ejecuta código Python de forma interactiva desde un archivo?",
                options: ["python -i archivo.py", "python -interactive archivo.py", "python archivo.py -i", "interactive archivo.py"],
                correct: 0
            }
        ]
    },
    
    "control-flow": {
        title: "4. Control de Flujo",
        description: "if, for, while, funciones",
        video: "https://www.youtube.com/embed/9Os0o3wzS_I",
        additionalVideos: [
            { title: "Condicionales en Python", url: "https://www.youtube.com/embed/f79MRyMsjrQ" },
            { title: "Bucles en Python", url: "https://www.youtube.com/embed/6iF8Xb7Z3wQ" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Control de Flujo en Python</h2>
            <p class="theme-text-secondary mb-4">Las herramientas de control de flujo permiten controlar el orden en que se ejecutan las instrucciones de tu programa.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Sentencias if</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    x = int(input("Por favor ingresa un entero: "))<br>
                    if x < 0:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;x = 0<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print('Negativo cambiado a cero')<br>
                    elif x == 0:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print('Cero')<br>
                    elif x == 1:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print('Uno')<br>
                    else:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print('Más')
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Sentencias for</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # Midiendo strings<br>
                    palabras = ['gato', 'ventana', 'defenestrar']<br>
                    for w in palabras:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(w, len(w))<br><br>
                    
                    # La función range()<br>
                    for i in range(5):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(i)
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Sentencias while</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    a, b = 0, 1<br>
                    while a < 10:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(a)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;a, b = b, a+b
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Definiendo Funciones</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    def fibonacci(n):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"""Escribe la serie de Fibonacci hasta n."""<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;a, b = 0, 1<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;while a < n:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(a, end=' ')<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a, b = b, a+b<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print()<br><br>
                    
                    # Llamando la función<br>
                    fibonacci(100)
                </code>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🔀 Control de Flujo en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Domina if, for, while y funciones con ejemplos prácticos y ejercicios interactivos.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🤔 Ejercicio 1: Condicionales avanzadas</h5>
                        <p class="text-sm theme-text-secondary mb-3">Practica con if, elif y else:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Clasificador de edades<br>
def clasificar_edad(edad):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if edad < 0:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Edad inválida"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif edad < 13:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Niño"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif edad < 18:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Adolescente"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif edad < 65:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Adulto"<br>
&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Adulto mayor"<br>
<br>
# Probar diferentes edades<br>
edades = [5, 15, 25, 70, -5]<br>
for edad in edades:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Edad {edad}: {clasificar_edad(edad)}")<br>
<br>
# Calculadora de notas<br>
def calcular_nota(puntos):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if puntos >= 90:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "A"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif puntos >= 80:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "B"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif puntos >= 70:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "C"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif puntos >= 60:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "D"<br>
&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "F"<br>
<br>
puntuaciones = [95, 87, 73, 65, 45]<br>
for puntos in puntuaciones:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"{puntos} puntos = Nota {calcular_nota(puntos)}")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🔄 Ejercicio 2: Bucles y patrones</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crea patrones y secuencias con bucles:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Patrones con bucles<br>
print("=== Patrón de estrellas ===")<br>
for i in range(1, 6):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("*" * i)<br>
<br>
print("\\n=== Tabla de multiplicar ===")<br>
numero = 7<br>
for i in range(1, 11):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"{numero} x {i} = {numero * i}")<br>
<br>
print("\\n=== Números pares del 1 al 20 ===")<br>
pares = []<br>
for i in range(1, 21):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if i % 2 == 0:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pares.append(i)<br>
print(f"Números pares: {pares}")<br>
<br>
print("\\n=== Countdown ===")<br>
for i in range(10, 0, -1):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Faltan {i} segundos")<br>
print("¡Tiempo!")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🎯 Ejercicio 3: Funciones prácticas</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crea funciones útiles para resolver problemas:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Funciones útiles<br>
def es_primo(n):<br>
&nbsp;&nbsp;&nbsp;&nbsp;"""Verifica si un número es primo"""<br>
&nbsp;&nbsp;&nbsp;&nbsp;if n < 2:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False<br>
&nbsp;&nbsp;&nbsp;&nbsp;for i in range(2, int(n**0.5) + 1):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if n % i == 0:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False<br>
&nbsp;&nbsp;&nbsp;&nbsp;return True<br>
<br>
def factorial(n):<br>
&nbsp;&nbsp;&nbsp;&nbsp;"""Calcula el factorial de un número"""<br>
&nbsp;&nbsp;&nbsp;&nbsp;if n <= 1:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 1<br>
&nbsp;&nbsp;&nbsp;&nbsp;return n * factorial(n - 1)<br>
<br>
def fibonacci(n):<br>
&nbsp;&nbsp;&nbsp;&nbsp;"""Genera los primeros n números de Fibonacci"""<br>
&nbsp;&nbsp;&nbsp;&nbsp;if n <= 0:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return []<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif n == 1:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return [0]<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif n == 2:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return [0, 1]<br>
&nbsp;&nbsp;&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;fib = [0, 1]<br>
&nbsp;&nbsp;&nbsp;&nbsp;for i in range(2, n):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fib.append(fib[i-1] + fib[i-2])<br>
&nbsp;&nbsp;&nbsp;&nbsp;return fib<br>
<br>
# Probar las funciones<br>
print("Números primos del 1 al 20:")<br>
primos = [i for i in range(1, 21) if es_primo(i)]<br>
print(primos)<br>
<br>
print(f"\\nFactorial de 5: {factorial(5)}")<br>
print(f"Primeros 10 números de Fibonacci: {fibonacci(10)}")</code>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Número par o impar",
                description: "Escribe un programa que determine si un número es par o impar",
                template: "# Pide un número al usuario y determina si es par o impar\nnumero = int(input('Ingresa un número: '))\n# Tu código aquí",
                solution: "numero = int(input('Ingresa un número: '))\nif numero % 2 == 0:\n    print('El número es par')\nelse:\n    print('El número es impar')"
            },
            {
                title: "Tabla de multiplicar",
                description: "Crea una función que imprima la tabla de multiplicar de un número",
                template: "def tabla_multiplicar(numero):\n    # Tu código aquí\n    pass\n\n# Llama la función\ntabla_multiplicar(5)",
                solution: "def tabla_multiplicar(numero):\n    for i in range(1, 11):\n        print(f'{numero} x {i} = {numero * i}')\n\ntabla_multiplicar(5)"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la palabra clave para una condición alternativa en Python?",
                options: ["else", "elif", "elseif", "alternative"],
                correct: 1
            },
            {
                question: "¿Qué función usas para generar una secuencia de números?",
                options: ["sequence()", "range()", "numbers()", "generate()"],
                correct: 1
            },
            {
                question: "¿Cómo se define una función en Python?",
                options: ["function nombre():", "def nombre():", "func nombre():", "define nombre():"],
                correct: 1
            },
            {
                question: "¿Cuál es la diferencia entre while y for en Python?",
                options: ["No hay diferencia", "while es para condiciones, for para iteraciones", "for es más rápido", "while solo acepta números"],
                correct: 1
            },
            {
                question: "¿Qué hace la palabra clave 'break' en un bucle?",
                options: ["Pausa el bucle", "Termina el bucle completamente", "Salta a la siguiente iteración", "Imprime un mensaje"],
                correct: 1
            },
            {
                question: "¿Qué hace la palabra clave 'continue' en un bucle?",
                options: ["Termina el bucle", "Salta a la siguiente iteración", "Pausa por un segundo", "Reinicia el bucle"],
                correct: 1
            },
            {
                question: "¿Cómo se define un parámetro por defecto en una función?",
                options: ["def func(param default value):", "def func(param = value):", "def func(param: value):", "def func(param -> value):"],
                correct: 1
            },
            {
                question: "¿Qué devuelve una función que no tiene return explícito?",
                options: ["0", "''", "None", "Error"],
                correct: 2
            },
            {
                question: "¿Cuál es la sintaxis correcta para un if anidado?",
                options: ["if-then-else", "if: elif: else:", "if-elseif-else", "Todas son correctas"],
                correct: 1
            },
            {
                question: "¿Cómo se itera sobre los índices y valores de una lista?",
                options: ["for i, v in list:", "for i, v in enumerate(list):", "for i, v in index(list):", "for i, v in range(list):"],
                correct: 1
            }
        ]
    },
    
    "data-structures": {
        title: "5. Estructuras de Datos",
        description: "Listas, tuplas, diccionarios",
        video: "https://www.youtube.com/embed/R-HLU9Fl5ug",
        additionalVideos: [
            { title: "Listas en Python", url: "https://www.youtube.com/embed/ohCDWZgNIU0" },
            { title: "Diccionarios en Python", url: "https://www.youtube.com/embed/XCcpzWs-CI4" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Estructuras de Datos</h2>
            <p class="theme-text-secondary mb-4">Python incluye varias estructuras de datos built-in muy útiles: listas, tuplas, diccionarios y conjuntos.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Listas</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    frutas = ['naranja', 'manzana', 'pera', 'banana', 'kiwi']<br>
                    frutas.append('uva')  # Agregar elemento<br>
                    frutas.insert(1, 'fresa')  # Insertar en posición<br>
                    frutas.remove('pera')  # Eliminar elemento<br>
                    print(frutas[0])  # Primer elemento<br>
                    print(frutas[-1])  # Último elemento
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Métodos de Listas</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Agregar elementos</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>append() - Al final</li>
                        <li>insert() - En posición</li>
                        <li>extend() - Múltiples elementos</li>
                    </ul>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Eliminar elementos</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>remove() - Por valor</li>
                        <li>pop() - Por índice</li>
                        <li>clear() - Todos</li>
                    </ul>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Tuplas</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    t = 12345, 54321, 'hola!'<br>
                    print(t[0])  # 12345<br>
                    print(t)     # (12345, 54321, 'hola!')<br><br>
                    
                    # Las tuplas son inmutables<br>
                    x, y, z = t  # Desempaquetado
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Diccionarios</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    tel = {'jack': 4098, 'sape': 4139}<br>
                    tel['guido'] = 4127<br>
                    print(tel)  # {'jack': 4098, 'sape': 4139, 'guido': 4127}<br>
                    print(tel['jack'])  # 4098<br>
                    del tel['sape']<br>
                    print(list(tel.keys()))  # ['jack', 'guido']
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Conjuntos (Sets)</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    cesta = {'manzana', 'naranja', 'manzana', 'pera', 'naranja', 'banana'}<br>
                    print(cesta)  # {'naranja', 'banana', 'pera', 'manzana'}<br><br>
                    
                    a = set('abracadabra')<br>
                    b = set('alacazam')<br>
                    print(a - b)  # Diferencia<br>
                    print(a | b)  # Unión
                </code>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">📊 Estructuras de Datos en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Domina listas, tuplas, diccionarios y conjuntos con ejercicios prácticos inspirados en casos reales.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📝 Ejercicio 1: Sistema de gestión de estudiantes</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crea un sistema para gestionar información de estudiantes:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Sistema de gestión de estudiantes<br>
estudiantes = []<br>
<br>
# Agregar estudiantes<br>
estudiantes.append({<br>
&nbsp;&nbsp;&nbsp;&nbsp;"nombre": "Ana García",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"edad": 20,<br>
&nbsp;&nbsp;&nbsp;&nbsp;"carrera": "Ingeniería",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"calificaciones": [85, 92, 78, 88, 90]<br>
})<br>
<br>
estudiantes.append({<br>
&nbsp;&nbsp;&nbsp;&nbsp;"nombre": "Carlos López",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"edad": 19,<br>
&nbsp;&nbsp;&nbsp;&nbsp;"carrera": "Medicina",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"calificaciones": [92, 87, 95, 89, 91]<br>
})<br>
<br>
# Funciones de análisis<br>
def calcular_promedio(calificaciones):<br>
&nbsp;&nbsp;&nbsp;&nbsp;return sum(calificaciones) / len(calificaciones)<br>
<br>
def obtener_mejor_estudiante(estudiantes):<br>
&nbsp;&nbsp;&nbsp;&nbsp;mejor = None<br>
&nbsp;&nbsp;&nbsp;&nbsp;mejor_promedio = 0<br>
&nbsp;&nbsp;&nbsp;&nbsp;for estudiante in estudiantes:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;promedio = calcular_promedio(estudiante["calificaciones"])<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if promedio > mejor_promedio:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mejor_promedio = promedio<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mejor = estudiante<br>
&nbsp;&nbsp;&nbsp;&nbsp;return mejor, mejor_promedio<br>
<br>
# Mostrar resultados<br>
for estudiante in estudiantes:<br>
&nbsp;&nbsp;&nbsp;&nbsp;promedio = calcular_promedio(estudiante["calificaciones"])<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Estudiante: {estudiante['nombre']}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Promedio: {promedio:.2f}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("-" * 30)<br>
<br>
mejor, promedio = obtener_mejor_estudiante(estudiantes)<br>
print(f"\\nMejor estudiante: {mejor['nombre']} ({promedio:.2f})")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🛒 Ejercicio 2: Carrito de compras</h5>
                        <p class="text-sm theme-text-secondary mb-3">Simula un carrito de compras con productos:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Carrito de compras<br>
productos = {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"laptop": {"precio": 1200, "stock": 5},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"mouse": {"precio": 25, "stock": 20},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"teclado": {"precio": 80, "stock": 15},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"monitor": {"precio": 300, "stock": 8},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"auriculares": {"precio": 150, "stock": 12}<br>
}<br>
<br>
carrito = []<br>
<br>
def agregar_al_carrito(producto, cantidad):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if producto in productos:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if productos[producto]["stock"] >= cantidad:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;carrito.append({<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"producto": producto,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cantidad": cantidad,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"precio_unitario": productos[producto]["precio"]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;productos[producto]["stock"] -= cantidad<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"✅ {cantidad} {producto}(s) agregado(s) al carrito")<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"❌ Stock insuficiente para {producto}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"❌ Producto {producto} no encontrado")<br>
<br>
def calcular_total():<br>
&nbsp;&nbsp;&nbsp;&nbsp;total = sum(item["cantidad"] * item["precio_unitario"] for item in carrito)<br>
&nbsp;&nbsp;&nbsp;&nbsp;return total<br>
<br>
def mostrar_carrito():<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("\\n🛒 CARRITO DE COMPRAS")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("=" * 40)<br>
&nbsp;&nbsp;&nbsp;&nbsp;for item in carrito:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subtotal = item["cantidad"] * item["precio_unitario"]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"{item['producto']} x{item['cantidad']} = \${subtotal}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"\\nTOTAL: \${calcular_total()}")<br>
<br>
# Simular compras<br>
agregar_al_carrito("laptop", 1)<br>
agregar_al_carrito("mouse", 2)<br>
agregar_al_carrito("teclado", 1)<br>
agregar_al_carrito("laptop", 10)  # Debe fallar por stock<br>
<br>
mostrar_carrito()</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📈 Ejercicio 3: Análisis de datos con conjuntos</h5>
                        <p class="text-sm theme-text-secondary mb-3">Analiza datos usando conjuntos y operaciones:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Análisis de preferencias de usuarios<br>
usuarios_python = {"Ana", "Carlos", "Luis", "María", "Pedro", "Sofia"}<br>
usuarios_javascript = {"Carlos", "Elena", "Luis", "Roberto", "Sofia", "Diego"}<br>
usuarios_java = {"Ana", "Elena", "Miguel", "Pedro", "Roberto", "Carlos"}<br>
<br>
print("👥 ANÁLISIS DE PREFERENCIAS DE LENGUAJES")<br>
print("=" * 50)<br>
<br>
# Usuarios que programan en Python<br>
print(f"Python: {len(usuarios_python)} usuarios")<br>
print(f"Lista: {sorted(usuarios_python)}")<br>
<br>
# Usuarios que programan en JavaScript<br>
print(f"\\nJavaScript: {len(usuarios_javascript)} usuarios")<br>
print(f"Lista: {sorted(usuarios_javascript)}")<br>
<br>
# Usuarios que programan en Java<br>
print(f"\\nJava: {len(usuarios_java)} usuarios")<br>
print(f"Lista: {sorted(usuarios_java)}")<br>
<br>
# Operaciones con conjuntos<br>
print("\\n🔍 ANÁLISIS CRUZADO")<br>
print("=" * 30)<br>
<br>
# Usuarios que programan en Python Y JavaScript<br>
python_js = usuarios_python & usuarios_javascript<br>
print(f"Python ∩ JavaScript: {sorted(python_js)}")<br>
<br>
# Usuarios que programan en los 3 lenguajes<br>
todos_lenguajes = usuarios_python & usuarios_javascript & usuarios_java<br>
print(f"Los 3 lenguajes: {sorted(todos_lenguajes)}")<br>
<br>
# Usuarios que solo programan en Python<br>
solo_python = usuarios_python - usuarios_javascript - usuarios_java<br>
print(f"Solo Python: {sorted(solo_python)}")<br>
<br>
# Total de usuarios únicos<br>
todos_usuarios = usuarios_python | usuarios_javascript | usuarios_java<br>
print(f"\\nTotal usuarios únicos: {len(todos_usuarios)}")<br>
print(f"Lista completa: {sorted(todos_usuarios)}")</code>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Operaciones con listas",
                description: "Crea una lista de números y realiza operaciones básicas",
                template: "# Crea una lista con los números del 1 al 10\nnumeros = []\n# Agrega los números\n# Imprime la suma de todos los números",
                solution: "numeros = list(range(1, 11))\nprint('Lista:', numeros)\nprint('Suma:', sum(numeros))\nprint('Máximo:', max(numeros))\nprint('Mínimo:', min(numeros))"
            },
            {
                title: "Diccionario de estudiantes",
                description: "Crea un diccionario para almacenar información de estudiantes",
                template: "# Crea un diccionario con nombre, edad y calificaciones\nestudiante = {}\n# Tu código aquí",
                solution: "estudiante = {\n    'nombre': 'Juan',\n    'edad': 20,\n    'calificaciones': [85, 90, 78, 92]\n}\nprint('Estudiante:', estudiante['nombre'])\nprint('Promedio:', sum(estudiante['calificaciones']) / len(estudiante['calificaciones']))"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la diferencia principal entre listas y tuplas?",
                options: ["Las listas son más rápidas", "Las tuplas son inmutables", "Las listas no pueden contener números", "No hay diferencia"],
                correct: 1
            },
            {
                question: "¿Cómo accedes al valor de una clave en un diccionario?",
                options: ["dict.get(key)", "dict[key]", "dict(key)", "Todas son correctas"],
                correct: 3
            },
            {
                question: "¿Cuál es la sintaxis correcta para crear un conjunto (set)?",
                options: ["set = []", "set = {}", "set = {1, 2, 3}", "set = (1, 2, 3)"],
                correct: 2
            },
            {
                question: "¿Qué método se usa para eliminar un elemento de una lista por valor?",
                options: ["delete()", "remove()", "erase()", "pop()"],
                correct: 1
            },
            {
                question: "¿Cómo se agrega un elemento a un conjunto?",
                options: ["set.append()", "set.add()", "set.insert()", "set.push()"],
                correct: 1
            },
            {
                question: "¿Cuál es la principal característica de los conjuntos (sets)?",
                options: ["Permiten duplicados", "No permiten duplicados", "Son ordenados", "Son inmutables"],
                correct: 1
            },
            {
                question: "¿Cómo se accede al último elemento de una lista?",
                options: ["lista[last]", "lista[-1]", "lista[end]", "lista.last()"],
                correct: 1
            },
            {
                question: "¿Qué devuelve dict.keys()?",
                options: ["Una lista", "Un conjunto", "Una vista de las claves", "Un string"],
                correct: 2
            },
            {
                question: "¿Cómo se concatenan dos listas?",
                options: ["lista1 + lista2", "lista1.concat(lista2)", "lista1.join(lista2)", "lista1.merge(lista2)"],
                correct: 0
            },
            {
                question: "¿Cuál es la forma correcta de crear un diccionario vacío?",
                options: ["dict = []", "dict = {}", "dict = ()", "dict = set()"],
                correct: 1
            }
        ]
    },
    
    basics: {
        title: "3. Primeros Pasos en R",
        description: "Operaciones básicas y sintaxis",
        video: "https://www.youtube.com/embed/fDRa82lxzaU",
        additionalVideos: [
            { title: "R as Calculator - Basic Math", url: "https://www.youtube.com/embed/G5b8hRvEcdA" },
            { title: "Basic R Operations", url: "https://www.youtube.com/embed/UYclmg1_KLk" },
            { title: "R Variables and Data Types", url: "https://www.youtube.com/embed/w8_XdYI3reU" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Usando R como Calculadora</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Operaciones Aritméticas Básicas</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    > 2 + 2<br>
                    [1] 4<br><br>
                    > 50 - 5*6<br>
                    [1] 20<br><br>
                    > 8 / 5<br>
                    [1] 1.6<br><br>
                    > 2^8<br>
                    [1] 256
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Operadores en R</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Básicos</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li><code>+</code> (suma)</li>
                        <li><code>-</code> (resta)</li>
                        <li><code>*</code> (multiplicación)</li>
                        <li><code>/</code> (división)</li>
                    </ul>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Avanzados</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li><code>^</code> o <code>**</code> (potencia)</li>
                        <li><code>%%</code> (módulo)</li>
                        <li><code>%/%</code> (división entera)</li>
                        <li><code>sqrt()</code> (raíz cuadrada)</li>
                    </ul>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Variables y Asignación</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <p class="text-sm theme-text-secondary mb-2">En R usamos el operador <code>&lt;-</code> para asignar valores:</p>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    > x &lt;- 10<br>
                    > y &lt;- 5<br>
                    > resultado &lt;- x + y<br>
                    > resultado<br>
                    [1] 15<br><br>
                    > nombre &lt;- "Academia Bio-R"<br>
                    > print(nombre)<br>
                    [1] "Academia Bio-R"
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Funciones Matemáticas Útiles</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Básicas</h4>
                    <div class="text-xs theme-text-secondary space-y-1">
                        <div><code>abs(-5)</code> → 5</div>
                        <div><code>sqrt(16)</code> → 4</div>
                        <div><code>round(3.14159, 2)</code> → 3.14</div>
                        <div><code>ceiling(3.2)</code> → 4</div>
                        <div><code>floor(3.8)</code> → 3</div>
                    </div>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Trigonométricas</h4>
                    <div class="text-xs theme-text-secondary space-y-1">
                        <div><code>sin(pi/2)</code> → 1</div>
                        <div><code>cos(0)</code> → 1</div>
                        <div><code>tan(pi/4)</code> → 1</div>
                        <div><code>log(10)</code> → 2.302585</div>
                        <div><code>exp(1)</code> → 2.718282</div>
                    </div>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Cadenas de Texto (Strings)</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    > saludo &lt;- "Hola mundo"<br>
                    > print(saludo)<br>
                    [1] "Hola mundo"<br><br>
                    > nombre &lt;- "R"<br>
                    > mensaje &lt;- paste("Aprendiendo", nombre)<br>
                    > mensaje<br>
                    [1] "Aprendiendo R"<br><br>
                    > nchar("Academia Bio-R")  # contar caracteres<br>
                    [1] 13
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Vectores Numéricos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <p class="text-sm theme-text-secondary mb-2">Los vectores son la estructura de datos fundamental en R:</p>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    > numeros &lt;- c(1, 4, 9, 16, 25)<br>
                    > numeros<br>
                    [1]  1  4  9 16 25<br><br>
                    > numeros[1]  # primer elemento (R empieza en 1)<br>
                    [1] 1<br><br>
                    > numeros[5]  # último elemento<br>
                    [1] 25<br><br>
                    > length(numeros)  # longitud del vector<br>
                    [1] 5
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Operaciones con Vectores</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-6">
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    > x &lt;- c(1, 2, 3, 4, 5)<br>
                    > y &lt;- c(2, 4, 6, 8, 10)<br><br>
                    > x + y  # suma elemento por elemento<br>
                    [1]  3  6  9 12 15<br><br>
                    > x * 2  # multiplicar por escalar<br>
                    [1]  2  4  6  8 10<br><br>
                    > sum(x)  # suma de todos los elementos<br>
                    [1] 15<br><br>
                    > mean(x)  # promedio<br>
                    [1] 3
                </code>
            </div>
            
            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Tip para RStudio</h4>
                <p class="text-sm text-blue-700 dark:text-blue-300">En RStudio puedes usar <kbd>Ctrl + Enter</kbd> (Windows/Linux) o <kbd>Cmd + Enter</kbd> (Mac) para ejecutar la línea actual del código. ¡Muy útil para probar comandos línea por línea!</p>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🧮 Práctica de R como Calculadora en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Domina los conceptos básicos de R: operaciones matemáticas, variables y vectores con ejercicios prácticos.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab con R
                    </button>
                    <p class="text-xs theme-text-secondary mt-2">💡 Recuerda seleccionar R como runtime en Colab</p>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🔢 Ejercicio 1: R como calculadora avanzada</h5>
                        <p class="text-sm theme-text-secondary mb-3">Explora todos los operadores matemáticos en R:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Operadores matemáticos en R<br>
cat("=== Operadores Básicos ===\n")<br>
cat("Suma: 25 + 15 =", 25 + 15, "\n")<br>
cat("Resta: 50 - 30 =", 50 - 30, "\n")<br>
cat("Multiplicación: 7 * 8 =", 7 * 8, "\n")<br>
cat("División: 84 / 4 =", 84 / 4, "\n")<br>
cat("División entera: 17 %/% 5 =", 17 %/% 5, "\n")<br>
cat("Módulo: 17 %% 5 =", 17 %% 5, "\n")<br>
cat("Potencia: 3 ^ 4 =", 3 ^ 4, "\n")<br><br>
# Orden de operaciones<br>
resultado <- 2 + 3 * 4<br>
cat("2 + 3 * 4 =", resultado, "\n")<br>
resultado_con_parentesis <- (2 + 3) * 4<br>
cat("(2 + 3) * 4 =", resultado_con_parentesis, "\n")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📝 Ejercicio 2: Variables y asignación en R</h5>
                        <p class="text-sm theme-text-secondary mb-3">Aprende a crear y usar variables:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Trabajando con variables en R<br>
nombre <- "Bio"<br>
apellido <- "R"<br>
<br>
# Concatenación con paste()<br>
nombre_completo <- paste(nombre, apellido)<br>
cat("Nombre completo:", nombre_completo, "\n")<br>
<br>
# Variables numéricas<br>
edad <- 25<br>
peso <- 70.5<br>
altura <- 1.75<br>
<br>
# Cálculos con variables<br>
imc <- peso / (altura^2)<br>
cat("IMC:", round(imc, 2), "\n")<br>
<br>
# Funciones de texto<br>
texto <- "Aprendiendo R"<br>
cat("Mayúsculas:", toupper(texto), "\n")<br>
cat("Minúsculas:", tolower(texto), "\n")<br>
cat("Longitud:", nchar(texto), "\n")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📊 Ejercicio 3: Vectores básicos en R</h5>
                        <p class="text-sm theme-text-secondary mb-3">Descubre el poder de los vectores:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Trabajando con vectores en R<br>
# Crear vectores<br>
numeros <- c(1, 2, 3, 4, 5)<br>
frutas <- c("manzana", "banana", "naranja")<br>
temperaturas <- c(23.5, 25.1, 22.8, 26.3)<br>
<br>
cat("Números:", numeros, "\n")<br>
cat("Frutas:", frutas, "\n")<br>
cat("Temperaturas:", temperaturas, "\n")<br>
<br>
# Acceder a elementos (R empieza en 1)<br>
cat("Primer número:", numeros[1], "\n")<br>
cat("Última fruta:", frutas[length(frutas)], "\n")<br>
<br>
# Operaciones con vectores<br>
cat("Suma de números:", sum(numeros), "\n")<br>
cat("Promedio:", mean(numeros), "\n")<br>
cat("Temperatura máxima:", max(temperaturas), "\n")<br>
<br>
# Crear secuencias<br>
secuencia <- 1:10<br>
cat("Secuencia del 1 al 10:", secuencia, "\n")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🔬 Ejercicio 4: Funciones matemáticas avanzadas</h5>
                        <p class="text-sm theme-text-secondary mb-3">Explora funciones matemáticas útiles para biología:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Funciones matemáticas en R<br>
# Datos de ejemplo (mediciones biológicas)<br>
longitudes <- c(12.5, 15.2, 11.8, 14.1, 13.7)<br>
<br>
# Estadísticas básicas<br>
cat("Media:", mean(longitudes), "\n")<br>
cat("Mediana:", median(longitudes), "\n")<br>
cat("Desviación estándar:", sd(longitudes), "\n")<br>
cat("Varianza:", var(longitudes), "\n")<br>
<br>
# Funciones matemáticas<br>
cat("Raíz cuadrada de 16:", sqrt(16), "\n")<br>
cat("Logaritmo natural de e:", log(exp(1)), "\n")<br>
cat("Seno de π/2:", sin(pi/2), "\n")<br>
<br>
# Redondeo<br>
valor <- 3.14159<br>
cat("Valor original:", valor, "\n")<br>
cat("Redondeado a 2 decimales:", round(valor, 2), "\n")<br>
cat("Hacia arriba:", ceiling(valor), "\n")<br>
cat("Hacia abajo:", floor(valor), "\n")</code>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "R como calculadora",
                description: "Realiza operaciones aritméticas básicas en R",
                template: "# Calcula 15 + 30 * 2\n# Calcula 100 / 4\n# Calcula 2 ^ 8\n# Usa cat() para mostrar los resultados\n",
                solution: "cat('15 + 30 * 2 =', 15 + 30 * 2, '\\n')\ncat('100 / 4 =', 100 / 4, '\\n')\ncat('2 ^ 8 =', 2 ^ 8, '\\n')"
            },
            {
                title: "Variables en R",
                description: "Crea y manipula variables y texto",
                template: "# Crea una variable con tu nombre usando <-\n# Crea otra con tu apellido\n# Únelas usando paste()\n# Muestra el resultado\n",
                solution: "nombre <- 'Juan'\napellido <- 'Pérez'\ncompleto <- paste(nombre, apellido)\nprint(completo)"
            },
            {
                title: "Vectores básicos",
                description: "Crea y opera con vectores numéricos",
                template: "# Crea un vector con los números del 1 al 5\n# Calcula la suma y el promedio\n# Multiplica cada elemento por 2\n",
                solution: "numeros <- c(1, 2, 3, 4, 5)\ncat('Suma:', sum(numeros), '\\n')\ncat('Promedio:', mean(numeros), '\\n')\ndobles <- numeros * 2\nprint(dobles)"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es el resultado de 2 ^ 3 en R?",
                options: ["6", "8", "9", "5"],
                correct: 1
            },
            {
                question: "¿Cómo se accede al primer elemento de un vector en R?",
                options: ["vector[1]", "vector[0]", "vector.first()", "vector.get(1)"],
                correct: 0
            },
            {
                question: "¿Cuál es el operador para asignación en R?",
                options: ["=", "<-", "->", "Todas las anteriores"],
                correct: 3
            },
            {
                question: "¿Qué resultado devuelve el operador %% en R?",
                options: ["División", "Multiplicación", "Módulo (resto)", "Potencia"],
                correct: 2
            },
            {
                question: "¿Cómo se crea un vector en R?",
                options: ["vector()", "c()", "list()", "array()"],
                correct: 1
            },
            {
                question: "¿Cuál función se usa para calcular la media en R?",
                options: ["average()", "mean()", "avg()", "media()"],
                correct: 1
            },
            {
                question: "¿Qué devuelve length(c(1, 2, 3, 4)) en R?",
                options: ["3", "4", "5", "Error"],
                correct: 1
            },
            {
                question: "¿Cómo se verifica la clase de un objeto en R?",
                options: ["class(variable)", "type(variable)", "variable.class()", "getclass(variable)"],
                correct: 0
            },
            {
                question: "¿Cuál es la forma correcta de crear un vector vacío en R?",
                options: ["vector <- c()", "vector <- vector()", "vector <- list()", "Opciones A y B son correctas"],
                correct: 3
            },
            {
                question: "¿Qué operador se usa para verificar si un elemento está en un vector en R?",
                options: ["%in%", "in", "contains", "has"],
                correct: 0
            }
        ]
    },
    
    vectors: {
        title: "4. Vectores y Matrices",
        description: "Estructuras de datos fundamentales",
        video: "https://www.youtube.com/embed/YBAWVNWiZlU",
        additionalVideos: [
            { title: "R Vectors Tutorial", url: "https://www.youtube.com/embed/fDRa82lxzaU" },
            { title: "Matrices in R", url: "https://www.youtube.com/embed/_V8eKsto3Ug" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Vectores y Matrices en R</h2>
            <p class="theme-text-secondary mb-6">Los vectores son la estructura de datos más básica en R, mientras que las matrices son vectores con dimensiones adicionales. Ambos son fundamentales para el análisis de datos en R.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">1. Creación de Vectores</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <h4 class="font-semibold theme-text-primary mb-2">Métodos Básicos de Creación</h4>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Usando la función c() (concatenar)<br>
                    > numeros <- c(12, 6, 67, 23, 8)<br>
                    > numeros<br>
                    [1] 12  6 67 23  8<br><br>
                    # Vector de caracteres<br>
                    > ciudades <- c("Madrid", "Barcelona", "Valencia")<br>
                    > ciudades<br>
                    [1] "Madrid"    "Barcelona" "Valencia"<br><br>
                    # Vector lógico<br>
                    > logico <- c(TRUE, FALSE, TRUE, FALSE)<br>
                    > logico<br>
                    [1]  TRUE FALSE  TRUE FALSE
                </code>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <h4 class="font-semibold theme-text-primary mb-2">Vectores con Nombres</h4>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Asignar nombres a elementos<br>
                    > frutas <- c(naranja = 4, manzana = 6, pera = 3)<br>
                    > frutas<br>
                    naranja manzana    pera<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4       6       3<br><br>
                    # Acceder por nombre<br>
                    > frutas["manzana"]<br>
                    manzana<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">2. Generación de Secuencias</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Secuencias simples<br>
                    > 1:10<br>
                    [1]  1  2  3  4  5  6  7  8  9 10<br><br>
                    # Función seq() para secuencias complejas<br>
                    > seq(1, 10, by = 2)<br>
                    [1] 1 3 5 7 9<br><br>
                    > seq(0, 1, length.out = 5)<br>
                    [1] 0.00 0.25 0.50 0.75 1.00<br><br>
                    # Repetir valores con rep()<br>
                    > rep(1, 5)<br>
                    [1] 1 1 1 1 1<br><br>
                    > rep(c(1, 2), times = 3)<br>
                    [1] 1 2 1 2 1 2<br><br>
                    > rep(c(1, 2), each = 3)<br>
                    [1] 1 1 1 2 2 2
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">3. Indexación y Acceso a Elementos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    > x <- c(10, 20, 30, 40, 50)<br><br>
                    # Índices positivos (empezando en 1)<br>
                    > x[1]        # Primer elemento<br>
                    [1] 10<br>
                    > x[c(1, 3)]  # Elementos 1 y 3<br>
                    [1] 10 30<br><br>
                    # Índices negativos (excluir elementos)<br>
                    > x[-1]       # Todos excepto el primero<br>
                    [1] 20 30 40 50<br>
                    > x[-(1:2)]   # Excluir primeros dos<br>
                    [1] 30 40 50<br><br>
                    # Indexación lógica<br>
                    > x[x > 25]<br>
                    [1] 30 40 50<br>
                    > x[x %% 2 == 0]  # Números pares<br>
                    [1] 10 20 30 40 50
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">4. Operaciones con Vectores</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Operaciones Aritméticas</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        > x <- c(1, 2, 3)<br>
                        > y <- c(4, 5, 6)<br><br>
                        # Operaciones elemento a elemento<br>
                        > x + y  # [1] 5 7 9<br>
                        > x * y  # [1] 4 10 18<br>
                        > x ^ 2  # [1] 1 4 9<br><br>
                        # Con escalares<br>
                        > x + 10 # [1] 11 12 13<br>
                        > x * 2  # [1] 2 4 6
                    </code>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Funciones Útiles</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        > datos <- c(15, 8, 23, 4, 16)<br><br>
                        > length(datos)  # [1] 5<br>
                        > sum(datos)     # [1] 66<br>
                        > mean(datos)    # [1] 13.2<br>
                        > median(datos)  # [1] 15<br>
                        > min(datos)     # [1] 4<br>
                        > max(datos)     # [1] 23<br>
                        > sort(datos)    # [1] 4 8 15 16 23<br>
                        > rev(datos)     # [1] 16 4 23 8 15
                    </code>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">5. Generación de Vectores Aleatorios</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Muestreo aleatorio<br>
                    > sample(1:10, size = 5)<br>
                    [1] 3 8 1 9 6<br><br>
                    > sample(1:6, size = 10, replace = TRUE)  # Dado<br>
                    [1] 4 2 6 1 3 6 2 5 1 4<br><br>
                    # Distribuciones probabilísticas<br>
                    > rnorm(5, mean = 0, sd = 1)     # Normal<br>
                    [1] -0.56  1.23 -0.69  0.45  1.32<br><br>
                    > runif(5, min = 0, max = 1)     # Uniforme<br>
                    [1] 0.372 0.908 0.201 0.556 0.789<br><br>
                    > rpois(5, lambda = 3)           # Poisson<br>
                    [1] 2 4 3 1 5
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">6. Matrices en R</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <h4 class="font-semibold theme-text-primary mb-2">Creación de Matrices</h4>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Método básico con matrix()<br>
                    > matriz1 <- matrix(1:12, nrow = 3, ncol = 4)<br>
                    > matriz1<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[,1] [,2] [,3] [,4]<br>
                    [1,]    1    4    7   10<br>
                    [2,]    2    5    8   11<br>
                    [3,]    3    6    9   12<br><br>
                    # Llenar por filas<br>
                    > matriz2 <- matrix(1:12, nrow = 3, byrow = TRUE)<br>
                    > matriz2<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[,1] [,2] [,3] [,4]<br>
                    [1,]    1    2    3    4<br>
                    [2,]    5    6    7    8<br>
                    [3,]    9   10   11   12<br><br>
                    # Combinar vectores<br>
                    > v1 <- c(1, 2, 3)<br>
                    > v2 <- c(4, 5, 6)<br>
                    > cbind(v1, v2)  # Por columnas<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v1 v2<br>
                    [1,]  1  4<br>
                    [2,]  2  5<br>
                    [3,]  3  6
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">7. Operaciones con Matrices</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    > A <- matrix(1:6, nrow = 2)<br>
                    > B <- matrix(7:12, nrow = 2)<br><br>
                    # Información de la matriz<br>
                    > dim(A)      # [1] 2 3<br>
                    > nrow(A)     # [1] 2<br>
                    > ncol(A)     # [1] 3<br><br>
                    # Indexación<br>
                    > A[1, 2]     # Fila 1, columna 2<br>
                    [1] 3<br>
                    > A[1, ]      # Toda la fila 1<br>
                    [1] 1 3 5<br>
                    > A[, 2]      # Toda la columna 2<br>
                    [1] 3 4<br><br>
                    # Operaciones aritméticas<br>
                    > A + B       # Suma elemento a elemento<br>
                    > A * B       # Multiplicación elemento a elemento<br>
                    > A %*% t(B)  # Multiplicación de matrices<br><br>
                    # Transpuesta<br>
                    > t(A)        # Matriz transpuesta
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">8. Funciones Avanzadas de Matrices</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Álgebra Lineal</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        > M <- matrix(c(1,2,3,4), 2, 2)<br><br>
                        # Determinante<br>
                        > det(M)    # [1] -2<br><br>
                        # Inversa<br>
                        > solve(M)<br><br>
                        # Eigenvalores y eigenvectores<br>
                        > eigen(M)<br><br>
                        # Diagonal<br>
                        > diag(M)   # [1] 1 4<br><br>
                        # Traza (suma diagonal)<br>
                        > sum(diag(M))  # [1] 5
                    </code>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Manipulación</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Nombres de filas y columnas<br>
                        > rownames(M) <- c("Fila1", "Fila2")<br>
                        > colnames(M) <- c("Col1", "Col2")<br><br>
                        # Agregar filas/columnas<br>
                        > rbind(M, c(5, 6))<br>
                        > cbind(M, c(7, 8))<br><br>
                        # Aplicar funciones<br>
                        > apply(M, 1, sum)  # Suma por filas<br>
                        > apply(M, 2, mean) # Media por columnas<br><br>
                        # Redimensionar<br>
                        > dim(M) <- c(1, 4)
                    </code>
                </div>
            </div>
            
            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Consejos Importantes</h4>
                <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Los vectores en R son <strong>homogéneos</strong> - todos los elementos del mismo tipo</li>
                    <li>• R utiliza <strong>indexación basada en 1</strong>, no en 0 como otros lenguajes</li>
                    <li>• Las operaciones son <strong>vectorizadas</strong> por defecto - muy eficientes</li>
                    <li>• Los vectores se <strong>reciclan</strong> automáticamente en operaciones de diferente longitud</li>
                    <li>• Las matrices se almacenan <strong>por columnas</strong> internamente</li>
                    <li>• Usa <strong>%*%</strong> para multiplicación de matrices, <strong>*</strong> para elemento a elemento</li>
                </ul>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">📊 Práctica con Vectores en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Experimenta con vectores y matrices en R.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Practicar en Google Colab
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📝 Ejercicio: Vectores numéricos</h5>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                            <code># Crear vectores y operar con ellos<br>
temperaturas <- c(23.5, 25.1, 22.8, 26.3, 24.7)<br>
cat("Temperaturas:", temperaturas, "\\n")<br>
cat("Promedio:", mean(temperaturas), "\\n")<br>
cat("Máxima:", max(temperaturas), "\\n")<br>
cat("Mínima:", min(temperaturas), "\\n")</code>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Operaciones con vectores",
                description: "Crea vectores y realiza operaciones básicas",
                template: "# Crea un vector con las edades: 25, 30, 35, 40, 45\n# Calcula el promedio y la suma\n",
                solution: "edades <- c(25, 30, 35, 40, 45)\ncat('Promedio:', mean(edades), '\\n')\ncat('Suma:', sum(edades), '\\n')"
            }
        ],
        quiz: [
            {
                question: "¿Qué función se usa para crear un vector en R?",
                options: ["vector()", "c()", "array()", "list()"],
                correct: 1
            },
            {
                question: "¿Cómo se accede al tercer elemento de un vector?",
                options: ["vector[3]", "vector[2]", "vector(3)", "vector.get(3)"],
                correct: 0
            }
        ]
    },
    
    dataframes: {
        title: "5. Data Frames",
        description: "Manipulación de datos tabulares",
        video: "https://www.youtube.com/embed/_V8eKsto3Ug",
        additionalVideos: [
            { title: "Data Frames in R", url: "https://www.youtube.com/embed/fDRa82lxzaU" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Data Frames en R</h2>
            <p class="theme-text-secondary mb-6">Los data frames son la estructura de datos más importante en R para el análisis de datos. Son similares a hojas de cálculo o tablas de base de datos, donde cada fila representa una observación y cada columna una variable.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">1. ¿Qué es un Data Frame?</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <h4 class="font-semibold theme-text-primary mb-2">Características Principales</h4>
                <ul class="text-sm theme-text-secondary space-y-1 mb-3">
                    <li>• <strong>Estructura tabular:</strong> Filas y columnas organizadas</li>
                    <li>• <strong>Tipos mixtos:</strong> Cada columna puede ser de diferente tipo de dato</li>
                    <li>• <strong>Longitud uniforme:</strong> Todas las columnas tienen el mismo número de filas</li>
                    <li>• <strong>Indexación:</strong> Filas y columnas pueden tener nombres</li>
                </ul>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Estructura conceptual de un data frame<br>
                    #     Columna1  Columna2  Columna3<br>
                    # Fila1:   Ana      25    Madrid<br>
                    # Fila2:  Juan      30  Barcelona<br>
                    # Fila3: María      28   Valencia
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">2. Creación de Data Frames</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <h4 class="font-semibold theme-text-primary mb-2">Método Básico con data.frame()</h4>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Crear vectores individuales<br>
                    > nombres <- c("Ana", "Juan", "María", "Carlos")<br>
                    > edades <- c(25, 30, 28, 35)<br>
                    > ciudades <- c("Madrid", "Barcelona", "Valencia", "Sevilla")<br>
                    > salarios <- c(45000, 52000, 48000, 55000)<br><br>
                    # Crear el data frame<br>
                    > empleados <- data.frame(<br>
                    +   nombre = nombres,<br>
                    +   edad = edades,<br>
                    +   ciudad = ciudades,<br>
                    +   salario = salarios<br>
                    + )<br><br>
                    > empleados<br>
                    &nbsp;&nbsp;nombre edad    ciudad salario<br>
                    1    Ana   25    Madrid   45000<br>
                    2   Juan   30 Barcelona   52000<br>
                    3  María   28  Valencia   48000<br>
                    4 Carlos   35   Sevilla   55000
                </code>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <h4 class="font-semibold theme-text-primary mb-2">Creación Directa</h4>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Crear data frame directamente<br>
                    > ventas <- data.frame(<br>
                    +   producto = c("Laptop", "Mouse", "Teclado", "Monitor"),<br>
                    +   precio = c(899.99, 25.50, 89.99, 299.99),<br>
                    +   stock = c(15, 50, 30, 12),<br>
                    +   categoria = c("Electrónica", "Accesorio", "Accesorio", "Electrónica")<br>
                    + )<br><br>
                    > str(ventas)  # Estructura del data frame<br>
                    'data.frame': 4 obs. of 4 variables:<br>
                    $ producto : chr [1:4] "Laptop" "Mouse" "Teclado" "Monitor"<br>
                    $ precio   : num [1:4] 900 25.5 90 300<br>
                    $ stock    : num [1:4] 15 50 30 12<br>
                    $ categoria: chr [1:4] "Electrónica" "Accesorio" "Accesorio" "Electrónica"
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">3. Acceso a Datos</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Acceso por Columnas</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Usando el símbolo $<br>
                        > empleados$nombre<br>
                        [1] "Ana" "Juan" "María" "Carlos"<br><br>
                        # Usando corchetes<br>
                        > empleados[, "edad"]<br>
                        [1] 25 30 28 35<br><br>
                        # Múltiples columnas<br>
                        > empleados[, c("nombre", "salario")]<br>
                        &nbsp;&nbsp;nombre salario<br>
                        1    Ana   45000<br>
                        2   Juan   52000<br>
                        3  María   48000<br>
                        4 Carlos   55000
                    </code>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Acceso por Filas</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Primera fila<br>
                        > empleados[1, ]<br>
                        &nbsp;&nbsp;nombre edad ciudad salario<br>
                        1    Ana   25 Madrid   45000<br><br>
                        # Múltiples filas<br>
                        > empleados[1:3, ]<br>
                        &nbsp;&nbsp;nombre edad    ciudad salario<br>
                        1    Ana   25    Madrid   45000<br>
                        2   Juan   30 Barcelona   52000<br>
                        3  María   28  Valencia   48000<br><br>
                        # Elemento específico<br>
                        > empleados[2, "nombre"]<br>
                        [1] "Juan"
                    </code>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">4. Filtrado de Datos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Filtrar por condición simple<br>
                    > empleados_jovenes <- empleados[empleados$edad < 30, ]<br>
                    > empleados_jovenes<br>
                    &nbsp;&nbsp;nombre edad   ciudad salario<br>
                    1    Ana   25   Madrid   45000<br>
                    3  María   28 Valencia   48000<br><br>
                    # Filtrar con múltiples condiciones<br>
                    > altos_salarios <- empleados[empleados$salario > 50000 & empleados$edad > 25, ]<br>
                    > altos_salarios<br>
                    &nbsp;&nbsp;nombre edad    ciudad salario<br>
                    2   Juan   30 Barcelona   52000<br>
                    4 Carlos   35   Sevilla   55000<br><br>
                    # Usando subset() - más legible<br>
                    > subset(empleados, edad >= 30 & ciudad == "Barcelona")<br>
                    &nbsp;&nbsp;nombre edad    ciudad salario<br>
                    2   Juan   30 Barcelona   52000
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">5. Modificación de Data Frames</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Agregar Columnas</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Nueva columna calculada<br>
                        > empleados$salario_anual <- empleados$salario * 12<br><br>
                        # Nueva columna condicional<br>
                        > empleados$categoria <- ifelse(<br>
                        +   empleados$edad >= 30, <br>
                        +   "Senior", <br>
                        +   "Junior"<br>
                        + )<br><br>
                        # Verificar resultado<br>
                        > head(empleados, 2)<br>
                        &nbsp;&nbsp;nombre edad ciudad salario salario_anual categoria<br>
                        1    Ana   25 Madrid   45000      540000    Junior<br>
                        2   Juan   30 Barcelona 52000      624000    Senior
                    </code>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Agregar Filas</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Crear nueva fila<br>
                        > nueva_fila <- data.frame(<br>
                        +   nombre = "Lucía",<br>
                        +   edad = 27,<br>
                        +   ciudad = "Bilbao",<br>
                        +   salario = 47000<br>
                        + )<br><br>
                        # Agregar con rbind()<br>
                        > empleados_ampliado <- rbind(empleados[, 1:4], nueva_fila)<br>
                        > tail(empleados_ampliado, 2)<br>
                        &nbsp;&nbsp;nombre edad  ciudad salario<br>
                        4 Carlos   35 Sevilla   55000<br>
                        5  Lucía   27  Bilbao   47000
                    </code>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">6. Ordenamiento de Datos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Ordenar por edad (ascendente)<br>
                    > empleados_ordenados <- empleados[order(empleados$edad), ]<br>
                    > empleados_ordenados[, 1:4]<br>
                    &nbsp;&nbsp;nombre edad    ciudad salario<br>
                    1    Ana   25    Madrid   45000<br>
                    3  María   28  Valencia   48000<br>
                    2   Juan   30 Barcelona   52000<br>
                    4 Carlos   35   Sevilla   55000<br><br>
                    # Ordenar por salario (descendente)<br>
                    > empleados[order(-empleados$salario), ]<br>
                    &nbsp;&nbsp;nombre edad    ciudad salario<br>
                    4 Carlos   35   Sevilla   55000<br>
                    2   Juan   30 Barcelona   52000<br>
                    3  María   28  Valencia   48000<br>
                    1    Ana   25    Madrid   45000<br><br>
                    # Ordenar por múltiples columnas<br>
                    > empleados[order(empleados$ciudad, -empleados$edad), ]
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">7. Funciones Útiles para Data Frames</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Exploración</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Dimensiones<br>
                        > dim(empleados)        # [1] 4 6<br>
                        > nrow(empleados)       # [1] 4<br>
                        > ncol(empleados)       # [1] 6<br><br>
                        # Primeras y últimas filas<br>
                        > head(empleados, 2)    # Primeras 2<br>
                        > tail(empleados, 2)    # Últimas 2<br><br>
                        # Nombres<br>
                        > colnames(empleados)<br>
                        > rownames(empleados)<br><br>
                        # Estructura<br>
                        > str(empleados)
                    </code>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Análisis</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Resumen estadístico<br>
                        > summary(empleados)<br><br>
                        # Valores únicos<br>
                        > unique(empleados$ciudad)<br>
                        > table(empleados$categoria)<br><br>
                        # Verificar valores faltantes<br>
                        > is.na(empleados)<br>
                        > complete.cases(empleados)<br><br>
                        # Aplicar funciones<br>
                        > sapply(empleados[, c("edad", "salario")], mean)
                    </code>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">8. Combinación de Data Frames</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Crear segundo data frame<br>
                    > departamentos <- data.frame(<br>
                    +   nombre = c("Ana", "Juan", "María", "Carlos"),<br>
                    +   departamento = c("IT", "Ventas", "Marketing", "IT"),<br>
                    +   años_experiencia = c(3, 7, 5, 10)<br>
                    + )<br><br>
                    # Combinar por columna común (merge)<br>
                    > empleados_completo <- merge(empleados[, 1:4], departamentos, by = "nombre")<br>
                    > empleados_completo<br>
                    &nbsp;&nbsp;nombre edad    ciudad salario departamento años_experiencia<br>
                    1    Ana   25    Madrid   45000           IT                3<br>
                    2 Carlos   35   Sevilla   55000           IT               10<br>
                    3   Juan   30 Barcelona   52000       Ventas                7<br>
                    4  María   28  Valencia   48000    Marketing                5<br><br>
                    # Combinar horizontalmente (cbind) - requiere mismo orden<br>
                    > cbind(empleados[, 1:2], departamentos[, 2:3])
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">9. Eliminación de Datos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-6">
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Eliminar columnas<br>
                    > empleados_sin_salario <- empleados[, -4]  # Eliminar columna 4<br>
                    > empleados_seleccion <- empleados[, -c("salario", "salario_anual")]<br><br>
                    # Eliminar filas<br>
                    > empleados_sin_primera <- empleados[-1, ]  # Sin primera fila<br>
                    > empleados_filtrados <- empleados[empleados$edad != 25, ]<br><br>
                    # Eliminar filas con valores faltantes<br>
                    > empleados_completos <- empleados[complete.cases(empleados), ]<br><br>
                    # Asignar NULL para eliminar columna permanentemente<br>
                    > empleados$salario_anual <- NULL
                </code>
            </div>
            
            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Consejos Importantes para Data Frames</h4>
                <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Los data frames son <strong>la estructura más usada</strong> en análisis de datos en R</li>
                    <li>• Cada columna debe tener <strong>la misma longitud</strong> (mismo número de elementos)</li>
                    <li>• Usa <strong>nombres descriptivos</strong> para columnas para facilitar el análisis</li>
                    <li>• <strong>subset()</strong> es más legible que los corchetes para filtrado complejo</li>
                    <li>• <strong>merge()</strong> es preferible a cbind() cuando hay columnas comunes</li>
                    <li>• Siempre verifica la estructura con <strong>str()</strong> después de importar datos</li>
                    <li>• Los <strong>factores</strong> son útiles para variables categóricas en data frames</li>
                </ul>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">📊 Práctica con Data Frames en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Domina la manipulación de datos tabulares con ejercicios prácticos y casos de uso reales.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Practicar en Google Colab
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📝 Ejercicio 1: Análisis de Ventas</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crea y analiza un dataset de ventas:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Crear dataset de ventas<br>
ventas <- data.frame(<br>
&nbsp;&nbsp;producto = c("Laptop", "Mouse", "Teclado", "Monitor", "Webcam"),<br>
&nbsp;&nbsp;precio = c(899.99, 25.50, 89.99, 299.99, 79.99),<br>
&nbsp;&nbsp;unidades_vendidas = c(15, 120, 45, 30, 60),<br>
&nbsp;&nbsp;categoria = c("Electrónica", "Accesorio", "Accesorio", "Electrónica", "Accesorio")<br>
)<br><br>
# Calcular ingresos totales<br>
ventas$ingresos <- ventas$precio * ventas$unidades_vendidas<br><br>
# Análisis básico<br>
print("=== RESUMEN DE VENTAS ===")<br>
print(summary(ventas))<br><br>
print("=== TOP 3 PRODUCTOS POR INGRESOS ===")<br>
top_productos <- ventas[order(-ventas$ingresos), ][1:3, ]<br>
print(top_productos[, c("producto", "ingresos")])</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🔍 Ejercicio 2: Filtrado y Segmentación</h5>
                        <p class="text-sm theme-text-secondary mb-3">Practica el filtrado de datos:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                            <code># Filtrar productos caros<br>
productos_premium <- subset(ventas, precio > 100)<br>
cat("Productos Premium (>$100):", nrow(productos_premium), "productos\\n")<br><br>
# Filtrar por categoría y rendimiento<br>
accesorios_exitosos <- subset(ventas, <br>
&nbsp;&nbsp;categoria == "Accesorio" & unidades_vendidas > 50)<br><br>
# Análisis por categoría<br>
ingresos_por_categoria <- aggregate(ingresos ~ categoria, data = ventas, FUN = sum)<br>
print("=== INGRESOS POR CATEGORÍA ===")<br>
print(ingresos_por_categoria)</code>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Crear data frame básico",
                description: "Crea un data frame con información de estudiantes",
                template: "# Crea un data frame con: nombre, edad, carrera, promedio\n# Incluye al menos 4 estudiantes\n",
                solution: "estudiantes <- data.frame(\n  nombre = c('Ana', 'Juan', 'María', 'Carlos'),\n  edad = c(20, 22, 21, 23),\n  carrera = c('Biología', 'Química', 'Biología', 'Física'),\n  promedio = c(8.5, 7.8, 9.2, 8.0)\n)\nprint(estudiantes)"
            },
            {
                title: "Filtrado de datos",
                description: "Filtra estudiantes con promedio mayor a 8.0",
                template: "# Usando el data frame anterior, filtra estudiantes con promedio > 8.0\n",
                solution: "estudiantes_destacados <- subset(estudiantes, promedio > 8.0)\nprint(estudiantes_destacados)"
            },
            {
                title: "Agregar y modificar columnas",
                description: "Agrega una columna de beca basada en el promedio",
                template: "# Agrega columna 'beca': 'Sí' si promedio >= 8.5, 'No' en caso contrario\n",
                solution: "estudiantes$beca <- ifelse(estudiantes$promedio >= 8.5, 'Sí', 'No')\nprint(estudiantes)"
            }
        ],
        quiz: [
            {
                question: "¿Cómo se crea un data frame en R?",
                options: ["data.frame()", "dataframe()", "df()", "table()"],
                correct: 0
            },
            {
                question: "¿Cuál es la característica principal de un data frame?",
                options: ["Todos los elementos deben ser del mismo tipo", "Cada columna puede tener diferente tipo de dato", "Solo puede tener datos numéricos", "No puede tener nombres de columnas"],
                correct: 1
            },
            {
                question: "¿Cómo se accede a una columna específica de un data frame llamado 'datos'?",
                options: ["datos.columna", "datos$columna", "datos->columna", "datos@columna"],
                correct: 1
            },
            {
                question: "¿Qué función se usa para filtrar un data frame de manera legible?",
                options: ["filter()", "subset()", "select()", "where()"],
                correct: 1
            },
            {
                question: "¿Cómo se agregan filas a un data frame?",
                options: ["cbind()", "rbind()", "append()", "add.row()"],
                correct: 1
            },
            {
                question: "¿Qué función muestra la estructura interna de un data frame?",
                options: ["summary()", "head()", "str()", "class()"],
                correct: 2
            },
            {
                question: "¿Cómo se ordenan las filas de un data frame por una columna?",
                options: ["sort(df$columna)", "df[order(df$columna), ]", "arrange(df, columna)", "df.sort(columna)"],
                correct: 1
            },
            {
                question: "¿Qué función combina dos data frames por una columna común?",
                options: ["merge()", "join()", "combine()", "bind()"],
                correct: 0
            }
        ]
    },
    
    graphics: {
        title: "6. Gráficos en R",
        description: "Visualización con plot y ggplot2",
        video: "https://www.youtube.com/embed/YBAWVNWiZlU",
        additionalVideos: [
            { title: "ggplot2 Tutorial", url: "https://www.youtube.com/embed/fDRa82lxzaU" },
            { title: "Data Visualization in R", url: "https://www.youtube.com/embed/_V8eKsto3Ug" },
            { title: "Interactive Plots with plotly in R", url: "https://www.youtube.com/embed/TFGYlKvQEQ4" },
            { title: "3D Surface Plots and Visualizations in R", url: "https://www.youtube.com/embed/mfGFv-iB724" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Gráficos en R</h2>
            <p class="theme-text-secondary mb-6">La visualización de datos es fundamental en R. Aprende a crear gráficos efectivos usando tanto las funciones base de R como el poderoso paquete ggplot2.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">1. Introducción a los Gráficos en R</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <h4 class="font-semibold theme-text-primary mb-2">Sistemas de Gráficos en R</h4>
                <ul class="text-sm theme-text-secondary space-y-1 mb-3">
                    <li>• <strong>Base R Graphics:</strong> Sistema básico y eficiente incluido en R</li>
                    <li>• <strong>ggplot2:</strong> Gramática de gráficos, más moderno y flexible</li>
                    <li>• <strong>lattice:</strong> Especializado en gráficos multivariados</li>
                    <li>• <strong>plotly:</strong> Gráficos interactivos</li>
                </ul>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Cargar datos de ejemplo<br>
                    > data(mtcars)  # Dataset de coches<br>
                    > head(mtcars, 3)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mpg cyl disp  hp drat    wt  qsec vs am gear carb<br>
                    Mazda RX4      21.0   6  160 110 3.90 2.620 16.46  0  1    4    4<br>
                    Mazda RX4 Wag  21.0   6  160 110 3.90 2.875 17.02  0  1    4    4<br>
                    Datsun 710     22.8   4  108  93 3.85 2.320 18.61  1  1    4    1
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">2. Gráficos Base con plot()</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <h4 class="font-semibold theme-text-primary mb-2">Gráfico de Dispersión Básico</h4>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Gráfico de dispersión simple<br>
                    > plot(mtcars$wt, mtcars$mpg)<br><br>
                    # Gráfico personalizado<br>
                    > plot(mtcars$wt, mtcars$mpg,<br>
                    +      main = "Consumo vs Peso del Vehículo",<br>
                    +      xlab = "Peso (1000 lbs)",<br>
                    +      ylab = "Millas por Galón (MPG)",<br>
                    +      pch = 16,                    # Punto sólido<br>
                    +      col = "blue",                # Color azul<br>
                    +      cex = 1.2)                   # Tamaño de punto<br><br>
                    # Agregar línea de tendencia<br>
                    > abline(lm(mpg ~ wt, data = mtcars), col = "red", lwd = 2)
                </code>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Personalización de Puntos</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Diferentes símbolos (pch)<br>
                        > plot(1:25, pch = 1:25, cex = 2)<br><br>
                        # Colores por grupos<br>
                        > plot(mtcars$wt, mtcars$mpg,<br>
                        +      col = factor(mtcars$cyl),<br>
                        +      pch = 16)<br><br>
                        # Leyenda<br>
                        > legend("topright", <br>
                        +        legend = c("4 cyl", "6 cyl", "8 cyl"),<br>
                        +        col = 1:3, pch = 16)
                    </code>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Múltiples Gráficos</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Dividir ventana gráfica<br>
                        > par(mfrow = c(2, 2))<br><br>
                        # Cuatro gráficos<br>
                        > plot(mtcars$wt, mtcars$mpg)<br>
                        > plot(mtcars$hp, mtcars$mpg)<br>
                        > plot(mtcars$disp, mtcars$mpg)<br>
                        > plot(mtcars$qsec, mtcars$mpg)<br><br>
                        # Restaurar ventana<br>
                        > par(mfrow = c(1, 1))
                    </code>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">3. Tipos de Gráficos Específicos</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Histogramas</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Histograma básico<br>
                        > hist(mtcars$mpg)<br><br>
                        # Histograma personalizado<br>
                        > hist(mtcars$mpg,<br>
                        +      main = "Distribución de MPG",<br>
                        +      xlab = "Millas por Galón",<br>
                        +      ylab = "Frecuencia",<br>
                        +      col = "lightblue",<br>
                        +      border = "black",<br>
                        +      breaks = 10)           # Número de bins
                    </code>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Diagramas de Caja</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Boxplot simple<br>
                        > boxplot(mtcars$mpg)<br><br>
                        # Boxplot por grupos<br>
                        > boxplot(mpg ~ cyl, data = mtcars,<br>
                        +         main = "MPG por Cilindros",<br>
                        +         xlab = "Número de Cilindros",<br>
                        +         ylab = "Millas por Galón",<br>
                        +         col = c("red", "green", "blue"))
                    </code>
                </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Gráficos de Barras</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Crear tabla de frecuencias<br>
                        > tabla_cyl <- table(mtcars$cyl)<br>
                        > tabla_cyl<br>
                        4  6  8<br>
                        11 7 14<br><br>
                        # Gráfico de barras<br>
                        > barplot(tabla_cyl,<br>
                        +         main = "Frecuencia por Cilindros",<br>
                        +         xlab = "Cilindros",<br>
                        +         ylab = "Cantidad",<br>
                        +         col = rainbow(3))
                    </code>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Gráficos de Línea</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Datos de tiempo<br>
                        > tiempo <- 1:20<br>
                        > valores <- cumsum(rnorm(20))<br><br>
                        # Gráfico de línea<br>
                        > plot(tiempo, valores, type = "l",<br>
                        +      main = "Serie de Tiempo",<br>
                        +      xlab = "Tiempo",<br>
                        +      ylab = "Valor",<br>
                        +      col = "blue", lwd = 2)
                    </code>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">4. Introducción a ggplot2</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <h4 class="font-semibold theme-text-primary mb-2">Instalación y Concepto</h4>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Instalar ggplot2 (solo una vez)<br>
                    > install.packages("ggplot2")<br><br>
                    # Cargar la librería<br>
                    > library(ggplot2)<br><br>
                    # Estructura básica de ggplot2<br>
                    # ggplot(data) + aes(aesthetics) + geom_function() + customization<br><br>
                    # Ejemplo básico<br>
                    > ggplot(mtcars, aes(x = wt, y = mpg)) +<br>
                    +   geom_point()
                </code>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <h4 class="font-semibold theme-text-primary mb-2">Gráficos con ggplot2</h4>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Gráfico de dispersión avanzado<br>
                    > ggplot(mtcars, aes(x = wt, y = mpg, color = factor(cyl))) +<br>
                    +   geom_point(size = 3) +<br>
                    +   geom_smooth(method = "lm", se = FALSE) +<br>
                    +   labs(title = "Consumo vs Peso por Cilindros",<br>
                    +        x = "Peso (1000 lbs)",<br>
                    +        y = "Millas por Galón",<br>
                    +        color = "Cilindros") +<br>
                    +   theme_minimal()<br><br>
                    # Histograma con ggplot2<br>
                    > ggplot(mtcars, aes(x = mpg)) +<br>
                    +   geom_histogram(bins = 10, fill = "skyblue", color = "black") +<br>
                    +   labs(title = "Distribución de MPG",<br>
                    +        x = "Millas por Galón", y = "Frecuencia")
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">5. Customización Avanzada</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Colores y Temas</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Paletas de colores<br>
                        > ggplot(mtcars, aes(x = factor(cyl), fill = factor(cyl))) +<br>
                        +   geom_bar() +<br>
                        +   scale_fill_brewer(type = "qual", palette = 3) +<br>
                        +   theme_classic()<br><br>
                        # Colores personalizados<br>
                        > ggplot(mtcars, aes(x = wt, y = mpg)) +<br>
                        +   geom_point(color = "#FF6B6B", size = 3) +<br>
                        +   theme_dark()
                    </code>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Facetas y Subgráficos</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Facetas por variable<br>
                        > ggplot(mtcars, aes(x = wt, y = mpg)) +<br>
                        +   geom_point() +<br>
                        +   facet_wrap(~cyl) +<br>
                        +   labs(title = "MPG vs Peso por Cilindros")<br><br>
                        # Facetas en cuadrícula<br>
                        > ggplot(mtcars, aes(x = wt, y = mpg)) +<br>
                        +   geom_point() +<br>
                        +   facet_grid(vs ~ am)
                    </code>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">6. Exportar Gráficos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Guardar en diferentes formatos<br>
                    > # PDF (vectorial)<br>
                    > pdf("mi_grafico.pdf", width = 8, height = 6)<br>
                    > plot(mtcars$wt, mtcars$mpg)<br>
                    > dev.off()<br><br>
                    # PNG (bitmap)<br>
                    > png("mi_grafico.png", width = 800, height = 600)<br>
                    > plot(mtcars$wt, mtcars$mpg)<br>
                    > dev.off()<br><br>
                    # Con ggplot2 usar ggsave()<br>
                    > p <- ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point()<br>
                    > ggsave("mi_ggplot.png", p, width = 8, height = 6, dpi = 300)
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">7. Gráficos Especializados</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Matriz de Correlación</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Instalar corrplot<br>
                        > install.packages("corrplot")<br>
                        > library(corrplot)<br><br>
                        # Matriz de correlación<br>
                        > cor_matrix <- cor(mtcars[, 1:7])<br>
                        > corrplot(cor_matrix, method = "circle",<br>
                        +          type = "upper", order = "hclust")
                    </code>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Gráficos 3D</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Instalar plotly<br>
                        > install.packages("plotly")<br>
                        > library(plotly)<br><br>
                        # Gráfico 3D interactivo<br>
                        > plot_ly(mtcars, x = ~wt, y = ~hp, z = ~mpg,<br>
                        +         color = ~cyl, type = "scatter3d",<br>
                        +         mode = "markers")
                    </code>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">8. Gráficos de Funciones por Tramos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <h4 class="font-semibold theme-text-primary mb-2">Funciones Definidas por Tramos</h4>
                <p class="text-sm theme-text-secondary mb-3">Las funciones por tramos son útiles para modelar comportamientos que cambian según rangos de valores.</p>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Definir una función por tramos<br>
                    > funcion_tramos <- function(x) {<br>
                    +   resultado <- numeric(length(x))<br>
                    +   <br>
                    +   # Tramo 1: x < -2<br>
                    +   mask1 <- x < -2<br>
                    +   resultado[mask1] <- x[mask1]^2<br>
                    +   <br>
                    +   # Tramo 2: -2 <= x < 1<br>
                    +   mask2 <- x >= -2 & x < 1<br>
                    +   resultado[mask2] <- 2 * x[mask2] + 3<br>
                    +   <br>
                    +   # Tramo 3: x >= 1<br>
                    +   mask3 <- x >= 1<br>
                    +   resultado[mask3] <- sin(x[mask3]) + 2<br>
                    +   <br>
                    +   return(resultado)<br>
                    + }<br><br>
                    # Crear dominio de la función<br>
                    > x <- seq(-4, 4, length.out = 1000)<br>
                    > y <- funcion_tramos(x)<br><br>
                    # Graficar la función completa<br>
                    > plot(x, y, type = "l", lwd = 2, col = "blue",<br>
                    +      main = "Función Definida por Tramos",<br>
                    +      xlab = "x", ylab = "f(x)",<br>
                    +      ylim = c(-1, 8))
                </code>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Técnica con ifelse()</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Función más simple con ifelse anidado<br>
                        > f_simple <- function(x) {<br>
                        +   ifelse(x < 0, <br>
                        +          x^2,                    # x < 0<br>
                        +          ifelse(x <= 2, <br>
                        +                 2*x + 1,         # 0 <= x <= 2<br>
                        +                 -x + 7))         # x > 2<br>
                        + }<br><br>
                        # Graficar<br>
                        > x <- seq(-3, 5, 0.1)<br>
                        > plot(x, f_simple(x), type = "l",<br>
                        +      col = "red", lwd = 2,<br>
                        +      main = "Función con ifelse()")
                    </code>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Función con Discontinuidades</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Función con salto<br>
                        > f_discontinua <- function(x) {<br>
                        +   ifelse(x < 1, <br>
                        +          x^2,                    # x < 1<br>
                        +          2*x + 1)                # x >= 1<br>
                        + }<br><br>
                        # Graficar con punto de discontinuidad<br>
                        > x1 <- seq(-2, 0.99, 0.01)<br>
                        > x2 <- seq(1, 3, 0.01)<br>
                        > plot(x1, f_discontinua(x1), type = "l",<br>
                        +      col = "blue", lwd = 2, xlim = c(-2, 3),<br>
                        +      ylim = c(0, 8), main = "Función Discontinua")<br>
                        > lines(x2, f_discontinua(x2), col = "blue", lwd = 2)<br>
                        > points(1, 1, pch = 21, bg = "white", col = "blue", cex = 1.5)<br>
                        > points(1, 3, pch = 16, col = "blue", cex = 1.5)
                    </code>
                </div>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <h4 class="font-semibold theme-text-primary mb-2">Función Paso a Paso (Step Function)</h4>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Crear función escalón<br>
                    > crear_funcion_paso <- function(breakpoints, values) {<br>
                    +   function(x) {<br>
                    +     resultado <- numeric(length(x))<br>
                    +     for(i in 1:length(breakpoints)) {<br>
                    +       if(i == 1) {<br>
                    +         mask <- x <= breakpoints[i]<br>
                    +       } else {<br>
                    +         mask <- x > breakpoints[i-1] & x <= breakpoints[i]<br>
                    +       }<br>
                    +       resultado[mask] <- values[i]<br>
                    +     }<br>
                    +     # Último tramo<br>
                    +     mask <- x > breakpoints[length(breakpoints)]<br>
                    +     resultado[mask] <- values[length(values)]<br>
                    +     return(resultado)<br>
                    +   }<br>
                    + }<br><br>
                    # Definir función paso<br>
                    > f_paso <- crear_funcion_paso(c(-1, 1, 3), c(1, 3, 2, 4))<br>
                    > x <- seq(-3, 5, 0.01)<br>
                    > y <- f_paso(x)<br><br>
                    # Graficar función paso<br>
                    > plot(x, y, type = "s", lwd = 3, col = "darkgreen",<br>
                    +      main = "Función Paso a Paso",<br>
                    +      xlab = "x", ylab = "f(x)")<br>
                    > abline(v = c(-1, 1, 3), lty = 2, col = "gray")
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">9. Visualización Interactiva con plotly</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <h4 class="font-semibold theme-text-primary mb-2">Instalación y Configuración</h4>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Instalar plotly (solo una vez)<br>
                    > install.packages("plotly")<br>
                    > library(plotly)<br><br>
                    # Convertir gráfico ggplot2 a interactivo<br>
                    > library(ggplot2)<br>
                    > p <- ggplot(mtcars, aes(x = wt, y = mpg, color = factor(cyl))) +<br>
                    +   geom_point(size = 3) +<br>
                    +   labs(title = "Gráfico Interactivo", color = "Cilindros")<br><br>
                    # Hacer interactivo<br>
                    > ggplotly(p)
                </code>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Gráfico 3D Interactivo</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Superficie 3D<br>
                        > x <- y <- seq(-3, 3, length.out = 50)<br>
                        > z <- outer(x, y, function(x, y) {<br>
                        +   sin(sqrt(x^2 + y^2))<br>
                        + })<br><br>
                        # Gráfico de superficie<br>
                        > plot_ly(z = ~z, type = "surface",<br>
                        +         colorscale = "Viridis") %>%<br>
                        +   layout(title = "Superficie 3D Interactiva",<br>
                        +          scene = list(<br>
                        +            xaxis = list(title = "X"),<br>
                        +            yaxis = list(title = "Y"),<br>
                        +            zaxis = list(title = "Z")<br>
                        +          ))
                    </code>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Animaciones</h4>
                    <code class="text-sm block bg-gray-800 text-green-400 p-2 rounded">
                        # Datos para animación<br>
                        > df_anim <- data.frame(<br>
                        +   x = rep(1:10, 3),<br>
                        +   y = c(1:10, (1:10)^1.5, (1:10)^2),<br>
                        +   frame = rep(c("Linear", "Potencia 1.5", "Cuadrática"), each = 10)<br>
                        + )<br><br>
                        # Crear animación<br>
                        > p_anim <- plot_ly(df_anim, x = ~x, y = ~y, <br>
                        +                   frame = ~frame, type = "scatter",<br>
                        +                   mode = "lines+markers") %>%<br>
                        +   animation_opts(frame = 1000, transition = 500) %>%<br>
                        +   layout(title = "Funciones Animadas")
                    </code>
                </div>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <h4 class="font-semibold theme-text-primary mb-2">Dashboard Interactivo</h4>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Crear subplot con múltiples gráficos<br>
                    > library(plotly)<br>
                    > library(dplyr)<br><br>
                    # Gráfico 1: Dispersión<br>
                    > p1 <- plot_ly(mtcars, x = ~wt, y = ~mpg, color = ~factor(cyl),<br>
                    +               type = "scatter", mode = "markers") %>%<br>
                    +   layout(title = "Peso vs MPG")<br><br>
                    # Gráfico 2: Boxplot<br>
                    > p2 <- plot_ly(mtcars, y = ~mpg, color = ~factor(cyl),<br>
                    +               type = "box") %>%<br>
                    +   layout(title = "Distribución MPG")<br><br>
                    # Combinar en subplot<br>
                    > subplot(p1, p2, nrows = 2) %>%<br>
                    +   layout(title = "Dashboard Interactivo de Coches",<br>
                    +          showlegend = FALSE)
                </code>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg mb-6">
                <h4 class="font-semibold theme-text-primary mb-2">Gráfico de Función por Tramos con plotly</h4>
                <code class="text-sm block bg-gray-800 text-green-400 p-3 rounded">
                    # Función por tramos interactiva<br>
                    > x1 <- seq(-3, 0, 0.1)<br>
                    > y1 <- x1^2<br>
                    > x2 <- seq(0, 2, 0.1)<br>
                    > y2 <- 2*x2 + 1<br>
                    > x3 <- seq(2, 4, 0.1)<br>
                    > y3 <- -x3 + 7<br><br>
                    # Crear gráfico interactivo<br>
                    > plot_ly() %>%<br>
                    +   add_trace(x = x1, y = y1, type = "scatter", mode = "lines",<br>
                    +            name = "x² (x < 0)", line = list(color = "red", width = 3)) %>%<br>
                    +   add_trace(x = x2, y = y2, type = "scatter", mode = "lines",<br>
                    +            name = "2x+1 (0≤x≤2)", line = list(color = "blue", width = 3)) %>%<br>
                    +   add_trace(x = x3, y = y3, type = "scatter", mode = "lines",<br>
                    +            name = "-x+7 (x>2)", line = list(color = "green", width = 3)) %>%<br>
                    +   layout(title = "Función por Tramos Interactiva",<br>
                    +          xaxis = list(title = "x"),<br>
                    +          yaxis = list(title = "f(x)"),<br>
                    +          hovermode = "x unified")
                </code>
            </div>
            
            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Consejos para Gráficos Efectivos</h4>
                <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• <strong>Elige el tipo correcto:</strong> Dispersión para relaciones, histogramas para distribuciones</li>
                    <li>• <strong>Usa colores con propósito:</strong> No solo por estética, sino para comunicar información</li>
                    <li>• <strong>Títulos y etiquetas claras:</strong> Siempre incluye títulos descriptivos y etiquetas de ejes</li>
                    <li>• <strong>ggplot2 para gráficos complejos:</strong> Más flexible que gráficos base para visualizaciones avanzadas</li>
                    <li>• <strong>Considera la audiencia:</strong> Ajusta el nivel de detalle según quien verá el gráfico</li>
                    <li>• <strong>Exporta en alta calidad:</strong> Usa vectoriales (PDF/SVG) para publicaciones</li>
                    <li>• <strong>Mantén la simplicidad:</strong> Evita sobrecargar con demasiada información</li>
                </ul>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">📈 Práctica de Visualización en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Crea gráficos impactantes con R usando tanto funciones base como ggplot2.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Crear Gráficos en Colab
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📊 Ejercicio 1: Dashboard de Análisis</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crea un panel de gráficos múltiples:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Cargar datos<br>
data(mtcars)<br><br>
# Configurar panel 2x2<br>
par(mfrow = c(2, 2))<br><br>
# Gráfico 1: Dispersión<br>
plot(mtcars$wt, mtcars$mpg, main = "Peso vs MPG",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xlab = "Peso", ylab = "MPG", pch = 16, col = "blue")<br>
abline(lm(mpg ~ wt, data = mtcars), col = "red")<br><br>
# Gráfico 2: Histograma<br>
hist(mtcars$mpg, main = "Distribución MPG", <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xlab = "MPG", col = "lightgreen", breaks = 8)<br><br>
# Gráfico 3: Boxplot<br>
boxplot(mpg ~ cyl, data = mtcars, main = "MPG por Cilindros",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xlab = "Cilindros", ylab = "MPG", col = rainbow(3))<br><br>
# Gráfico 4: Barras<br>
barplot(table(mtcars$gear), main = "Frecuencia de Marchas",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xlab = "Marchas", ylab = "Cantidad", col = "orange")<br><br>
# Restaurar ventana<br>
par(mfrow = c(1, 1))</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🎨 Ejercicio 2: ggplot2 Avanzado</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crea visualizaciones profesionales:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                            <code># Instalar y cargar ggplot2<br>
install.packages("ggplot2")<br>
library(ggplot2)<br><br>
# Gráfico avanzado con múltiples capas<br>
ggplot(mtcars, aes(x = wt, y = mpg)) +<br>
&nbsp;&nbsp;geom_point(aes(color = factor(cyl), size = hp), alpha = 0.7) +<br>
&nbsp;&nbsp;geom_smooth(method = "lm", se = TRUE, color = "black") +<br>
&nbsp;&nbsp;scale_color_manual(values = c("red", "green", "blue")) +<br>
&nbsp;&nbsp;labs(title = "Análisis de Eficiencia de Combustible",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subtitle = "Relación entre peso, potencia y consumo",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = "Peso (1000 lbs)", y = "Millas por Galón",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color = "Cilindros", size = "Potencia (HP)") +<br>
&nbsp;&nbsp;theme_minimal() +<br>
&nbsp;&nbsp;theme(plot.title = element_text(hjust = 0.5, size = 14))</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🔧 Ejercicio 3: Función por Tramos</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crea y grafica una función definida por tramos:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                            <code># Función por tramos: costo de envío<br>
funcion_costo <- function(peso) {<br>
&nbsp;&nbsp;ifelse(peso <= 1, <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5,                    # Hasta 1kg: $5<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ifelse(peso <= 5,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5 + 2*(peso-1),      # 1-5kg: $5 + $2/kg adicional<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13 + 1.5*(peso-5)))  # >5kg: $13 + $1.5/kg adicional<br>
}<br><br>
# Graficar la función<br>
peso <- seq(0, 10, 0.1)<br>
costo <- funcion_costo(peso)<br><br>
plot(peso, costo, type = "l", lwd = 3, col = "darkred",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;main = "Costo de Envío por Peso",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xlab = "Peso (kg)", ylab = "Costo ($)",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;grid = TRUE)<br><br>
# Marcar puntos de cambio<br>
abline(v = c(1, 5), lty = 2, col = "gray")<br>
points(c(1, 5), funcion_costo(c(1, 5)), pch = 16, col = "red", cex = 1.5)</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🎯 Ejercicio 4: Gráfico Interactivo con plotly</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crea un gráfico 3D interactivo:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                            <code># Instalar y cargar plotly<br>
install.packages("plotly")<br>
library(plotly)<br><br>
# Crear datos para superficie 3D<br>
x <- seq(-2, 2, length.out = 30)<br>
y <- seq(-2, 2, length.out = 30)<br>
z <- outer(x, y, function(x, y) {<br>
&nbsp;&nbsp;x^2 + y^2  # Paraboloide<br>
})<br><br>
# Crear gráfico 3D interactivo<br>
plot_ly(x = x, y = y, z = z, type = "surface",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colorscale = list(c(0, "blue"), c(0.5, "yellow"), c(1, "red"))) %>%<br>
&nbsp;&nbsp;layout(title = "Paraboloide Interactivo",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scene = list(<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xaxis = list(title = "X"),<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yaxis = list(title = "Y"),<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zaxis = list(title = "Z = X² + Y²")<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))<br><br>
# Consejo: Usa el mouse para rotar la vista 3D</code>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Gráfico de dispersión básico",
                description: "Crea un gráfico que muestre la relación entre dos variables",
                template: "# Usa los datos mtcars para crear un gráfico de dispersión\n# entre peso (wt) y millas por galón (mpg)\n",
                solution: "data(mtcars)\nplot(mtcars$wt, mtcars$mpg, \n     main = 'Peso vs MPG', \n     xlab = 'Peso (1000 lbs)', \n     ylab = 'Millas por Galón',\n     pch = 16, col = 'blue')"
            },
            {
                title: "Histograma personalizado",
                description: "Crea un histograma con personalización de colores y etiquetas",
                template: "# Crea un histograma de la variable mpg con colores y títulos personalizados\n",
                solution: "hist(mtcars$mpg, \n     main = 'Distribución de Eficiencia de Combustible', \n     xlab = 'Millas por Galón', \n     ylab = 'Frecuencia',\n     col = 'lightblue', \n     border = 'black', \n     breaks = 10)"
            },
            {
                title: "Boxplot por grupos",
                description: "Crea un diagrama de caja que compare grupos",
                template: "# Crea un boxplot que compare MPG por número de cilindros\n",
                solution: "boxplot(mpg ~ cyl, data = mtcars,\n        main = 'MPG por Número de Cilindros',\n        xlab = 'Cilindros',\n        ylab = 'Millas por Galón',\n        col = c('red', 'green', 'blue'))"
            },
            {
                title: "Gráfico con ggplot2",
                description: "Crea un gráfico usando la gramática de ggplot2",
                template: "# Instala y carga ggplot2, luego crea un gráfico de dispersión\n# con colores por grupos\n",
                solution: "library(ggplot2)\nggplot(mtcars, aes(x = wt, y = mpg, color = factor(cyl))) +\n  geom_point(size = 3) +\n  labs(title = 'Peso vs MPG por Cilindros',\n       x = 'Peso', y = 'MPG', color = 'Cilindros') +\n  theme_minimal()"
            },
            {
                title: "Función por tramos",
                description: "Crea una función definida por tramos y grafícala",
                template: "# Define una función que sea x^2 para x<0, 2x para 0<=x<=3, y 6 para x>3\n# Grafícala en el intervalo [-2, 5]\n",
                solution: "f_tramos <- function(x) {\n  ifelse(x < 0, x^2, \n         ifelse(x <= 3, 2*x, 6))\n}\nx <- seq(-2, 5, 0.1)\nplot(x, f_tramos(x), type = 'l', lwd = 2, col = 'purple',\n     main = 'Función por Tramos',\n     xlab = 'x', ylab = 'f(x)')\nabline(v = c(0, 3), lty = 2, col = 'gray')"
            },
            {
                title: "Gráfico interactivo básico",
                description: "Usa plotly para crear un gráfico interactivo",
                template: "# Instala plotly y crea un gráfico de dispersión interactivo\n# con los datos mtcars (peso vs mpg)\n",
                solution: "library(plotly)\np <- plot_ly(mtcars, x = ~wt, y = ~mpg, \n             color = ~factor(cyl), type = 'scatter', mode = 'markers',\n             text = ~paste('Modelo:', rownames(mtcars))) %>%\n  layout(title = 'Peso vs MPG - Interactivo',\n         xaxis = list(title = 'Peso'),\n         yaxis = list(title = 'MPG'))\np"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la función principal para crear gráficos básicos en R?",
                options: ["graph()", "plot()", "chart()", "draw()"],
                correct: 1
            },
            {
                question: "¿Qué parámetro se usa para cambiar el color de los puntos en plot()?",
                options: ["color", "col", "fill", "rgb"],
                correct: 1
            },
            {
                question: "¿Qué función se usa para crear histogramas en R base?",
                options: ["histogram()", "hist()", "bar()", "freq()"],
                correct: 1
            },
            {
                question: "¿Cuál es la estructura básica de un gráfico ggplot2?",
                options: ["ggplot() + data + geom", "ggplot(data, aes()) + geom_*()", "plot(data) + ggplot", "geom() + ggplot(data)"],
                correct: 1
            },
            {
                question: "¿Qué función agrega una línea de tendencia a un gráfico?",
                options: ["line()", "abline()", "addline()", "trend()"],
                correct: 1
            },
            {
                question: "¿Cómo se dividen las ventanas gráficas para múltiples gráficos?",
                options: ["par(mfrow = c(rows, cols))", "split(rows, cols)", "divide(rows, cols)", "window(rows, cols)"],
                correct: 0
            },
            {
                question: "¿Qué función de ggplot2 permite crear subgráficos por grupos?",
                options: ["group_by()", "facet_wrap()", "split_plot()", "subplot()"],
                correct: 1
            },
            {
                question: "¿Cuál es la mejor función para guardar gráficos ggplot2?",
                options: ["save()", "export()", "ggsave()", "write.plot()"],
                correct: 2
            },
            {
                question: "¿Qué función se usa comúnmente para crear funciones por tramos en R?",
                options: ["switch()", "ifelse()", "case_when()", "piecewise()"],
                correct: 1
            },
            {
                question: "¿Qué paquete permite crear gráficos interactivos en R?",
                options: ["interactive", "plotly", "htmlwidgets", "webGL"],
                correct: 1
            }
        ]
    },
    
    statistics: {
        title: "7. Estadística Descriptiva", 
        description: "Medidas de tendencia central",
        video: "https://www.youtube.com/embed/fDRa82lxzaU",
        additionalVideos: [],
        content: `<h2>Estadística Descriptiva</h2>`,
        colabContent: `<div>Estadística en Colab</div>`,
        exercises: [],
        quiz: []
    },
    
    programming: {
        title: "9. Programación en R",
        description: "Funciones y control de flujo", 
        video: "https://www.youtube.com/embed/_V8eKsto3Ug",
        additionalVideos: [],
        content: `<h2>Programación en R</h2>`,
        colabContent: `<div>Programación en Colab</div>`,
        exercises: [],
        quiz: []
    },
    
    packages: {
        title: "10. Paquetes en R",
        description: "Instalación y uso de librerías",
        video: "https://www.youtube.com/embed/YBAWVNWiZlU", 
        additionalVideos: [],
        content: `<h2>Paquetes en R</h2>`,
        colabContent: `<div>Paquetes en Colab</div>`,
        exercises: [],
        quiz: []
    },
    
    analysis: {
        title: "11. Análisis Estadístico",
        description: "Pruebas de hipótesis",
        video: "https://www.youtube.com/embed/fDRa82lxzaU",
        additionalVideos: [],
        content: `<h2>Análisis Estadístico</h2>`,
        colabContent: `<div>Análisis en Colab</div>`,
        exercises: [],
        quiz: []
    },
    
    bioconductor: {
        title: "12. Bioconductor", 
        description: "Paquetes para bioinformática",
        video: "https://www.youtube.com/embed/_V8eKsto3Ug",
        additionalVideos: [],
        content: `<h2>Bioconductor</h2>`,
        colabContent: `<div>Bioconductor en Colab</div>`,
        exercises: [],
        quiz: []
    },
    
    rmarkdown: {
        title: "13. R Markdown",
        description: "Reportes reproducibles", 
        video: "https://www.youtube.com/embed/YBAWVNWiZlU",
        additionalVideos: [],
        content: `<h2>R Markdown</h2>`,
        colabContent: `<div>R Markdown en Colab</div>`,
        exercises: [],
        quiz: []
    },
    
    shiny: {
        title: "14. Shiny",
        description: "Aplicaciones web interactivas",
        video: "https://www.youtube.com/embed/fDRa82lxzaU",
        additionalVideos: [],
        content: `<h2>Shiny</h2>`,
        colabContent: `<div>Shiny en Colab</div>`,
        exercises: [],
        quiz: []
    },
    
    resources: {
        title: "15. Recursos Adicionales",
        description: "R-coder.com y comunidad",
        video: "https://www.youtube.com/embed/_V8eKsto3Ug", 
        additionalVideos: [],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Recursos Adicionales para R</h2>
            <div class="space-y-6">
                <div class="p-6 theme-bg-tertiary rounded-lg">
                    <h3 class="text-xl font-semibold theme-text-primary mb-3">🌐 R-Coder.com</h3>
                    <p class="theme-text-secondary mb-4">Sitio web completo con tutoriales de R en español.</p>
                    <a href="https://r-coder.com/" target="_blank" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Visitar R-Coder</a>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-lg">
                    <h3 class="text-xl font-semibold theme-text-primary mb-3">📚 Documentación Oficial</h3>
                    <ul class="list-disc list-inside theme-text-secondary space-y-2">
                        <li><a href="https://cran.r-project.org/" class="text-blue-500 hover:underline" target="_blank">CRAN - The R Project</a></li>
                        <li><a href="https://www.rstudio.com/" class="text-blue-500 hover:underline" target="_blank">RStudio</a></li>
                        <li><a href="https://www.bioconductor.org/" class="text-blue-500 hover:underline" target="_blank">Bioconductor</a></li>
                    </ul>
                </div>
            </div>
        `,
        colabContent: `<div>Recursos en Colab</div>`,
        exercises: [],
        quiz: []
    },
    
    modules: {
        title: "6. Módulos",
        description: "Importar y crear módulos",
        video: "https://www.youtube.com/embed/GkD6H_tmk9s",
        additionalVideos: [
            { title: "Crear módulos", url: "https://www.youtube.com/embed/GkD6H_tmk9s" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Módulos en Python</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">¿Qué son los módulos?</h3>
            <p class="theme-text-secondary mb-4">Un módulo es un archivo que contiene código Python. Permite organizar el código en archivos separados y reutilizar funciones y clases.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Importar módulos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    import math<br>
                    print(math.pi)<br>
                    print(math.sqrt(16))<br><br>
                    # Importar funciones específicas<br>
                    from math import pi, sqrt<br>
                    print(pi)<br>
                    print(sqrt(25))<br><br>
                    # Importar con alias<br>
                    import math as m<br>
                    print(m.cos(0))
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Crear tu propio módulo</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # archivo: mi_modulo.py<br>
                    def saludar(nombre):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;return f"¡Hola {nombre}!"<br><br>
                    PI = 3.14159<br><br>
                    # En otro archivo:<br>
                    import mi_modulo<br>
                    print(mi_modulo.saludar("Ana"))<br>
                    print(mi_modulo.PI)
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Módulos útiles</h3>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">math</h4>
                    <p class="text-sm theme-text-secondary">Funciones matemáticas</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">random</h4>
                    <p class="text-sm theme-text-secondary">Números aleatorios</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">datetime</h4>
                    <p class="text-sm theme-text-secondary">Fechas y horarios</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">os</h4>
                    <p class="text-sm theme-text-secondary">Sistema operativo</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Usando math",
                description: "Importa el módulo math y usa sus funciones",
                template: "import math\n\n# Calcula la raíz cuadrada de 144\n# Calcula el seno de pi/2\n# Muestra el valor de e\n",
                solution: "import math\n\nprint(math.sqrt(144))\nprint(math.sin(math.pi/2))\nprint(math.e)"
            },
            {
                title: "Números aleatorios",
                description: "Genera números aleatorios usando random",
                template: "import random\n\n# Genera un número aleatorio entre 1 y 100\n# Elige un elemento aleatorio de una lista\n",
                solution: "import random\n\nprint(random.randint(1, 100))\nlista = ['a', 'b', 'c', 'd']\nprint(random.choice(lista))"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la forma correcta de importar solo la función sqrt del módulo math?",
                options: ["import math.sqrt", "from math import sqrt", "import sqrt from math", "math.import(sqrt)"],
                correct: 1
            },
            {
                question: "¿Cómo se importa un módulo con un alias?",
                options: ["import math as m", "import math alias m", "from math import as m", "import m from math"],
                correct: 0
            },
            {
                question: "¿Qué variable contiene el nombre del módulo actual?",
                options: ["__module__", "__name__", "__file__", "__self__"],
                correct: 1
            },
            {
                question: "¿Cómo se importan todas las funciones de un módulo?",
                options: ["import *", "from módulo import *", "import módulo.*", "from * import módulo"],
                correct: 1
            },
            {
                question: "¿Dónde busca Python los módulos para importar?",
                options: ["En sys.path", "En os.path", "En PYTHONPATH solamente", "Solo en el directorio actual"],
                correct: 0
            },
            {
                question: "¿Cuál es la diferencia entre un módulo y un paquete?",
                options: ["No hay diferencia", "Un paquete contiene múltiples módulos", "Un módulo es más grande", "Un paquete es solo para librerías"],
                correct: 1
            },
            {
                question: "¿Qué archivo indica que un directorio es un paquete Python?",
                options: ["__init__.py", "__package__.py", "package.py", "__main__.py"],
                correct: 0
            },
            {
                question: "¿Cómo se ejecuta un módulo como script?",
                options: ["python -m módulo", "python módulo.py", "run módulo", "Opciones A y B son correctas"],
                correct: 3
            },
            {
                question: "¿Qué sucede cuando Python importa un módulo por primera vez?",
                options: ["Solo se lee", "Se ejecuta todo el código del módulo", "Solo se cargan las funciones", "Se compila únicamente"],
                correct: 1
            },
            {
                question: "¿Cómo se evita que cierto código se ejecute al importar un módulo?",
                options: ["Usando if __main__:", "Usando if __name__ == '__main__':", "Usando if import:", "No es posible"],
                correct: 1
            }
        ]
    },
    
    io: {
        title: "7. Entrada y Salida",
        description: "Archivos y formateo",
        video: "https://www.youtube.com/embed/JkTEdzYD-as",
        additionalVideos: [
            { title: "Manejo de archivos", url: "https://www.youtube.com/embed/A5V8RLkgebY" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Entrada y Salida</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Formateo de cadenas</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # f-strings (Python 3.6+)<br>
                    nombre = "Ana"<br>
                    edad = 25<br>
                    print(f"Hola, soy {nombre} y tengo {edad} años")<br><br>
                    # Método format()<br>
                    print("Hola, soy {} y tengo {} años".format(nombre, edad))<br><br>
                    # Formateo con nombres<br>
                    print("Hola, soy {n} y tengo {e} años".format(n=nombre, e=edad))
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Leer archivos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # Leer archivo completo<br>
                    with open('archivo.txt', 'r') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;contenido = f.read()<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(contenido)<br><br>
                    # Leer línea por línea<br>
                    with open('archivo.txt', 'r') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;for linea in f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(linea.strip())
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Escribir archivos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # Escribir texto<br>
                    with open('salida.txt', 'w') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;f.write("Hola mundo\\n")<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;f.write("Segunda línea\\n")<br><br>
                    # Agregar al final<br>
                    with open('salida.txt', 'a') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;f.write("Línea adicional\\n")
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Trabajar con JSON</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    import json<br><br>
                    # Escribir JSON<br>
                    datos = {'nombre': 'Juan', 'edad': 30}<br>
                    with open('datos.json', 'w') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;json.dump(datos, f)<br><br>
                    # Leer JSON<br>
                    with open('datos.json', 'r') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;datos = json.load(f)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(datos)
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Formateo de strings",
                description: "Practica diferentes formas de formatear cadenas",
                template: "nombre = 'María'\nedad = 28\nprofesion = 'Doctora'\n\n# Usa f-strings para crear una oración\n# Usa .format() para lo mismo\n",
                solution: "nombre = 'María'\nedad = 28\nprofesion = 'Doctora'\n\nprint(f'{nombre} tiene {edad} años y es {profesion}')\nprint('{} tiene {} años y es {}'.format(nombre, edad, profesion))"
            },
            {
                title: "Simulación de archivos",
                description: "Simula el trabajo con archivos usando strings",
                template: "# Simula escribir y leer un archivo\ncontenido = \"Esta es una línea\\nEsta es otra línea\\n\"\n\n# Divide el contenido en líneas y procesalo\n",
                solution: "contenido = \"Esta es una línea\\nEsta es otra línea\\n\"\nlineas = contenido.split('\\n')\nfor linea in lineas:\n    if linea:\n        print(f'Procesando: {linea}')"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la ventaja de usar 'with' al abrir archivos?",
                options: ["Es más rápido", "Se cierra automáticamente", "Usa menos memoria", "Es más moderno"],
                correct: 1
            },
            {
                question: "¿Cuál es el modo correcto para abrir un archivo solo para lectura?",
                options: ["'r'", "'read'", "'rb'", "'open'"],
                correct: 0
            },
            {
                question: "¿Qué método se usa para leer todo el contenido de un archivo?",
                options: ["read()", "readall()", "getall()", "content()"],
                correct: 0
            },
            {
                question: "¿Cómo se lee un archivo línea por línea?",
                options: ["for line in file:", "file.readlines()", "file.readline()", "Todas las anteriores"],
                correct: 3
            },
            {
                question: "¿Qué modo se usa para escribir en un archivo (sobrescribir)?",
                options: ["'w'", "'write'", "'a'", "'overwrite'"],
                correct: 0
            },
            {
                question: "¿Cuál es la diferencia entre 'w' y 'a' al abrir archivos?",
                options: ["No hay diferencia", "'w' sobrescribe, 'a' añade al final", "'a' es más rápido", "'w' es para texto, 'a' para binario"],
                correct: 1
            },
            {
                question: "¿Cómo se verifica si un archivo existe antes de abrirlo?",
                options: ["os.path.exists()", "file.exists()", "os.file.check()", "path.isfile()"],
                correct: 0
            },
            {
                question: "¿Qué codificación se recomienda especificar al abrir archivos de texto?",
                options: ["ascii", "utf-8", "latin-1", "unicode"],
                correct: 1
            },
            {
                question: "¿Cómo se formatea una cadena usando f-strings?",
                options: ["f'Hola {nombre}'", "format('Hola {nombre}')", "'Hola %s' % nombre", "Todas las anteriores"],
                correct: 0
            },
            {
                question: "¿Qué método se usa para dividir una cadena en líneas?",
                options: ["split()", "splitlines()", "split('\\n')", "Opciones B y C son correctas"],
                correct: 3
            }
        ]
    },
    
    errors: {
        title: "8. Errores y Excepciones",
        description: "Manejo de errores",
        video: "https://www.youtube.com/embed/9D7ml-lCGsc",
        additionalVideos: [
            { title: "Try-Except Python", url: "https://www.youtube.com/embed/9D7ml-lCGsc" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Errores y Excepciones</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Tipos de errores</h3>
            <div class="space-y-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Errores de sintaxis</h4>
                    <p class="text-sm theme-text-secondary">Errores en la estructura del código</p>
                    <code class="text-sm block mt-2">print("Hola"  # Falta el paréntesis de cierre</code>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Excepciones</h4>
                    <p class="text-sm theme-text-secondary">Errores durante la ejecución</p>
                    <code class="text-sm block mt-2">10 / 0  # ZeroDivisionError</code>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Manejo de excepciones</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    try:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;numero = int(input("Introduce un número: "))<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;resultado = 10 / numero<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(f"Resultado: {resultado}")<br>
                    except ValueError:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print("Por favor, introduce un número válido")<br>
                    except ZeroDivisionError:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print("No se puede dividir por cero")<br>
                    except Exception as e:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(f"Error inesperado: {e}")<br>
                    finally:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print("Fin del programa")
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Lanzar excepciones</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    def dividir(a, b):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;if b == 0:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;raise ValueError("El divisor no puede ser cero")<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;return a / b<br><br>
                    try:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;resultado = dividir(10, 0)<br>
                    except ValueError as e:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(f"Error: {e}")
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Excepciones comunes</h3>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">ValueError</h4>
                    <p class="text-sm theme-text-secondary">Valor inapropiado</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">TypeError</h4>
                    <p class="text-sm theme-text-secondary">Tipo de dato incorrecto</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">IndexError</h4>
                    <p class="text-sm theme-text-secondary">Índice fuera de rango</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">KeyError</h4>
                    <p class="text-sm theme-text-secondary">Clave no encontrada</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Manejo básico de errores",
                description: "Crea un programa que maneje errores de conversión",
                template: "# Pide al usuario un número\n# Maneja el error si no introduce un número válido\n# Muestra el doble del número si es válido\n",
                solution: "try:\n    numero = int(input('Introduce un número: '))\n    print(f'El doble es: {numero * 2}')\nexcept ValueError:\n    print('Por favor, introduce un número válido')"
            },
            {
                title: "Función con validación",
                description: "Crea una función que valide la entrada",
                template: "def edad_valida(edad):\n    # Valida que la edad sea un número positivo\n    # Lanza una excepción si no es válida\n    pass\n\n# Prueba la función\n",
                solution: "def edad_valida(edad):\n    if not isinstance(edad, int):\n        raise TypeError('La edad debe ser un número entero')\n    if edad < 0:\n        raise ValueError('La edad no puede ser negativa')\n    return True\n\ntry:\n    edad_valida(25)\n    print('Edad válida')\nexcept (TypeError, ValueError) as e:\n    print(f'Error: {e}')"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la diferencia entre try-except y try-finally?",
                options: ["No hay diferencia", "finally siempre se ejecuta", "except es opcional", "finally maneja errores"],
                correct: 1
            },
            {
                question: "¿Cuál es la excepción más común al acceder a un índice que no existe?",
                options: ["ValueError", "IndexError", "KeyError", "AttributeError"],
                correct: 1
            },
            {
                question: "¿Cómo se capturan múltiples tipos de excepciones?",
                options: ["except ValueError, TypeError:", "except (ValueError, TypeError):", "except ValueError or TypeError:", "except ValueError and TypeError:"],
                correct: 1
            },
            {
                question: "¿Qué palabra clave se usa para lanzar una excepción manualmente?",
                options: ["throw", "raise", "error", "exception"],
                correct: 1
            },
            {
                question: "¿Cuál es la excepción que se lanza al dividir por cero?",
                options: ["ValueError", "ArithmeticError", "ZeroDivisionError", "MathError"],
                correct: 2
            },
            {
                question: "¿Qué hace la cláusula else en un bloque try-except?",
                options: ["Se ejecuta si hay error", "Se ejecuta si no hay error", "Se ejecuta siempre", "No existe else en try-except"],
                correct: 1
            },
            {
                question: "¿Cuál es la excepción base de todas las excepciones en Python?",
                options: ["Error", "Exception", "BaseException", "RuntimeError"],
                correct: 2
            },
            {
                question: "¿Cómo se accede al mensaje de error de una excepción?",
                options: ["error.message", "str(error)", "error.text", "error.details"],
                correct: 1
            },
            {
                question: "¿Cuál es la excepción que se lanza al intentar acceder a una clave inexistente en un diccionario?",
                options: ["ValueError", "IndexError", "KeyError", "AttributeError"],
                correct: 2
            },
            {
                question: "¿Cómo se crea una excepción personalizada en Python?",
                options: ["Heredando de Error", "Heredando de Exception", "Heredando de BaseException", "Usando def exception"],
                correct: 1
            }
        ]
    },
    
    classes: {
        title: "9. Clases",
        description: "Programación orientada a objetos",
        video: "https://www.youtube.com/embed/HtKqSJX7VoM",
        additionalVideos: [
            { title: "POO en Python", url: "https://www.youtube.com/embed/HtKqSJX7VoM" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Clases y Objetos</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Definir una clase</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    class Persona:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, nombre, edad):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.nombre = nombre<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.edad = edad<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def saludar(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f"Hola, soy {self.nombre}"<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def cumplir_anos(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.edad += 1<br><br>
                    # Crear una instancia<br>
                    persona1 = Persona("Juan", 30)<br>
                    print(persona1.saludar())
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Herencia</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    class Estudiante(Persona):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, nombre, edad, carrera):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super().__init__(nombre, edad)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.carrera = carrera<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def estudiar(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f"{self.nombre} está estudiando {self.carrera}"<br><br>
                    estudiante = Estudiante("Ana", 20, "Informática")<br>
                    print(estudiante.saludar())<br>
                    print(estudiante.estudiar())
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Métodos especiales</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    class Punto:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, x, y):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.x = x<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.y = y<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __str__(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f"Punto({self.x}, {self.y})"<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __add__(self, otro):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return Punto(self.x + otro.x, self.y + otro.y)<br><br>
                    p1 = Punto(1, 2)<br>
                    p2 = Punto(3, 4)<br>
                    p3 = p1 + p2<br>
                    print(p3)  # Punto(4, 6)
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Propiedades</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    class Circulo:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, radio):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._radio = radio<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;@property<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def radio(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return self._radio<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;@radio.setter<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def radio(self, valor):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if valor > 0:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._radio = valor<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;@property<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def area(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 3.14159 * self._radio ** 2
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Clase básica",
                description: "Crea una clase Coche con propiedades básicas",
                template: "class Coche:\n    # Define el constructor con marca, modelo y año\n    # Crea un método para mostrar información\n    pass\n\n# Crea una instancia y prueba el método\n",
                solution: "class Coche:\n    def __init__(self, marca, modelo, año):\n        self.marca = marca\n        self.modelo = modelo\n        self.año = año\n    \n    def info(self):\n        return f'{self.marca} {self.modelo} ({self.año})'\n\ncoche = Coche('Toyota', 'Corolla', 2020)\nprint(coche.info())"
            },
            {
                title: "Herencia práctica",
                description: "Crea una clase Animal y una subclase Perro",
                template: "class Animal:\n    def __init__(self, nombre):\n        self.nombre = nombre\n    \n    def hacer_sonido(self):\n        pass\n\nclass Perro(Animal):\n    # Completa la clase Perro\n    pass\n",
                solution: "class Animal:\n    def __init__(self, nombre):\n        self.nombre = nombre\n    \n    def hacer_sonido(self):\n        pass\n\nclass Perro(Animal):\n    def hacer_sonido(self):\n        return f'{self.nombre} dice: Guau!'\n\nperro = Perro('Rex')\nprint(perro.hacer_sonido())"
            }
        ],
        quiz: [
            {
                question: "¿Qué es self en Python?",
                options: ["Una palabra reservada", "Referencia al objeto actual", "Un tipo de dato", "Una función especial"],
                correct: 1
            },
            {
                question: "¿Cuál es el método especial que se ejecuta al crear un objeto?",
                options: ["__init__", "__new__", "__create__", "__start__"],
                correct: 0
            },
            {
                question: "¿Cómo se define herencia en Python?",
                options: ["class Hijo extends Padre:", "class Hijo(Padre):", "class Hijo inherits Padre:", "class Hijo -> Padre:"],
                correct: 1
            },
            {
                question: "¿Qué es el encapsulamiento en programación orientada a objetos?",
                options: ["Ocultar detalles internos", "Crear múltiples objetos", "Heredar de otras clases", "Usar métodos estáticos"],
                correct: 0
            },
            {
                question: "¿Cómo se define un atributo privado en Python?",
                options: ["private atributo", "_atributo", "__atributo", "private __atributo"],
                correct: 2
            },
            {
                question: "¿Qué método se llama cuando se usa print() en un objeto?",
                options: ["__print__", "__str__", "__display__", "__show__"],
                correct: 1
            },
            {
                question: "¿Cuál es la diferencia entre método de clase y método de instancia?",
                options: ["No hay diferencia", "Los métodos de clase usan @classmethod", "Los métodos de instancia son más rápidos", "Los métodos de clase no pueden acceder a self"],
                correct: 1
            },
            {
                question: "¿Qué permite el polimorfismo en Python?",
                options: ["Crear objetos múltiples", "Usar el mismo método en diferentes clases", "Heredar de múltiples clases", "Encapsular datos"],
                correct: 1
            },
            {
                question: "¿Qué método se usa para comparar si dos objetos son iguales?",
                options: ["__equal__", "__eq__", "__compare__", "__same__"],
                correct: 1
            },
            {
                question: "¿Python soporta herencia múltiple?",
                options: ["No", "Sí", "Solo con interfaces", "Solo en Python 3"],
                correct: 1
            }
        ]
    },
    
    stdlib: {
        title: "10. Biblioteca Estándar",
        description: "Módulos más importantes",
        video: "https://www.youtube.com/embed/ekzgmwbads0",
        additionalVideos: [
            { title: "Módulos útiles", url: "https://www.youtube.com/embed/ekzgmwbads0" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Biblioteca Estándar de Python</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Módulos más útiles</h3>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">os - Sistema Operativo</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    import os<br><br>
                    # Directorio actual<br>
                    print(os.getcwd())<br><br>
                    # Listar archivos<br>
                    print(os.listdir('.'))<br><br>
                    # Variables de entorno<br>
                    print(os.environ.get('HOME'))
                </code>
            </div>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">datetime - Fechas y Horas</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    from datetime import datetime, date, timedelta<br><br>
                    # Fecha actual<br>
                    hoy = date.today()<br>
                    print(hoy)<br><br>
                    # Fecha y hora actual<br>
                    ahora = datetime.now()<br>
                    print(ahora)<br><br>
                    # Operaciones con fechas<br>
                    mañana = hoy + timedelta(days=1)<br>
                    print(mañana)
                </code>
            </div>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">collections - Estructuras de Datos</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    from collections import Counter, defaultdict<br><br>
                    # Contador<br>
                    palabras = ['python', 'es', 'genial', 'python', 'es']<br>
                    contador = Counter(palabras)<br>
                    print(contador)  # Counter({'python': 2, 'es': 2, 'genial': 1})<br><br>
                    # Diccionario con valor por defecto<br>
                    dd = defaultdict(list)<br>
                    dd['frutas'].append('manzana')<br>
                    print(dd)
                </code>
            </div>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">itertools - Iteradores</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    import itertools<br><br>
                    # Combinaciones<br>
                    for combo in itertools.combinations(['A', 'B', 'C'], 2):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(combo)<br><br>
                    # Ciclo infinito<br>
                    colores = itertools.cycle(['rojo', 'verde', 'azul'])<br>
                    for i, color in enumerate(colores):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;if i > 5:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(color)
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Trabajando con fechas",
                description: "Calcula tu edad en días",
                template: "from datetime import date\n\n# Tu fecha de nacimiento (año, mes, día)\nnacimiento = date(2000, 1, 1)\nhoy = date.today()\n\n# Calcula la diferencia\n",
                solution: "from datetime import date\n\nnacimiento = date(2000, 1, 1)\nhoy = date.today()\ndiferencia = hoy - nacimiento\nprint(f'Has vivido {diferencia.days} días')"
            },
            {
                title: "Contador de palabras",
                description: "Cuenta las palabras en un texto",
                template: "from collections import Counter\n\ntexto = \"python es genial python es fácil\"\npalabras = texto.split()\n\n# Usa Counter para contar las palabras\n",
                solution: "from collections import Counter\n\ntexto = \"python es genial python es fácil\"\npalabras = texto.split()\ncontador = Counter(palabras)\nprint(contador)\nprint(f'La palabra más común es: {contador.most_common(1)[0]}')"
            }
        ],
        quiz: [
            {
                question: "¿Qué módulo usarías para trabajar con fechas?",
                options: ["time", "datetime", "date", "calendar"],
                correct: 1
            },
            {
                question: "¿Qué función del módulo os usarías para listar archivos?",
                options: ["os.list()", "os.listdir()", "os.files()", "os.dir()"],
                correct: 1
            },
            {
                question: "¿Cómo se obtiene el directorio actual de trabajo?",
                options: ["os.getcwd()", "os.pwd()", "os.currentdir()", "sys.path[0]"],
                correct: 0
            },
            {
                question: "¿Qué clase de collections es útil para contar elementos?",
                options: ["Counter", "OrderedDict", "defaultdict", "deque"],
                correct: 0
            },
            {
                question: "¿Cómo se genera un número aleatorio entre 0 y 1?",
                options: ["random.random()", "random.uniform(0,1)", "random.float()", "Opciones A y B son correctas"],
                correct: 3
            },
            {
                question: "¿Qué módulo se usa para expresiones regulares?",
                options: ["regex", "re", "regexp", "pattern"],
                correct: 1
            },
            {
                question: "¿Cómo se crea una fecha de hoy con datetime?",
                options: ["datetime.now()", "datetime.today()", "datetime.date.today()", "Todas las anteriores"],
                correct: 2
            },
            {
                question: "¿Qué función de sys contiene los argumentos de línea de comandos?",
                options: ["sys.args", "sys.argv", "sys.arguments", "sys.params"],
                correct: 1
            },
            {
                question: "¿Cómo se formatea un número decimal con 2 decimales usando format?",
                options: ["'{:.2f}'.format(num)", "'{:2f}'.format(num)", "'{:f2}'.format(num)", "'{f:.2}'.format(num)"],
                correct: 0
            },
            {
                question: "¿Qué módulo permite crear números complejos y trabajar con matemática avanzada?",
                options: ["math", "cmath", "numbers", "complex"],
                correct: 1
            }
        ]
    },
    
    stdlib2: {
        title: "11. Biblioteca Estándar II",
        description: "Temas avanzados",
        video: "https://www.youtube.com/embed/ekzgmwbads0",
        additionalVideos: [],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Biblioteca Estándar - Parte II</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Módulos Avanzados</h3>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">threading - Hilos</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    import threading<br>
                    import time<br><br>
                    def tarea(nombre):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;for i in range(5):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"{nombre}: {i}")<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time.sleep(1)<br><br>
                    # Crear hilos<br>
                    hilo1 = threading.Thread(target=tarea, args=("Hilo-1",))<br>
                    hilo2 = threading.Thread(target=tarea, args=("Hilo-2",))<br><br>
                    hilo1.start()<br>
                    hilo2.start()
                </code>
            </div>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">logging - Registro de eventos</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    import logging<br><br>
                    # Configurar logging<br>
                    logging.basicConfig(level=logging.INFO)<br><br>
                    # Diferentes niveles<br>
                    logging.debug("Mensaje de depuración")<br>
                    logging.info("Información general")<br>
                    logging.warning("Advertencia")<br>
                    logging.error("Error")<br>
                    logging.critical("Error crítico")
                </code>
            </div>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">decimal - Aritmética decimal</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    from decimal import Decimal<br><br>
                    # Problemas con float<br>
                    print(0.1 + 0.2)  # 0.30000000000000004<br><br>
                    # Solución con Decimal<br>
                    a = Decimal('0.1')<br>
                    b = Decimal('0.2')<br>
                    print(a + b)  # 0.3
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Logging básico",
                description: "Configura y usa logging en tu código",
                template: "import logging\n\n# Configura logging\n# Registra mensajes de diferentes niveles\n",
                solution: "import logging\n\nlogging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')\n\nlogging.info('Programa iniciado')\nlogging.warning('Esto es una advertencia')\nlogging.error('Esto es un error')\nlogging.info('Programa terminado')"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la ventaja de usar Decimal sobre float?",
                options: ["Es más rápido", "Más preciso para decimales", "Ocupa menos memoria", "Es más fácil de usar"],
                correct: 1
            },
            {
                question: "¿Qué niveles de logging existen en Python (de menor a mayor severidad)?",
                options: ["DEBUG, INFO, WARNING, ERROR, CRITICAL", "LOW, MEDIUM, HIGH, CRITICAL", "TRACE, DEBUG, INFO, WARN, ERROR", "ALL, INFO, WARNING, ERROR, NONE"],
                correct: 0
            },
            {
                question: "¿Cómo se configura el formato de los mensajes de logging?",
                options: ["logging.format()", "logging.basicConfig(format=...)", "logging.setFormat()", "logging.config()"],
                correct: 1
            },
            {
                question: "¿Qué módulo se usa para trabajar con datos JSON en Python?",
                options: ["json", "simplejson", "jsonlib", "data"],
                correct: 0
            },
            {
                question: "¿Cómo se convierte un diccionario Python a JSON?",
                options: ["json.dumps()", "json.loads()", "json.encode()", "json.parse()"],
                correct: 0
            },
            {
                question: "¿Qué módulo permite hacer peticiones HTTP en Python?",
                options: ["http", "requests (externa)", "urllib", "Opciones B y C son correctas"],
                correct: 3
            },
            {
                question: "¿Para qué sirve el módulo itertools?",
                options: ["Trabajar con archivos", "Crear iteradores eficientes", "Manejar fechas", "Procesar JSON"],
                correct: 1
            },
            {
                question: "¿Qué función de itertools combina múltiples iterables?",
                options: ["itertools.combine()", "itertools.chain()", "itertools.merge()", "itertools.join()"],
                correct: 1
            },
            {
                question: "¿Cómo se convierte una cadena JSON a un objeto Python?",
                options: ["json.loads()", "json.dumps()", "json.parse()", "json.decode()"],
                correct: 0
            },
            {
                question: "¿Qué módulo se usa para trabajar con archivos CSV?",
                options: ["csv", "file", "data", "table"],
                correct: 0
            }
        ]
    },
    
    venv: {
        title: "12. Entornos Virtuales",
        description: "Gestión de paquetes",
        video: "https://www.youtube.com/embed/nKPbfIU442g",
        additionalVideos: [],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Entornos Virtuales y Paquetes</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">¿Qué son los entornos virtuales?</h3>
            <p class="theme-text-secondary mb-4">Los entornos virtuales permiten tener instalaciones separadas de Python para diferentes proyectos, evitando conflictos entre versiones de paquetes.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Crear un entorno virtual</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # Crear entorno virtual<br>
                    python -m venv mi_entorno<br><br>
                    # Activar (Windows)<br>
                    mi_entorno\\Scripts\\activate<br><br>
                    # Activar (macOS/Linux)<br>
                    source mi_entorno/bin/activate<br><br>
                    # Desactivar<br>
                    deactivate
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Gestión de paquetes con pip</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # Instalar paquete<br>
                    pip install requests<br><br>
                    # Instalar versión específica<br>
                    pip install requests==2.25.1<br><br>
                    # Listar paquetes instalados<br>
                    pip list<br><br>
                    # Guardar dependencias<br>
                    pip freeze > requirements.txt<br><br>
                    # Instalar desde requirements.txt<br>
                    pip install -r requirements.txt
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Buenas prácticas</h3>
            <div class="space-y-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">1. Un entorno por proyecto</h4>
                    <p class="text-sm theme-text-secondary">Cada proyecto debería tener su propio entorno virtual</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">2. Documentar dependencias</h4>
                    <p class="text-sm theme-text-secondary">Mantén actualizado el archivo requirements.txt</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">3. No versionar el entorno</h4>
                    <p class="text-sm theme-text-secondary">Agrega la carpeta del entorno virtual al .gitignore</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Simulación de pip",
                description: "Simula el uso de pip para instalar paquetes",
                template: "# Simula los comandos que usarías para:\n# 1. Crear un entorno virtual\n# 2. Activarlo\n# 3. Instalar requests\n# 4. Guardar dependencias\n\nprint('Comandos para gestionar entornos virtuales:')",
                solution: "print('Comandos para gestionar entornos virtuales:')\nprint('1. python -m venv mi_proyecto')\nprint('2. source mi_proyecto/bin/activate (Linux/Mac)')\nprint('   mi_proyecto\\\\Scripts\\\\activate (Windows)')\nprint('3. pip install requests')\nprint('4. pip freeze > requirements.txt')\nprint('5. deactivate')"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la ventaja principal de usar entornos virtuales?",
                options: ["Son más rápidos", "Aíslan las dependencias", "Ocupan menos espacio", "Son más seguros"],
                correct: 1
            },
            {
                question: "¿Cómo se crea un entorno virtual con venv?",
                options: ["python -m venv nombre", "venv create nombre", "python venv nombre", "create venv nombre"],
                correct: 0
            },
            {
                question: "¿Cómo se activa un entorno virtual en Linux/Mac?",
                options: ["activate nombre", "source nombre/bin/activate", "nombre/activate", "./nombre/activate"],
                correct: 1
            },
            {
                question: "¿Cómo se desactiva un entorno virtual?",
                options: ["exit", "deactivate", "stop", "quit"],
                correct: 1
            },
            {
                question: "¿Qué archivo contiene las dependencias de un proyecto?",
                options: ["dependencies.txt", "packages.txt", "requirements.txt", "libs.txt"],
                correct: 2
            },
            {
                question: "¿Cómo se instalan las dependencias desde requirements.txt?",
                options: ["pip install requirements.txt", "pip install -r requirements.txt", "pip -r requirements.txt", "pip requirements.txt"],
                correct: 1
            },
            {
                question: "¿Cómo se genera el archivo requirements.txt?",
                options: ["pip freeze > requirements.txt", "pip list > requirements.txt", "pip save requirements.txt", "pip export requirements.txt"],
                correct: 0
            },
            {
                question: "¿Dónde se almacenan los paquetes en un entorno virtual?",
                options: ["En /usr/local/lib", "En el directorio del entorno virtual", "En ~/.python", "En el directorio del proyecto"],
                correct: 1
            },
            {
                question: "¿Cómo se actualiza pip en un entorno virtual?",
                options: ["pip update", "pip upgrade", "pip install --upgrade pip", "update pip"],
                correct: 2
            },
            {
                question: "¿Cuál es la diferencia entre virtualenv y venv?",
                options: ["No hay diferencia", "venv está incluido en Python 3.3+", "virtualenv es más rápido", "venv solo funciona en Linux"],
                correct: 1
            }
        ]
    },
    
    deepseek: {
        title: "13. DeepSeek IA",
        description: "Asistente IA gratuito",
        video: "",
        additionalVideos: [],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">DeepSeek IA - Tu Asistente de Programación</h2>
            <p class="theme-text-secondary mb-6">DeepSeek es un asistente de inteligencia artificial gratuito que puede ayudarte con programación en Python, resolver dudas, explicar código y mucho más.</p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-code text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Ayuda con Código</h3>
                    <p class="text-sm theme-text-secondary text-center">Obtén ayuda para escribir, depurar y optimizar tu código Python</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-question-circle text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Explicaciones</h3>
                    <p class="text-sm theme-text-secondary text-center">Recibe explicaciones detalladas de conceptos de programación</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-lightbulb text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Ideas de Proyectos</h3>
                    <p class="text-sm theme-text-secondary text-center">Descubre nuevas ideas para proyectos y ejercicios</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-graduation-cap text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Aprendizaje</h3>
                    <p class="text-sm theme-text-secondary text-center">Aprende nuevos conceptos y mejores prácticas</p>
                </div>
            </div>
            
            <div class="mb-6">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">Chat DeepSeek IA</h3>
                <div class="theme-bg-tertiary rounded-xl overflow-hidden" style="height: 600px;">
                    <iframe 
                        src="https://www.ChatStream.org/embed" 
                        width="100%" 
                        height="100%" 
                        frameborder="0"
                        style="border-radius: 12px;">
                    </iframe>
                </div>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary mb-2">💡 Consejos para usar DeepSeek:</h4>
                <ul class="text-sm theme-text-secondary space-y-1 ml-4">
                    <li>• Sé específico en tus preguntas sobre Python</li>
                    <li>• Comparte tu código para obtener ayuda personalizada</li>
                    <li>• Pregunta sobre mejores prácticas y optimizaciones</li>
                    <li>• Solicita explicaciones paso a paso de algoritmos</li>
                    <li>• Pide ideas para proyectos de práctica</li>
                </ul>
            </div>
        `,
        exercises: [
            {
                title: "Pregunta a la IA",
                description: "Usa DeepSeek para obtener ayuda con un concepto de Python que no entiendas",
                template: "# Ejemplo de pregunta para DeepSeek:\n# '¿Puedes explicarme cómo funcionan las list comprehensions en Python con ejemplos?'\n\n# Tu código de práctica aquí",
                solution: "# Ejemplo de respuesta que podrías obtener:\n# List comprehensions son una forma concisa de crear listas\nlist_comp = [x**2 for x in range(10) if x % 2 == 0]\nprint(list_comp)  # [0, 4, 16, 36, 64]"
            }
        ],
        quiz: [
            {
                question: "¿Para qué puedes usar DeepSeek IA en tu aprendizaje de Python?",
                options: ["Solo para escribir código", "Solo para explicaciones", "Para código, explicaciones, depuración y proyectos", "Solo para proyectos"],
                correct: 2
            },
            {
                question: "¿Cuál es la principal ventaja de DeepSeek IA para estudiantes?",
                options: ["Es muy caro", "Es completamente gratuito", "Solo funciona en inglés", "Requiere instalación"],
                correct: 1
            },
            {
                question: "¿Qué tipo de asistencia puede proporcionar DeepSeek con el código Python?",
                options: ["Solo sintaxis básica", "Explicaciones, correcciones y optimizaciones", "Solo errores simples", "Solo comentarios"],
                correct: 1
            },
            {
                question: "¿DeepSeek puede ayudar con proyectos completos de Python?",
                options: ["No, solo líneas individuales", "Sí, puede asistir en proyectos completos", "Solo con funciones simples", "Solo con variables"],
                correct: 1
            },
            {
                question: "¿Cómo puede DeepSeek ayudar en la depuración de código?",
                options: ["No puede ayudar con errores", "Identifica errores y sugiere soluciones", "Solo muestra errores de sintaxis", "Solo funciona con print()"],
                correct: 1
            },
            {
                question: "¿Qué ventaja tiene usar IA para aprender Python?",
                options: ["Reemplaza completamente a los profesores", "Proporciona asistencia personalizada 24/7", "Solo funciona para expertos", "Es más lento que los libros"],
                correct: 1
            },
            {
                question: "¿DeepSeek puede explicar conceptos complejos de Python?",
                options: ["Solo conceptos básicos", "Sí, desde básicos hasta avanzados", "Solo sintaxis", "Solo errores"],
                correct: 1
            },
            {
                question: "¿Cómo puede DeepSeek ayudar con las mejores prácticas de Python?",
                options: ["No conoce mejores prácticas", "Sugiere mejoras y optimizaciones", "Solo corrige errores", "Solo da ejemplos básicos"],
                correct: 1
            },
            {
                question: "¿Qué tipo de preguntas puedes hacer a DeepSeek sobre Python?",
                options: ["Solo preguntas muy básicas", "Cualquier pregunta relacionada con Python", "Solo sobre errores", "Solo sobre sintaxis"],
                correct: 1
            },
            {
                question: "¿DeepSeek puede ayudar a generar código Python desde descripciones?",
                options: ["No puede generar código", "Sí, puede convertir descripciones en código", "Solo copia código existente", "Solo modifica código existente"],
                correct: 1
            }
        ]
    },
    
    "google-colab": {
        title: "14. Google Colab",
        description: "Notebook en la nube",
        video: "https://www.youtube.com/embed/inN8seMm7UI",
        additionalVideos: [
            { title: "Introducción a Google Colab", url: "https://www.youtube.com/embed/2QqvFa_27J4" },
            { title: "Google Colab Tips", url: "https://www.youtube.com/embed/Zwg8c0RIP7g" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Google Colab - Tu Laboratorio Python en la Nube</h2>
            <p class="theme-text-secondary mb-6">Google Colaboratory es un entorno de Jupyter notebook gratuito que se ejecuta completamente en la nube. Perfecto para practicar Python sin instalaciones.</p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-cloud text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Gratis y en la Nube</h3>
                    <p class="text-sm theme-text-secondary text-center">Sin instalaciones, ejecuta Python directamente en tu navegador</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-save text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Auto-guardado</h3>
                    <p class="text-sm theme-text-secondary text-center">Tus notebooks se guardan automáticamente en Google Drive</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-share-alt text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Colaborativo</h3>
                    <p class="text-sm theme-text-secondary text-center">Comparte y colabora en tiempo real con otros</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-rocket text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">GPU Gratuita</h3>
                    <p class="text-sm theme-text-secondary text-center">Acceso gratuito a GPU para proyectos de IA</p>
                </div>
            </div>
            
            <div class="mb-8">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">🚀 Crear Nuevo Notebook</h3>
                <div class="space-y-4">
                    <div class="p-6 theme-bg-tertiary rounded-xl border-2 border-blue-500">
                        <div class="text-center">
                            <h4 class="text-lg font-semibold theme-text-primary mb-3">¡Comienza a programar ahora!</h4>
                            <p class="theme-text-secondary mb-4">Cada vez que hagas clic, se abrirá un nuevo notebook en Google Colab listo para usar.</p>
                            <button id="newColabBtn" class="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                                <i class="fab fa-google mr-2"></i>Abrir Nuevo Notebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <h4 class="text-lg font-semibold theme-text-primary mb-3">📝 Características</h4>
                    <ul class="text-sm theme-text-secondary space-y-2">
                        <li>• Jupyter Notebooks en la nube</li>
                        <li>• Python 3.x preinstalado</li>
                        <li>• Bibliotecas populares incluidas</li>
                        <li>• Visualización de datos integrada</li>
                        <li>• Markdown y LaTeX soportados</li>
                    </ul>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <h4 class="text-lg font-semibold theme-text-primary mb-3">📚 Bibliotecas Incluidas</h4>
                    <ul class="text-sm theme-text-secondary space-y-2">
                        <li>• NumPy - Computación numérica</li>
                        <li>• Pandas - Análisis de datos</li>
                        <li>• Matplotlib - Visualización</li>
                        <li>• TensorFlow - Machine Learning</li>
                        <li>• Y muchas más...</li>
                    </ul>
                </div>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg mb-6">
                <h4 class="font-semibold theme-text-primary mb-3">🎯 Primeros Pasos en Colab:</h4>
                <ol class="text-sm theme-text-secondary space-y-2 ml-4">
                    <li>1. Haz clic en "Abrir Nuevo Notebook" arriba</li>
                    <li>2. Inicia sesión con tu cuenta de Google</li>
                    <li>3. ¡Empieza a escribir código Python!</li>
                    <li>4. Presiona Shift+Enter para ejecutar celdas</li>
                    <li>5. Tu trabajo se guarda automáticamente</li>
                </ol>
            </div>
            
            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Consejo Pro:</h4>
                <p class="text-sm text-blue-700 dark:text-blue-300">
                    Usa Google Colab para experimentar con el código de los ejercicios de esta academia. 
                    Es perfecto para proyectos de ciencia de datos y machine learning.
                </p>
            </div>
        `,
        exercises: [
            {
                title: "Tu primer notebook",
                description: "Abre Google Colab y crea tu primer programa",
                template: "# En Google Colab, escribe este código:\nprint('¡Hola desde Google Colab!')\n\n# Luego presiona Shift+Enter para ejecutar",
                solution: "print('¡Hola desde Google Colab!')\n# ¡Así de fácil! Colab ejecuta el código en la nube"
            },
            {
                title: "Explora las bibliotecas",
                description: "Prueba algunas bibliotecas preinstaladas en Colab",
                template: "# Prueba estas bibliotecas en Colab:\nimport numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Crea un gráfico simple\n# Tu código aquí",
                solution: "import numpy as np\nimport matplotlib.pyplot as plt\n\nx = np.linspace(0, 10, 100)\ny = np.sin(x)\n\nplt.plot(x, y)\nplt.title('Función Seno')\nplt.show()"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la principal ventaja de Google Colab?",
                options: ["Es más rápido que Python local", "No requiere instalación y es gratuito", "Solo funciona con Google", "Es mejor para principiantes"],
                correct: 1
            },
            {
                question: "¿Cómo ejecutas una celda de código en Google Colab?",
                options: ["Ctrl+Enter", "Shift+Enter", "Alt+Enter", "F5"],
                correct: 1
            },
            {
                question: "¿Qué bibliotecas vienen preinstaladas en Google Colab?",
                options: ["Solo NumPy", "NumPy, Pandas, Matplotlib y muchas más", "Solo bibliotecas básicas", "Ninguna"],
                correct: 1
            },
            {
                question: "¿Dónde se ejecuta el código en Google Colab?",
                options: ["En tu computadora local", "En los servidores de Google", "En tu navegador", "En tu teléfono"],
                correct: 1
            },
            {
                question: "¿Necesitas una cuenta de Google para usar Colab?",
                options: ["No", "Sí", "Solo para proyectos grandes", "Solo para guardar archivos"],
                correct: 1
            },
            {
                question: "¿Qué tipo de archivos puedes crear en Google Colab?",
                options: ["Solo .py", "Solo .txt", "Notebooks .ipynb", "Solo .html"],
                correct: 2
            },
            {
                question: "¿Cómo compartes un notebook de Colab con otros?",
                options: ["No se puede compartir", "Mediante un enlace compartible", "Solo por email", "Solo descargando el archivo"],
                correct: 1
            },
            {
                question: "¿Google Colab ofrece GPU gratuita?",
                options: ["No", "Sí, con limitaciones", "Solo para universidades", "Solo para empresas"],
                correct: 1
            },
            {
                question: "¿Cómo instalas nuevas bibliotecas en Colab?",
                options: ["pip install en una celda", "No se pueden instalar", "Solo desde configuración", "Descargando manualmente"],
                correct: 0
            },
            {
                question: "¿Los archivos en Colab se guardan permanentemente?",
                options: ["Sí, siempre", "No, se eliminan después de inactividad", "Solo los importantes", "Solo si los descargas"],
                correct: 1
            }
        ]
    },
    
    cursor: {
        title: "15. Cursor IDE",
        description: "Editor con IA integrada",
        video: "https://www.youtube.com/embed/tp1yrfYnLR8",
        additionalVideos: [
            { title: "Cursor AI Setup", url: "https://www.youtube.com/embed/yk5lkEKlp6I" },
            { title: "Cursor vs VS Code", url: "https://www.youtube.com/embed/XLF-tZqD--o" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Cursor IDE - Editor de Código con IA</h2>
            <p class="theme-text-secondary mb-6">Cursor es un editor de código revolucionario que integra inteligencia artificial directamente en tu flujo de trabajo de programación. Basado en VS Code pero potenciado con IA.</p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-brain text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">IA Integrada</h3>
                    <p class="text-sm theme-text-secondary text-center">Autocompletado inteligente y generación de código con IA</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-code text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Compatible con VS Code</h3>
                    <p class="text-sm theme-text-secondary text-center">Todas tus extensiones y configuraciones funcionan</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-comments text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Chat con IA</h3>
                    <p class="text-sm theme-text-secondary text-center">Pregunta directamente sobre tu código y proyectos</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-magic text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Refactoring IA</h3>
                    <p class="text-sm theme-text-secondary text-center">Mejora automática y refactorización de código</p>
                </div>
            </div>
            
            <div class="mb-8">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">🚀 Abrir Cursor IDE</h3>
                <div class="space-y-4">
                    <div class="p-6 theme-bg-tertiary rounded-xl border-2 border-purple-500">
                        <div class="text-center">
                            <h4 class="text-lg font-semibold theme-text-primary mb-3">¡Lanza Cursor desde tu sistema!</h4>
                            <p class="theme-text-secondary mb-4">Detectaremos tu sistema operativo y ejecutaremos el comando apropiado para abrir Cursor IDE.</p>
                            <button id="launchCursorBtn" class="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                                <i class="fas fa-terminal mr-2"></i>Ejecutar Cursor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grid md:grid-cols-3 gap-4 mb-8">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">🖥️ Windows</h4>
                    <code class="text-xs theme-text-secondary">cursor</code>
                    <p class="text-xs theme-text-secondary mt-1">Comando desde PowerShell/CMD</p>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">🍎 macOS</h4>
                    <code class="text-xs theme-text-secondary">cursor</code>
                    <p class="text-xs theme-text-secondary mt-1">Comando desde Terminal</p>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">🐧 Linux</h4>
                    <code class="text-xs theme-text-secondary">cursor</code>
                    <p class="text-xs theme-text-secondary mt-1">Comando desde Terminal</p>
                </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <h4 class="text-lg font-semibold theme-text-primary mb-3">⚡ Características IA</h4>
                    <ul class="text-sm theme-text-secondary space-y-2">
                        <li>• Tab para autocompletado inteligente</li>
                        <li>• Cmd+K para editar con IA</li>
                        <li>• Cmd+L para chat con IA</li>
                        <li>• Generación de código completo</li>
                        <li>• Explicación de errores automática</li>
                    </ul>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <h4 class="text-lg font-semibold theme-text-primary mb-3">🔧 Instalación</h4>
                    <ul class="text-sm theme-text-secondary space-y-2">
                        <li>• Descargar desde cursor.com</li>
                        <li>• Instalar como aplicación normal</li>
                        <li>• Configurar comando en terminal</li>
                        <li>• Importar configuración de VS Code</li>
                        <li>• ¡Listo para programar con IA!</li>
                    </ul>
                </div>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg mb-6">
                <h4 class="font-semibold theme-text-primary mb-3">🎯 Cómo usar Cursor:</h4>
                <ol class="text-sm theme-text-secondary space-y-2 ml-4">
                    <li>1. Descarga e instala Cursor desde cursor.com</li>
                    <li>2. Configura el comando en terminal (Ver → Command Palette → "Install cursor command")</li>
                    <li>3. Abre un proyecto: <code>cursor .</code> en tu directorio</li>
                    <li>4. Usa Tab para autocompletado IA</li>
                    <li>5. Usa Cmd+L para chatear con la IA sobre tu código</li>
                </ol>
            </div>
            
            <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">⚠️ Nota importante:</h4>
                <p class="text-sm text-purple-700 dark:text-purple-300">
                    Para que el botón funcione, necesitas tener Cursor IDE instalado y configurado en tu sistema. 
                    Si no lo tienes, el botón te mostrará instrucciones de instalación.
                </p>
            </div>
        `,
        exercises: [
            {
                title: "Instala Cursor",
                description: "Descarga e instala Cursor IDE en tu sistema",
                template: "# Pasos para instalar Cursor:\n# 1. Ir a cursor.com\n# 2. Descargar para tu OS\n# 3. Instalar normalmente\n# 4. Configurar comando terminal\n\n# Una vez instalado, puedes usar:\n# cursor . (para abrir directorio actual)",
                solution: "# Cursor instalado correctamente!\n# Ahora puedes usar:\ncursor .  # Abre directorio actual\ncursor archivo.py  # Abre archivo específico\n# ¡Disfruta programando con IA!"
            },
            {
                title: "Primeros pasos con IA",
                description: "Experimenta con las funciones de IA de Cursor",
                template: "# En Cursor, prueba estos comandos:\n# 1. Tab - Autocompletado IA\n# 2. Cmd+K (Ctrl+K) - Editar con IA\n# 3. Cmd+L (Ctrl+L) - Chat con IA\n\n# Escribe un comentario describiendo qué quieres hacer\n# y presiona Tab para ver la magia",
                solution: "# Ejemplo de uso:\n# Escribes: \"función que calcule factorial\"\n# Presionas Tab y Cursor genera:\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la principal ventaja de Cursor sobre VS Code?",
                options: ["Es más rápido", "Tiene IA integrada", "Es gratis", "Tiene mejor interfaz"],
                correct: 1
            },
            {
                question: "¿Qué comando usas para abrir el directorio actual en Cursor?",
                options: ["cursor .", "cursor open", "cursor start", "cursor run"],
                correct: 0
            },
            {
                question: "¿Qué tecla usas para activar el autocompletado IA en Cursor?",
                options: ["Enter", "Tab", "Space", "Ctrl"],
                correct: 1
            },
            {
                question: "¿Qué combinación de teclas abre el chat IA en Cursor?",
                options: ["Ctrl+C", "Cmd+L (Ctrl+L)", "Alt+A", "Shift+I"],
                correct: 1
            },
            {
                question: "¿Cursor está basado en qué editor?",
                options: ["Atom", "VS Code", "Sublime Text", "IntelliJ"],
                correct: 1
            },
            {
                question: "¿Qué comando usas para editar código con IA en Cursor?",
                options: ["Cmd+E", "Cmd+K (Ctrl+K)", "Cmd+I", "Cmd+A"],
                correct: 1
            },
            {
                question: "¿Cursor requiere una suscripción para usar todas sus funciones?",
                options: ["Sí, siempre", "No, es completamente gratis", "Tiene versión gratuita con limitaciones", "Solo para estudiantes"],
                correct: 2
            },
            {
                question: "¿Qué tipo de archivos puede manejar Cursor?",
                options: ["Solo Python", "Solo JavaScript", "Cualquier lenguaje de programación", "Solo archivos de texto"],
                correct: 2
            },
            {
                question: "¿Cómo instalas Cursor en tu sistema?",
                options: ["npm install cursor", "Desde cursor.com", "pip install cursor", "apt install cursor"],
                correct: 1
            },
            {
                question: "¿La IA de Cursor puede entender el contexto de todo tu proyecto?",
                options: ["No, solo líneas individuales", "Sí, puede analizar todo el proyecto", "Solo archivos abiertos", "Solo comentarios"],
                correct: 1
            }
        ]
    }
};