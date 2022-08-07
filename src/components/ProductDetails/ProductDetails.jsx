import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import ProductDetailsItem from '../ProductDetailsItem/ProductDetailsItem';


function ProductDetails(){
// const history = useHistory();
const dispatch = useDispatch();
// to get the id of a specific product
const params = useParams();
// console.log('what is parms',params.id);
// ---useSelector---
const productDetails = useSelector((store)=> store.productDeets);
console.log('what is in this reducer?', productDetails)

useEffect(()=>{
    dispatch({
        type: "FETCH_PRODUCT_DEETS",
        payload: (params.id),

    })
    dispatch({type:"ADD_WISHLIST_ITEMS"})
},[params.id])


// This is to store the product in the wishlist
const addToWishlist = ()=> {
// set the type its suposed to go to
dispatch({ 
    type: 'ADD_WISHLIST_POST',
    payload:
    {
        id: productDetails.id,
        price: productDetails.price,
        name: productDetails.product_name,
        image: productDetails.image,
        description: productDetails.product_discription,
    },

    })
}


return(
<>

<section>


<h2 className="product-name">{productDetails.product_name}</h2>
<div className="product-card">
                <img className="product-image" src={productDetails.image} />
            </div>
            <p className="product-description">{productDetails.product_discription}</p>
            <h3 className="product-price">${productDetails.price}</h3>
            </section>
            <Link to={'/homepage'}>
            <button  >Continue Shopping</button>
            </Link>
            <Link to={'/wishlist'}>
            <button onClick={addToWishlist} className="add-to-wishlist" >add to wishlist</button>
            </Link>
</>
)

}

export default ProductDetails;