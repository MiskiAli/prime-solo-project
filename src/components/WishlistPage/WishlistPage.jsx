import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from "react-router-dom";
import WishlistItem from '../WishlistItem/WishlistItem';


function WishlistPage(){
    const history= useHistory();
    const dispatch = useDispatch();
    // const params = useParams();
    const wishlist = useSelector((store)=> store.wishlistReducer); //add this reducer and saga!
    console.log('what is in the wishlist reducer', wishlist);

    // useEffect(()=> {
    //     dispatch({
    //         type:'ADD_WISHLIST_ITEMS',
    //         payload: (params.id)
          
    //     })
    //     console.log('whats wRONG>>>>>', wishlist);
    // },
    //  [params.id]);


    return(
        <div>
            <h1>wishlist page!!</h1>
            <h3>{}</h3>
<section>

            {wishlist.map((wishlistItems)=>{
                return <WishlistItem key={wishlistItems.id} wishlistItems={wishlistItems} />
            })}
</section>

            <Link to="/homepage">
            <button>keep Shopping</button> 
            </Link>

            {/* make sure to add funtion */}
        </div>
    )
};

export default WishlistPage;