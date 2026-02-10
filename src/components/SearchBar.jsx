import { Mic } from "lucide-react";
import useVoiceRecognition from "../hooks/useVoiceRecognition.js";
import { useRef } from "react";

/**
 * Componente de barra de búsqueda controlada.
 * Permite al usuario introducir un término de búsqueda.
 * 
 * Props:
 * - searchTerm: Valor actual de la búsqueda.
 * - onSearchChange: Función para manejar cambios en la búsqueda.
 * - placeholder: Texto de marcador de posición (por defecto "Buscar...").
 */
export default function SearchBar({ searchTerm, onSearchChange, placeholder = "Buscar..." }) {
  const voice = useVoiceRecognition((text) => onSearchChange(text));
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // Para detectar deslizamiento
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchEndX.current - touchStartX.current;
    if (distance > 50 && voice.isSupported) { // deslizado > 50px
      voice.startListening();
    }
  };

  return (
    <div className="mb-8 w-full max-w-lg mx-auto relative">
      <label htmlFor="search-input" className="sr-only">
        {placeholder}
      </label>
      <input
        id="search-input"
        type="text"
        placeholder={isMobile ? "Desliza → para buscar por voz" : placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label={placeholder}
        className="search-bar"
        {...(isMobile && {
          onTouchStart: handleTouchStart,
          onTouchMove: handleTouchMove,
          onTouchEnd: handleTouchEnd,
        })}
      />

      {!isMobile && voice.isSupported && (
        <button
          onClick={voice.startListening}
          className={`absolute right-3 top-1/2 -translate-y-1/2 transition
            ${voice.isListening
              ? "text-red-500 animate-pulse"
              : "text-gray-400 hover:text-blue-600"
            }`}
          title="Buscar por voz"
        >
          <Mic size={20} />
        </button>
      )}
    </div>
  );
}