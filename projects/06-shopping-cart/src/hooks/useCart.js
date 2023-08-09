import { useContext } from 'react'
import { CartContex } from "../context/cart.jsx";

export const useCart = () => {
    const context = useContext(CartContex);

    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context
}