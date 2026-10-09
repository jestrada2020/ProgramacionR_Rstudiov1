/**
 * Sistema de Autenticación - Academia Bio-R
 * Versión 2 (octubre de 2026), igual al de la Academia Bio-Python.
 * Solo ingresan los estudiantes matriculados (lista _PRESET_USERS) y los que cree el administrador.
 * Usa claves propias (bior_…) para no mezclarse con la Academia Bio-Python, que vive en el mismo sitio
 * (jestrada2020.github.io) y por eso comparte el almacenamiento del navegador.
 *
 * Admin por defecto:
 *   ID: admin
 *   Contraseña: admin123
 */

const _DB_KEY      = 'bior_db_v2';
const _SESSION_KEY = 'bior_session';
const _VERSION_KEY = 'bior_version';
const _CURRENT_VER = '2';

// ============================================================
// USUARIOS PRE-CARGADOS
// Agrega aquí los estudiantes para que funcionen en CUALQUIER
// navegador sin necesidad de crearlos manualmente.
// Usa el botón "Exportar Usuarios" del panel admin para
// generar este bloque automáticamente.
// ============================================================
const _PRESET_USERS = [
    { id: 'todos', cc: '1111111', nombre: 'todos', password: 'todos321', rol: 'estudiante' },
    { id: 'pangui', cc: '222222', nombre: 'Juan Pablo Lopera Velez', password: 'pangua123', rol: 'estudiante' },
    { id: 'jestrada', cc: '71668550', nombre: 'John Jairo Estrada Alvarez', password: 'graciela123', rol: 'estudiante' },
    { id: '111111', cc: '111111', nombre: 'todos321', password: 'todos321', rol: 'estudiante' },
    { id: '1017926430', cc: '1017926430', nombre: 'Andrea Hincapie Gonzalez', password: '1017926430', rol: 'estudiante' },
    { id: '1034988185', cc: '1034988185', nombre: 'Sofia Cuervo Henao', password: '1034988185', rol: 'estudiante' },
    { id: '1025760349', cc: '1025760349', nombre: 'Brahian Marín Giraldo', password: '1025760349', rol: 'estudiante' },
    { id: '1037663395', cc: '1037663395', nombre: 'Luisa Fernanda Muñoz Calle', password: '1037663395', rol: 'estudiante' },
    { id: '1034987447', cc: '1034987447', nombre: 'Andrés Ramírez Saumet', password: '1034987447', rol: 'estudiante' },
    { id: '1020108089', cc: '1020108089', nombre: 'María José Restrepo T.', password: '1020108089', rol: 'estudiante' },
];

// Codifica contraseña de forma segura para cualquier carácter (ñ, á, é, etc.)
function _encode(pwd) {
    return encodeURIComponent(pwd);
}

// Limpia datos de versiones anteriores automáticamente
(function _migrate() {
    if (localStorage.getItem(_VERSION_KEY) !== _CURRENT_VER) {
        ['bior_db_v1', _DB_KEY]
            .forEach(k => localStorage.removeItem(k));
        localStorage.setItem(_VERSION_KEY, _CURRENT_VER);
    }
})();

