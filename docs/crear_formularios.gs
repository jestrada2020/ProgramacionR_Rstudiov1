/**
 * Academia Bio-R · Crea los formularios de registro en tu Google Drive
 *
 * Cómo usarlo (una sola vez):
 *   1. Entra a https://script.google.com con tu cuenta de Google y pulsa «Nuevo proyecto».
 *   2. Borra el contenido, pega TODO este archivo y guarda (Ctrl+S).
 *   3. Arriba elige la función «crearFormularios» y pulsa «Ejecutar». Autoriza los permisos que pide Google
 *      (crear formularios y hojas de cálculo en tu Drive).
 *   4. Abre «Registro de ejecución»: verás los enlaces creados y un bloque «REGISTRO_CONFIG = {...}».
 *      Copia ese bloque en el archivo js/registro-config.js de la academia (reemplazando el que hay).
 *
 * Crea en tu Drive:
 *   - Formulario «Academia Bio-R · Ingreso y salida»
 *   - Formulario «Academia Bio-R · Notas y actividades»
 *   - Hoja de cálculo «Academia Bio-R · Registros» con una pestaña de respuestas por formulario
 */
function crearFormularios() {
  var hoja = SpreadsheetApp.create('Academia Bio-R · Registros');

  // ---------- Formulario 1: ingreso y salida ----------
  var f1 = FormApp.create('Academia Bio-R · Ingreso y salida');
  f1.setDescription('Registro automático de la hora de ingreso, la hora de salida y el tiempo de permanencia de cada estudiante ' +
                    'en la plataforma Academia Bio-R. La plataforma lo llena sola; también se puede llenar a mano.');
  f1.setCollectEmail(false);
  f1.setAllowResponseEdits(false);
  var c1 = {
    usuario:   f1.addTextItem().setTitle('Usuario (ID o cédula)').setRequired(true),
    nombre:    f1.addTextItem().setTitle('Nombre del estudiante').setRequired(true),
    tipo:      f1.addMultipleChoiceItem().setTitle('Tipo de registro').setChoiceValues(['Ingreso', 'Salida']).setRequired(true),
    ingreso:   f1.addTextItem().setTitle('Fecha y hora de ingreso').setHelpText('AAAA-MM-DD HH:MM:SS (hora del computador del estudiante)'),
    salida:    f1.addTextItem().setTitle('Fecha y hora de salida').setHelpText('AAAA-MM-DD HH:MM:SS. Vacío en los registros de ingreso.'),
    duracion:  f1.addTextItem().setTitle('Duración en la plataforma (minutos)'),
    sesion:    f1.addTextItem().setTitle('Identificador de la sesión').setHelpText('Agrupa el ingreso y la salida de una misma sesión.'),
    origen:    f1.addTextItem().setTitle('Origen').setHelpText('Automático (plataforma) o Manual')
  };
  f1.setDestination(FormApp.DestinationType.SPREADSHEET, hoja.getId());

  // ---------- Formulario 2: notas y actividades ----------
  var f2 = FormApp.create('Academia Bio-R · Notas y actividades');
  f2.setDescription('Registro automático de las actividades cumplidas en la plataforma Academia Bio-R: lecciones, ' +
                    'retos, quizzes (con su nota) y módulos completados.');
  f2.setCollectEmail(false);
  f2.setAllowResponseEdits(false);
  var c2 = {
    usuario:    f2.addTextItem().setTitle('Usuario (ID o cédula)').setRequired(true),
    nombre:     f2.addTextItem().setTitle('Nombre del estudiante').setRequired(true),
    modulo:     f2.addTextItem().setTitle('Módulo').setRequired(true),
    actividad:  f2.addMultipleChoiceItem().setTitle('Actividad')
                  .setChoiceValues(['Lección', 'Reto', 'Quiz', 'Módulo completado']).setRequired(true),
    detalle:    f2.addTextItem().setTitle('Detalle').setHelpText('Por ejemplo, el nombre del reto.'),
    resultado:  f2.addTextItem().setTitle('Resultado o nota').setHelpText('Quiz: porcentaje de aciertos. Reto: Superado o Superado con la solución.'),
    nota:       f2.addTextItem().setTitle('Nota (0 a 5)').setHelpText('Equivalencia del quiz en escala de 0 a 5.'),
    xp:         f2.addTextItem().setTitle('XP total del estudiante'),
    nivel:      f2.addTextItem().setTitle('Nivel'),
    avance:     f2.addTextItem().setTitle('Módulos completados del curso'),
    fecha:      f2.addTextItem().setTitle('Fecha y hora de la actividad'),
    origen:     f2.addTextItem().setTitle('Origen')
  };
  f2.setDestination(FormApp.DestinationType.SPREADSHEET, hoja.getId());

  // Nombres claros para las pestañas de respuestas (Google tarda unos segundos en vincularlas)
  renombrarPestanas_(hoja, f1, f2);

  var config = {
    ingreso: { url: urlRespuesta_(f1), campos: entradas_(f1, CLAVES_INGRESO_) },
    notas:   { url: urlRespuesta_(f2), campos: entradas_(f2, CLAVES_NOTAS_) }
  };

  Logger.log('Formulario de ingreso y salida (para editar): ' + f1.getEditUrl());
  Logger.log('Formulario de notas y actividades (para editar): ' + f2.getEditUrl());
  Logger.log('Hoja de respuestas: ' + hoja.getUrl());
  Logger.log('\nCopia este bloque completo en js/registro-config.js:\n\nconst REGISTRO_CONFIG = ' + JSON.stringify(config, null, 2) + ';\n');
}

