import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

export function Products({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkIfInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.slice(0, 10).map(product => {
                    const isProductInCart = checkIfInCart(product)

                    return (
                        <li key={product.id} className='product'>
                            <img src={product.thumbnail} alt={product.title} />
                            <div className='product-info'>
                                <strong>
                                    <h2>{product.title} - ${product.price}</h2>
                                </strong>
                            </div>
                            <div>
                                <button
                                    style={{
                                        backgroundColor: isProductInCart ? 'red' : '#09f',
                                    }}
                                    onClick={() => {
                                        isProductInCart
                                            ? removeFromCart(product)
                                            : addToCart(product)
                                    }}>
                                    {
                                        isProductInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}