// Global variables
let currentModule = null;
let theme = localStorage.getItem('pythonTheme') || 'light';
let progress = JSON.parse(localStorage.getItem('pythonProgress')) || {};
let notes = JSON.parse(localStorage.getItem('pythonNotes')) || {};
let pyodide = null;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Apply saved theme
    document.body.className = `${theme} theme-bg-primary theme-text-primary transition-all duration-300`;
    updateThemeIcon();
    
    // Update progress display
    updateProgress();
    
    // Bind event listeners
    bindEventListeners();
    
    // Initialize Pyodide
    initializePyodide();
    
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
    }, 2000);
}

function bindEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Mobile menu
    document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);
    
    // Module navigation
    document.querySelectorAll('.module-item').forEach(item => {
        item.addEventListener('click', function() {
            const module = this.dataset.module;
            loadModule(module);
        });
    });
    
    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            switchTab(tab);
        });
    });
    
    // Code editor buttons
    document.getElementById('runCodeBtn').addEventListener('click', runCode);
    document.getElementById('clearCodeBtn').addEventListener('click', clearCode);
    document.getElementById('saveCodeBtn').addEventListener('click', saveCode);
    
    // Notes functionality
    document.getElementById('notesBtn').addEventListener('click', openNotesModal);
    
    // Mark complete button
    document.getElementById('markCompleteBtn').addEventListener('click', markModuleComplete);
    
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', searchModules);
    
    // Fullscreen toggle
    document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);
    
    // Add event listener for Google Colab button after module content loads
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'newColabBtn') {
            openNewColabNotebook();
        }
        if (e.target && e.target.id === 'launchCursorBtn') {
            launchCursorIDE();
        }
    });
    
    // Generate QR code when EvaluacionPrimerQuiz tab is loaded
    document.addEventListener('click', function(e) {
        if (e.target && e.target.dataset.tab === 'evaluacionPrimerQuiz') {
            generateQRCode();
        }
    });
}

function loadModule(moduleId) {
    if (typeof modules === 'undefined') {
        console.error('modules object not loaded');
        return;
    }
    
    if (!modules[moduleId]) {
        console.error(`Module ${moduleId} not found`);
        return;
    }
    
    currentModule = moduleId;
    const module = modules[moduleId];
    
    // Hide welcome screen and show module content
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('moduleContent').style.display = 'block';
    document.getElementById('moduleContent').classList.add('fade-in');
    
    // Update title
    document.getElementById('currentModuleTitle').textContent = module.title;
    
    // Show mark complete button
    document.getElementById('markCompleteBtn').style.display = 'block';
    
    // Load video
    const videoContainer = document.getElementById('videoContainer').querySelector('iframe');
    videoContainer.src = module.video;
    
    // Load additional videos
    loadAdditionalVideos(module.additionalVideos);
    
    // Load content
    document.getElementById('moduleTextContent').innerHTML = module.content;
    
    // Load Google Colab content
    loadColabContent(module.colabContent);
    
    // Load exercises
    loadExercises(module.exercises);
    
    // Load quiz
    loadQuiz(module.quiz);
    
    // Update active module in sidebar
    updateActiveModule(moduleId);
    
    // Close mobile menu
    closeMobileMenu();
    
    // Switch to content tab
    switchTab('content');
    
    // Load notes for this module
    loadModuleNotes(moduleId);
}

function loadAdditionalVideos(videos) {
    const container = document.getElementById('additionalVideos');
    container.innerHTML = '';
    
    videos.forEach(video => {
        const videoEl = document.createElement('div');
        videoEl.className = 'p-3 theme-bg-tertiary rounded-lg cursor-pointer hover:opacity-80 transition-opacity';
        videoEl.innerHTML = `
            <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <i class="fas fa-play text-white text-sm"></i>
                </div>
                <div>
                    <h4 class="font-medium theme-text-primary text-sm">${video.title}</h4>
                    <p class="text-xs theme-text-secondary">Video complementario</p>
                </div>
            </div>
        `;
        
        videoEl.addEventListener('click', function() {
            const mainVideo = document.getElementById('videoContainer').querySelector('iframe');
            mainVideo.src = video.url;
        });
        
        container.appendChild(videoEl);
    });
}

