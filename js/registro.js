/**
 * Academia Bio-R · Registro automático en Google Forms
 * - Ingreso: al abrir la academia (una vez por inicio de sesión).
 * - Salida: al pulsar «Salir» o al cerrar o recargar la pestaña, con la duración desde el inicio de sesión.
 *   Si una sesión tiene varias salidas (por ejemplo, porque se recargó la página), la última es la definitiva.
 * - Notas y actividades: lección leída, reto superado, cada intento de quiz (porcentaje y nota de 0 a 5) y módulo completado.
 * Los datos van a los formularios configurados en js/registro-config.js. Sin configuración no se envía nada.
 * Si no hay internet, los registros se guardan y se reenvían la próxima vez que se abra la academia.
 */
const REGISTRO = (() => {
    const COLA = 'br_registro_pendiente';
    let salidaEnviada = false;

    const cfg = tipo => (typeof REGISTRO_CONFIG !== 'undefined' && REGISTRO_CONFIG && REGISTRO_CONFIG[tipo]) || null;
    const activo = tipo => { const c = cfg(tipo); return !!(c && /\/formResponse$/.test(c.url || '') && c.campos && Object.keys(c.campos).length); };
    const dos = n => String(n).padStart(2, '0');
    const fecha = d => `${d.getFullYear()}-${dos(d.getMonth() + 1)}-${dos(d.getDate())} ${dos(d.getHours())}:${dos(d.getMinutes())}:${dos(d.getSeconds())}`;

    function sesion() {
        const s = (typeof AUTH !== 'undefined' && AUTH.getSession()) || null;
        if (!s) return null;
        const inicio = s.loginTime ? new Date(s.loginTime) : new Date();
        return { ...s, inicio, idSesion: `${s.id}-${inicio.getTime().toString(36)}` };
    }

    // El profesor (administrador) no se registra
    const registrable = s => s && s.rol !== 'admin';

    function cuerpo(tipo, valores) {
        const c = cfg(tipo), datos = new URLSearchParams();
        Object.entries(valores).forEach(([k, v]) => {
            if (c.campos[k] && v !== undefined && v !== null && v !== '') datos.append(c.campos[k], String(v));
        });
        return datos;
    }

    function guardarPendiente(tipo, valores) {
        try {
            const cola = JSON.parse(localStorage.getItem(COLA) || '[]');
            cola.push({ tipo, valores });
            localStorage.setItem(COLA, JSON.stringify(cola.slice(-200)));
        } catch (e) { /* almacenamiento no disponible */ }
    }

    function enviar(tipo, valores, alSalir) {
        if (!activo(tipo)) return false;
        const url = cfg(tipo).url, datos = cuerpo(tipo, valores);
        if (alSalir && navigator.sendBeacon) {
            if (navigator.sendBeacon(url, datos)) return true;
        }
        if (!navigator.onLine) { guardarPendiente(tipo, valores); return false; }
        fetch(url, { method: 'POST', mode: 'no-cors', body: datos, keepalive: true })
            .catch(() => guardarPendiente(tipo, valores));
        return true;
    }

    function reenviarPendientes() {
        let cola = [];
        try { cola = JSON.parse(localStorage.getItem(COLA) || '[]'); localStorage.removeItem(COLA); } catch (e) { return; }
        cola.forEach(r => enviar(r.tipo, r.valores, false));
    }

    function ingreso() {
        const s = sesion();
        if (!registrable(s) || !activo('ingreso')) return;
        const marca = 'br_ingreso_' + s.idSesion;
        try { if (sessionStorage.getItem(marca)) return; sessionStorage.setItem(marca, '1'); } catch (e) { /* sin sessionStorage */ }
        enviar('ingreso', {
            usuario: s.id, nombre: s.nombre, tipo: 'Ingreso', ingreso: fecha(s.inicio),
            duracion: 0, sesion: s.idSesion, origen: 'Automático'
        });
    }

    function salida() {
        const s = sesion();
        if (salidaEnviada || !registrable(s) || !activo('ingreso')) return;
        salidaEnviada = true;
        const ahora = new Date();
        enviar('ingreso', {
            usuario: s.id, nombre: s.nombre, tipo: 'Salida', ingreso: fecha(s.inicio), salida: fecha(ahora),
            duracion: ((ahora - s.inicio) / 60000).toFixed(1), sesion: s.idSesion, origen: 'Automático'
        }, true);
    }

    /** actividad: 'Lección' | 'Reto' | 'Quiz' | 'Módulo completado' */
    function actividad(modulo, tipoActividad, detalle, resultado, nota) {
        const s = sesion();
        if (!registrable(s) || !activo('notas')) return;
        const e = GAME.estado, nv = GAME.nivelDe(e.xp);
        const hechos = NUCLEO.filter(id => e.modulos[id] && e.modulos[id].completo).length;
        enviar('notas', {
            usuario: s.id, nombre: s.nombre, modulo: (modules[modulo] || {}).title || modulo, actividad: tipoActividad,
            detalle, resultado, nota, xp: e.xp, nivel: `${nv.indice + 1} · ${nv.actual.nombre}`,
            avance: `${hechos}/${NUCLEO.length}`, fecha: fecha(new Date()), origen: 'Automático'
        });
    }

    function iniciar() {
        reenviarPendientes();
        ingreso();
        window.addEventListener('pagehide', salida);
        // Si el navegador restaura la página desde su caché, la sesión continúa y podrá registrar otra salida
        window.addEventListener('pageshow', e => { if (e.persisted) salidaEnviada = false; });
    }

    return { iniciar, salida, actividad, activo: () => activo('ingreso') || activo('notas') };
})();
