import Nav from "./Nav";

/* Componente que representa la cabecera principal del sitio. */
export default function Header() {
  return (
    <header role="banner" aria-label="Cabecera principal del sitio">
      <Nav /> {/* Barra de navegación principal */}
    </header>
  );
}
