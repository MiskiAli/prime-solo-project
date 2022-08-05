import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function ProductDetails(){
const history = useHistory();
const dispatch = useDispatch();
// to get the id of a specific product
const params = useParams();

// ---useSelector---
const productDetails = useSelector((store)=> store.productDeets);


useEffect(()=>{
    dispatch({
        type: 'SET_PRODUCT_DEETS',
        payload: params.id,

    })
},[params.id])

// const addToWishlist = ()=> {
// // set the type its suposed to go to
// dispatch({ 
//     type: 'ADD_TO_WISHLIST',
//     payload:{
//         id: productDetails.id,
//         price: productDetails.price,
//         name: productDetails.product_name,
//         image: productDetails.image,
//         description: productDetails.product_discription,
//     },

//     })
// }


return(
<>
<section>
<h2 className="product-name">{productDetails.product_name}</h2>
<div className="product-card">
                <img className="product-image" src={productDetails.image} />
            </div>
            <div className="product-description">{productDetails.product_discription}</div>
            <div className="product-price">${productDetails.price}</div>
            </section>
            <button  >Continue Shopping</button>
            {/* <button onClick={addToWishlist} className="add-to-wishlist" >add to wishlist</button> */}
</>
)

}

export default ProductDetails;