/**
 * List
 *
 * Componente reutilizable para mostrar cualquier tipo de tarjeta o elemento.
 * 
 * Props:
 *  - imagen (opcional): URL de la imagen a mostrar.
 *  - titulo: Título principal del elemento.
 *  - descripcion (opcional): Contenido adicional o descripción.
 *  - children (opcional): Contenido extra que se puede mostrar dentro de la tarjeta.
 */
function List({ foto, nombre, children }) {
  return (
    <article 
      className="card"
      aria-label={`Información sobre ${nombre}`}
    >
      <figure>
        <img 
          src={foto} 
          alt={`Póster de la película ${nombre}`} 
        />

        {/* Descripción oculta solo si existe */}
        {children && (
          <figcaption className="sr-only">
            {children}
          </figcaption>
        )}
      </figure>

      <header>
        <h2>{nombre}</h2>
      </header>

      {children && (
        <p className="texto">{children}</p>
      )}
    </article>
  );
}

export default List;