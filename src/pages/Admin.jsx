/**
 * Admin
 *
 * Página de administración de la aplicación.
 * Solo se puede acceder a esta página si el usuario está autenticado (cambiando el estado de autenticación en App.jsx).
 * Muestra un título y un mensaje de bienvenida.
 */
export default function Admin() {
    return (
        <>
            <h2 className="contenedor__h2">Área de Administración</h2>
            <p className="texto">Bienvenido al área de administración de la aplicación</p>
        </>
    );
}
