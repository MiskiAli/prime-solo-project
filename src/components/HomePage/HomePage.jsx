import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


// This is the homepage, I need to make boilerplate,
// render products and categories.


function HomePage(){
const history= useHistory();
const dispatch = useDispatch();

// ---product reducer---
const products= useSelector((store)=> store.productReducer)
// ---Categories reducer---

// ---ROUTE---

    return(
<main>

<h1>Name of store</h1>

</main>

    )
};

export default HomePage;