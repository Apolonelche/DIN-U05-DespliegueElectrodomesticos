import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ShowDetails from '../pages/showDetails'; 
import '../assets/index.css';

// El stories lo he tenido que hacer un poco diferente porque el componente ShowDetails
// depende de la ruta para coger el :indice y mostrar el electrodoméstico.
// Por eso uso MemoryRouter para simular la navegación dentro de Storybook.
export default {
  title: 'Páginas/ShowDetails',
  component: ShowDetails
};

const Template = (args) => {
  // Se coge el índice que se va a mostrar en Storybook o el 0 por defecto
  const idSeleccionado = args.indice || 0;

  return (
    // Simulamos la navegación.
    <MemoryRouter initialEntries={[`/details/${idSeleccionado}`]}>
      <Routes>
        {/* 3. La ruta "/details/:indice" coge el número y se lo pasa al useParams del componente */}
        <Route path="/details/:indice" element={<ShowDetails />} />
      </Routes>
    </MemoryRouter>
  );
};

// Historia por defecto (Carga el Frigorífico Samsung, que es el índice 0)
export const FrigorificoSamsung = Template.bind({});
FrigorificoSamsung.args = {
  indice: 0,
};

// Historia alternativa (Carga otro indice del array por ejemplo el 6 que es Lavadora Hisense)
export const LavadoraHisense = Template.bind({});
LavadoraHisense.args = {
  indice: 6,
};