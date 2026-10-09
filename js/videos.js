/**
 * Academia Bio-R · «Aprendo con videos»
 * Videos del canal de YouTube del profesor John Jairo Estrada (john estrada, UCe_8YXWBojXgfgaiQODPWTg),
 * verificados uno por uno (canal y descripción) en octubre de 2026 y asociados a los módulos cuyo tema tratan.
 * El canal aún no tiene videos de programación en R: los de bioestadística, construcción de data frames,
 * carga de CSV y modelos de biología se usan como temas de apoyo. Los títulos se muestran con la ortografía corregida.
 */
const VideosCanal = (() => {

    const CANAL = 'https://www.youtube.com/channel/UCe_8YXWBojXgfgaiQODPWTg';

    // [tema, [destinos: '#/modulo/id' o '#/recursos/id'], qué se aprende, [ids de video]]
    const TEMAS = [
        ['Bioestadística: datos no agrupados', ['#/modulo/statistics'],
            'Media, mediana, moda y medidas de dispersión calculadas paso a paso con datos sin agrupar (casos con número par e impar de datos). En el módulo 10 se hacen los mismos cálculos con <code>mean()</code>, <code>median()</code> y <code>sd()</code>.',
            ['oo-eZAWszgo', 'Ycv8CPkG2Jw', '6fzk_ZVkcas', 'vmT6VJk53hQ']],
        ['Bioestadística: datos agrupados y tablas de frecuencia', ['#/modulo/statistics', '#/modulo/graphics'],
            'Construir intervalos de clase y la tabla de frecuencias. En R se obtiene con <code>cut()</code>, <code>table()</code> y <code>hist()</code>.',
            ['dU1oXqfb7fA', '3BY6ltTFi_s']],
        ['Diagrama de caja (boxplot)', ['#/modulo/statistics', '#/modulo/graphics'],
            'Leer cuartiles, mediana y datos atípicos en un diagrama de caja; en R: <code>boxplot()</code> y <code>geom_boxplot()</code>.',
            ['J7DueVawEUU', 'gO3wYcMn9Ps']],
        ['De la unidad de observación al data frame (apoyo)', ['#/modulo/dataframes', '#/modulo/io'],
            'Cómo se organizan los datos de un estudio en una tabla (filas = unidades de observación, columnas = variables) antes de llevarla a R: ejemplos en biología, ecología, física y química.',
            ['3c4oRkL2_2w', 'zd2Ku40ahB0', 'c9DTa2An1qg', '_m5ddwI-9zo']],
        ['De Excel a CSV (apoyo)', ['#/modulo/io', '#/modulo/cloud'],
            'Convertir una hoja de Excel a CSV y subir el archivo a Google Colab. El CSV resultante se lee en R con <code>read.csv()</code> (y Colab también puede ejecutar R).',
            ['A4FUP3M9ZDk', 'lm7MwqMPNJM']],
        ['Google Colab en equipo (apoyo)', ['#/modulo/cloud'],
            'Personalizar Colab y trabajar en grupo con cuadernos y datos compartidos; sirve igual para cuadernos de R.',
            ['5-Ded09PCKI', 'tw9FqCLlLqo', 'Ba7vJ1XW7M4']],
        ['Modelos y simulaciones en biología (apoyo)', ['#/laboratorio', '#/modulo/proyecto'],
            'Biorreactores, crecimiento logístico y mezcla en dos tanques: del modelo a la simulación con gráfica. En el laboratorio y en el proyecto final se simulan con R.',
            ['VFdqLxqz4M4', 'Y0XPC_ohq1s', 'lF_lwkrVkXI', 'phJlrxi0ZWw', '_LTU2PCMKCU', 'j8aSH8D274Y']]
    ];

    const TITULOS = {
        'oo-eZAWszgo': ['Bioestadística: ejemplo de los refrescos, datos no agrupados', '3:04'],
        'Ycv8CPkG2Jw': ['Bioestadística: ejemplo de la nicotina, datos no agrupados', '2:34'],
        '6fzk_ZVkcas': ['Datos no agrupados paso a paso: número impar de datos', '10:29'],
        'vmT6VJk53hQ': ['Datos no agrupados paso a paso: número par de datos', '11:51'],
        'dU1oXqfb7fA': ['Bioestadística: ejemplo de la nicotina, datos agrupados', '2:53'],
        '3BY6ltTFi_s': ['Bioestadística: ejemplo de los refrescos, datos agrupados', '2:46'],
        'J7DueVawEUU': ['Bioestadística: ejemplo de la nicotina, diagrama de caja', '2:49'],
        'gO3wYcMn9Ps': ['Bioestadística: ejemplo de los refrescos, diagrama de caja', '2:40'],
        '3c4oRkL2_2w': ['Construcción de una base de datos (data frame): ejemplo en biología', '8:03'],
        'zd2Ku40ahB0': ['De la unidad de observación a la base de datos: ejemplo en ecología', '8:00'],
        'c9DTa2An1qg': ['De la unidad de observación a la base de datos: ejemplo en física', '7:57'],
        '_m5ddwI-9zo': ['De la unidad de observación a la base de datos: ejemplo en química', '7:48'],
        'A4FUP3M9ZDk': ['Google Colab: convertir una hoja de Excel a CSV y cargarla', '3:29'],
        'lm7MwqMPNJM': ['Google Colab: cómo cargar datos en formato CSV', '4:05'],
        '5-Ded09PCKI': ['Google Colab: personalizar la configuración', '4:07'],
        'tw9FqCLlLqo': ['Google Colab: proyectos colaborativos en grupos de trabajo', '1:52'],
        'Ba7vJ1XW7M4': ['Google Colab: datos colaborativos', '2:33'],
        'VFdqLxqz4M4': ['Deducción de la ecuación logística por dos métodos', '7:50'],
        'Y0XPC_ohq1s': ['Biorreactor (parte 1): qué es y sus ecuaciones diferenciales', '4:45'],
        'lF_lwkrVkXI': ['Biorreactor (parte 2): simulación de dos casos', '0:46'],
        'phJlrxi0ZWw': ['Biorreactor (parte 3): simulación con gráfica', '0:46'],
        '_LTU2PCMKCU': ['Deducción del sistema para dos tanques', '7:25'],
        'j8aSH8D274Y': ['Simulación del modelo para dos tanques', '6:26']
    };

    // Módulos que aún no tienen videos del canal (ayuda a decidir qué grabar)
    const SIN = ['intro', 'installation', 'basics', 'vectors', 'programming', 'packages', 'analysis', 'regression',
        'bioconductor', 'rmarkdown', 'shiny'];

    const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

    function nombreDestino(ir) {
        const [, tipo, id] = ir.split('/');
        if (tipo === 'modulo' && modules[id]) return modules[id].title;
        if (tipo === 'recursos') { const r = RECURSOS.find(x => x.id === id); return r ? r.titulo : id; }
        if (tipo === 'laboratorio') return 'Laboratorio libre';
        return ir;
    }

    // Videos del canal relacionados con un módulo (para mostrarlos también en su lección)
    function deModulo(id) {
        const ids = [];
        TEMAS.forEach(t => { if (t[1].includes('#/modulo/' + id)) t[3].forEach(v => { if (!ids.includes(v)) ids.push(v); }); });
        return ids.map(v => ({ title: TITULOS[v][0], url: 'https://www.youtube.com/embed/' + v, canal: true }));
    }

    function total() { return Object.keys(TITULOS).length; }

    function html() {
        return `
        <div class="mod-cab">
            <div class="mod-ico" style="background:linear-gradient(135deg,#ef4444,#b91c1c)"><i class="fab fa-youtube"></i></div>
            <div style="flex:1;min-width:0"><h1>Aprendo con videos</h1>
                <p>${total()} videos del canal del profesor John Jairo Estrada, organizados por tema. Pulsa un video para verlo aquí mismo.</p></div>
            <div class="der"><a class="boton" href="${CANAL}" target="_blank" rel="noopener"><i class="fab fa-youtube" style="color:#ef4444"></i>Ver el canal completo</a></div>
        </div>
        <div class="leccion" style="margin-bottom:22px">
            <div class="video-marco" id="canalMarco"></div>
            <div class="tarjeta" style="padding:16px">
                <small style="color:var(--texto-3);font-weight:700;font-size:.7rem;letter-spacing:.06em">REPRODUCIENDO</small>
                <h3 id="canalTitulo" style="margin:4px 0 6px"></h3>
                <p id="canalTema" style="color:var(--texto-2);font-size:.85rem"></p>
                <div id="canalIr" style="display:flex;flex-direction:column;gap:6px;margin-top:12px"></div>
            </div>
        </div>
        ${TEMAS.map((t, i) => `
        <div class="tarjeta" style="margin-bottom:14px">
            <div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap;margin-bottom:12px">
                <div style="flex:1;min-width:240px"><h3>${esc(t[0])}</h3><p style="color:var(--texto-2);font-size:.88rem;margin-top:4px">${t[2]}</p></div>
                <div style="display:flex;gap:6px;flex-wrap:wrap">${t[1].map(ir => `<a class="boton peq" href="${ir}"><i class="fas fa-arrow-right"></i>Ver en la aplicación: ${esc(nombreDestino(ir))}</a>`).join('')}</div>
            </div>
            <div class="rejilla-videos">${t[3].map(v => `
                <button class="video-item" data-video="${v}" data-tema="${i}">
                    <img loading="lazy" src="https://img.youtube.com/vi/${v}/mqdefault.jpg" alt="">
                    <div><b>${esc(TITULOS[v][0])}</b><span>${TITULOS[v][1]} min</span></div>
                </button>`).join('')}</div>
        </div>`).join('')}
        <div class="profe info"><div class="cara">🎬</div><div><b>Módulos que aún no tienen videos del canal</b>
            ${SIN.map(id => esc(modules[id] ? modules[id].title : id)).join(' · ')}. Sus lecciones tienen videos verificados de otros autores, en español.</div></div>`;
    }

    function montar(raiz) {
        const poner = (v, tema, reproducir) => {
            const marco = raiz.querySelector('#canalMarco');
            raiz.querySelectorAll('.video-item').forEach(b => b.classList.toggle('activo', b.dataset.video === v));
            raiz.querySelector('#canalTitulo').textContent = TITULOS[v][0];
            raiz.querySelector('#canalTema').textContent = 'Tema: ' + TEMAS[tema][0];
            raiz.querySelector('#canalIr').innerHTML = TEMAS[tema][1].map(ir => `<a class="boton peq" href="${ir}"><i class="fas fa-arrow-right"></i>${esc(nombreDestino(ir))}</a>`).join('')
                + `<a class="boton peq fantasma" href="https://www.youtube.com/watch?v=${v}" target="_blank" rel="noopener"><i class="fab fa-youtube"></i>Abrir en YouTube</a>`;
            const enYouTube = `https://www.youtube.com/watch?v=${v}`;
            if (reproducir && location.protocol === 'file:') {
                // Abierta como archivo local: YouTube bloquea el reproductor incrustado (Error 153); se abre en YouTube
                window.open(enYouTube, '_blank', 'noopener');
                marco.innerHTML = `<div style="position:absolute;inset:0;display:grid;place-items:center;padding:20px;text-align:center;background:#0b1120;color:#e6edff">
                    <div><i class="fab fa-youtube" style="font-size:2.6rem;color:#ef4444"></i>
                    <p style="font-weight:800;margin:8px 0 4px">El video se abrió en YouTube, en una pestaña nueva</p>
                    <p style="font-size:.82rem;color:#a9b4d0;max-width:440px">La academia está abierta como archivo de tu computador y YouTube no permite reproducir videos incrustados así (Error 153). Publicada en internet (GitHub Pages) los videos se ven aquí mismo.</p>
                    <a class="boton primario peq" style="margin-top:10px" href="${enYouTube}" target="_blank" rel="noopener"><i class="fab fa-youtube"></i>Abrir otra vez</a></div></div>`;
            } else if (reproducir) {
                marco.innerHTML = `<iframe referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/${v}?autoplay=1&rel=0" title="${esc(TITULOS[v][0])}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            } else {
                marco.innerHTML = `<button aria-label="Reproducir video" style="position:absolute;inset:0;border:0;cursor:pointer;background:#000 url(https://img.youtube.com/vi/${v}/hqdefault.jpg) center/cover">
                    <span style="position:absolute;inset:0;display:grid;place-items:center;background:rgba(0,0,0,.25)"><span style="width:76px;height:76px;border-radius:50%;background:#ef4444;display:grid;place-items:center"><i class="fas fa-play" style="color:#fff;font-size:1.8rem;margin-left:5px"></i></span></span></button>`;
                marco.firstElementChild.onclick = () => poner(v, tema, true);
            }
        };
        raiz.querySelectorAll('.video-item').forEach(b => b.onclick = () => { poner(b.dataset.video, +b.dataset.tema, true); window.scrollTo({ top: 0, behavior: 'smooth' }); });
        poner(TEMAS[0][3][0], 0, false);
    }

    return { CANAL, TEMAS, TITULOS, SIN, html, montar, deModulo, total };
})();
