export const cartInitialState = []


export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    SUBTRACT_FROM_CART: 'SUBTRACT_FROM_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action
    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART: {
            const { id } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState
            }

            return [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]
        }
        case CART_ACTION_TYPES.SUBTRACT_FROM_CART: {
            const { id } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex > 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity -= 1
                if (newState[productInCartIndex].quantity === 0) {
                    return newState.filter(item => item.id !== id)
                }
                return newState
            }


        }
        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            const { id } = actionPayload
            return state.filter(item => item.id !== id)

        }
        case CART_ACTION_TYPES.CLEAR_CART: {
            return cartInitialState
        }
    }
}