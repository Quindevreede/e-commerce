import React from 'react';
import './cart.css'
import { Link, NavLink } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

function Cart( { cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart } ) {

    function handleEmptyCart() {
        return (
            onEmptyCart()
        );
    }

    function EmptyCart() {
        return (
            <div className='empty-cart'>
                <h3>-- YOUR CART IS EMPTY --</h3>
                <p className='empty-cart-text'>YOU CAN ADD OUR PRODUCTS IN THE
                    <Link to='/shop'> "SHOP" </Link> SECTION</p>
            </div>
        );
    }

    if (!cart.line_items) return 'Loading';

    function FilledCart() {
        return (
            <>
                {cart.line_items.map((item) => (
                    <div className='shop--cart__container' key={item.id}>
                        <CartItem item={ item } onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart}/>
                    </div>
                ))}
                <div className='total--price'>
                    <h2>SUBTOTAL = &nbsp;</h2> <h2><strong>{cart.subtotal.formatted_with_symbol}</strong></h2>
                </div>
                <div className='checkout-button'>
                    <NavLink to='/checkout'>CHECKOUT</NavLink>
                </div>
            </>
        );
    }

    return (
        <section className='outer-content__container'>
            <div className='inner-content__container'>
                <main className='cart-top__container'>
                    <h1 className='top-title'>SHOPPING CART</h1>
                    <div className='line'></div>
                    <div className='cart__container'>
                        { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
                    </div>
                </main>
            </div>
        </section>
    );
}

export default Cart;