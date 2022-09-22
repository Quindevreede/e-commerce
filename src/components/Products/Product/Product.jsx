import React from "react";
import './product.css';
import { CardMedia, CardContent, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

function Product( {product} ) {
    return (
            <main className='card__container'>
                <CardMedia className='media__container' title={product.name} component='div'
                />
                <CardContent>
                    <div className='image--front__container'>
                        <img src={product.image} alt={product.alt} />
                    </div>
                    <div className='card--price__container'>
                            <div>
                                <h2>{product.price}</h2>
                            </div>
                    </div>
                    <div className='card--content__container'>
                        <h1>{product.name}</h1>
                        <h2>{product.title}</h2>
                    </div>
                    <Typography className='description' variant='p' color='textSecondary'>
                        {product.description}
                    </Typography>
                </CardContent>
                <div className='card-actions__container'>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart />
                </IconButton>
                </div>
            </main>
    )
}

export default Product;