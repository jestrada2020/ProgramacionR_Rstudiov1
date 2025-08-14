// Module data for Introduction to Python
const introModule = {
    title: "1. Introducción a Python",
    description: "Abriendo el apetito",
    video: "https://www.youtube.com/embed/nKPbfIU442g",
    additionalVideos: [
        { title: "Python curso completo", url: "https://www.youtube.com/embed/0ftxmhe323g" },
        { title: "Python desde cero", url: "https://www.youtube.com/embed/IimBRwHhW54" },
        { title: "Introducción a Python", url: "https://www.youtube.com/embed/Kp4Mvapo5kc" }
    ],
    content: `
        <h2 class="text-2xl font-bold theme-text-primary mb-4">¿Qué es Python?</h2>
        <p class="theme-text-secondary mb-4">Python es un lenguaje de programación interpretado, de alto nivel y de propósito general. Su filosofía de diseño enfatiza la legibilidad del código con el uso de espacios en blanco significativos.</p>
        
        <h3 class="text-xl font-semibold theme-text-primary mb-3">¿Por qué Python?</h3>
        <ul class="list-disc list-inside theme-text-secondary space-y-2 mb-6">
            <li>Sintaxis simple y legible</li>
            <li>Gran comunidad y documentación</li>
            <li>Amplia biblioteca estándar</li>
            <li>Multiplataforma</li>
            <li>Ideal para principiantes</li>
        </ul>
        
        <h3 class="text-xl font-semibold theme-text-primary mb-3">Aplicaciones de Python</h3>
        <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary">Desarrollo Web</h4>
                <p class="text-sm theme-text-secondary">Django, Flask, FastAPI</p>
            </div>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary">Ciencia de Datos</h4>
                <p class="text-sm theme-text-secondary">Pandas, NumPy, Matplotlib</p>
            </div>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary">Inteligencia Artificial</h4>
                <p class="text-sm theme-text-secondary">TensorFlow, PyTorch, scikit-learn</p>
            </div>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary">Automatización</h4>
                <p class="text-sm theme-text-secondary">Selenium, Scrapy, Boto3</p>
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
            template: "print(\"=== SEPARADORES EN PRINT() ===\")\n    \n    nombre = \"Juan\"\n    \n    # Separador por defecto (espacio)\n    print(\"Separador por defecto:\")\n    print(\"Hola\", nombre, \"!\")\n    print(\"Por defecto, print() usa un espacio como separador\")\n    \n    print(\"\\n\" + \"-\" * 40)\n    \n    # Sin separador (cadena vacía)\n    print(\"Sin separador (sep=''):\")\n    print(\"Hola\", nombre, \"!\", sep=\"\")\n    print(\"Al usar sep='', las palabras se pegan sin espacio\")\n    \n    print(\"\\n\" + \"-\" * 40)\n    \n    # Separador personalizado con asteriscos\n    print(\"Separador personalizado (sep='***'):\")\n    print(\"Hola\", nombre, \"!\", sep=\"***\")\n    print(\"Podemos usar cualquier cadena como separador\")\n    \n    print(\"\\n\" + \"-\" * 40)\n    \n    # Más ejemplos de separadores creativos\n    print(\"Otros separadores creativos:\")\n    print(\"Python\", \"es\", \"genial\", sep=\" -> \")\n    print(\"A\", \"B\", \"C\", sep=\" | \")\n    print(\"1\", \"2\", \"3\", sep=\"-\")\n    print(\"Palabra1\", \"Palabra2\", \"Palabra3\", sep=\"___")",
            solution: "print(\"=== SEPARADORES EN PRINT() ===\")\n    \n    nombre = \"Juan\"\n    \n    # Separador por defecto (espacio)\n    print(\"Separador por defecto:\")\n    print(\"Hola\", nombre, \"!\")\n    print(\"Por defecto, print() usa un espacio como separador\")\n    \n    print(\"\\n\" + \"-\" * 40)\n    \n    # Sin separador (cadena vacía)\n    print(\"Sin separador (sep=''):\")\n    print(\"Hola\", nombre, \"!\", sep=\"\")\n    print(\"Al usar sep='', las palabras se pegan sin espacio\")\n    \n    print(\"\\n\" + \"-\" * 40)\n    \n    # Separador personalizado con asteriscos\n    print(\"Separador personalizado (sep='***'):\")\n    print(\"Hola\", nombre, \"!\", sep=\"***\")\n    print(\"Podemos usar cualquier cadena como separador\")\n    \n    print(\"\\n\" + \"-\" * 40)\n    \n    # Más ejemplos de separadores creativos\n    print(\"Otros separadores creativos:\")\n    print(\"Python\", \"es\", \"genial\", sep=\" -> \")\n    print(\"A\", \"B\", \"C\", sep=\" | \")\n    print(\"1\", \"2\", \"3\", sep=\"-\")\n    print(\"Palabra1\", \"Palabra2\", \"Palabra3\", sep=\"___")"
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
};