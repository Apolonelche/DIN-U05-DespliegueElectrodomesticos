import {Route, Routes} from 'react-router-dom'
import './assets/index.css'
import Contenedor from './components/Contenedor.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Admin from './pages/Admin.jsx'
import ShowDetails from './pages/showDetails.jsx'
import Electrodomesticos from './pages/Electrodomesticos.jsx'
import Footer from './components/Footer.jsx'

/**
 * App
 *
 * Componente raíz de la aplicación.
 * Configura la estructura general con Header, Footer y
 * rutas usando React Router.
 */
export default function App() {
  const isAuthenticated = true; // Simulación de autenticación

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> 
      <Header/>

      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route element={<Contenedor />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/Inicio" element={<Home/>}/>
            <Route path="/electrodomesticos" element={<Electrodomesticos/>}/>
            <Route path="/admin" element={ isAuthenticated ? <Admin/> : <Home/>}/>
            <Route path="/details/:indice" element={<ShowDetails/>} />
          </Route>

          <Route path="*" element={<Contenedor titulo="Página no existe"/>}/>
        </Routes>
      </main>

      <Footer/>
    </div>
  )
}
