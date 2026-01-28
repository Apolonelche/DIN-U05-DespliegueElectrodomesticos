import { deleteElectrodomesticosById } from "../services/electrodomesticosService"

export const useDeleteElectrodomesticoById = (id) => {
    const deleteElectrodomestico = async () => {
        if (!id) return; // seguridad: si no hay ID no hacemos nada
        try {
            await deleteElectrodomesticosById(id);
        } catch (e) {
            console.error("No se pudo eliminar el electrodoméstico");
        }
    };

    return { deleteElectrodomestico };
}