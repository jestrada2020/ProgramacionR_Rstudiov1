/**
 * Academia Bio-R · Gamificación (la misma de la Academia Bio-Python)
 * Experiencia (XP), niveles, racha de días, meta diaria y medallas.
 * El progreso se guarda por usuario en localStorage (clave br_estado_<id>),
 * así dos estudiantes que comparten computador no mezclan su avance.
 */
const GAME = (() => {

    const NIVELES = [
        { xp: 0,    nombre: 'Semilla de R',            emoji: '🌱' },
        { xp: 100,  nombre: 'Brote de RStudio',        emoji: '🌿' },
        { xp: 250,  nombre: 'Aprendiz de print()',     emoji: '🖨️' },
        { xp: 450,  nombre: 'Domador de vectores',     emoji: '📦' },
        { xp: 700,  nombre: 'Señor de los data frames', emoji: '🗂️' },
        { xp: 1000, nombre: 'Arquitecto de funciones', emoji: '🏗️' },
        { xp: 1400, nombre: 'Artista de ggplot2',      emoji: '🎨' },
        { xp: 1900, nombre: 'Cazador de bugs',         emoji: '🐞' },
        { xp: 2500, nombre: 'Detective estadístico',   emoji: '🔬' },
        { xp: 3200, nombre: 'useR',                    emoji: '📊' },
        { xp: 4200, nombre: 'Gran Maestro useR',       emoji: '👑' }
    ];

    const META_DIARIA = 60;

    const MEDALLAS = [
        { id: 'primer-programa', emoji: '🚀', color: '#4b8bd4', nombre: 'Despegue',        desc: 'Ejecuta tu primer programa' },
        { id: 'hola-mundo',      emoji: '👋', color: '#22d3ee', nombre: '¡Hola, mundo!',   desc: 'Imprime un saludo con print() o cat()' },
        { id: 'cazabugs',        emoji: '🐞', color: '#f87171', nombre: 'Cazabugs',        desc: 'Corrige un error y vuelve a ejecutar con éxito' },
        { id: 'teclas-10',       emoji: '⌨️', color: '#a78bfa', nombre: 'Dedos calientes', desc: 'Ejecuta 10 programas' },
        { id: 'teclas-50',       emoji: '🔥', color: '#fb923c', nombre: 'Máquina de código', desc: 'Ejecuta 50 programas' },
        { id: 'primer-reto',     emoji: '🎯', color: '#34d399', nombre: 'Primer reto',     desc: 'Supera un reto con verificación automática' },
        { id: 'sin-pistas',      emoji: '🧠', color: '#10b981', nombre: 'Sin pistas',      desc: 'Supera un reto sin mirar la solución' },
        { id: 'retador-10',      emoji: '🏹', color: '#14b8a6', nombre: 'Retador',         desc: 'Supera 10 retos' },
        { id: 'quiz-perfecto',   emoji: '💯', color: '#ffd43b', nombre: 'Quiz perfecto',   desc: 'Responde todo un quiz sin errores' },
        { id: 'combo-5',         emoji: '⚡', color: '#facc15', nombre: 'Combo x5',        desc: 'Encadena 5 respuestas correctas' },
        { id: 'primer-modulo',   emoji: '🏅', color: '#f59e0b', nombre: 'Primera medalla', desc: 'Completa tu primer módulo' },
        { id: 'unidad-1',        emoji: '🌱', color: '#22c55e', nombre: 'Primeros pasos',  desc: 'Completa la Unidad 1' },
        { id: 'mitad',           emoji: '⛰️', color: '#0ea5e9', nombre: 'Mitad del camino', desc: 'Completa la mitad de los módulos' },
        { id: 'racha-3',         emoji: '📅', color: '#fb923c', nombre: 'Constancia',      desc: 'Estudia 3 días seguidos' },
        { id: 'racha-7',         emoji: '🗓️', color: '#ef4444', nombre: 'Semana de fuego', desc: 'Estudia 7 días seguidos' },
        { id: 'meta-dia',        emoji: '🎯', color: '#84cc16', nombre: 'Meta cumplida',   desc: `Gana ${META_DIARIA} XP en un día` },
        { id: 'graficador',      emoji: '📈', color: '#06b6d4', nombre: 'Graficador',      desc: 'Dibuja un gráfico con plot() o ggplot2' },
        { id: 'explorador',      emoji: '🧭', color: '#8b5cf6', nombre: 'Explorador',      desc: 'Visita 5 módulos distintos' },
        { id: 'apuntes',         emoji: '📝', color: '#64748b', nombre: 'Buen apunte',     desc: 'Guarda tus notas de un módulo' },
        { id: 'buho',            emoji: '🦉', color: '#6366f1', nombre: 'Búho nocturno',   desc: 'Programa después de las 10 p. m.' },
        { id: 'reto-diario',     emoji: '☀️', color: '#eab308', nombre: 'Reto del día',    desc: 'Supera el reto del día' },
        { id: 'maestro',         emoji: '👑', color: '#ffd43b', nombre: 'Maestro Bio-R',   desc: 'Completa todos los módulos del curso' }
    ];

    let usuario = 'anonimo';
    let estado = null;

    const hoy = () => {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    };
    const diasEntre = (a, b) => Math.round((new Date(b + 'T12:00') - new Date(a + 'T12:00')) / 86400000);

    function vacio() {
        return {
            v: 1, xp: 0,
            racha: { dias: 0, ultimo: null, mejor: 0 },
            diario: { fecha: hoy(), xp: 0, metaCelebrada: false },
            modulos: {},      // id → { leccion, lab, retos:{i:true}, quizMejor, completo, visitado }
            medallas: {},     // id → fecha
            stats: { ejecuciones: 0, errores: 0, retos: 0, quizzes: 0 },
            ultimoModulo: null,
            retosDiarios: {}
        };
    }

    function clave() { return 'br_estado_' + usuario; }

    function guardar() {
        try { localStorage.setItem(clave(), JSON.stringify(estado)); } catch (e) { /* almacenamiento lleno o bloqueado */ }
    }

    function cargar(idUsuario) {
        usuario = (idUsuario || 'anonimo').toString();
        try { estado = JSON.parse(localStorage.getItem(clave())); } catch (e) { estado = null; }
        if (!estado || typeof estado !== 'object') estado = vacio();
        estado = Object.assign(vacio(), estado);
        if (estado.diario.fecha !== hoy()) estado.diario = { fecha: hoy(), xp: 0, metaCelebrada: false };
        guardar();
        return estado;
    }

    function mod(id) {
        if (!estado.modulos[id]) estado.modulos[id] = { leccion: false, lab: false, retos: {}, quizMejor: null, completo: false, visitado: false };
        return estado.modulos[id];
    }

    function nivelDe(xp) {
        let i = 0;
        while (i + 1 < NIVELES.length && xp >= NIVELES[i + 1].xp) i++;
        const actual = NIVELES[i], sig = NIVELES[i + 1] || null;
        const pct = sig ? (xp - actual.xp) / (sig.xp - actual.xp) : 1;
        return { indice: i, actual, sig, pct };
    }

    // Registra actividad del día (para la racha)
    function marcarDia() {
        const h = hoy(), r = estado.racha;
        if (r.ultimo === h) return;
        r.dias = (r.ultimo && diasEntre(r.ultimo, h) === 1) ? r.dias + 1 : 1;
        r.ultimo = h;
        r.mejor = Math.max(r.mejor, r.dias);
        if (r.dias >= 3) otorgar('racha-3');
        if (r.dias >= 7) otorgar('racha-7');
        if (r.dias > 1) UI.aviso(`🔥 ¡Racha de ${r.dias} días! Sigue así`, 'xp');
    }

    function sumarXP(cant, motivo) {
        if (!cant) return;
        const antes = nivelDe(estado.xp).indice;
        marcarDia();
        estado.xp += cant;
        if (estado.diario.fecha !== hoy()) estado.diario = { fecha: hoy(), xp: 0, metaCelebrada: false };
        estado.diario.xp += cant;
        guardar();
        UI.aviso(`+${cant} XP · ${motivo}`, 'xp', 'fa-bolt');
        const despues = nivelDe(estado.xp);
        if (despues.indice > antes) {
            UI.celebrar(despues.actual.emoji, `¡Subiste a nivel ${despues.indice + 1}!`,
                `Ahora eres <b>${despues.actual.nombre}</b>. Cada línea de código te hace más fuerte.`);
        }
        if (estado.diario.xp >= META_DIARIA && !estado.diario.metaCelebrada) {
            estado.diario.metaCelebrada = true;
            otorgar('meta-dia');
            UI.aviso('🎯 ¡Meta diaria cumplida!', 'ok', 'fa-bullseye');
            guardar();
        }
        if (new Date().getHours() >= 22) otorgar('buho');
        if (typeof APP !== 'undefined') APP.refrescarJugador();
    }

    function otorgar(idMedalla) {
        if (estado.medallas[idMedalla]) return false;
        const m = MEDALLAS.find(x => x.id === idMedalla);
        if (!m) return false;
        estado.medallas[idMedalla] = hoy();
        guardar();
        setTimeout(() => UI.celebrar(m.emoji, '¡Nueva medalla!', `<b>${m.nombre}</b><br>${m.desc}`), 350);
        if (typeof APP !== 'undefined') APP.refrescarJugador();
        return true;
    }

    // ---------- Eventos de aprendizaje ----------
    function visitar(id) {
        const m = mod(id);
        estado.ultimoModulo = id;
        if (!m.visitado) {
            m.visitado = true;
            const visitados = Object.values(estado.modulos).filter(x => x.visitado).length;
            if (visitados >= 5) otorgar('explorador');
        }
        guardar();
    }

    function leccionLeida(id) {
        const m = mod(id);
        if (m.leccion) return false;
        m.leccion = true;
        sumarXP(15, 'lección completada');
        return true;
    }

    function ejecucion(id, ok, salida, huboGrafico) {
        const s = estado.stats;
        s.ejecuciones++;
        if (!ok) { s.errores++; estado._ultimoError = true; guardar(); return; }
        otorgar('primer-programa');
        if (/hola/i.test(salida || '')) otorgar('hola-mundo');
        if (estado._ultimoError) { otorgar('cazabugs'); }
        estado._ultimoError = false;
        if (s.ejecuciones >= 10) otorgar('teclas-10');
        if (s.ejecuciones >= 50) otorgar('teclas-50');
        if (huboGrafico) otorgar('graficador');
        if (id) {
            const m = mod(id);
            if (!m.lab) { m.lab = true; sumarXP(10, 'primer programa del módulo'); }
        }
        guardar();
        if (typeof APP !== 'undefined') APP.refrescarJugador();
    }

    function retoSuperado(id, indice, vioSolucion, esDiario) {
        const m = mod(id);
        if (m.retos[indice]) return false;
        m.retos[indice] = vioSolucion ? 'con-ayuda' : true;
        estado.stats.retos++;
        otorgar('primer-reto');
        if (!vioSolucion) otorgar('sin-pistas');
        if (estado.stats.retos >= 10) otorgar('retador-10');
        let xp = vioSolucion ? 8 : 25;
        if (esDiario && !estado.retosDiarios[hoy()]) {
            estado.retosDiarios[hoy()] = true;
            xp *= 2;
            otorgar('reto-diario');
        }
        sumarXP(xp, vioSolucion ? 'reto resuelto con ayuda' : (esDiario ? 'reto del día (doble XP)' : 'reto superado'));
        return true;
    }

    function quizTerminado(id, aciertos, total, mejorCombo) {
        const m = mod(id);
        const pct = total ? Math.round(aciertos * 100 / total) : 0;
        const primeraVez = m.quizMejor === null;
        const mejora = primeraVez || pct > m.quizMejor;
        estado.stats.quizzes++;
        if (mejora) {
            // Solo se premian las respuestas nuevas: no se gana XP repitiendo el mismo resultado
            const antes = primeraVez ? 0 : Math.round(m.quizMejor * total / 100);
            const nuevas = Math.max(0, aciertos - antes);
            m.quizMejor = pct;
            if (nuevas) sumarXP(nuevas * 8, `${nuevas} respuesta${nuevas > 1 ? 's' : ''} correcta${nuevas > 1 ? 's' : ''}`);
        }
        if (mejorCombo >= 5) otorgar('combo-5');
        if (pct === 100) otorgar('quiz-perfecto');
        guardar();
        return pct;
    }

    function completarModulo(id, totalNucleo, unidad1) {
        const m = mod(id);
        if (m.completo) return false;
        m.completo = true;
        guardar();
        sumarXP(100, 'módulo completado');
        otorgar('primer-modulo');
        const hechos = totalNucleo.filter(x => estado.modulos[x] && estado.modulos[x].completo).length;
        if (hechos >= Math.ceil(totalNucleo.length / 2)) otorgar('mitad');
        if (hechos === totalNucleo.length) otorgar('maestro');
        if (unidad1.every(x => estado.modulos[x] && estado.modulos[x].completo)) otorgar('unidad-1');
        return true;
    }

    function notasGuardadas() { otorgar('apuntes'); }

    // ---------- Confeti (sin dependencias) ----------
    function confeti(cantidad = 160) {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        let lienzo = document.getElementById('confeti');
        if (!lienzo) {
            lienzo = document.createElement('canvas');
            lienzo.id = 'confeti';
            document.body.appendChild(lienzo);
        }
        const ctx = lienzo.getContext('2d');
        lienzo.width = innerWidth; lienzo.height = innerHeight;
        const colores = ['#fbbf24', '#276dc3', '#34d399', '#f87171', '#a78bfa', '#75aadb'];
        const p = Array.from({ length: cantidad }, () => ({
            x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight * .35,
            vx: (Math.random() - .5) * 16, vy: -Math.random() * 14 - 4,
            r: Math.random() * 6 + 4, c: colores[Math.random() * colores.length | 0],
            g: Math.random() * Math.PI, vg: (Math.random() - .5) * .3
        }));
        let cuadros = 0;
        (function paso() {
            ctx.clearRect(0, 0, lienzo.width, lienzo.height);
            p.forEach(q => {
                q.vy += .35; q.vx *= .99; q.x += q.vx; q.y += q.vy; q.g += q.vg;
                ctx.save(); ctx.translate(q.x, q.y); ctx.rotate(q.g);
                ctx.fillStyle = q.c; ctx.fillRect(-q.r / 2, -q.r / 4, q.r, q.r / 2);
                ctx.restore();
            });
            if (++cuadros < 170) requestAnimationFrame(paso);
            else ctx.clearRect(0, 0, lienzo.width, lienzo.height);
        })();
    }

    return {
        NIVELES, MEDALLAS, META_DIARIA,
        cargar, guardar, mod, nivelDe, hoy,
        get estado() { return estado; },
        sumarXP, otorgar, visitar, leccionLeida, ejecucion, retoSuperado, quizTerminado, completarModulo, notasGuardadas,
        confeti
    };
})();
