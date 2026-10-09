const stdlib2 = {
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
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = stdlib2;
}