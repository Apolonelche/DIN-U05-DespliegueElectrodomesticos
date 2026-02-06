import { useDeleteElectrodomesticoById } from '../hooks/useDeleteElectrodomesticoById';
import { useNavigate } from 'react-router-dom';

export default function DeleteButton({ id }) {
    const navigate = useNavigate();
    const { deleteElectrodomestico } = useDeleteElectrodomesticoById(id);

  return (
    <button onClick={(e) => {
      e.preventDefault(); // Evita que el clic en el botón afecte al enlace padre
      e.stopPropagation(); // Detiene la propagación del evento para evitar que el enlace padre lo capture
        deleteElectrodomestico();
        alert(`Electrodoméstico eliminado.`);
        navigate('/electrodomesticos');
    }
    } className="eliminar">
          Eliminar
    </button>
  );
}