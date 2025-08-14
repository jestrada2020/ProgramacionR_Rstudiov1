const venv = {
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
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = venv;
}