function loadColabContent(colabContent) {
    const container = document.getElementById('colabContent');
    if (container) {
        if (colabContent) {
            container.innerHTML = colabContent;
        } else {
            // Contenido por defecto si no existe colabContent
            container.innerHTML = `
                <div class="text-center py-8">
                    <h4 class="text-lg font-semibold theme-text-primary mb-4">🚀 Práctica en Google Colab</h4>
                    <p class="theme-text-secondary mb-6">Experimenta con Python en Google Colab para este módulo.</p>
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab
                    </button>
                    <div class="mt-4 p-4 theme-bg-tertiary rounded-lg">
                        <p class="text-sm theme-text-secondary">
                            💡 Crea un nuevo notebook y practica los conceptos de este módulo
                        </p>
                    </div>
                </div>
            `;
        }
    }
}

function loadExercises(exercises) {
    const container = document.getElementById('exercisesList');
    container.innerHTML = '';
    
    exercises.forEach((exercise, index) => {
        const exerciseEl = document.createElement('div');
        exerciseEl.className = 'exercise-card theme-bg-secondary rounded-2xl p-6';
        exerciseEl.innerHTML = `
            <h4 class="text-lg font-semibold theme-text-primary mb-3">${exercise.title}</h4>
            <p class="theme-text-secondary mb-4">${exercise.description}</p>
            <div class="grid lg:grid-cols-2 gap-4">
                <div>
                    <h5 class="font-medium theme-text-primary mb-2">Tu código</h5>
                    <textarea class="exercise-code w-full h-32 p-3 theme-bg-tertiary theme-text-primary rounded-lg border theme-border code-editor resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="${exercise.template}"></textarea>
                </div>
                <div>
                    <h5 class="font-medium theme-text-primary mb-2">Resultado</h5>
                    <div class="exercise-output w-full h-32 p-3 theme-bg-tertiary theme-text-primary rounded-lg border theme-border code-editor overflow-auto">
                        <div class="text-gray-500 italic">Ejecuta tu código para ver el resultado</div>
                    </div>
                </div>
            </div>
            <div class="flex space-x-2 mt-4">
                <button class="run-exercise-btn px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    <i class="fas fa-play mr-2"></i>Ejecutar
                </button>
                <button class="show-solution-btn px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <i class="fas fa-lightbulb mr-2"></i>Ver Solución
                </button>
            </div>
        `;
        
        // Bind exercise buttons
        const runBtn = exerciseEl.querySelector('.run-exercise-btn');
        const solutionBtn = exerciseEl.querySelector('.show-solution-btn');
        const codeArea = exerciseEl.querySelector('.exercise-code');
        const outputArea = exerciseEl.querySelector('.exercise-output');
        
        runBtn.addEventListener('click', function() {
            runExerciseCode(codeArea.value, outputArea);
        });
        
        solutionBtn.addEventListener('click', function() {
            codeArea.value = exercise.solution;
            showNotification('Solución cargada');
        });
        
        container.appendChild(exerciseEl);
    });
}

function loadQuiz(questions) {
    const container = document.getElementById('quizContainer');
    container.innerHTML = '';
    
    questions.forEach((question, index) => {
        const questionEl = document.createElement('div');
        questionEl.className = 'mb-6 p-4 theme-bg-tertiary rounded-lg';
        questionEl.innerHTML = `
            <h4 class="font-semibold theme-text-primary mb-3">${index + 1}. ${question.question}</h4>
            <div class="space-y-2">
                ${question.options.map((option, optionIndex) => `
                    <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="question${index}" value="${optionIndex}" class="quiz-option">
                        <span class="theme-text-primary">${option}</span>
                    </label>
                `).join('')}
            </div>
        `;
        
        container.appendChild(questionEl);
    });
    
    // Add submit button
    const submitBtn = document.createElement('button');
    submitBtn.className = 'w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold';
    submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Enviar Respuestas';
    submitBtn.addEventListener('click', function() {
        checkQuizAnswers(questions);
    });
    
    container.appendChild(submitBtn);
}

