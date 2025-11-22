import electrodomesticos from "../data/electrodomesticos.js"
import List from "../components/List.jsx"
import { Link } from "react-router-dom"

/**
 * Electrodomesticos
 *
 * Página que muestra un listado de electrodomésticos.
 * Cada elemento se renderiza usando el componente `List` y
 * se envuelve en un `Link` hacia su detalle.
 */
export default function Electrodomesticos() {
    return (
        <>
            <p className="contenedor__h2">Listado de Electrodomésticos</p>
            <div className="listado">
                {electrodomesticos.map((electrodomestico, index) => (
                    <Link to={`/details/${index}`} key={index}>
                      <List
                          key={index}
                          nombre={electrodomestico.nombre}     // Título del card
                          foto={electrodomestico.imagen}     // Imagen del card
                      >
                          {electrodomestico.descripcion} 
                      </List>
                    </Link>
                ))}
            </div>
        </>
    )
}
