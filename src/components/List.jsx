import React from 'react';
import DeleteButton from './DeleteButton.jsx';
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
function List({ id, foto, nombre, children }) {
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

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>{nombre}</h2>
        <DeleteButton id={id}/>
      </header>

      {children && (
        <p className="texto">{children}</p>
      )}
    </article>
  );
}

export default List;