function checkQuizAnswers(questions) {
    let correctAnswers = 0;
    
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === question.correct) {
            correctAnswers++;
        }
    });
    
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    const resultEl = document.createElement('div');
    resultEl.className = `mt-6 p-4 rounded-lg ${percentage >= 70 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`;
    resultEl.innerHTML = `
        <h4 class="font-semibold mb-2">Resultado del Quiz</h4>
        <p>Has respondido correctamente ${correctAnswers} de ${questions.length} preguntas (${percentage}%)</p>
        ${percentage >= 70 ? '<p class="mt-2"><i class="fas fa-check-circle mr-2"></i>¡Excelente trabajo!</p>' : '<p class="mt-2"><i class="fas fa-times-circle mr-2"></i>Te recomendamos revisar el contenido.</p>'}
    `;
    
    const container = document.getElementById('quizContainer');
    const existingResult = container.querySelector('.quiz-result');
    if (existingResult) {
        existingResult.remove();
    }
    
    resultEl.className += ' quiz-result';
    container.appendChild(resultEl);
    
    if (percentage >= 70) {
        markModuleComplete();
    }
}

function switchTab(tabId) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-blue-500', 'text-white');
        btn.classList.add('theme-text-secondary');
    });
    
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active', 'bg-blue-500', 'text-white');
    document.querySelector(`[data-tab="${tabId}"]`).classList.remove('theme-text-secondary');
    
    // Update tab content
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.add('hidden');
        pane.classList.remove('active');
    });
    
    document.getElementById(`${tabId}Tab`).classList.remove('hidden');
    document.getElementById(`${tabId}Tab`).classList.add('active');
}

function updateActiveModule(moduleId) {
    document.querySelectorAll('.module-item').forEach(item => {
        item.classList.remove('bg-blue-500', 'text-white');
        item.classList.add('theme-text-primary');
    });
    
    const activeModule = document.querySelector(`[data-module="${moduleId}"]`);
    if (activeModule) {
        activeModule.classList.add('bg-blue-500', 'text-white');
        activeModule.classList.remove('theme-text-primary');
    }
}

function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    document.body.className = `${theme} theme-bg-primary theme-text-primary transition-all duration-300`;
    localStorage.setItem('pythonTheme', theme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.getElementById('themeToggle').querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon text-lg' : 'fas fa-sun text-lg';
}

function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
}

function markModuleComplete() {
    if (!currentModule) return;
    
    progress[currentModule] = 'completed';
    localStorage.setItem('pythonProgress', JSON.stringify(progress));
    
    // Update module status in sidebar
    const moduleElement = document.querySelector(`[data-module="${currentModule}"]`);
    if (moduleElement) {
        const statusIcon = moduleElement.querySelector('.w-8.h-8');
        statusIcon.className = 'w-8 h-8 rounded-full completed flex items-center justify-center';
        statusIcon.innerHTML = '<i class="fas fa-check text-sm"></i>';
    }
    
    updateProgress();
    showNotification('¡Módulo completado!');
}