const AUTH = {

    init() {
        let users = this.getUsers();
        let changed = false;

        // Sembrar admin si no existe
        if (!users.find(u => u.id === 'admin')) {
            users.unshift({
                id: 'admin',
                cc: '0000000000',
                nombre: 'Administrador',
                password: _encode('admin123'),
                rol: 'admin',
                activo: true,
                fechaCreacion: new Date().toISOString()
            });
            changed = true;
        }

        // Sembrar usuarios pre-cargados (_PRESET_USERS) si no existen aún
        _PRESET_USERS.forEach(u => {
            const idNorm = u.id.trim().toLowerCase();
            if (!users.find(x => x.id === idNorm || x.cc === u.cc.trim())) {
                users.push({
                    id: idNorm,
                    cc: u.cc.trim(),
                    nombre: u.nombre.trim(),
                    password: _encode(u.password),
                    rol: u.rol || 'estudiante',
                    activo: true,
                    fechaCreacion: new Date().toISOString()
                });
                changed = true;
            }
        });

        if (changed) localStorage.setItem(_DB_KEY, JSON.stringify(users));
    },

    // Recuperar acceso desde consola: AUTH.resetAdmin()
    resetAdmin() {
        const users = this.getUsers().filter(u => u.id !== 'admin');
        users.unshift({
            id: 'admin',
            cc: '0000000000',
            nombre: 'Administrador',
            password: _encode('admin123'),
            rol: 'admin',
            activo: true,
            fechaCreacion: new Date().toISOString()
        });
        localStorage.setItem(_DB_KEY, JSON.stringify(users));
        return 'Admin reseteado. ID: admin | Contraseña: admin123';
    },

    getUsers() {
        try {
            return JSON.parse(localStorage.getItem(_DB_KEY) || '[]');
        } catch (e) {
            return [];
        }
    },

    saveUsers(users) {
        localStorage.setItem(_DB_KEY, JSON.stringify(users));
    },

    login(identificador, password) {
        try {
            const users = this.getUsers();
            const idLower = identificador.trim().toLowerCase();
            const hash    = _encode(password);

            const user = users.find(u =>
                (u.id.toLowerCase() === idLower || u.cc === identificador.trim()) &&
                u.password === hash &&
                u.activo
            );

            if (user) {
                const session = {
                    id: user.id, cc: user.cc,
                    nombre: user.nombre, rol: user.rol,
                    loginTime: new Date().toISOString()
                };
                sessionStorage.setItem(_SESSION_KEY, JSON.stringify(session));
                return { success: true, user: session };
            }
            return { success: false, message: 'ID/C.C. o contraseña incorrectos.' };
        } catch (e) {
            return { success: false, message: 'Error al verificar credenciales. Intenta de nuevo.' };
        }
    },

    logout() {
        sessionStorage.removeItem(_SESSION_KEY);
        window.location.href = 'login.html';
    },

    getSession() {
        try {
            const data = sessionStorage.getItem(_SESSION_KEY);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            return null;
        }
    },

    requireAuth() {
        const session = this.getSession();
        if (!session) { window.location.href = 'login.html'; return null; }
        return session;
    },

    requireAdmin() {
        const session = this.requireAuth();
        if (session && session.rol !== 'admin') {
            window.location.href = 'app.html'; return null;
        }
        return session;
    },

    addUser({ id, cc, nombre, password, rol = 'estudiante' }) {
        try {
            const users  = this.getUsers();
            const idNorm = id.trim().toLowerCase();

            if (users.find(u => u.id === idNorm))
                return { success: false, message: 'El ID de usuario ya existe.' };
            if (users.find(u => u.cc === cc.trim()))
                return { success: false, message: 'La C.C. ya está registrada.' };

            users.push({
                id: idNorm,
                cc: cc.trim(),
                nombre: nombre.trim(),
                password: _encode(password),
                rol,
                activo: true,
                fechaCreacion: new Date().toISOString()
            });
            this.saveUsers(users);
            return { success: true };
        } catch (e) {
            return { success: false, message: 'Error al guardar el usuario. Verifica los datos.' };
        }
    },

    changePassword(idOrCC, newPassword) {
        try {
            const users = this.getUsers();
            const idx   = users.findIndex(u =>
                u.id === idOrCC.toLowerCase() || u.cc === idOrCC
            );
            if (idx === -1) return { success: false, message: 'Usuario no encontrado.' };
            users[idx].password = _encode(newPassword);
            this.saveUsers(users);
            return { success: true };
        } catch (e) {
            return { success: false, message: 'Error al cambiar la contraseña.' };
        }
    },

    toggleUser(idOrCC) {
        const users = this.getUsers();
        const idx   = users.findIndex(u =>
            u.id === idOrCC.toLowerCase() || u.cc === idOrCC
        );
        if (idx === -1) return { success: false, message: 'Usuario no encontrado.' };
        users[idx].activo = !users[idx].activo;
        this.saveUsers(users);
        return { success: true, activo: users[idx].activo };
    },

    deleteUser(idOrCC) {
        let users    = this.getUsers();
        const before = users.length;
        const lower  = idOrCC.toLowerCase();
        users = users.filter(u => u.id !== lower && u.cc !== idOrCC);
        if (users.length === before)
            return { success: false, message: 'Usuario no encontrado.' };
        this.saveUsers(users);
        return { success: true };
    }
};

AUTH.init();
