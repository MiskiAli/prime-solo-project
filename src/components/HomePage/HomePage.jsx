import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import ProductItem from '../ProductItem/ProductItem';
import './Homepage.css';
// MUI imports
import ImageList from '@mui/material/ImageList';

function HomePage(){
const history= useHistory();
const dispatch = useDispatch();

// ---product reducer---
const products = useSelector((store)=> store.productReducer)
console.log('is it showing up?', products);

// ---DISPATCH---

useEffect(()=> {
    dispatch({type:'FETCH_PRODUCT'})
}, []);

//handle submit goes to details page
// const handleSubmit = (id) => {
// console.log('the product has been clicked',id);
//     const details = id
//     dispatch({
//         type:'FETCH_PRODUCT_DEETS',
//         payload: details,
    
//     })
// }



    return(
<main>

<section className="productBox"> 
<ImageList sx={{ width: 1300, height: 750 }} variant="woven" cols={4} gap={80}>
        {products.map(product => {
            return <ProductItem product={product} key={product.id} />
                })}
                </ImageList>
            </section>
    
</main>

    )
};

export default HomePage;