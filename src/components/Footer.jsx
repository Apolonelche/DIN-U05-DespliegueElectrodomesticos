/**
 * Footer
 *
 * Componente simple que renderiza el pie de página del sitio.
 * Contiene información de autor y derechos de autor.
 * No recibe props.
 */
export default function Footer() {
  return (
    <footer aria-label="Cabecera principal del sitio">
      {/* Nombre del autor */}
      <p >Martin Davia Mora</p>

      {/* Derechos de autor */}
      <p>© 2025 Mis Electrodomésticos. Todos los derechos reservados.</p>
    </footer>
  );
}
