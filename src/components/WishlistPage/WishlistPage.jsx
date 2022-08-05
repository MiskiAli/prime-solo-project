import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

function WishlistPage(){
    const history= useHistory();
    const wishlist = useSelector((store)=> store.wishlist); //add this reducer and saga!

    return(
        <div>
            <h1>wishlist page!!</h1>
            {/* <section>  
        {products.map(product => {
            return <ProductItem product={product} key={product.id} />
                })}
                
            </section> */}

            <Link to="/homepage">
            <button>back to home</button> 
            </Link>

            {/* make sure to add funtion */}
        </div>
    )
};

export default WishlistPage;