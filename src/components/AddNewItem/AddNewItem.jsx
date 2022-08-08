import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddNewItem(){
const dispatch = useDispatch();
// use states for the store
const [productName, setProductName] = useState();
const [productDiscription, setProductDiscription] = useState();
const [productPrice, setProductPrice] = useState();
const [productImage, setProductImage] = useState();
// const [prodcutCategory, setProdcutCategory] = useState(); might use later.

// this function is for the add product btn
const handleAddProduct= (event)=>{
event.preventDefault();
dispatch({
    type:"ADD_PRODUCT",
    payload:{
        product_name: productName,
        product_discription: productDiscription,
        image: productImage,
        price:productPrice, 
    },
});

// to clear inputs after add product btn clicked
setProductName('');
setProductDiscription('');
setProductPrice('');
setProductImage('');
}

const autoUpdate =()=>{
    setProductName("All Black Abaya");
    setProductDiscription("long all black abaya set (small)");
    // setProductImage
    setProductPrice('60');
}


    return(
<div>

<div>
<h3 onClick={autoUpdate}>Add Product</h3>
</div>

<form onClick={handleAddProduct}>
    {/* <lable>Name</lable> */}
    <input onChange={(event) => setProductName(event.target.value)} value={productName}/>

    {/* <lable>description</lable> */}
    <textarea onChange={(event) => setProductDiscription(event.target.value)} value={productDiscription}/>

    {/* <lable>image</lable> */}
    <input onChange={(event) => setProductImage(event.target.value)} value={productImage}/>

    {/* <lable>price</lable> */}
    <input onChange={(event) => setProductPrice(event.target.value)} value={productPrice}/>

</form>


</div>
    )
}

export default AddNewItem;