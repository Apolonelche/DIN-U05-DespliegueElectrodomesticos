import { NavLink } from "react-router-dom";
import { useState, useId } from "react";

/**
 * Nav
 *
 * Componente de barra de navegación principal.
 * Incluye:
 *  - Logo del sitio
 *  - Menú de enlaces
 *  - Botón de hamburguesa para pantallas pequeñas
 *
 * Se gestiona el estado "open" para mostrar/ocultar la lista de enlaces
 * en dispositivos móviles.
 */
export default function Nav() {
    const [open, setOpen] = useState(false); // Estado del menú en móvil
    const menuId = useId(); // ID único para aria-controls y accesibilidad

    return (
        <nav className="nav" role="navigation" aria-label="Menú principal">
            {/* Logo del sitio */}
            <p className="nav__logo">Davia Domestics</p>

            {/* Botón hamburguesa accesible */}
            <button
                className="nav__menu"
                onClick={() => setOpen(!open)}
                aria-expanded={open}           // Indica si el menú está abierto
                aria-controls={menuId}         // Asocia botón con el contenedor del menú
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
                ☰
            </button>

            {/* Lista de enlaces */}
            <div
                id={menuId}
                className={`nav__list ${open ? "block" : "hidden"}`} // Mostrar u ocultar según estado
            >
                <NavLink
                    to="/"
                    className="nav__link"
                    onClick={() => setOpen(false)} // Cierra menú al hacer click
                >
                    Inicio
                </NavLink>

                <NavLink
                    to="/electrodomesticos"
                    className="nav__link"
                    onClick={() => setOpen(false)}
                >
                    Electrodomésticos
                </NavLink>

                <NavLink
                    to="/admin"
                    className="nav__link"
                    onClick={() => setOpen(false)}
                >
                    Admin
                </NavLink>
            </div>
        </nav>
    );
}
