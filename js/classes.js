const classes = {
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
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = classes;
}