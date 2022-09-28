import React from "react";
import './product.css';
import cartIcon from '../../../assets/shop_cart1.png';

function Product({ product, onAddToCart }) {

    const handleAddToCart = async () => onAddToCart(product.id, 1);

    return (
            <main className='card__container'>
                    <div className='image--front__container'>
                        <img src={product.image.url} alt={product.name} />
                    </div>
                    <div className='card--price__container'>
                                <h2>€ {product.price.formatted}</h2>
                    </div>
                    <div className='card--content__container'>
                        <h1>{product.name}</h1>
                        <h2>{product.seo.title}</h2>
                    </div>
                <p dangerouslySetInnerHTML={{__html: product.description}} />
                <div className='card-actions__container'>
                <button className='add-to-cart--button' onClick={handleAddToCart}>
                    <img src={cartIcon} alt='cart' />
                </button>
                </div>
            </main>
    )
}

export default Product;