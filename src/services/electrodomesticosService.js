import axios from "axios";


const API_URL = `${import.meta.env.VITE_API_URL}/electrodomesticos`;



export const getElectrodomesticos = async () => {
    try {
        const res = await axios.get(API_URL);
        return res.data ?? [];
    } catch (error) {
        console.error("Error al obtener las electrodomésticos:", error);
        throw new Error("No se pudo cargar la lista de electrodomésticos");
    }
};

export const createElectrodomestico = async (data) => {
    try {
        const res = await axios.post(API_URL, data, {
            headers: { "Content-Type": "application/json" }
        });
        return res.data.data ?? res.data;
    } catch (error) {
        console.error("Error al crear el electrodoméstico:", error.response?.data || error);
        throw new Error(error.response?.data?.error || "No se pudo crear el electrodoméstico");
    }
};


export const getElectrodomesticosById = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/${id}`);

        return res.data.data ?? res.data;
    } catch (error) {
        console.error("Error al obtener el electrodoméstico:", error);
        throw new Error("No se pudo cargar el electrodoméstico");
    }
};

export const deleteElectrodomesticosById = async (id) => {
    try{
        const res = await axios.delete(`${API_URL}/${id}`)

        return res.data.data ?? res.data;
    }catch (error) {
        console.log("Error al borrar el electrodomestico: ", error);
        throw new Error("No se pudo borrar el electrodoméstico");
    }
}