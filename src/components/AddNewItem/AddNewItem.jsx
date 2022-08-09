// import React, { useState } from "react";
// import { useDispatch } from "react-redux";

// function AddNewItem(){
// const dispatch = useDispatch();

// // use states for the store
// const [productName, setProductName] = useState();
// const [productDiscription, setProductDiscription] = useState();
// const [productPrice, setProductPrice] = useState();
// const [productImage, setProductImage] = useState();
// const [productCategory, setProductCategory] = useState(); //might use later.

// // this function is for the add product btn
// const handleAddProduct= (event)=>{
// event.preventDefault();
// dispatch({
//     type:"ADD_PRODUCT",
//     payload:{
//         product_name: productName,
//         product_discription: productDiscription,
//         image: productImage,
//         price:productPrice,
//         category: productCategory
//     },
// });
// // to clear inputs after add product btn clicked
// setProductName('');
// setProductDiscription('');
// setProductPrice('');
// setProductImage('');
// setProductCategory('')
// }



//     return(
// <div>

// <div>
// <h3 >Add Product</h3>
// </div>

// <form >
//     <label>Name</label>
//     <input onChange={(event) => setProductName(event.target.value)} value={productName}/>

//     <label>description</label>
//     <textarea onChange={(event) => setProductDiscription(event.target.value)} value={productDiscription}/>

//     <label>image</label>
//     <input onChange={(event) => setProductImage(event.target.value)} value={productImage}/>

//     <label>price</label>
//     <input onChange={(event) => setProductPrice(event.target.value)} value={productPrice}/>
//     <label>category</label>
//     <input onChange={(event) => setProductCategory(event.target.value)} value={productCategory}/>
// <button onClick={handleAddProduct}>Add New Button</button>

// </form>


// </div>
//     )
// }

// export default AddNewItem;