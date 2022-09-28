import React from "react";
import './cart.css'
import CartItem from "../CartItem/CartItem";

function Cart( { cart, onEmptyCart } ) {

    function handleEmptyCart() {
        onEmptyCart();
    }

    function EmptyCart() {
        return (
        <h3>YOUR CART IS EMPTY, YOU CAN ADD OUR PRODUCTS IN THE "STORE" SECTION</h3>
        )
    };

    if (!cart.line_items) return 'Loading';

    function FilledCart() {
        return (
        <>
            <div>
                {cart.line_items.map((item) => (
                    <div key={item.id}>
                        <CartItem item={ item }/>
                        <div>{cart.subtotal.formatted_with_symbol}</div>
                    </div>
                ))}
            </div>
        </>
        );
    }

    return (
        <section className='cart__container'>
            <h2>YOUR SHOPPING CART:</h2>
                { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }

            <div className='cart-buttons__container'>
                <div>
                    <button className='emptyButton' type="button" onClick={handleEmptyCart}>Empty cart</button>
                    <button className='checkoutButton' type="button">Checkout</button>
                </div>
            </div>
        </section>
    )
}

export default Cart;