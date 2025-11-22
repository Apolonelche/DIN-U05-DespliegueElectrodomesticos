import { useNavigate, useParams } from "react-router-dom";
import electrodomesticos from "../data/electrodomesticos.js";

/**
 * ShowDetails
 *
 * Página de detalle de un electrodoméstico específico.
 * Muestra imagen, título, descripción y un botón para volver.
 */
export default function ShowDetails() {
    const navigate = useNavigate();
    const { indice } = useParams(); // Obtenemos el índice de la URL
    
    const elemento = electrodomesticos[indice];
    const nombre = elemento.nombre;
    const foto = elemento.imagen;
    const descripcion = elemento.descripcion;

    return (
        <div className="card_layout">
            <img 
                src={foto} 
                className="card_img" 
                alt={`Imagen del producto ${nombre}`} 
            />
            
            <div className="info_card">
                <h2 className="card_title">{nombre}</h2>
                <p className="card_desc">{descripcion}</p>
                <button className="volver" onClick={() => navigate(-1)}>
                    Volver
                </button>
            </div>
        </div>
    )
}
