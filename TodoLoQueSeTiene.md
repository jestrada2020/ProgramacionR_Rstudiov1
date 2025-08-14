# TodoLoQueSeTiene.md - Especificaciones de la Aplicación Academia Bio-Python

## Descripción General
**Academia Bio-Python Interactiva** es una plataforma web completa para el aprendizaje de Python desde cero, con enfoque en aplicaciones biológicas. La aplicación actual está construida con tecnologías web modernas y ofrece una experiencia de aprendizaje interactiva.

## Arquitectura Actual

### Tecnologías Utilizadas
- **Frontend**: HTML5, CSS3, JavaScript vanilla
- **Frameworks CSS**: Tailwind CSS 2.2.19
- **Iconos**: Font Awesome 6.4.0
- **Fuentes**: Google Fonts (Inter)
- **Ejecutor Python**: Pyodide 0.24.1 (Python en el navegador)
- **Gráficos**: Chart.js

### Estructura de Archivos
```
├── index.html                 # Página principal
├── README.md                 # Documentación básica
├── CSS/
│   └── main.css             # Estilos personalizados
├── css/
│   └── styles.css           # Estilos adicionales
└── js/
    ├── app-core.js          # Funcionalidad principal
    ├── modules-data.js      # Datos de módulos
    ├── basics.js            # Fundamentos
    ├── classes.js           # Clases y POO
    ├── errors.js            # Manejo de errores
    ├── interpreter.js       # Intérprete
    ├── intro.js             # Introducción
    ├── io.js                # Entrada/Salida
    ├── modules.js           # Sistema de módulos
    ├── questions.js         # Sistema de preguntas
    ├── scripts.js           # Scripts auxiliares
    ├── stdlib.js            # Biblioteca estándar
    ├── stdlib2.js           # Biblioteca estándar II
    └── venv.js              # Entornos virtuales
```

## Funcionalidades Principales

### 1. Sistema de Navegación
- **Sidebar responsive** con 15 módulos de aprendizaje
- **Menú móvil** con hamburger button
- **Búsqueda de módulos** en tiempo real
- **Progreso visual** con círculo de progreso animado

### 2. Módulos de Aprendizaje (15 total)
1. **Introducción a Python** - Abriendo el apetito
2. **Usando el Intérprete** - Instalación y configuración
3. **Introducción Informal** - Números, texto y listas
4. **Control de Flujo** - if, for, while, funciones
5. **Estructuras de Datos** - Listas, tuplas, diccionarios
6. **Módulos** - Importar y crear módulos
7. **Entrada y Salida** - Archivos y formateo
8. **Errores y Excepciones** - Manejo de errores
9. **Clases** - Programación orientada a objetos
10. **Biblioteca Estándar** - Módulos más importantes
11. **Biblioteca Estándar II** - Temas avanzados
12. **Entornos Virtuales** - Gestión de paquetes
13. **DeepSeek IA** - Asistente IA gratuito
14. **Google Colab** - Notebook en la nube
15. **Cursor IDE** - Editor con IA integrada

### 3. Sistema de Tabs por Módulo
- **Contenido**: Teoría y explicaciones
- **Práctica**: Editor de código Python en navegador
- **Google Colab**: Integración con notebooks
- **Ejercicios**: Ejercicios prácticos con soluciones
- **Quiz**: Sistema de evaluación
- **EvaluacionPrimerQuiz**: Enlace a quiz externo con QR

### 4. Editor de Código Integrado
- **Pyodide**: Ejecutor Python real en el navegador
- **Sintaxis highlighting**: Área de texto con formato de código
- **Botones de acción**: Ejecutar, Limpiar, Guardar
- **Salida en tiempo real**: Captura stdout/stderr
- **Atajos de teclado**: Ctrl+Enter para ejecutar

### 5. Sistema de Progreso
- **LocalStorage**: Persistencia de progreso del usuario
- **Estados de módulos**: not-started, in-progress, completed
- **Contador visual**: X/16 módulos completados
- **Círculo de progreso**: Animación SVG con porcentaje

