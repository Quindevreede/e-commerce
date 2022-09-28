import React from "react";

function CartItem( { item } ) {
    return (
        <div className='cart-item__container'>
            <div className='cart-item--img__container'>
                <img src={item.image.url} alt={item.name} />
            </div>
            <div className='cart-item--content__container'>
                <h4>{item.name}</h4>
                <h5>{item.line_total.formatted_with_symbol}</h5>
            </div>
            <div className='cart-items-button__container'>
                    <button type="button">-</button>
                    <p>{item.quantity}&nbsp;</p>
                    <button type="button">+</button>
                <button type="button">Remove</button>
            </div>
        </div>
    );
}

export default CartItem;