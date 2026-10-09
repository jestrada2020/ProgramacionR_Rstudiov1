const stdlib = {
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
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = stdlib;
}