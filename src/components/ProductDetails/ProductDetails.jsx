import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';

// styling imports
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddIcon from '@mui/icons-material/Add';
import Swal from 'sweetalert2'


function ProductDetails(){
const history = useHistory();
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

    });


    history.push('/wishlist');

}

const backHome = ()=>{
    history.push('/homepage')
}

return(
<div>
<p className="disclaimer">Please login to save to your wishlist</p>

<section>


<h2 className="product-name">{productDetails.product_name}</h2>
<div>
    <img className="product-image" src={productDetails.image} />
        </div>
    <p className="product-description">{productDetails.product_discription}</p>
        <h2 className="product-price">${productDetails.price}</h2>
            </section>
            <button onClick={backHome}className="back-to-home">Continue Shopping</button>
            <button onClick={addToWishlist} className="add-to-wishlist" >Add to Wishlist</button>
</div>
)

}

export default ProductDetails;