// Module data for Python Interpreter
const interpreterModule = {
    title: "2. Usando el Intérprete de Python",
    description: "Instalación y configuración",
    video: "https://www.youtube.com/embed/qmfbzgd5HWg",
    additionalVideos: [
        { title: "Instalación Python", url: "https://www.youtube.com/embed/6XbFEDPZ1P4" },
        { title: "Configurar PyCharm", url: "https://www.youtube.com/embed/2P1yPcNiSOg" }
    ],
    content: `
        <h2 class="text-2xl font-bold theme-text-primary mb-4">El Intérprete de Python</h2>
        <p class="theme-text-secondary mb-4">El intérprete de Python es el programa que ejecuta tu código Python línea por línea. Funciona de dos modos: interactivo y de script.</p>
        
        <h3 class="text-xl font-semibold theme-text-primary mb-3">Instalación</h3>
        <div class="space-y-4 mb-6">
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary mb-2">Windows</h4>
                <p class="text-sm theme-text-secondary">Descarga desde python.org e instala. Asegúrate de marcar "Add Python to PATH"</p>
            </div>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary mb-2">macOS</h4>
                <p class="text-sm theme-text-secondary">Usa Homebrew: brew install python3</p>
            </div>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary mb-2">Linux</h4>
                <p class="text-sm theme-text-secondary">Usa el gestor de paquetes: sudo apt install python3</p>
            </div>
        </div>
        
        <h3 class="text-xl font-semibold theme-text-primary mb-3">Modo Interactivo</h3>
        <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
            <code class="text-sm">
                $ python<br>
                >>> print("Hola, mundo!")<br>
                Hola, mundo!<br>
                >>> 2 + 2<br>
                4
            </code>
        </div>
        
        <h3 class="text-xl font-semibold theme-text-primary mb-3">Ejecutar Scripts</h3>
        <div class="p-4 theme-bg-tertiary rounded-lg">
            <code class="text-sm">
                $ python mi_script.py
            </code>
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
};