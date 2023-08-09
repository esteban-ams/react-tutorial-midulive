import { createContext, useReducer, useState } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart'

export const CartContex = createContext()

function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (product) => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const subtractFromCart = (product) => dispatch({
        type: 'SUBTRACT_FROM_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART',
    })


    return { state, addToCart, subtractFromCart, removeFromCart, clearCart }
}

export function CartProvider({ children }) {
    const { state, addToCart, subtractFromCart, removeFromCart, clearCart } = useCartReducer()

    return (
        <CartContex.Provider value={{
            cart: state,
            addToCart,
            subtractFromCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContex.Provider>
    )
}