// Dirección a la que la plataforma envía las respuestas
function urlRespuesta_(form) {
  return form.getPublishedUrl().replace(/\/viewform.*$/, '/formResponse');
}

// Claves de las preguntas, en el mismo orden en que se crean en cada formulario
var CLAVES_INGRESO_ = ['usuario', 'nombre', 'tipo', 'ingreso', 'salida', 'duracion', 'sesion', 'origen'];
var CLAVES_NOTAS_ = ['usuario', 'nombre', 'modulo', 'actividad', 'detalle', 'resultado', 'nota', 'xp', 'nivel', 'avance', 'fecha', 'origen'];

/**
 * Vuelve a generar el bloque REGISTRO_CONFIG para formularios que ya existen (sin crear nada nuevo).
 * Los identificadores son los que aparecen en la dirección de cada formulario: docs.google.com/forms/d/IDENTIFICADOR/edit
 */
function generarConfiguracion(idIngreso, idNotas) {
  var f1 = FormApp.openById(idIngreso), f2 = FormApp.openById(idNotas);
  var config = {
    ingreso: { url: urlRespuesta_(f1), campos: entradas_(f1, CLAVES_INGRESO_) },
    notas:   { url: urlRespuesta_(f2), campos: entradas_(f2, CLAVES_NOTAS_) }
  };
  Logger.log('\nCopia este bloque completo en js/registro-config.js:\n\nconst REGISTRO_CONFIG = ' + JSON.stringify(config, null, 2) + ';\n');
  return config;
}

// Averigua el número «entry.NNNN» de cada pregunta usando un enlace prellenado
function entradas_(form, claves) {
  var items = form.getItems();
  var respuesta = form.createResponse();
  items.forEach(function (item, i) {
    if (item.getType() === FormApp.ItemType.MULTIPLE_CHOICE) {
      var mc = item.asMultipleChoiceItem();
      respuesta.withItemResponse(mc.createResponse(mc.getChoices()[0].getValue()));
    } else {
      respuesta.withItemResponse(item.asTextItem().createResponse('MARCA' + i + 'X'));
    }
  });
  // En el enlace prellenado las preguntas aparecen en el mismo orden que en el formulario
  var ids = (respuesta.toPrefilledUrl().match(/entry\.\d+/g) || []).filter(function (v, i, a) { return a.indexOf(v) === i; });
  var resultado = {};
  claves.forEach(function (clave, i) { resultado[clave] = ids[i] || ''; });
  return resultado;
}

// Pone nombres claros a las pestañas de respuestas: «Ingreso y salida» y «Notas y actividades»
function renombrarPestanas_(hoja, f1, f2) {
  for (var intento = 0; intento < 5; intento++) {
    SpreadsheetApp.flush();
    var listas = 0;
    hoja.getSheets().forEach(function (s) {
      var url = s.getFormUrl();
      if (!url) return;
      var id = FormApp.openByUrl(url).getId();
      if (id === f1.getId()) { s.setName('Ingreso y salida'); listas++; }
      else if (id === f2.getId()) { s.setName('Notas y actividades'); listas++; }
    });
    if (listas === 2) break;
    Utilities.sleep(2000);
  }
  var vacia = hoja.getSheetByName('Hoja 1') || hoja.getSheetByName('Sheet1');
  if (vacia && vacia.getLastRow() === 0 && hoja.getSheets().length > 1) hoja.deleteSheet(vacia);
}
