import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from "react-router-dom";
import WishlistItem from '../WishlistItem/WishlistItem';
import ImageList from '@mui/material/ImageList';


function WishlistPage(){
    const history= useHistory();
    const dispatch = useDispatch();
    // const params = useParams();
    const wishlist = useSelector((store)=> store.wishlistReducer); //add this reducer and saga!
    console.log('what is in the wishlist reducer', wishlist);

    useEffect(()=> {
        dispatch({
            type: "FETCH_WISHLIST_ITEMS",
    })
    }, []);

    // useEffect(()=> {
    //     dispatch({
    //         type:'ADD_WISHLIST_ITEMS',
    //         payload: params.id

    //     })
    //     console.log('whats wRONG>>>>>', wishlist);
    // },
    // []);


    return(
        <div>
            <h1>wishlist</h1>
            

<section>
<div>
    <ImageList sx={{ width: 1200, height: 650 }} variant="woven" cols={2} gap={80}>
            {wishlist.map((wishlistItems)=>{
                return <WishlistItem key={wishlistItems.id} wishlistItems={wishlistItems} />
            })}
            </ImageList>
            </div>
</section>
            <Link to="/homepage">
            <button>keep Shopping</button> 
            </Link>
        </div>
    )
};

export default WishlistPage;