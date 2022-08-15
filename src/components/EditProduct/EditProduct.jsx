import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './EditProduct.css';


function EditProduct(){
const dispatch = useDispatch();
const history = useHistory();

 const params = useParams(); // to get the id 
const editProduct = useSelector((store)=> store.productDeets);
// use states for the store
const [productName, setProductName] = useState('');
const [productDiscription, setProductDiscription] = useState('');
const [productPrice, setProductPrice] = useState('');

useEffect(()=>{
    dispatch({
        type: 'FETCH_PRODUCT',
        payload: (params.id),
    })
},[params.id])

const handleSubmit= (event)=>{
    event.preventDefault();
    dispatch({
        type: 'EDIT_PRODUCT',
        payload: editProduct,
    });

    history.push('/admin')
}

    return(
        <div>
<h2>Edit Item</h2>
<input type="text" 
// placeholder ="product name"
// changes the name of the product
value={editProduct.product_name}
onChange={(event) =>
dispatch({
    type: 'UPDATE_SET_PRODUCT_DEETS',
    payload: {product_name: event.target.value},
})
}
/>

<input type="text"
value={editProduct.price}
onChange={(event)=>
dispatch({type: 'UPDATE_SET_PRODUCT_DEETS', 
payload: {price: event.target.value},})}
/>

<input type="text"
value={editProduct.product_discription}
onChange={(event)=> 
dispatch({type: 'UPDATE_SET_PRODUCT_DEETS',
payload:{product_discription: event.target.value},
})}
/>

<button className="finish-edit" onClick={handleSubmit}>finish edit</button>
        </div>
    )
};

export default EditProduct;