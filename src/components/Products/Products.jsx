import React from "react";
import './Product/product.css';
import Product from "./Product/Product";

function Products( { products, onAddToCart }) {
    if (!products.length) return <p>Loading...</p>;

    return(
        <>
            <section className="outer-content__container">
                <div className="inner-content__container">
                    <main className='product__container'>
                        {products.map((product) => (
                            <div key={product.id}>
                                <Product product={product} onAddToCart={onAddToCart} />
                            </div>
                        ))}
                    </main>
                </div>
            </section>
        </>
    )
}

export default Products;