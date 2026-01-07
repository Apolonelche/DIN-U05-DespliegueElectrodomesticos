import electrodomesticos from "../data/electrodomesticos.js"
import List from "../components/List.jsx"
import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar.jsx"
import { useState, useMemo } from "react";

/**
 * Electrodomesticos
 *
 * Página que muestra un listado de electrodomésticos.
 * Cada elemento se renderiza usando el componente `List` y
 * se envuelve en un `Link` hacia su detalle.
 */
export default function Electrodomesticos() {
        const [ searchTerm, setSearchTerm ] = useState(null);
    
        const filteredElectrodomesticos = useMemo(() => {
            if (!searchTerm) return electrodomesticos;
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            return electrodomesticos.filter((electrodomestico) =>
                electrodomestico.nombre.toLowerCase().includes(lowerCaseSearchTerm) 
            );
        }, [searchTerm]);

    return (
        <>
            <p className="contenedor__h2">Listado de Electrodomésticos</p>

            <SearchBar 
                        searchTerm={searchTerm} 
                        onSearchChange={setSearchTerm} 
                        placeholder="Buscar electrodomésticos por nombre..." 
                    />

            <div className="listado">
                {filteredElectrodomesticos.length > 0 ? (
                filteredElectrodomesticos.map((electrodomestico, index) => (
                    <Link to={`/details/${index}`} key={index}>
                      <List
                          key={index}
                          nombre={electrodomestico.nombre}     // Título del card
                          foto={electrodomestico.imagen}     // Imagen del card
                      >
                          {electrodomestico.descripcion} 
                      </List>
                    </Link>
                ))
                ) : (
                    <p className="texto"> No se encontraron electrodomésticos con el término `{searchTerm}`.</p>
                )
            }
            </div>
        </>
    )
}
