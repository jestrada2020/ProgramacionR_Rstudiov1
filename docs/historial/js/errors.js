const errors = {
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
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = errors;
}