function updateProgress() {
    // Check if modules object exists
    if (typeof modules === 'undefined') {
        console.log('modules object not yet loaded');
        return;
    }
    
    const totalModules = Object.keys(modules || {}).length;
    const completedModules = Object.values(progress).filter(status => status === 'completed').length;
    const percentage = Math.round((completedModules / totalModules) * 100);
    
    // Update progress circle
    const circle = document.getElementById('progressCircle');
    if (circle) {
        const circumference = 2 * Math.PI * 36;
        const offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }
    
    // Update progress text
    const progressText = document.getElementById('progressText');
    if (progressText) {
        progressText.textContent = `${percentage}%`;
    }
    
    const modulesCompleted = document.getElementById('modulesCompleted');
    if (modulesCompleted) {
        modulesCompleted.textContent = `${completedModules}/${totalModules}`;
    }
    
    // Update module status icons
    if (typeof modules !== 'undefined') {
        Object.keys(modules || {}).forEach(moduleId => {
            const moduleElement = document.querySelector(`[data-module="${moduleId}"]`);
            if (moduleElement) {
                const statusIcon = moduleElement.querySelector('.w-8.h-8');
                if (statusIcon) {
                    const status = progress[moduleId] || 'not-started';
                    
                    statusIcon.className = `w-8 h-8 rounded-full ${status} flex items-center justify-center`;
                    
                    if (status === 'completed') {
                        statusIcon.innerHTML = '<i class="fas fa-check text-sm"></i>';
                    } else if (status === 'in-progress') {
                        statusIcon.innerHTML = '<i class="fas fa-play text-sm"></i>';
                    } else {
                        statusIcon.innerHTML = '<i class="fas fa-play text-sm"></i>';
                    }
                }
            }
        });
    }
}

function searchModules() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const moduleItems = document.querySelectorAll('.module-item');
    
    moduleItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function openNotesModal() {
    document.getElementById('notesModal').classList.remove('hidden');
    
    // Load notes for current module
    if (currentModule && notes[currentModule]) {
        document.getElementById('notesTextarea').value = notes[currentModule];
    }
}

function closeNotesModal() {
    document.getElementById('notesModal').classList.add('hidden');
}

function saveNotes() {
    if (!currentModule) return;
    
    const noteText = document.getElementById('notesTextarea').value;
    notes[currentModule] = noteText;
    localStorage.setItem('pythonNotes', JSON.stringify(notes));
    
    closeNotesModal();
    showNotification('Notas guardadas');
}

