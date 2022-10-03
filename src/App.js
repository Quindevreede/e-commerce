import React, { useState, useEffect } from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import { Navbar, Start, Home, Products, Cart, Checkout, Footer } from './components';
import { commerce } from './lib/commerce';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({ line_items: [] });

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data.sort((a, b) => a.name.localeCompare(b.name)));
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item);
    };

    const handleUpdateCartQty = async (lineItemId, quantity) => {
        const cart = await commerce.cart.update(lineItemId, { quantity });

        setCart(cart);
    };

    const handleRemoveFromCart = async (lineItemId) => {
        const cart = await commerce.cart.remove(lineItemId);

        setCart(cart);
    };

    const handleEmptyCart = async () => {
        const cart = await commerce.cart.empty();

        setCart(cart);
    };

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    // console.log({products});
    console.log(cart);

    return (
        <>
            <div className='app'>
            <Navbar totalItems={cart.total_items}/>
            <div className='main'>
            <Routes>
                <Route path='/' element={<Start />} />
                <Route path='/home' element={<Home />} />
                <Route path='/shop' element={<Products products={products} onAddToCart={handleAddToCart}/>} />
                <Route path='/cart' element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} />
                <Route path='/checkout' element={<Checkout cart={cart} onEmptyCart={handleEmptyCart}/>} />

            </Routes>
            </div>
            </div>
                <Footer />
        </>
  );
}

export default App;
