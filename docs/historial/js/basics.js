const basics = {
    title: "3. Introducción Informal a Python",
    description: "Números, texto y listas",
    video: "https://www.youtube.com/embed/4cW_HTsfO2s",
    additionalVideos: [
        { title: "Variables y tipos", url: "https://www.youtube.com/embed/uIYqLzM5yVM" },
        { title: "Strings en Python", url: "https://www.youtube.com/embed/CSGedJV6Yv8" }
    ],
    content: `
        <h2 class="text-2xl font-bold theme-text-primary mb-4">Usando Python como Calculadora</h2>
        
        <h3 class="text-xl font-semibold theme-text-primary mb-3">Números</h3>
        <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
            <code class="text-sm">
                >>> 2 + 2<br>
                4<br>
                >>> 50 - 5*6<br>
                20<br>
                >>> 8 / 5<br>
                1.6
            </code>
        </div>
        
        <h3 class="text-xl font-semibold theme-text-primary mb-3">Operadores Aritméticos</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary">Básicos</h4>
                <ul class="text-sm theme-text-secondary space-y-1">
                    <li>+ (suma)</li>
                    <li>- (resta)</li>
                    <li>* (multiplicación)</li>
                    <li>/ (división)</li>
                </ul>
            </div>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary">Avanzados</h4>
                <ul class="text-sm theme-text-secondary space-y-1">
                    <li>** (potencia)</li>
                    <li>// (división entera)</li>
                    <li>% (módulo)</li>
                </ul>
            </div>
        </div>
        
        <h3 class="text-xl font-semibold theme-text-primary mb-3">Strings (Cadenas)</h3>
        <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
            <code class="text-sm">
                >>> 'hola mundo'<br>
                'hola mundo'<br>
                >>> "Python es genial"<br>
                'Python es genial'<br>
                >>> 'Hola' + ' ' + 'mundo'<br>
                'Hola mundo'
            </code>
        </div>
        
        <h3 class="text-xl font-semibold theme-text-primary mb-3">Listas</h3>
        <div class="p-4 theme-bg-tertiary rounded-lg">
            <code class="text-sm">
                >>> cuadrados = [1, 4, 9, 16, 25]<br>
                >>> cuadrados<br>
                [1, 4, 9, 16, 25]<br>
                >>> cuadrados[0]<br>
                1<br>
                >>> cuadrados[-1]<br>
                25
            </code>
        </div>
    `,
    exercises: [
        {
            title: "Calculadora básica",
            description: "Realiza operaciones aritméticas básicas",
            template: "# Calcula 15 + 30 * 2\n# Calcula 100 / 4\n# Calcula 2 ** 8\n",
            solution: "print(15 + 30 * 2)\nprint(100 / 4)\nprint(2 ** 8)"
        },
        {
            title: "Trabajando con strings",
            description: "Crea y manipula cadenas de texto",
            template: "# Crea una variable con tu nombre\n# Crea otra con tu apellido\n# Únelas con un espacio\n",
            solution: "nombre = 'Juan'\napellido = 'Pérez'\ncompleto = nombre + ' ' + apellido\nprint(completo)"
        }
    ],
    quiz: [
        {
            question: "¿Cuál es el resultado de 2 ** 3?",
            options: ["6", "8", "9", "5"],
            correct: 1
        },
        {
            question: "¿Cómo se accede al primer elemento de una lista?",
            options: ["lista[1]", "lista[0]", "lista.first()", "lista.get(0)"],
            correct: 1
        },
        {
            question: "¿Cuál es el operador para la división entera en Python?",
            options: ["/", "//", "%", "div"],
            correct: 1
        },
        {
            question: "¿Qué resultado devuelve el operador % en Python?",
            options: ["División", "Multiplicación", "Módulo (resto)", "Potencia"],
            correct: 2
        },
        {
            question: "¿Cómo se define una cadena de texto multilínea en Python?",
            options: ["'texto'", "\"texto\"", "'''texto'''", "Todas las anteriores son correctas para multilínea"],
            correct: 2
        },
        {
            question: "¿Cuál es el método correcto para agregar un elemento al final de una lista?",
            options: ["lista.add()", "lista.append()", "lista.insert()", "lista.push()"],
            correct: 1
        },
        {
            question: "¿Qué devuelve len([1, 2, 3, 4])?",
            options: ["3", "4", "5", "Error"],
            correct: 1
        },
        {
            question: "¿Cómo se verifica el tipo de una variable en Python?",
            options: ["typeof(variable)", "type(variable)", "variable.type()", "gettype(variable)"],
            correct: 1
        },
        {
            question: "¿Cuál es la forma correcta de crear una lista vacía?",
            options: ["lista = []", "lista = list()", "lista = new List()", "Opciones A y B son correctas"],
            correct: 3
        },
        {
            question: "¿Qué operador se usa para verificar si un elemento está en una lista?",
            options: ["is", "in", "contains", "has"],
            correct: 1
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = basics;
}