function loadModuleNotes(moduleId) {
    const noteText = notes[moduleId] || '';
    document.getElementById('notesTextarea').value = noteText;
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    if (notification) {
        document.getElementById('notificationText').textContent = message;
        notification.classList.remove('hidden');
        
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 3000);
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Code execution functions
async function initializePyodide() {
    try {
        if (typeof loadPyodide !== 'undefined') {
            pyodide = await loadPyodide();
            console.log('Pyodide loaded successfully');
        }
    } catch (error) {
        console.error('Failed to load Pyodide:', error);
    }
}

async function runCode() {
    const codeEditor = document.getElementById('codeEditor');
    const codeOutput = document.getElementById('codeOutput');
    
    if (!codeEditor || !codeOutput) return;
    
    const code = codeEditor.value;
    
    if (!code.trim()) {
        codeOutput.innerHTML = '<div class="text-red-500">Por favor, escribe algo de código</div>';
        return;
    }
    
    codeOutput.innerHTML = '<div class="text-blue-500 animate-pulse-slow">Ejecutando código...</div>';
    
    try {
        if (pyodide) {
            // Capture output
            pyodide.runPython(`
                import sys
                from io import StringIO
                sys.stdout = StringIO()
                sys.stderr = StringIO()
            `);
            
            // Run user code
            pyodide.runPython(code);
            
            // Get output
            const stdout = pyodide.runPython('sys.stdout.getvalue()');
            const stderr = pyodide.runPython('sys.stderr.getvalue()');
            
            let result = '';
            if (stdout) result += stdout;
            if (stderr) result += `<div class="text-red-500">${stderr}</div>`;
            
            codeOutput.innerHTML = result || '<div class="text-green-500">Código ejecutado sin salida</div>';
        } else {
            // Fallback for basic code simulation
            codeOutput.innerHTML = simulateCodeExecution(code);
        }
    } catch (error) {
        codeOutput.innerHTML = `<div class="text-red-500">Error: ${error.message}</div>`;
    }
}

function simulateCodeExecution(code) {
    // Simple simulation for basic Python code
    if (code.includes('print(')) {
        const matches = code.match(/print\(['"]([^'"]*)['"]\)/g);
        if (matches) {
            return matches.map(match => {
                const content = match.match(/print\(['"]([^'"]*)['"]\)/)[1];
                return `<div>${content}</div>`;
            }).join('');
        }
    }
    
    return '<div class="text-blue-500">Código procesado (simulación)</div>';
}

async function runExerciseCode(code, outputElement) {
    if (!code.trim()) {
        outputElement.innerHTML = '<div class="text-red-500">Por favor, escribe algo de código</div>';
        return;
    }
    
    outputElement.innerHTML = '<div class="text-blue-500 animate-pulse-slow">Ejecutando...</div>';
    
    try {
        if (pyodide) {
            pyodide.runPython(`
                import sys
                from io import StringIO
                sys.stdout = StringIO()
                sys.stderr = StringIO()
            `);
            
            pyodide.runPython(code);
            
            const stdout = pyodide.runPython('sys.stdout.getvalue()');
            const stderr = pyodide.runPython('sys.stderr.getvalue()');
            
            let result = '';
            if (stdout) result += stdout;
            if (stderr) result += `<div class="text-red-500">${stderr}</div>`;
            
            outputElement.innerHTML = result || '<div class="text-green-500">Código ejecutado sin salida</div>';
        } else {
            outputElement.innerHTML = simulateCodeExecution(code);
        }
    } catch (error) {
        outputElement.innerHTML = `<div class="text-red-500">Error: ${error.message}</div>`;
    }
}

function clearCode() {
    const codeEditor = document.getElementById('codeEditor');
    const codeOutput = document.getElementById('codeOutput');
    
    if (codeEditor) {
        codeEditor.value = '';
    }
    
    if (codeOutput) {
        codeOutput.innerHTML = '<div class="text-gray-500 italic">La salida aparecerá aquí...</div>';
    }
}

function saveCode() {
    const codeEditor = document.getElementById('codeEditor');
    if (!codeEditor) return;
    
    const code = codeEditor.value;
    if (!code.trim()) {
        showNotification('No hay código para guardar');
        return;
    }
    
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `python_code_${Date.now()}.py`;
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('Código guardado');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('mobileMenuBtn');
    
    if (sidebar && menuBtn && !sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        closeMobileMenu();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + Enter to run code
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        if (document.activeElement && document.activeElement.id === 'codeEditor') {
            runCode();
        }
    }
    
    // Escape to close modals
    if (event.key === 'Escape') {
        closeNotesModal();
    }
});

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeApp,
        bindEventListeners,
        loadModule,
        loadAdditionalVideos,
        loadExercises,
        loadQuiz,
        checkQuizAnswers,
        switchTab,
        updateActiveModule,
        toggleTheme,
        updateThemeIcon,
        toggleMobileMenu,
        closeMobileMenu,
        markModuleComplete,
        updateProgress,
        searchModules,
        openNotesModal,
        closeNotesModal,
        saveNotes,
        loadModuleNotes,
        showNotification,
        toggleFullscreen,
        initializePyodide,
        runCode,
        simulateCodeExecution,
        runExerciseCode,
        clearCode,
        saveCode,
        openNewColabNotebook,
        launchCursorIDE
    };
}

// Function to open a new Google Colab notebook
function openNewColabNotebook() {
    // Show notification
    showNotification('Abriendo Google Colab...');
    
    // Open Google Colab in a new tab
    const colabUrl = 'https://colab.research.google.com/';
    window.open(colabUrl, '_blank');
    
    // Optional: Show a brief instruction notification after a delay
    setTimeout(() => {
        showNotification('¡Colab abierto! Inicia sesión con tu cuenta de Google');
    }, 2000);
}

