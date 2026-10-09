/**
 * Academia Bio-R · Laboratorio de código
 * - Ejecuta R real en el navegador con WebR (R 4.5 compilado a WebAssembly).
 * - readline() lee de la caja «Entradas» (una por línea) y, si se agotan, pregunta en una ventana.
 * - Detiene los bucles infinitos (límite de tiempo) y muestra los gráficos (plot, hist, ggplot2…).
 * - Instala solos los paquetes que el código carga con library() (ggplot2, dplyr, readxl…).
 * - Traduce los errores de R a explicaciones en español («Profe R»).
 * - Verifica los retos comparando la salida del estudiante con la de la solución.
 */
const LAB = (() => {

    const WEBR_URL = 'https://webr.r-wasm.org/v0.5.7/';
    const CARPETA = '/home/web_user';
    const LIMITE_SEG = 12;          // tiempo máximo de una ejecución (bucles infinitos)
    const ESPERA_MAX_MS = 45000;    // si R no responde en este tiempo, se reinicia
    const BASE = ['base', 'stats', 'utils', 'graphics', 'grDevices', 'methods', 'datasets', 'tools', 'grid', 'parallel', 'splines', 'stats4', 'compiler', 'tcltk'];
    let webR = null;
    let promesaCarga = null;
    let cola = Promise.resolve();
    const instalados = new Set(BASE);
    const noDisponibles = new Set();

    // Funciones de apoyo que se cargan en R (entorno «academia», adjunto a la ruta de búsqueda)
    const ARRANQUE = String.raw`
invisible(compiler::enableJIT(0))
options(width = 70, digits = 7, warn = 1)
local({
  bp <- new.env()
  bp$entradas <- character(0)
  bp$tomar <- function(prompt = "") {
    cat(prompt)
    if (!length(bp$entradas)) stop(structure(class = c("bp_entrada", "error", "condition"),
      list(message = "no hay más datos de entrada", call = NULL)))
    v <- bp$entradas[1]; bp$entradas <- bp$entradas[-1]
    cat("\001", v, "\002\n", sep = "")
    v
  }
  bp$reportar <- function(tipo, msg, linea, texto, llamada = "") {
    lim <- function(s) gsub("[\001-\037]", " ", paste(s, collapse = " "))
    cat("\007", lim(tipo), "\037", lim(msg), "\037", ifelse(is.na(linea), "", linea), "\037", lim(texto), "\037", lim(llamada), "\007\n", sep = "")
  }
  bp$lineaDe <- function(llamadas, base) {
    for (k in rev(seq_along(llamadas))) {
      sr <- attr(llamadas[[k]], "srcref")
      if (!is.null(sr) && identical(attr(sr, "srcfile")$filename, "<tu código>")) return(sr[1])
    }
    base
  }
  bp$ejecutar <- function(codigo, entradas = character(0), limite = 12) {
    bp$entradas <- as.character(entradas)
    rm(list = ls(globalenv(), all.names = TRUE), envir = globalenv())
    lineas <- strsplit(codigo, "\n", fixed = TRUE)[[1]]
    sf <- srcfilecopy("<tu código>", lineas)
    exprs <- tryCatch(parse(text = codigo, keep.source = TRUE, srcfile = sf), error = function(e) e)
    if (inherits(exprs, "error")) {
      m <- conditionMessage(exprs)
      ln <- suppressWarnings(as.integer(sub("^[^:]*:(\\d+):.*", "\\1", m)))
      bp$reportar("SyntaxError", m, ln, if (!is.na(ln) && ln <= length(lineas)) lineas[ln] else "")
      return(invisible())
    }
    refs <- attr(exprs, "srcref")
    setTimeLimit(elapsed = limite, transient = TRUE)
    on.exit(setTimeLimit(elapsed = Inf, transient = FALSE))
    for (i in seq_along(exprs)) {
      donde <- refs[[i]][1]
      ok <- tryCatch({
        withCallingHandlers({
          v <- withVisible(eval(exprs[[i]], envir = globalenv()))
          if (v$visible) print(v$value)
          TRUE
        }, warning = function(w) {
          cat("\005", conditionMessage(w), "\006\n", sep = "")
          invokeRestart("muffleWarning")
        }, message = function(m) {
          if (!inherits(m, "packageStartupMessage")) cat(conditionMessage(m))
          invokeRestart("muffleMessage")
        }, error = function(e) {
          donde <<- bp$lineaDe(sys.calls(), donde)
        })
      }, error = function(e) {
        msg <- conditionMessage(e)
        tipo <- if (inherits(e, "bp_entrada")) "Entrada"
                else if (grepl("elapsed time limit|tiempo transcurrido", msg)) "TiempoAgotado" else "Error"
        llamada <- if (!is.null(conditionCall(e))) deparse(conditionCall(e), nlines = 1) else ""
        if (grepl("^(eval|withVisible|withCallingHandlers|doTryCatch)\\(", llamada)) llamada <- ""
        bp$reportar(tipo, msg, donde, if (!is.na(donde) && donde <= length(lineas)) lineas[donde] else "", llamada)
        FALSE
      })
      if (!isTRUE(ok)) break
    }
    invisible()
  }
  h <- new.env()
  h$readline <- function(prompt = "") bp$tomar(prompt)
  h$readLines <- function(con = stdin(), n = -1L, ...) {
    es_teclado <- tryCatch(inherits(con, "terminal") || identical(con, "stdin") ||
      (inherits(con, "connection") && summary(con)$description == "stdin"), error = function(e) FALSE)
    if (!es_teclado) return(base::readLines(con, n, ...))
    k <- if (n < 0) length(bp$entradas) else n
    vapply(seq_len(k), function(i) bp$tomar(""), "")
  }
  h$mostrar <- function(x, filas = 20) {
    if (inherits(x, "tbl_df")) x <- as.data.frame(x)
    if (is.matrix(x) || is.table(x)) x <- as.data.frame.matrix(as.matrix(x))
    if (!is.data.frame(x)) { print(x); return(invisible(x)) }
    esc <- function(s) gsub(">", "&gt;", gsub("<", "&lt;", gsub("&", "&amp;", s, fixed = TRUE), fixed = TRUE), fixed = TRUE)
    d <- utils::head(x, filas)
    f <- as.matrix(format(d))
    cab <- paste0("<tr><th></th>", paste0("<th>", esc(names(d)), "</th>", collapse = ""), "</tr>")
    cuerpo <- vapply(seq_len(nrow(d)), function(i)
      paste0("<tr><th>", esc(rownames(d)[i]), "</th>", paste0("<td>", esc(f[i, ]), "</td>", collapse = ""), "</tr>"), "")
    pie <- sprintf("%d filas × %d columnas%s", nrow(x), ncol(x),
      if (nrow(x) > filas) sprintf(" (se muestran las primeras %d)", filas) else "")
    cat("\003<table class=\"tabla-df\"><thead>", cab, "</thead><tbody>", paste(cuerpo, collapse = ""),
        "</tbody></table><div class=\"df-pie\">", pie, "</div>\004\n", sep = "")
    invisible(x)
  }
  h$.bp <- bp
  attach(h, name = "academia", warn.conflicts = FALSE)
})
`;

    // ---------- Carga de WebR ----------
    function avisarEstado(estado, texto) {
        const el = document.getElementById('estadoPython');
        if (!el) return;
        el.className = 'estado-python ' + estado;
        el.querySelector('.txt').textContent = texto;
    }

    function cargar() {
        if (promesaCarga) return promesaCarga;
        avisarEstado('', 'Preparando R…');
        promesaCarga = (async () => {
            const { WebR } = await import(WEBR_URL + 'webr.mjs');
            const w = new WebR({ baseUrl: WEBR_URL });
            await w.init();
            await w.evalRVoid(ARRANQUE);
            webR = w;
            await copiarDatosPractica();
            avisarEstado('listo', 'R listo');
            return webR;
        })().catch(e => {
            promesaCarga = null;
            webR = null;
            avisarEstado('error', 'R sin conexión');
            throw e;
        });
        return promesaCarga;
    }

    // Si R se queda bloqueado (algo que el límite de tiempo no detiene), se reinicia desde cero
    function reiniciar() {
        try { webR && webR.close(); } catch (e) { /* ya cerrado */ }
        webR = null; promesaCarga = null;
        instalados.clear(); BASE.forEach(p => instalados.add(p));
    }

    // ---------- Paquetes ----------
    function paquetesDe(codigo) {
        const sinComentarios = codigo.replace(/#[^\n]*/g, '');
        const p = new Set();
        let m;
        const re1 = /\b(?:library|require|requireNamespace)\s*\(\s*["']?([A-Za-z][\w.]*)["']?/g;
        while ((m = re1.exec(sinComentarios))) p.add(m[1]);
        const re2 = /\b([A-Za-z][\w.]*):::?[A-Za-z.]/g;
        while ((m = re2.exec(sinComentarios))) p.add(m[1]);
        return [...p].filter(x => !instalados.has(x) && !noDisponibles.has(x));
    }

    async function asegurarPaquetes(codigo, alAvisar) {
        for (const p of paquetesDe(codigo)) {
            if (await webR.evalRBoolean(`requireNamespace("${p}", quietly = TRUE)`)) { instalados.add(p); continue; }
            alAvisar && alAvisar(`Instalando el paquete ${p} (solo la primera vez)…`);
            try { await webR.installPackages([p], { quiet: true }); } catch (e) { /* se informa al ejecutar */ }
            if (await webR.evalRBoolean(`requireNamespace("${p}", quietly = TRUE)`)) instalados.add(p);
            else noDisponibles.add(p);
        }
    }

    // ---------- Ejecución ----------
    function aPNG(bitmap) {
        const c = document.createElement('canvas');
        c.width = bitmap.width; c.height = bitmap.height;
        const ctx = c.getContext('2d');
        ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(bitmap, 0, 0);
        return c.toDataURL('image/png');
    }

    async function ejecutarUnaVez(codigo, entradas, alAvisar) {
        await cargar();
        await asegurarPaquetes(codigo, alAvisar);
        const shelter = await new webR.Shelter();
        let reloj;
        try {
            const trabajo = shelter.captureR('as.environment("academia")$.bp$ejecutar(codigo, strsplit(entradas, "\\036", fixed = TRUE)[[1]], limite)', {
                env: { codigo, entradas: entradas.join('\x1e'), limite: LIMITE_SEG },
                withAutoprint: false, captureStreams: true, captureConditions: false,
                captureGraphics: { width: 640, height: 440, bg: 'white' }
            });
            const r = await Promise.race([trabajo, new Promise((_, mal) => { reloj = setTimeout(() => mal(new Error('BLOQUEO')), ESPERA_MAX_MS); })]);
            const lineas = r.output.map(o => (o.type === 'stderr' ? '\x05' + o.data + '\x06' : o.data));
            let salida = lineas.join('\n');
            let error = null;
            salida = salida.replace(/\x07([\s\S]*?)\x07\n?/, (m, d) => {
                const [tipo, msg, linea, texto, llamada] = d.split('\x1f');
                error = { tipo, msg, linea: linea ? +linea : null, texto, llamada };
                return '';
            });
            const figuras = (r.images || []).map(aPNG);
            return { salida: salida.replace(/\n+$/, '\n'), error, figuras };
        } catch (e) {
            if (e.message === 'BLOQUEO') { reiniciar(); return { salida: '', error: { tipo: 'TiempoAgotado', msg: '', linea: null, texto: '' }, figuras: [] }; }
            throw e;
        } finally {
            clearTimeout(reloj);
            try { await shelter.purge(); } catch (e) { /* R reiniciado */ }
        }
    }

    /**
     * Ejecuta código y devuelve { salida, error, figuras }.
     * entradas: texto con una entrada por línea. ventana: si se permite preguntar al agotarse.
     */
    function ejecutar(codigo, entradas = '', ventana = true, alAvisar) {
        const tarea = cola.then(async () => {
            const lista = entradas ? entradas.replace(/\r/g, '').split('\n') : [];
            if (lista.length && lista[lista.length - 1] === '') lista.pop();
            for (let intento = 0; intento < 12; intento++) {
                const r = await ejecutarUnaVez(codigo, lista, alAvisar);
                if (!(r.error && r.error.tipo === 'Entrada' && ventana)) { r.entradasUsadas = lista; return r; }
                // Faltan datos: se piden en una ventana y se vuelve a ejecutar con todos
                const pregunta = (r.salida.split('\n').filter(Boolean).pop() || '').replace(/[\x00-\x1f]/g, '').trim();
                const v = window.prompt(pregunta || 'Tu programa pide un dato (readline):', '');
                if (v === null) return r;
                lista.push(v);
            }
            return ejecutarUnaVez(codigo, lista, alAvisar);
        });
        cola = tarea.catch(() => {});
        return tarea;
    }

    // ---------- Presentación ----------
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    // Texto normal (escapado), entradas de readline() en verde, advertencias en amarillo y tablas de mostrar()
    function salidaHTML(texto) {
        return texto.split(/\x03([\s\S]*?)\x04\n?/).map((parte, i) => i % 2
            ? `<div class="tabla-caja">${parte}</div>`
            : esc(parte)
                .replace(/\x01([\s\S]*?)\x02/g, '<span class="entrada">$1</span>')
                .replace(/\x05([\s\S]*?)\x06/g, '<span class="advertencia">⚠ $1</span>')).join('');
    }

    function pintar(consola, r) {
        let html = r.salida ? salidaHTML(r.salida) : '';
        (r.figuras || []).forEach(src => { html += `<img alt="Gráfico generado por tu programa" src="${src}">`; });
        if (!html.trim() && !r.error) html = '<span class="vacio">✔ El programa terminó sin mostrar nada. Usa print(), cat() o escribe el nombre de un objeto para ver resultados.</span>';
        if (r.error) html += `<span class="err">✖ ${r.error.tipo === 'TiempoAgotado' ? 'Ejecución detenida: tardó demasiado' : r.error.tipo === 'Entrada' ? 'Faltan datos de entrada' : 'Error' + (r.error.linea ? ' en la línea ' + r.error.linea : '')}${r.error.msg && r.error.tipo !== 'TiempoAgotado' ? ': ' + esc(r.error.msg) : ''}</span>`;
        consola.innerHTML = html;
        consola.scrollTop = consola.scrollHeight;
    }

    // ---------- Archivos del R del navegador ----------
    async function copiarDatosPractica() {
        if (typeof DATOS_PRACTICA === 'undefined') return;
        const cod = new TextEncoder();
        for (const [nombre, texto] of Object.entries(DATOS_PRACTICA)) {
            try { await webR.FS.writeFile(`${CARPETA}/${nombre}`, cod.encode(texto)); } catch (e) { /* sin acceso */ }
        }
    }

    async function subirArchivo(archivo) {
        await cargar();
        const nombre = archivo.name.replace(/[^\w.\-áéíóúñÁÉÍÓÚÑ ]/g, '_');
        const datos = new Uint8Array(await archivo.arrayBuffer());
        await webR.FS.writeFile(`${CARPETA}/${nombre}`, datos);
        const ext = nombre.split('.').pop().toLowerCase();
        if (ext === 'xlsx' || ext === 'xls') await asegurarPaquetes('library(readxl)');
        if (ext === 'json') await asegurarPaquetes('library(jsonlite)');
        return nombre;
    }

    async function archivos() {
        if (!webR) return [];
        const nombres = await webR.evalRRaw('list.files(".", all.files = FALSE)', 'string[]');
        const tamanos = nombres.length ? await webR.evalRRaw('as.numeric(file.size(list.files(".", all.files = FALSE)))', 'number[]') : [];
        return nombres.map((n, i) => ({ n, i })).filter(o => !/^Rplots\d*\.pdf$/.test(o.n)).map(({ n, i }) => ({ nombre: n, bytes: tamanos[i] || 0, practica: typeof DATOS_PRACTICA !== 'undefined' && n in DATOS_PRACTICA }))
            .sort((a, b) => a.practica - b.practica || a.nombre.localeCompare(b.nombre));
    }

    async function leerArchivo(nombre) { await cargar(); return webR.FS.readFile(`${CARPETA}/${nombre}`); }

    function codigoLectura(nombre) {
        const ext = (nombre.split('.').pop() || '').toLowerCase();
        if (ext === 'xlsx' || ext === 'xls') return `library(readxl)\ndatos <- read_excel("${nombre}")`;
        if (ext === 'json') return `library(jsonlite)\ndatos <- fromJSON("${nombre}")`;
        if (ext === 'tsv') return `datos <- read.delim("${nombre}")`;
        if (ext === 'txt') return `datos <- read.table("${nombre}", header = TRUE)`;
        if (ext === 'csv') return `datos <- read.csv("${nombre}")`;
        return `lineas <- readLines("${nombre}")`;
    }

    // ---------- Profe R: errores en español ----------
    const PAQUETE_DE = {
        ggplot: 'ggplot2', aes: 'ggplot2', geom_point: 'ggplot2', geom_line: 'ggplot2', geom_bar: 'ggplot2', geom_col: 'ggplot2', geom_histogram: 'ggplot2', geom_boxplot: 'ggplot2', labs: 'ggplot2',
        filter: 'dplyr', select: 'dplyr', mutate: 'dplyr', arrange: 'dplyr', summarise: 'dplyr', summarize: 'dplyr', group_by: 'dplyr', '%>%': 'dplyr', n: 'dplyr', left_join: 'dplyr',
        pivot_longer: 'tidyr', pivot_wider: 'tidyr', drop_na: 'tidyr', read_excel: 'readxl', fromJSON: 'jsonlite', toJSON: 'jsonlite', write_xlsx: 'writexl',
        str_detect: 'stringr', str_count: 'stringr', str_replace_all: 'stringr', str_to_upper: 'stringr'
    };

    function explicar(err) {
        const m = err.msg || '';
        let titulo = 'Error', exp = '', tip = '';
        let x;
        if (err.tipo === 'SyntaxError') {
            titulo = 'Error de escritura (sintaxis)';
            exp = 'R no entiende cómo está escrita una línea.';
            if (/unexpected end of input|final inesperado de la entrada/.test(m)) tip = 'El código terminó antes de tiempo: falta cerrar un paréntesis <code>)</code>, una llave <code>}</code> o unas comillas.';
            else if (/unexpected '\)'|inesperado '\)'/.test(m)) tip = 'Hay un paréntesis de cierre <code>)</code> que sobra.';
            else if (/unexpected '\}'|inesperado '\}'/.test(m)) tip = 'Hay una llave de cierre <code>}</code> que sobra o falta abrir otra.';
            else if (/unexpected '='|inesperado '='/.test(m)) tip = 'Para comparar se usa <code>==</code>; para asignar, <code>&lt;-</code>.';
            else if (/unexpected string constant|constante de cadena/.test(m)) tip = 'Hay un texto entre comillas en un lugar inesperado. ¿Falta una coma o un <code>+</code> antes?';
            else if (/unexpected numeric constant|constante numérica/.test(m)) tip = 'Hay un número en un lugar inesperado. ¿Falta una coma o un operador (<code>+</code>, <code>*</code>)?';
            else if (/unexpected symbol|símbolo inesperado/.test(m)) tip = 'Dos nombres seguidos sin nada entre ellos. ¿Falta una coma, un operador o cerrar un paréntesis en la línea anterior? Los nombres no pueden tener espacios.';
            else if (/unexpected input|entrada inesperada/.test(m)) tip = 'Hay un carácter raro (por ejemplo comillas “tipográficas” copiadas de Word). Usa comillas rectas " o \'.';
            else if (/unexpected 'else'|inesperado 'else'/.test(m)) tip = 'El <code>else</code> debe ir en la misma línea que la llave que cierra el <code>if</code>: <code>} else {</code>.';
            else tip = 'Revisa comillas, paréntesis, llaves y comas.';
        } else if (err.tipo === 'TiempoAgotado') {
            titulo = '¿Bucle infinito?'; exp = `Tu programa siguió trabajando más de ${LIMITE_SEG} segundos y lo detuvimos para que el navegador no se congele.`;
            tip = 'Revisa que la condición del <code>while</code> llegue a ser falsa (¿actualizas la variable dentro del bucle?) o que el <code>repeat</code> tenga un <code>break</code>.';
        } else if (err.tipo === 'Entrada') {
            titulo = 'Faltan datos de entrada'; exp = 'Tu programa pidió más datos con <code>readline()</code> de los que escribiste.';
            tip = 'Escribe un dato por línea en la caja «Entradas para readline()».';
        } else if ((x = m.match(/object '(.+?)' not found|objeto '(.+?)' no encontrado/))) {
            const n = x[1] || x[2];
            titulo = 'Objeto desconocido'; exp = `R no conoce <code>${esc(n)}</code>.`;
            tip = '¿Lo escribiste igual que cuando lo creaste? R distingue mayúsculas de minúsculas, y el objeto debe crearse <i>antes</i> de usarlo. Si querías un texto, ponlo entre comillas.';
        } else if ((x = m.match(/could not find function "(.+?)"|no se pudo encontrar la función "(.+?)"/))) {
            const f = x[1] || x[2];
            titulo = 'Función desconocida'; exp = `R no encuentra la función <code>${esc(f)}()</code>.`;
            tip = PAQUETE_DE[f] ? `Esa función está en el paquete <b>${PAQUETE_DE[f]}</b>: escribe <code>library(${PAQUETE_DE[f]})</code> al inicio.` : 'Revisa cómo se escribe (mayúsculas, puntos y guiones bajos). Si es de un paquete, cárgalo antes con <code>library()</code>. Si es tuya, defínela con <code>function</code> antes de usarla.';
        } else if ((x = m.match(/there is no package called .(.+?).$|no hay paquete llamado .(.+?).$/))) {
            titulo = 'Paquete no disponible'; exp = `El paquete <code>${esc(x[1] || x[2])}</code> no se pudo cargar aquí.`;
            tip = 'Revisa el nombre. Algunos paquetes (por ejemplo los de Bioconductor o shiny en modo servidor) no funcionan dentro del navegador: practícalos en RStudio o en Google Colab.';
        } else if (/non-numeric argument to binary operator|argumento no-numérico para operador binario/.test(m)) {
            titulo = 'Texto donde se esperaba un número'; exp = 'Intentaste hacer una operación matemática con un texto.';
            tip = 'Convierte el texto a número con <code>as.numeric()</code>. Lo que devuelve <code>readline()</code> siempre es texto. Para unir textos usa <code>paste()</code>.';
        } else if (/missing value where TRUE\/FALSE needed|valor ausente donde TRUE\/FALSE es necesario/.test(m)) {
            titulo = 'Condición con NA'; exp = 'La condición de un <code>if</code> o <code>while</code> dio <code>NA</code> (dato faltante).';
            tip = 'Revisa los datos: si pueden faltar, usa <code>is.na()</code> o <code>na.rm = TRUE</code>. Si vienen de <code>readline()</code>, conviértelos con <code>as.numeric()</code>.';
        } else if (/the condition has length > 1|la condición tiene longitud > 1/.test(m)) {
            titulo = 'Condición con varios valores'; exp = 'Le diste a <code>if</code> un vector completo, pero <code>if</code> solo acepta un valor TRUE o FALSE.';
            tip = 'Para decidir elemento por elemento usa <code>ifelse()</code>; para preguntar por todo el vector, <code>any()</code> o <code>all()</code>.';
        } else if (/subscript out of bounds|subíndice fuera de los límites/.test(m)) {
            titulo = 'Posición fuera de rango'; exp = 'Pediste una posición (fila, columna o elemento) que no existe.';
            tip = 'En R las posiciones empiezan en 1. Usa <code>length()</code>, <code>nrow()</code> o <code>dim()</code> para saber cuántos hay.';
        } else if (/undefined columns selected|columnas no definidas/.test(m)) {
            titulo = 'Columna inexistente'; exp = 'Pediste una columna que el data frame no tiene.';
            tip = 'Revisa los nombres exactos con <code>names(datos)</code> (mayúsculas, tildes, guiones bajos).';
        } else if (/arguments imply differing number of rows|los argumentos implican un número diferente de filas/.test(m)) {
            titulo = 'Columnas de distinto tamaño'; exp = 'Todas las columnas de un <code>data.frame()</code> deben tener la misma cantidad de valores.';
            tip = 'Cuenta los elementos de cada vector con <code>length()</code>.';
        } else if ((x = m.match(/argument "(.+?)" is missing, with no default|el argumento "(.+?)" está ausente/))) {
            titulo = 'Falta un argumento'; exp = `Llamaste una función sin darle <code>${esc(x[1] || x[2])}</code>.`;
            tip = 'Revisa la definición de la función y pásale todos los datos que necesita.';
        } else if ((x = m.match(/unused argument|argumento no utilizado/))) {
            titulo = 'Argumento de más'; exp = 'Le diste a una función un argumento que no acepta.';
            tip = 'Revisa el nombre del argumento (por ejemplo <code>na.rm</code>, no <code>na_rm</code>) y si sobra una coma. Consulta la ayuda con <code>?funcion</code> en RStudio.';
        } else if (/\$ operator is invalid for atomic vectors|el operador \$ no es válido/.test(m)) {
            titulo = '$ sobre un vector'; exp = 'El signo <code>$</code> solo sirve con listas y data frames, no con vectores.';
            tip = 'Para un vector usa corchetes: <code>x[2]</code> o <code>x["nombre"]</code>.';
        } else if (/object of type 'closure' is not subsettable|objeto de tipo 'closure' no es subconjunto/.test(m)) {
            titulo = 'Usaste una función como si fuera datos'; exp = 'Pusiste corchetes o <code>$</code> después del nombre de una función.';
            tip = '¿Olvidaste crear el objeto? Nombres como <code>data</code>, <code>df</code>, <code>c</code> o <code>t</code> ya son funciones de R; crea tu objeto antes o cámbiale el nombre.';
        } else if (/cannot open|No such file|no es posible abrir|no existe el archivo/.test(m)) {
            titulo = 'Archivo no encontrado'; exp = 'El archivo que intentas leer no existe en este entorno.';
            tip = 'Revisa el nombre exacto (con extensión). Sube tu archivo con el botón <b>Subir</b> o usa uno de los datos de práctica (botón de carpeta).';
        } else if (/non-conformable|no conformables/.test(m)) {
            titulo = 'Matrices de tamaños incompatibles'; exp = 'Las dimensiones de las matrices no permiten esa operación.';
            tip = 'Para <code>%*%</code>, las columnas de la primera deben coincidir con las filas de la segunda. Revisa con <code>dim()</code>.';
        } else if (/invalid 'type' \(character\)|tipo inválido \(character\)/.test(m)) {
            titulo = 'Operación numérica sobre texto'; exp = 'Usaste una función numérica (como <code>sum()</code> o <code>mean()</code>) con textos.';
            tip = 'Revisa el tipo con <code>class()</code> y conviértelo con <code>as.numeric()</code>.';
        } else if (/replacement has \d+ rows?, data has \d+|el reemplazo tiene/.test(m)) {
            titulo = 'Columna nueva de otro tamaño'; exp = 'La columna que intentas agregar no tiene la misma cantidad de filas que el data frame.';
            tip = 'La nueva columna debe tener un valor por fila (o un solo valor que se repite).';
        } else if (/argument is not numeric or logical|argumento no es numérico ni lógico/.test(m)) {
            titulo = 'Se esperaba un número'; exp = 'La función recibió datos que no son números.';
            tip = 'Si pasaste un data frame completo, elige una columna con <code>datos$columna</code>.';
        } else {
            exp = 'R encontró un problema al ejecutar tu programa.';
            tip = 'Lee el mensaje original: suele decir exactamente qué pasó.';
        }
        const lugar = err.linea ? ` en la <b>línea ${err.linea}</b>${err.texto ? `: <code>${esc(err.texto.trim())}</code>` : ''}` : '';
        const original = err.tipo === 'Error' || err.tipo === 'SyntaxError' ? `Error${err.llamada ? ' en ' + esc(err.llamada) : ''}: ${esc(m)}` : '';
        return `<div class="profe"><div class="cara">🧑‍🔬</div><div>
            <b>Profe R: ${titulo}${lugar}</b>${exp} ${tip}
            ${original ? `<div style="opacity:.7;font-size:.76rem;margin-top:6px" class="mono">${original}</div>` : ''}
        </div></div>`;
    }

    // ---------- Editor ----------
    function crearEditor(contenedor, valor, opciones = {}) {
        contenedor.innerHTML = '';
        contenedor.classList.add('editor-caja');
        if (opciones.bajo) contenedor.classList.add('bajo');
        if (typeof CodeMirror === 'undefined') {
            const ta = document.createElement('textarea');
            ta.className = 'respaldo'; ta.spellcheck = false; ta.value = valor || '';
            ta.addEventListener('keydown', e => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); opciones.alEjecutar && opciones.alEjecutar(); }
                if (e.key === 'Tab') { e.preventDefault(); const p = ta.selectionStart; ta.value = ta.value.slice(0, p) + '  ' + ta.value.slice(ta.selectionEnd); ta.selectionStart = ta.selectionEnd = p + 2; }
            });
            if (opciones.alCambiar) ta.addEventListener('input', () => opciones.alCambiar(ta.value));
            contenedor.appendChild(ta);
            return { get: () => ta.value, set: v => { ta.value = v; }, focus: () => ta.focus(), refrescar() {} };
        }
        const cm = CodeMirror(contenedor, {
            value: valor || '', mode: 'r', lineNumbers: true, indentUnit: 2, tabSize: 2,
            matchBrackets: true, autoCloseBrackets: true, lineWrapping: false, viewportMargin: Infinity,
            extraKeys: {
                'Ctrl-Enter': () => opciones.alEjecutar && opciones.alEjecutar(),
                'Cmd-Enter': () => opciones.alEjecutar && opciones.alEjecutar(),
                'Alt--': c => c.replaceSelection(' <- ', 'end'),
                'Ctrl-Shift-M': c => c.replaceSelection(' %>% ', 'end'),
                Tab: c => c.somethingSelected() ? c.indentSelection('add') : c.replaceSelection('  ', 'end'),
                'Shift-Tab': c => c.indentSelection('subtract'),
                'Ctrl-/': 'toggleComment', 'Ctrl-Shift-C': 'toggleComment'
            }
        });
        if (opciones.alCambiar) cm.on('change', () => opciones.alCambiar(cm.getValue()));
        return { get: () => cm.getValue(), set: v => cm.setValue(v), focus: () => cm.focus(), refrescar: () => setTimeout(() => cm.refresh(), 20), cm };
    }

    // ---------- Verificación de retos ----------
    // Números de la salida (no cuentan los pegados a letras, como el 2 de «nota2», ni los índices [1] de R)
    const NUM = /(?<![\w.])-?\d+(?:[.,]\d+)?(?:e[-+]?\d+)?(?![\w])/gi;
    // Se quitan las líneas de readline() (mensaje + dato), las advertencias y los índices [1] de R
    const limpiar = s => s.replace(/[^\n\x01]*\x01[\s\S]*?\x02/g, '').replace(/\x05[\s\S]*?\x06\n?/g, '')
        .replace(/\x03([\s\S]*?)\x04/g, (m, h) => h.replace(/<div class="df-pie">[\s\S]*?<\/div>/, '').replace(/<\/(td|th)>/g, ' ').replace(/<\/tr>/g, '\n').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'))
        .replace(/\[\d*,?\d*\]/g, ' ');
    const sinTildes = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const palabras = s => sinTildes(s).split(/[^a-z0-9]+/).filter(w => w.length >= 3);
    const normal = s => sinTildes(s).replace(/[^a-z0-9]+/g, '');

    function numerosDe(s) { return (s.match(NUM) || []).map(t => ({ t: t.replace(',', '.'), v: parseFloat(t.replace(',', '.')) })); }

    function coincide(esperado, obtenidos) {
        const dec = (esperado.t.split('.')[1] || '').replace(/e.*/i, '').length;
        return obtenidos.some(o => {
            if (Math.abs(o.v - esperado.v) <= 1e-9 * Math.max(1, Math.abs(esperado.v))) return true;
            const f = Math.pow(10, dec);
            return Math.round(o.v * f) / f === Math.round(esperado.v * f) / f;
        });
    }

    /**
     * Devuelve { estado: 'ok' | 'falla' | 'error' | 'manual' | 'sin-cambios', ... }
     */
    async function verificar(codigo, solucion, plantilla, entradas) {
        if (!codigo.trim() || normal(codigo) === normal(plantilla || '')) return { estado: 'sin-cambios' };
        const a = await ejecutar(solucion, entradas, false);
        if (a.error) return { estado: 'manual', motivo: a.error };
        const b = await ejecutar(solucion, entradas, false);
        const r = await ejecutar(codigo, entradas, false);
        if (r.error) return { estado: 'error', resultado: r };

        const la = limpiar(a.salida).split('\n'), lb = limpiar(b.salida).split('\n');
        // Líneas fijas: las que la solución produce igual en dos ejecuciones (lo aleatorio no se exige)
        const fijas = la.filter((l, i) => l.trim() && l === lb[i]);
        const salidaEst = limpiar(r.salida);
        const lineasEst = salidaEst.split('\n').filter(l => l.trim());
        const igualEst = new Set(lineasEst.map(l => l.trim()));
        const numsEst = numerosDe(salidaEst);
        const fijasSet = new Set(fijas.map(l => l.trim()));
        // Las líneas idénticas a la solución (p. ej. el mensaje de readline) no cuentan como palabras propias
        const palabrasEst = new Set(palabras(lineasEst.filter(l => !fijasSet.has(l.trim())).join(' ')));
        const deEntrada = numerosDe(entradas || '').map(n => n.v);
        // Palabras clave: las que cambian si cambian las entradas (p. ej. el nombre que se escribió)
        let clave = new Set();
        if (entradas && entradas.trim()) {
            const otras = entradas.split('\n').map(x => /^-?\d+(\.\d+)?$/.test(x.trim()) ? String(+x + 1) : x + 'x').join('\n');
            const c = await ejecutar(solucion, otras, false);
            if (!c.error) {
                const enOtra = new Set(palabras(limpiar(c.salida)));
                clave = new Set(palabras(fijas.join(' ')).filter(w => !enOtra.has(w)));
            }
        }
        const faltan = [];
        fijas.forEach(l => {
            if (igualEst.has(l.trim())) return;
            // Los números que solo repiten una entrada no se exigen
            const nums = numerosDe(l).filter(n => !deEntrada.some(v => Math.abs(v - n.v) < 1e-9));
            const p = palabras(l.replace(NUM, ' '));
            // «Etiqueta: valor». El valor (lo que hay después de los últimos dos puntos) es el resultado: se exige.
            const k = l.lastIndexOf(':');
            const valor = k > 0 ? palabras(l.slice(k + 1).replace(NUM, ' ')) : [];
            const etiqueta = k > 0 ? palabras(l.slice(0, k).replace(NUM, ' ')) : p;
            let mal = valor.some(w => !palabrasEst.has(w)) || p.some(w => clave.has(w) && !palabrasEst.has(w));
            if (nums.length) {
                const tiene = i => i >= 0 && i < lineasEst.length && nums.every(n => coincide(n, numerosDe(lineasEst[i])));
                // Los números deben estar junto a su etiqueta: se buscan las líneas que más palabras comparten con ella
                const comunes = lineasEst.map(le => { const w = new Set(palabras(le)); return etiqueta.filter(x => w.has(x)).length; });
                const mejor = Math.max(0, ...comunes);
                if (mejor > 0) mal = mal || !comunes.some((c, i) => c === mejor && (tiene(i) || tiene(i + 1)));
                else mal = mal || !nums.every(n => coincide(n, numsEst));
            } else if (p.length && !valor.length) {
                mal = mal || p.filter(w => palabrasEst.has(w)).length / p.length < 0.5;
            }
            if (mal) faltan.push(l.trim());
        });
        // Si parte de la salida es aleatoria, se piden al menos tantas líneas como la solución
        const lineasSol = la.filter(l => l.trim()).length;
        if (fijas.length < lineasSol && salidaEst.split('\n').filter(l => l.trim()).length < lineasSol) faltan.push(`${lineasSol} líneas de resultados`);
        if ((a.figuras || []).length && !(r.figuras || []).length) faltan.push('un gráfico');
        return faltan.length
            ? { estado: 'falla', faltan, referencia: limpiar(a.salida).replace(/[ \t]+\n/g, '\n'), resultado: r }
            : { estado: 'ok', resultado: r };
    }

    function entradasSugeridas(solucion) {
        const n = (solucion.match(/readline\s*\(/g) || []).length;
        return [3, 4, 5, 6, 7, 8].slice(0, n).join('\n');
    }

    return { cargar, ejecutar, pintar, explicar, crearEditor, verificar, entradasSugeridas, esc, subirArchivo, archivos, leerArchivo, codigoLectura, get listo() { return !!webR; } };
})();
