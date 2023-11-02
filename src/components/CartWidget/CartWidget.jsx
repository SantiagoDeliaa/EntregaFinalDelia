import React from 'react'
import cart from './assets/cart.svg'

export default function CartWidget() {
    return (
        <div>
            <img src={cart} alt="cart-widget"/>
            0
        </div>
    )
}
