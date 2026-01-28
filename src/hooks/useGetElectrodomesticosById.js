import { useState, useEffect } from "react";
import { getElectrodomesticosById } from "../services/electrodomesticosService.js";

export const useGetElectrodomesticoById = (id) => {
  const [electrodomestico, setElectrodomestico] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadElectrodomestico = async () => {
    if (!id) return; // seguridad: si no hay ID no hacemos nada

    try {
      setLoading(true);
      setError(null);

      const response = await getElectrodomesticosById(id);

      // Normalización defensiva
      if (response) {
        setElectrodomestico(response);
      } else {
        setElectrodomestico(null);
      }

    } catch (e) {
      setError("No se pudo cargar el electrodoméstico");
      setElectrodomestico(null);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Cargar automáticamente al montar o al cambiar el ID
  useEffect(() => {
    loadElectrodomestico();
  }, [id]);

  return { electrodomestico, loadElectrodomestico, loading, error };
};
