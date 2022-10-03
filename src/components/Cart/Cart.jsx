import React from "react";
import './cart.css'
import { Link, NavLink } from 'react-router-dom';
import CartItem from "../CartItem/CartItem";

function Cart( { cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart } ) {

    function handleEmptyCart() {
        return (
            onEmptyCart()
        );
    }

    function EmptyCart() {
        return (
            <div>
                <h3>YOUR CART IS EMPTY</h3>
                <Link to='/shop'>YOU CAN ADD OUR PRODUCTS IN THE "SHOP" SECTION</Link>
            </div>
        );
    }

    if (!cart.line_items) return 'Loading';

    function FilledCart() {
        return (
        <>
            <div>
                {cart.line_items.map((item) => (
                    <div key={item.id}>
                        <CartItem item={ item } onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart}/>
                    </div>
                ))}
            </div>
            <h2>SUBTOTAL =</h2>
            <div>{cart.subtotal.formatted_with_symbol}</div>
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
                    <NavLink to='/checkout'>Checkout</NavLink>
                </div>
            </div>
        </section>
    )
}

export default Cart;