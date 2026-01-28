import { useDeleteElectrodomesticoById } from '../hooks/useDeleteElectrodomesticoById';
import { useNavigate } from 'react-router-dom';

export default function DeleteButton({ id }) {
    const navigate = useNavigate();
    const { deleteElectrodomestico } = useDeleteElectrodomesticoById(id);

  return (
    <button onClick={() => {
        deleteElectrodomestico();
        alert(`Electrodoméstico eliminado.`);
        navigate('/electrodomesticos');
    }
    } className="eliminar">
          Eliminar
    </button>
  );
}