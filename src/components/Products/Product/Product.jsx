import React from "react";
import './product.css';
import cartIcon from '../../../assets/shop_cart1.png';

function Product( {product} ) {
    return (
            <main className='card__container'>
                    <div className='image--front__container'>
                        <img src={product.image} alt={product.alt} />
                    </div>
                    <div className='card--price__container'>
                                <h2>{product.price}</h2>
                    </div>
                    <div className='card--content__container'>
                        <h1>{product.name}</h1>
                        <h2>{product.title}</h2>
                    </div>
                    <p className='description'>
                        {product.description}
                    </p>
                <div className='card-actions__container'>
                <button className='add-to-cart--button'>
                    <img src={cartIcon} alt='cart' />
                </button>
                </div>
            </main>
    )
}

export default Product;