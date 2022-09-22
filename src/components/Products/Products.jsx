import React from "react";
import lp from "./Product/dataProduct";
import { Grid } from '@material-ui/core';
import Product from "./Product/Product";

const { id, image, name, title, description, price } = lp;

function Products() {
    return(
    <main className='product__container'>
        <Grid container justifyContent='center' spacing={4}>
            {lp.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} lg={3}>
                <Product product={product} />
                </Grid>
                ))}
        </Grid>
    </main>
    )
}

export default Products;