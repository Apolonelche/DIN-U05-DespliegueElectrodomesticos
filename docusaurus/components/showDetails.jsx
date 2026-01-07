import { useHistory, useParams } from "react-router-dom";
import electrodomesticos from "./electrodomesticos.js";
import "./style.css";

/**
 * ShowDetails
 *
 * Página de detalle de un electrodoméstico específico.
 * Muestra imagen, título, descripción y un botón para volver.
 */
export default function ShowDetails() {
    const history = useHistory();
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
                <button className="volver" onClick={() => history.goBack()}>
                    Volver
                </button>
            </div>
        </div>
    )
}
