import React from "react";
import { Grid } from '@material-ui/core';
import Product from "./Product/Product";

const products = [
    { id: 1, name: 'Shoes', description: ' Running shoes.', price: '$11,11' },
    { id: 2, name: 'Macbook', description: ' Apple Mac.', price:'$22,22' },
    { id: 3, name: 'Else', description: ' Something else.', price:'$33,33' }
]

function Products() {
    return(
    <main>
        <Grid container justifyContent='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} lg={3}>
                <Product product={product} />
                </Grid>
                ))}
        </Grid>
    </main>
    )
}

export default Products;