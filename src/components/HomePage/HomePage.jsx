import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import ProductItem from '../ProductItem/ProductItem';


// This is the homepage, I need to make boilerplate,
// render products and categories.


function HomePage(){
const history= useHistory();
const dispatch = useDispatch();

// ---product reducer---
const products = useSelector((store)=> store.productReducer)
console.log('is it showing up?', products);
// ---Categories reducer---


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
<h1>Name of store</h1>

<section>  
        {products.map(product => {
            return <ProductItem product={product} key={product.id} />
                })}
                
            </section>
    
</main>

    )
};

export default HomePage;