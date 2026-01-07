/**
 * Componente de barra de búsqueda controlada.
 * Permite al usuario introducir un término de búsqueda.
 * 
 * Props:
 * - searchTerm: Valor actual de la búsqueda.
 * - onSearchChange: Función para manejar cambios en la búsqueda.
 * - placeholder: Texto de marcador de posición (por defecto "Buscar...").
 */
export default function SearchBar({ searchTerm,  onSearchChange, placeholder = "Buscar..." }) {

    return (
        <div className="mb-8 w-full max-w-lg mx-auto">
            <label htmlFor="search-input" className="sr-only">
                {placeholder}
            </label>
            <input id="search-input" type="text" placeholder={placeholder} value={searchTerm} onChange={ (e) => onSearchChange(e.target.value)} aria-label={placeholder} 
                className="search-bar"
            />
        </div>
    );
}