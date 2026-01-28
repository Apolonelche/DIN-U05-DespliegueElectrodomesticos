import { getElectrodomesticos as fetchElectrodomesticos } from "../services/electrodomesticosService";
import { useState, useEffect } from "react";

export const useGetElectrodomesticos = () => {
  const [electrodomesticos, setElectrodomesticos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadElectrodomesticos = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetchElectrodomesticos();

      if (Array.isArray(response)) {
        setElectrodomesticos(response);
      } else if (Array.isArray(response?.electrodomesticos)) {
        setElectrodomesticos(response.electrodomesticos);
      } else if (Array.isArray(response?.data)) {
        setElectrodomesticos(response.data);
      } else {
        setElectrodomesticos([]);
      }

    } catch (e) {
      setError("No se pudo cargar la lista de electrodomésticos");
      setElectrodomesticos([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Llamada automática al montar
  useEffect(() => {
    loadElectrodomesticos();
  }, []);

  return { electrodomesticos, loadElectrodomesticos, loading, error };
};
