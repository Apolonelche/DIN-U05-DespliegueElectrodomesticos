import { Outlet } from "react-router-dom";
import { useId } from "react";

/**
 * Componente de layout general.
 * Envuelve el contenido principal de cada página y, opcionalmente,
 * muestra un <h1> con el título recibido por props.
 */
function Contenedor({ titulo }) {

  const headingId = useId(); 
  // ID único para asociar el <h1> al atributo aria-labelledby del <main>
  // (mejora de accesibilidad para lectores de pantalla)

  return (
    <main
      className="contenedor"
      tabIndex="-1"              // permite enfocar el main al usar "saltar al contenido"
      role="main"               // semántica explícita para accesibilidad
      id="main-content"        // id para enlazar desde "saltar al contenido"
      aria-labelledby={titulo ? headingId : undefined}
    >
      <section className="contenedor__section">
        
        {/* Renderiza el título solo si se recibe por props */}
        {titulo && <h1 id={headingId}>{titulo}</h1>}

        {/* Renderiza el contenido de la ruta hija */}
        <Outlet />
      </section>
    </main>
  );
}

export default Contenedor;
