import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './WishlistItem.css';

function WishlistItem({wishlistItems}){
    const dispatch= useDispatch();



const handleDelete=()=>{
dispatch({
    type:"DELETE_WISHLIST", 
    payload: wishlistItems.id,
})
}



    return(
        <div>
        
        <section className="wishlistItem-item" >
            <div className="wishlistItemt-card">
                <img className="wishlistItem-image" src={wishlistItems.image} />
            </div>
            <h2 className="wishlistItem-name">{wishlistItems.product_name}</h2>
            <div className="wishlistItem-price">${wishlistItems.price}</div>
            <span className="wishlistItem-btns">
                {/* <Link to={"https://buy.stripe.com/3cs4jd4w53ik28E144"}>
                <button className="checkout-btn">Proceed to Checkout</button>
                </Link> */}
                <button onClick={handleDelete}className="remove-wishlistItem">remove This Item</button>
            </span>
        </section>
    
        </div>
    )
}

export default WishlistItem;