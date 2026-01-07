import { useState } from "react";

/**
 * Componente que muestra un formulario para añadir un electrodoméstico.
 *
 * Permite introducir nombre, marca, precio, descripción e imagen mediante URL.
 * Incluye validaciones en el cliente y muestra mensajes de error por campo.
 * Al enviar el formulario, si todo es válido, muestra los datos en consola.
 */
export default function AnadirElectrodomesticoC() {
    const [formData, setFormData] = useState({
        nombre: "",
        marca: "",
        precio: "",
        descripcion: "",
        imagen: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [id]: ""
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.nombre) {
            newErrors.nombre = "El nombre es obligatorio.";
        } else if (formData.nombre.length < 5) {
            newErrors.nombre = "Debe tener al menos 5 caracteres.";
        }

        if (!formData.marca) {
            newErrors.marca = "Debes seleccionar una marca.";
        }

        if (!formData.precio) {
            newErrors.precio = "El precio es obligatorio.";
        } else if (isNaN(formData.precio) || formData.precio <= 0) {
            newErrors.precio = "Introduce un precio válido.";
        }

        if (!formData.descripcion) {
            newErrors.descripcion = "La descripción es obligatoria.";
        }

        if (!formData.imagen) {
            newErrors.imagen = "La imagen es obligatoria.";
        } else if (!formData.imagen.match("^http")) {
            newErrors.imagen = "Debe ser una URL válida.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        console.log("Datos enviados:", formData);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-grey-100 p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">

                {/******************************  Nombre *********************************/}
                <label htmlFor="nombre">Nombre del electrodoméstico:</label>
                <input
                    id="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                />
                {errors.nombre && (
                    <p>{errors.nombre}</p>
                )}

                {/******************************  Marca *********************************/}
                <label htmlFor="marca">Marca:</label>
                <select
                    id="marca"
                    value={formData.marca}
                    onChange={handleChange}
                >
                    <option value="" disabled>Selecciona una marca</option>
                    
                    <option value="LG">LG</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Hisense">Hisense</option>
                    <option value="Balay">Balay</option>
                    <option value="Bosch">Bosch</option>
                </select>
                {errors.marca && (
                    <p>{errors.marca}</p>
                )}

                {/******************************  Precio *********************************/}
                <label htmlFor="precio">Precio (€):</label>
                <input
                    id="precio"
                    type="number"
                    value={formData.precio}
                    onChange={handleChange}
                />
                {errors.precio && (
                    <p>{errors.precio}</p>
                )}

                {/******************************  Descripcion *********************************/}
                <label htmlFor="descripcion">Descripción:</label>
                <textarea
                    id="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                />
                {errors.descripcion && (
                    <p>{errors.descripcion}</p>
                )}

                {/******************************  Imagen *********************************/}
                <label htmlFor="imagen">Imagen (URL):</label>
                <input
                    id="imagen"
                    type="url"
                    value={formData.imagen}
                    onChange={handleChange}
                />
                {errors.imagen && (
                    <p >{errors.imagen}</p>
                )}

                <button
                    type="submit"
                    className="boton"
                >
                    Añadir Electrodoméstico
                </button>
            </form>
        </div>
    );
}

