import React, { useState, useEffect } from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Navbar, Home, Products, Top20, Contact, Faq, Cart, Checkout, Footer } from './components';
import { commerce } from './lib/commerce';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({ line_items: [] });

    async function fetchProducts() {
        const { data } = await commerce.products.list();

        setProducts(data.sort((a, b) => a.name.localeCompare(b.name)));
    }

    async function fetchCart() {
        setCart(await commerce.cart.retrieve());
    }

    async function handleAddToCart(productId, quantity) {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item);
    }

    async function handleUpdateCartQty(lineItemId, quantity) {
        const cart = await commerce.cart.update(lineItemId, { quantity });

        setCart(cart);
    }

    async function handleRemoveFromCart(lineItemId) {
        const cart = await commerce.cart.remove(lineItemId);

        setCart(cart);
    }

    async function handleEmptyCart() {
        const cart = await commerce.cart.empty();

        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    return (
        <>
            <div className='app'>
                <Navbar totalItems={cart.total_items}/>
                <div className='main'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/shop' element={<Products products={products} onAddToCart={handleAddToCart}/>} />
                        <Route path='/top20' element={<Top20 />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/faq' element={<Faq />} />
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
