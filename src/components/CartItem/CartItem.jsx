import React from 'react';
import './cartItem.css';
import Button from '../Button/Button';

function CartItem( { item, onUpdateCartQty, onRemoveFromCart } ) {

    return (
        <div className='cart-item__container'>
            <div className='cart-item--img__container'>
                <img src={item.image.url} alt={item.name} />
            </div>
            <div className='cart-item--content__container'>

                <div className='cart-items-button__container'>
                    <div className='cart-items-button--amount__container'>
                        <button type='button' onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                        <p>&nbsp;{item.quantity}&nbsp;</p>
                        <button type='button' onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                    </div>
                </div>
                <div className='cart-items-remove-button'>
                    <Button
                        buttonStyle='btn--cart-remove'
                        buttonSize='btn--small'
                        type='button'
                        onClick={() => onRemoveFromCart(item.id)}
                    >
                        REMOVE
                    </Button>
                </div>
            </div>
            <h5 className='cart--amount'>{item.line_total.formatted_with_symbol}</h5>
        </div>
    );
}

export default CartItem;