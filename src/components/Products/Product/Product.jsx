import React from "react";
import './product.css';
import { CardMedia, CardContent, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

function Product( {product} ) {
    return (
            <main className='card__container'>
                <CardMedia className='media__container' image='' title={product.name} component='div'
                />
                <CardContent>
                    <div className='card--content__container'>
                            <div>
                                <h1>{product.name}</h1>
                            </div>
                            <div>
                                <h2>{product.price}</h2>
                            </div>
                    </div>
                    <Typography variant='h2' color='textSecondary'>
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