// Function to detect OS and launch Cursor IDE
function launchCursorIDE() {
    // Detect operating system
    const userAgent = navigator.userAgent.toLowerCase();
    let os = 'unknown';
    let command = '';
    let terminalCommand = '';
    
    if (userAgent.includes('win')) {
        os = 'Windows';
        command = 'cursor';
        terminalCommand = 'start cmd /k "cursor && exit"';
    } else if (userAgent.includes('mac')) {
        os = 'macOS';  
        command = 'cursor';
        terminalCommand = 'open -a Terminal --args cursor';
    } else if (userAgent.includes('linux')) {
        os = 'Linux';
        command = 'cursor';
        terminalCommand = 'gnome-terminal -- bash -c "cursor; exec bash"';
    }
    
    // Try to execute terminal command automatically (will likely fail due to security)
    tryExecuteTerminalCommand(terminalCommand, os, command);
}

// Function to try executing terminal command automatically
function tryExecuteTerminalCommand(terminalCommand, os, command) {
    // Show immediate notification
    showNotification('Intentando abrir terminal automáticamente...');
    
    // Try different methods based on OS
    let success = false;
    
    try {
        if (os === 'Windows') {
            // Try Windows-specific methods
            success = tryWindowsTerminalLaunch(terminalCommand);
        } else if (os === 'macOS') {
            // Try macOS-specific methods  
            success = tryMacTerminalLaunch(terminalCommand);
        } else if (os === 'Linux') {
            // Try Linux-specific methods
            success = tryLinuxTerminalLaunch(terminalCommand);
        }
    } catch (error) {
        console.log('Automatic terminal launch failed:', error);
    }
    
    // If automatic launch fails, show modal with manual instructions
    setTimeout(() => {
        if (!success) {
            showNotification('Apertura automática bloqueada. Mostrando instrucciones manuales...');
            showCursorLaunchModal(os, command, terminalCommand);
        }
    }, 2000);
}

// Try Windows terminal launch
function tryWindowsTerminalLaunch(command) {
    try {
        // Try Windows protocol for terminal
        window.location.href = `ms-windows-store://`;
        return false; // Windows Store opens, not terminal
    } catch (error) {
        return false;
    }
}

// Try macOS terminal launch  
function tryMacTerminalLaunch(command) {
    try {
        // Try macOS protocol for terminal (doesn't exist)
        return false;
    } catch (error) {
        return false;
    }
}

// Try Linux terminal launch
function tryLinuxTerminalLaunch(command) {
    try {
        // No web protocol exists for Linux terminals
        return false;
    } catch (error) {
        return false;
    }
}

