import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


// This is the homepage, I need to make boilerplate,
// render products and categories.


function HomePage(){
const history= useHistory();
const dispatch = useDispatch();

// ---product reducer---
const products = useSelector((store)=> store.productReducer)
// ---Categories reducer---


// ---DISPATCH---

useEffect(()=> {
    dispatch({type:'FETCH_PRODUCT'})
}, []);



    return(
<main>
<h1>Name of store</h1>

<section>
        {products.map(products => {
            return (
        <div key={products.id} >
                            <h3>{product.product_name}</h3>
                            <img src={product.image} alt={product.product_name}/>
                        </div>
                    );
                })}
            </section>
    
</main>

    )
};

export default HomePage;