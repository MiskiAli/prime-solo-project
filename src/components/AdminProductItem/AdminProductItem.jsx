import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; 


function AdminProductItem({product}){
// const dispatch = useDispatch();

const deleteInventory= () =>{
// add deleteInventory functionality
}


    return(
<div>
<section className="product-item" >
            <div className="product-card">
                <img className="product-image" src={product.image} />
            </div>
            <h2 className="product-name">{product.product_name}</h2>
            <div className="product-price">${product.price}</div>
            <span className="product-btns">
                <button onClick={deleteInventory} className="delete-inventory">delete This Item</button>
                
            </span>
        </section>

</div>
    )
}
export default AdminProductItem;