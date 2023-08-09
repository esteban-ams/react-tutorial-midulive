import { useId } from "react";
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons.jsx";
import './Cart.css'
import { useCart } from "../hooks/useCart.js";

function CartItem({ thumbnail, price, title, quantity, addToCart, subtractFromCart }) {
    return (
        <li>
            <img
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <button onClick={subtractFromCart} type="button">-</button>
                <small>
                    {quantity}
                </small>
                <button onClick={addToCart} type="button">+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckboxId = useId()
    const { cart, addToCart, subtractFromCart, clearCart } = useCart()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            {...product}
                            addToCart={() => addToCart(product)}
                            subtractFromCart={() => subtractFromCart(product)}
                        />
                    ))}
                </ul>
                <button onClick={clearCart} type="button">
                    <ClearCartIcon />
                </button>

            </aside>
        </>
    )
}