//import electrodomesticos from "../data/electrodomesticos.js"
import List from "../components/List.jsx"
import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar.jsx"
import { useState, useMemo } from "react";
import { useGetElectrodomesticos } from "../hooks/useGetElectrodomesticos.js";

/**
 * Electrodomesticos
 *
 * Página que muestra un listado de electrodomésticos.
 * Cada elemento se renderiza usando el componente `List` y
 * se envuelve en un `Link` hacia su detalle.
 */
export default function Electrodomesticos() {
    const { electrodomesticos, loadElectrodomesticos, loading, error } = useGetElectrodomesticos();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredElectrodomesticos = useMemo(() => {
        if (!electrodomesticos) return [];
        if (!searchTerm) return electrodomesticos;

        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return electrodomesticos.filter((electrodomestico) =>
            electrodomestico.nombre.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [searchTerm, electrodomesticos]);

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
                        <Link to={`/details/${electrodomestico._id}`} key={index}>
                            <List
                                id={electrodomestico._id}     // ID para el botón de eliminar
                                nombre={electrodomestico.nombre}     // Título del card
                                foto={electrodomestico.imagen}     // Imagen del card
                            >
                                {electrodomestico.descripcion}
                            </List>
                        </Link>
                    ))
                ) : loading ? (
                    <p className="texto">Cargando electrodomésticos...</p>
                ) : error ? (
                    <p className="texto">{error}</p>
                ) : (
                    <p className="texto">
                        No se encontraron electrodomésticos con el término `{searchTerm}`.
                    </p>
                )}
            </div>
        </>
    )
}
