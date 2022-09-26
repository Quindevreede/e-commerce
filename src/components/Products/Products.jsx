import React from "react";
import './Product/product.css';
import lp from "./Product/dataProduct";
import Product from "./Product/Product";

const { id, image, name, title, description, price } = lp;

function Products() {
    return(
        <>
            <section className="outer-content__container">
                <div className="inner-content__container">
                    <main className='product__container'>
                        {lp.map((product) => (
                            <div key={product.id}>
                                <Product product={product} />
                            </div>
                        ))}
                    </main>
                </div>
            </section>
        </>
    )
}

export default Products;