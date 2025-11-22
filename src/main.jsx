import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

/**
 * Punto de entrada de la aplicación
 * Renderiza la app dentro de StrictMode y BrowserRouter
 * Incluye un enlace "Saltar al contenido principal" para accesibilidad
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Enlace para accesibilidad: permite saltar directamente al main */}
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-700 text-white px-4 py-2 rounded z-50"
    >
      Saltar al contenido principal
    </a>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)