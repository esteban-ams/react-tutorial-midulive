import { Filters } from "./Filters.jsx";
export function Header({ changeFilters }) {
    return (
        <header>
            <h1>💰 Venta de Productos 🛒</h1>
            <Filters />
        </header>
    );
}