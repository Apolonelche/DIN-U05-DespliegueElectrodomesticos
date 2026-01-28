import './assets/index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Router from './components/Router.jsx'
import { UserProvider } from './context/UserContext.jsx'

/**
 * App
 *
 * Componente raíz de la aplicación.
 * Configura la estructura general con Header, Footer y
 * rutas usando React Router.
 */
export default function App() {
  return (
    

    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> 
    <UserProvider>
      <Header/>
      <Router/>
      <Footer/>
    </UserProvider>
    </div>
  )
}
