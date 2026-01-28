import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { Navigate } from "react-router-dom";

import Contenedor from './Contenedor.jsx'
import Home from '../pages/Home.jsx'
import Admin from '../pages/Admin.jsx'
import Electrodomesticos from '../pages/Electrodomesticos.jsx'
import ShowDetails from '../pages/showDetails.jsx'
import Login from "../pages/Login.jsx";


export default function Router() {
    // Componente para rutas protegidas
const PrivateRoute = ({ children }) => {
  const { userLogged } = useContext(UserContext);
  if (!userLogged) return <Navigate to="/login" replace />;
  return children;
};

    return (
        <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route element={<Contenedor />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/Inicio" element={<Home/>}/>
            <Route path="/electrodomesticos" element={<Electrodomesticos/>}/>
            <Route path="/admin" element={ <PrivateRoute><Admin/></PrivateRoute>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/details/:indice" element={<ShowDetails/>} />
          </Route>

          <Route path="*" element={<Contenedor titulo="Página no existe"/>}/>
        </Routes>
      </main>
    );
}