### 6. Características Adicionales
- **Modo oscuro/claro**: Toggle de tema persistente
- **Sistema de notas**: Modal para notas por módulo
- **Pantalla completa**: Toggle fullscreen
- **Videos integrados**: iframes de YouTube
- **Notificaciones**: Sistema toast de feedback
- **Responsive design**: Adaptado para móviles

## Estado Actual de la Aplicación

### Fortalezas
✅ **Interfaz moderna** con Tailwind CSS  
✅ **Ejecutor Python real** con Pyodide  
✅ **Sistema de progreso** funcional  
✅ **Contenido estructurado** en 15 módulos  
✅ **Diseño responsive** para móviles  
✅ **Integración con herramientas** (Colab, Cursor)  

### Limitaciones Identificadas
❌ **Falta contenido específico de R**  
❌ **No hay videos de R integrados**  
❌ **Módulos centrados solo en Python**  
❌ **Sin ejecutor de código R**  
❌ **Falta integración con R-coder.com**  

## Propuesta de Transformación a Academia Bio-R

### Objetivos
1. **Mantener la estructura exitosa** de la aplicación actual
2. **Adaptar contenido** para enseñanza de R
3. **Integrar recursos** de r-coder.com
4. **Añadir videos** relevantes de YouTube sobre R
5. **Conservar funcionalidades** que funcionan bien

### Módulos Propuestos para R
1. **Introducción a R** - ¿Qué es R y por qué usarlo?
2. **Instalación de R y RStudio** - Configuración del entorno
3. **Primeros Pasos en R** - Operaciones básicas
4. **Vectores y Matrices** - Estructuras de datos fundamentales
5. **Data Frames** - Manipulación de datos tabulares
6. **Gráficos en R** - Visualización con plot y ggplot2
7. **Estadística Descriptiva** - Medidas de tendencia central
8. **Importar/Exportar Datos** - Lectura de archivos CSV, Excel
9. **Programación en R** - Funciones y control de flujo
10. **Paquetes en R** - Instalación y uso de librerías
11. **Análisis Estadístico** - Pruebas de hipótesis
12. **Bioconductor** - Paquetes para bioinformática
13. **R Markdown** - Reportes reproducibles
14. **Shiny** - Aplicaciones web interactivas
15. **Recursos Adicionales** - R-coder.com y comunidad

### Cambios Técnicos Necesarios
- **Título**: "Academia Bio-Python" → "Academia Bio-R"
- **Iconos**: Python logo → R logo
- **Colores**: Mantener esquema azul-púrpura
- **Ejecutor**: Pyodide → Integración con R (WebR o enlaces externos)
- **Contenido**: Módulos completamente reescritos para R
- **Videos**: Curación de contenido de YouTube sobre R

## Recursos de R-coder.com a Integrar

Según la página web r-coder.com, los principales temas a incluir:
- **Introducción a R y RStudio**
- **Estructuras de datos en R**
- **Manipulación de datos**
- **Visualización de datos**
- **Estadística descriptiva e inferencial**
- **Regresión y modelado**
- **Machine Learning en R**
- **Bioinformática con R/Bioconductor**

## Cronograma de Implementación

### Fase 1: Preparación (Investigación)
- Investigar contenido de r-coder.com ✅
- Curar videos de YouTube sobre R
- Definir estructura de módulos definitiva

### Fase 2: Adaptación (Desarrollo)
- Modificar interface (títulos, iconos, colores)
- Reescribir contenido de los 15 módulos
- Integrar videos seleccionados
- Adaptar sistema de ejercicios para R

### Fase 3: Testing y Refinamiento
- Probar funcionalidades adaptadas
- Verificar enlaces y recursos
- Ajustar responsive design
- Validar contenido técnico

## Conclusión

La aplicación **Academia Bio-Python** tiene una base sólida y bien estructurada que puede ser efectivamente adaptada para enseñanza de R. La arquitectura modular permite realizar cambios de contenido sin afectar la funcionalidad core. El resultado será **Academia Bio-R**, una plataforma equivalente pero enfocada en R con integración de recursos de r-coder.com.