// Function to show Cursor launch modal (enhanced)
function showCursorLaunchModal(os, command, terminalCommand) {
    // Create enhanced modal HTML
    const modalHTML = `
        <div id="cursorModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div class="theme-bg-primary rounded-2xl p-8 max-w-lg w-full mx-4 border theme-border">
                <div class="text-center">
                    <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-terminal text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold theme-text-primary mb-4">🚀 Abrir Cursor IDE</h3>
                    <p class="theme-text-secondary mb-4">Sistema detectado: <strong>${os}</strong></p>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg mb-6">
                        <p class="text-sm theme-text-secondary mb-3">📋 <strong>Opción 1:</strong> Comando simple</p>
                        <div class="bg-black text-green-400 p-3 rounded font-mono text-sm mb-3 cursor-pointer" onclick="copyToClipboard('${command}')">
                            $ ${command}
                            <i class="fas fa-copy float-right text-gray-500"></i>
                        </div>
                        
                        <p class="text-sm theme-text-secondary mb-3">🔥 <strong>Opción 2:</strong> Abrir terminal + Cursor</p>
                        <div class="bg-black text-green-400 p-3 rounded font-mono text-xs mb-3 cursor-pointer" onclick="copyToClipboard('${terminalCommand}')">
                            $ ${terminalCommand}
                            <i class="fas fa-copy float-right text-gray-500"></i>
                        </div>
                        <p class="text-xs theme-text-secondary italic">⚡ Este comando abre la terminal y ejecuta Cursor automáticamente</p>
                    </div>
                    
                    <div class="text-left mb-6">
                        <h4 class="font-semibold theme-text-primary mb-2">💡 Instrucciones paso a paso:</h4>
                        <ol class="text-sm theme-text-secondary space-y-2">
                            <li>1. <strong>Copia</strong> uno de los comandos (haz clic en el recuadro)</li>
                            <li>2. <strong>Abre</strong> tu terminal/${os === 'Windows' ? 'PowerShell' : 'Terminal'}</li>
                            <li>3. <strong>Pega</strong> el comando (Ctrl+V / Cmd+V)</li>
                            <li>4. <strong>Presiona</strong> Enter</li>
                            <li>5. <strong>¡Cursor se abrirá!</strong> 🎉</li>
                        </ol>
                    </div>
                    
                    <div class="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg mb-6 border border-yellow-200 dark:border-yellow-700">
                        <p class="text-sm text-yellow-800 dark:text-yellow-300">
                            <i class="fas fa-info-circle mr-1"></i>
                            <strong>¿No funciona?</strong> Asegúrate de tener Cursor instalado desde 
                            <a href="https://cursor.com" target="_blank" class="underline">cursor.com</a>
                        </p>
                    </div>
                    
                    <div class="flex space-x-3">
                        <button onclick="openCursorWebsite()" class="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                            <i class="fas fa-download mr-2"></i>Descargar Cursor
                        </button>
                        <button onclick="closeCursorModal()" class="flex-1 px-4 py-2 theme-bg-tertiary theme-text-primary rounded-lg hover:opacity-80 transition-opacity">
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show notification
    showNotification(`Terminal comando listo para ${os}`);
}

// Function to copy command to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('¡Comando copiado al portapapeles!');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('¡Comando copiado al portapapeles!');
    });
}

// Function to open Cursor website
function openCursorWebsite() {
    window.open('https://cursor.com', '_blank');
    showNotification('Abriendo sitio web de Cursor...');
}

// Function to close Cursor modal
function closeCursorModal() {
    const modal = document.getElementById('cursorModal');
    if (modal) {
        modal.remove();
    }
}

// Function to generate QR code for EvaluacionPrimerQuiz
function generateQRCode() {
    const url = 'https://jestrada2020.github.io/PrimerQuizBioPythonV1/';
    const qrContainer = document.getElementById('qrCodeContainer');
    
    if (!qrContainer || qrContainer.innerHTML !== '') {
        return; // Already generated or container not found
    }
    
    // Generate QR code using QR Server API
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
    
    const qrImg = document.createElement('img');
    qrImg.src = qrCodeUrl;
    qrImg.alt = 'QR Code para EvaluacionPrimerQuiz';
    qrImg.className = 'mx-auto';
    qrImg.style.width = '200px';
    qrImg.style.height = '200px';
    
    qrContainer.appendChild(qrImg);
    
    // Add loading message while QR loads
    qrImg.onload = function() {
        showNotification('Código QR generado exitosamente');
    };
    
    qrImg.onerror = function() {
        qrContainer.innerHTML = `
            <div class="p-4 text-center">
                <i class="fas fa-exclamation-triangle text-yellow-500 text-2xl mb-2"></i>
                <p class="text-sm text-gray-600">No se pudo generar el código QR</p>
                <p class="text-xs text-gray-500 mt-1">Usa el enlace directo</p>
            </div>
        `;
    };
}

// Function to copy EvaluacionPrimerQuiz link to clipboard
function copyEvaluacionLink() {
    const url = 'https://jestrada2020.github.io/PrimerQuizBioPythonV1/';
    
    navigator.clipboard.writeText(url).then(() => {
        showNotification('¡Enlace copiado al portapapeles!');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('¡Enlace copiado al portapapeles!');
    });
}