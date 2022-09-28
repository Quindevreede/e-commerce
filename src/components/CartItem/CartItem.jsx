import React from "react";

function CartItem( { item, onUpdateCartQty, onRemoveFromCart } ) {
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
                    <button type="button" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                    <p>{item.quantity}&nbsp;</p>
                    <button type="button" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                <button type="button" onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </div>
        </div>
    );
}

export default CartItem;