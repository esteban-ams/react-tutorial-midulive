import { createContext, useState } from "react";

// Crear el contexto
export const FiltersContext = createContext()

// Crear el provider, que provee el contexto a toda la app
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
        <FiltersContext.Provider value={{
            // Aqui se pueden agregar valores iniciales
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}