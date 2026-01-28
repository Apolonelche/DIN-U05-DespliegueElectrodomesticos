import { useState } from 'react';
import { createElectrodomestico } from '../services/electrodomesticosService';

export const useCreateElectrodomestico = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addElectrodomestico = async (data) => {
        try {
            setLoading(true);
            setError(null);
            await createElectrodomestico(data);
            return true;
        } catch {
            setError("No se pudo crear el electrodoméstico");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { addElectrodomestico, loading, error };
};