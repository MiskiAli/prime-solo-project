import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

function WishlistPage(){
    const history= useHistory();
    const wishlist = useSelector((store)=> store.wishlist); //add this reducer and saga!

    return(
        <div>
            <h1>wishlist page!!</h1>

            <button>back to home</button> 
            {/* make sure to add funtion */}
        </div>
    )
};

export default WishlistPage;