import { useNavigate, useParams } from "react-router-dom";
import electrodomesticos from "../data/electrodomesticos.js";
import { useGetElectrodomesticoById } from "../hooks/useGetElectrodomesticosById.js";
import DeleteButton from "../components/DeleteButton.jsx";

/**
 * ShowDetails
 *
 * Página de detalle de un electrodoméstico específico.
 * Muestra imagen, título, descripción y un botón para volver.
 */
export default function ShowDetails() {
    const navigate = useNavigate();
    const { indice } = useParams(); // Obtenemos el índice de la URL

    const { electrodomestico, loading, error } = useGetElectrodomesticoById(indice);

    // Mientras carga o si hay error
    if (loading) return <p className="texto">Cargando electrodoméstico...</p>;
    if (error) return <p className="texto">{error}</p>;
    if (!electrodomestico) return <p className="texto">No se encontró el electrodoméstico</p>;

    // Ahora que ya tenemos datos, podemos desestructurar
    const { nombre, imagen: foto, descripcion } = electrodomestico;

    return (
        <div className="card_layout">
            {loading && (
                <p className="texto">Cargando electrodoméstico...</p>
            )}
            {error && (
                <p className="texto">{error}</p>
            )}
    
            <img
                src={foto}
                className="card_img"
                alt={`Imagen del producto ${nombre}`}
            />

            <div className="info_card">
                <h2 className="card_title">{nombre}</h2>
                <p className="card_desc">{descripcion}</p>
                <div >
                    <button className="volver" onClick={() => navigate(-1)}>
                        Volver
                    </button>

                    <DeleteButton id={indice} />
                </div>
            </div>
        </div>
    )
}
