/**
 * Academia Bio-R · Configuración del registro en Google Forms
 *
 * Mientras las direcciones estén vacías (url: ""), la academia NO envía nada.
 * Para activarlo: ejecute docs/crear_formularios.gs en https://script.google.com con la cuenta del profesor
 * (crea «Academia Bio-R · Ingreso y salida», «Academia Bio-R · Notas y actividades» y la hoja de respuestas)
 * y reemplace este bloque por el REGISTRO_CONFIG que el script imprime en el registro de ejecución.
 * No reutilice los formularios de la Academia Bio-Python: mezclaría los registros de los dos cursos.
 */
const REGISTRO_CONFIG = {
  "ingreso": { "url": "", "campos": {} },
  "notas": { "url": "", "campos": {} }
};
