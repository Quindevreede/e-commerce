import React, { useState, useEffect } from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import { Navbar, Home, Products, Cart } from './components';
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

    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();

        setCart(response);
    };

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    // console.log({products});
    console.log(cart);

    return (
        <>
            <Navbar totalItems={cart.total_items}/>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Products products={products} onAddToCart={handleAddToCart}/>} />

                <Route path='/cart' element={<Cart cart={cart} onEmptyCart={handleEmptyCart} />} />
            </Routes>
        </>
  );
}

export default App;
